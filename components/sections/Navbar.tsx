"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Projects", path: "/projects", hasDropdown: true },
    { name: "Studio", path: "/studio" },
    { name: "Recognition", path: "/recognition" },
    { name: "Journal", path: "/journal" },
    { name: "Careers", path: "/careers" },
  ];

  const projectSubLinks = [
    { name: "Architecture", path: "/projects/architecture" },
    { name: "Interior Design", path: "/projects/interior-design" },
    { name: "Competitions", path: "/projects/competitions" },
  ];

  return (
    <>
      {/* ================= DESKTOP & MOBILE HEADER ================= */}
      <header 
        className={`fixed top-0 left-0 right-0 z-[6000] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled 
            ? "bg-[#F5F5F7]/85 backdrop-blur-2xl backdrop-saturate-[1.8] border-b border-[#1D1D1F]/10 py-3.5 sm:py-4 shadow-[0_4px_24px_rgba(0,0,0,0.04)]" 
            : "bg-transparent py-6 sm:py-8"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          
          {/* 1. BRAND LOGO (Left) */}
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-[110px] sm:w-[140px] text-base sm:text-lg md:text-xl font-bold tracking-tighter uppercase text-[#1D1D1F] z-[6001] relative flex-shrink-0"
          >
            S2A Studio
          </Link>

          {/* 2. CENTERED NAVIGATION (Desktop Only) */}
          <nav className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2 z-[6001]">
            {navLinks.map((item) => {
              const isActive = pathname.startsWith(item.path);
              
              return (
                <div 
                  key={item.name}
                  className="relative py-4"
                  onMouseEnter={() => item.hasDropdown && setIsProjectsHovered(true)}
                  onMouseLeave={() => item.hasDropdown && setIsProjectsHovered(false)}
                >
                  <Link 
                    href={item.path} 
                    className={`group text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 flex items-center gap-1.5 ${
                      isActive ? "text-[#1D1D1F]" : "text-[#555555] hover:text-[#1D1D1F]"
                    }`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <svg className={`w-3.5 h-3.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isProjectsHovered ? "rotate-180 text-[#1D1D1F]" : "text-[#86868B] group-hover:text-[#1D1D1F]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    
                    {/* The Sleek Hover Line */}
                    <span className={`absolute bottom-2 left-0 h-[1.5px] bg-[#1D1D1F] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </Link>

                  {/* HIGH CONTRAST DROPDOWN */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {isProjectsHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.98, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(4px)" }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 min-w-[220px] bg-[#F5F5F7]/95 backdrop-blur-3xl backdrop-saturate-[2] border border-[#1D1D1F]/10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] p-2 flex flex-col gap-0.5 mt-2"
                        >
                          {projectSubLinks.map((child) => (
                            <Link
                              key={child.name}
                              href={child.path}
                              onClick={() => setIsProjectsHovered(false)}
                              className="px-4 py-3.5 rounded-xl text-xs tracking-widest font-semibold text-[#555555] hover:text-[#1D1D1F] hover:bg-[#1D1D1F]/5 transition-all uppercase text-center"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* 3. CTA BUTTON (Desktop Right) */}
          <div className="hidden lg:flex justify-end w-[140px] flex-shrink-0 z-[6001]">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-[#1D1D1F] text-[#F5F5F7] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#333336] transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              Contact
            </Link>
          </div>

          {/* 4. MOBILE MENU TOGGLE BUTTON */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="lg:hidden relative z-[6002] w-10 h-10 sm:w-12 sm:h-12 flex flex-col items-center justify-center gap-[5px] bg-[#1D1D1F]/5 hover:bg-[#1D1D1F]/10 rounded-full transition-colors"
          >
            <span className={`w-4 sm:w-5 h-[1.5px] bg-[#1D1D1F] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`w-4 sm:w-5 h-[1.5px] bg-[#1D1D1F] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-4 sm:w-5 h-[1.5px] bg-[#1D1D1F] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>

        </div>
      </header>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[5000] bg-[#F5F5F7]/98 pt-24 sm:pt-28 px-6 overflow-y-auto flex flex-col pb-12 lg:hidden"
          >
            <div className="flex flex-col gap-2 mt-4 max-w-md mx-auto w-full">
              {navLinks.map((item, i) => (
                <motion.div 
                  key={item.name} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col border-b border-[#1D1D1F]/10 pb-4 pt-2"
                >
                  <Link 
                    href={item.path}
                    onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                    className="text-2xl sm:text-3xl font-medium tracking-tight text-[#1D1D1F] flex items-center justify-between"
                  >
                    {item.name}
                  </Link>

                  {item.hasDropdown && (
                    <div className="flex flex-col gap-3 pl-4 mt-4 border-l border-[#1D1D1F]/15">
                      {projectSubLinks.map((child) => (
                        <Link
                          key={child.name}
                          href={child.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-xs font-semibold text-[#555555] hover:text-[#1D1D1F] uppercase tracking-widest transition-colors py-1"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-6"
              >
                <Link 
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 bg-[#1D1D1F] text-[#F5F5F7] flex justify-center text-[10px] font-bold uppercase tracking-[0.2em] rounded-full active:scale-95 transition-transform shadow-lg"
                >
                  Contact Studio
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}