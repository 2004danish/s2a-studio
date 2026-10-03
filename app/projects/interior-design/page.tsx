"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// Strict relative path to fix the import error
import { projectsDB } from "../../data/projectsDB"; 

export default function InteriorArchive() {
  // 1. Fetch only the interior projects from the master database
  const interiorProjects = projectsDB.filter(p => p.typology === "Interior Design");

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-24 md:pt-32 pb-24 selection:bg-[#1D1D1F] selection:text-white">
      
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
              The Archive
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-medium tracking-tighter leading-[0.85] uppercase"
          >
            Interior Design.
          </motion.h1>
        </div>
      </div>

      {/* CONTINUOUS BENTO GRID */}
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
        >
          {interiorProjects.map((project, index) => {
            // Every 5th item, or manually featured items, span 2 columns
            const isHero = project.isFeatured === true || (project.isFeatured === undefined && index % 5 === 0);

            return (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                key={project.id} 
                className={`flex flex-col ${isHero ? 'md:col-span-2' : 'col-span-1'}`}
              >
                <motion.div whileHover="hover" initial="initial" className="flex flex-col w-full h-full cursor-pointer group">
                  {/* Dynamic Link to the subpage */}
                  <Link href={`/projects/interior-design/${project.id}`} className="flex flex-col h-full w-full outline-none">
                    
                    <div className={`w-full relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#E8E8EA] mb-4 ${isHero ? 'aspect-[4/3] md:aspect-[21/9]' : 'aspect-[4/5] md:aspect-[4/3]'}`}>
                      <motion.img 
                        variants={{
                          initial: { scale: 1 },
                          hover: { scale: 1.05, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        src={project.image} 
                        alt={project.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 pointer-events-none rounded-[1.5rem] md:rounded-[2rem]" />
                      <motion.div variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }} className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent pointer-events-none" />
                    </div>

                    <motion.div variants={{ initial: { x: 0 }, hover: { x: 4 } }} className="flex flex-col md:flex-row md:justify-between md:items-start pt-1 md:pt-2 px-1 gap-1">
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-[#1D1D1F] leading-tight">
                        {project.title}
                      </h2>
                      <span className="text-[11px] md:text-xs font-light text-[#86868B] md:text-right mt-0.5 md:mt-1">
                        {project.typology}
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </main>
  );
}