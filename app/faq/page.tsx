"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, HelpCircle, ChevronDown, MessageSquare, ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import SmoothScroll from "../components/smooth-scroll";

const CATEGORIES = [
  {
    title: "General & Operations",
    icon: HelpCircle,
    questions: [
      {
        q: "Do you process traffic survey videos manually?",
        a: "Yes. We process video-based traffic survey data manually using trained analysts and rigorous secondary quality checks to ensure maximum accuracy."
      },
      {
        q: "Do you support urgent projects?",
        a: "Yes. We can support urgent projects depending on current workload and project size. Contact us immediately to check availability."
      },
      {
        q: "Can you provide weekend support?",
        a: "Yes. We provide weekend and public holiday support for critical deadlines and important projects when required."
      }
    ]
  },
  {
    title: "Services & Capability",
    icon: HelpCircle,
    questions: [
      {
        q: "What services do you provide?",
        a: "We provide traffic volume counts, turning movement counts, vehicle classification, pedestrian/cyclist counts, queue analysis, delay analysis, parking surveys, and custom traffic data processing."
      },
      {
        q: "How do you classify vehicles?",
        a: "We classify vehicles into cars, motorcycles, bicycles, buses, light goods vehicles (LGV), heavy goods vehicles (HGV), trailers, and custom classes following FHWA, Austroads, COBA, or country-specific standards."
      },
      {
        q: "Do you support pedestrian & bicycle counting?",
        a: "Yes. We process dedicated pedestrian crossing counts, sidewalk volumes, and bicycle pathway counts, delivering separate classifications and directional summaries."
      }
    ]
  },
  {
    title: "Integration & Templates",
    icon: HelpCircle,
    questions: [
      {
        q: "Can you work with our template?",
        a: "Yes. We can work with client-provided Excel templates, custom layouts, and specific reporting structures to match your existing software."
      },
      {
        q: "What output formats do you support?",
        a: "We deliver data in Excel (.xlsx, .csv), PDF summary sheets, and formats compatible with traffic analysis tools like Synchro, Vistro, or SIDRA."
      },
      {
        q: "Can you process custom classification logic?",
        a: "Yes. Our team can customize vehicle classification schemas to fit project-specific requirements or municipal planning codes."
      }
    ]
  },
  {
    title: "Coverage & Scope",
    icon: HelpCircle,
    questions: [
      {
        q: "Which countries do you support?",
        a: "We support clients globally, including India, USA, UK, Australia, South Africa, UAE, Canada, and many other countries."
      },
      {
        q: "Can you handle large multi-site surveys?",
        a: "Yes. We regularly process large-scale regional counts containing 50+ intersections or multi-day continuous link surveys."
      },
      {
        q: "How do we share video footage?",
        a: "You can upload video files to our secure cloud storage (OneDrive, Google Drive, Dropbox) or we can access your server directly."
      }
    ]
  },
  {
    title: "Pricing & Quotes",
    icon: HelpCircle,
    questions: [
      {
        q: "How can I request a pricing quote?",
        a: "You can fill out our scoping request form on the 'Get a Quote' page, providing coordinates, study duration, and classifications."
      },
      {
        q: "Do you have volume discounts?",
        a: "Yes. We offer competitive volume-based pricing discounts for large-scale counts or long-term survey partnerships."
      },
      {
        q: "How long does it take to get a quote?",
        a: "Typically, our engineers will review your scoping parameters and deliver a detailed price sheet within 12 to 24 hours."
      }
    ]
  }
];

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFaq, setActiveFaq] = useState<{ catIndex: number; faqIndex: number } | null>(null);
  const [activeSearchFaq, setActiveSearchFaq] = useState<number | null>(null);

  // Flatten all FAQs for search results filtering
  const allFaqs = CATEGORIES.flatMap((category, catIndex) =>
    category.questions.map((q, faqIndex) => ({
      ...q,
      category: category.title,
      catIndex,
      faqIndex
    }))
  );

  const filteredFaqs = allFaqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SmoothScroll>
      <Header />

      <main className="flex-1 w-full bg-[#FCFDFE]">
        {/* Banner Hero with search */}
        <section className="bg-[#07193f] pt-32 pb-24 text-white relative overflow-hidden">
          {/* Subtle Grid texture for dark hero */}
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
            <span className="text-[#F57C00] font-bold text-xs uppercase tracking-widest block">
              knowledge center & support
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              How can we help?
            </h1>

            {/* Search Input Container */}
            <div className="max-w-2xl mx-auto relative shadow-2xl rounded-xl overflow-hidden bg-white mt-8 border border-slate-200">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setActiveSearchFaq(null);
                }}
                placeholder="Ask a question..."
                className="w-full pl-12 pr-4 py-4 text-sm sm:text-base text-slate-800 focus:outline-none bg-white placeholder-slate-400"
              />
            </div>

            {/* Common Searches */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm mt-4 text-slate-300">
              <span>Common searches:</span>
              {["Turning Movement Counts", "Urgent projects", "Templates", "Weekend support"].map((pill, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchQuery(pill)}
                  className="px-3.5 py-1 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-all border border-white/10 cursor-pointer"
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Grid or Search Results */}
        <section className="relative py-24 px-6 max-w-7xl mx-auto z-10">
          {searchQuery ? (
            /* Search Results View */
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <h3 className="text-lg font-bold text-[#0D2B6B]">
                  Search Results ({filteredFaqs.length})
                </h3>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs font-bold text-[#F57C00] hover:underline cursor-pointer"
                >
                  Clear search
                </button>
              </div>

              {filteredFaqs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFaqs.map((faq, idx) => {
                    const isOpen = activeSearchFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-xl border border-slate-150 overflow-hidden shadow-sm hover:border-[#0D2B6B]/20 transition-all duration-300"
                      >
                        <button
                          onClick={() => setActiveSearchFaq(isOpen ? null : idx)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                        >
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold text-[#F57C00] uppercase tracking-wider">
                              {faq.category}
                            </span>
                            <h4 className="text-sm sm:text-base font-bold text-[#0D2B6B]">
                              {faq.q}
                            </h4>
                          </div>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-slate-50 text-slate-400 transition-transform duration-300 ${isOpen ? "transform rotate-180 bg-[#0D2B6B]/5 text-[#0D2B6B]" : ""
                            }`}>
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </button>
                        <div
                          className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 border-t border-slate-50" : "max-h-0"
                            }`}
                        >
                          <div className="px-6 pb-6 pt-4 text-xs sm:text-sm text-slate-500 leading-relaxed">
                            {faq.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-16 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <p className="text-slate-400 text-sm font-semibold mb-4">No results found matching "{searchQuery}"</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#0D2B6B] text-white text-xs font-bold rounded-lg hover:bg-[#07193f] transition-all"
                  >
                    Contact Support Desk
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          ) : (
            /* Main Knowledge Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CATEGORIES.map((category, catIndex) => (
                <div
                  key={catIndex}
                  className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex flex-col overflow-hidden"
                >
                  {/* Category Header */}
                  <div className="p-6 sm:p-8 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-black text-[#0D2B6B]">
                      {category.title}
                    </h3>
                    <ArrowRight className="w-4.5 h-4.5 text-slate-400" />
                  </div>

                  {/* Question list */}
                  <div className="p-6 sm:p-8 flex-1 space-y-4">
                    {category.questions.map((question, faqIndex) => {
                      const isOpen = activeFaq?.catIndex === catIndex && activeFaq?.faqIndex === faqIndex;
                      return (
                        <div key={faqIndex} className="space-y-2 border-b border-slate-50 last:border-0 pb-4 last:pb-0">
                          <button
                            onClick={() => setActiveFaq(isOpen ? null : { catIndex, faqIndex })}
                            className="w-full flex items-start justify-between text-left group gap-2 py-1"
                          >
                            <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-[#F57C00] transition-colors leading-relaxed">
                              {question.q}
                            </span>
                            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 mt-1 flex-shrink-0 transition-transform duration-300 ${isOpen ? "transform rotate-180 text-[#F57C00]" : ""
                              }`} />
                          </button>

                          <div
                            className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                              }`}
                          >
                            <p className="text-xs text-slate-500 leading-relaxed pl-2 border-l-2 border-[#F57C00]/40">
                              {question.a}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Haven't found what you need card */}
              <div className="bg-[#07193f] rounded-2xl p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden shadow-xl min-h-[300px]">
                {/* Visual bubble graphic elements */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[#F57C00]/10 pointer-events-none" />
                <div className="absolute -left-6 -top-6 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-[#F57C00]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-none text-white">
                      Haven't found what you need?
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Get in touch with us — we are always online and happy to help count your surveys.
                    </p>
                  </div>
                </div>

                <div className="pt-6 relative z-10">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#0D2B6B] hover:bg-[#F57C00] hover:text-white font-bold text-xs sm:text-sm rounded-xl transition-all duration-300 shadow-md group"
                  >
                    Contact us
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
