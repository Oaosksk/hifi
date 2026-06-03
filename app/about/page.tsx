"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Target, BarChart3, Users2 } from "lucide-react";
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
        <section className="bg-white py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              {/* Left side */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#0D2B6B] to-[#0D2B6B] rounded-full"></div>
                  <span className="text-[#0D2B6B] font-semibold text-sm tracking-wide">
                    WHO WE ARE
                  </span>
                </div>
                <h1 className="text-3xl sm:text-[44px] font-extrabold text-[#0D2B6B] tracking-tight leading-tight">
                  About HIFI Traffic Data Tech
                </h1>
              </div>

              {/* Right side */}
              <div className="lg:max-w-md">
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
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
                src="/about_us_traffic.png"
                alt="HIFI Traffic Data Tech professional team"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Content */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#0D2B6B] to-[#0D2B6B] rounded-full"></div>
                <span className="text-[#0D2B6B] font-semibold text-sm tracking-wide">
                  About Us
                </span>
              </div>
              <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#0D2B6B] tracking-tight leading-tight mb-6">
                Precise Traffic Data Grounded In Clarity & Trust
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                HIFI TRAFFIC DATA TECH is a dedicated traffic data processing company from India, supporting clients across the USA, UK, Australia, South Africa, UAE, Canada, and other countries.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                We understand that every traffic project needs accuracy, clarity, and on-time delivery. That is why every project is handled carefully by trained analysts and checked before submission.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From simple traffic volume counts to complex turning movement counts, pedestrian studies, cyclist counts, vehicle classification, queue analysis, and parking surveys, we provide reliable data that helps clients make confident engineering decisions.
              </p>
            </div>
          </div>

          {/* Stats Section - Clean Design with Dividers */}
          <div className="bg-[#F8FAFC] rounded-2xl py-12 px-8 mt-20 border border-slate-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Stat 1 */}
              <div className="text-center relative">
                <div className="text-5xl sm:text-6xl font-black text-[#0D2B6B] mb-3 tracking-tight">
                  <Counter end={10} suffix="+" />
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  Years of Experience
                </div>
                {/* Vertical Divider */}
                <div className="hidden md:block absolute top-0 bottom-0 -right-4 w-[1px] bg-slate-200"></div>
              </div>

              {/* Stat 2 */}
              <div className="text-center relative">
                <div className="text-5xl sm:text-6xl font-black text-[#0D2B6B] mb-3 tracking-tight">
                  <Counter end={500} suffix="+" />
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  Projects Completed
                </div>
                {/* Vertical Divider */}
                <div className="hidden md:block absolute top-0 bottom-0 -right-4 w-[1px] bg-slate-200"></div>
              </div>

              {/* Stat 3 */}
              <div className="text-center relative">
                <div className="text-5xl sm:text-6xl font-black text-[#0D2B6B] mb-3 tracking-tight">
                  <Counter end={250} suffix="+" />
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  Clients Worldwide
                </div>
                {/* Vertical Divider */}
                <div className="hidden md:block absolute top-0 bottom-0 -right-4 w-[1px] bg-slate-200"></div>
              </div>

              {/* Stat 4 */}
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-black text-[#0D2B6B] mb-3 tracking-tight">
                  <Counter end={15} suffix="+" />
                </div>
                <div className="text-sm text-slate-600 font-medium">
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
                  <span className="text-[#0D2B6B] font-semibold text-sm tracking-wide">
                    Our Core Principles
                  </span>
                </div>
                <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#0D2B6B] tracking-tight leading-tight">
                  Values That Drive Us Forward
                </h2>
              </div>
              
              <div className="lg:max-w-md">
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
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
                      <h3 className="text-xl font-black text-[#0D2B6B] mb-3 group-hover:text-[#F57C00] transition-colors duration-300">
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
                      
                      <p className="text-slate-600 text-sm leading-relaxed">
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

        {/* TEAM SECTION */}
        <section className="bg-white py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">

            {/* Header section */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              {/* Left Header */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#0D2B6B] to-[#0D2B6B] rounded-full"></div>
                  <span className="text-[#0D2B6B] font-semibold text-sm tracking-wide">
                    Our Team
                  </span>
                </div>
                <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#0D2B6B] tracking-tight leading-tight">
                  Expert Traffic Analysts. Strategic Solutions.
                </h2>
              </div>

              {/* Right Header */}
              <div className="lg:max-w-md flex flex-col items-start gap-6">
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  A collaborative team committed to precise traffic analysis, data accuracy, and dependable engineering support.
                </p>
              </div>
            </div>

            {/* Team Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Rajesh Kumar",
                  role: "Senior Traffic Engineer",
                  img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
                },
                {
                  name: "Priya Sharma",
                  role: "Lead Traffic Analyst",
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                },
                {
                  name: "Amit Patel",
                  role: "Field Operations Director",
                  img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
                }
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="relative h-[480px] rounded-2xl overflow-hidden shadow-lg border border-slate-100/50 group animate-in fade-in"
                >
                  {/* Background Image */}
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Premium Dark Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/40 to-transparent"></div>

                  {/* Top Right "+" Button Icon */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-lg bg-white/95 backdrop-blur-sm flex items-center justify-center text-[#0d2b6b] border border-slate-200/20 shadow-md group-hover:bg-[#F57C00] group-hover:text-white transition-colors duration-300">
                    <span className="text-xl font-bold">+</span>
                  </div>

                  {/* Card Content absolute container */}
                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-start justify-end h-full z-10">
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-1 group-hover:text-hifi-orange transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
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

  <span className="text-[#0D2B6B] font-medium text-sm tracking-wide">
    Client Perspectives
  </span>

  <div className="w-24 h-[2px] bg-gradient-to-l from-transparent via-[#0D2B6B] to-[#0D2B6B]" />
</div>
              </motion.div>
              
              {/* Main Heading */}
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0D2B6B] tracking-tight leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Trusted By Individuals And Businesses Alike
              </motion.h2>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </SmoothScroll>
  );
}
