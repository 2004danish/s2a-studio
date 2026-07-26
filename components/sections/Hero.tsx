"use client"; 

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image Placeholder with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architectural Design"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Text Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mb-12">
        <motion.h1 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6"
        >
          Designing the <br className="hidden md:block" /> Future of Spaces.
        </motion.h1>

        <motion.p 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
        >
          A premium architectural design and master planning studio dedicated to creating scalable, visionary environments.
        </motion.p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <Link 
            href="/projects" 
            className="inline-block bg-white text-black px-8 py-4 font-medium hover:bg-gray-200 transition-colors"
          >
            Explore Selected Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}