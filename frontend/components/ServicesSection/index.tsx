"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Cloud, Shield, Settings, Code2, Bot } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Monitor,
    title: 'IT Consulting',
    description: 'Strategic technology consulting designed around your business goals and growth plans.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Secure, scalable cloud infrastructure and seamless migration services for modern teams.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your systems, applications, and data against evolving threats with proactive security.',
  },
  {
    icon: Settings,
    title: 'Managed IT Services',
    description: 'Reliable monitoring, maintenance, support, and infrastructure management around the clock.',
  },
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Custom web and business applications built precisely for your specific requirements.',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Leverage artificial intelligence and automation to improve productivity and efficiency.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="section-tag">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mt-2 mb-4">
            Technology Solutions That Move<br />Your Business Forward
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto">
            End-to-end IT services tailored to help companies of all sizes build, scale, and secure
            their technology infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card p-7 group cursor-pointer"
            >
              <div className="w-11 h-11 bg-[#EAF2FF] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2563EB] transition-colors duration-300">
                <svc.icon size={20} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{svc.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-4">{svc.description}</p>
              <Link
                href="/services"
                className="text-sm font-semibold text-[#2563EB] flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
