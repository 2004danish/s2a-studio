"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);

  // SCROLL PHYSICS ENGINE
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  // Split headline text into individual words for word-by-word cascade animation
  const titleWords = "Nature inspired solutions in architecture track down to reunite humans with their".split(" ");

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#F5F5F7] py-16 md:py-20 px-5 sm:px-8 md:px-12 lg:px-24 overflow-hidden flex items-center"
    >
      
      {/* ======================================================== */}
      {/* BACKGROUND IMAGE - PARALLAX MASTERPLAN (Responsive Opacity) */}
      {/* ======================================================== */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-1/2 -translate-y-1/2 right-[-10%] sm:right-[-5%] w-[130%] sm:w-[90%] md:w-[75%] lg:w-[72%] h-[100vh] z-0 pointer-events-none mix-blend-multiply opacity-25 sm:opacity-50 md:opacity-85 transition-opacity"
      >
        <motion.img 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          src="/philosophysection/philosophyimage2.png" 
          alt="Architectural Masterplan" 
          className="w-full h-full object-contain object-right"
          style={{
            WebkitMaskImage: "radial-gradient(ellipse at 80% 50%, black 28%, transparent 68%)",
            maskImage: "radial-gradient(ellipse at 80% 50%, black 28%, transparent 68%)"
          }}
        />
      </motion.div>
      {/* ======================================================== */}


      {/* ======================================================== */}
      {/* FOREGROUND CONTENT */}
      {/* ======================================================== */}
      <div className="max-w-[1800px] mx-auto w-full relative z-10 flex flex-col items-start">
        
        {/* PHILOSOPHY LABEL */}
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F] animate-pulse" />
          <span className="text-[8px] font-mono font-bold tracking-[0.2em] uppercase text-[#1D1D1F]">
            Philosophy
          </span>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1px] bg-[#1D1D1F]/20 ml-2" 
          />
        </motion.div>

        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-6 lg:gap-8 w-full max-w-[600px]">
          
          {/* HEADLINE & SUB-LINE GROUPED TIGHTLY */}
          <div className="flex flex-col">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-tight text-[#1D1D1F] flex flex-wrap gap-x-[0.3em] gap-y-[0.1em]">
              {titleWords.map((word, index) => (
                <span key={index} className="overflow-hidden inline-block pb-1">
                  <motion.span
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.7, 
                      delay: index * 0.025, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h2>

            {/* ITALIC SUB-LINE */}
            <motion.span 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif italic font-light text-[#777777] tracking-normal text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] block mt-0.5"
            >
              true enclosures.
            </motion.span>
          </div>

          {/* ======================================================== */}
          {/* COMPACT GRAYISH GLASSMORPHIC 3D FLOATING BOX */}
          {/* ======================================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
            className="relative bg-[#1D1D1F]/[0.03] backdrop-blur-2xl border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 mt-2 w-full max-w-[540px]"
          >
            <p className="text-xs md:text-sm text-[#1D1D1F]/85 font-normal leading-relaxed w-full sm:max-w-[270px]">
              We move away from sterile surfaces, embracing raw materials, geometric proportions, and absolute structural integrity.
            </p>
            
            <Link 
              href="/studio" 
              className="group flex items-center gap-3 pb-1 border-b border-[#1D1D1F]/30 hover:border-[#1D1D1F] transition-colors w-fit flex-shrink-0"
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1D1D1F]">
                Read Manifesto
              </span>
              <div className="w-7 h-7 rounded-full bg-[#1D1D1F] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-md">
                <svg className="w-2.5 h-2.5 text-[#F5F5F7] transition-transform duration-500 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}