"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import SmoothScroll from "../components/smooth-scroll";
import WhyChooseUs from "../components/WhyChooseUs";

export default function WhyUsPage() {
  return (
    <SmoothScroll>
      <Header />
      
      <main className="flex-1 w-full bg-white pt-20">
        {/* Banner Hero */}
        <section className="bg-[#07193f] pt-32 pb-20 text-white relative overflow-hidden">
          {/* Quality / Trust Shield SVG — Why Choose Us page */}
          <div className="absolute inset-0 select-none pointer-events-none overflow-hidden">
            <svg viewBox="0 0 900 300" fill="none" className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="xMidYMid slice">
              {/* Concentric stability rings */}
              <circle cx="720" cy="145" r="140" stroke="white" strokeWidth="1.5" strokeDasharray="8,6" opacity="0.3" />
              <circle cx="720" cy="145" r="190" stroke="white" strokeWidth="1" opacity="0.2" />
              
              {/* Outer Shield Outline */}
              <path d="M650 60 C 650 60, 720 45, 720 45 C 720 45, 790 60, 790 60 C 790 60, 790 150, 790 150 C 790 200, 720 240, 720 240 C 720 240, 650 200, 650 150 C 650 150, 650 60, 650 60 Z" stroke="white" strokeWidth="6" fill="none" strokeLinejoin="round" />
              
              {/* Inner Shield Outline */}
              <path d="M670 80 C 670 80, 720 68, 720 68 C 720 68, 770 80, 770 80 C 770 80, 770 145, 770 145 C 770 185, 720 220, 720 220 C 720 220, 670 185, 670 145 Z" stroke="white" strokeWidth="2" strokeDasharray="6,4" fill="none" strokeLinejoin="round" opacity="0.6" />
              
              {/* Center Checkmark */}
              <path d="M695 140 L712 157 L745 120" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9" />
              
              {/* Diamond Stars */}
              <path d="M600 75 L604 86 L615 90 L604 94 L600 105 L596 94 L585 90 L596 86 Z" fill="white" opacity="0.5" />
              <path d="M840 165 L844 176 L855 180 L844 184 L840 195 L836 184 L825 180 L836 176 Z" fill="white" opacity="0.4" />
              <path d="M800 60 L803 67 L810 70 L803 73 L800 80 L797 73 L790 70 L797 67 Z" fill="white" opacity="0.6" />
              <path d="M610 190 L613 197 L620 200 L613 203 L610 210 L607 203 L600 200 L607 197 Z" fill="white" opacity="0.5" />

              {/* Data validation nodes on the left */}
              <line x1="500" y1="150" x2="530" y2="170" stroke="white" strokeWidth="1.5" opacity="0.3" />
              <line x1="530" y1="170" x2="565" y2="160" stroke="white" strokeWidth="1.5" opacity="0.3" />
              <line x1="550" y1="130" x2="580" y2="115" stroke="white" strokeWidth="1.5" opacity="0.3" />
              <circle cx="520" cy="120" r="4" fill="white" opacity="0.5" />
              <circle cx="550" cy="130" r="5" fill="white" opacity="0.7" />
              <circle cx="580" cy="115" r="3" fill="white" opacity="0.4" />
              <circle cx="500" cy="150" r="6" fill="white" opacity="0.6" />
              <circle cx="530" cy="170" r="4" fill="white" opacity="0.5" />
              <circle cx="565" cy="160" r="5" fill="white" opacity="0.7" />
              <circle cx="595" cy="185" r="3" fill="white" opacity="0.4" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              {/* Left side */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#F57C00] to-[#F57C00] rounded-full"></div>
                  <span className="text-[#F57C00] font-ui font-bold text-sm tracking-wide">
                    WHY CHOOSE US
                  </span>
                </div>
                <h1 className="text-3xl sm:text-[44px] font-display font-bold text-white tracking-tight leading-tight">
                  Why Choose HIFI Traffic Data Tech?
                </h1>
              </div>

              {/* Right side */}
              <div className="lg:max-w-md">
                <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
                  Accurate data you can trust. We provide professional traffic survey analysis backed by industry-grade accuracy, fast turnaround times, and reliable global project support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Component */}
        <WhyChooseUs />

     

      </main>

      <Footer />
    </SmoothScroll>
  );
}
