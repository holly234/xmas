import DemoNav from "@/components/demo/demo-nav";
import LightVisualizer from "@/components/demo/light-visualizer";
import DemoGallery from "@/components/demo/demo-gallery";
import DemoPricing from "@/components/demo/demo-pricing";
import DemoQuoteForm from "@/components/demo/demo-quote-form";
import DemoFooter from "@/components/demo/demo-footer";

export const metadata = {
  title: "Highland Holiday Lighting | Premier Estate Christmas Light Displays",
  description:
    "Turn your home into a holiday masterpiece without touching a ladder. Commercial-grade LEDs custom-measured to your roofline, full season maintenance, and January storage.",
};

export default function ChristmasLightsDemoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      <DemoNav />
      <LightVisualizer />

      {/* Value Strip */}
      <section className="bg-slate-900 text-white py-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-center">
            <div className="py-2.5 sm:py-0 px-4 flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-normal">850+</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Homes Lit in DFW</span>
            </div>
            <div className="py-2.5 sm:py-0 px-4 flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-normal">4.9/5</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Google Rating</span>
            </div>
            <div className="py-2.5 sm:py-0 px-4 flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-normal">100%</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Licensed &amp; Insured</span>
            </div>
            <div className="py-2.5 sm:py-0 px-4 flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-normal">48-HR</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Same-Week Install</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-normal leading-tight">
              Commercial-Grade Holiday Craftsmanship
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              We never use flimsy store-bought spools. Every line is measured to the inch, custom-cut to your home&apos;s architecture, and secured with zero-damage clips.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {/* Service 01 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">01 — Rooflines &amp; Gables</span>
                <h3 className="text-2xl sm:text-3xl text-slate-900 font-bold tracking-normal leading-snug">
                  Precision Roofline &amp; Gutter Installation
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Clean C9 commercial lines along every roofline edge, peak gable, and fascia. Measured to the exact inch, clipped securely with zero shingles pierced or staples used. Jumpers run behind gutters so cords stay 100% invisible during daylight.
                </p>
                <ul className="pt-2 space-y-1.5 text-sm text-slate-600">
                  <li>Commercial C9 LEDs</li>
                  <li>Zero roof staples</li>
                  <li>50,000hr bulb life</li>
                </ul>
              </div>
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=1200&q=80"
                    alt="Clean C9 roofline and architectural gable lighting installation"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Service 02 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-7 lg:order-1 order-2">
                <div className="relative aspect-[16/10] overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?auto=format&fit=crop&w=1200&q=80"
                    alt="Tree trunk wrapping and branch tracing"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 order-1 space-y-4">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">02 — Trees &amp; Shrubs</span>
                <h3 className="text-2xl sm:text-3xl text-slate-900 font-bold tracking-normal leading-snug">
                  Landscape Tree &amp; Shrub Wrapping
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Trunk spirals, canopy branch tracing, and manicured shrub netting that turn your front lawn into the neighborhood centerpiece. Wired with heavy-gauge commercial cords engineered for cold Texas winter wind and rain.
                </p>
                <ul className="pt-2 space-y-1.5 text-sm text-slate-600">
                  <li>Trunk spiral wraps</li>
                  <li>Canopy branch tracing</li>
                  <li>Boxwood netting</li>
                </ul>
              </div>
            </div>

            {/* Service 03 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">03 — Commercial &amp; HOA</span>
                <h3 className="text-2xl sm:text-3xl text-slate-900 font-bold tracking-normal leading-snug">
                  Commercial Properties &amp; HOA Entrances
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Storefronts, office parks, restaurant patios, and neighborhood entrances. Commercial-grade power management, pre-programmed timers, and same-day priority bulb maintenance throughout the holiday rush.
                </p>
                <ul className="pt-2 space-y-1.5 text-sm text-slate-600">
                  <li>Retail storefronts</li>
                  <li>HOA communities</li>
                  <li>24/7 priority support</li>
                </ul>
              </div>
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=1200&q=80"
                    alt="Commercial courtyard and storefront lighting display"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Service 04 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-7 lg:order-1 order-2">
                <div className="relative aspect-[16/10] overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1200&q=80"
                    alt="Takedown, testing, and climate storage"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 order-1 space-y-4">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">04 — Hassle-Free</span>
                <h3 className="text-2xl sm:text-3xl text-slate-900 font-bold tracking-normal leading-snug">
                  January Takedown &amp; Secure Climate Storage
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Full removal starting January 2nd. Every bulb is tested, labeled by elevation, packed into personalized totes, and stored in our climate-controlled warehouse until next year. You never touch an attic or untangle cords.
                </p>
                <ul className="pt-2 space-y-1.5 text-sm text-slate-600">
                  <li>Prompt January removal</li>
                  <li>Labeled by elevation</li>
                  <li>Climate-controlled storage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoGallery />

      {/* How It Works */}
      <section id="process" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-normal leading-snug">
              From Satellite Estimate to January Takedown
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Zero ladders. Zero tangled wires. Zero hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="bg-white p-8 border border-slate-200/80">
              <span className="text-sm font-medium text-slate-400 block mb-4">01</span>
              <h3 className="text-xl font-bold text-slate-900">Request Your Free Estimate</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Send us your address. We use satellite imagery to measure your rooflines, peaks, and gables down to the inch, delivering a transparent flat quote in 2 hours.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200/80">
              <span className="text-sm font-medium text-slate-400 block mb-4">02</span>
              <h3 className="text-xl font-bold text-slate-900">We Custom-Cut &amp; Install</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Our licensed, insured crew arrives on your scheduled day. We clip every strand to your exact roofline dimensions, hide every jumper, and set up your dusk-to-dawn digital timer.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200/80">
              <span className="text-sm font-medium text-slate-400 block mb-4">03</span>
              <h3 className="text-xl font-bold text-slate-900">Enjoy, Maintain &amp; Store</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                If a bulb goes out or a windstorm hits, call us for free 48-hr service. In January, we carefully take everything down, pack it into labeled bins, and store it in our warehouse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DemoPricing />

      {/* Reviews */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-normal leading-snug">
              Trusted by Over 850 North Texas Estates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
              <div className="space-y-3">
                <p className="text-slate-700 text-base leading-relaxed">
                  &ldquo;Marcus and his crew did our entire roofline and the two oaks in the front yard. They were done in about three hours. Our neighbors have been asking for his number all week.&rdquo;
                </p>
              </div>
              <div className="pt-5 border-t border-slate-200 mt-6">
                <div className="font-bold text-slate-900 text-sm">David &amp; Sarah M.</div>
                <div className="text-xs text-slate-500 mt-0.5">Plano, TX</div>
              </div>
            </div>

            <div className="p-8 bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
              <div className="space-y-3">
                <p className="text-slate-700 text-base leading-relaxed">
                  &ldquo;I&apos;ve hired three different companies over the years. These guys are the only ones who actually measured everything beforehand and didn&apos;t leave a single clip visible. Clean work.&rdquo;
                </p>
              </div>
              <div className="pt-5 border-t border-slate-200 mt-6">
                <div className="font-bold text-slate-900 text-sm">Rachel K.</div>
                <div className="text-xs text-slate-500 mt-0.5">Frisco, TX</div>
              </div>
            </div>

            <div className="p-8 bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
              <div className="space-y-3">
                <p className="text-slate-700 text-base leading-relaxed">
                  &ldquo;We did the commercial package for our strip mall. All 6 storefronts matched perfectly. They even fixed a light that went out the week before Christmas, same day.&rdquo;
                </p>
              </div>
              <div className="pt-5 border-t border-slate-200 mt-6">
                <div className="font-bold text-slate-900 text-sm">Tony V.</div>
                <div className="text-xs text-slate-500 mt-0.5">McKinney, TX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-normal leading-snug">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do I buy the lights, or does your company provide them?",
                a: "All packages include our commercial-grade, custom-measured C9 LED lighting. We provide, install, maintain, and store them so you never have to purchase or untangle lights again.",
              },
              {
                q: "What happens if a bulb burns out or strong winds dislodge a line?",
                a: "Every installation comes with complimentary in-season maintenance. Simply text our direct dispatch line and our local crew will repair or replace any affected bulbs within 48 hours at zero cost.",
              },
              {
                q: "When do you take the lights down in January?",
                a: "Takedown begins January 2nd and runs through January 25th. We carefully remove every clip, test all bulbs, pack them into labeled bins, and store them in our climate-controlled warehouse.",
              },
              {
                q: "Do I need to be home for the installation?",
                a: "No. As long as exterior power outlets are accessible and pets are kept inside, our crew will complete the install, test the timer, and send you photos when complete.",
              },
              {
                q: "Are your crews insured for 2-story and steep roofs?",
                a: "Yes. Highland Lighting carries $2,000,000 in general commercial liability and all installers are trained and equipped with OSHA-compliant safety harnesses.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white p-6 border border-slate-200/90 transition-all"
              >
                <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <span className="text-slate-400 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <DemoQuoteForm />
      <DemoFooter />
    </main>
  );
}
