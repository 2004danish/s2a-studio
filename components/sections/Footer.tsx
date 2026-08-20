"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1D1D1F] text-[#F5F5F7] flex flex-col font-sans rounded-t-[2rem] md:rounded-t-[3rem] -mt-8 relative z-50 overflow-hidden">
      
      <div className="max-w-[1800px] mx-auto w-full px-5 sm:px-6 md:px-12 lg:px-24 pt-16 sm:pt-24 md:pt-32 pb-12 flex flex-col gap-16 sm:gap-24 md:gap-32">
        
        {/* ================= TOP: THE APPLE-STYLE CTA ================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-8">
          
          <div className="flex flex-col gap-6 sm:gap-8 max-w-4xl w-full">
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-medium tracking-tighter leading-[0.95] sm:leading-[0.9] text-[#F5F5F7]">
              Let's engineer <br />
              <span className="text-[#86868B]">the vision.</span>
            </h2>
            
            {/* Dual-Tone Hover Effect */}
            <a href="mailto:hello@s2astudio.in" className="inline-block relative overflow-hidden group/link w-fit mt-2 sm:mt-4">
              <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight group-hover/link:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] inline-block">
                hello@s2astudio.in
              </span>
              <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight absolute inset-0 translate-y-full group-hover/link:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] inline-block text-[#86868B]">
                hello@s2astudio.in
              </span>
            </a>
          </div>

          <div className="hidden lg:flex flex-col items-end text-right flex-shrink-0">
             <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#1D1D1F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
             </div>
             <p className="text-sm font-medium text-[#86868B] uppercase tracking-widest">
               Accepting New Commissions
             </p>
          </div>

        </div>

        {/* ================= MIDDLE: THE SWISS / APPLE GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 lg:gap-8">
          
          {/* Column 1: Studio & Location */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col gap-8 sm:gap-12">
            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#86868B]">Nagpur Headquarters</h4>
              <p className="text-sm sm:text-base md:text-lg text-[#F5F5F7] font-light leading-relaxed">
                S2A Studio Nagpur, <br />
                Maharashtra, India
              </p>
              <a href="https://www.google.com/maps/place/S2A+Studio+Architects+%26+Interior+Designers/@18.532675,73.8462706,17z" target="_blank" rel="noreferrer" className="text-xs sm:text-sm font-medium text-[#F5F5F7] underline underline-offset-4 decoration-[#86868B] hover:decoration-[#F5F5F7] transition-colors w-fit mt-1 sm:mt-2">
                Get Directions
              </a>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#86868B]">Inquiries</h4>
              <p className="text-sm sm:text-base md:text-lg text-[#F5F5F7] font-light leading-relaxed">
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* Column 2: Directory */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col gap-3 sm:gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#86868B] mb-1 sm:mb-2">Directory</h4>
            <ul className="flex flex-col gap-3 sm:gap-4 text-sm sm:text-base md:text-lg font-light">
              <li><Link href="/architecture" className="text-[#F5F5F7] hover:text-[#86868B] transition-colors">Architecture</Link></li>
              <li><Link href="/interior-design" className="text-[#F5F5F7] hover:text-[#86868B] transition-colors">Interior Design</Link></li>
              <li><Link href="/3d-viz" className="text-[#F5F5F7] hover:text-[#86868B] transition-colors">3D Visualization</Link></li>
              <li><Link href="/turnkey" className="text-[#F5F5F7] hover:text-[#86868B] transition-colors">Turnkey Solutions</Link></li>
              <li className="pt-3 sm:pt-4 mt-1 sm:mt-2 border-t border-[#F5F5F7]/10"><Link href="/studio" className="text-[#F5F5F7] hover:text-[#86868B] transition-colors">The Studio</Link></li>
            </ul>
          </div>

          {/* Column 3: The Beautiful Dark Mode Map Widget */}
          <div className="md:col-span-12 lg:col-span-5 h-[280px] sm:h-[320px] md:h-[350px] lg:h-full min-h-[280px] w-full relative rounded-3xl overflow-hidden shadow-2xl bg-[#111111] group flex items-center justify-center">
            
            <iframe
              src="https://maps.google.com/maps?q=18.532675,73.8462706&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              style={{ filter: "invert(100%) hue-rotate(180deg) contrast(90%) opacity(80%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Floating Action Button */}
            <a 
              href="https://www.google.com/maps/place/S2A+Studio+Architects+%26+Interior+Designers/@18.532675,73.8462706,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c081182e6c2d:0x207fa419835c9efb!8m2!3d18.532675!4d73.8462706!16s%2Fg%2F1hc6vdfj7" 
              target="_blank" 
              rel="noreferrer" 
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-4 sm:px-5 py-2.5 sm:py-3 bg-[#F5F5F7]/90 backdrop-blur-xl text-[#1D1D1F] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-full shadow-xl hover:bg-white transition-colors flex items-center gap-2 sm:gap-3 z-20"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open Map
            </a>

            <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] z-10" />
          </div>

        </div>

        {/* ================= BOTTOM: THE CLEAN IMPRINT ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[#F5F5F7]/10 text-center md:text-left">
           <p className="text-xs font-medium text-[#86868B]">
             © {new Date().getFullYear()} S2A Studio. All rights reserved.
           </p>
           
           <div className="flex items-center gap-6 sm:gap-8 text-xs font-medium text-[#F5F5F7]">
             <a href="#" className="hover:text-[#86868B] transition-colors">Instagram</a>
             <a href="#" className="hover:text-[#86868B] transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-[#86868B] transition-colors">Twitter</a>
           </div>
        </div>

      </div>
    </footer>
  );
}