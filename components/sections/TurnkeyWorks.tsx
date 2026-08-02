"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const turnkeyProjects = [
  {
    id: "01",
    title: "BUNGALOW AT SANGLI",
    image: "/turnkeyworks/bungalow-sangali.jpg",
    description: "This design embodies \"Tropical Modernism,\" utilizing deep overhanging roofs and vertical slatted screens to combat harsh sunlight while maintaining natural ventilation. The concept emphasizes \"floating planes\" and a harmonious blend of raw concrete with warm timber textures, seamlessly integrating lush landscaping to blur the boundaries between indoor and outdoor spaces.",
    specs: "SANGLI, SATARA // RESIDENTIAL + INTERIORS + LANDSCAPE",
  },
  {
    id: "02",
    title: "ENCORE BOUTIQUE RESORT",
    image: "/turnkeyworks/encore-boutique-resort.jpg",
    description: "Set within the Sahyadri mountains overlooking Mulshi Lake, this contemporary tropical retreat is inspired by Balinese architecture. Built forms sensitively follow the natural contours, integrating streams and existing flora to create an immersive experience that preserves the site's ecological character.",
    specs: "HOSPITALITY - RESORT // MULSHI LAKE, PUNE",
  },
  {
    id: "03",
    title: "GOLF RESORT",
    image: "/turnkeyworks/golf-resort.jpg",
    description: "Nagarjun Sagar Dam in Hyderabad, was the best opportunity for us. We implement our design philosophy that \"Nature inspired geometric forms in architecture, track down to reunite humans with their enclosings.\" In early Buddhism, the four elements are a basis for understanding suffering and for liberating oneself from suffering.",
    specs: "HOSPITALITY // HYDERABAD // NATURE INSPIRED GEOMETRY",
  }
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
      delayChildren: 0.2,   
    }
  }
};

const textReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function TurnkeyWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const totalSlides = turnkeyProjects.length + 1;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(totalSlides - 1) * 100}vw`]);
  const introParallax = useTransform(scrollYProgress, [0, 0.2], ["0%", "-20%"]);

  return (
    <motion.section 
      id="turnkey" 
      ref={sectionRef} 
      style={{ height: `${totalSlides * 100}vh` }} 
      className="relative w-full bg-[#F5F5F7] text-[#1D1D1F] font-sans"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center pt-24 lg:pt-32 pb-12">
        <motion.div 
          style={{ x: xTransform, width: `${totalSlides * 100}vw` }}
          className="flex h-full items-center"
        >
          {/* SLIDE 1: INTRO ROOM */}
          <div className="relative h-full w-screen flex flex-col items-center justify-center overflow-hidden flex-shrink-0 px-6">
            <motion.div 
              style={{ x: introParallax }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]"
            >
              <h2 className="text-[25vw] md:text-[30vw] font-bold leading-none tracking-tighter whitespace-nowrap text-[#1D1D1F]">
                TURNKEY
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 text-center flex flex-col items-center gap-6"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#86868B] font-bold">
                End-to-End Execution
              </span>
              <h2 className="text-6xl md:text-8xl lg:text-[10rem] tracking-tighter leading-[0.85] uppercase flex flex-col">
                <span className="font-light text-[#1D1D1F]">Turnkey</span>
                <span className="font-medium text-[#86868B]">Works.</span>
              </h2>
            </motion.div>
          </div>

          {/* SLIDES 2+: THE ELEVATED GALLERY CARDS */}
          {turnkeyProjects.map((project) => (
            <div key={project.id} className="relative h-full w-screen flex items-center justify-center overflow-hidden flex-shrink-0 px-4 md:px-12 lg:px-24">
              <div className="w-full max-w-[1600px] h-[80vh] max-h-[900px] bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.08)] border border-[#1D1D1F]/5 flex flex-col lg:flex-row items-center p-4 md:p-8 lg:p-12 gap-8 lg:gap-16">
                
                {/* LEFT: IMAGE FRAME */}
                <motion.div 
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-[55%] h-[40vh] lg:h-full relative rounded-xl md:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] flex-shrink-0"
                >
                  <motion.img 
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl md:rounded-[2rem] pointer-events-none" />
                </motion.div>

               {/* RIGHT: EDITORIAL TYPOGRAPHY */}
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.4 }}
                  className="w-full lg:w-[45%] h-[50%] lg:h-auto flex flex-col justify-start lg:justify-center py-2 lg:py-4 pr-0 lg:pr-8 overflow-y-auto"
                >
                  <motion.div variants={textReveal} className="flex items-center gap-4 mb-4 lg:mb-6 mt-4 lg:mt-0">
                    <span className="text-[10px] lg:text-xs font-mono text-[#86868B]">PROJECT</span>
                    <span className="w-8 h-[1px] bg-[#1D1D1F]/20"></span>
                    <span className="text-[10px] lg:text-xs font-mono text-[#1D1D1F] font-bold">{project.id}</span>
                  </motion.div>

                  <motion.h3 variants={textReveal} className="text-3xl md:text-4xl lg:text-6xl font-medium tracking-tight text-[#1D1D1F] leading-[0.95] uppercase mb-4 lg:mb-8">
                    {project.title}
                  </motion.h3>

                  <motion.div variants={textReveal} className="w-full h-[1px] bg-[#1D1D1F]/10 mb-8" />

                  <div className="flex flex-col gap-6">
                    <motion.div variants={textReveal} className="flex flex-col gap-2">
                      <span className="text-[9px] font-mono text-[#86868B] tracking-[0.2em] uppercase">
                        Project Brief
                      </span>
                      <p className="text-xs md:text-sm text-[#1D1D1F]/70 font-light leading-relaxed">
                        {project.description}
                      </p>
                    </motion.div>

                    <motion.div variants={textReveal} className="flex flex-col gap-2 mt-4">
                      <span className="text-[9px] font-mono text-[#86868B] tracking-[0.2em] uppercase">
                        Technical Specs
                      </span>
                      <p className="text-[10px] text-[#1D1D1F] leading-relaxed uppercase font-semibold tracking-widest">
                        {project.specs}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div variants={textReveal}>
                    <button className="mt-12 w-fit px-8 py-4 rounded-full border border-[#1D1D1F]/20 hover:bg-[#1D1D1F] hover:text-white text-[10px] font-medium uppercase tracking-[0.2em] text-[#1D1D1F] transition-all duration-300 shadow-sm hover:shadow-xl">
                      View Turnkey Study
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