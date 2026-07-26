"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 bg-black text-white px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-8"
        >
          Ready to realize your vision?
        </motion.h2>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Link 
            href="/contact" 
            className="inline-block bg-white text-black px-10 py-5 font-medium hover:bg-gray-200 transition-colors"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}