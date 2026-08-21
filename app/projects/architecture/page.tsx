"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export interface Project {
  id: string;
  title: string;
  typology: string;
  year: string;
  image: string;
  isFeatured?: boolean; 
}

// MOCK DATA: 7 Projects per year, using the same name and rotating 3 images for client approval.
const mockCmsData: Project[] = [
  // ================= 2027 =================
  { id: "27-01", title: "Villa Kekarav", typology: "Premium Residential", year: "2027", image: "/hero images/bungalow-kekarav.jpg", isFeatured: true }, 
  { id: "27-02", title: "Villa Kekarav", typology: "Premium Residential", year: "2027", image: "/turnkeyworks/bungalow-sangali.jpg", isFeatured: false },
  { id: "27-03", title: "Villa Kekarav", typology: "Premium Residential", year: "2027", image: "/turnkeyworks/encore-boutique-resort.jpg", isFeatured: false },
  { id: "27-04", title: "Villa Kekarav", typology: "Premium Residential", year: "2027", image: "/hero images/bungalow-kekarav.jpg", isFeatured: false },
  { id: "27-05", title: "Villa Kekarav", typology: "Premium Residential", year: "2027", image: "/turnkeyworks/bungalow-sangali.jpg", isFeatured: false }, 
  { id: "27-06", title: "Villa Kekarav", typology: "Premium Residential", year: "2027", image: "/turnkeyworks/encore-boutique-resort.jpg", isFeatured: true },
  { id: "27-07", title: "Villa Kekarav", typology: "Premium Residential", year: "2027", image: "/hero images/bungalow-kekarav.jpg", isFeatured: false },

  // ================= 2026 =================
  { id: "26-01", title: "Villa Kekarav", typology: "Premium Residential", year: "2026", image: "/turnkeyworks/bungalow-sangali.jpg", isFeatured: true },
  { id: "26-02", title: "Villa Kekarav", typology: "Premium Residential", year: "2026", image: "/turnkeyworks/encore-boutique-resort.jpg", isFeatured: false }, 
  { id: "26-03", title: "Villa Kekarav", typology: "Premium Residential", year: "2026", image: "/hero images/bungalow-kekarav.jpg", isFeatured: false },
  { id: "26-04", title: "Villa Kekarav", typology: "Premium Residential", year: "2026", image: "/turnkeyworks/bungalow-sangali.jpg", isFeatured: false },
  { id: "26-05", title: "Villa Kekarav", typology: "Premium Residential", year: "2026", image: "/turnkeyworks/encore-boutique-resort.jpg", isFeatured: false },
  { id: "26-06", title: "Villa Kekarav", typology: "Premium Residential", year: "2026", image: "/hero images/bungalow-kekarav.jpg", isFeatured: true },
  { id: "26-07", title: "Villa Kekarav", typology: "Premium Residential", year: "2026", image: "/turnkeyworks/bungalow-sangali.jpg", isFeatured: false },

  // ================= 2025 =================
  { id: "25-01", title: "Villa Kekarav", typology: "Premium Residential", year: "2025", image: "/turnkeyworks/encore-boutique-resort.jpg", isFeatured: true }, 
  { id: "25-02", title: "Villa Kekarav", typology: "Premium Residential", year: "2025", image: "/hero images/bungalow-kekarav.jpg", isFeatured: false },
  { id: "25-03", title: "Villa Kekarav", typology: "Premium Residential", year: "2025", image: "/turnkeyworks/bungalow-sangali.jpg", isFeatured: false },
  { id: "25-04", title: "Villa Kekarav", typology: "Premium Residential", year: "2025", image: "/turnkeyworks/encore-boutique-resort.jpg", isFeatured: false },
  { id: "25-05", title: "Villa Kekarav", typology: "Premium Residential", year: "2025", image: "/hero images/bungalow-kekarav.jpg", isFeatured: false }, 
  { id: "25-06", title: "Villa Kekarav", typology: "Premium Residential", year: "2025", image: "/turnkeyworks/bungalow-sangali.jpg", isFeatured: true },
  { id: "25-07", title: "Villa Kekarav", typology: "Premium Residential", year: "2025", image: "/turnkeyworks/encore-boutique-resort.jpg", isFeatured: false },

  // ================= 2024 =================
  { id: "24-01", title: "Villa Kekarav", typology: "Premium Residential", year: "2024", image: "/hero images/bungalow-kekarav.jpg", isFeatured: true }, 
  { id: "24-02", title: "Villa Kekarav", typology: "Premium Residential", year: "2024", image: "/turnkeyworks/bungalow-sangali.jpg", isFeatured: false },
  { id: "24-03", title: "Villa Kekarav", typology: "Premium Residential", year: "2024", image: "/turnkeyworks/encore-boutique-resort.jpg", isFeatured: false },
  { id: "24-04", title: "Villa Kekarav", typology: "Premium Residential", year: "2024", image: "/hero images/bungalow-kekarav.jpg", isFeatured: false },
  { id: "24-05", title: "Villa Kekarav", typology: "Premium Residential", year: "2024", image: "/turnkeyworks/bungalow-sangali.jpg", isFeatured: false }, 
  { id: "24-06", title: "Villa Kekarav", typology: "Premium Residential", year: "2024", image: "/turnkeyworks/encore-boutique-resort.jpg", isFeatured: true },
  { id: "24-07", title: "Villa Kekarav", typology: "Premium Residential", year: "2024", image: "/hero images/bungalow-kekarav.jpg", isFeatured: false },
];

export default function ArchitectureArchive({ projects = mockCmsData }: { projects?: Project[] }) {
  
  const years = useMemo(() => {
    if (!projects || projects.length === 0) return [];
    const allYears = projects.map(p => p.year);
    return Array.from(new Set(allYears)).sort((a, b) => Number(b) - Number(a));
  }, [projects]);

  const [activeYear, setActiveYear] = useState<string>("");

  useEffect(() => {
    if (years.length > 0 && !activeYear) {
      setActiveYear(years[0]);
    }
  }, [years, activeYear]);

  const activeProjects = useMemo(() => {
    return projects.filter(p => p.year === activeYear);
  }, [activeYear, projects]);

  if (!projects || projects.length === 0) {
    return <div className="min-h-screen flex items-center justify-center">Loading Archive...</div>;
  }

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-24 md:pt-32 pb-24 selection:bg-[#1D1D1F] selection:text-white">
      
      {/* ================= SUPER-WIDE CINEMATIC HEADER ================= */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 mb-12 md:mb-20">
        <div className="max-w-[2000px] mx-auto flex flex-col gap-3 md:gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 md:gap-4"
          >
            <span className="w-6 md:w-8 h-[1px] bg-[#1D1D1F]/20" />
            <span className="text-[9px] md:text-[10px] font-mono text-[#86868B] tracking-[0.2em] uppercase">
              The Archive
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-medium tracking-tighter leading-[0.85] uppercase"
          >
            Architecture.
          </motion.h1>
        </div>
      </div>

      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 relative">
        
        {/* ================= LEFT: LIQUID PILL TAB BAR ================= */}
        <div className="w-full lg:w-[250px] xl:w-[300px] flex-shrink-0 relative z-30">
          <div className="lg:sticky lg:top-32 flex lg:flex-col gap-2 lg:gap-3 overflow-x-auto lg:overflow-visible no-scrollbar snap-x snap-mandatory py-2 lg:py-0">
            
            <span className="hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] text-[#86868B] mb-2 border-b border-[#1D1D1F]/10 pb-4">
              Select Timeline
            </span>
            
            {years.map((year) => {
              const isActive = activeYear === year;
              const count = projects.filter(p => p.year === year).length;

              return (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className="group relative flex items-center justify-between px-6 py-3 rounded-full lg:w-full flex-shrink-0 snap-start outline-none"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-[#1D1D1F] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <span className={`relative z-10 text-sm sm:text-base md:text-xl font-medium tracking-tight transition-colors duration-300 ${
                    isActive ? "text-white" : "text-[#86868B] group-hover:text-[#1D1D1F]"
                  }`}>
                    {year}
                  </span>
                  
                  <span className={`relative z-10 flex text-[9px] md:text-[10px] font-mono items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full transition-colors duration-300 ${
                    isActive ? "bg-white/20 text-white" : "bg-[#1D1D1F]/5 text-[#86868B] group-hover:bg-[#1D1D1F]/10 group-hover:text-[#1D1D1F]"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT: PREMIUM BENTO GRID ================= */}
        <div className="w-full flex-1 min-h-[60vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
            >
              {activeProjects.map((project, index) => {
                
                const isHero = project.isFeatured === true || (project.isFeatured === undefined && index % 5 === 0);

                return (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    key={project.id} 
                    className={`flex flex-col ${isHero ? 'md:col-span-2' : 'col-span-1'}`}
                  >
                    <motion.div 
                      whileHover="hover"
                      initial="initial"
                      className="flex flex-col w-full h-full cursor-pointer group"
                    >
                      <Link href={`/projects/architecture/${project.id}`} className="flex flex-col h-full w-full outline-none">
                        
                        <div className={`w-full relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#E8E8EA] mb-4 ${
                          isHero ? 'aspect-[4/3] md:aspect-[21/9]' : 'aspect-[4/5] md:aspect-[4/3]'
                        }`}>
                          
                          <motion.img 
                            variants={{
                              initial: { scale: 1 },
                              hover: { scale: 1.05, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            src={project.image} 
                            alt={project.title}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          
                          <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 pointer-events-none rounded-[1.5rem] md:rounded-[2rem]" />
                          
                          <motion.div 
                            variants={{
                              initial: { opacity: 0 },
                              hover: { opacity: 1, transition: { duration: 0.5 } }
                            }}
                            className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent pointer-events-none" 
                          />

                          <motion.div 
                            variants={{
                              initial: { y: 20, opacity: 0 },
                              hover: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-center justify-center pointer-events-none"
                          >
                            <div className="px-5 py-2.5 md:px-6 md:py-3 bg-white/20 backdrop-blur-xl border border-white/20 rounded-full text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest shadow-2xl flex items-center gap-2">
                              Explore
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </div>
                          </motion.div>

                        </div>

                        <motion.div 
                          variants={{
                            initial: { x: 0 },
                            hover: { x: 4, transition: { duration: 0.4, ease: "easeOut" } }
                          }}
                          className="flex flex-col md:flex-row md:justify-between md:items-start pt-1 md:pt-2 px-1 gap-1"
                        >
                          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-[#1D1D1F] leading-tight">
                            {project.title}
                          </h2>
                          <span className="text-[11px] md:text-xs font-light text-[#86868B] md:text-right mt-0.5 md:mt-1">
                            {project.typology}
                          </span>
                        </motion.div>

                      </Link>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </main>
  );
}