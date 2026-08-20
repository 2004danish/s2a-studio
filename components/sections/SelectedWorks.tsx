"use client";

import { useRef } from "react";
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
  const totalSlides = selectedProjects.length + 1;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(totalSlides - 1) * 100}vw`]);
  const introParallax = useTransform(scrollYProgress, [0, 0.2], ["0%", "-20%"]);

  return (
    <motion.section 
      id="selected-works" 
      ref={sectionRef} 
      style={{ height: `${totalSlides * 100}vh` }} 
      className="relative w-full bg-[#F5F5F7] text-[#1D1D1F] font-sans"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <motion.div 
          style={{ x: xTransform, width: `${totalSlides * 100}vw` }}
          className="flex h-full items-center"
        >
          
          {/* ================= SLIDE 1: INTRO ================= */}
          <div className="relative h-full w-screen flex flex-col items-center justify-center overflow-hidden flex-shrink-0 px-4 sm:px-6">
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
              className="relative z-10 text-center flex flex-col items-center gap-4 sm:gap-6"
            >
              <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#86868B] font-bold">
                Phase 01 // Masterpieces
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] tracking-tighter leading-[0.85] sm:leading-[0.8] uppercase flex flex-col">
                <span className="font-light text-[#1D1D1F]">Selected</span>
                <span className="font-medium text-[#86868B] italic font-serif tracking-tight normal-case pr-6 sm:pr-12">Works.</span>
              </h2>
            </motion.div>
          </div>

          {/* ================= SLIDES 2+: THE ASYMMETRICAL SWISS GRID ================= */}
          {selectedProjects.map((project, index) => (
            <div key={project.id} className="relative h-full w-screen flex items-center justify-center flex-shrink-0 px-4 sm:px-8 md:px-12 lg:px-20">
              
              {/* The 12-Column Grid Wrapper */}
              <div className="w-full max-w-[1800px] h-full flex flex-col lg:grid lg:grid-cols-12 items-center lg:items-center gap-6 sm:gap-8 lg:gap-0 pt-20 sm:pt-24 lg:pt-0 overflow-y-auto lg:overflow-visible">
                
                {/* LEFT: THE TOWERING IMAGE (Spans 7 Columns) - Responsive Heights */}
                <motion.div 
                  initial={{ opacity: 0, clipPath: "inset(5% 5% 5% 5% round 1.5rem)" }}
                  whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 1.5rem)" }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                  className="w-full lg:col-span-7 h-[35vh] sm:h-[45vh] lg:h-[75vh] relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl flex-shrink-0"
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
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 rounded-2xl md:rounded-[2.5rem] pointer-events-none" />
                </motion.div>

                {/* RIGHT: THE EDITORIAL TEXT BLOCK (Spans 4 Columns) */}
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.4 }}
                  className="w-full lg:col-start-9 lg:col-span-4 flex flex-col justify-center pb-8 lg:pb-0"
                >
                  {/* Refined Tracking Header */}
                  <motion.div variants={textReveal} className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#86868B] tracking-[0.2em]">0{index + 1}</span>
                    <span className="w-6 sm:w-8 h-[1px] bg-[#1D1D1F]/20"></span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#1D1D1F] tracking-[0.2em] uppercase">0{selectedProjects.length}</span>
                  </motion.div>

                  {/* Refined Typography: Scaled down on mobile */}
                  <motion.h3 variants={textReveal} className="flex flex-col text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] text-[#1D1D1F] mb-6 sm:mb-8">
                    <span className="font-medium tracking-tighter uppercase">{project.titleSans}</span>
                    <span className="font-light italic font-serif tracking-tight text-[#86868B] mt-1 lg:ml-6">{project.titleSerif}</span>
                  </motion.h3>

                  <div className="flex flex-col gap-6 sm:gap-8">
                    {/* Constrained max-width for perfect reading lines */}
                    <motion.p variants={textReveal} className="text-xs sm:text-sm text-[#1D1D1F]/70 font-light leading-relaxed max-w-[28rem]">
                      {project.description}
                    </motion.p>

                    <motion.div variants={textReveal} className="flex flex-col gap-2 pt-4 sm:pt-6 border-t border-[#1D1D1F]/10 max-w-[28rem]">
                      <span className="text-[8px] sm:text-[9px] font-mono text-[#86868B] tracking-[0.2em] uppercase">
                        Technical Specs
                      </span>
                      <p className="text-[9px] sm:text-[10px] text-[#1D1D1F] leading-relaxed uppercase font-semibold tracking-widest">
                        {project.specs}
                      </p>
                    </motion.div>
                  </div>

                  {/* Refined Apple-Style Button */}
                  <motion.div variants={textReveal} className="mt-6 sm:mt-10">
                    <button className="group flex items-center gap-3 sm:gap-4 pb-2 border-b border-[#1D1D1F]/20 hover:border-[#1D1D1F] transition-colors w-fit">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1D1D1F]">
                        View Case Study
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#F5F5F7] group-hover:bg-[#1D1D1F] flex items-center justify-center transition-colors duration-300">
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