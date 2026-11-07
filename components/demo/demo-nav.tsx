"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DemoNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5 text-white"
          : "bg-slate-950/40 backdrop-blur-sm border-b border-white/5 py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* High-End Architectural Brand Name */}
          <Link href="#visualizer" className="group flex items-baseline gap-2">
            <span className="text-white font-extrabold text-lg sm:text-xl tracking-wider">
              HIGHLAND
            </span>
            <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">
              Lighting Co.
            </span>
          </Link>

          {/* Clean Direct Phone Concierge */}
          <a
            href="tel:2148337291"
            className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors flex items-center gap-2 py-1 px-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/10"
          >
            <span className="text-[11px] text-slate-400 uppercase tracking-wider hidden sm:inline">Call or Text</span>
            <span className="text-white font-bold">(214) 833-7291</span>
          </a>
        </div>
      </div>
    </header>
  );
}
