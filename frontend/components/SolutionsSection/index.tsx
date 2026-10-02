"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const solutions = [
  'Digital Transformation',
  'Cloud Migration',
  'Infrastructure Modernization',
  'Cybersecurity',
  'Data & Analytics',
  'AI & Automation',
];

const SolutionsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mt-2 mb-4">
              Built for Modern Businesses
            </h2>
            <p className="text-[#64748B] mb-8 leading-relaxed">
              Whether you're a startup scaling fast or an enterprise modernizing legacy systems, our
              solutions are engineered to meet you where you are.
            </p>
            <ul className="space-y-3 mb-8">
              {solutions.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#172033] font-medium">
                  <CheckCircle2 size={18} className="text-[#16A34A] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/solutions" className="btn-primary">
              View All Solutions <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right — mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="bg-[#F7F9FC] rounded-2xl border border-[#E5EAF0] p-6 shadow-sm">
              {/* Mock browser bar */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="flex-1 bg-white border border-[#E5EAF0] rounded-md h-6 mx-4 flex items-center px-3">
                  <span className="text-[10px] text-[#64748B]">app.saarptechnology.com</span>
                </div>
              </div>
              {/* Dashboard mockup */}
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Cloud Health', value: '98%', color: '#16A34A' },
                    { label: 'Security Score', value: 'A+', color: '#2563EB' },
                    { label: 'Incidents', value: '0', color: '#0B1F3A' },
                  ].map((m) => (
                    <div key={m.label} className="bg-white rounded-xl p-3 border border-[#E5EAF0] text-center">
                      <div className="text-lg font-bold" style={{ color: m.color }}>{m.value}</div>
                      <div className="text-[10px] text-[#64748B]">{m.label}</div>
                    </div>
                  ))}
                </div>
                {/* Bars */}
                <div className="bg-white rounded-xl border border-[#E5EAF0] p-4">
                  <div className="text-xs font-semibold text-[#0B1F3A] mb-3">Infrastructure Load</div>
                  {['Compute', 'Storage', 'Network', 'Database'].map((item, i) => (
                    <div key={item} className="mb-2">
                      <div className="flex justify-between text-[10px] text-[#64748B] mb-1">
                        <span>{item}</span>
                        <span>{[42, 67, 28, 55][i]}%</span>
                      </div>
                      <div className="h-1.5 bg-[#F7F9FC] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#2563EB]"
                          style={{ width: `${[42, 67, 28, 55][i]}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Status list */}
                <div className="bg-white rounded-xl border border-[#E5EAF0] p-4">
                  <div className="text-xs font-semibold text-[#0B1F3A] mb-3">Service Status</div>
                  {['API Gateway', 'Auth Service', 'Data Pipeline', 'ML Models'].map((svc) => (
                    <div key={svc} className="flex items-center justify-between py-1.5 border-b border-[#F7F9FC] last:border-0">
                      <span className="text-xs text-[#172033]">{svc}</span>
                      <span className="text-[10px] font-medium text-[#16A34A] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] inline-block animate-pulse" />
                        Operational
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
