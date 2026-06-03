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
        <section className="bg-white py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              {/* Left side */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#0D2B6B] to-[#0D2B6B] rounded-full"></div>
                  <span className="text-[#0D2B6B] font-semibold text-sm tracking-wide">
                    WHY CHOOSE US
                  </span>
                </div>
                <h1 className="text-3xl sm:text-[44px] font-extrabold text-[#0D2B6B] tracking-tight leading-tight">
                  Why Choose HIFI Traffic Data Tech?
                </h1>
              </div>

              {/* Right side */}
              <div className="lg:max-w-md">
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
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
