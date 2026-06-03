"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import SmoothScroll from "../components/smooth-scroll";

const CATEGORIES = [
  {
    title: "Intersection & Volume Surveys",
    desc: "High-precision traffic volume counting and turning movement analysis for major corridors, junctions, and complex highway intersections.",
    services: [
      {
        title: "Traffic Volume Count",
        desc: "We provide accurate vehicle volume counts for roads, highways, site access points, and intersections. Data can be delivered by direction, time interval, lane, and vehicle type based on client requirements.",
        asset: "/Our Services/tv.png"
      },
      {
        title: "Turning Movement Count",
        desc: "Our team captures turning movements at junctions and intersections, including Left, Right, Straight, and U-Turn movements. Turning movement count data is useful for signal design and junction analysis.",
        asset: "/Our Services/2.Turning Count Surveys/turning-movement-count-survey.jpeg"
      },
      {
        title: "Vehicle Classification Count",
        desc: "We classify vehicles based on client-required categories such as car, motorcycle, bicycle, bus, light goods vehicle, heavy goods vehicle, truck, trailer, and custom classification schemas.",
        asset: "/Our Services/1.Link Count Surveys/360_F_126616293_rpRrEdTPBT23B5aJIcmyIFpLBd7nzN0g.jpg"
      },
      {
        title: "Speed & Travel Time Analysis",
        desc: "We analyse vehicle travel time and speed patterns from survey videos or provided data to help identify delay points, congestion areas, and corridor performance profiles.",
        asset: "/Our Services/11.Saturation Flow Surveys/DWxiqB6UMAAmEG4.jpg_large.jpg"
      },
      {
        title: "Manual Video-Based Data Processing",
        desc: "Clients share traffic survey videos, templates, and layouts. Our trained analysts process the data manually with strong attention to detail and multiple quality assurance check loops.",
        asset: "/Our Services/3.Intersection Count Surveys/intersection.jpeg"
      }
    ]
  },
  {
    title: "Active & Public Transport",
    desc: "Detailed studies for pedestrians, cyclists, transit systems, and parking facilities to support multimodal planning and urban accessibility.",
    services: [
      {
        title: "Pedestrian Count",
        desc: "We capture pedestrian movements at crossings, sidewalks, junctions, entrances, and public areas to support safety studies, crossing design, and urban mobility projects.",
        asset: "/Our Services/pedestriancount.png"
      },
      {
        title: "Cyclist Count",
        desc: "We provide cyclist movement data for cycle lanes, intersections, shared paths, and road corridors to help clients understand cycling demand and active transport planning.",
        asset: "/Our Services/6.Pedestrian & Cycle Surveys/47-of-respondents-to-Greater-Manchester-survey-open-to-walking-and-cycling-more-post-pandemic.jpg"
      },
      {
        title: "Parking Survey Analysis",
        desc: "We provide parking occupancy, parking duration, turnover, accumulation, and demand analysis for commercial buildings, residential developments, and public facilities.",
        asset: "/Our Services/10.Parking Surveys/PARKING.jpeg"
      },
      {
        title: "Origin-Destination Survey Support",
        desc: "We support origin-destination data processing to understand travel patterns, route choices, and movement behavior, helping planners make better transport decisions.",
        asset: "/Our Services/8.Origin-Destination Surveys/The-traffic-on-multi-lane-road.png"
      },
      {
        title: "Event Log Analysis",
        desc: "We provide accurate event log analysis for traffic studies, construction zones, and traffic management projects, recording incidents, congestion events, and signal changes.",
        asset: "/Our Services/4.Bus Occupancy Surveys/vecteezy_vancouver-canada-2023-people-lining-up-to-board-a-translink_45981710.jpg"
      }
    ]
  },
  {
    title: "Operational & Technology Studies",
    desc: "Advanced congestion modeling, queue length metrics, license plate matching, and operational delay assessments for modern corridors.",
    services: [
      {
        title: "Queue Length Analysis",
        desc: "We analyse vehicle queues at junctions, signals, roundabouts, and access points to identify congestion, delay, traffic pressure, and operational issues.",
        asset: "/Our Services/9.Queue Length Surveys/WbQaVyg.jpeg"
      },
      {
        title: "Delay Analysis",
        desc: "Our delay analysis service helps clients understand how long vehicles are waiting or slowing down at a location, useful for traffic signal studies and congestion analysis.",
        asset: "/Our Services/delay.png"
      },
      {
        title: "ANPR Data Processing",
        desc: "We provide professional ANPR data processing support for vehicle tracking, travel pattern analysis, and origin-destination studies, helping track route behavior.",
        asset: "/Our Services/7.Registration Plate Surveys (ANPR)/W311475974_g.jpg"
      },
      {
        title: "Delay Time Analysis",
        desc: "We analyse vehicle waiting time, signal delay, congestion impact, and traffic slowdown patterns to help identify operational issues and improve road flow efficiency.",
        asset: "/Our Services/dt.png"
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

        {/* Categories Section Grid */}
        <section className="py-24 max-w-7xl mx-auto px-6 space-y-24">

          {/* Main Headline Block matching reference design */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-slate-100">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#0D2B6B] to-[#0D2B6B] rounded-full"></div>
                <span className="text-[#0D2B6B] font-semibold text-sm tracking-wide">
                  OUR TRAFFIC EXPERTISE
                </span>
              </div>
              <h2 className="text-3xl sm:text-[44px] font-extrabold text-[#0D2B6B] tracking-tight leading-tight">
                Traffic Support Across Key Survey Areas
              </h2>
            </div>

            <div className="lg:max-w-md">
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                We provide practical and accurate traffic data services tailored to traffic consultants, engineering firms, planning teams, and road safety professionals.
              </p>
            </div>
          </div>

          {/* Render category sections dynamically */}
          {CATEGORIES.map((category, catIdx) => (
            <div key={catIdx} className="space-y-12">

              {/* Category Sub-Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#0D2B6B] tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1 max-w-xl">
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
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                        <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
                      </div>

                      {/* Content block */}
                      <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                        <div className="space-y-3">
                          <h4 className="text-xl font-bold text-[#0D2B6B] group-hover:text-[#F57C00] transition-colors leading-tight">
                            {svc.title}
                          </h4>
                          <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed line-clamp-4">
                            {svc.desc}
                          </p>
                        </div>

                        {/* CTA Link matching reference */}
                        <div className="pt-2">
                          <Link
                            href="/get-quote"
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#0D2B6B] group-hover:text-[#F57C00] transition-colors overflow-hidden relative h-4"
                          >
                            <span className="flex items-center gap-1 transition-transform duration-300 ease-out group-hover:-translate-y-5">
                              Request Quote
                              <ArrowUpRight className="w-3.5 h-3.5 rotate-90" />
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
              <source src="/Our Services/3.Intersection Count Surveys/218013_tiny.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[#0a1628]/75" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center text-white">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-white/60" />
              <span className="text-white/80 font-semibold text-xs tracking-widest uppercase">
                Your Next Step Starts Here
              </span>
              <div className="w-12 h-[1px] bg-white/60" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
              Accurate Traffic Data Built On<br />Clarity, Experience, And Trust
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              We take the time to understand your project requirements and provide clear, thoughtful traffic data analysis tailored to your needs.
            </p>

            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm font-bold rounded hover:bg-[#F57C00] hover:border-[#F57C00] transition-all duration-500 shadow-xl group overflow-hidden relative h-14"
            >
              <span className="flex items-center gap-2 transition-transform duration-500 ease-in-out group-hover:-translate-y-14">
               Contact Us
                <ArrowUpRight className="w-4 h-4 rotate-90" />
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
