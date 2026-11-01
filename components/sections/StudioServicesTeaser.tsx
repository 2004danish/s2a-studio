"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Architecture",
    desc: "Bringing avant-garde traditions to architectural concepts, we provide innovative residential, commercial, hospitality, and institutional services. We manage planning, execution, and liasoning, building your structure from scratch to completion.",
    image: "/services/architecture.jpg",
    link: "/projects/architecture"
  },
  {
    id: "02",
    title: "Interior Design",
    desc: "It is the interiors that define a perfect space. We make environments functional, safe, and beautiful, working on a concept basis mostly derived from nature. The entire scope of material, labour, designing, and execution is handled entirely by us.",
    image: "/services/interior-design.jpg", 
    link: "/projects/interior"
  },
  {
    id: "03",
    title: "Master Planning",
    desc: "Revealing the development potential of both greenfield and brownfield sites. The success of our projects is founded in an evidence-based approach, drawing on our expertise in urban design and a strong understanding of a community's needs.",
    image: "/services/master-planning.jpg",
    link: "/contact"
  },
  {
    id: "04",
    title: "Landscape Architecture",
    desc: "Enhancing the natural environment of your home or business. From terraces and gardens to transforming unused spaces, we have the expertise to design and maintain quality landscapes customized to meet your specific needs.",
    image: "/services/landscape.jpg",
    link: "/contact"
  },
  {
    id: "05",
    title: "3D Visualization",
    desc: "High-quality 3D Rendering, Architectural Animation, and Walkthroughs. We create hyper-realistic visuals of any structure—whether residential or commercial—helping clients step into their spaces long before the foundation is poured.",
    image: "/services/visualization.jpg",
    link: "/visualization"
  }
];

export default function CinematicServices() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 1. Raw Scroll Data
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 2. THE MAGIC FIX: Physics-Based Dampening
  // This converts chunky mouse wheel scrolls into buttery smooth momentum
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.001
  });

  // =========================================
  // THE STRICT TIMELINE MATH (Using smoothProgress)
  // =========================================

  // Intro Shrink Effect
  const imageWidth = useTransform(smoothProgress, [0, 0.15], ["100%", "50%"]);
  const imageBorderRadius = useTransform(smoothProgress, [0, 0.15], ["0rem", "2rem"]);
  const leftPanelOpacity = useTransform(smoothProgress, [0.05, 0.15], [0, 1]);

  // Image Gallery Sliding
  // Pauses while reading, slides exactly during the text transitions
  const galleryY = useTransform(
    smoothProgress,
    [0.15, 0.28, 0.36, 0.45, 0.53, 0.62, 0.70, 0.79, 0.87, 1.0],
    ["0%", "0%", "-20%", "-20%", "-40%", "-40%", "-60%", "-60%", "-80%", "-80%"]
  );

  // Text 1: Architecture
  const o1 = useTransform(smoothProgress, [0.15, 0.28, 0.32], [1, 1, 0]);
  const y1 = useTransform(smoothProgress, [0.15, 0.28, 0.32], ["0px", "0px", "-40px"]);

  // Text 2: Interior Design (Starts fading in exactly at 0.32)
  const o2 = useTransform(smoothProgress, [0.32, 0.36, 0.45, 0.49], [0, 1, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.32, 0.36, 0.45, 0.49], ["40px", "0px", "0px", "-40px"]);

  // Text 3: Master Planning (Starts fading in exactly at 0.49)
  const o3 = useTransform(smoothProgress, [0.49, 0.53, 0.62, 0.66], [0, 1, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.49, 0.53, 0.62, 0.66], ["40px", "0px", "0px", "-40px"]);

  // Text 4: Landscape Architecture
  const o4 = useTransform(smoothProgress, [0.66, 0.70, 0.79, 0.83], [0, 1, 1, 0]);
  const y4 = useTransform(smoothProgress, [0.66, 0.70, 0.79, 0.83], ["40px", "0px", "0px", "-40px"]);

  // Text 5: 3D Visualization
  const o5 = useTransform(smoothProgress, [0.83, 0.87, 1.0], [0, 1, 1]);
  const y5 = useTransform(smoothProgress, [0.83, 0.87, 1.0], ["40px", "0px", "0px"]);

  const textOpacities = [o1, o2, o3, o4, o5];
  const textYs = [y1, y2, y3, y4, y5];

  // =========================================
  // MOBILE / TABLET (Safely Stacked Layout)
  // =========================================
  if (isMobile) {
    return (
      <section className="w-full bg-[#F5F5F7] py-24 px-6 md:px-12 flex flex-col gap-24">
        <div className="flex items-center gap-3">
          <span className="w-6 h-[1px] bg-[#1D1D1F]/20" />
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#86868B]">
            Studio Expertise
          </span>
        </div>
        
        {services.map((service) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="w-full aspect-[4/3] bg-[#E8E8EA] rounded-2xl overflow-hidden relative">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xs font-mono tracking-widest text-[#86868B] block mb-4">
                {service.id}
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#1D1D1F] mb-4">
                {service.title}.
              </h2>
              <p className="text-sm md:text-base text-[#86868B] font-light leading-relaxed mb-6">
                {service.desc}
              </p>
              <Link href={service.link} className="text-xs font-bold uppercase tracking-[0.15em] text-[#1D1D1F] border-b border-[#1D1D1F]/20 w-fit pb-1">
                Explore Archive
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    );
  }

  // =========================================
  // DESKTOP (Cinematic Scroll Track)
  // =========================================
  return (
    <section ref={containerRef} className="hidden lg:block relative w-full h-[600vh] bg-[#F5F5F7]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-end px-12 xl:px-24 py-12">
        
        {/* LEFT SIDE: Typography */}
        <motion.div 
          style={{ opacity: leftPanelOpacity }}
          className="absolute left-0 top-0 w-1/2 h-full flex flex-col justify-center px-12 xl:px-24 z-10"
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="w-6 h-[1px] bg-[#1D1D1F]/20" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#86868B]">
              Studio Expertise
            </span>
          </div>

          <div className="relative h-[45vh] w-full">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                style={{ 
                  opacity: textOpacities[index], 
                  y: textYs[index] 
                }}
                className="absolute inset-0 flex flex-col justify-center pointer-events-none"
              >
                <span className="text-sm font-mono tracking-widest text-[#86868B] mb-6">
                  {service.id}
                </span>
                <h2 className="text-5xl xl:text-6xl font-medium tracking-tight text-[#1D1D1F] leading-[1.05] mb-6">
                  {service.title}.
                </h2>
                <p className="text-base xl:text-lg text-[#86868B] font-light leading-relaxed max-w-md">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 pointer-events-auto">
            <Link href="/services" className="flex items-center gap-4 group outline-none w-fit">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1D1D1F] group-hover:text-[#86868B] transition-colors">
                View All Services
              </span>
              <div className="w-10 h-10 rounded-full border border-[#1D1D1F]/20 flex items-center justify-center group-hover:bg-[#1D1D1F] group-hover:border-[#1D1D1F] transition-all duration-300">
                <svg className="w-3.5 h-3.5 text-[#1D1D1F] group-hover:text-[#F5F5F7] group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Dynamic Scrolling Image Gallery */}
        <motion.div 
          style={{ width: imageWidth, borderRadius: imageBorderRadius }}
          className="h-full relative overflow-hidden z-20 shadow-2xl origin-right bg-[#E8E8EA]"
        >
          <motion.div 
            style={{ y: galleryY, height: `${services.length * 100}%` }}
            className="w-full flex flex-col"
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                style={{ height: `${100 / services.length}%` }} 
                className="w-full relative"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/10 pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}