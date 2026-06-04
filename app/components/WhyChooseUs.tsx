"use client";

import React from "react";
import Image from "next/image";
import { Target, Globe, ShieldCheck, Timer, FileSpreadsheet, CalendarCheck } from "lucide-react";

/* ─── Data ───────────────────────────────────────────────── */
const LEFT_FEATURES = [
  {
    id: 1,
    title: "Accurate Data You Can Trust",
    desc: "We focus on accuracy in every count. Our team carefully checks vehicle movements, pedestrian activity, cyclist flow, and classification data before submitting the final report.",
    icon: Target,
    badgeType: "check",
  },
  {
    id: 2,
    title: "Global Project Support",
    desc: "We support traffic data projects from different countries and follow client-required standards, templates, time formats, and vehicle classifications.",
    icon: Globe,
    badgeType: "pin",
  },
  {
    id: 3,
    title: "Reliable Quality Checking",
    desc: "Every report goes through a detailed quality review process before final submission to improve consistency and accuracy.",
    icon: ShieldCheck,
    badgeType: "check",
  },
];

const RIGHT_FEATURES = [
  {
    id: 4,
    title: "Fast Turnaround",
    desc: "We understand urgent deadlines. Our team can support quick delivery for time-sensitive projects, including weekend and holiday work when required.",
    icon: Timer,
    badgeType: "clock",
  },
  {
    id: 5,
    title: "Custom Report Formats",
    desc: "Every client has different reporting needs. We can work with Excel templates, custom formats, hourly summaries, 15-minute intervals, movement diagrams, and country-specific classifications.",
    icon: FileSpreadsheet,
    badgeType: "chart",
  },
  {
    id: 6,
    title: "Weekend & Holiday Support",
    desc: "Our team supports urgent projects during weekends and public holidays to help clients meet important deadlines.",
    icon: CalendarCheck,
    badgeType: "check",
  },
];

/* Helper to render badge on the icon container */
function IconBadge({ type }: { type: string }) {
  if (type === "check") {
    return (
      <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#FF5A1F] border-2 border-white flex items-center justify-center text-white shadow-sm z-10">
        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  if (type === "pin") {
    return (
      <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#FF5A1F] border-2 border-white flex items-center justify-center text-white shadow-sm z-10">
        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      </div>
    );
  }
  if (type === "clock") {
    return (
      <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#FF5A1F] border-2 border-white flex items-center justify-center text-white shadow-sm z-10">
        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </div>
    );
  }
  if (type === "chart") {
    return (
      <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#FF5A1F] border-2 border-white flex items-center justify-center text-white shadow-sm z-10">
        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      </div>
    );
  }
  return null;
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative w-full bg-[#F6F9FC] py-16 md:py-24 overflow-hidden border-t border-slate-100"
    >


      {/* Faded World Map / Grid overlay in the center */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none z-0 bg-[radial-gradient(#0D2B6B_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header decoration lines */}
        <div className="relative w-full flex flex-col items-center justify-center text-center mb-16">
          {/* Main Title */}
          <h2 className="text-3xl sm:text-[40px] font-display font-bold tracking-tight leading-tight mb-8">
            <span className="text-[#0D2B6B]">Why Choose </span>
            <span className="italic font-black text-[#0D2B6B]">HIFI</span>
            <span className="text-[#FF5A1F] font-black"> TRAFFIC DATA TECH</span>
            <span className="text-[#FF5A1F]">?</span>
          </h2>

          {/* Center visual divider with text */}
          <div className="flex justify-center items-center gap-4">
            <div className="h-[2px] w-24 rounded-[10px] bg-gradient-to-r from-transparent via-[#0D2B6B]/50 to-[#0D2B6B]" />
            <span className="text-[#0D2B6B] font-ui font-bold text-sm tracking-wide whitespace-nowrap">Accurate Data You Can Trust</span>
            <div className="h-[2px] w-24 rounded-[10px] bg-gradient-to-l from-transparent via-[#0D2B6B]/50 to-[#0D2B6B]" />
          </div>
        </div>

        {/* ================= DESKTOP VIEW (lg+) ================= */}
        <div className="hidden lg:block relative w-full h-[600px] max-w-[1200px] mx-auto">
          
          {/* SVG Connector Lines Overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
            viewBox="0 0 1200 600"
            fill="none"
          >
            {/* Left Arc of Central Circle */}
            <path
              d="M 600 120 A 180 180 0 0 0 600 480"
              stroke="#0D2B6B"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Right Arc of Central Circle */}
            <path
              d="M 600 120 A 180 180 0 0 1 600 480"
              stroke="#FF5A1F"
              strokeWidth="2.5"
              fill="none"
            />

            {/* Dotted Connection Paths with Solid Ends */}
            {/* Top-Left Card: (344, 105) -> (444, 210) */}
            <path
              d="M 344 105 H 390 L 444 210"
              stroke="#0D2B6B"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <circle cx="344" cy="105" r="4.5" fill="#0D2B6B" />
            <circle cx="444" cy="210" r="7" fill="#0D2B6B" stroke="white" strokeWidth="2" />

            {/* Mid-Left Card: (344, 300) -> (420, 300) */}
            <path
              d="M 344 300 H 420"
              stroke="#0D2B6B"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <circle cx="344" cy="300" r="4.5" fill="#0D2B6B" />
            <circle cx="420" cy="300" r="7" fill="#0D2B6B" stroke="white" strokeWidth="2" />

            {/* Bottom-Left Card: (344, 495) -> (444, 390) */}
            <path
              d="M 344 495 H 390 L 444 390"
              stroke="#0D2B6B"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <circle cx="344" cy="495" r="4.5" fill="#0D2B6B" />
            <circle cx="444" cy="390" r="7" fill="#0D2B6B" stroke="white" strokeWidth="2" />

            {/* Top-Right Card: (856, 105) -> (756, 210) */}
            <path
              d="M 856 105 H 810 L 756 210"
              stroke="#FF5A1F"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <circle cx="856" cy="105" r="4.5" fill="#FF5A1F" />
            <circle cx="756" cy="210" r="7" fill="#FF5A1F" stroke="white" strokeWidth="2" />

            {/* Mid-Right Card: (856, 300) -> (780, 300) */}
            <path
              d="M 856 300 H 780"
              stroke="#FF5A1F"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <circle cx="856" cy="300" r="4.5" fill="#FF5A1F" />
            <circle cx="780" cy="300" r="7" fill="#FF5A1F" stroke="white" strokeWidth="2" />

            {/* Bottom-Right Card: (856, 495) -> (756, 390) */}
            <path
              d="M 856 495 H 810 L 756 390"
              stroke="#FF5A1F"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <circle cx="856" cy="495" r="4.5" fill="#FF5A1F" />
            <circle cx="756" cy="390" r="7" fill="#FF5A1F" stroke="white" strokeWidth="2" />
          </svg>

          {/* Central Circular Image Showcase */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full overflow-hidden z-10 bg-white p-2.5 shadow-2xl">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/about_us_traffic.png"
                alt="Traffic analyst at dual border control room setup"
                fill
                sizes="340px"
                className="object-cover"
              />
            </div>
          </div>

          {/* LEFT COLUMN CARDS: Icon left, Text right */}
          <div className="absolute inset-y-0 left-0 w-[320px] flex flex-col justify-between py-[40px] z-20">
            {LEFT_FEATURES.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="relative w-full h-[130px] rounded-[24px] bg-white border border-slate-100/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] pl-12 pr-6 py-4 flex flex-col justify-center items-start group hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* Left Overlapping Icon Container */}
                  <div className="absolute -left-7 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-[#031530] flex items-center justify-center relative">
                      <IconComp className="w-5.5 h-5.5 text-white" />
                      <IconBadge type={item.badgeType} />
                    </div>
                  </div>
                  {/* Content */}
                  <h3 className="font-ui text-[13px] font-bold text-[#0D2B6B] leading-tight">
                    {item.title}
                  </h3>
                  <div className="w-10 h-[2px] bg-[#FF5A1F] mt-1.5 mb-1.5" />
                  <p className="font-sans text-[10px] leading-[1.4] text-slate-500 text-left">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN CARDS: Text left, Icon right */}
          <div className="absolute inset-y-0 right-0 w-[320px] flex flex-col justify-between py-[40px] z-20">
            {RIGHT_FEATURES.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="relative w-full h-[130px] rounded-[24px] bg-white border border-slate-100/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] pr-12 pl-6 py-4 flex flex-col justify-center items-start group hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* Right Overlapping Icon Container */}
                  <div className="absolute -right-7 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-[#031530] flex items-center justify-center relative">
                      <IconComp className="w-5.5 h-5.5 text-white" />
                      <IconBadge type={item.badgeType} />
                    </div>
                  </div>
                  {/* Content */}
                  <h3 className="font-ui text-[13px] font-bold text-[#0D2B6B] leading-tight">
                    {item.title}
                  </h3>
                  <div className="w-10 h-[2px] bg-[#FF5A1F] mt-1.5 mb-1.5" />
                  <p className="font-sans text-[10px] leading-[1.4] text-slate-500 text-left">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* ================= TABLET & MOBILE VIEW ================= */}
        <div className="lg:hidden flex flex-col items-center gap-12 w-full">
          
          {/* Centered Circle (Dual Border styled via border classes) */}
          <div className="relative w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] rounded-full p-2 bg-white shadow-2xl">
            {/* Split border effect */}
            <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-l-[#0D2B6B] border-b-[#0D2B6B] border-r-[#FF5A1F] border-t-[#FF5A1F]" />
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/about_us_traffic.png"
                alt="Traffic data analyst control room dashboard layout"
                fill
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {[...LEFT_FEATURES, ...RIGHT_FEATURES].map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex gap-4 items-start p-6 bg-white rounded-3xl shadow-sm border border-slate-100/80 relative"
                >
                  {/* Circular Icon Container */}
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <div className="w-11 h-11 rounded-full bg-[#031530] flex items-center justify-center relative">
                      <IconComp className="w-5.5 h-5.5 text-white" />
                      <IconBadge type={item.badgeType} />
                    </div>
                  </div>
                  {/* Text Details */}
                  <div className="flex flex-col items-start text-left">
                    <h3 className="font-ui text-sm sm:text-base font-bold text-[#0D2B6B] leading-tight">
                      {item.title}
                    </h3>
                    <div className="w-10 h-[2px] bg-[#FF5A1F] mt-1.5 mb-1.5" />
                    <p className="font-sans text-slate-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
