"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CareerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Application submitted successfully. We will be in touch.");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-32 md:pt-40 pb-24 md:pb-40 selection:bg-[#1D1D1F] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* 1. QUIET EDITORIAL HERO SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-20 border-b border-[#1D1D1F]/10 pb-8"
        >
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-[#1D1D1F] leading-tight mb-3">
              Shape the future of the built environment.
            </h1>
            <p className="text-sm md:text-base text-[#86868B] font-light max-w-lg">
              We are a collective of architects and designers. We are always looking for visionary minds to join our studio in Pune.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 md:text-right">
            <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#86868B]">General Inquiries</span>
            <a href="mailto:career@s2astudio.in" className="text-sm font-medium hover:text-[#86868B] transition-colors underline decoration-[#1D1D1F]/20 underline-offset-4">
              career@s2astudio.in
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Open Positions (List Style) */}
          <div className="lg:col-span-5 flex flex-col gap-16">
            
            {/* Section: Full Time */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xs font-mono tracking-[0.15em] uppercase text-[#86868B] mb-6">
                01 &nbsp;//&nbsp; Full-Time Roles
              </h2>
              
              <div className="group flex flex-col p-6 -mx-6 rounded-2xl hover:bg-white/50 transition-colors duration-500 cursor-default border border-transparent hover:border-[#1D1D1F]/5">
                <h3 className="text-xl font-medium tracking-tight text-[#1D1D1F] mb-4">Architect / Interior Designer</h3>
                <div className="flex items-center gap-6 text-sm text-[#86868B] mb-6">
                  <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#1D1D1F]/40" /> Pune, India</span>
                  <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#1D1D1F]/40" /> Rolling Openings</span>
                </div>
                <a 
                  href="mailto:career@s2astudio.in" 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#1D1D1F] hover:text-[#86868B] transition-colors w-fit"
                >
                  Email Resume
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              {/* Empty State / Speculative */}
              <div className="p-6 -mx-6 rounded-2xl">
                <h3 className="text-xl font-medium tracking-tight text-[#1D1D1F]/40 mb-2">No other open roles</h3>
                <p className="text-sm text-[#86868B]">We welcome speculative applications year-round.</p>
              </div>
            </motion.div>

            {/* Section: Internships */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-xs font-mono tracking-[0.15em] uppercase text-[#86868B] mb-6">
                02 &nbsp;//&nbsp; Internship Program
              </h2>
              <div className="flex flex-col p-6 -mx-6 bg-[#1D1D1F] text-[#F5F5F7] rounded-[2rem] shadow-xl">
                <div className="flex justify-between items-start mb-12">
                  <h3 className="text-2xl font-medium tracking-tight">May 2026 Batch</h3>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-mono tracking-widest uppercase">
                    6 Positions
                  </span>
                </div>
                <p className="text-sm text-[#F5F5F7]/60 font-light mb-8 leading-relaxed">
                  A comprehensive 6-month immersion into our design process. You will work directly with principal architects on live projects, from conceptualization to execution.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-[#F5F5F7]/40 uppercase tracking-widest">
                  <span>Apply via form</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Premium Application Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#1D1D1F]/5 shadow-sm">
              <div className="mb-10">
                <h2 className="text-3xl font-medium tracking-tight text-[#1D1D1F] mb-3">
                  Internship Application
                </h2>
                <p className="text-sm text-[#86868B]">
                  Please fill out the details below. Ensure your portfolio is highly curated and under 10MB if attaching directly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Dual Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] pl-1">Student Name *</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Rohan Sharma" 
                      className="w-full bg-[#F5F5F7] border border-transparent focus:border-[#1D1D1F]/20 focus:bg-white rounded-xl px-4 py-3.5 outline-none text-sm text-[#1D1D1F] transition-all" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] pl-1">Email Address *</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="rohan@example.com" 
                      className="w-full bg-[#F5F5F7] border border-transparent focus:border-[#1D1D1F]/20 focus:bg-white rounded-xl px-4 py-3.5 outline-none text-sm text-[#1D1D1F] transition-all" 
                    />
                  </div>
                </div>

                {/* College Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] pl-1">College Name *</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Name of Institution" 
                      className="w-full bg-[#F5F5F7] border border-transparent focus:border-[#1D1D1F]/20 focus:bg-white rounded-xl px-4 py-3.5 outline-none text-sm text-[#1D1D1F] transition-all" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] pl-1">College Location *</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="City, State" 
                      className="w-full bg-[#F5F5F7] border border-transparent focus:border-[#1D1D1F]/20 focus:bg-white rounded-xl px-4 py-3.5 outline-none text-sm text-[#1D1D1F] transition-all" 
                    />
                  </div>
                </div>

                {/* Internship Period */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] pl-1">Internship Period *</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="e.g. May 2026 - Nov 2026 (6 Months)" 
                    className="w-full bg-[#F5F5F7] border border-transparent focus:border-[#1D1D1F]/20 focus:bg-white rounded-xl px-4 py-3.5 outline-none text-sm text-[#1D1D1F] transition-all" 
                  />
                </div>

                {/* Premium File Uploaders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] pl-1">Resume (PDF) *</label>
                    <div className="relative group">
                      <input 
                        required 
                        type="file" 
                        accept=".pdf"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="w-full bg-[#F5F5F7] border border-dashed border-[#1D1D1F]/20 group-hover:border-[#1D1D1F]/50 group-hover:bg-[#E8E8EA] rounded-xl px-4 py-4 flex items-center justify-center gap-2 transition-all">
                        <svg className="w-4 h-4 text-[#86868B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <span className="text-xs font-medium text-[#1D1D1F]">Upload Resume</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] pl-1">Portfolio (PDF, Max 10MB) *</label>
                    <div className="relative group">
                      <input 
                        required 
                        type="file" 
                        accept=".pdf"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="w-full bg-[#F5F5F7] border border-dashed border-[#1D1D1F]/20 group-hover:border-[#1D1D1F]/50 group-hover:bg-[#E8E8EA] rounded-xl px-4 py-4 flex items-center justify-center gap-2 transition-all">
                        <svg className="w-4 h-4 text-[#86868B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <span className="text-xs font-medium text-[#1D1D1F]">Upload Portfolio</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-8 mt-2 border-t border-[#1D1D1F]/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <span className="text-[10px] text-[#86868B] font-mono uppercase tracking-widest text-center sm:text-left">
                    All fields are mandatory
                  </span>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-4 bg-[#1D1D1F] text-[#F5F5F7] rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#333336] transition-all hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50 disabled:pointer-events-none outline-none flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? "Uploading..." : "Submit Application"}
                  </button>
                </div>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}