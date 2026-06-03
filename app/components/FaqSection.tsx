"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowUpRight, MessageSquare } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Do you process traffic survey videos manually?",
    answer: "Yes. We process video-based traffic survey data manually using trained analysts and quality checking."
  },
  {
    question: "Can you work with our template?",
    answer: "Yes. We can work with client-provided Excel templates, custom formats, and country-specific reporting requirements."
  },
  {
    question: "Do you support urgent projects?",
    answer: "Yes. We can support urgent projects depending on workload and project size."
  },
  {
    question: "Can you provide weekend support?",
    answer: "Yes. We provide weekend and holiday support for important deadlines when required."
  },
  {
    question: "Which countries do you support?",
    answer: "We support clients from India, USA, UK, Australia, South Africa, UAE, Canada, and other countries."
  },
  {
    question: "What services do you provide?",
    answer: "We provide traffic volume counts, turning movement counts, vehicle classification, pedestrian counts, cyclist counts, queue analysis, delay analysis, parking surveys, and custom traffic data processing."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8FAFC] py-24 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading & Support Desk Info */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-[#0D2B6B]"></div>
                <span className="text-[#0D2B6B] font-bold text-xs uppercase tracking-wider">
                  Support & Help
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#0D2B6B] tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
              
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Find answers to common questions about our traffic data services, templates, timelines, and operational coverage.
              </p>
            </div>

            {/* Support Desk Card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm space-y-6">
              <div className="w-12 h-12 bg-[#F57C00]/10 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-[#F57C00]" />
              </div>
              
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-[#0D2B6B]">Still have questions?</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Our engineering support desk is happy to help you with custom classifications, coordinates scoping, or urgent deadlines.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0D2B6B] text-white text-xs font-bold rounded-lg hover:bg-[#07193f] transition-all group"
              >
                Contact Our Engineers
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-[#0D2B6B]/20"
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left gap-4"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        isOpen ? 'bg-[#0D2B6B] text-white' : 'bg-slate-50 text-slate-400'
                      }`}>
                        <HelpCircle className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-[#0D2B6B]">
                        {item.question}
                      </span>
                    </div>
                    
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-slate-50 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 bg-[#0D2B6B]/5 text-[#0D2B6B]' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-48 border-t border-slate-50/50' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 sm:px-8 pb-6 pt-4 pl-14 sm:pl-16 text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {item.answer}
                    </div>
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
