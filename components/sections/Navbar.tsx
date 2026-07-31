"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lock scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // Handle the floating pill scroll effect for the TOP navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const corePillars = [
    { name: "Architecture", path: "#architecture" },
    { name: "Interior Design", path: "#interior-design" },
    { name: "Turnkey Solutions", path: "#turnkey" },
    { name: "3D Viz", path: "#3d-viz" },
  ];

  const secondaryLinks = [
    { id: "01", name: "Projects", path: "/projects" },
    { id: "02", name: "Studio", path: "/studio" },
    { id: "03", name: "Recognition", path: "/recognition" },
    { id: "04", name: "Journal", path: "/journal" },
    { id: "05", name: "Careers", path: "/careers" },
    { id: "06", name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* 
        =========================================
        1. THE TOP NAVBAR (Restored)
        Stays at the top. Morphs into a pill on scroll. 
        Logo on the left, Links on the right.
        =========================================
      */}
      <header 
        className={`fixed z-[5000] left-0 right-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none flex justify-center ${
          isScrolled && !isMenuOpen
            ? "top-0 md:top-6 md:left-6 md:right-6" 
            : "top-0 md:left-0 md:right-0"
        }`}
      >
        <div 
          className={`w-full flex items-center justify-between transition-all duration-500 pointer-events-auto ${
            isMenuOpen 
              ? "max-w-[1800px] px-6 md:px-12 py-6 md:py-10 bg-transparent border-transparent rounded-none"
              : isScrolled
                ? "max-w-[1400px] px-6 md:px-10 py-4 bg-[#F5F5F7]/80 backdrop-blur-2xl backdrop-saturate-150 border-b md:border border-[#1D1D1F]/10 shadow-[0_20px_40px_rgba(0,0,0,0.06)] rounded-none md:rounded-full"
                : "max-w-[1800px] px-6 md:px-12 py-6 md:py-10 bg-transparent border-transparent rounded-none"
          }`}
        >
          <Link 
            href="/" 
            onClick={() => setIsMenuOpen(false)} 
            className={`text-xl md:text-2xl font-bold tracking-tighter uppercase transition-colors duration-300 ${isMenuOpen ? "text-[#FAFAFA]" : "text-[#1D1D1F]"}`}
          >
            S2A Studio
          </Link>

          <nav className={`hidden lg:flex items-center gap-10 text-[10px] font-mono font-bold tracking-[0.2em] uppercase transition-opacity duration-300 ${isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            {corePillars.map((pillar) => (
              <Link key={pillar.name} href={pillar.path} className="text-[#86868B] hover:text-[#1D1D1F] transition-colors duration-300 relative group">
                {pillar.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#1D1D1F] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* 
        =========================================
        2. THE BOTTOM "MENU" PILL (The Trigger)
        A standalone floating button at the bottom center.
        =========================================
      */}
      <div className="fixed z-[6000] bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 pointer-events-auto">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.1)] backdrop-blur-2xl backdrop-saturate-150 border ${
            isMenuOpen 
              ? "bg-[#FAFAFA] border-transparent text-[#0A0A0A]" 
              : "bg-[#F5F5F7]/80 border-[#1D1D1F]/10 text-[#1D1D1F] hover:bg-white"
          }`}
        >
          <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.2em]">
            {isMenuOpen ? "Close" : "Menu"}
          </span>
          <div className="flex flex-col items-end gap-[4px] w-4 md:w-5">
            <span className={`h-[1px] transition-all duration-300 ${isMenuOpen ? "w-full rotate-45 translate-y-[2.5px] bg-[#0A0A0A]" : "w-full group-hover:w-2/3 bg-[#1D1D1F]"}`} />
            <span className={`h-[1px] transition-all duration-300 ${isMenuOpen ? "w-full -rotate-45 -translate-y-[2.5px] bg-[#0A0A0A]" : "w-2/3 group-hover:w-full bg-[#1D1D1F]"}`} />
          </div>
        </button>
      </div>

      {/* 
        =========================================
        3. THE BOTTOM POP-UP PANEL
        Glides up from behind the bottom menu pill.
        =========================================
      */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* INVISIBLE BACKDROP TO CLOSE WHEN CLICKING OUTSIDE */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[4000] bg-[#1D1D1F]/40 backdrop-blur-sm cursor-pointer"
            />

            {/* THE PANEL */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)", x: "-50%" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", x: "-50%" }}
              exit={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)", x: "-50%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed z-[5000] bottom-[85px] md:bottom-[105px] left-1/2 w-[calc(100vw-2rem)] md:w-[460px] bg-[#0A0A0A]/85 backdrop-blur-3xl backdrop-saturate-200 border border-white/10 shadow-[0_-20px_100px_rgba(0,0,0,0.3)] rounded-3xl md:rounded-[2rem] overflow-hidden flex flex-col"
            >
              <div className="p-8 md:p-10 flex flex-col gap-8">
                
                {/* LINKS LIST */}
                <div className="flex flex-col gap-4">
                  {/* Mobile Only: Show Core Pillars since the top nav hides on phones */}
                  <div className="flex flex-col gap-4 lg:hidden pb-4 mb-2 border-b border-white/10">
                    {corePillars.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.path} 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl font-light tracking-tight text-[#FAFAFA] hover:translate-x-2 transition-transform duration-300"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>

                  {/* Secondary Links */}
                  {secondaryLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + (i * 0.04), duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link 
                        href={link.path} 
                        onClick={() => setIsMenuOpen(false)}
                        className="group flex items-baseline gap-4 w-fit"
                      >
                        <span className="text-[10px] font-mono text-[#86868B] group-hover:text-[#FAFAFA] transition-colors">
                          {link.id}
                        </span>
                        <span className="text-3xl md:text-4xl font-light tracking-tight text-[#FAFAFA] group-hover:opacity-70 transition-all duration-300">
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="w-full h-[1px] bg-white/10 my-2" />

                {/* THE MICRO-DATA GRID */}
                <div className="grid grid-cols-2 gap-6 text-[9px] font-mono tracking-widest text-[#86868B] uppercase">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#555555]">Headquarters</span>
                    <span className="text-[#FAFAFA]">Nagpur, MH<br/>India</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#555555]">Inquiries</span>
                    <a href="mailto:hello@s2astudio.com" className="text-[#FAFAFA] hover:underline">hello@s2astudio.com</a>
                    <a href="tel:+910000000000" className="text-[#FAFAFA] hover:underline">+91 000 000 0000</a>
                  </div>
                </div>

                {/* CALL TO ACTION */}
                <Link 
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-4 bg-[#FAFAFA] hover:bg-[#E5E5EA] text-[#0A0A0A] text-center text-[10px] font-bold uppercase tracking-[0.2em] rounded-full transition-colors duration-300 mt-2"
                >
                  Client Login
                </Link>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}