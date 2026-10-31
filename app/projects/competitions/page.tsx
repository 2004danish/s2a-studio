"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function CompetitionsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox on escape key
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

  const competitions = [
    {
      id: "beyond-the-bath",
      title: "BEYOND THE BATH Design Challenge & Awards | Season Two",
      award: "Winner of Honourable Mention",
      description: "In association with Hindware Italian Collection. The washroom is conceived as an immersive, open-air space that merges with the natural landscape, where rock formations define enclosure and privacy. A muted, desert-inspired palette with Hindware tiles ensures material continuity between the built and natural environment.",
      description2: "Sustainability is integrated through water-efficient fixtures like sensor-based taps and auto-mode WCs. Open-to-sky elements such as rain showers and freestanding bathtubs enhance the sensory connection to nature. Subtle LED lighting embedded within rock crevices creates a warm, atmospheric glow, evoking the calm of a desert night.",
      images: [
        "/competitions/beyond-the-bath/1.jpg",
        "/competitions/beyond-the-bath/2.jpg",
        "/competitions/beyond-the-bath/3.jpg",
        "/competitions/beyond-the-bath/4.jpg"
      ]
    },
    {
      id: "guggenheim",
      title: "Solomon R. Guggenheim Museum Redesign",
      award: "Winner of Honourable Mention",
      description: "The aim of the competition was to re-create the iconic museum in NYC by the legendary architect Frank Lloyd Wright at the exact same site but with an entirely new perspective by the participants.",
      description2: "The competition offered a chance to re-design the museum created by the master himself, with a similar intent to break from the prevalent conventionality in designing a museum and gallery space and create an innovative and extraordinary built form. We have won the honorable mention in Guggenheim Museum, New York Redesign International Competition 2018.",
      images: [
        "/competitions/guggenheim/1.jpg",
        "/competitions/guggenheim/2.jpg",
        "/competitions/guggenheim/3.jpg" // Removed the 4th image here
      ]
    },
    {
      id: "jurassic-camp",
      title: "Archasm Jurassic Camp House",
      award: "Winner of Honourable Mention",
      description: "The aim of the competition was to design a free-standing resting shelter / camping structure in the heart of the wave that would give hikers/ photographers new ways to spend more time, experience nature and rest after long hiking expenditure.",
      description2: "The proposal must be a poetic response for a permanent/ semi-permanent structure in a very sensitive environment that would become the 'eyes and ears' for visitors who want to connect with the natural ecosystem and reflect upon nature in its true spirit.",
      images: [
        "/competitions/jurassic-camp/1.jpg",
        "/competitions/jurassic-camp/2.jpg",
        "/competitions/jurassic-camp/3.jpg",
        "/competitions/jurassic-camp/4.jpg"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-32 md:pt-40 pb-24 md:pb-40 selection:bg-[#1D1D1F] selection:text-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* 1. EDITORIAL HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 md:mb-32 border-b border-[#1D1D1F]/10 pb-12"
        >
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-[#1D1D1F]/20" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#86868B]">
                Global Submissions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-[#1D1D1F] leading-[1.05] mb-6">
              Competitions & <br className="hidden lg:block" />
              Speculations.
            </h1>
            <p className="text-base md:text-lg text-[#86868B] font-light max-w-2xl leading-relaxed">
              A showcase of our theoretical explorations, international design entries, and award-winning conceptual architecture.
            </p>
          </div>
        </motion.div>

        {/* 2. THE EXHIBITION FEED */}
        <div className="flex flex-col gap-32 md:gap-48">
          {competitions.map((comp, index) => {
            const detailImages = comp.images.slice(1);
            
            // Dynamic Grid Logic based on how many extra images exist
            const colSpanClass = detailImages.length === 1 ? 'md:col-span-12' : detailImages.length === 2 ? 'md:col-span-6' : 'md:col-span-4';
            const aspectClass = detailImages.length === 1 ? 'aspect-video md:aspect-[21/9]' : detailImages.length === 2 ? 'aspect-[4/3]' : 'aspect-square';

            return (
              <motion.article 
                key={comp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-12 lg:gap-16"
              >
                
                {/* Project Narrative (Top) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono tracking-[0.2em] text-[#86868B]">
                        0{index + 1}
                      </span>
                      <span className="w-8 h-[1px] bg-[#1D1D1F]/20" />
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-[#1D1D1F] leading-tight">
                      {comp.title}
                    </h2>
                    <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-[#1D1D1F] rounded-full w-fit">
                      <svg className="w-3.5 h-3.5 text-[#F5F5F7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#F5F5F7]">
                        {comp.award}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-8 flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm md:text-base text-[#86868B] font-light leading-relaxed">
                    <p className="sm:w-1/2">{comp.description}</p>
                    <p className="sm:w-1/2">{comp.description2}</p>
                  </div>
                </div>

                {/* The Gallery Grid (Bottom) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                  
                  {/* Image 1 (Hero) */}
                  <div 
                    className="md:col-span-12 w-full aspect-video md:aspect-[21/9] bg-[#E8E8EA] rounded-2xl md:rounded-[2rem] overflow-hidden relative cursor-zoom-in group"
                    onClick={() => setSelectedImage(comp.images[0])}
                  >
                    <motion.img 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      src={comp.images[0]} 
                      alt={`${comp.title} 1`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 pointer-events-none rounded-2xl md:rounded-[2rem]" />
                  </div>

                  {/* Dynamic Details Row (Images 2, 3, etc.) */}
                  {detailImages.map((img, i) => (
                    <div 
                      key={i}
                      className={`${colSpanClass} w-full ${aspectClass} bg-[#E8E8EA] rounded-2xl overflow-hidden relative cursor-zoom-in group`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        src={img} 
                        alt={`${comp.title} detail ${i + 1}`} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 pointer-events-none rounded-2xl" />
                    </div>
                  ))}
                </div>

              </motion.article>
            );
          })}
        </div>

      </div>

      {/* 3. CINEMATIC LIGHTBOX */}
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
            <div className="absolute inset-0 bg-[#1D1D1F]/90 backdrop-blur-xl" />
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-8 left-1/2 -translate-x-1/2 text-white/50 text-[10px] font-mono tracking-[0.3em] uppercase hidden md:block pointer-events-none z-10"
            >
              Click anywhere to close
            </motion.div>

            <button 
              className="absolute top-6 right-6 md:top-10 md:right-12 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-300 z-50 outline-none hover:scale-105 active:scale-95 shadow-xl"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              src={selectedImage}
              alt="Expanded competition view"
              className="relative z-10 max-w-full max-h-full object-contain rounded-[1rem] shadow-[0_20px_80px_rgba(0,0,0,0.8)] ring-1 ring-white/10 cursor-default"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}