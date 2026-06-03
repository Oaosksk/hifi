"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>
      
      <div className="relative z-10 max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-3 py-1 bg-hifi-orange/10 text-hifi-orange text-xs font-bold uppercase tracking-widest rounded-full">
            Error 404
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-8xl font-black text-hifi-blue mt-6 mb-2 tracking-tighter"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-extrabold text-slate-800 mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm mx-auto"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-hifi-blue text-white text-sm font-bold rounded-lg hover:bg-hifi-dark transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-200"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-50 transition-all shadow-sm hover:shadow hover:-translate-y-0.5 duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}
