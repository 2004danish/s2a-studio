"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Architecture",
    category: "Master Planning",
    desc: "Uncompromising structural integrity engineered for the natural environment. Every cantilever and load-bearing wall is reduced to its purest form.",
    image: "/turnkeyworks/bungalow-sangali.jpg", 
  },
  {
    id: "02",
    title: "Interior Design",
    category: "Space & Materiality",
    desc: "Moving away from sterile surfaces. We embrace board-formed concrete, warm timber, and natural travertine that patinas beautifully with time.",
    image: "/hero images/bungalow-kekarav.jpg",
  },
  {
    id: "03",
    title: "Turnkey Solutions",
    category: "End-to-End Execution",
    desc: "Total absolute control from concept to final handover. We manage the contractors, the materials, and the execution to protect the vision.",
    image: "/turnkeyworks/golf-resort.jpg",
  },
  {
    id: "04",
    title: "3D Visualization",
    category: "Digital Simulation",
    desc: "Hyper-realistic material, light, and shadow simulation. We visualize tomorrow's architecture with absolute mathematical precision.",
    image: "/turnkeyworks/encore-boutique-resort.jpg",
  }
];

export default function StudioServicesTeaser() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  // FIXED TYPESCRIPT ERROR: Added 'as const' for tuple typing compatibility with Framer Motion
  const transition = { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const };

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col pt-20 md:pt-24 pb-12 overflow-hidden">
      
      {/* HEADER */}
      <div className="px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-6 z-20 mb-8 md:mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] tracking-tighter leading-[0.9] md:leading-[0.85] font-medium text-[#1D1D1F] uppercase">
          Studio & <br /> Services.
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#1D1D1F]/70 font-light leading-relaxed max-w-sm border-l border-[#1D1D1F]/20 pl-4 md:pl-6">
          S2A Studio is a multi-disciplinary practice bringing an uncompromising engineering mindset to avant-garde design.
        </p>
      </div>

      {/* THE MONOLITH SPREAD: Flex-col on mobile, flex-row on desktop */}
      <div className="flex-1 w-full flex flex-col md:flex-row gap-3 md:gap-4 px-4 md:px-6 h-full min-h-[60vh] md:min-h-[50vh]">
        {services.map((service, index) => {
          const isActive = hoveredIndex === index;

          return (
            <motion.div
              layout
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onClick={() => setHoveredIndex(index)} // Added click support for touch devices
              animate={{
                flex: isActive ? 4 : 1, // Expands height on mobile, width on desktop
              }}
              transition={transition}
              className="relative min-h-[80px] md:min-h-full rounded-2xl md:rounded-[2.5rem] overflow-hidden cursor-pointer group bg-black shadow-2xl"
            >
              
              {/* BACKGROUND IMAGE */}
              <motion.img
                src={service.image}
                alt={service.title}
                animate={{
                  scale: isActive ? 1.05 : 1.2,
                  opacity: isActive ? 0.9 : 0.3,
                  filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />

              {/* INACTIVE STATE */}
              <motion.div 
                animate={{ opacity: isActive ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex md:flex-col items-center justify-between md:justify-end px-6 py-4 md:pb-16 pointer-events-none"
              >
                <span className="text-white/70 md:text-white/50 font-mono tracking-widest text-[10px] md:transform md:-rotate-90 origin-bottom md:mb-24 whitespace-nowrap uppercase">
                  {service.title}
                </span>
                <span className="text-white font-mono text-xs md:text-sm">{service.id}</span>
              </motion.div>

              {/* ACTIVE STATE */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16"
                  >
                    <div className="flex flex-col gap-3 md:gap-4 max-w-2xl">
                      <div className="flex items-center gap-3 md:gap-4">
                        <span className="text-[9px] md:text-xs font-mono text-white/70 tracking-[0.3em] uppercase">
                          {service.id} // {service.category}
                        </span>
                        <div className="w-8 md:w-12 h-[1px] bg-white/30" />
                      </div>
                      
                      <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-medium tracking-tight uppercase leading-[0.95] md:leading-[0.9]">
                        {service.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 font-light leading-relaxed mt-1 md:mt-2 lg:max-w-xl">
                        {service.desc}
                      </p>

                      <Link href="/studio" className="mt-4 md:mt-6 w-fit">
                        <button className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-[#1D1D1F] hover:bg-transparent hover:text-white border border-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300">
                          Explore Service
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}