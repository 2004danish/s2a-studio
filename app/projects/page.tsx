"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  { id: 1, title: "The Glass Pavilion", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, title: "Urban Oasis", category: "Landscape", image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2069&auto=format&fit=crop" },
  { id: 3, title: "Minimalist Heights", category: "Residential", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" },
  { id: 4, title: "The Atrium", category: "Interior", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
  { id: 5, title: "Eco-Lodge", category: "Hospitality", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop" },
  { id: 6, title: "Brutalist Core", category: "Commercial", image: "https://images.unsplash.com/photo-1517585250495-2c8c6a084c71?q=80&w=1964&auto=format&fit=crop" },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-6">
            Selected Work.
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            A curated index of our architectural design and master planning projects. Built with precision, scaling for the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/projects`}>
                <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-black mb-1 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-medium">
                  {project.category}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}