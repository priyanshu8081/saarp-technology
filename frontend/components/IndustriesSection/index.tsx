"use client";

import { motion } from 'framer-motion';
import { Heart, DollarSign, ShoppingCart, Factory, GraduationCap, Truck, Briefcase, Rocket } from 'lucide-react';

const industries = [
  { icon: Heart, name: 'Healthcare', desc: 'Secure and compliant health tech solutions.' },
  { icon: DollarSign, name: 'Finance', desc: 'Scalable fintech infrastructure and automation.' },
  { icon: ShoppingCart, name: 'Retail', desc: 'Omnichannel platforms and commerce systems.' },
  { icon: Factory, name: 'Manufacturing', desc: 'Smart factory and IoT integration services.' },
  { icon: GraduationCap, name: 'Education', desc: 'Digital learning platforms and LMS solutions.' },
  { icon: Truck, name: 'Logistics', desc: 'Real-time tracking and supply chain tech.' },
  { icon: Briefcase, name: 'Professional Services', desc: 'Workflow tools and client management systems.' },
  { icon: Rocket, name: 'Startups', desc: 'Rapid MVP development and scalable architecture.' },
];

const IndustriesSection = () => {
  return (
    <section className="py-24 bg-[#F7F9FC]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="section-tag">Industries</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mt-2 mb-4">
            Technology Solutions for Every Industry
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto">
            We bring domain expertise and technical excellence to every sector we serve.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="card p-6 group cursor-pointer"
            >
              <div className="w-11 h-11 bg-[#EAF2FF] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-colors duration-300">
                <ind.icon size={20} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-[#0B1F3A] mb-1.5">{ind.name}</h3>
              <p className="text-sm text-[#64748B] leading-snug">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
