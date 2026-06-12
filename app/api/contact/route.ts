import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// ─── In-memory rate limiter ────────────────────────────────────────────────────
// Allows 3 submissions per IP every 10 minutes
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 min
const ipMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = ipMap.get(ip);

  if (!record || now > record.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true; // allowed
  }

  if (record.count >= RATE_LIMIT_MAX) return false; // blocked

  record.count++;
  return true; // allowed
}

// ─── Sanitization helpers ──────────────────────────────────────────────────────

/** Strip all HTML tags and trim whitespace */
function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

/** Escape HTML special characters to prevent injection in email HTML body */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

/** Sanitize a single line field: strip HTML, remove newlines (prevents header injection) */
function sanitizeField(value: string): string {
  return stripHtml(value)
    .replace(/[\r\n\t]/g, " ") // remove line breaks — prevents SMTP header injection
    .slice(0, 300);            // hard cap length
}

/** Sanitize a multi-line field (textarea): strip HTML but allow newlines */
function sanitizeMultiline(value: string): string {
  return stripHtml(value).slice(0, 3000);
}

// ─── Allowed values whitelists ─────────────────────────────────────────────────
const ALLOWED_COUNTRIES = new Set([
  "India","United States","United Kingdom","Australia","Canada",
  "United Arab Emirates","Singapore","Saudi Arabia","Germany","France","Other",
]);

const ALLOWED_SERVICES = new Set([
  "TMC Analysis","Vehicle Classification","Pedestrian Count","Cyclist Count",
  "Queue & Delay Analysis","ANPR Processing","Event Log Analysis",
  "Parking Survey","Highway Traffic Survey","Custom Traffic Analysis",
]);

// ─── Zod schema ────────────────────────────────────────────────────────────────
const schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .regex(/^[\p{L}\p{M}\s.'\-]+$/u, "Name contains invalid characters"),

  company: z
    .string()
    .min(1, "Company name is required")
    .max(150, "Company name is too long"),

  email: z
    .string()
    .email("Invalid email address")
    .max(254, "Email is too long"),

  phone: z
    .string()
    .min(5, "Phone number is too short")
    .max(20, "Phone number is too long")
    .regex(/^[+\d\s\-().]+$/, "Phone contains invalid characters"),

  country: z
    .string()
    .refine((v) => ALLOWED_COUNTRIES.has(v), { message: "Invalid country selected" }),

  services: z
    .string()
    .max(500)
    .optional()
    .refine((v) => {
      if (!v) return true;
      return v.split(", ").every((s) => ALLOWED_SERVICES.has(s));
    }, { message: "Invalid service selected" }),

  location: z
    .string()
    .min(2, "Location is required")
    .max(300, "Location is too long"),

  requirement: z
    .string()
    .max(3000, "Requirement text is too long")
    .optional(),

  deliveryDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format")
    .refine((v) => new Date(v) > new Date(), { message: "Delivery date must be in the future" }),
});

// ─── Route handler ─────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  // 1. Get client IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  // 2. Rate limit check
  if (!checkRateLimit(ip)) {
    return Response.json(
      { success: false, error: "Too many submissions. Please wait 10 minutes before trying again." },
      { status: 429 }
    );
  }

  // 3. Content-type guard — must be multipart/form-data
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("multipart/form-data") && !contentType.includes("application/x-www-form-urlencoded")) {
    return Response.json(
      { success: false, error: "Invalid request format." },
      { status: 415 }
    );
  }

  // 4. Parse form data
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json(
      { success: false, error: "Could not parse form data." },
      { status: 400 }
    );
  }

  // 5. Extract raw values
  const raw = {
    name:         formData.get("name"),
    company:      formData.get("company"),
    email:        formData.get("email"),
    phone:        formData.get("phone"),
    country:      formData.get("country"),
    services:     formData.get("services"),
    location:     formData.get("location"),
    requirement:  formData.get("requirement"),
    deliveryDate: formData.get("deliveryDate"),
  };

  // 6. Ensure all required values are strings (not File objects / null)
  const OPTIONAL_FIELDS = new Set(["services", "requirement"]);
  for (const [key, val] of Object.entries(raw)) {
    if (OPTIONAL_FIELDS.has(key)) continue; // optional fields
    if (typeof val !== "string" || val.trim() === "") {
      return Response.json(
        { success: false, error: `Missing or invalid field: ${key}` },
        { status: 400 }
      );
    }
  }

  // 7. Sanitize before validation
  const sanitized = {
    name:         sanitizeField(raw.name as string),
    company:      sanitizeField(raw.company as string),
    email:        sanitizeField(raw.email as string).toLowerCase(),
    phone:        sanitizeField(raw.phone as string),
    country:      sanitizeField(raw.country as string),
    services:     raw.services ? sanitizeField(raw.services as string) : undefined,
    location:     sanitizeField(raw.location as string),
    requirement:  raw.requirement ? sanitizeMultiline(raw.requirement as string) : undefined,
    deliveryDate: sanitizeField(raw.deliveryDate as string),
  };

  // 8. Zod validation
  const result = schema.safeParse(sanitized);
  if (!result.success) {
    const firstError = result.error.issues[0]?.message ?? "Validation failed.";
    return Response.json(
      { success: false, error: firstError },
      { status: 422 }
    );
  }

  const data = result.data;

  // 9. Build safe email content (HTML-escaped values)
  const e = {
    name:         escapeHtml(data.name),
    company:      escapeHtml(data.company),
    email:        escapeHtml(data.email),
    phone:        escapeHtml(data.phone),
    country:      escapeHtml(data.country),
    services:     escapeHtml(data.services ?? "Not specified"),
    location:     escapeHtml(data.location),
    requirement:  escapeHtml(data.requirement).replace(/\n/g, "<br>"),
    deliveryDate: escapeHtml(data.deliveryDate),
  };

  const textBody = `
New Contact / Quote Request — HIFI Traffic Data Tech
=====================================================

CONTACT DETAILS
Full Name  : ${data.name}
Company    : ${data.company}
Email      : ${data.email}
Phone      : ${data.phone}
Country    : ${data.country}

PROJECT DETAILS
Services   : ${data.services ?? "Not specified"}
Location   : ${data.location}
Delivery   : ${data.deliveryDate}

REQUIREMENT
${data.requirement}

-----------------------------------------------------
Submitted from: hifitrafficdatatech.com | IP: ${ip}
  `.trim();

  const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>
  body{font-family:Arial,sans-serif;color:#1a1a2e;background:#f8fafc;margin:0;padding:0}
  .container{max-width:640px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0}
  .header{background:#07193f;padding:32px 40px}
  .header h1{color:#fff;margin:0;font-size:22px;font-weight:700}
  .header p{color:#94a3b8;margin:6px 0 0;font-size:14px}
  .accent{color:#F57C00}
  .body{padding:32px 40px}
  .section-title{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#F57C00;margin:0 0 12px;border-bottom:2px solid #FFF3E0;padding-bottom:6px}
  .field{margin-bottom:12px;display:flex;gap:12px}
  .label{font-size:13px;font-weight:600;color:#64748b;width:160px;flex-shrink:0}
  .value{font-size:14px;color:#0f172a;flex:1}
  .divider{border:none;border-top:1px solid #e2e8f0;margin:24px 0}
  .footer{background:#f1f5f9;padding:18px 40px;font-size:12px;color:#94a3b8;text-align:center}
  .meta{font-size:11px;color:#cbd5e1;margin-top:4px}
</style></head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Enquiry — <span class="accent">HIFI Traffic Data Tech</span></h1>
      <p>A client submitted a request via the website contact form.</p>
    </div>
    <div class="body">
      <p class="section-title">Contact Details</p>
      <div class="field"><span class="label">Full Name</span><span class="value">${e.name}</span></div>
      <div class="field"><span class="label">Company</span><span class="value">${e.company}</span></div>
      <div class="field"><span class="label">Email</span><span class="value"><a href="mailto:${e.email}" style="color:#F57C00">${e.email}</a></span></div>
      <div class="field"><span class="label">Phone</span><span class="value">${e.phone}</span></div>
      <div class="field"><span class="label">Country / Region</span><span class="value">${e.country}</span></div>
      <hr class="divider"/>
      <p class="section-title">Project Details</p>
      <div class="field"><span class="label">Services Required</span><span class="value">${e.services}</span></div>
      <div class="field"><span class="label">Survey Location</span><span class="value">${e.location}</span></div>
      <div class="field"><span class="label">Delivery Date</span><span class="value">${e.deliveryDate}</span></div>
      <hr class="divider"/>
      <p class="section-title">Project Requirement</p>
      <p style="font-size:14px;color:#0f172a;line-height:1.7">${e.requirement}</p>
    </div>
    <div class="footer">
      Sent from hifitrafficdatatech.com
      <div class="meta">Submitter IP: ${ip}</div>
    </div>
  </div>
</body>
</html>
  `.trim();

  // 10. Send email
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Safe subject — no user-supplied unescaped data
    const safeSubject = `New Enquiry: ${data.name} — ${data.company} (${data.country})`
      .replace(/[\r\n]/g, "");

    await transporter.sendMail({
      from: `"HIFI Traffic Website" <${process.env.SMTP_USER}>`,
      to:      process.env.CONTACT_EMAIL ?? "hifitrafficdatatech@gmail.com",
      replyTo: data.email,
      subject: safeSubject,
      text:    textBody,
      html:    htmlBody,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form mailer error:", error);
    return Response.json(
      { success: false, error: "Failed to send your message. Please email us directly." },
      { status: 500 }
    );
  }
}
