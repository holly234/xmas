"use client";

import { useState } from "react";

export default function DemoQuoteForm() {
  const [propertyType, setPropertyType] = useState<"residential" | "commercial">("residential");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    source: "Google Search",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-normal leading-snug">
              Ready to Light Up Your Home This Season?
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Drop your address below for a free satellite estimate. We design the display, bring the commercial LEDs, install on your schedule, and store it all away in January.
            </p>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <a
                href="tel:2148337291"
                className="text-2xl font-bold text-slate-900 hover:text-amber-600 transition-colors"
              >
                (214) 833-7291
              </a>
              <p className="text-sm text-slate-500 mt-1">
                Call or text your address anytime for instant assistance.
              </p>
              <p className="text-sm text-slate-500 mt-3">
                Licensed &amp; Insured — $2M General Liability
              </p>
            </div>
          </div>

          {/* Right Column: Quote Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-sm relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">Estimate Request Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thanks <span className="font-semibold text-slate-900">{formData.name || "there"}</span>. We&apos;re pulling up satellite roofline measurements for{" "}
                    <span className="font-semibold text-slate-900">{formData.address || "your property"}</span> and will reach out via{" "}
                    <span className="font-semibold text-slate-900">{formData.phone || "phone"}</span> within 2 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-semibold text-slate-700 underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-base font-bold text-slate-900">Free Satellite Measurement</span>
                    <span className="text-xs text-slate-500">No obligation</span>
                  </div>

                  {/* Property Category */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Property type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPropertyType("residential")}
                        className={`py-2.5 px-4 text-sm font-medium border transition-all ${
                          propertyType === "residential"
                            ? "bg-slate-900 border-slate-900 text-white"
                            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        Residential Home
                      </button>
                      <button
                        type="button"
                        onClick={() => setPropertyType("commercial")}
                        className={`py-2.5 px-4 text-sm font-medium border transition-all ${
                          propertyType === "commercial"
                            ? "bg-slate-900 border-slate-900 text-white"
                            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        Commercial / HOA
                      </button>
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="David Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-slate-900 px-4 py-3 text-sm focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone number
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        required
                        placeholder="(214) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-slate-900 px-4 py-3 text-sm focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="streetAddress" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Property address
                    </label>
                    <input
                      id="streetAddress"
                      type="text"
                      required
                      placeholder="5420 Preston Rd, Dallas, TX 75205"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-white border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-slate-900 px-4 py-3 text-sm focus:outline-none transition-all"
                    />
                  </div>

                  {/* Referral */}
                  <div>
                    <label htmlFor="referralSource" className="block text-sm font-medium text-slate-700 mb-1.5">
                      How did you hear about us?
                    </label>
                    <select
                      id="referralSource"
                      value={formData.source}
                      onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                      className="w-full bg-white border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-slate-900 px-4 py-3 text-sm focus:outline-none transition-all"
                    >
                      <option value="Google Search">Google Search</option>
                      <option value="Facebook / Instagram">Facebook / Instagram</option>
                      <option value="Neighbor referral">Neighbor referral</option>
                      <option value="Saw crew truck in neighborhood">Saw crew truck in neighborhood</option>
                      <option value="HOA Directory">HOA Directory</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all"
                    >
                      Get My Free Same-Week Estimate
                    </button>
                    <p className="text-xs text-slate-400 mt-2 text-center">
                      We typically respond within 2 hours
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
