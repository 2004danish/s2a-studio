"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const spec1Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.55], [0, 1, 1, 0]);
  const spec1Y = useTransform(scrollYProgress, [0.15, 0.55], ["10vh", "-10vh"]);

  const spec2Opacity = useTransform(scrollYProgress, [0.6, 0.7, 0.9, 1], [0, 1, 1, 0]);
  const spec2Y = useTransform(scrollYProgress, [0.6, 1], ["10vh", "-10vh"]);

  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-[#F5F5F7] text-[#1D1D1F]">
      
      {/* IMMERSIVE FRAME WRAPPER */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col pt-20 md:pt-24 pb-3 md:pb-6 px-3 md:px-6 overflow-hidden">

        <div className="relative w-full h-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.1)] z-10 border border-[#1D1D1F]/5 bg-[#1D1D1F]">
          
          {/* PURE DRONE VIDEO BACKGROUND */}
          <video 
            src="/hero video/3ddronevideo.mp4"
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-10"
          />

          {/* Elegant gradient optimized for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none z-20" />

          {/* HUD OVERLAY */}
          <div className="hidden sm:flex absolute bottom-8 left-8 md:bottom-12 md:left-12 flex-col gap-1.5 z-50 text-[9px] md:text-[10px] font-mono tracking-[0.2em] uppercase text-white drop-shadow-md">
            <span>21.1458° N, 79.0882° E</span>
            <span className="text-white/70">Master Planning & Architecture</span>
          </div>

          {/* SCROLL INDICATOR */}
          <motion.div 
            style={{ opacity: indicatorOpacity }}
            className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 flex flex-col items-center gap-2 md:gap-3 z-50 pointer-events-none drop-shadow-md"
          >
            <div className="w-[1px] h-10 md:h-14 bg-white/30 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scrollDown_1.5s_ease-in-out_infinite]" />
            </div>
            <span className="text-[8px] md:text-[10px] font-mono tracking-[0.2em] uppercase text-white">Scroll</span>
          </motion.div>

        </div>

        {/* SPECIFICATION CARD 1 (Phase 01) */}
        <motion.div 
          style={{ opacity: spec1Opacity, y: spec1Y }}
          className="absolute left-4 right-4 sm:left-auto sm:right-12 md:right-24 lg:right-32 bottom-24 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-40 sm:w-[380px] md:w-[450px] lg:w-[500px]"
        >
          <div className="backdrop-blur-2xl backdrop-saturate-150 bg-white/95 sm:bg-white/90 p-5 sm:p-8 md:p-12 rounded-2xl md:rounded-[2rem] border border-white/50 shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-3 mb-3 md:mb-6">
              <span className="w-3 md:w-5 h-[1px] bg-[#86868B]"></span>
              <span className="text-[8px] md:text-[10px] font-mono text-[#86868B] tracking-[0.2em] uppercase">
                Phase 01 // Conception
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#1D1D1F] mb-2 md:mb-5 leading-[1.1]">
              Uncompromising Structural Integrity.
            </h3>
            <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-[#1D1D1F]/70 font-light leading-relaxed">
              We treat space as a tangible material. Every cantilever, every load-bearing wall, and every line of sight is engineered to its absolute purest form.
            </p>
          </div>
        </motion.div>

        {/* SPECIFICATION CARD 2 (Phase 02) */}
        <motion.div 
          style={{ opacity: spec2Opacity, y: spec2Y }}
          className="absolute left-4 right-4 sm:right-auto sm:left-12 md:left-24 lg:left-32 bottom-24 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-40 sm:w-[380px] md:w-[450px] lg:w-[500px]"
        >
          <div className="backdrop-blur-2xl backdrop-saturate-150 bg-white/95 sm:bg-white/90 p-5 sm:p-8 md:p-12 rounded-2xl md:rounded-[2rem] border border-white/50 shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-3 mb-3 md:mb-6">
              <span className="w-3 md:w-5 h-[1px] bg-[#86868B]"></span>
              <span className="text-[8px] md:text-[10px] font-mono text-[#86868B] tracking-[0.2em] uppercase">
                Phase 02 // Materiality
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#1D1D1F] mb-2 md:mb-5 leading-[1.1]">
              The Tactile Experience.
            </h3>
            <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-[#1D1D1F]/70 font-light leading-relaxed">
              Moving away from sterile surfaces. We embrace board-formed concrete, low-iron glass, and natural travertine that patinas beautifully with time.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}