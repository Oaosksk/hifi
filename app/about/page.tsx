"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Target, BarChart3, Users2, Compass, Eye, Award, Lightbulb, Scale } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/header";
import Footer from "../components/footer";
import SmoothScroll from "../components/smooth-scroll";
import Counter from "../components/counter";

export default function AboutPage() {
  return (
    <SmoothScroll>
      <Header />

      <main className="flex-1 w-full bg-white pt-20">
        {/* Banner Hero */}
        <section className="bg-[#07193f] pt-32 pb-20 text-white relative overflow-hidden">
          {/* Connected Nodes / Team Network SVG — About page */}
          <div className="absolute inset-0 select-none pointer-events-none overflow-hidden">
            <svg viewBox="0 0 900 300" fill="none" className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="xMidYMid slice">
              {/* Node connections lines */}
              <line x1="150" y1="80" x2="350" y2="150" stroke="white" strokeWidth="2" />
              <line x1="350" y1="150" x2="550" y2="80" stroke="white" strokeWidth="2" />
              <line x1="550" y1="80" x2="750" y2="150" stroke="white" strokeWidth="2" />
              <line x1="150" y1="80" x2="350" y2="220" stroke="white" strokeWidth="1.5" opacity="0.5" />
              <line x1="350" y1="150" x2="550" y2="220" stroke="white" strokeWidth="1.5" opacity="0.5" />
              <line x1="550" y1="80" x2="350" y2="220" stroke="white" strokeWidth="1.5" opacity="0.4" />
              <line x1="750" y1="150" x2="550" y2="220" stroke="white" strokeWidth="1.5" opacity="0.5" />
              <line x1="50" y1="200" x2="150" y2="80" stroke="white" strokeWidth="1.5" opacity="0.4" />
              <line x1="750" y1="150" x2="850" y2="80" stroke="white" strokeWidth="1.5" opacity="0.4" />
              {/* Person circles — large nodes */}
              <circle cx="150" cy="80" r="22" fill="white" />
              <circle cx="350" cy="150" r="28" fill="white" />
              <circle cx="550" cy="80" r="22" fill="white" />
              <circle cx="750" cy="150" r="22" fill="white" />
              {/* Person heads on large nodes */}
              <circle cx="150" cy="70" r="10" fill="#07193f" />
              <path d="M130 94 Q150 86 170 94" stroke="#07193f" strokeWidth="3" fill="none" />
              <circle cx="350" cy="137" r="13" fill="#07193f" />
              <path d="M325 163 Q350 153 375 163" stroke="#07193f" strokeWidth="3" fill="none" />
              <circle cx="550" cy="70" r="10" fill="#07193f" />
              <path d="M530 94 Q550 86 570 94" stroke="#07193f" strokeWidth="3" fill="none" />
              <circle cx="750" cy="140" r="10" fill="#07193f" />
              <path d="M730 164 Q750 156 770 164" stroke="#07193f" strokeWidth="3" fill="none" />
              {/* Secondary small nodes */}
              <circle cx="350" cy="220" r="12" fill="white" opacity="0.6" />
              <circle cx="550" cy="220" r="12" fill="white" opacity="0.6" />
              <circle cx="50" cy="200" r="10" fill="white" opacity="0.4" />
              <circle cx="850" cy="80" r="10" fill="white" opacity="0.4" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#F57C00] to-[#F57C00] rounded-full"></div>
                  <span className="text-[#F57C00] font-ui text-xs sm:text-sm font-bold uppercase tracking-wider">
                    WHO WE ARE
                  </span>
                </div>
                <h1 className="text-3xl sm:text-[44px] font-display font-bold text-white tracking-tight leading-tight">
                  About HIFI Traffic Data Tech
                </h1>

              </div>

              {/* Right side */}
              <div className="lg:max-w-md">
                <p className="font-sans font-normal text-slate-300 text-sm sm:text-base leading-relaxed">
                  Your count, connected to solutions. We deliver top-tier traffic engineering and intelligence data for urban and regional development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-100/50">
              <Image
                src="/aboutus.png"
                alt="HIFI Traffic Data Tech professional team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Right: Content */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#0D2B6B] to-[#0D2B6B] rounded-full"></div>
                <span className="text-[#0D2B6B] font-ui text-xs sm:text-sm font-bold uppercase tracking-wider">
                  About Us
                </span>
              </div>
              <h2 className="text-3xl sm:text-[40px] font-display font-bold text-[#0D2B6B] tracking-tight leading-tight mb-6">
                Precise Traffic Data Grounded In Clarity & Trust
              </h2>
              <p className="font-sans font-normal text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                HIFI TRAFFIC DATA TECH is a dedicated traffic data processing company from India, supporting clients across the USA, UK, Australia, South Africa, UAE, Canada, and other countries.
              </p>
              <p className="font-sans font-normal text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                We understand that every traffic project needs accuracy, clarity, and on-time delivery. That is why every project is handled carefully by trained analysts and checked before submission.
              </p>
              <p className="font-sans font-normal text-slate-600 text-sm sm:text-base leading-relaxed">
                From simple traffic volume counts to complex turning movement counts, pedestrian studies, cyclist counts, vehicle classification, queue analysis, and parking surveys, we provide reliable data that helps clients make confident engineering decisions.
              </p>
            </div>
          </div>

          {/* Stats Section - Clean Design with Dividers */}
          <div className="bg-[#F8FAFC] rounded-2xl py-12 px-8 mt-20 border border-slate-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Stat 1 */}
              <div className="text-center relative">
                <div className="text-5xl sm:text-6xl font-ui font-black text-[#0D2B6B] mb-3 tracking-tight">
                  <Counter end={5} suffix="+" />
                </div>
                <div className="text-sm font-ui text-slate-600 font-medium">
                  Years of Experience
                </div>
                {/* Vertical Divider */}
                <div className="hidden md:block absolute top-0 bottom-0 -right-4 w-[1px] bg-slate-200"></div>
              </div>

              {/* Stat 2 */}
              <div className="text-center relative">
                <div className="text-5xl sm:text-6xl font-ui font-black text-[#0D2B6B] mb-3 tracking-tight">
                  <Counter end={10} suffix="K+" />
                </div>
                <div className="text-sm font-ui text-slate-600 font-medium">
                  Projects Completed
                </div>
                {/* Vertical Divider */}
                <div className="hidden md:block absolute top-0 bottom-0 -right-4 w-[1px] bg-slate-200"></div>
              </div>

              {/* Stat 3 */}
              <div className="text-center relative">
                <div className="text-5xl sm:text-6xl font-ui font-black text-[#0D2B6B] mb-3 tracking-tight">
                  <Counter end={15} suffix="+" />
                </div>
                <div className="text-sm font-ui text-slate-600 font-medium">
                  Happy Clients
                </div>
                {/* Vertical Divider */}
                <div className="hidden md:block absolute top-0 bottom-0 -right-4 w-[1px] bg-slate-200"></div>
              </div>

              {/* Stat 4 */}
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-ui font-black text-[#0D2B6B] mb-3 tracking-tight">
                  <Counter end={10} suffix="+" />
                </div>
                <div className="text-sm font-ui text-slate-600 font-medium">
                  Countries Served
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values - Redesigned with Professional Animation */}
        <section className="bg-gradient-to-b from-white to-slate-50 py-24 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">

            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#0D2B6B] to-[#0D2B6B] rounded-full"></div>
                  <span className="text-[#0D2B6B] font-ui text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Our Core Principles
                  </span>
                </div>
                <h2 className="text-3xl sm:text-[40px] font-display font-bold text-[#0D2B6B] tracking-tight leading-tight">
                  Values That Drive Us Forward
                </h2>
              </div>

              <div className="lg:max-w-md">
                <p className="font-sans font-normal text-slate-500 text-sm sm:text-base leading-relaxed">
                  Our commitment to excellence is built on four foundational principles that guide every project we undertake.
                </p>
              </div>
            </div>

            {/* Animated Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Absolute Precision",
                  desc: "We run secondary validations on all traffic counts to guarantee industry-leading data accuracy.",
                  icon: ShieldCheck,
                  color: "from-[#0D2B6B] to-[#1a3d7f]",
                  iconBg: "bg-[#0D2B6B]",
                  delay: 0
                },
                {
                  title: "Technological Edge",
                  desc: "Utilizing advanced AI visual processing and robust radar equipment for field setups.",
                  icon: Target,
                  color: "from-[#F57C00] to-[#ff6f00]",
                  iconBg: "bg-[#F57C00]",
                  delay: 0.1
                },
                {
                  title: "On-Time Compliance",
                  desc: "Delivering your reports within the target schedule to keep engineering projects on track.",
                  icon: BarChart3,
                  color: "from-[#0D2B6B] to-[#1a3d7f]",
                  iconBg: "bg-[#0D2B6B]",
                  delay: 0.2
                },
                {
                  title: "Dedicated Support",
                  desc: "A hands-on support desk with traffic specialists ready to explain parameters and raw data.",
                  icon: Users2,
                  color: "from-[#F57C00] to-[#ff6f00]",
                  iconBg: "bg-[#F57C00]",
                  delay: 0.3
                }
              ].map((val, idx) => {
                const IconComp = val.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: val.delay, ease: "easeOut" }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${val.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>

                    {/* Animated Icon Container */}
                    <motion.div
                      className="relative z-10 mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`w-16 h-16 ${val.iconBg} rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden`}>
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                        <IconComp className="w-7 h-7 text-white relative z-10" />
                      </div>

                      {/* Corner accent */}
                      <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${val.iconBg} rounded-tl-xl opacity-20`}></div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-ui font-bold text-[#0D2B6B] mb-3 group-hover:text-[#F57C00] transition-colors duration-300">
                        {val.title}
                      </h3>

                      {/* Animated underline */}
                      <motion.div
                        className="h-1 bg-gradient-to-r from-[#F57C00] to-transparent rounded-full mb-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: '60px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: val.delay + 0.2 }}
                      />

                      <p className="font-sans font-normal text-slate-600 text-sm leading-relaxed">
                        {val.desc}
                      </p>
                    </div>

                    {/* Bottom right corner accent */}
                    <motion.div
                      className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#F57C00]/5 to-transparent rounded-tl-full"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Top decorative dot */}
                    <div className="absolute top-6 right-6 w-2 h-2 bg-[#F57C00]/20 rounded-full group-hover:bg-[#F57C00] transition-colors duration-300"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission, Vision & Commitment Section */}
        <section className="bg-slate-50/50 py-16 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#F57C00] to-[#F57C00] rounded-full"></div>
                  <span className="text-[#F57C00] font-ui text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Our Foundation
                  </span>
                </div>
                <h2 className="text-3xl font-display font-bold text-[#0D2B6B] tracking-tight leading-tight">
                  Mission, Vision & Commitment
                </h2>
              </div>
              <div className="lg:max-w-md">
                <p className="font-sans font-normal text-slate-500 text-sm sm:text-base leading-relaxed">
                  We set high benchmarks for our services to deliver quality outputs and support planning with absolute trust.
                </p>
              </div>
            </div>

            {/* Compact Divided Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                
                {/* Mission */}
                <div className="p-8 md:p-10 flex flex-col gap-4 hover:bg-slate-50/[0.15] transition-colors duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-[#F57C00]/10 text-[#F57C00] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="font-ui text-xl font-bold text-[#0D2B6B] group-hover:text-[#F57C00] transition-colors duration-300">
                    Our Mission
                  </h3>
                  <p className="font-sans font-normal text-slate-500 text-sm sm:text-[15px] leading-relaxed">
                    To provide accurate, cost-effective, and dependable traffic data processing solutions that help transportation professionals make informed decisions.
                  </p>
                </div>

                {/* Vision */}
                <div className="p-8 md:p-10 flex flex-col gap-4 hover:bg-slate-50/[0.15] transition-colors duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-[#0D2B6B]/10 text-[#0D2B6B] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="font-ui text-xl font-bold text-[#0D2B6B] group-hover:text-[#F57C00] transition-colors duration-300">
                    Our Vision
                  </h3>
                  <p className="font-sans font-normal text-slate-500 text-sm sm:text-[15px] leading-relaxed">
                    To become a trusted global partner in traffic data analysis by delivering high-quality services, continuous innovation, and exceptional client support.
                  </p>
                </div>

                {/* Commitment */}
                <div className="p-8 md:p-10 flex flex-col gap-4 hover:bg-slate-50/[0.15] transition-colors duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-ui text-xl font-bold text-[#0D2B6B] group-hover:text-[#F57C00] transition-colors duration-300">
                    Our Commitment
                  </h3>
                  <p className="font-sans font-normal text-slate-500 text-sm sm:text-[15px] leading-relaxed">
                    We are committed to maintaining the highest standards of accuracy, confidentiality, and professionalism in every project we undertake. Your success is our priority.
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Working Approach Section */}
        <section className="bg-white py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Sticky Title Block */}
              <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#F57C00] to-[#F57C00] rounded-full"></div>
                  <span className="text-[#F57C00] font-ui text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Methodology
                  </span>
                </div>
                <h2 className="text-3xl sm:text-[40px] font-display font-bold text-[#0D2B6B] tracking-tight leading-tight">
                  Our Working Approach
                </h2>
                <p className="font-sans font-normal text-slate-500 text-sm sm:text-base leading-relaxed">
                  At HIFI Traffic Data Tech, we follow a professional and organized workflow to ensure every traffic survey project is completed with accuracy, consistency, and on-time delivery.
                </p>
              </div>

              {/* Right Column: Vertical Infographic Blocks */}
              <div className="lg:col-span-7 space-y-8">
                {[
                  {
                    number: "01",
                    title: "Understand",
                    desc: "We carefully study your project scope and reporting requirements.",
                    color: "text-[#F57C00]",
                    borderColor: "border-[#F57C00]/20",
                    bgColor: "bg-[#F57C00]/5"
                  },
                  {
                    number: "02",
                    title: "Execute",
                    desc: "Our team processes the data using proven traffic counting methodologies.",
                    color: "text-[#F57C00]",
                    borderColor: "border-[#F57C00]/20",
                    bgColor: "bg-[#F57C00]/5"
                  },
                  {
                    number: "03",
                    title: "Validate",
                    desc: "Multiple quality checks are performed to maintain high accuracy standards.",
                    color: "text-[#F57C00]",
                    borderColor: "border-[#F57C00]/20",
                    bgColor: "bg-[#F57C00]/5"
                  },
                  {
                    number: "04",
                    title: "Support",
                    desc: "We remain available for clarifications, revisions, and ongoing project assistance.",
                    color: "text-[#F57C00]",
                    borderColor: "border-[#F57C00]/20",
                    bgColor: "bg-[#F57C00]/5"
                  }
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                    className="flex gap-6 pb-8 border-b border-slate-100 last:border-0 last:pb-0"
                  >
                    {/* Number block with left colored border */}
                    <div className="flex flex-col items-center">
                      <span className={`font-ui text-2xl font-black ${step.color} tracking-tight select-none w-14 h-14 flex items-center justify-center ${step.bgColor} rounded-2xl border ${step.borderColor}`}>
                        {step.number}
                      </span>
                    </div>

                    {/* Step details */}
                    <div className="space-y-1.5 flex-1">
                      <h3 className="font-ui text-lg md:text-xl font-bold text-[#0D2B6B]">
                        {step.title}
                      </h3>
                      <p className="font-sans font-normal text-slate-500 text-sm sm:text-[15px] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Client Perspectives / Testimonials */}
        <section className="bg-[#EEF2F6] py-24 border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-6">

            {/* Simple Typography Section */}
            <div className="text-center">
              {/* Top Label with Lines */}
              <motion.div
                className="flex items-center justify-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-center gap-4">
                  <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#0D2B6B] to-[#0D2B6B]" />

                  <span className="text-[#0D2B6B] font-ui text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Our Commitment
                  </span>

                  <div className="w-24 h-[2px] bg-gradient-to-l from-transparent via-[#0D2B6B] to-[#0D2B6B]" />
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#0D2B6B] tracking-tight leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Delivering Confidence Through Data
              </motion.h2>

              {/* Description */}
              <motion.p
                className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                At HIFI Traffic Data Tech, our process is designed to provide more than just numbers. We deliver reliable traffic data that helps engineers, consultants, and planners make informed decisions with confidence.
              </motion.p>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </SmoothScroll>
  );
}
