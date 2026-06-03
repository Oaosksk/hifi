import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07193f] text-slate-300 border-t border-slate-800">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Info */}
        <div className="flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden transition-transform hover:scale-105 duration-300 bg-transparent">
              <Image
                src="/hifi-logo.svg"
                alt="HIFI Traffic Data Tech logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-black tracking-tight text-white leading-none flex items-center">
                HIFI<span className="text-[#F57C00] font-light ml-0.5">TRAFFIC</span>
              </h1>
              <p className="text-[7px] uppercase tracking-[0.25em] text-slate-400 font-bold mt-0.5">
                Traffic Data Tech
              </p>
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Delivering accurate traffic data and insights that drive better decisions and create better communities.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3.5 text-sm">
            <li>
              <Link href="/" className="hover:text-[#F57C00] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#F57C00] transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#F57C00] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/#why-choose-hifi" className="hover:text-[#F57C00] transition-colors">
                Why Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#F57C00] transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-[#F57C00] transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div>
          <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-6">
            Our Services
          </h3>
          <ul className="space-y-3.5 text-sm">
            <li>
              <Link href="/services/traffic-volume-studies" className="hover:text-[#F57C00] transition-colors">
                Traffic Volume Studies
              </Link>
            </li>
            <li>
              <Link href="/services/turning-movement-counts" className="hover:text-[#F57C00] transition-colors">
                Turning Movement Counts
              </Link>
            </li>
            <li>
              <Link href="/services/pedestrian-counts" className="hover:text-[#F57C00] transition-colors">
                Pedestrian Counts
              </Link>
            </li>
            <li>
              <Link href="/services/vehicle-classification" className="hover:text-[#F57C00] transition-colors">
                Vehicle Classification
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-6">
            Get In Touch
          </h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#F57C00] flex-shrink-0" />
              <a href="tel:+919042801480" className="hover:text-white transition-colors">
                +91 9042801480
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#F57C00] flex-shrink-0" />
              <a href="mailto:info@hifitrafficdatatech.com" className="hover:text-white transition-colors">
                info@hifitrafficdatatech.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#F57C00] mt-0.5 flex-shrink-0" />
              <span>
                Chennai, Tamil Nadu, India
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-[#051433] py-6 text-xs text-slate-500 font-medium">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>
            &copy; {currentYear} HIFI Traffic Data Tech. All Rights Reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
