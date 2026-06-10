import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const country = formData.get("country") as string;
    const services = formData.get("services") as string;
    const location = formData.get("location") as string;
    const requirement = formData.get("requirement") as string;
    const deliveryDate = formData.get("deliveryDate") as string;

    // Build plain-text email body
    const textBody = `
New Contact / Quote Request from HIFI Traffic Data Tech Website
===============================================================

CONTACT DETAILS
---------------
Full Name       : ${name}
Company         : ${company}
Email           : ${email}
Phone           : ${phone}
Country         : ${country}

PROJECT DETAILS
---------------
Services Required  : ${services || "Not specified"}
Survey Location    : ${location}
Project Requirement: ${requirement}
Delivery Date      : ${deliveryDate}

---------------------------------------------------------------
This message was sent from the Contact Us form on hifitrafficdatatech.com
    `.trim();

    const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>
  body { font-family: Arial, sans-serif; color: #1a1a2e; background: #f8fafc; margin: 0; padding: 0; }
  .container { max-width: 640px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
  .header { background: #07193f; padding: 32px 40px; }
  .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; }
  .header p { color: #94a3b8; margin: 6px 0 0; font-size: 14px; }
  .accent { color: #F57C00; }
  .body { padding: 32px 40px; }
  .section-title { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #F57C00; margin: 0 0 12px; border-bottom: 2px solid #FFF3E0; padding-bottom: 6px; }
  .field { margin-bottom: 12px; display: flex; gap: 12px; }
  .label { font-size: 13px; font-weight: 600; color: #64748b; width: 160px; flex-shrink: 0; }
  .value { font-size: 14px; color: #0f172a; flex: 1; }
  .divider { border: none; border-top: 1px solid #e2e8f0; margin: 24px 0; }
  .footer { background: #f1f5f9; padding: 18px 40px; font-size: 12px; color: #94a3b8; text-align: center; }
</style></head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Enquiry — <span class="accent">HIFI Traffic Data Tech</span></h1>
      <p>A client has submitted a request via the website contact form.</p>
    </div>
    <div class="body">
      <p class="section-title">Contact Details</p>
      <div class="field"><span class="label">Full Name</span><span class="value">${name}</span></div>
      <div class="field"><span class="label">Company</span><span class="value">${company}</span></div>
      <div class="field"><span class="label">Email</span><span class="value"><a href="mailto:${email}" style="color:#F57C00">${email}</a></span></div>
      <div class="field"><span class="label">Phone</span><span class="value">${phone}</span></div>
      <div class="field"><span class="label">Country / Region</span><span class="value">${country}</span></div>
      <hr class="divider" />
      <p class="section-title">Project Details</p>
      <div class="field"><span class="label">Services Required</span><span class="value">${services || "<em>Not specified</em>"}</span></div>
      <div class="field"><span class="label">Survey Location</span><span class="value">${location}</span></div>
      <div class="field"><span class="label">Delivery Date</span><span class="value">${deliveryDate}</span></div>
      <hr class="divider" />
      <p class="section-title">Project Requirement</p>
      <p style="font-size:14px; color:#0f172a; line-height:1.7; white-space:pre-line;">${requirement}</p>
    </div>
    <div class="footer">This email was generated automatically from the Contact Us form on hifitrafficdatatech.com</div>
  </div>
</body>
</html>
    `.trim();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"HIFI Traffic Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "info@hifitrafficdatatech.com",
      replyTo: email,
      subject: `New Enquiry from ${name} — ${company} (${country})`,
      text: textBody,
      html: htmlBody,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return Response.json(
      { success: false, error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
