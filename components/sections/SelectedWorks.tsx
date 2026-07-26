"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Temporary placeholder data until we connect the Prisma database
const projects = [
  {
    id: 1,
    title: "The Glass Pavilion",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Urban Oasis",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Minimalist Heights",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "The Atrium",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // This creates the 1-by-1 reveal effect
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function SelectedWorks() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-black">
            Selected Works.
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="group cursor-pointer">
              <Link href={`/projects`}>
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-black mb-1 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 uppercase tracking-widest text-sm font-medium">
                  {project.category}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}