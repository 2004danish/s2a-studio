"use client";

import { motion, Variants } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Concept",
    description: "Understanding your vision, analyzing the site, and establishing the foundational architectural narrative."
  },
  {
    number: "02",
    title: "Design Development",
    description: "Translating initial concepts into detailed spatial arrangements, selecting materials, and refining the aesthetics."
  },
  {
    number: "03",
    title: "Technical Documentation",
    description: "Creating rigorous, precise construction drawings and engineering plans for seamless, scalable execution."
  },
  {
    number: "04",
    title: "Realization",
    description: "Overseeing the construction process to ensure the built environment perfectly matches the original design intent."
  }
];

// Added ': Variants' right here!
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Added ': Variants' right here!
const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Process() {
  return (
    <section className="py-32 bg-gray-900 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            Our Process.
          </h2>
          <p className="text-gray-400 max-w-xl text-lg font-light">
            A methodical, transparent approach to architectural design. We treat every project as a unique intersection of art, engineering, and nature.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={itemVariants} className="relative">
              <span className="text-6xl font-bold text-gray-800 absolute -top-8 -left-4 z-0 pointer-events-none select-none">
                {step.number}
              </span>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}