"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Only the home page gets the transparent-to-solid effect.
  // All other pages always show a solid white header.
  const isHomePage = pathname === "/";
  const isSolid = !isHomePage || isScrolled;

  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isSolid
          ? "bg-white shadow-sm border-b border-slate-200/50"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-20 h-20 rounded-xl overflow-hidden transition-transform group-hover:scale-105 duration-300 bg-transparent">
            <Image
              src="/hifi-logo.svg"
              alt="HIFI Traffic Data Tech logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-left">
            <h1
              className={`text-xl font-black tracking-tight leading-none flex items-center transition-colors duration-300 ${isSolid ? "text-[#0D2B6B]" : "text-white"
                }`}
            >
              HIFI<span className="text-[#F57C00] font-light ml-0.5">TRAFFIC</span>
            </h1>
            <p
              className={`text-[7px] uppercase tracking-[0.25em] font-bold mt-0.5 transition-colors duration-300 ${isSolid ? "text-slate-500" : "text-slate-300"
                }`}
            >
              Traffic Data Tech
            </p>
          </div>
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={`nav-link text-base font-semibold rounded-lg relative overflow-hidden transition-all duration-400 px-4 py-2 ${isSolid ? "text-slate-700 hover:text-[#F57C00]" : "text-white/90 hover:text-[#F57C00]"
            }`}>
            Home
          </Link>
          <Link href="/services" className={`nav-link text-base font-semibold rounded-lg relative overflow-hidden transition-all duration-400 px-4 py-2 ${isSolid ? "text-slate-700 hover:text-[#F57C00]" : "text-white/90 hover:text-[#F57C00]"
            }`}>
            Services
          </Link>
          <Link href="/about" className={`nav-link text-base font-semibold rounded-lg relative overflow-hidden transition-all duration-400 px-4 py-2 ${isSolid ? "text-slate-700 hover:text-[#F57C00]" : "text-white/90 hover:text-[#F57C00]"
            }`}>
            About
          </Link>
          <Link href="/contact" className={`nav-link text-base font-semibold rounded-lg relative overflow-hidden transition-all duration-400 px-4 py-2 ${isSolid ? "text-slate-700 hover:text-[#F57C00]" : "text-white/90 hover:text-[#F57C00]"
            }`}>
            Contact
          </Link>
        </nav>

        {/* Right Get a Quote */}
        <div className="flex items-center gap-4">
          <Link
            href="/get-quote"
            className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 bg-[#F57C00] text-white text-xs font-bold rounded-lg hover:bg-[#E65100] transition-all shadow-sm"
          >
            Get a Quote
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 md:hidden transition-colors ${isSolid ? "text-slate-700 hover:text-[#F57C00]" : "text-white hover:text-[#F57C00]"
              }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0a1628]/95 backdrop-blur-md absolute top-20 left-0 w-full shadow-lg z-50 py-6 px-6 flex flex-col gap-4 animate-in fade-in duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-white/90 hover:text-[#F57C00] transition-colors py-2 border-b border-white/10"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-white/90 hover:text-[#F57C00] transition-colors py-2 border-b border-white/10"
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-white/90 hover:text-[#F57C00] transition-colors py-2 border-b border-white/10"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-white/90 hover:text-[#F57C00] transition-colors py-2 border-b border-white/10"
          >
            Contact
          </Link>
          <Link
            href="/get-quote"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-1.5 px-5 py-3 bg-[#F57C00] text-white text-sm font-bold rounded-lg hover:bg-[#E65100] transition-colors shadow-sm mt-2"
          >
            Get a Quote
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
