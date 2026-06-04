"use client";

import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import SmoothScroll from "../components/smooth-scroll";

export default function TermsOfServicePage() {
  return (
    <SmoothScroll>
      <Header />
      
      <main className="flex-1 w-full bg-white">
        {/* Banner Hero */}
        <section className="bg-[#07193f] pt-32 pb-20 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <span className="text-[#F57C00] font-ui font-bold text-xs uppercase tracking-widest block mb-3">
              legal & compliance
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-4 text-white">
              Terms of Service
            </h1>
            <p className="font-sans text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Effective Date: May 31, 2026. These terms govern scheduling, scoping, and data delivery specifications.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 max-w-4xl mx-auto px-6 text-slate-600 space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="font-display text-[#0D2B6B] text-xl sm:text-2xl font-bold mb-4">1. Scope of Services</h2>
            <p className="font-sans">
              HIFI Traffic Data Tech agrees to perform traffic volume studies, turning counts, pedestrian logging, and vehicle classification as detailed in individual project agreements. Scopes must specify site coordinates, date targets, and local vehicle class criteria.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[#0D2B6B] text-xl sm:text-2xl font-bold mb-4">2. Client Cooperation & Site Permissions</h2>
            <p className="font-sans">
              The client is responsible for providing exact site boundaries, intersection coordinates, and obtaining municipal permission or right-of-way access permits if local regulations require them. HIFI will not deploy sensors in restricted zones without clear written approval.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[#0D2B6B] text-xl sm:text-2xl font-bold mb-4">3. Data Delivery & Acceptance</h2>
            <p className="font-sans">
              HIFI strives to deliver formatted reports (PDF, CSV, Synchro format) on or before the target deadline. Clients have 7 business days from receipt to audit the logs and report any counting errors or data anomalies for review and potential recount validation.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[#0D2B6B] text-xl sm:text-2xl font-bold mb-4">4. Limitation of Liability</h2>
            <p className="font-sans">
              While HIFI makes every effort to ensure maximum accuracy (98%+ target), traffic counts represent snapshots in time. HIFI is not liable for structural redesign costs, environmental assessment delays, or construction budgeting overruns arising from traffic modeling predictions.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[#0D2B6B] text-xl sm:text-2xl font-bold mb-4">5. Governing Law</h2>
            <p className="font-sans">
              These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction where HIFI's corporate headquarters is established.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </SmoothScroll>
  );
}
