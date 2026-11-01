"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const journalEntries = [
  { 
    date: "March 2025", 
    category: "Feature & Award",
    title: "Top 25 Best Bathroom Designs", 
    organization: "Beyond The Bath | Hindware",
    link: "/news",
    image: "/news/beyond-the-bath.jpg" 
  },
  { 
    date: "February 2025", 
    category: "Award",
    title: "Family Interior Architecture & Design", 
    organization: "Hospitality & Recreational",
    link: "/news",
    image: "/news/family-award-2025.jpg" 
  },
  { 
    date: "February 2024", 
    category: "Award",
    title: "Family Interior Architecture & Design", 
    organization: "Hospitality & Recreational",
    link: "/news",
    image: "/news/family-award-2024.jpg" 
  },
  { 
    date: "June 2019", 
    category: "Excellence Award",
    title: "National Architecture & Design Excellence", 
    organization: "National Architecture Board",
    link: "/news",
    image: "/projects/architecture.jpg" 
  },
  { 
    date: "Speculative", 
    category: "Honourable Mention",
    title: "Guggenheim Museum Redesign", 
    organization: "Design Competition",
    link: "/projects/competitions",
    image: "/projects/competition.jpg" 
  }
];

export default function Awards() {
  return (
    // FIXED: Drastically reduced vertical padding (py-16 on mobile, lg:py-24 on desktop) to eliminate the massive white gap
    <section className="py-16 lg:py-24 bg-[#F5F5F7] px-6 md:px-12 lg:px-24 border-t border-[#1D1D1F]/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* EDITORIAL HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-20"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <span className="w-6 h-[1px] bg-[#1D1D1F]/20" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#86868B]">
                Press & Recognition
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1D1D1F]">
              Studio Journal.
            </h2>
          </div>
          
          <Link href="/news" className="group flex items-center gap-3 lg:gap-4 w-fit outline-none">
            <span className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.15em] text-[#1D1D1F] group-hover:text-[#86868B] transition-colors">
              View All News
            </span>
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-[#1D1D1F]/20 flex items-center justify-center group-hover:bg-[#1D1D1F] group-hover:border-[#1D1D1F] transition-all duration-300">
              <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#1D1D1F] group-hover:text-[#F5F5F7] group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </motion.div>

        {/* MINIMALIST HOVER LEDGER (Highly Mobile Responsive) */}
        <div className="flex flex-col border-t border-[#1D1D1F]/10">
          {journalEntries.map((entry, index) => (
            <Link 
              href={entry.link} 
              key={index} 
              className="outline-none group block relative border-b border-[#1D1D1F]/10 hover:border-[#1D1D1F] transition-colors duration-300"
            >
              {/* MOBILE FIRST FLEX LAYOUT: flex-col on mobile, flex-row on desktop */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-6 py-6 lg:py-10 relative z-10">
                
                {/* Meta Data (Stacks nicely on top for mobile) */}
                <div className="flex flex-row lg:flex-col items-center lg:items-start gap-3 lg:gap-1 lg:w-1/4 shrink-0">
                  <span className="text-[9px] lg:text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] group-hover:text-[#1D1D1F] transition-colors">
                    {entry.date}
                  </span>
                  <span className="hidden lg:block w-3 h-[1px] bg-[#1D1D1F]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[9px] lg:text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] group-hover:text-[#1D1D1F] transition-colors">
                    {entry.category}
                  </span>
                </div>
                
                {/* Title */}
                <div className="lg:w-2/4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium tracking-tight text-[#1D1D1F] lg:group-hover:translate-x-4 transition-transform duration-500 ease-out">
                    {entry.title}
                  </h3>
                </div>
                
                {/* Organization (Bottom on mobile, right on desktop) */}
                <div className="flex flex-col lg:items-end gap-2 lg:w-1/4 shrink-0 mt-2 lg:mt-0">
                  <span className="text-xs lg:text-sm font-light text-[#86868B] group-hover:text-[#1D1D1F] transition-colors text-left lg:text-right">
                    {entry.organization}
                  </span>
                </div>

              </div>

              {/* FLOATING THUMBNAIL (Hidden completely on mobile/tablet to preserve touch UX, visible on desktop hover) */}
              <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[55%] xl:left-[60%] w-[280px] xl:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden pointer-events-none opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:shadow-2xl transition-all duration-500 ease-out z-20">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  sizes="(max-width: 1200px) 280px, 320px"
                  className="object-cover"
                  quality={75} 
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/10 pointer-events-none rounded-2xl" />
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}