"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ThreeDVizTeaser() {
  const sectionRef = useRef<HTMLElement>(null);
  const sketchRef = useRef<HTMLDivElement>(null);
  const renderRef = useRef<HTMLDivElement>(null);
  const [renderProgress, setRenderProgress] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const timelineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !sketchRef.current || !renderRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollDistance = rect.height - window.innerHeight;
      let progress = Math.max(0, Math.min(1, -rect.top / totalScrollDistance));

      let sketchOpacity = 1;
      let renderOpacity = 0;

      if (progress > 0.20 && progress < 0.80) {
        const fadeProgress = (progress - 0.20) / 0.60;
        sketchOpacity = 1 - fadeProgress;
        renderOpacity = fadeProgress;
      } else if (progress >= 0.80) {
        sketchOpacity = 0;
        renderOpacity = 1;
      }

      setRenderProgress(Math.round(renderOpacity * 100));
      sketchRef.current.style.opacity = sketchOpacity.toString();
      renderRef.current.style.opacity = renderOpacity.toString();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#F5F5F7] text-[#1D1D1F] font-sans">
      <div className="max-w-[1800px] w-full mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
        
        {/* LEFT COLUMN: THE STICKY CANVAS */}
        <div className="lg:col-span-7 relative min-w-0">
          {/* THE MOBILE SPLIT: h-[50vh] on phones, h-screen on desktop */}
          <div className="sticky top-0 h-[50vh] lg:h-screen flex flex-col justify-center pt-24 lg:pt-20 pb-4 lg:pb-10">
            <motion.div 
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full max-h-[900px] bg-white rounded-2xl md:rounded-[2rem] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.07)] border border-[#1D1D1F]/5 p-3 md:p-8 flex flex-col"
            >
              <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-[#1D1D1F]/10 pointer-events-none hidden md:block" />
              <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-[#1D1D1F]/10 pointer-events-none hidden md:block" />
              <div className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-[#1D1D1F]/10 pointer-events-none hidden md:block" />
              <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-[#1D1D1F]/10 pointer-events-none hidden md:block" />
              
              <span className="absolute top-8 left-12 text-[7px] font-mono tracking-[0.3em] text-[#1D1D1F]/30 uppercase pointer-events-none hidden md:block">
                Viewport // Active
              </span>

              <div className="relative w-full h-full bg-[#FAFAFA] rounded-xl overflow-hidden ring-1 ring-inset ring-[#1D1D1F]/5 md:mt-4">
                <div ref={sketchRef} className="absolute inset-0 w-full h-full z-10 transition-opacity duration-75 bg-white" style={{ opacity: 1 }}>
                  <img src="/sketch.png" alt="S2A Sketch" className="w-full h-full object-cover invert grayscale contrast-125 mix-blend-multiply opacity-80" />
                </div>
                <div ref={renderRef} className="absolute inset-0 w-full h-full z-20 transition-opacity duration-75 bg-white" style={{ opacity: 0 }}>
                  <img src="/render.png" alt="S2A Render" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: SCROLLING TEXT */}
        <div className="lg:col-span-5 flex flex-col relative z-20 min-w-0">
          
          {/* THE TIMELINE (Hidden on mobile for cleaner UX) */}
          <div className="absolute left-0 md:left-6 top-[22%] bottom-[22%] w-[1px] bg-[#1D1D1F]/10 hidden lg:block">
            <motion.div className="w-full bg-[#1D1D1F] origin-top" style={{ height: timelineHeight }} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white border-2 border-[#1D1D1F] rounded-full z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white border-2 border-[#1D1D1F] rounded-full z-10" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 bg-white border-2 border-[#1D1D1F] rounded-full z-10" />
            <motion.div className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#1D1D1F] rounded-full shadow-lg z-20 ring-4 ring-[#F5F5F7]" style={{ top: timelineHeight, y: "-50%" }} />
          </div>

          {/* TEXT BLOCK 1 - MATCHES MOBILE SPLIT HEIGHT */}
          <div className="h-[50vh] lg:h-screen flex flex-col justify-center pt-8 lg:pt-20 pb-10 pl-0 lg:pl-16">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <span className="w-6 h-[1px] bg-[#1D1D1F]/20"></span>
              <span className="text-[9px] md:text-[10px] font-mono tracking-[0.2em] text-[#86868B] uppercase">S2A Process // 01</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] tracking-tighter leading-[0.95] uppercase flex flex-col gap-1 max-w-xl">
              <span className="block font-light text-[#1D1D1F]">Visualizing</span>
              <span className="block font-medium text-[#86868B]">Tomorrow's</span>
              <span className="block font-medium text-[#1D1D1F]">Architecture.</span>
            </h2>
          </div>

          {/* TEXT BLOCK 2 */}
          <div className="h-[50vh] lg:h-screen flex flex-col justify-center pt-8 lg:pt-20 pb-10 pl-0 lg:pl-16">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="w-2 h-2 rounded-full bg-[#1D1D1F] animate-pulse" />
              <div className="flex gap-2 text-[9px] md:text-[10px] font-mono tracking-widest uppercase">
                <span className="text-[#86868B]">Engine Active //</span>
                <span className="font-bold text-[#1D1D1F] w-8">{renderProgress}%</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-8">
              <span className="text-[8px] md:text-[9px] font-mono tracking-[0.3em] text-[#86868B] uppercase">02. Material Simulation</span>
              <p className="text-xs md:text-sm lg:text-base text-[#1D1D1F]/70 font-light leading-relaxed max-w-md border-l border-[#1D1D1F]/10 pl-4 md:pl-6">
                We simulate real-world sun paths, board-formed concrete textures, and low-iron glass optics before groundbreaking.
              </p>
            </div>
            <button className="w-fit px-6 py-3 md:px-8 md:py-4 rounded-full border border-[#1D1D1F]/20 hover:bg-[#1D1D1F] hover:text-[#F5F5F7] text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-[#1D1D1F] transition-all">
              Explore 3D Services
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}