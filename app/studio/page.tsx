"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Master Planning",
    description: "Comprehensive site analysis and large-scale architectural strategy designed for long-term sustainability and scalability.",
  },
  {
    title: "Architectural Design",
    description: "Bespoke conceptualization and rigorous technical execution for commercial, residential, and hospitality environments.",
  },
  {
    title: "Interior Architecture",
    description: "Curating the internal spatial experience through precise material selection, lighting, and custom joinery.",
  },
];

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-6">
            Studio & Services.
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
            S2A Studio is a multi-disciplinary practice rooted in the belief that the built environment should seamlessly integrate with the natural world. We bring an engineering mindset to avant-garde design.
          </p>
        </motion.div>

        {/* Image Break */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full aspect-[21/9] bg-gray-100 mb-24 overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Inside S2A Studio"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="border-t border-black pt-6"
            >
              <h3 className="text-2xl font-semibold text-black mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}