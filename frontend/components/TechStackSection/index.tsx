"use client";

import { motion } from 'framer-motion';

const technologies = [
  { name: 'AWS', category: 'Cloud' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'GCP', category: 'Cloud' },
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: '.NET', category: 'Backend' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Terraform', category: 'DevOps' },
];

const TechStackSection = () => {
  return (
    <section className="py-24 bg-[#F7F9FC]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <span className="section-tag">Tech Stack</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mt-2 mb-4">
            Powered by Modern Technology
          </h2>
          <p className="text-[#64748B] max-w-lg mx-auto">
            We work with best-in-class tools and platforms to build scalable, maintainable solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="card px-6 py-3 flex items-center gap-3 cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-[#EAF2FF] flex items-center justify-center text-xs font-bold text-[#2563EB]">
                {tech.name.slice(0, 2)}
              </div>
              <div>
                <div className="text-sm font-semibold text-[#0B1F3A]">{tech.name}</div>
                <div className="text-[10px] text-[#64748B]">{tech.category}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
