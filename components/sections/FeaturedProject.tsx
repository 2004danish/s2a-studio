"use client"; 

import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-4">
              Featured Work.
            </h2>
            <p className="text-gray-500 max-w-md">
              A glimpse into our avant-garde tradition in architectural design across Residential, Commercial, and Hospitality spaces.
            </p>
          </div>
          <Link 
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold border-b border-black pb-1 hover:text-gray-600 transition-colors mt-6 md:mt-0 text-black"
          >
            View All Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative group block w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-gray-100"
        >
          {/* High-Quality Placeholder Image for Phase 1 */}
          <img 
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2128&auto=format&fit=crop" 
            alt="Featured Architectural Project"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/40" />
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
            <span className="text-sm font-medium uppercase tracking-widest mb-2 block opacity-80">Residential Architecture</span>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">The Modernist Villa</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}