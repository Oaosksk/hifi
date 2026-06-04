"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Play,
  Volume2,
  Map,
  Users,
  TrendingUp,
  Cpu,
  Clock,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

import Header from "./components/header";
import Footer from "./components/footer";
import Loader from "./components/loader";
import SmoothScroll from "./components/smooth-scroll";
import Counter from "./components/counter";
import ProcessSection from "./components/ProcessSection";
import IndustriesSection from "./components/IndustriesSection";
import GlobalCoverageSection from "./components/GlobalCoverageSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <SmoothScroll>
      <Header />

      <main className="flex-1 w-full bg-white">
        {/* HERO SECTION */}
        <section className="relative w-full bg-[#0a1628] border-b border-slate-800">

          {/* Video Background — fills the section absolutely */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/hr01.mp4" type="video/mp4" />
              {/* <source src="/hr02.mp4" type="video/mp4" /> */}
            </video>
            {/* Dark navy overlay for text contrast */}
            <div className="absolute inset-0 bg-[#0a1628]/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center pt-24 pb-32 md:pt-32 md:pb-40">

              {/* Tagline pill */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full border border-hifi-orange/40 bg-hifi-orange/10 text-hifi-orange font-ui font-bold text-xs uppercase tracking-widest"
              >
                {/* <span className="w-1.5 h-1.5 rounded-full bg-hifi-orange animate-pulse"></span> */}
                Trusted Traffic Data Solutions
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-[64px] font-bold text-white leading-[1.1] mb-6 tracking-tight"
              >
                Accurate Data<br />
                Smarter Decisions<br />
                <span className="text-hifi-orange">Better Tomorrow</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="font-sans font-normal text-white/75 text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
              >
                High-quality traffic data collection and analysis to support better planning, design and operational decisions.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16 w-full sm:w-auto"
              >
                <Link
                  href="/services"
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-hifi-orange text-white font-ui text-sm font-bold rounded-lg hover:bg-orange-600 transition-all shadow-lg shadow-hifi-orange/20 w-full sm:w-auto overflow-hidden relative h-14"
                >
                  <span className="flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-14">
                    Our Services
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <span className="absolute flex items-center gap-2 translate-y-14 transition-transform duration-300 ease-out group-hover:translate-y-0">
                    Our Services
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link
                  href="/get-quote"
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-ui text-sm font-bold rounded-lg hover:bg-white/20 transition-all w-full sm:w-auto overflow-hidden relative h-14"
                >
                  <span className="flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-14">
                    Contact Us
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <span className="absolute flex items-center gap-2 translate-y-14 transition-transform duration-300 ease-out group-hover:translate-y-0">
                    Contact Us
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>

              {/* Watch Our Video */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
                className="flex flex-col items-center gap-3"
              >
                <button
                  onClick={() => setVideoOpen(true)}
                  aria-label="Watch Demo Video"
                  className="group relative w-16 h-16 rounded-full border-2 border-white/60 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-hifi-blue hover:border-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl"
                >
                  <Play className="w-5 h-5 fill-current ml-1" />
                  <span className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping group-hover:animate-none pointer-events-none"></span>
                </button>
                <span
                  onClick={() => setVideoOpen(true)}
                  className="text-white/50 text-[11px] font-bold tracking-[0.2em] uppercase cursor-pointer hover:text-hifi-orange transition-colors"
                >
                  Watch Our Video
                </span>
              </motion.div> */}

            </div>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section className="bg-white py-16 md:py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">

              {/* Left Column: Line Tagline + Image */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                {/* About Us Tagline with line */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#0D2B6B] to-[#0D2B6B] rounded-full"></div>
                  <span className="text-[#0D2B6B] font-ui font-bold text-sm tracking-wide">
                    About Us
                  </span>
                </div>

                {/* Professional Team Image */}
                <div className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100/50">
                  <Image
                    src="/about_us_traffic.png"
                    alt="HIFI Traffic Data Tech team monitoring traffic systems"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Content, Button, Metrics */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div>
                  <h2 className="text-3xl sm:text-[42px] font-display font-bold text-[#0D2B6B] tracking-tight leading-tight mb-6">
                    Precise Traffic Data Grounded In Clarity & Trust
                  </h2>
                  <p className="font-sans font-normal text-slate-500 text-sm sm:text-base leading-relaxed">
                    At HIFI TRAFFIC DATA TECH, we provide high-fidelity traffic survey processing and engineering analysis grounded in absolute precision. Working closely with transportation planners, municipalities, and consulting firms, we deliver critical data insights that support smarter infrastructure and planning decisions. We take the time to validate every count, classify every vehicle, and offer reliable delivery timelines tailored to your project scopes.
                  </p>
                </div>

                <div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0D2B6B] text-white font-ui text-sm font-bold rounded-lg hover:bg-[#07193f] transition-colors group overflow-hidden relative h-12"
                  >
                    <span className="flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-12">
                      Learn More
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                    <span className="absolute flex items-center gap-2 translate-y-12 transition-transform duration-300 ease-out group-hover:translate-y-0">
                      Learn More
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
 
                {/* Metrics Flex Row */}
                <div className="flex flex-wrap items-center justify-between gap-8 pt-10 border-t border-slate-100 mt-4">
                  <div className="flex-1 min-w-[120px]">
                    <div className="text-3xl font-ui font-black text-[#0D2B6B] mb-0.5">
                      <Counter end={10} suffix="+" />
                    </div>
                    <div className="text-[10px] font-ui text-slate-500 font-bold tracking-wider uppercase">
                      Years of Experience
                    </div>
                  </div>
                  <div className="hidden md:block w-[1px] h-10 bg-slate-200"></div>

                  <div className="flex-1 min-w-[120px]">
                    <div className="text-3xl font-ui font-black text-[#0D2B6B] mb-0.5">
                      <Counter end={500} suffix="+" />
                    </div>
                    <div className="text-[10px] font-ui text-slate-500 font-bold tracking-wider uppercase">
                      Projects Completed
                    </div>
                  </div>
                  <div className="hidden md:block w-[1px] h-10 bg-slate-200"></div>

                  <div className="flex-1 min-w-[120px]">
                    <div className="text-3xl font-ui font-black text-[#0D2B6B] mb-0.5">
                      <Counter end={250} suffix="+" />
                    </div>
                    <div className="text-[10px] font-ui text-slate-500 font-bold tracking-wider uppercase">
                      Happy Clients
                    </div>
                  </div>
                  <div className="hidden md:block w-[1px] h-10 bg-slate-200"></div>

                  <div className="flex-1 min-w-[120px]">
                    <div className="text-3xl font-ui font-black text-[#0D2B6B] mb-0.5">
                      <Counter end={15} suffix="+" />
                    </div>
                    <div className="text-[10px] font-ui text-slate-500 font-bold tracking-wider uppercase">
                      Countries Served
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        <WhyChooseUs />

        {/* SERVICES SECTION */}
        <section className="bg-slate-50/50 py-16 md:py-24 border-t border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">

            {/* Redesigned Services Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              {/* Left Header */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#0D2B6B] to-[#0D2B6B] rounded-full"></div>
                  <span className="text-[#0D2B6B] font-ui text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Our Traffic Expertise
                  </span>
                </div>
                <h2 className="text-3xl sm:text-[40px] font-display font-bold text-[#0D2B6B] tracking-tight leading-tight">
                  Traffic Support Across Key Survey Areas
                </h2>
              </div>
 
              {/* Right Header */}
              <div className="lg:max-w-md flex flex-col items-start gap-6">
                <p className="font-sans font-normal text-slate-500 text-sm sm:text-base leading-relaxed">
                  We provide practical and accurate traffic data services tailored to traffic consultants, engineering firms, planning teams, and road safety professionals.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0D2B6B] text-white font-ui text-sm font-bold rounded-lg hover:bg-[#07193f] transition-all duration-300 group shadow-sm overflow-hidden relative h-12"
                >
                   <span className="flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-12">
                    View All Services
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <span className="absolute flex items-center gap-2 translate-y-12 transition-transform duration-300 ease-out group-hover:translate-y-0">
                    View All Services
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
 
            {/* Redesigned Services 3-Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Traffic Volume Count",
                  desc: "We provide accurate vehicle volume counts for roads, highways, site access points, and intersections. Data can be delivered by direction, time interval, lane, and vehicle type based on client requirements. This service helps clients understand traffic flow, peak-hour demand, road usage, and future planning needs.",
                  img: "/Our Services/traffic-volume/traffic-volume.png",
                  slug: "traffic-volume-studies"
                },
                {
                  title: "Turning Movement Count",
                  desc: "Our team captures turning movements at junctions and intersections, including Left, Right, Straight, and U-Turn movements. Turning movement count data is useful for signal design, junction capacity analysis, traffic impact assessment, and intersection improvement projects.",
                  img: "/turning_movement.png",
                  slug: "turning-movement-counts"
                },
                {
                  title: "Vehicle Classification Count",
                  desc: "We classify vehicles based on client-required categories such as car, motorcycle, bicycle, bus, light goods vehicle, heavy goods vehicle, truck, trailer, and other classes. We also support country-wise vehicle classification formats including USA, UK, Australia, South Africa, and other project-specific standards.",
                  img: "/Our Services/Link Count Surveys/360_F_126616293_rpRrEdTPBT23B5aJIcmyIFpLBd7nzN0g.png",
                  slug: "vehicle-classification"
                }
              ].map((svc, idx) => (
                <Link
                  key={idx}
                  href="/services"
                  className="relative h-[480px] rounded-2xl overflow-hidden shadow-sm border border-slate-100/50 group block"
                >
                  {/* Background Image */}
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
 
                  {/* Premium Dark Navy Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/50 to-transparent"></div>
 
                  {/* Card Content absolute container */}
                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-start justify-end h-full z-10">
                    <h3 className="text-xl sm:text-2xl font-ui font-bold text-white mb-3 group-hover:text-hifi-orange transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <p className="font-sans font-normal text-white/70 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                      {svc.desc}
                    </p>
 
                    {/* Learn More link */}
                    <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-ui font-bold text-white group-hover:text-hifi-orange transition-colors overflow-hidden relative h-5">
                      <span className="flex items-center gap-1.5 transition-transform duration-300 ease-out group-hover:-translate-y-6">
                        Learn More
                        <ArrowUpRight className="w-4 h-4 rotate-90" />
                      </span>
                      <span className="absolute flex items-center gap-1.5 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-y-0">
                        Learn More
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ProcessSection />

        {/* OUR COMMITMENT */}
        <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden mt-20 md:mt-32">

          {/* Background image placeholder — swap src for real traffic photo */}
          <div className="absolute inset-0">
            <Image
              src="/our commitements.png"
              alt="Traffic engineering and analytics — HIFI commitment"
              fill
              sizes="100vw"
              className="object-cover scale-105"
              priority={false}
            />
            {/* Dark navy overlay 78% */}
            <div className="absolute inset-0 bg-[#07193f]/78" />
            {/* Gradient layer for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#07193f]/20 via-transparent to-[#07193f]/60" />
          </div>

          {/* Centered Content */}
          <div className="relative z-10 max-w-[900px] mx-auto px-6 py-16 md:py-24 flex flex-col items-center gap-6 text-white text-center">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-3"
            >
              <div className="h-[2px] w-24 rounded-[10px] bg-gradient-to-r from-transparent via-white/50 to-white"></div>
              <span className="text-white font-ui text-xs sm:text-sm font-bold uppercase tracking-wider">
                Our Commitment
              </span>
              <div className="h-[2px] w-24 rounded-[10px] bg-gradient-to-l from-transparent via-white/50 to-white"></div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: "easeOut", delay: 0.18 }}
              className="text-[38px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-display font-bold leading-[1.08] tracking-tight"
            >
              Accuracy, Speed & Trust
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
              className="font-sans font-normal text-white/75 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl"
            >
              <p>
                We transform survey videos into meaningful traffic data that supports real engineering decisions. Our mission is to be your trusted partner through accurate reports, clear communication, and dependable support.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.5 }}
              className="mt-3"
            >
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-white text-[#0D2B6B] font-ui text-sm font-bold rounded-lg hover:bg-[#F57C00] hover:text-white transition-all duration-300 shadow-2xl shadow-black/30 group overflow-hidden relative h-14"
              >
                <span className="flex items-center gap-2.5 transition-transform duration-300 ease-out group-hover:-translate-y-14">
                  Get Started With Us
                  <ArrowUpRight className="w-4 h-4" />
                </span>
                <span className="absolute flex items-center gap-2.5 translate-y-14 transition-transform duration-300 ease-out group-hover:translate-y-0">
                  Get Started With Us
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>

          </div>
        </section>

        {/* INDUSTRIES WE SUPPORT */}
        <IndustriesSection />

        {/* GLOBAL COVERAGE SECTION */}
        <GlobalCoverageSection />

        {/* CLIENT LOGOS SECTION */}
        {/* <section className="bg-slate-50 py-16 border-t border-b border-slate-100 text-center">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-[0.25em] mb-10">
              Trusted by Clients Across the Globe
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-40 grayscale">
              <span className="text-xl md:text-2xl font-black text-slate-800 tracking-tighter">AECOM</span>
              <span className="text-xl md:text-2xl font-semibold text-slate-800 tracking-wide uppercase">PARSONS</span>
              <span className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">Stantec</span>
              <span className="text-xl md:text-2xl font-medium text-slate-800 tracking-widest uppercase">ARUP</span>
              <span className="text-xl md:text-2xl font-black text-slate-800 tracking-wide uppercase font-serif">HATCH</span>
              <span className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tighter italic">WSP</span>
            </div>
          </div>
        </section> */}

        

      </main>

      <Footer />
    </SmoothScroll>
  );
}
