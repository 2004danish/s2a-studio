"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const selectedProjects = [
  {
    id: "01",
    titleSans: "BUNGALOW",
    titleSerif: "at Sangli",
    image: "/turnkeyworks/bungalow-sangali.jpg",
    description: "This design embodies 'Tropical Modernism,' utilizing deep overhanging roofs and vertical slatted screens to combat harsh sunlight. The concept emphasizes floating planes and a harmonious blend of raw concrete with warm timber textures.",
    specs: "SANGLI, SATARA // RESIDENTIAL + INTERIORS",
  },
  {
    id: "02",
    titleSans: "ENCORE",
    titleSerif: "Boutique Resort",
    image: "/turnkeyworks/encore-boutique-resort.jpg",
    description: "Set within the Sahyadri mountains overlooking Mulshi Lake, this contemporary tropical retreat is inspired by Balinese architecture. Built forms sensitively follow the natural contours, integrating streams and existing flora.",
    specs: "HOSPITALITY - RESORT // MULSHI LAKE, PUNE",
  },
  {
    id: "03",
    titleSans: "PRIVATE VILLA",
    titleSerif: "Kekarav",
    image: "/hero images/bungalow-kekarav.jpg",
    description: "A masterclass in spatial continuity and minimalist intervention. The architecture acts as a pure, unadorned frame for the surrounding environment, relying on exact geometric proportions and low-iron glass.",
    specs: "PREMIUM RESIDENTIAL // ARCHITECTURE + LANDSCAPE",
  }
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const textReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

export default function SelectedWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = selectedProjects.length + 1;

  // Detect screen size to determine which layout engine to use
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop Scroll Math
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(totalSlides - 1) * 100}vw`]);
  const introParallax = useTransform(scrollYProgress, [0, 0.2], ["0%", "-20%"]);

  // =========================================
  // MOBILE / TABLET LAYOUT (Native Vertical Scroll)
  // =========================================
  if (isMobile) {
    return (
      <section id="selected-works" className="w-full bg-[#F5F5F7] text-[#1D1D1F] font-sans pt-24 pb-32">
        
        {/* Mobile Intro Header */}
        <div className="px-6 md:px-12 mb-20 text-center flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#86868B] font-bold">
            Phase 01 // Masterpieces
          </span>
          <h2 className="text-5xl md:text-7xl tracking-tighter leading-[0.9] uppercase flex flex-col">
            <span className="font-light text-[#1D1D1F]">Selected</span>
            <span className="font-medium text-[#86868B] italic font-serif tracking-tight normal-case">Works.</span>
          </h2>
        </div>

        {/* Mobile Project Stack */}
        <div className="flex flex-col gap-24 md:gap-32">
          {selectedProjects.map((project, index) => (
            <div key={project.id} className="flex flex-col px-6 md:px-12">
              
              {/* Massive Mobile Image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full aspect-[4/5] md:aspect-square relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl mb-8 md:mb-12"
              >
                <img 
                  src={project.image}
                  alt={project.titleSans}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 rounded-2xl md:rounded-[2.5rem] pointer-events-none" />
              </motion.div>

              {/* Mobile Text Content */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10%" }}
                className="flex flex-col"
              >
                <motion.div variants={textReveal} className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-[#86868B] tracking-[0.2em]">0{index + 1}</span>
                  <span className="w-8 h-[1px] bg-[#1D1D1F]/20"></span>
                  <span className="text-[10px] font-mono text-[#1D1D1F] tracking-[0.2em] uppercase">0{selectedProjects.length}</span>
                </motion.div>

                <motion.h3 variants={textReveal} className="flex flex-col text-4xl md:text-5xl leading-[0.95] text-[#1D1D1F] mb-6">
                  <span className="font-medium tracking-tighter uppercase">{project.titleSans}</span>
                  <span className="font-light italic font-serif tracking-tight text-[#86868B] mt-1">{project.titleSerif}</span>
                </motion.h3>

                <div className="flex flex-col gap-6">
                  <motion.p variants={textReveal} className="text-sm md:text-base text-[#1D1D1F]/70 font-light leading-relaxed max-w-lg">
                    {project.description}
                  </motion.p>

                  <motion.div variants={textReveal} className="flex flex-col gap-2 pt-6 border-t border-[#1D1D1F]/10">
                    <span className="text-[9px] md:text-[10px] font-mono text-[#86868B] tracking-[0.2em] uppercase">
                      Technical Specs
                    </span>
                    <p className="text-[10px] md:text-xs text-[#1D1D1F] leading-relaxed uppercase font-semibold tracking-widest">
                      {project.specs}
                    </p>
                  </motion.div>
                </div>

                <motion.div variants={textReveal} className="mt-8">
                  <button className="group flex items-center gap-4 pb-2 border-b border-[#1D1D1F]/20 w-fit">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#1D1D1F]">
                      View Case Study
                    </span>
                    <div className="w-6 h-6 rounded-full bg-[#E8E8EA] flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#1D1D1F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </button>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // =========================================
  // DESKTOP LAYOUT (Horizontal Scroll Track)
  // =========================================
  return (
    <motion.section 
      id="selected-works" 
      ref={sectionRef} 
      style={{ height: `${totalSlides * 100}vh` }} 
      className="hidden lg:block relative w-full bg-[#F5F5F7] text-[#1D1D1F] font-sans"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <motion.div 
          style={{ x: xTransform, width: `${totalSlides * 100}vw` }}
          className="flex h-full items-center"
        >
          
          {/* SLIDE 1: INTRO */}
          <div className="relative h-full w-screen flex flex-col items-center justify-center overflow-hidden flex-shrink-0">
            <motion.div 
              style={{ x: introParallax }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]"
            >
              <h2 className="text-[25vw] font-bold leading-none tracking-tighter whitespace-nowrap text-[#1D1D1F]">
                SELECTED
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="relative z-10 text-center flex flex-col items-center gap-6"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#86868B] font-bold">
                Phase 01 // Masterpieces
              </span>
              <h2 className="text-8xl xl:text-[10rem] tracking-tighter leading-[0.8] uppercase flex flex-col">
                <span className="font-light text-[#1D1D1F]">Selected</span>
                <span className="font-medium text-[#86868B] italic font-serif tracking-tight normal-case pr-12">Works.</span>
              </h2>
            </motion.div>
          </div>

          {/* SLIDES 2+: THE ASYMMETRICAL SWISS GRID */}
          {selectedProjects.map((project, index) => (
            <div key={project.id} className="relative h-full w-screen flex items-center justify-center flex-shrink-0 px-12 xl:px-24">
              
              <div className="w-full max-w-[1800px] h-full grid grid-cols-12 items-center gap-8 xl:gap-12">
                
                {/* LEFT: THE TOWERING IMAGE */}
                <motion.div 
                  initial={{ opacity: 0, clipPath: "inset(5% 5% 5% 5% round 2.5rem)" }}
                  whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 2.5rem)" }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                  className="col-span-7 h-[75vh] xl:h-[80vh] relative rounded-[2.5rem] overflow-hidden shadow-2xl flex-shrink-0"
                >
                  <motion.img 
                    initial={{ scale: 1.15 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                    src={project.image}
                    alt={project.titleSans}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 rounded-[2.5rem] pointer-events-none" />
                </motion.div>

                {/* RIGHT: THE EDITORIAL TEXT BLOCK */}
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.4 }}
                  className="col-start-9 col-span-4 flex flex-col justify-center"
                >
                  <motion.div variants={textReveal} className="flex items-center gap-4 mb-6 xl:mb-8">
                    <span className="text-[10px] font-mono text-[#86868B] tracking-[0.2em]">0{index + 1}</span>
                    <span className="w-8 h-[1px] bg-[#1D1D1F]/20"></span>
                    <span className="text-[10px] font-mono text-[#1D1D1F] tracking-[0.2em] uppercase">0{selectedProjects.length}</span>
                  </motion.div>

                  <motion.h3 variants={textReveal} className="flex flex-col text-6xl xl:text-7xl leading-[0.9] text-[#1D1D1F] mb-8 xl:mb-12">
                    <span className="font-medium tracking-tighter uppercase">{project.titleSans}</span>
                    <span className="font-light italic font-serif tracking-tight text-[#86868B] mt-1 ml-6">{project.titleSerif}</span>
                  </motion.h3>

                  <div className="flex flex-col gap-8">
                    <motion.p variants={textReveal} className="text-sm xl:text-base text-[#1D1D1F]/70 font-light leading-relaxed max-w-[28rem]">
                      {project.description}
                    </motion.p>

                    <motion.div variants={textReveal} className="flex flex-col gap-2 pt-6 border-t border-[#1D1D1F]/10 max-w-[28rem]">
                      <span className="text-[9px] font-mono text-[#86868B] tracking-[0.2em] uppercase">
                        Technical Specs
                      </span>
                      <p className="text-[10px] text-[#1D1D1F] leading-relaxed uppercase font-semibold tracking-widest">
                        {project.specs}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div variants={textReveal} className="mt-10 xl:mt-12">
                    <button className="group flex items-center gap-4 pb-2 border-b border-[#1D1D1F]/20 hover:border-[#1D1D1F] transition-colors w-fit">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1D1D1F]">
                        View Case Study
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#E8E8EA] group-hover:bg-[#1D1D1F] flex items-center justify-center transition-colors duration-300">
                        <svg className="w-3 h-3 text-[#1D1D1F] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </button>
                  </motion.div>
                </motion.div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}