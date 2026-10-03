"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projectsDB } from "../../../data/projectsDB"; 

export default function InteriorProjectDetails() {
  const params = useParams();
  const projectId = params.id;
  
  const project = projectsDB.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7]">
        <h1 className="text-2xl font-mono uppercase tracking-widest text-[#1D1D1F]">404 // Project Not Found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#F5F5F7] text-[#1D1D1F] selection:bg-[#1D1D1F] selection:text-[#F5F5F7]">
      
      {/* 1. THE PURE HERO (100% Visual Focus, Zero Clutter) */}
      <div className="pt-24 md:pt-32 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[2000px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[60vh] md:h-[75vh] lg:h-[85vh] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#E8E8EA] shadow-sm relative group"
        >
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={project.heroImage} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* 2. THE BLENDED NARRATIVE (Title & Brief have their own dedicated weight) */}
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-20 lg:py-24 flex flex-col xl:flex-row gap-12 lg:gap-20">
        
        {/* Left Side: Title & Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="xl:w-2/3 flex flex-col justify-start"
        >
          <div className="flex items-center gap-3 mb-5 md:mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F]" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#86868B] uppercase">
              Interior Design &nbsp;//&nbsp; {project.year}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-medium tracking-tight leading-[0.95] uppercase text-[#1D1D1F] mb-8 md:mb-12">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-[1.4] tracking-tight text-[#1D1D1F]/80 max-w-4xl">
            {project.description}
          </p>
        </motion.div>

        {/* Right Side: Technical Specs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="xl:w-1/3 pt-4 xl:pt-24 xl:border-l border-[#1D1D1F]/10 xl:pl-16 grid grid-cols-2 gap-x-6 gap-y-10"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[9px] font-mono tracking-[0.2em] text-[#86868B] uppercase border-b border-[#1D1D1F]/10 pb-2">Location</span>
            <span className="text-xs md:text-sm font-medium text-[#1D1D1F] uppercase tracking-widest mt-1">{project.location || "Confidential"}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[9px] font-mono tracking-[0.2em] text-[#86868B] uppercase border-b border-[#1D1D1F]/10 pb-2">Scope</span>
            <span className="text-xs md:text-sm font-medium text-[#1D1D1F] uppercase tracking-widest mt-1">{project.specs}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[9px] font-mono tracking-[0.2em] text-[#86868B] uppercase border-b border-[#1D1D1F]/10 pb-2">Year</span>
            <span className="text-xs md:text-sm font-medium text-[#1D1D1F] uppercase tracking-widest mt-1">{project.year}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[9px] font-mono tracking-[0.2em] text-[#86868B] uppercase border-b border-[#1D1D1F]/10 pb-2">Area</span>
            <span className="text-xs md:text-sm font-medium text-[#1D1D1F] uppercase tracking-widest mt-1">{project.area || "N/A"}</span>
          </div>
        </motion.div>
      </div>

      {/* 3. PREMIUM GALLERY GRID (Perfectly rounded, consistent weight) */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 pb-24 md:pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {project.gallery.map((img, idx) => (
              <motion.div 
                whileHover="hover"
                initial="initial"
                key={idx} 
                className="w-full relative overflow-hidden bg-[#E8E8EA] rounded-[1.5rem] md:rounded-[2rem] aspect-[4/5] cursor-pointer group shadow-sm"
              >
                <motion.img 
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.05, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  src={img} 
                  alt={`${project.title} Detail ${idx + 1}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 pointer-events-none rounded-[1.5rem] md:rounded-[2rem]" />
                <motion.div variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }} className="absolute inset-0 bg-black/5 transition-colors duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* 4. ELEGANT RETURN BUTTON */}
      <div className="w-full pb-20 md:pb-32 flex justify-center">
        <Link href="/projects/interior-design" className="group flex flex-col items-center gap-4 outline-none">
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#86868B] uppercase group-hover:text-[#1D1D1F] transition-colors duration-300">
            Return to Archive
          </span>
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#1D1D1F]/20 flex items-center justify-center group-hover:bg-[#1D1D1F] transition-all duration-500 ease-out">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#1D1D1F] group-hover:text-[#F5F5F7] group-hover:-translate-y-1 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        </Link>
      </div>

    </main>
  );
}