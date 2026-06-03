"use client";

import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import SmoothScroll from "../components/smooth-scroll";

export default function PrivacyPolicyPage() {
  return (
    <SmoothScroll>
      <Header />
      
      <main className="flex-1 w-full bg-white">
        {/* Banner Hero */}
        <section className="bg-[#07193f] pt-32 pb-20 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <span className="text-[#F57C00] font-bold text-xs uppercase tracking-widest block mb-3">
              legal & compliance
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Privacy Policy
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Effective Date: May 31, 2026. This document explains how we collect, store, and process project coordinates and site details.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 max-w-4xl mx-auto px-6 text-slate-600 space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-[#0D2B6B] text-xl sm:text-2xl font-bold mb-4">1. Data We Collect</h2>
            <p>
              HIFI Traffic Data Tech collects project coordination details, customer contact information, and coordinates of requested traffic studies. All data is processed securely to scope, configure, and execute the requested traffic survey counts.
            </p>
          </div>

          <div>
            <h2 className="text-[#0D2B6B] text-xl sm:text-2xl font-bold mb-4">2. Traffic Counting & Site footage</h2>
            <p>
              Temporary video cameras positioned at intersection locations are used exclusively to process vehicle turning movements and pedestrian crossings. All processed video footage is stored securely, deleted after validation reports are signed off, and never used for individual pedestrian face-identification or vehicle license-plate scanning.
            </p>
          </div>

          <div>
            <h2 className="text-[#0D2B6B] text-xl sm:text-2xl font-bold mb-4">3. Data Sharing & Security</h2>
            <p>
              We do not sell, rent, or lease our database of clients or project scoping coordinates. Data is shared with engineering sub-consultants only to complete structural loading analyses under strict NDA agreements.
            </p>
          </div>

          <div>
            <h2 className="text-[#0D2B6B] text-xl sm:text-2xl font-bold mb-4">4. Compliance with Local Traffic Regulations</h2>
            <p>
              All data collection complies with the local Department of Transportation (DOT) policies, municipal planning authorities, and structural site access regulations.
            </p>
          </div>

          <div>
            <h2 className="text-[#0D2B6B] text-xl sm:text-2xl font-bold mb-4">5. Contact Information</h2>
            <p>
              If you have any questions about this privacy statement, please contact our compliance officer at{" "}
              <a href="mailto:privacy@hifitrafficdatatech.com" className="text-[#F57C00] font-bold hover:underline">
                privacy@hifitrafficdatatech.com
              </a>.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </SmoothScroll>
  );
}
