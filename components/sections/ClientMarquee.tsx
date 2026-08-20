"use client";

import { motion } from "framer-motion";

const clients = [
  { id: "01", src: "/clients/client1.jpg", alt: "Client 1" },
  { id: "02", src: "/clients/client2.jpg", alt: "Client 2" },
  { id: "03", src: "/clients/client3.jpg", alt: "Client 3" },
  { id: "04", src: "/clients/client4.jpg", alt: "Client 4" },
  { id: "05", src: "/clients/client5.jpg", alt: "Client 5" },
  { id: "06", src: "/clients/client6.jpg", alt: "Client 6" },
  { id: "07", src: "/clients/client7.jpg", alt: "Client 7" },
  { id: "08", src: "/clients/client8.jpg", alt: "Client 8" },
  { id: "09", src: "/clients/client9.jpg", alt: "Client 9" },
  { id: "10", src: "/clients/client10.jpg", alt: "Client 10" },
  { id: "11", src: "/clients/client11.jpg", alt: "Client 11" },
  { id: "12", src: "/clients/client12.jpg", alt: "Client 12" },
  { id: "13", src: "/clients/client13.jpg", alt: "Client 13" },
  { id: "14", src: "/clients/client14.jpg", alt: "Client 14" },
  { id: "15", src: "/clients/client15.jpg", alt: "Client 15" },
];

export default function ClientMarquee() {
  return (
    <section className="w-full bg-[#F5F5F7] py-10 md:py-20 border-b border-[#1D1D1F]/5 overflow-hidden flex flex-col items-center justify-center">
      
      {/* 1. SUBTLE EDITORIAL TYPOGRAPHY */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 md:mb-10 px-4 flex flex-col items-center text-center"
      >
        <h2 className="text-xl md:text-2xl font-medium tracking-tight text-[#1D1D1F] leading-[1.2]">
          Trusted by industry <br />
          <span className="font-serif italic font-light text-[#86868B] tracking-normal text-2xl md:text-3xl">
            visionaries.
          </span>
        </h2>
      </motion.div>

      {/* 2. 3D PERSPECTIVE CONTAINER */}
      <div 
        className="relative w-full flex h-[45px] md:h-[60px] items-center mt-2"
        style={{ perspective: "1000px" }}
      >
        
        {/* Soft edge fade masks - optimized width for mobile */}
        <div className="absolute top-0 bottom-0 left-0 w-12 md:w-40 bg-gradient-to-r from-[#F5F5F7] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 md:w-40 bg-gradient-to-l from-[#F5F5F7] to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex items-center gap-10 md:gap-24 pl-10 md:pl-24 w-max"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {[...clients, ...clients].map((client, index) => (
            <motion.div 
              key={`${client.id}-${index}`} 
              className="flex-shrink-0 w-[95px] md:w-[140px] h-full flex items-center justify-center cursor-pointer relative"
              whileHover={{ 
                scale: 1.15, 
                z: 30,          
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 25 
              }}
            >
              <img
                src={client.src}
                alt={client.alt}
                className="w-full h-full object-contain mix-blend-multiply drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)] transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}