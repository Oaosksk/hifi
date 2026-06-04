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

  const isHomeActive = pathname === "/";
  const isServicesActive = pathname === "/services" || pathname.startsWith("/services/");
  const isAboutActive = pathname === "/about" || pathname.startsWith("/about/");
  const isContactActive = pathname === "/contact" || pathname.startsWith("/contact/");

  const getNavLinkClass = (isActive: boolean) => {
    return `nav-link font-ui text-sm font-bold rounded-lg relative overflow-hidden transition-all duration-400 px-4 py-2 ${
      isActive
        ? "text-[#F57C00] active"
        : isSolid
        ? "text-slate-700 hover:text-[#F57C00]"
        : "text-white/90 hover:text-[#F57C00]"
    }`;
  };

  const getMobileNavLinkClass = (isActive: boolean) => {
    return `font-ui text-sm font-bold transition-colors py-2 border-b ${
      isSolid
        ? "border-slate-100 text-slate-700 hover:text-[#F57C00]"
        : "border-white/10 text-white/90 hover:text-[#F57C00]"
    } ${isActive ? "!text-[#F57C00]" : ""}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        mobileMenuOpen
          ? isSolid
            ? "bg-white border-b border-slate-200/50"
            : "bg-[#0a1628]/95 border-b border-white/10"
          : isSolid
          ? "bg-white shadow-sm border-b border-slate-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-4 group">
          <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden transition-transform group-hover:scale-105 duration-300 bg-transparent flex-shrink-0">
            <Image
              src="/hifi-logo.svg"
              alt="HIFI Traffic Data Tech logo"
              fill
              sizes="(max-width: 640px) 56px, 80px"
              priority
              className="object-contain"
            />
          </div>
          <div className="text-left">
            <h1
              className={`text-sm sm:text-xl font-ui font-black tracking-tight leading-none flex items-center transition-colors duration-300 ${isSolid ? "text-[#0D2B6B]" : "text-white"
                }`}
            >
              HIFI<span className="text-[#F57C00] font-light ml-0.5">TRAFFIC</span>
            </h1>
            <p
              className={`text-[5px] sm:text-[7px] font-ui uppercase tracking-[0.25em] font-bold mt-0.5 transition-colors duration-300 ${isSolid ? "text-slate-500" : "text-slate-300"
                }`}
            >
              Traffic Data Tech
            </p>
          </div>
        </Link>

        {/* Center Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className={getNavLinkClass(isHomeActive)}>
            Home
          </Link>
          <Link href="/services" className={getNavLinkClass(isServicesActive)}>
            Services
          </Link>
          <Link href="/about" className={getNavLinkClass(isAboutActive)}>
            About
          </Link>
          <Link href="/contact" className={getNavLinkClass(isContactActive)}>
            Contact
          </Link>
        </nav>

        {/* Right Get a Quote */}
        <div className="flex items-center gap-4">
          <Link
            href="/get-quote"
            className="hidden lg:flex items-center gap-1.5 px-5 py-3 bg-[#F57C00] text-white font-ui text-xs font-bold rounded hover:bg-[#E65100] transition-all shadow-sm group overflow-hidden relative h-11"
          >
            <span className="flex items-center gap-1.5 transition-transform duration-300 ease-out group-hover:-translate-y-10">
              Get a Quote
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
            <span className="absolute flex items-center gap-1.5 translate-y-10 transition-transform duration-300 ease-out group-hover:translate-y-0">
              Get a Quote
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 lg:hidden transition-colors ${isSolid ? "text-slate-700 hover:text-[#F57C00]" : "text-white hover:text-[#F57C00]"
              }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className={`lg:hidden absolute top-20 left-0 w-full shadow-lg z-50 py-6 px-6 flex flex-col gap-4 animate-in fade-in duration-200 ${
          isSolid 
            ? "bg-white shadow-slate-200/50" 
            : "bg-[#0a1628]/95"
        }`}>
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={getMobileNavLinkClass(isHomeActive)}
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className={getMobileNavLinkClass(isServicesActive)}
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={getMobileNavLinkClass(isAboutActive)}
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={getMobileNavLinkClass(isContactActive)}
          >
            Contact
          </Link>
          <Link
            href="/get-quote"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-1.5 px-5 py-3 bg-[#F57C00] text-white font-ui text-sm font-bold rounded-lg hover:bg-[#E65100] transition-colors shadow-sm mt-2 group overflow-hidden relative h-12"
          >
            <span className="flex items-center gap-1.5 transition-transform duration-300 ease-out group-hover:-translate-y-12">
              Get a Quote
              <ArrowUpRight className="w-4 h-4" />
            </span>
            <span className="absolute flex items-center gap-1.5 translate-y-12 transition-transform duration-300 ease-out group-hover:translate-y-0">
              Get a Quote
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
