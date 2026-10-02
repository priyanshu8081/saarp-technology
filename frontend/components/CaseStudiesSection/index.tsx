"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const cases = [
  {
    industry: 'Financial Services',
    title: 'Cloud Infrastructure Modernization',
    description:
      'Migrated legacy on-premise infrastructure to a fully managed cloud environment, improving reliability and development velocity.',
    result: '40% reduction in infrastructure costs, 99.99% uptime achieved.',
    color: '#2563EB',
  },
  {
    industry: 'Healthcare',
    title: 'Secure Patient Data Platform',
    description:
      'Built a HIPAA-compliant data management system to centralize patient records and streamline clinical workflows.',
    result: '60% faster data retrieval, full compliance with healthcare data standards.',
    color: '#16A34A',
  },
  {
    industry: 'Logistics',
    title: 'Real-Time Tracking & Analytics',
    description:
      'Developed an end-to-end shipment tracking platform with live dashboards and predictive delivery analytics.',
    result: '30% improvement in on-time deliveries, complete supply chain visibility.',
    color: '#0B1F3A',
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="section-tag">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mt-2 mb-4">
            Real Solutions. Real Business Impact.
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto">
            A selection of projects where our technology decisions made a measurable difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card p-7 flex flex-col"
            >
              <div
                className="text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full w-fit"
                style={{ background: `${c.color}15`, color: c.color }}
              >
                {c.industry}
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">{c.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-4 flex-1">{c.description}</p>
              <div
                className="text-sm font-semibold p-3 rounded-lg mb-5"
                style={{ background: `${c.color}10`, color: c.color }}
              >
                📈 {c.result}
              </div>
              <Link
                href="/case-studies"
                className="text-sm font-semibold text-[#2563EB] flex items-center gap-1 hover:gap-2 transition-all"
              >
                View Case Study <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
