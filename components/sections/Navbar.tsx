"use client"; // This tells Next.js to run our Framer Motion animations in the browser

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-black">
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter">
          S2A STUDIO
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/projects" className="hover:text-gray-500 transition-colors">Selected Work</Link>
          <Link href="/studio" className="hover:text-gray-500 transition-colors">Studio & Services</Link>
          <Link href="/contact" className="hover:text-gray-500 transition-colors">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
}