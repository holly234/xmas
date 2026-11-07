"use client";

interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

const TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Roofline",
    price: "$499",
    period: "fully installed & stored",
    description: "Clean front roofline and entrance gable accent for single-story homes.",
    popular: false,
    features: [
      "Front roofline & peaks (up to 40 linear ft)",
      "Warm White or classic single color C9 LEDs",
      "Custom-cut wiring with zero roof penetration",
      "Automatic digital dusk-to-dawn timer",
      "Free 48-hr in-season bulb replacement",
      "Full post-holiday January removal & storage",
    ],
    ctaText: "Select Starter Plan",
  },
  {
    id: "professional",
    name: "Professional Estate",
    badge: "Most Popular in DFW",
    price: "$899",
    period: "fully installed & stored",
    description: "Complete front facade with multi-gables and mature landscape tree wrapping.",
    popular: true,
    features: [
      "Everything in Starter package",
      "Full roofline & peak gables (up to 120 ft)",
      "Front yard mature oak trunk spiral & branch tracing",
      "Multi-zone color control & twinkle patterns",
      "Heavy-duty outdoor timer with remote control",
      "Priority 24-hr weather & wind repair callouts",
      "Climate-controlled offseason storage included",
    ],
    ctaText: "Select Professional Plan",
  },
  {
    id: "premium",
    name: "Showcase Property",
    badge: "Full Estate Coverage",
    price: "$1,499",
    period: "fully installed & stored",
    description: "Full property coverage with multi-story gables, canopy wraps, and walkway perimeter.",
    popular: false,
    features: [
      "Everything in Professional package",
      "Complete 360° roofline, fascia & dormers",
      "Full mature tree canopy net + trunk wrapping",
      "Architectural window frames & ground walkway stakes",
      "Custom CAD display preview & daytime consultation",
      "Dedicated crew lead with direct text line",
      "VIP prioritized first-week takedown & storage",
    ],
    ctaText: "Select Showcase Plan",
  },
];

export default function DemoPricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-slate-50 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-normal leading-snug">
            Transparent Pricing. No Surprises.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Every package includes commercial-grade lights, custom cutting, installation, all season maintenance, and January removal with secure storage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier) => {
            const isPop = tier.popular;
            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between p-8 transition-all duration-300 ${
                  isPop
                    ? "bg-white border-2 border-slate-900 shadow-lg lg:-translate-y-3 z-10"
                    : "bg-white border border-slate-200/90"
                }`}
              >
                {isPop && (
                  <div className="absolute -top-3.5 left-6 px-3 py-1 bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                    {!isPop && tier.badge && (
                      <span className="text-[11px] font-medium text-slate-500 uppercase">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-slate-600 min-h-[40px]">
                    {tier.description}
                  </p>

                  <div className="mt-6 mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs text-slate-500 uppercase">From</span>
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                        {tier.price}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 mt-1 block">
                      {tier.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="text-slate-400 mt-0.5">—</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#quote"
                  className={`w-full py-3 px-5 text-center text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    isPop
                      ? "bg-slate-900 hover:bg-slate-800 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                  }`}
                >
                  {tier.ctaText}
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-slate-500">
          Commercial shopping centers, HOA common areas, and multi-acre estates quoted via complimentary on-site consultation.
        </p>
      </div>
    </section>
  );
}
