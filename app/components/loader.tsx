"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [percent, setPercent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const barContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation
      const obj = { value: 0 };
      gsap.to(obj, {
        value: 100,
        duration: 2.2,
        ease: "power2.out",
        onUpdate: () => {
          setPercent(Math.floor(obj.value));
        },
      });

      // Animate traffic bars upwards
      gsap.fromTo(
        ".traffic-bar",
        { scaleY: 0, transformOrigin: "bottom" },
        {
          scaleY: 1,
          duration: 1.8,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      // Fade out timeline
      const tl = gsap.timeline({
        delay: 2.3,
        onComplete: onComplete,
      });

      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center max-w-sm w-full px-6">
        {/* HIFI Logo SVG */}
        <div className="flex items-center gap-3 mb-8">
          <div className="relative w-12 h-12 flex items-center justify-center bg-[#0D2B6B] rounded-xl overflow-hidden shadow-sm">
            <div className="flex items-end gap-1 h-7">
              <span className="w-1 bg-[#F57C00]" style={{ height: '40%' }}></span>
              <span className="w-1 bg-white" style={{ height: '75%' }}></span>
              <span className="w-1 bg-[#F57C00]" style={{ height: '100%' }}></span>
              <span className="w-1 bg-white" style={{ height: '55%' }}></span>
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-black tracking-tight text-[#0D2B6B] leading-none flex items-center">
              HIFI<span className="text-[#F57C00] font-light ml-0.5">TRAFFIC</span>
            </h1>
            <p className="text-[8px] uppercase tracking-[0.25em] text-slate-500 font-bold mt-1">
              Traffic Data Tech
            </p>
          </div>
        </div>

        {/* Traffic bars animating upwards */}
        <div ref={barContainerRef} className="flex items-end justify-center gap-2 h-16 mb-8 w-full">
          <div className="traffic-bar w-2 h-10 bg-[#0D2B6B] rounded-t"></div>
          <div className="traffic-bar w-2 h-16 bg-[#F57C00] rounded-t"></div>
          <div className="traffic-bar w-2 h-12 bg-[#0D2B6B] rounded-t"></div>
          <div className="traffic-bar w-2 h-20 bg-[#F57C00] rounded-t"></div>
          <div className="traffic-bar w-2 h-14 bg-[#0D2B6B] rounded-t"></div>
          <div className="traffic-bar w-2 h-8 bg-[#F57C00] rounded-t"></div>
        </div>

        {/* Loading text and percentage */}
        <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-[#F57C00] transition-all duration-75"
            style={{ width: `${percent}%` }}
          ></div>
        </div>

        <div className="flex justify-between w-full text-xs text-slate-500 font-medium">
          <span>Loading Data...</span>
          <span className="font-bold text-[#0D2B6B]">{percent}%</span>
        </div>
      </div>
    </div>
  );
}
