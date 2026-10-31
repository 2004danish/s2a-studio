"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      id: "interior-design",
      title: "Interior Design & Turnkey",
      description: "It's the interiors that define a perfect home these days. Whether a large property or a commercial space, it is the interior that provides and adds an asset for residential projects. At S2A Studio, we make interior spaces functional, safe, and beautiful by determining space requirements and selecting decorative items, such as colors, lighting, and materials.",
      description2: "We work on a concept basis, mostly derived from nature, reflecting our expertise and the client's requirements. In turnkey projects, the entire scope of work including material, labour, designing & execution is handled by us.",
      image: "/services/interior-design.jpg",
      link: "/projects/interior",
      linkText: "View Interior Archive"
    },
    {
      id: "master-planning",
      title: "Master Planning",
      description: "S2A Studio provides Masterplanning and Urban Design Services that can reveal the development potential of both greenfield and brownfield sites. We create well-considered design responses to allow for future development over a period of time.",
      description2: "The success of our projects is founded in an evidence-based approach to planning. We look at learning places as a spectrum of engaging spaces, applying our research findings to every project. Our public planning draws on our expertise in landscape architecture, urban design, and a strong understanding of a community's social, cultural, and economic needs.",
      image: "/services/master-planning.jpg",
      link: "/contact",
      linkText: "Discuss a Masterplan"
    },
    {
      id: "landscape",
      title: "Landscape Architecture",
      description: "We offer a wide range of Landscaping services to enhance the natural environment of your home or business. We have the expertise and knowledge to design, install, and maintain quality landscapes.",
      description2: "Part of your landscape needs may include terraces, gardens, patios, sidewalks, driveways, pool decks, outdoor living areas, and transforming unused spaces. We dedicate ourselves to providing an environment customized to meet your specific needs and interests.",
      image: "/services/landscape.jpg",
      link: "/contact",
      linkText: "Inquire About Landscaping"
    },
    {
      id: "visualization",
      title: "3D Visualization",
      description: "We offer high-quality 3D Rendering, 3D Architectural Visualization, 3D Architectural Animation, 3D Walkthroughs & Multimedia Presentations for commercial and residential architectural development projects.",
      description2: "S2A Studio provides leading visualization services. We can create a visual of any type of structure—whether it be a house, shopping centre, office block, hospital, or apartment complex. We provide a no-obligation quote letting you know the price and the turnaround time for your architectural visualisations.",
      image: "/services/visualization.jpg",
      link: "/visualization",
      linkText: "Explore Visualizations"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-32 md:pt-40 pb-24 md:pb-40 selection:bg-[#1D1D1F] selection:text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* 1. EDITORIAL HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 md:mb-32 border-b border-[#1D1D1F]/10 pb-12"
        >
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-[#1D1D1F]/20" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#86868B]">
                Studio Expertise
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-[#1D1D1F] leading-[1.05] mb-6">
              Comprehensive design <br className="hidden lg:block" />
              solutions.
            </h1>
            <p className="text-base md:text-lg text-[#86868B] font-light max-w-2xl leading-relaxed">
              From the initial masterplan to the final bespoke interior details, we offer end-to-end architectural services tailored to your vision.
            </p>
          </div>
        </motion.div>

        {/* 2. STAGGERED EDITORIAL SCROLL */}
        <div className="flex flex-col gap-32 md:gap-48">
          {services.map((service, index) => {
            // Determine if the image should be on the left (even index) or right (odd index)
            const isImageLeft = index % 2 === 0;

            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col gap-10 md:gap-16 lg:gap-24 items-center ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="w-full aspect-[4/3] md:aspect-[4/5] lg:aspect-square bg-[#E8E8EA] rounded-[2rem] overflow-hidden relative group">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 pointer-events-none rounded-[2rem]" />
                  </div>
                </div>

                {/* Typography Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#86868B]">
                      0{index + 1}
                    </span>
                    <span className="w-12 h-[1px] bg-[#1D1D1F]/20" />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#1D1D1F] mb-8 leading-[1.1]">
                    {service.title}
                  </h2>
                  
                  <div className="flex flex-col gap-6 text-sm md:text-base text-[#86868B] font-light leading-relaxed max-w-xl mb-12">
                    <p>{service.description}</p>
                    <p>{service.description2}</p>
                  </div>

                  <a 
                    href={service.link} 
                    className="group flex items-center gap-4 w-fit outline-none"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1D1D1F] group-hover:text-[#86868B] transition-colors">
                      {service.linkText}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#1D1D1F]/20 flex items-center justify-center group-hover:bg-[#1D1D1F] group-hover:border-[#1D1D1F] transition-all duration-300">
                      <svg className="w-4 h-4 text-[#1D1D1F] group-hover:text-[#F5F5F7] group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </main>
  );
}