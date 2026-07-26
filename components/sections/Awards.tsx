"use client";

import { motion } from "framer-motion";

const awards = [
  { year: "2025", title: "Excellence in Master Planning", organization: "National Architecture Board" },
  { year: "2024", title: "Best Sustainable Design", organization: "Green Building Council" },
  { year: "2023", title: "Innovative Workspace Award", organization: "Design Week" },
];

export default function Awards() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold tracking-tighter text-black mb-12 border-b border-gray-200 pb-8"
        >
          Recognition.
        </motion.h2>

        <div className="flex flex-col">
          {awards.map((award, index) => (
            <motion.div 
              key={index}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-gray-100 group hover:border-black transition-colors"
            >
              <div className="text-gray-400 font-mono text-sm mb-2 md:mb-0 w-24">
                {award.year}
              </div>
              <div className="text-xl font-medium text-black flex-1">
                {award.title}
              </div>
              <div className="text-gray-500 text-sm md:text-right mt-2 md:mt-0">
                {award.organization}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}