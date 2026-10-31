"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white text-[#1D1D1F] border-t border-[#1D1D1F]/10 pt-16 md:pt-24 pb-8 flex flex-col font-sans relative z-50">
      <div className="max-w-[1800px] mx-auto w-full px-6 md:px-12 lg:px-24">
        
        {/* ================= TOP: CINEMATIC CTA ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 pb-16 md:pb-20 border-b border-[#1D1D1F]/10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.05] text-[#1D1D1F]"
          >
            Let's engineer <br className="hidden sm:block" />
            <span className="text-[#86868B]">the vision.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <a 
              href="mailto:hello@s2astudio.in" 
              className="group relative inline-flex items-center gap-4 outline-none rounded-full bg-[#1D1D1F] hover:bg-[#333336] shadow-sm hover:shadow-md pr-2 pl-5 sm:pl-6 py-1.5 transition-all duration-300 ease-out"
            >
              <span className="text-sm md:text-base font-medium tracking-wide text-[#F5F5F7]">
                hello@s2astudio.in
              </span>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#F5F5F7] flex items-center justify-center scale-95 group-hover:scale-100 transition-transform duration-300">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#1D1D1F] -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </motion.div>
        </div>

        {/* ================= MIDDLE: DIRECTORY GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pt-12 md:pt-16 pb-16">
          
          {/* HQ Info */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#86868B]">Headquarters</h4>
            <p className="text-sm md:text-base font-medium text-[#1D1D1F] leading-relaxed">
              S2A Studio <br />
              Pune, Maharashtra<br />
              India
            </p>
          </motion.div>

          {/* Time & Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#86868B]">Local Time</h4>
              <p className="text-sm md:text-base font-medium text-[#1D1D1F] flex items-center gap-3">
                {time ? `${time} IST` : "Loading..."}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-4 hidden md:flex">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#86868B]">Inquiries</h4>
              <a href="tel:+919876543210" className="text-sm md:text-base font-medium text-[#1D1D1F] hover:text-[#86868B] transition-colors outline-none w-fit">
                +91 98765 43210
              </a>
            </div>
          </motion.div>

          {/* Portfolio Links */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#86868B]">Projects</h4>
            <ul className="flex flex-col gap-3 text-sm md:text-base font-medium text-[#1D1D1F]">
              <li><Link href="/projects/architecture" className="hover:text-[#86868B] transition-colors outline-none py-1 block">Architecture</Link></li>
              <li><Link href="/projects/interior" className="hover:text-[#86868B] transition-colors outline-none py-1 block">Interior</Link></li>
              <li><Link href="/projects/competitions" className="hover:text-[#86868B] transition-colors outline-none py-1 block">Competitions</Link></li>
            </ul>
          </motion.div>

          {/* Firm Links */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#86868B]">Firm</h4>
            <ul className="flex flex-col gap-3 text-sm md:text-base font-medium text-[#1D1D1F]">
              <li><Link href="/about" className="hover:text-[#86868B] transition-colors outline-none py-1 block">About Studio</Link></li>
              <li><Link href="/services" className="hover:text-[#86868B] transition-colors outline-none py-1 block">Services</Link></li>
              <li><Link href="/visualization" className="hover:text-[#86868B] transition-colors outline-none py-1 block">S2A Visualization</Link></li>
              <li><Link href="/news" className="hover:text-[#86868B] transition-colors outline-none py-1 block">News</Link></li>
              <li><Link href="/clients" className="hover:text-[#86868B] transition-colors outline-none py-1 block">Clients</Link></li>
              <li><Link href="/career" className="hover:text-[#86868B] transition-colors outline-none py-1 block">Career</Link></li>
              <li><Link href="/contact" className="hover:text-[#86868B] transition-colors outline-none py-1 block">Contact</Link></li>
            </ul>
          </motion.div>

        </div>

        {/* ================= BOTTOM: IMPRINT & SOCIALS ================= */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-[#1D1D1F]/10 text-center md:text-left"
        >
           <p className="text-[11px] md:text-xs font-mono font-medium uppercase tracking-widest text-[#86868B]">
             © {new Date().getFullYear()} S2A Studio.
           </p>

           <div className="flex items-center gap-6 text-[11px] md:text-xs font-mono font-bold uppercase tracking-widest text-[#1D1D1F]">
             <a href="#" className="hover:text-[#86868B] transition-colors outline-none py-2 px-1">Instagram</a>
             <a href="#" className="hover:text-[#86868B] transition-colors outline-none py-2 px-1">LinkedIn</a>
             <a href="#" className="hover:text-[#86868B] transition-colors outline-none py-2 px-1">X (Twitter)</a>
           </div>

           <button 
             onClick={scrollToTop}
             className="group text-[11px] md:text-xs font-mono font-bold uppercase tracking-widest text-[#86868B] hover:text-[#1D1D1F] transition-colors outline-none flex items-center gap-3 py-2"
           >
             Back to Top 
             <div className="w-6 h-6 rounded-full bg-[#F5F5F7] flex items-center justify-center group-hover:bg-[#E8E8EA] transition-colors">
               <svg className="w-3 h-3 text-[#1D1D1F] group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
               </svg>
             </div>
           </button>
        </motion.div>

      </div>
    </footer>
  );
}