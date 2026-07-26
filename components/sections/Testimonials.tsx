"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-32 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <svg className="w-12 h-12 mx-auto text-gray-300 mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-2xl md:text-4xl font-light leading-relaxed text-black mb-8">
            "S2A Studio transformed our commercial space into a breathing, vibrant ecosystem. Their attention to nature-inspired detail and precise execution is unmatched in the industry."
          </p>
          <div className="text-sm font-semibold tracking-widest uppercase text-gray-900">
            Aria Holdings <span className="text-gray-400 font-normal ml-2">Client</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}