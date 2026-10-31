"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-32 md:pt-40 pb-24 md:pb-40 selection:bg-[#1D1D1F] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* 1. ULTRA-CLEAN HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-24"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#86868B]">
                Studio is Open
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-[#1D1D1F] leading-[1.05] mb-6">
              Start a conversation.
            </h1>
            <p className="text-base md:text-lg text-[#86868B] font-light max-w-lg leading-relaxed">
              Reach out to our principal architects, visit our studios, or send us a detailed inquiry below.
            </p>
          </div>
        </motion.div>

        {/* 2. THE BLUEPRINT LAYOUT WITH VERTICAL AXIS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 border-t border-[#1D1D1F]/10 pt-16">
          
          {/* LEFT COLUMN: The Ledger Directory */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:pr-16 xl:pr-24 flex flex-col"
          >
            {/* Group: Locations */}
            <div className="flex flex-col mb-16">
              <h2 className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] mb-8 border-b border-[#1D1D1F]/5 pb-4">
                Our Locations
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1D1D1F] sm:w-24 shrink-0 mt-1">Pune HQ</span>
                <p className="text-sm font-light text-[#86868B] leading-relaxed">
                  S-7, Chinar Apartments, 1/0/ B,<br />
                  Shivajinagar, Near Agriculture College,<br />
                  Sakhar Sankul Road, Pune - 411 005.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1D1D1F] sm:w-24 shrink-0 mt-1">Nagpur</span>
                <p className="text-sm font-light text-[#86868B] leading-relaxed">
                  1st Floor, Gurukrupa Vihar,<br />
                  Kashmiri Galli, Indora Chowk,<br />
                  Nagpur.
                </p>
              </div>
            </div>

            {/* Group: Leadership & Contacts */}
            <div className="flex flex-col mb-16">
              <h2 className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] mb-8 border-b border-[#1D1D1F]/5 pb-4">
                Direct Contacts
              </h2>
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1 group">
                  <p className="text-sm font-medium text-[#1D1D1F]">Ar. Shekhar Shinde <span className="block lg:inline text-xs font-light text-[#86868B] lg:ml-1 transition-colors group-hover:text-[#1D1D1F]">(Director & Principal)</span></p>
                  <a href="tel:+917588168228" className="text-sm text-[#86868B] hover:text-[#1D1D1F] transition-colors">(+91) 7588168228</a>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1 group">
                  <p className="text-sm font-medium text-[#1D1D1F]">Ar. P. R. Shinde <span className="block lg:inline text-xs font-light text-[#86868B] lg:ml-1 transition-colors group-hover:text-[#1D1D1F]">(Director & Principal)</span></p>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1 group">
                  <p className="text-sm font-medium text-[#1D1D1F]">Ar. Aniket Meshram <span className="block lg:inline text-xs font-light text-[#86868B] lg:ml-1 transition-colors group-hover:text-[#1D1D1F]">(Architect - Nagpur)</span></p>
                  <a href="tel:+917972813300" className="text-sm text-[#86868B] hover:text-[#1D1D1F] transition-colors">(+91) 7972813300</a>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1 group">
                  <p className="text-sm font-medium text-[#1D1D1F]">Ar. Raj Shitole <span className="block lg:inline text-xs font-light text-[#86868B] lg:ml-1 transition-colors group-hover:text-[#1D1D1F]">(Architect - Pune)</span></p>
                  <a href="tel:+917559446691" className="text-sm text-[#86868B] hover:text-[#1D1D1F] transition-colors">(+91) 7559446691</a>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1 group">
                  <p className="text-sm font-medium text-[#1D1D1F]">Ar. Jidnyasa Auti <span className="block lg:inline text-xs font-light text-[#86868B] lg:ml-1 transition-colors group-hover:text-[#1D1D1F]">(Studio Manager)</span></p>
                  <a href="tel:+919373291414" className="text-sm text-[#86868B] hover:text-[#1D1D1F] transition-colors">(+91) 9373291414</a>
                </div>
              </div>
            </div>

            {/* Group: Emails */}
            <div className="flex flex-col">
              <h2 className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] mb-8 border-b border-[#1D1D1F]/5 pb-4">
                Digital
              </h2>
              <div className="flex flex-col gap-5">
                <a href="mailto:info@s2astudio.in" className="flex items-center justify-between group">
                  <span className="text-sm font-medium text-[#1D1D1F]">General Inquiries</span>
                  <span className="text-sm text-[#86868B] group-hover:text-[#1D1D1F] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-[#1D1D1F] after:origin-bottom-right after:scale-x-0 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:duration-300">info@s2astudio.in</span>
                </a>
                <a href="mailto:career@s2astudio.in" className="flex items-center justify-between group">
                  <span className="text-sm font-medium text-[#1D1D1F]">Careers</span>
                  <span className="text-sm text-[#86868B] group-hover:text-[#1D1D1F] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-[#1D1D1F] after:origin-bottom-right after:scale-x-0 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:duration-300">career@s2astudio.in</span>
                </a>
                <a href="mailto:intern@s2astudio.in" className="flex items-center justify-between group">
                  <span className="text-sm font-medium text-[#1D1D1F]">Internships</span>
                  <span className="text-sm text-[#86868B] group-hover:text-[#1D1D1F] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-[#1D1D1F] after:origin-bottom-right after:scale-x-0 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:duration-300">intern@s2astudio.in</span>
                </a>
              </div>
            </div>
          </motion.div>


          {/* RIGHT COLUMN: The Interactive Form (With Left Border) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:border-l border-[#1D1D1F]/10 lg:pl-16 xl:pl-24"
          >
            <div className="sticky top-32">
              <h2 className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] mb-12 border-b border-[#1D1D1F]/5 pb-4">
                Direct Message
              </h2>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-10"
                  >
                    
                    {/* Floating Label Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="relative z-0 w-full group">
                        <input type="text" id="name" className="block py-2.5 px-0 w-full text-sm text-[#1D1D1F] bg-transparent border-0 border-b border-[#1D1D1F]/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#1D1D1F] peer transition-colors" placeholder=" " required />
                        <label htmlFor="name" className="absolute text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1D1D1F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Your Name *</label>
                      </div>
                      <div className="relative z-0 w-full group">
                        <input type="email" id="email" className="block py-2.5 px-0 w-full text-sm text-[#1D1D1F] bg-transparent border-0 border-b border-[#1D1D1F]/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#1D1D1F] peer transition-colors" placeholder=" " required />
                        <label htmlFor="email" className="absolute text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1D1D1F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Your Email *</label>
                      </div>
                    </div>

                    <div className="relative z-0 w-full group">
                      <input type="text" id="subject" className="block py-2.5 px-0 w-full text-sm text-[#1D1D1F] bg-transparent border-0 border-b border-[#1D1D1F]/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#1D1D1F] peer transition-colors" placeholder=" " required />
                      <label htmlFor="subject" className="absolute text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1D1D1F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Subject *</label>
                    </div>

                    <div className="relative z-0 w-full group">
                      <textarea id="message" rows={4} className="block py-2.5 px-0 w-full text-sm text-[#1D1D1F] bg-transparent border-0 border-b border-[#1D1D1F]/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#1D1D1F] peer transition-colors resize-none" placeholder=" " required></textarea>
                      <label htmlFor="message" className="absolute text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1D1D1F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Your Message *</label>
                    </div>

                    {/* Submit Action */}
                    <div className="pt-4 flex items-center justify-between">
                      <span className="text-[9px] text-[#86868B] font-mono uppercase tracking-widest hidden sm:block">
                        All fields required
                      </span>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="group relative w-full sm:w-auto px-10 py-4 bg-[#1D1D1F] text-[#F5F5F7] rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#333336] transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none outline-none flex items-center justify-center gap-4 overflow-hidden"
                      >
                        <span className="relative z-10">{isSubmitting ? "Sending..." : "Submit"}</span>
                        {!isSubmitting && (
                          <svg className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  
                  /* Inline Success State */
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center h-full bg-white rounded-3xl border border-[#1D1D1F]/5 shadow-sm"
                  >
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-[#1D1D1F] mb-3">Inquiry Sent</h3>
                    <p className="text-sm text-[#86868B] max-w-xs leading-relaxed">
                      Thank you. Our studio will review your message and reach out shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}