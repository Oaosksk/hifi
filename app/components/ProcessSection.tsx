"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface Step {
  number: string;
  title: string;
  desc: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Project Review",
    desc: "Client shares video files, survey location, date, time period, template, and instructions.",
  },
  {
    number: "02",
    title: "Requirement Confirmation",
    desc: "Our team reviews the project details, movement direction, vehicle classes, and output format.",
  },
  {
    number: "03",
    title: "Data Processing",
    desc: "Trained analysts manually capture traffic data from survey videos with careful attention.",
  },
  {
    number: "04",
    title: "Quality Checking",
    desc: "The processed data is checked to reduce errors and improve accuracy before delivery.",
  },
  {
    number: "05",
    title: "Final Report Delivery",
    desc: "We submit the completed report in the client-required format within the agreed timeline.",
  },
];

const CARD_COUNT = STEPS.length; // 5

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll track = exactly CARD_COUNT * 100vh
  // progress 0 → 1 spans the full track with no extra dead space
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring — light damping for responsive but fluid feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <>
      {/* ===== DESKTOP: Scroll-linked storytelling (hidden on mobile) ===== */}
      <div
        ref={containerRef}
        className="relative w-full hidden lg:block"
        style={{ height: `${CARD_COUNT * 100}vh` }}
      >
        {/* Sticky Viewport Canvas — fills screen, never scrolls away */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          {/* Full-bleed background image */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <Image
              src="/about_us_traffic.png"
              alt="Process background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#071126]/85 mix-blend-multiply" />
          </div>

          {/* Two-column content layout inside the pinned viewport */}
          <div className="relative z-10 h-full grid grid-cols-12 w-full max-w-[1440px] mx-auto">

            {/* LEFT: Stable header copy */}
            <div className="col-span-6 flex flex-col justify-center p-16 xl:p-24 text-white">
              <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-white to-white rounded-full" />
                  <span className="text-white/70 font-ui font-bold text-sm tracking-wide">
                    Our Process
                  </span>
                </div>
                <h2 className="text-[40px] xl:text-[44px] font-display font-bold text-white leading-[1.2] tracking-tight mb-8">
                  Simple Workflow | Accurate Results | Reliable Delivery
                </h2>
                <p className="font-sans font-normal text-white/75 text-base leading-relaxed max-w-md">
                  At HIFI TRAFFIC DATA TECH, we follow a professional and organized workflow to ensure every traffic survey project is completed with accuracy, consistency, and on-time delivery.
                </p>
              </div>
            </div>

            {/* RIGHT: Scroll-linked card stack */}
            <div className="col-span-6 relative flex items-center justify-center pr-16 xl:pr-24">
              <div className="relative w-full max-w-[560px] h-[340px]">
                {STEPS.map((step, idx) => (
                  <ScrollCard
                    key={idx}
                    step={step}
                    index={idx}
                    total={CARD_COUNT}
                    progress={smoothProgress}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ===== MOBILE: Standard stacked layout (hidden on desktop) ===== */}
      <section className="relative w-full bg-[#060c18] lg:hidden">
        {/* Full background */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/about_us_traffic.png"
            alt="Process background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#071126]/88 mix-blend-multiply" />
        </div>

        <div className="relative z-10 px-6 sm:px-12 py-16 md:py-24">
          {/* Header */}
          <div className="max-w-xl mb-12">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-white to-white rounded-full" />
              <span className="text-white/70 font-ui font-bold text-sm tracking-wide">
                Our Process
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight tracking-tight mb-6">
              Simple Workflow | Accurate Results | Reliable Delivery
            </h2>
            <p className="font-sans font-normal text-white/75 text-sm sm:text-base leading-relaxed">
              At HIFI TRAFFIC DATA TECH, we follow a professional and organized workflow to ensure every traffic survey project is completed with accuracy, consistency, and on-time delivery.
            </p>
          </div>

          {/* Stacked cards */}
          <div className="flex flex-col gap-8">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full rounded-xl p-10 sm:p-12 bg-[#edf2ff] shadow-xl flex flex-col items-start overflow-hidden border border-[#F57C00]/30"
              >

                {/* Decorative top-right corner bracket */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#F57C00]/50 rounded-tr-sm" />
                {/* Step number with orange accent */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-ui font-black text-[#F57C00] tracking-tight leading-none">
                    {step.number}
                  </span>
                  <div className="h-[2px] w-8 bg-[#F57C00]/40 rounded-full" />
                </div>
                <h3 className="text-2xl font-ui font-bold text-[#0D2B6B] leading-tight mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="font-sans font-normal text-slate-600 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
                {/* Bottom orange connector line */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#F57C00]/60 via-[#F57C00]/20 to-transparent rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ────────────────────────────────────────────────────────────
   ScrollCard

   Scroll progress 0→1 spans CARD_COUNT * 100vh.
   We divide progress into CARD_COUNT equal windows.
   Each card:
     - Enters from bottom during the first 40% of its window
     - Is fully visible for the middle 20%
     - Exits upward during the last 40% of its window
   The last card never exits (stays visible at progress=1).
   ──────────────────────────────────────────────────────────── */

interface ScrollCardProps {
  step: Step;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function ScrollCard({ step, index, total, progress }: ScrollCardProps) {
  const seg = 1 / total;

  // Window for this card: [windowStart … windowEnd]
  const windowStart = index * seg;
  const windowEnd = (index + 1) * seg;

  // Card is fully visible 35%→65% of its window
  const enterStart = windowStart;
  const enterEnd = windowStart + seg * 0.38;
  const exitStart = windowStart + seg * 0.62;
  const exitEnd = windowEnd;

  const isLast = index === total - 1;
  const isFirst = index === 0;

  // Y: enter from +120px, land at 0, exit to -120px
  // First card starts at 0 (already visible)
  // Last card stays at 0 forever after it enters
  const yInputRange = isFirst
    ? [0, enterEnd, exitStart, exitEnd]
    : isLast
      ? [enterStart, enterEnd, 1]
      : [enterStart, enterEnd, exitStart, exitEnd];

  const yOutputRange = isFirst
    ? [0, 0, -110, -220]
    : isLast
      ? [110, 0, 0]
      : [110, 0, -110, -220];

  const y = useTransform(progress, yInputRange, yOutputRange);

  // Opacity
  const opacityInputRange = isFirst
    ? [0, enterEnd * 0.5, enterEnd, exitStart, exitEnd]
    : isLast
      ? [enterStart, enterEnd, 1]
      : [enterStart, enterEnd, exitStart, exitEnd];

  const opacityOutputRange = isFirst
    ? [1, 1, 1, 0.15, 0]
    : isLast
      ? [0, 1, 1]
      : [0, 1, 0.15, 0];

  const opacity = useTransform(progress, opacityInputRange, opacityOutputRange);

  // Scale: 0.94 → 1 → 0.94
  const scaleInputRange = isLast
    ? [enterStart, enterEnd, 1]
    : [enterStart, enterEnd, exitStart, exitEnd];
  const scaleOutputRange = isLast
    ? [0.93, 1, 1]
    : [0.93, 1, 0.97, 0.92];

  const scale = useTransform(progress, scaleInputRange, scaleOutputRange);

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className="absolute inset-0 w-full rounded-xl p-10 sm:p-12 bg-[#edf2ff] shadow-2xl flex flex-col items-start justify-center will-change-transform overflow-hidden border border-[#F57C00]/30"
    >


      {/* Decorative top-right corner bracket */}
      <div className="absolute top-5 right-5 w-7 h-7 border-t-2 border-r-2 border-[#F57C00]/50 rounded-tr-sm" />
      {/* Decorative bottom-left corner bracket */}
      <div className="absolute bottom-5 left-8 w-5 h-5 border-b-2 border-l-2 border-[#F57C00]/30 rounded-bl-sm" />

      {/* Step Number with orange dash */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl font-ui font-black text-[#F57C00] tracking-tight leading-none">
          {step.number}
        </span>
        <div className="h-[2px] w-10 bg-gradient-to-r from-[#F57C00] to-[#F57C00]/20 rounded-full" />
      </div>

      {/* Title */}
      <h3 className="text-2xl sm:text-[28px] font-ui font-bold text-[#0D2B6B] leading-tight mb-4 tracking-tight">
        {step.title}
      </h3>

      {/* Description */}
      <p className="font-sans font-normal text-slate-600 text-sm sm:text-base leading-relaxed">
        {step.desc}
      </p>

      {/* Bottom orange connector line */}
      <div className="absolute bottom-0 left-10 right-10 h-[2px] bg-gradient-to-r from-[#F57C00]/70 via-[#F57C00]/30 to-transparent rounded-full" />
    </motion.div>
  );
}


