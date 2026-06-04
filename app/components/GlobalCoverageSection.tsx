"use client";

import React, { useState } from "react";
import { Globe } from "lucide-react";
import dynamic from "next/dynamic";

const InteractiveWorldMap = dynamic(() => import('./InteractiveWorldMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[2/1] bg-slate-50 rounded-lg flex items-center justify-center">
      <div className="text-slate-400 text-sm">Loading map...</div>
    </div>
  ),
});

export default function GlobalCoverageSection() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const countries = [
    { name: "India", code: "IN", flag: "https://flagcdn.com/w40/in.png" },
    { name: "USA", code: "US", flag: "https://flagcdn.com/w40/us.png" },
    { name: "UK", code: "GB", flag: "https://flagcdn.com/w40/gb.png" },
    { name: "Australia", code: "AU", flag: "https://flagcdn.com/w40/au.png" },
    { name: "South Africa", code: "ZA", flag: "https://flagcdn.com/w40/za.png" },
    { name: "UAE", code: "AE", flag: "https://flagcdn.com/w40/ae.png" },
    { name: "Canada", code: "CA", flag: "https://flagcdn.com/w40/ca.png" },
    { name: "New Zealand", code: "NZ", flag: "https://flagcdn.com/w40/nz.png" },
    { name: "Europe", code: "EU", flag: "https://flagcdn.com/w40/eu.png" },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-6">

        {/* LEFT COLUMN: Content & Country Cards */}
        <div className="w-full lg:w-[32%] flex flex-col justify-between pr-0 lg:pr-6 z-10">
          <div>
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#F57C00] to-[#F57C00] rounded-full" />
              <span className="text-[#F57C00] font-ui font-bold text-sm tracking-wide">
                GLOBAL COVERAGE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[32px] sm:text-[40px] font-display font-bold tracking-tight leading-none mb-4 text-[#0f1d3d]">
              Country-Wise <span className="text-[#f97316]">Support</span>
            </h2>

            {/* Paragraph Description */}
            <p className="font-sans text-slate-500 text-sm leading-relaxed mb-6">
              We are experienced in supporting traffic survey projects from:
            </p>

            {/* Country Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {countries.map((c, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredCountry(c.name)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  className={`bg-white border rounded-lg px-4 py-3 flex items-center gap-3 shadow-sm transition-all duration-300 cursor-pointer ${hoveredCountry === c.name
                      ? 'border-[#F57C00] shadow-md bg-orange-50/30 scale-[1.02]'
                      : 'border-slate-200/80 hover:shadow-md hover:border-slate-300'
                    }`}
                >
                  <div className="w-7 h-7 rounded-sm overflow-hidden flex-shrink-0 shadow-sm border border-slate-200/50">
                    <img
                      src={c.flag}
                      alt={`${c.name} flag`}
                      width="28"
                      height="28"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className={`font-ui text-sm font-medium transition-colors ${hoveredCountry === c.name ? 'text-[#F57C00]' : 'text-gray-800'
                    }`}>{c.name}</span>
                </div>
              ))}

              {/* Other Global Locations Card with Premium Globe Icon */}
              <div className="bg-white border border-slate-200/80 rounded-lg px-4 py-3 flex items-center gap-3 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300">
                <div className="w-7 h-7 rounded-sm flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200/60">
                  <Globe className="w-4 h-4 text-slate-600" strokeWidth={2} />
                </div>
                <span className="font-ui text-sm font-medium text-gray-800">Other global locations</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive World Map */}
        <div className="hidden sm:flex w-full lg:w-[68%] relative items-center">
          <InteractiveWorldMap
            hoveredCountry={hoveredCountry}
            onLocationHover={setHoveredCountry}
          />
        </div>

      </div>
    </section>
  );
}
