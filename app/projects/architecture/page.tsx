"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projectsDB } from "../../data/projectsDB";

export default function ArchitectureArchive() {
  const architectureProjects = projectsDB.filter(
    (p) => p.typology === "Architecture"
  );

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-24 md:pt-32 pb-24 selection:bg-[#1D1D1F] selection:text-[#F5F5F7]">
      
      {/* HEADER */}
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
              The Archive // {architectureProjects.length} Works
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-medium tracking-tight leading-[0.95] uppercase text-[#1D1D1F]"
            >
              Architecture
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg font-light text-[#555555] max-w-md leading-relaxed"
            >
              Contextual structures engineered with raw materiality, climate responsiveness, and timeless geometric precision.
            </motion.p>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-[2000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {architectureProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={`/projects/architecture/${project.id}`}
                className="group flex flex-col gap-4 outline-none"
              >
                <div className="w-full aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#E8E8EA] relative shadow-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 rounded-[1.5rem] md:rounded-[2rem] pointer-events-none" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#F5F5F7]/90 backdrop-blur-md flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md">
                    <svg
                      className="w-4 h-4 text-[#1D1D1F] -rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col gap-1 px-1">
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.18em] text-[#86868B] uppercase">
                    <span>{project.specs}</span>
                    <span>{project.location || project.year}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-medium tracking-tight text-[#1D1D1F] uppercase group-hover:text-[#555555] transition-colors duration-300">
                    {project.title}
                  </h2>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

    </main>
  );
}