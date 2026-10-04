"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  // 🚀 FEATURE: Live Studio Time (Pune/IST)
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 10000); // Update every 10s
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#111111] text-[#F5F5F7] flex flex-col font-sans rounded-t-[2rem] md:rounded-t-[3rem] relative z-50 overflow-hidden mt-20">
      
      {/* Subtle Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5F5F7]/20 to-transparent" />

      <div className="max-w-[1800px] mx-auto w-full px-5 sm:px-6 md:px-12 lg:px-24 pt-20 sm:pt-28 md:pt-36 pb-8 flex flex-col">
        
        {/* ================= TOP: CINEMATIC CTA ================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-20 md:mb-32">
          
          <div className="flex flex-col w-full">
            <h2 className="text-[clamp(3.5rem,8vw,9rem)] font-medium tracking-[-0.04em] leading-[0.9] text-[#F5F5F7] mb-6 md:mb-10">
              Let's engineer <br />
              <span className="text-[#555555]">the vision.</span>
            </h2>
            
            {/* Elegant Arrow Link */}
            <a 
              href="mailto:hello@s2astudio.in" 
              className="group flex items-center gap-4 md:gap-6 w-fit outline-none"
            >
              <span className="text-xl sm:text-3xl md:text-5xl font-light tracking-tight text-[#F5F5F7] group-hover:text-[#86868B] transition-colors duration-500">
                hello@s2astudio.in
              </span>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-[#F5F5F7]/20 flex items-center justify-center group-hover:bg-[#F5F5F7] group-hover:border-[#F5F5F7] transition-all duration-500">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#F5F5F7] group-hover:text-[#111111] -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </div>

        </div>

        {/* ================= MIDDLE: ARCHITECTURAL GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-y border-[#F5F5F7]/10">
          
          {/* Column 1: Studio Details */}
          <div className="md:col-span-4 flex flex-col gap-10 py-10 md:py-16 md:pr-10 border-b md:border-b-0 md:border-r border-[#F5F5F7]/10">
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#555555]">Headquarters</h4>
              <p className="text-sm md:text-base text-[#F5F5F7] font-light leading-relaxed">
                S2A Studio <br />
                Pune, Maharashtra<br />
                India
              </p>
              <a href="https://maps.google.com/?q=18.532675,73.8462706" target="_blank" rel="noreferrer" className="text-xs font-semibold text-[#86868B] hover:text-[#F5F5F7] transition-colors w-fit mt-2 outline-none">
                Get Directions ↗
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#555555]">Local Time</h4>
              <p className="text-sm md:text-base text-[#F5F5F7] font-light flex items-center gap-3">
                {time ? `${time} IST` : "Loading..."}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#555555]">Inquiries</h4>
              <p className="text-sm md:text-base text-[#F5F5F7] font-light">
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* Column 2: Directory */}
          <div className="md:col-span-3 flex flex-col py-10 md:py-16 md:px-10 border-b md:border-b-0 md:border-r border-[#F5F5F7]/10">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#555555] mb-6">Directory</h4>
            <ul className="flex flex-col gap-4 text-sm md:text-base font-light">
              <li><Link href="/projects/architecture" className="text-[#F5F5F7] hover:text-[#86868B] transition-colors outline-none">Architecture</Link></li>
              <li><Link href="/projects/interior-design" className="text-[#F5F5F7] hover:text-[#86868B] transition-colors outline-none">Interior Design</Link></li>
              <li><Link href="/projects/competitions" className="text-[#F5F5F7] hover:text-[#86868B] transition-colors outline-none">Competitions</Link></li>
              <li className="pt-4 mt-2 border-t border-[#F5F5F7]/10"><Link href="/studio" className="text-[#F5F5F7] hover:text-[#86868B] transition-colors outline-none">The Studio</Link></li>
              <li><Link href="/recognition" className="text-[#F5F5F7] hover:text-[#86868B] transition-colors outline-none">Recognition</Link></li>
              <li><Link href="/careers" className="text-[#F5F5F7] hover:text-[#86868B] transition-colors outline-none">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Minimalist Map */}
          <div className="md:col-span-5 h-[300px] md:h-auto w-full relative group overflow-hidden bg-[#0a0a0a]">
            <iframe
              src="https://maps.google.com/maps?q=18.532675,73.8462706&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0 transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 opacity-60"
              style={{ filter: "grayscale(100%) invert(100%) contrast(120%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111] pointer-events-none opacity-80 md:hidden" />
          </div>

        </div>

        {/* ================= BOTTOM: IMPRINT & SOCIALS ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 pb-4 text-center md:text-left">
           <p className="text-[10px] font-mono uppercase tracking-widest text-[#555555]">
             © {new Date().getFullYear()} S2A Studio. All rights reserved.
           </p>
           
           <div className="flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-[#F5F5F7]">
             <a href="#" className="hover:text-[#86868B] transition-colors outline-none">Instagram</a>
             <a href="#" className="hover:text-[#86868B] transition-colors outline-none">LinkedIn</a>
             <a href="#" className="hover:text-[#86868B] transition-colors outline-none">Twitter</a>
           </div>

           {/* Back to top button */}
           <button 
             onClick={scrollToTop}
             className="text-[10px] font-mono uppercase tracking-widest text-[#86868B] hover:text-[#F5F5F7] transition-colors outline-none flex items-center gap-2"
           >
             Back to Top 
             <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
             </svg>
           </button>
        </div>

      </div>
    </footer>
  );
}