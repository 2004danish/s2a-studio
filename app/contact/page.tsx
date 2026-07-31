"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  // YOUR EXACT LOGIC - UNTOUCHED
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    // VISUAL UPGRADE: Transparent background lets the global CAD grid show through
    <div className="min-h-screen pt-40 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto z-20 relative">
      <div className="max-w-3xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          {/* Section ID */}
          <div className="flex items-center gap-4 mb-6">
            <span className="w-6 h-[1px] bg-[#555555]"></span>
            <span className="text-[10px] font-mono tracking-widest text-[#555555] uppercase">
              Initiate Sequence // Contact
            </span>
          </div>
          
          {/* Kinetic Typography Title */}
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[0.85] uppercase text-[#FAFAFA] mb-8">
            <span className="block kinetic-wireframe cursor-pointer">Let's Build</span>
            <span className="block text-[#666666] hover:wireframe-text-active transition-all duration-500 cursor-pointer">
              Something
            </span>
            <span className="block kinetic-wireframe cursor-pointer">Extraordinary.</span>
          </h1>
          
          <p className="text-[#888888] text-sm md:text-base font-medium uppercase tracking-widest border-l border-[#333333] pl-6 max-w-xl">
            Reach out to discuss your next architectural project, request a consultation, or simply learn more about our master planning process.
          </p>
        </motion.div>

        <motion.form 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          onSubmit={handleSubmit} 
          className="space-y-12 relative z-30"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* NAME INPUT */}
            <div className="space-y-4">
              <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FAFAFA]">Full Name</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border-b border-[#333333] py-4 focus:outline-none focus:border-[#FAFAFA] transition-colors bg-transparent text-[#FAFAFA] text-lg rounded-none placeholder:text-[#333333]"
                placeholder="John Doe"
              />
            </div>

            {/* EMAIL INPUT */}
            <div className="space-y-4">
              <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FAFAFA]">Email Address</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-b border-[#333333] py-4 focus:outline-none focus:border-[#FAFAFA] transition-colors bg-transparent text-[#FAFAFA] text-lg rounded-none placeholder:text-[#333333]"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          {/* MESSAGE INPUT */}
          <div className="space-y-4">
            <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FAFAFA]">Project Details</label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border-b border-[#333333] py-4 focus:outline-none focus:border-[#FAFAFA] transition-colors bg-transparent text-[#FAFAFA] text-lg resize-none rounded-none placeholder:text-[#333333]"
              placeholder="Tell us about your vision, site location, and timeline..."
            />
          </div>

          {/* MONOCHROME HIGH-END BUTTON */}
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="group relative w-fit px-12 py-6 bg-transparent border border-[#FAFAFA] text-[#FAFAFA] text-[10px] font-bold uppercase tracking-[0.2em] overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#030303]">
              {status === "loading" ? "Transmitting..." : status === "success" ? "Message Secured" : "Submit Inquiry"}
            </span>
            <div className="absolute inset-0 w-full h-full bg-[#FAFAFA] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 z-0"></div>
          </button>

          {/* STATUS MESSAGES */}
          {status === "error" && (
            <p className="text-red-500 text-xs font-mono tracking-widest uppercase mt-4 border-l border-red-500 pl-4">
              Error // Transmission failed. Please try again.
            </p>
          )}
          {status === "success" && (
            <p className="text-[#FAFAFA] text-xs font-mono tracking-widest uppercase mt-4 border-l border-[#FAFAFA] pl-4">
              Success // Target acquired. We will be in touch.
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
}