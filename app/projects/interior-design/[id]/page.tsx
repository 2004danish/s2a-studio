"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { projectsDB } from "../../../data/projectsDB"; 

export default function InteriorProjectDetails() {
  const params = useParams();
  const projectId = params.id as string;
  
  const project = projectsDB.find(p => p.id === projectId);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => { 
      document.body.style.overflow = "auto"; 
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7]">
        <h1 className="text-2xl font-mono uppercase tracking-widest text-[#1D1D1F]">404 // Project Not Found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#F5F5F7] text-[#1D1D1F] selection:bg-[#1D1D1F] selection:text-[#F5F5F7]">
      
      {/* 1. THE PURE HERO */}
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

      {/* 2. THE BLENDED NARRATIVE */}
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-20 lg:py-24 flex flex-col xl:flex-row gap-12 lg:gap-20">
        
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

      {/* 3. PREMIUM UNCROPPED MASONRY GALLERY */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 pb-24 md:pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8"
          >
            {project.gallery
              .filter(img => img !== project.heroImage)
              .map((img, idx) => (
              <motion.div 
                whileHover="hover"
                initial="initial"
                key={idx} 
                className="w-full relative overflow-hidden bg-[#E8E8EA] rounded-[1.5rem] md:rounded-[2rem] cursor-zoom-in group shadow-sm gallery-item break-inside-avoid mb-6 md:mb-8 block"
                onClick={() => setSelectedImage(img)}
              >
                <motion.img 
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.03, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  src={img} 
                  alt={`${project.title} Detail ${idx + 1}`} 
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    const parent = target.closest('.gallery-item') as HTMLElement;
                    if (parent) {
                      parent.style.display = 'none';
                      parent.classList.remove('mb-6', 'md:mb-8'); 
                    }
                  }}
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

      {/* 5. AESTHETIC CINEMATIC LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 lg:p-20 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            {/* 🚀 Layer 1: The Glass Blur (Highly transparent but deeply blurred) */}
            <div className="absolute inset-0 bg-[#1D1D1F]/40 backdrop-blur-3xl" />
            
            {/* 🚀 Layer 2: The Cinematic Vignette (Focuses light on the center) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

            {/* 🚀 Layer 3: UX Typography Hint */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-8 left-1/2 -translate-x-1/2 text-white/50 text-[10px] font-mono tracking-[0.3em] uppercase hidden md:block pointer-events-none z-10"
            >
              Click anywhere to close
            </motion.div>

            {/* 🚀 Layer 4: Elegant Frosted Close Button */}
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-12 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/15 text-white/80 hover:text-white transition-all duration-300 z-50 outline-none hover:scale-105 active:scale-95 shadow-xl"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              aria-label="Close Lightbox (Press Escape)"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* 🚀 Layer 5: The Floating Image (With cinematic shadow and glass ring) */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              src={selectedImage}
              alt="Expanded architectural view"
              className="relative z-10 max-w-full max-h-full object-contain rounded-[1rem] shadow-[0_20px_80px_rgba(0,0,0,0.6)] ring-1 ring-white/10 cursor-default"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}