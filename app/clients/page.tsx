"use client";

import { motion } from "framer-motion";

export default function ClientsPage() {
  // Dynamically generate the 15 clients based on your folder structure
  const clients = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    image: `/clients/client${i + 1}.jpg`,
    name: `Client ${i + 1}`
  }));

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-32 md:pt-40 pb-24 md:pb-40 selection:bg-[#1D1D1F] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* 1. QUIET EDITORIAL HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-24"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-[#1D1D1F]/20" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#86868B]">
                Trusted Partnerships
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-[#1D1D1F] leading-[1.05] mb-6">
              Collaborators & <br className="hidden lg:block" />
              Clients.
            </h1>
            <p className="text-base md:text-lg text-[#86868B] font-light max-w-lg leading-relaxed">
              For over three decades, we have partnered with visionaries, leading developers, and institutional giants to shape the modern built environment.
            </p>
          </div>
        </motion.div>

        {/* 2. THE ARCHITECTURAL LEDGER GRID */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          // This creates the 1px architectural lines between items
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1px] bg-[#1D1D1F]/10 border border-[#1D1D1F]/10 rounded-2xl md:rounded-[2rem] overflow-hidden"
        >
          {clients.map((client, index) => (
            <motion.div 
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 5) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F5F5F7] hover:bg-white transition-colors duration-500 aspect-square flex items-center justify-center p-8 md:p-12 relative group"
            >
              <img 
                src={client.image} 
                alt={client.name}
                // mix-blend-multiply removes the ugly white JPG backgrounds automatically
                className="w-full h-full object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out mix-blend-multiply"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </main>
  );
}