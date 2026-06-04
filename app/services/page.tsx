"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import SmoothScroll from "../components/smooth-scroll";

const CATEGORIES = [
  {
    id: "intersection-volume",
    title: "Intersection & Volume Surveys",
    desc: "High-precision traffic volume counting and turning movement analysis for major corridors, junctions, and complex highway intersections.",
    services: [
      {
        title: "Traffic Volume Count",
        desc: "We provide accurate vehicle volume counts for roads, highways, site access points, and intersections. Data can be delivered by direction, time interval, lane, and vehicle type based on client requirements.",
        asset: "/Our Services/traffic-volume/traffic-volume.png"
      },
      {
        title: "Turning Movement Count",
        desc: "Our team captures turning movements at junctions and intersections, including Left, Right, Straight, and U-Turn movements. Turning movement count data is useful for signal design and junction analysis.",
        asset: "/turning_movement.png"
      },
      {
        title: "Vehicle Classification Count",
        desc: "We classify vehicles based on client-required categories such as car, motorcycle, bicycle, bus, light goods vehicle, heavy goods vehicle, truck, trailer, and custom classification schemas.",
        asset: "/Our Services/Link Count Surveys/360_F_126616293_rpRrEdTPBT23B5aJIcmyIFpLBd7nzN0g.png"
      },
      {
        title: "Speed & Travel Time Analysis",
        desc: "We analyse vehicle travel time and speed patterns from survey videos or provided data to help identify delay points, congestion areas, and corridor performance profiles.",
        asset: "/Our Services/speed and travel time analysis/speed and travel time analysis.png"
      },
      {
        title: "Manual Video-Based Data Processing",
        desc: "Clients share traffic survey videos, templates, and layouts. Our trained analysts process the data manually with strong attention to detail and multiple quality assurance check loops.",
        asset: "/about_us_traffic.png"
      }
    ]
  },
  {
    id: "active-transport",
    title: "Active & Public Transport",
    desc: "Detailed studies for pedestrians, cyclists, transit systems, and parking facilities to support multimodal planning and urban accessibility.",
    services: [
      {
        title: "Pedestrian Count",
        desc: "We capture pedestrian movements at crossings, sidewalks, junctions, entrances, and public areas to support safety studies, crossing design, and urban mobility projects.",
        asset: "/Our Services/Pedestrian & Cycle Surveys/PEDS.png"
      },
      {
        title: "Cyclist Count",
        desc: "We provide cyclist movement data for cycle lanes, intersections, shared paths, and road corridors to help clients understand cycling demand and active transport planning.",
        asset: "/Our Services/Cycle Count/cycle-count.png"
      },
      {
        title: "Parking Survey Analysis",
        desc: "We provide parking occupancy, parking duration, turnover, accumulation, and demand analysis for commercial buildings, residential developments, and public facilities.",
        asset: "/Our Services/parking/PARKING.png"
      },
      {
        title: "Origin-Destination Survey Support",
        desc: "We support origin-destination data processing to understand travel patterns, route choices, and movement behavior, helping planners make better transport decisions.",
        asset: "/Our Services/Origin-Destination Surveys/The-traffic-on-multi-lane-road.png"
      },
      {
        title: "Event Log Analysis",
        desc: "We provide accurate event log analysis for traffic studies, construction zones, and traffic management projects, recording incidents, congestion events, and signal changes.",
        asset: "/Our Services/Event log analysis/eventloganalysis.png"
      }
    ]
  },
  {
    id: "operational-studies",
    title: "Operational & Technology Studies",
    desc: "Advanced congestion modeling, queue length metrics, license plate matching, and operational delay assessments for modern corridors.",
    services: [
      {
        title: "Queue Length Analysis",
        desc: "We analyse vehicle queues at junctions, signals, roundabouts, and access points to identify congestion, delay, traffic pressure, and operational issues.",
        asset: "/Our Services/Queue Length Analysis/WbQaVyg.png"
      },
      {
        title: "Delay Analysis",
        desc: "Our delay analysis service helps clients understand how long vehicles are waiting or slowing down at a location, useful for traffic signal studies and congestion analysis.",
        asset: "/Our Services/delay/delay.png"
      },
      {
        title: "ANPR Data Processing",
        desc: "We provide professional ANPR data processing support for vehicle tracking, travel pattern analysis, and origin-destination studies, helping track route behavior.",
        asset: "/Our Services/ANPR Data Processing/W311475974_g.png"
      },
      {
        title: "Delay Time Analysis",
        desc: "We analyse vehicle waiting time, signal delay, congestion impact, and traffic slowdown patterns to help identify operational issues and improve road flow efficiency.",
        asset: "/Our Services/delay-time analysis/delay-time-analysis.png"
      }
    ]
  }
];

export default function ServicesPage() {
  const isVideo = (path: string) => {
    const ext = path.split('.').pop()?.toLowerCase();
    return ext === 'mp4' || ext === 'mov';
  };

  return (
    <SmoothScroll>
      <Header />

      <main className="flex-1 w-full bg-[#FCFDFE] pt-20">

        {/* Banner Hero */}
        <section className="bg-[#07193f] pt-32 pb-20 text-white relative overflow-hidden">
          {/* Road Network / Intersection SVG Vector — Services page */}
          <div className="absolute inset-0 select-none pointer-events-none overflow-hidden">
            <svg viewBox="0 0 900 300" fill="none" className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="xMidYMid slice">
              {/* Horizontal highway */}
              <rect x="0" y="130" width="900" height="20" fill="white" />
              {/* Vertical road crossing center */}
              <rect x="420" y="0" width="18" height="300" fill="white" />
              {/* Second vertical road right */}
              <rect x="700" y="0" width="14" height="300" fill="white" />
              {/* Secondary horizontal road */}
              <rect x="0" y="230" width="900" height="12" fill="white" />
              {/* Left ramp diagonal */}
              <line x1="200" y1="140" x2="320" y2="230" stroke="white" strokeWidth="10" />
              {/* Right ramp diagonal */}
              <line x1="600" y1="140" x2="700" y2="230" stroke="white" strokeWidth="10" />
              {/* Roundabout circle at intersection */}
              <circle cx="429" cy="140" r="38" stroke="white" strokeWidth="10" fill="none" />
              {/* Lane dividers on main highway */}
              <rect x="0" y="139" width="40" height="3" fill="white" opacity="0.5" />
              <rect x="80" y="139" width="40" height="3" fill="white" opacity="0.5" />
              <rect x="160" y="139" width="40" height="3" fill="white" opacity="0.5" />
              <rect x="520" y="139" width="40" height="3" fill="white" opacity="0.5" />
              <rect x="610" y="139" width="40" height="3" fill="white" opacity="0.5" />
              <rect x="760" y="139" width="40" height="3" fill="white" opacity="0.5" />
              <rect x="840" y="139" width="40" height="3" fill="white" opacity="0.5" />
              {/* Speed camera mast */}
              <line x1="820" y1="80" x2="820" y2="130" stroke="white" strokeWidth="5" />
              <rect x="808" y="68" width="24" height="14" rx="3" fill="white" />
              {/* Traffic light mast left */}
              <line x1="380" y1="50" x2="380" y2="130" stroke="white" strokeWidth="4" />
              <rect x="369" y="38" width="12" height="18" rx="3" fill="white" />
              {/* Small vehicle silhouettes on road */}
              <rect x="60" y="123" width="28" height="12" rx="3" fill="white" opacity="0.6" />
              <rect x="560" y="145" width="28" height="12" rx="3" fill="white" opacity="0.6" />
              <rect x="760" y="123" width="28" height="12" rx="3" fill="white" opacity="0.6" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              {/* Left side */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#F57C00] to-[#F57C00] rounded-full"></div>
                  <span className="text-[#F57C00] font-ui font-bold text-sm tracking-wide">
                    OUR TRAFFIC EXPERTISE
                  </span>
                </div>
                <h1 className="text-3xl sm:text-[44px] font-display font-bold text-white tracking-tight leading-tight">
                  Traffic Survey Services
                </h1>
              </div>

              {/* Right side */}
              <div className="lg:max-w-md">
                <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
                  We provide practical and accurate traffic data services tailored to traffic consultants, engineering firms, planning teams, and road safety professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section Grid */}
        <section className="py-20 max-w-7xl mx-auto px-6 space-y-24">

          {/* Render category sections dynamically */}
          {CATEGORIES.map((category, catIdx) => (
            <div key={catIdx} id={category.id} className="space-y-12 scroll-mt-28">

              {/* Category Sub-Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <h3 className="text-2xl font-ui font-bold text-[#0D2B6B] tracking-tight">
                    {category.title}
                  </h3>
                  <p className="font-sans text-slate-500 text-sm mt-1 max-w-xl">
                    {category.desc}
                  </p>
                </div>
              </div>

              {/* 3-Column Grid of service cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((svc, svcIdx) => {
                  const isAssetVideo = isVideo(svc.asset);

                  return (
                    <div
                      key={svcIdx}
                      className="bg-white rounded overflow-hidden border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.015)] flex flex-col justify-between hover:shadow-[0_12px_35px_rgba(0,0,0,0.04)] hover:border-[#F57C00]/20 transition-all duration-300 group cursor-pointer"
                    >
                      {/* Media Header with fixed aspect ratio */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-50">
                        {isAssetVideo ? (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover scale-101 group-hover:scale-105 transition-transform duration-500"
                          >
                            <source src={svc.asset} type="video/mp4" />
                          </video>
                        ) : (
                          <Image
                            src={svc.asset}
                            alt={svc.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                        <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
                      </div>

                      {/* Content block */}
                      <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                        <div className="space-y-3">
                          <h4 className="font-ui text-xl font-bold text-[#0D2B6B] group-hover:text-[#F57C00] transition-colors leading-tight">
                            {svc.title}
                          </h4>
                          <p className="font-sans text-slate-500 text-xs sm:text-[13px] leading-relaxed line-clamp-4">
                            {svc.desc}
                          </p>
                        </div>

                        {/* CTA Link matching reference */}
                        <div className="pt-2">
                          <Link
                            href="/get-quote"
                            className="inline-flex items-center gap-1 text-xs font-ui font-bold text-[#0D2B6B] group-hover:text-[#F57C00] transition-colors overflow-hidden relative h-4"
                          >
                            <span className="flex items-center gap-1 transition-transform duration-300 ease-out group-hover:-translate-y-5">
                              Request Quote
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </span>
                            <span className="absolute flex items-center gap-1 translate-y-5 transition-transform duration-300 ease-out group-hover:translate-y-0">
                              Request Quote
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

        </section>

        {/* Video Background CTA Section */}
        <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden mb-50">
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/Our Services/end-display.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[#0a1628]/75" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center text-white">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-24 rounded-[10px] bg-gradient-to-r from-transparent via-white/50 to-white" />
              <span className="text-white font-ui font-bold text-sm tracking-wide">
                Your Next Step Starts Here
              </span>
              <div className="h-[2px] w-24 rounded-[10px] bg-gradient-to-l from-transparent via-white/50 to-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6 tracking-tight">
              Accurate Traffic Data Built On<br />Clarity, Experience, And Trust
            </h2>

            <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              We take the time to understand your project requirements and provide clear, thoughtful traffic data analysis tailored to your needs.
            </p>

            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-ui text-sm font-bold rounded hover:bg-[#F57C00] hover:border-[#F57C00] transition-all duration-500 shadow-xl group overflow-hidden relative h-14"
            >
              <span className="flex items-center gap-2 transition-transform duration-500 ease-in-out group-hover:-translate-y-14">
               Contact Us
                <ArrowUpRight className="w-4 h-4" />
              </span>
              <span className="absolute flex items-center gap-2 translate-y-14 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
               Contact Us
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </section>

        {/* CTA banner */}
        {/* <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-[#FFF8F2] border border-[#F57C00]/10 rounded-2xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="relative z-10 text-center md:text-left flex-1 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2B6B] tracking-tight mb-3">
                Let's Build Better Tomorrow Together
              </h2>
              <p className="text-slate-650 text-sm leading-relaxed">
                Partner with HIFI for reliable traffic data and smarter solutions.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <Link
                href="/get-quote"
                className="flex items-center gap-1.5 px-6 py-4 bg-[#F57C00] text-white text-sm font-bold rounded-lg hover:bg-[#E65100] transition-colors shadow-md cursor-pointer"
              >
                Get a Quote Today
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section> */}

      </main>

      <Footer />
    </SmoothScroll>
  );
}
