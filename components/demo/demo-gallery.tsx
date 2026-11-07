"use client";

import { useState } from "react";

interface GalleryItem {
  id: string;
  title: string;
  neighborhood: string;
  spec: string;
  src: string;
  spanClass: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "preston-hollow",
    title: "Preston Hollow Manor",
    neighborhood: "Dallas, TX",
    spec: "340 ft Warm White C9 Roofline & Triple Gable Tracing",
    src: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=1200&q=80",
    spanClass: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
  },
  {
    id: "highland-park",
    title: "Highland Park Estate",
    neighborhood: "Dallas, TX",
    spec: "Dual Mature Oak Trunk Spiral & 600-Node Canopy Fill",
    src: "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?auto=format&fit=crop&w=800&q=80",
    spanClass: "md:col-span-1 md:row-span-1 aspect-[4/3]",
  },
  {
    id: "southlake-gables",
    title: "Southlake Grand Colonial",
    neighborhood: "Southlake, TX",
    spec: "All-Gold 3000K Fascia Lines + Boxwood Shrub Tracing",
    src: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=800&q=80",
    spanClass: "md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto",
  },
  {
    id: "frisco-reserve",
    title: "The Frisco Reserve",
    neighborhood: "Frisco, TX",
    spec: "Alternating Candy-Cane Red & Warm White Commercial C9",
    src: "https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?auto=format&fit=crop&w=800&q=80",
    spanClass: "md:col-span-1 md:row-span-1 aspect-[4/3]",
  },
  {
    id: "university-park",
    title: "University Park Plaza",
    neighborhood: "Dallas, TX",
    spec: "Commercial Storefront Perimeter & Courtyard Canopy",
    src: "https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=1200&q=80",
    spanClass: "md:col-span-2 md:row-span-1 aspect-[16/9] md:aspect-auto",
  },
  {
    id: "colleyville-stone",
    title: "Colleyville Stone Residence",
    neighborhood: "Colleyville, TX",
    spec: "Blue Ice & Pure White Gables with Ground Perimeter Stakes",
    src: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=800&q=80",
    spanClass: "md:col-span-1 md:row-span-1 aspect-[4/3]",
  },
];

export default function DemoGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [showBeforeAfter, setShowBeforeAfter] = useState<boolean>(false);
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-normal leading-snug">
              Real DFW Homes We&apos;ve Transformed
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Zero stapled wires, commercial custom-cut jumpers hidden behind gutters, and 100% custom-fit precision.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowBeforeAfter(!showBeforeAfter)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                showBeforeAfter
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
              }`}
            >
              {showBeforeAfter ? "Show Grid Gallery" : "⇄ Interactive Day vs. Night"}
            </button>
          </div>
        </div>

        {/* Interactive Before & After Mode */}
        {showBeforeAfter ? (
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[600px] rounded-3xl overflow-hidden border border-slate-200 select-none bg-slate-950 shadow-xl">
            {/* After (Illuminated Night) */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=1600&q=85"
                alt="Estate fully illuminated at night"
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs text-white font-medium shadow-md">
                Night: Highland Custom LED Display
              </div>
            </div>

            {/* Before (Daylight / Unlit) - Clipped by sliderPos */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85"
                alt="Estate during the day without lights"
                className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                style={{ width: "100%", height: "100%" }}
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs text-slate-800 font-medium shadow-md border border-slate-200">
                Day: Baseline Property
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)] cursor-ew-resize z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-lg">
                ⇄
              </div>
            </div>

            {/* Interactive Range Input overlay */}
            <input
              type="range"
              min="5"
              max="95"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="Day vs Night Comparison Slider"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>
        ) : (
          /* Masonry Grid */
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[280px]">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.01] ${item.spanClass}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex flex-col justify-end text-white">
                  <div className="flex items-center justify-between text-xs text-amber-400 uppercase mb-1">
                    <span>{item.neighborhood}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                      View ↗
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-0.5 hidden sm:block">
                    {item.spec}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Lightbox */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full bg-slate-950">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/70 border border-white/20 text-white flex items-center justify-center hover:bg-slate-950 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
                <div>
                  <div className="text-xs text-amber-600 font-bold uppercase">
                    {selectedItem.neighborhood}
                  </div>
                  <h3 className="text-xl text-slate-900 font-bold mt-1">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {selectedItem.spec}
                  </p>
                </div>
                <a
                  href="#quote"
                  onClick={() => setSelectedItem(null)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-md shrink-0"
                >
                  Request Similar Display →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
