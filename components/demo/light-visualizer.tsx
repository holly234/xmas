"use client";

import { useState, useEffect } from "react";

interface SlideItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

const SLIDES: SlideItem[] = [
  {
    id: "house",
    category: "Residential Estates",
    title: "Luxury Home & Roofline Illumination",
    description: "Custom-cut commercial C9 LEDs, gable tracing, and mature tree wrapping.",
    image: "/images/house-display.jpg",
  },
  {
    id: "office",
    category: "Commercial & Office",
    title: "Corporate Headquarters & Storefronts",
    description: "Architectural perimeter lighting, entryway illumination, and synchronized displays.",
    image: "/images/office-display.jpg",
  },
  {
    id: "public",
    category: "Public Spaces",
    title: "Town Plazas & Civic Grounds",
    description: "Grand community trees, walkway arches, and multi-acre landscape lighting.",
    image: "/images/public-display.jpg",
  },
];

export default function LightVisualizer() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section id="visualizer" className="relative pt-24 sm:pt-28 pb-10 sm:pb-14 bg-slate-950 overflow-hidden text-white">
      {/* Ambient Faint Holiday Lighting Background (Zero data used - uses local image blurred) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          key={`ambient-${slide.id}`}
          src={slide.image}
          alt=""
          className="w-full h-full object-cover opacity-20 filter blur-3xl scale-125 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Punchy Headline & Category Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5 sm:mb-6">
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-normal leading-snug text-white">
              Architectural Holiday Displays
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Commercial-grade design, professional install, and post-holiday storage.
            </p>
          </div>

          {/* Clean minimal switcher — no pills, no dots */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm border-b border-white/10 pb-2">
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all cursor-pointer font-medium whitespace-nowrap pb-1 ${
                  currentSlide === idx
                    ? "text-amber-400 border-b-2 border-amber-400"
                    : "text-slate-400 hover:text-white border-b-2 border-transparent"
                }`}
              >
                {s.category}
              </button>
            ))}
          </div>
        </div>

        {/* 80vh Showcase Slide Container */}
        <div className="relative w-full h-[76vh] sm:h-[80vh] min-h-[500px] rounded-xl overflow-hidden border border-white/15 bg-black shadow-2xl">
          {/* Active Display Photo */}
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transition-opacity duration-700"
          />

          {/* Bottom Vignette for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

          {/* Slide Caption Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white z-10 pointer-events-none">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                {slide.category}
              </span>
              <h2 className="text-xl sm:text-3xl font-bold text-white tracking-normal leading-snug">
                {slide.title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {slide.description}
              </p>
            </div>

            <a
              href="#quote"
              className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all text-center pointer-events-auto rounded-md shadow-md"
            >
              Get Free Estimate →
            </a>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
            aria-label="Previous slide"
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all text-2xl z-30 cursor-pointer rounded-full border border-white/20"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
            aria-label="Next slide"
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all text-2xl z-30 cursor-pointer rounded-full border border-white/20"
          >
            ›
          </button>

          {/* Bottom Progress Bars */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1 transition-all cursor-pointer rounded-sm ${
                  currentSlide === idx ? "w-8 bg-amber-400" : "w-2.5 bg-white/40 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
