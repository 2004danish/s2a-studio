"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  // Using strictly the color images. CSS will handle the flawless B&W conversion.
  const team = [
    {
      id: "pr-shinde",
      name: "Ar. P.R. Shinde (GD.B.ARCH)",
      role: "Director & Principal Architect",
      image: "/team/pr-shinde2.jpg",
    },
    {
      id: "shekhar-shinde",
      name: "Ar. Shekhar Shinde (B. ARCH)",
      role: "Director & Principal Architect",
      image: "/team/shekhar-shinde2.jpg",
    },
    {
      id: "raj-shitole",
      name: "Ar. Raj Shitole (B. ARCH)",
      role: "Partner Architect in Pune Office",
      image: "/team/raj-shitole2.jpg",
    },
    {
      id: "aniket-meshram",
      name: "Ar. Aniket Meshram (B. ARCH)",
      role: "Partner Architect in Nagpur Office",
      image: "/team/aniket-meshram2.jpg",
    },
    {
      id: "shruti-shinde",
      name: "Shruti Shinde (ID)",
      role: "Interior Designer",
      image: "/team/shruti-shinde2.jpg",
    },
    {
      id: "jidnyasa-auti",
      name: "Ar. Jidnyasa Auti (B. ARCH)",
      role: "Senior Architect & Studio Manager (Pune)",
      image: "/team/jidnyasa-auti2.jpg",
    },
    {
      id: "bhairavi-butle",
      name: "Ar. Bhairavi Butle (B. ARCH)",
      role: "Architect, Studio Co-Ordinator & PM",
      image: "/team/bhairavi-butle2.jpg",
    },
    {
      id: "piyush-sharma",
      name: "Ar. Piyush Sharma (B. ARCH)",
      role: "Senior Architect & Project Manager",
      image: "/team/piyush-sharma2.jpg",
    }
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-32 md:pt-40 pb-24 md:pb-40 selection:bg-[#1D1D1F] selection:text-white overflow-hidden">
      
      {/* 1. QUIET, COMPACT INTRO */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 mb-20 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 max-w-3xl border-b border-[#1D1D1F]/10 pb-12"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#1D1D1F]/20" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#86868B]">
              Est. 1987
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#1D1D1F] leading-tight">
            Comfort Designers Reborn.
          </h1>
          <p className="text-sm text-[#86868B] font-light leading-relaxed">
            We are a collective of creatives shaping the built environment for over 39 years. Guided by nature, we seek to reunite humans with their true enclosures through unique, efficient, and beautiful architectural solutions.
          </p>
        </motion.div>
      </div>

      {/* 2. THE TEAM */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {team.map((member, index) => {
            const isStaggered = index % 2 !== 0;

            return (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col group cursor-pointer ${isStaggered ? 'lg:mt-12' : ''}`}
              >
                {/* The Interactive Portrait Container */}
                <div className="w-full aspect-[3/4] bg-[#E8E8EA] rounded-2xl overflow-hidden relative mb-5 shadow-sm group-hover:shadow-xl transition-shadow duration-700">
                  
                  {/* Single Image with CSS Filter Transition */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 pointer-events-none rounded-2xl z-10" />
                  
                  {/* Floating Socials: X and Instagram */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
                    
                    {/* X (Twitter) Icon */}
                    <a href="#" className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white transition-colors shadow-lg">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>

                    {/* Instagram Icon */}
                    <a href="#" className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white transition-colors shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>

                  </div>
                </div>

                {/* Typography */}
                <div className="flex flex-col gap-1 px-1">
                  <h3 className="text-sm font-medium tracking-tight text-[#1D1D1F]">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-mono tracking-widest text-[#86868B] uppercase leading-relaxed">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}