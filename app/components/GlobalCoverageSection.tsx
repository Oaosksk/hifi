"use client";

import React from "react";
import Image from "next/image";
import { ClipboardCheck } from "lucide-react";

export default function GlobalCoverageSection() {
  const countries = [
    { name: "India", emoji: "🇮🇳" },
    { name: "USA", emoji: "🇺🇸" },
    { name: "UK", emoji: "🇬🇧" },
    { name: "Australia", emoji: "🇦🇺" },
    { name: "South Africa", emoji: "🇿🇦" },
    { name: "UAE", emoji: "🇦🇪" },
    { name: "Canada", emoji: "🇨🇦" },
    { name: "New Zealand", emoji: "🇳🇿" },
    { name: "Europe", emoji: "🇪🇺" },
    { name: "Other global locations", emoji: "🌐" },
  ];

  return (
    <section className="bg-white py-16 px-6 sm:px-8 max-w-7xl mx-auto w-full relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-0">

        {/* LEFT COLUMN: Content & Country Cards */}
        <div className="w-full lg:w-[42%] flex flex-col justify-between pr-0 lg:pr-8 z-10">
          <div>
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#F57C00] to-[#F57C00] rounded-full" />
              <span className="text-[#F57C00] font-semibold text-sm tracking-wide">
                GLOBAL COVERAGE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[32px] sm:text-[40px] font-black tracking-tight leading-none mb-4 text-[#0f1d3d]">
              Country-Wise <span className="text-[#f97316]">Support</span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
              We are experienced in supporting traffic survey projects from:
            </p>

            {/* Country Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {countries.map((c, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200/80 rounded-lg px-4 py-3 flex items-center gap-3 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
                >
                  <span className="text-2xl leading-none select-none">{c.emoji}</span>
                  <span className="text-sm font-medium text-gray-800">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

         
        
        </div>

        {/* RIGHT COLUMN: Static Map Image */}
        <div className="w-full lg:w-[58%] relative flex items-center justify-center min-h-[380px]">
          <Image
            src="/map.png"
            alt="Global coverage map showing HIFI Traffic Data Tech service locations"
            width={900}
            height={580}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
