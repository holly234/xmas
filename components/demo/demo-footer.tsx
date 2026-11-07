"use client";

export default function DemoFooter() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-white font-bold text-lg tracking-wide">
              Highland Lighting Co.
            </span>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Architectural holiday lighting, commercial C9 custom-cut wiring, 48-hr maintenance guarantees, and climate-controlled storage for premier residences across North Texas.
            </p>
            <div className="text-xs text-slate-500">
              Serving Dallas, Highland Park, University Park, Plano, Frisco, Southlake &amp; McKinney.
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-slate-200 font-bold">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#visualizer" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-slate-200 font-bold">
              Contact
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="tel:2148337291" className="text-white font-bold hover:text-amber-400 transition-colors text-base">
                  (214) 833-7291
                </a>
              </li>
              <li className="text-xs text-slate-400">Mon – Sun: 7 AM – 8 PM CST</li>
              <li className="text-xs text-slate-400">Licensed &amp; Insured — $2M Liability</li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2024 Highland Holiday Lighting Co. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>

        {/* Demo Badge */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="max-w-2xl mx-auto border border-slate-700 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1.5">
                <h4 className="text-lg text-white font-bold">
                  Built by <span className="text-amber-400">Olamide Titus</span>
                </h4>
                <p className="text-sm text-slate-400">
                  Want a high-converting website like this for your business?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                <a
                  href="https://m.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  DM Me on Messenger
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm flex items-center justify-center gap-2 border border-white/20 transition-all"
                >
                  Instagram DM
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
