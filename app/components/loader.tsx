"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [percent, setPercent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Logo entrance
      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      );

      // Counter animation
      const obj = { value: 0 };
      tl.to(
        obj,
        {
          value: 100,
          duration: 2,
          ease: "power1.inOut",
          onUpdate: () => setPercent(Math.floor(obj.value)),
        },
        "+=0.1"
      );

      // Fade out
      tl.to(
        containerRef.current,
        { opacity: 0, duration: 0.5, ease: "power2.inOut", onComplete },
        "+=0.3"
      );
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center gap-8 px-8 w-full max-w-xs">

        {/* Real HIFI Logo */}
        <div ref={logoRef} className="opacity-0 flex flex-col items-center ">
          <div className="relative w-32 h-25">
            <Image
              src="/hifi-logo.svg"
              alt="HIFI Traffic Data Tech"
              fill
              sizes="128px"
              className="object-contain"
              priority
            />
          </div>
          {/* <div className="text-center">
            <h1 className="text-xl font-black tracking-tight text-[#0D2B6B] leading-none">
              HIFI<span className="text-[#F57C00] font-light ml-0.5">TRAFFIC</span>
            </h1>
            <p className="text-[8px] uppercase tracking-[0.25em] text-slate-400 font-bold mt-1">
              Traffic Data Tech
            </p>
          </div> */}
        </div>

        {/* Progress bar */}
        <div className="w-full space-y-2">
          <div className="w-full h-[3px] bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#F57C00] rounded-full transition-all duration-75"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-ui text-slate-400 font-medium">Loading...</span>
            <span className="text-[10px] font-ui font-bold text-[#0D2B6B] tabular-nums">{percent}%</span>
          </div>
        </div>

      </div>
    </div>
  );
}
