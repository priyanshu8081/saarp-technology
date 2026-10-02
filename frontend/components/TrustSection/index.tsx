"use client";

import { motion } from 'framer-motion';
import { Users, Briefcase, Server, Clock } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '100+', label: 'Projects Delivered', color: '#2563EB' },
  { icon: Users, value: '50+', label: 'Happy Clients', color: '#0B1F3A' },
  { icon: Server, value: '99.9%', label: 'Uptime SLA', color: '#16A34A' },
  { icon: Clock, value: '24/7', label: 'Expert Support', color: '#2563EB' },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-[#F7F9FC] border-y border-[#E5EAF0]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <span className="section-tag">Why Businesses Trust Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mt-2 mb-4">
            Trusted Technology Partner
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-base">
            With a track record of delivering reliable IT solutions, we've helped businesses across
            industries modernize their technology infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card p-8 text-center"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${stat.color}15` }}
              >
                <stat.icon size={22} style={{ color: stat.color }} />
              </div>
              <div className="text-4xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-sm text-[#64748B] font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
