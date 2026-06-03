"use client";

import { motion } from "framer-motion";
import { ClipboardList, HardHat, MapPin, Building2, Landmark } from "lucide-react";
import React from "react";

interface IndustryCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  delay?: number;
}

export function IndustryCard({ title, desc, icon, delay = 0 }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: delay, ease: "easeOut" }}
      className="group bg-white rounded-lg p-8 shadow-[0_4px_24px_rgba(13,31,110,0.08)] border border-slate-100 hover:shadow-[0_16px_48px_rgba(13,31,110,0.14)] hover:-translate-y-2 transition-all duration-300 cursor-default flex flex-col h-full"
    >
      <div className="w-[76px] h-[76px] rounded-full bg-[#e8ebff] flex items-center justify-center mb-6 group-hover:bg-[#dbe0ff] group-hover:scale-105 transition-all duration-300 flex-shrink-0">
        {icon}
      </div>
      <div className="w-7 h-[3px] bg-[#F07C1E] rounded-full mb-5" />
      <h3 className="text-[#0D1F6E] font-bold text-[17px] leading-snug mb-3">
        {title}
      </h3>
      <p className="text-slate-500 text-[14px] leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

export default function IndustriesSection() {
  return (
    <section className="bg-[#EEF2FF] py-24 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[1.5px] bg-[#F07C1E]" />
            <span className="text-[#F07C1E] font-bold text-[11px] uppercase tracking-[0.3em]">
              Industries We Support
            </span>
            <div className="w-10 h-[1.5px] bg-[#F07C1E]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-[30px] sm:text-[40px] md:text-[48px] font-black text-[#0D1F6E] tracking-tight leading-[1.1] mb-6"
          >
            Trusted Traffic Data Solutions<br />Across Multiple Industries
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
            className="text-slate-500 text-[15px] leading-relaxed max-w-2xl mx-auto"
          >
            We work with consultants, engineering firms, planners, developers, and public sector
            organizations to deliver accurate traffic survey data that supports informed decision-making
            and successful project outcomes.
          </motion.p>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          <IndustryCard
            title="Traffic Consultants"
            desc="We support consultants with accurate data for traffic impact studies, planning reports, and junction analysis."
            icon={<ClipboardList color="#1a2e6c" size={28} strokeWidth={1.5} />}
            delay={0.0}
          />
          <IndustryCard
            title="Civil Engineering Firms"
            desc="We provide reliable survey outputs for road design, infrastructure planning, and development projects."
            icon={<HardHat color="#1a2e6c" size={28} strokeWidth={1.5} />}
            delay={0.1}
          />
          <IndustryCard
            title="Transport Planners"
            desc="Our data helps planners understand vehicle, pedestrian, and cyclist movement patterns."
            icon={<MapPin color="#1a2e6c" size={28} strokeWidth={1.5} />}
            delay={0.2}
          />
        </div>

        {/* Row 2 — 2 cards, spanning full container width, no max-width, no mx-auto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <IndustryCard
            title="Developers"
            desc="We support development-related traffic studies for residential, commercial, and industrial projects."
            icon={<Building2 color="#1a2e6c" size={28} strokeWidth={1.5} />}
            delay={0.3}
          />
          <IndustryCard
            title="Government & Public Sector Projects"
            desc="We help with road safety studies, transport planning, parking analysis, and traffic management projects."
            icon={<Landmark color="#1a2e6c" size={28} strokeWidth={1.5} />}
            delay={0.4}
          />
        </div>

      </div>
    </section>
  );
}
