"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

// 1. THE IMAGE SEQUENCE
const heroImages = [
  "/hero images/bungalow-kekarav.jpg", 
  "/turnkeyworks/bungalow-sangali.jpg",
  "/turnkeyworks/encore-boutique-resort.jpg",
  "/turnkeyworks/golf-resort.jpg"
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

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
      <div className="sticky top-0 h-screen w-full flex flex-col pt-[80px] md:pt-[90px] pb-4 px-3 md:px-6 overflow-hidden">

        <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.1)] z-10 border border-[#1D1D1F]/5 bg-[#1D1D1F]">
          
          {/* DRONE VIDEO OVERLAY */}
          <video 
            src="/hero video/3ddronevideo.mp4"
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-30"
          />

          {/* IMAGE SEQUENCE */}
          {heroImages.map((src, index) => (
            <motion.img 
              key={src}
              src={src}
              alt="S2A Architectural Masterpiece" 
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ 
                opacity: index === currentIndex ? 1 : 0,
                scale: index === currentIndex ? 1 : 1.05,
                zIndex: index === currentIndex ? 20 : 10
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none z-40" />

          {/* FLOATING FAST-TRAVEL CARD */}
          <Link 
            href="/projects" 
            className="absolute top-4 right-4 md:top-8 md:right-8 z-50 group"
          >
            <div className="backdrop-blur-3xl backdrop-saturate-200 bg-white/10 hover:bg-white/20 border border-white/20 p-2 pr-5 md:pr-8 rounded-full flex items-center gap-3 md:gap-4 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-90 transition-transform duration-500">
                <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#1D1D1F] translate-x-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[7px] md:text-[8px] font-mono tracking-[0.2em] text-white/70 uppercase">Explore</span>
                <span className="text-[9px] md:text-[10px] font-bold tracking-[0.1em] text-white uppercase">All Projects</span>
              </div>
            </div>
          </Link>

          {/* HUD OVERLAY */}
          <div className="absolute bottom-6 left-4 md:bottom-10 md:left-10 flex flex-col gap-1 z-50 text-[8px] md:text-[9px] font-mono tracking-[0.2em] uppercase text-white drop-shadow-md">
            <span>21.1458° N, 79.0882° E</span>
            <span className="text-white/70">Master Planning & Architecture</span>
          </div>

          {/* SCROLL INDICATOR */}
          <motion.div 
            style={{ opacity: indicatorOpacity }}
            className="absolute bottom-6 right-4 md:bottom-10 md:right-10 flex flex-col items-center gap-2 md:gap-3 z-50 pointer-events-none drop-shadow-md"
          >
            <div className="w-[1px] h-10 md:h-12 bg-white/30 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scrollDown_1.5s_ease-in-out_infinite]" />
            </div>
            <span className="text-[8px] md:text-[9px] font-mono tracking-[0.2em] uppercase text-white">Scroll</span>
          </motion.div>

        </div>

        {/* SPECIFICATION CARD 1 (Phase 01) - FULLY RESPONSIVE POSITIONING */}
        <motion.div 
          style={{ opacity: spec1Opacity, y: spec1Y }}
          className="absolute left-4 right-4 sm:left-auto sm:right-6 md:right-24 lg:right-32 top-1/2 -translate-y-1/2 z-40 w-[calc(100%-2rem)] sm:w-[380px] md:w-[420px] mx-auto sm:mx-0"
        >
          <div className="backdrop-blur-2xl backdrop-saturate-150 bg-white/90 sm:bg-white/80 p-6 md:p-10 rounded-3xl border border-white shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
            <div className="flex items-center gap-3 mb-3 md:mb-5">
              <span className="w-4 h-[1px] bg-[#86868B]"></span>
              <span className="text-[8px] md:text-[9px] font-mono text-[#86868B] tracking-[0.2em] uppercase">
                Phase 01 // Conception
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-[#1D1D1F] mb-3 md:mb-4 leading-tight">
              Uncompromising Structural Integrity.
            </h3>
            <p className="text-xs md:text-sm text-[#1D1D1F]/70 font-light leading-relaxed">
              We treat space as a tangible material. Every cantilever, every load-bearing wall, and every line of sight is engineered to its absolute purest form.
            </p>
          </div>
        </motion.div>

        {/* SPECIFICATION CARD 2 (Phase 02) - FULLY RESPONSIVE POSITIONING */}
        <motion.div 
          style={{ opacity: spec2Opacity, y: spec2Y }}
          className="absolute left-4 right-4 sm:left-6 md:left-24 lg:left-32 top-1/2 -translate-y-1/2 z-40 w-[calc(100%-2rem)] sm:w-[380px] md:w-[420px] mx-auto sm:mx-0"
        >
          <div className="backdrop-blur-2xl backdrop-saturate-150 bg-white/90 sm:bg-white/80 p-6 md:p-10 rounded-3xl border border-white shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
            <div className="flex items-center gap-3 mb-3 md:mb-5">
              <span className="w-4 h-[1px] bg-[#86868B]"></span>
              <span className="text-[8px] md:text-[9px] font-mono text-[#86868B] tracking-[0.2em] uppercase">
                Phase 02 // Materiality
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-[#1D1D1F] mb-3 md:mb-4 leading-tight">
              The Tactile Experience.
            </h3>
            <p className="text-xs md:text-sm text-[#1D1D1F]/70 font-light leading-relaxed">
              Moving away from sterile surfaces. We embrace board-formed concrete, low-iron glass, and natural travertine that patinas beautifully with time.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}