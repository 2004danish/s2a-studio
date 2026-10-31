"use client";

import { motion } from "framer-motion";

export default function NewsPage() {
  // Visual News Feed (Awards & Features)
  const features = [
    {
      id: "beyond-the-bath",
      date: "March 2025",
      category: "Feature & Award",
      title: "Top 25 Best Bathroom Designs",
      description: "S2A Studio has been featured in the Top 25 Best Bathroom Designs in BEYOND THE BATH Design Challenge & Awards | Season Two, in association with Hindware Italian Collection. This recognition highlights our excellence in innovative and luxurious bathroom design.",
      image: "/news/beyond-the-bath.jpg"
    },
    {
      id: "family-award-2025",
      date: "February 2025",
      category: "Award",
      title: "Family Interior Architecture & Design Award 2025",
      description: "S2A Studio has been honored in the Hospitality & Recreational Project category. The entire team proudly received this award, highlighting our dedication to innovation, design excellence, and creating impactful spaces.",
      images: ["/news/family-award-2025.jpg", "/news/family-award-2025-team.jpg"]
    },
    {
      id: "family-award-2024",
      date: "February 2024",
      category: "Award",
      title: "Family Interior Architecture & Design Award 2024",
      description: "S2A has been honoured with the Family Interior Architecture and Design Award 2024 in the Hospitality & Recreational Project category. This marks a milestone in our continuous pursuit of experiential design.",
      images: ["/news/family-award-2024.jpg", "/news/family-award-2024-team.jpg"]
    }
  ];

  // Text Bulletin (Announcements, Juries, etc.)
  const bulletins = [
    { date: "Coming Soon", text: "New Branch of S2A Studio is opening in Chh. Sambhaji Nagar." },
    { date: "June 23, 2019", text: "National Architecture And Interior Design Excellence Award." },
    { date: "September 2018", text: "Invited as a jury for competition at SSPMS College, Pune." },
    { date: "Academic", text: "Invited as a guest speaker at SSPMS Engineering College to guide students." }
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-32 md:pt-40 pb-24 md:pb-40 selection:bg-[#1D1D1F] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* 1. EDITORIAL HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24 border-b border-[#1D1D1F]/10 pb-8"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-[#1D1D1F]/20" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#86868B]">
                Press & Recognition
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1D1D1F] leading-[1.05] mb-4">
              Studio Journal.
            </h1>
            <p className="text-base text-[#86868B] font-light max-w-lg leading-relaxed">
              A curated archive of our awards, media features, and milestones in shaping the built environment.
            </p>
          </div>
        </motion.div>

        {/* 2. SPLIT JOURNAL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Visual Features Feed */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-8 flex flex-col gap-20"
          >
            {features.map((feature, idx) => (
              <article key={feature.id} className="flex flex-col gap-6 group">
                
                {/* Visual Media */}
                {feature.image ? (
                  <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#E8E8EA] rounded-2xl overflow-hidden relative">
                    <motion.img 
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 pointer-events-none rounded-2xl" />
                  </div>
                ) : feature.images ? (
                  <div className="grid grid-cols-2 gap-4">
                    {feature.images.map((img, i) => (
                      <div key={i} className="w-full aspect-[4/3] bg-[#E8E8EA] rounded-2xl overflow-hidden relative">
                        <motion.img 
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                          src={img} 
                          alt={`${feature.title} detail ${i + 1}`} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 pointer-events-none rounded-2xl" />
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* Article Typography */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pt-2">
                  <div className="flex flex-col gap-1 md:w-1/4 shrink-0">
                    <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B]">{feature.date}</span>
                    <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#1D1D1F]">{feature.category}</span>
                  </div>
                  <div className="flex flex-col gap-4 md:w-3/4">
                    <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[#1D1D1F] leading-tight">
                      {feature.title}
                    </h2>
                    <p className="text-sm md:text-base text-[#86868B] font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

              </article>
            ))}
          </motion.div>


          {/* RIGHT COLUMN: Studio Bulletin & Media */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-4"
          >
            <div className="sticky top-32 flex flex-col gap-16">
              
              {/* Featured Media: Aaj Tak Interview */}
              <div className="flex flex-col gap-6">
                <h3 className="text-xs font-mono tracking-[0.15em] uppercase text-[#1D1D1F] border-b border-[#1D1D1F]/10 pb-4">
                  Media & Interviews
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="w-full aspect-video bg-[#1D1D1F] rounded-2xl overflow-hidden relative shadow-sm">
                    {/* Replace the src with the actual YouTube embed link if you have it */}
                    <iframe 
                      className="w-full h-full"
                      src="  https://youtu.be/ilZ2RrfCfao?si=3e3-fOmiTqm3GIg7" 
                      title="Aaj Tak Interview" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B]">January 2016</span>
                    <p className="text-sm font-medium text-[#1D1D1F]">
                      Interview of Ar. Shekhar Shinde on Aaj Tak News for floating resort design.
                    </p>
                  </div>
                </div>
              </div>

              {/* Studio Bulletin (Text News) */}
              <div className="flex flex-col gap-6">
                <h3 className="text-xs font-mono tracking-[0.15em] uppercase text-[#1D1D1F] border-b border-[#1D1D1F]/10 pb-4">
                  Studio Bulletin
                </h3>
                <div className="flex flex-col gap-6">
                  {bulletins.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-1 group">
                      <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] group-hover:text-[#1D1D1F] transition-colors">
                        {item.date}
                      </span>
                      <p className="text-sm font-medium text-[#1D1D1F] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                  
                  {/* Article Link Example */}
                  <div className="flex flex-col gap-1 group">
                    <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#86868B] group-hover:text-[#1D1D1F] transition-colors">
                      Article
                    </span>
                    <a href="#" className="text-sm font-medium text-[#1D1D1F] leading-relaxed flex items-center gap-2 hover:text-[#86868B] transition-colors">
                      Ar. Shekhar Shinde Nature Inspired Architecture
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}