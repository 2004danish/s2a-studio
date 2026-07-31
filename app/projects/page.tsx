"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// YOUR EXACT PROJECTS ARRAY
const projects = [
  { id: 1, title: "The Glass Pavilion", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, title: "Urban Oasis", category: "Landscape", image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2069&auto=format&fit=crop" },
  { id: 3, title: "Minimalist Heights", category: "Residential", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" },
  { id: 4, title: "The Atrium", category: "Interior", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
  { id: 5, title: "Eco-Lodge", category: "Hospitality", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop" },
  { id: 6, title: "Brutalist Core", category: "Commercial", image: "https://images.unsplash.com/photo-1517585250495-2c8c6a084c71?q=80&w=1964&auto=format&fit=crop" },
];

export default function ProjectsPage() {
  return (
    // Visual Upgrade: Transparent background allows global CAD grid to show
    <div className="min-h-screen pt-40 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto z-20 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER BLOCK */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20"
        >
          {/* Section ID */}
          <div className="flex items-center gap-4 mb-6">
            <span className="w-6 h-[1px] bg-[#555555]"></span>
            <span className="text-[10px] font-mono tracking-widest text-[#555555] uppercase">
              System Directory // Portfolio
            </span>
          </div>

          {/* Kinetic Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[0.85] uppercase text-[#FAFAFA] mb-8">
            <span className="block kinetic-wireframe cursor-pointer">Selected</span>
            <span className="block text-[#666666] hover:wireframe-text-active transition-all duration-500 cursor-pointer">
              Works.
            </span>
          </h1>
          
          <p className="text-[#888888] text-sm md:text-base font-medium uppercase tracking-widest border-l border-[#333333] pl-6 max-w-xl">
            A curated index of our architectural design and master planning projects. Built with precision, scaling for the future.
          </p>
        </motion.div>

        {/* YOUR EXACT 3-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* THE ROUTING FIX: Now properly links to /projects/1, /projects/2, etc. */}
              <Link href={`/projects/${project.id}`} className="block">
                
                {/* Cinematic Image Reveal */}
                <div className="relative overflow-hidden aspect-[4/5] bg-[#030303] border border-[#333333] mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-105 group-hover:scale-100 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                
                {/* Project Metadata */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-[#FAFAFA] mb-1 group-hover:text-[#888888] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#555555] uppercase tracking-widest text-[10px] font-mono">
                      {project.category}
                    </p>
                  </div>
                  {/* Subtle hover arrow */}
                  <span className="text-[#FAFAFA] font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    ↗
                  </span>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}