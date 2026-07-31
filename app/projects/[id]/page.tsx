"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

// MOCK DATABASE: This matches your /projects index. 
// Later, you will fetch this from your database/CMS using the 'id'.
const projectsDB = [
  {
    id: "01",
    title: "Civil Lines Residence",
    category: "Architecture",
    year: "2026",
    location: "Nagpur, MH",
    area: "12,500 SQ FT",
    status: "Completed",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A brutalist exploration of concrete and light. The Civil Lines Residence strips away all decorative elements to expose the raw mathematical beauty of structural engineering. Built to withstand the harsh central Indian climate while maintaining a thermally massive, serene interior environment."
  },
  // We'll map the others to the same data just for the prototype
  { id: "02", title: "The Avalon Residence", category: "Interior Design", year: "2025", location: "Pune, MH", area: "8,200 SQ FT", status: "Completed", heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2500&auto=format&fit=crop", gallery: [], description: "Redefining luxury through subtraction." },
  { id: "03", title: "Vidarbha Commercial Complex", category: "Turnkey Solutions", year: "2025", location: "Nagpur, MH", area: "45,000 SQ FT", status: "In Progress", heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2500&auto=format&fit=crop", gallery: [], description: "A high-performance commercial monolith." },
  { id: "04", title: "Futala Lake Pavilion", category: "3D Visualization", year: "2026", location: "Nagpur, MH", area: "N/A", status: "Concept", heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2500&auto=format&fit=crop", gallery: [], description: "Photorealistic visualization for urban planning." }
];

export default function ProjectDetails() {
  const params = useParams();
  const projectId = params.id;
  
  const project = projectsDB.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-mono uppercase tracking-widest text-[#FAFAFA]">404 // Project Not Found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#030303]">
      
      {/* 1. HERO SECTION */}
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={project.heroImage} 
            alt={project.title} 
            className="w-full h-full object-cover filter grayscale-[30%]"
          />
          {/* Black gradient to blend the bottom into the page content */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-[#030303]/20" />
        </div>

        <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 max-w-[1800px] mx-auto pb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-6 h-[1px] bg-[#FAFAFA]"></span>
            <span className="text-[10px] font-mono tracking-widest text-[#FAFAFA] uppercase bg-[#030303] px-3 py-1 border border-[#333333]">
              Project ID // {project.id}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[0.85] uppercase text-[#FAFAFA] break-words max-w-5xl">
            {project.title}
          </h1>
        </div>
      </div>

      {/* 2. TECHNICAL SPECS & NARRATIVE GRID */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-[#333333]">
        
        {/* LEFT COLUMN: Strict Data Table */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4 border-b border-[#333333] pb-6">
            <span className="text-[10px] font-mono tracking-widest text-[#666666] uppercase">Location</span>
            <span className="text-xs font-mono text-[#FAFAFA] uppercase">{project.location}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 border-b border-[#333333] pb-6">
            <span className="text-[10px] font-mono tracking-widest text-[#666666] uppercase">Category</span>
            <span className="text-xs font-mono text-[#FAFAFA] uppercase">{project.category}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 border-b border-[#333333] pb-6">
            <span className="text-[10px] font-mono tracking-widest text-[#666666] uppercase">Area</span>
            <span className="text-xs font-mono text-[#FAFAFA] uppercase">{project.area}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 border-b border-[#333333] pb-6">
            <span className="text-[10px] font-mono tracking-widest text-[#666666] uppercase">Year</span>
            <span className="text-xs font-mono text-[#FAFAFA] uppercase">{project.year}</span>
          </div>
        </div>

        {/* RIGHT COLUMN: The Brief */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-[#FAFAFA] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-[#666666] uppercase">
              Project Brief // 
            </span>
          </div>
          <p className="text-lg md:text-2xl text-[#FAFAFA] font-medium leading-relaxed tracking-tight border-l border-[#333333] pl-6 md:pl-10">
            {project.description}
          </p>
        </div>
      </div>

      {/* 3. IMAGE GALLERY (If exists) */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="w-full pb-32 flex flex-col gap-12">
          {project.gallery.map((img, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              key={idx} 
              className="w-full h-[60vh] md:h-[90vh] px-6 md:px-12 max-w-[1800px] mx-auto"
            >
              <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover border border-[#333333]" />
            </motion.div>
          ))}
        </div>
      )}

      {/* 4. BACK TO INDEX CTA */}
      <div className="w-full border-t border-[#333333] py-20 flex justify-center">
        <Link href="/projects" className="group relative w-fit px-12 py-6 bg-transparent border border-[#FAFAFA] text-[#FAFAFA] text-[10px] font-bold uppercase tracking-[0.2em] overflow-hidden">
          <span className="relative z-10 transition-colors duration-500 group-hover:text-[#030303]">Return to Index</span>
          <div className="absolute inset-0 w-full h-full bg-[#FAFAFA] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 z-0"></div>
        </Link>
      </div>

    </main>
  );
}