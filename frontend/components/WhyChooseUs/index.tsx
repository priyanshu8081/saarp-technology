"use client";

import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, Headphones } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Skilled technology professionals with experience across modern IT environments and industries.',
  },
  {
    icon: Target,
    title: 'Business-Focused',
    description: 'We build solutions around measurable business requirements rather than technology alone.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Infrastructure and applications designed to grow alongside your organization and evolving needs.',
  },
  {
    icon: Headphones,
    title: 'Reliable Support',
    description: 'Fast, dependable technical support and account management when your business needs it most.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#F7F9FC]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mt-2 mb-4">
              Technology. Expertise. Results.
            </h2>
            <p className="text-[#64748B] mb-8 leading-relaxed">
              We combine technical depth with business understanding to deliver IT solutions that
              actually move the needle. Not just features — outcomes.
            </p>
            <div className="flex flex-wrap gap-3">
              {['ISO Aligned Processes', 'Agile Delivery', 'Transparent Pricing'].map((tag) => (
                <span
                  key={tag}
                  className="bg-white border border-[#E5EAF0] text-sm text-[#0B1F3A] font-medium px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card p-6"
              >
                <div className="w-10 h-10 bg-[#EAF2FF] rounded-xl flex items-center justify-center mb-4">
                  <item.icon size={18} className="text-[#2563EB]" />
                </div>
                <h3 className="font-bold text-[#0B1F3A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
