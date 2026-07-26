"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="py-32 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-8 block"
        >
          Our Philosophy
        </motion.span>
        
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-3xl md:text-5xl font-light leading-snug md:leading-tight text-black mb-8"
        >
          "Nature inspired solutions in Architecture track down to reunite humans with their true enclosures. We do not take Mother Nature for granted, we work with her and let her guide us."
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-gray-500 text-lg"
        >
          Studying nature deeply enables us to consistently deliver unique, efficient, and beautiful architectural solutions across all our projects.
        </motion.p>
      </div>
    </section>
  );
}