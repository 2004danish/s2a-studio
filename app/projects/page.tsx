"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsIndexPage() {
  const portfolios = [
    {
      id: "architecture",
      title: "Architecture",
      number: "01",
      description: "Residential, commercial, and institutional built forms.",
      image: "/projects/architecture.jpg",
      link: "/projects/architecture"
    },
    {
      id: "interior",
      title: "Interior Design",
      number: "02",
      description: "Bespoke spaces, turnkey execution, and fine detailing.",
      image: "/projects/interior.jpg",
      link: "/projects/interior"
    },
    {
      id: "competitions",
      title: "Competitions",
      number: "03",
      description: "Global submissions and theoretical design speculations.",
      image: "/projects/competition.jpg",
      link: "/projects/competitions"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-32 md:pt-40 pb-24 md:pb-40 selection:bg-[#1D1D1F] selection:text-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* 1. QUIET EDITORIAL HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-24 border-b border-[#1D1D1F]/10 pb-12"
        >
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-[#1D1D1F]/20" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#86868B]">
                Selected Portfolios
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-[#1D1D1F] leading-[1.05] mb-6">
              Explore our <br className="hidden lg:block" />
              curated works.
            </h1>
            <p className="text-base md:text-lg text-[#86868B] font-light max-w-xl leading-relaxed">
              A comprehensive archive of our built environments, interior spaces, and conceptual architectural entries.
            </p>
          </div>
        </motion.div>

        {/* 2. THREE-PILLAR GATEWAY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {portfolios.map((item, index) => (
            <Link href={item.link} key={item.id} className="group outline-none block">
              <motion.article 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                {/* Tall Editorial Image Card */}
                <div className="w-full aspect-[4/5] lg:aspect-[3/4] bg-[#E8E8EA] rounded-[2rem] overflow-hidden relative shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    src={item.image} 
                    alt={`${item.title} Portfolio`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 pointer-events-none rounded-[2rem]" />
                  
                  {/* Floating Action Button on Hover */}
                  <div className="absolute top-6 right-6 lg:top-8 lg:right-8 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
                    <svg className="w-5 h-5 text-[#1D1D1F] -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Typography & Meta */}
                <div className="flex flex-col gap-3 px-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#86868B]">
                      {item.number}
                    </span>
                    <span className="w-4 h-[1px] bg-[#1D1D1F]/20 group-hover:w-8 group-hover:bg-[#1D1D1F] transition-all duration-500" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-[#1D1D1F] group-hover:text-[#86868B] transition-colors duration-300">
                    {item.title}
                  </h2>
                  <p className="text-sm text-[#86868B] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}