"use client";

import { motion } from "framer-motion";

export default function VisualizationPage() {
  // 1. Video Data
  const videos = [
    { title: "Solitude Floating Resort", id: "KGHXCpm7dFE" },
    { title: "Mr. Pawar Farmhouse", id: "U_ZnYp2sbrA" },
    { title: "Gold Gym Walkthrough", id: "aQz4ghIYztQ" },
    { title: "AAA Housing Walkthrough", id: "wgzBGbuDpqk" },
    { title: "Infosys Phase 2 Campus", id: "gsKWdvSKPwM" },
    { title: "D.Y. Patil Medical College", id: "XEnDt6oKUAw" }
  ];

  // 2. Image Gallery Data
  const galleries = [
    { title: "Infosys Campus", folder: "infosys", count: 8 },
    { title: "Ms. Komal Mittal Auditorium", folder: "komal", count: 4 },
    { title: "Aishwarya Bhandari Manufacturing Unit", folder: "aishwarya", count: 4 },
    { title: "Amber Saffron Residential", folder: "amber", count: 2 },
    { title: "AAA Housing Project", folder: "aaa", count: 1 },
    { title: "Mr. Ranjeet Deshmukh", folder: "ranjeet", count: 1 }
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-32 md:pt-40 pb-24 md:pb-40 selection:bg-[#1D1D1F] selection:text-white">
      
      {/* CSS to hide the ugly native scrollbars in our carousels */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

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
                S2A Visualizer
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-[#1D1D1F] leading-[1.05] mb-6">
              Cinematic reality. <br className="hidden lg:block" />
              Before it's built.
            </h1>
            <p className="text-base md:text-lg text-[#86868B] font-light max-w-2xl leading-relaxed">
              Explore our high-fidelity 3D architectural renderings, multimedia presentations, and immersive walkthroughs.
            </p>
          </div>
        </motion.div>


        {/* 2. WALKTHROUGHS (VIDEOS) */}
        <div className="mb-32 md:mb-48">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-[#86868B]">
              Video Walkthroughs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {videos.map((video, index) => (
              <motion.div 
                key={video.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4 group"
              >
                <div className="w-full aspect-video bg-[#E8E8EA] rounded-[1.5rem] overflow-hidden relative shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`} 
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 pointer-events-none rounded-[1.5rem]" />
                </div>
                <div className="flex items-center gap-4 px-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#86868B]">0{index + 1}</span>
                  <h3 className="text-sm md:text-base font-medium tracking-tight text-[#1D1D1F]">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* 3. VISUALIZATION GALLERIES (HORIZONTAL SCROLL) */}
        <div>
          <div className="flex items-center justify-between mb-12 border-b border-[#1D1D1F]/10 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-[#86868B]">
              Rendered Stills
            </h2>
            <span className="text-[10px] font-mono tracking-[0.1em] uppercase text-[#1D1D1F]">
              Swipe to explore →
            </span>
          </div>

          <div className="flex flex-col gap-24 lg:gap-32">
            {galleries.map((gallery, index) => (
              <motion.div 
                key={gallery.folder}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                {/* Gallery Title */}
                <div className="flex items-center justify-between px-2">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#1D1D1F]">
                    {gallery.title}
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest text-[#86868B] uppercase bg-[#1D1D1F]/5 px-3 py-1 rounded-full">
                    {gallery.count} {gallery.count === 1 ? 'Render' : 'Renders'}
                  </span>
                </div>

                {/* The Horizontal Scroll Track */}
                <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24">
                  {Array.from({ length: gallery.count }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`snap-center shrink-0 ${
                        gallery.count === 1 
                          ? 'w-full md:w-[80%]' 
                          : 'w-[85%] md:w-[60%] lg:w-[45%]'
                      } aspect-[4/3] md:aspect-[16/9] bg-[#E8E8EA] rounded-2xl md:rounded-[2rem] overflow-hidden relative cursor-grab active:cursor-grabbing group`}
                    >
                      <motion.img 
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        src={`/visualization/${gallery.folder}/${i + 1}.jpg`} 
                        alt={`${gallery.title} Render ${i + 1}`} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 pointer-events-none rounded-2xl md:rounded-[2rem]" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}