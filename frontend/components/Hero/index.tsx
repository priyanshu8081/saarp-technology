"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const highlights = [
  'Cloud & Infrastructure',
  'Cybersecurity',
  'AI & Automation',
  '24/7 Managed Support',
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-[68px] overflow-hidden bg-white">
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #E5EAF0 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Gradient blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#EAF2FF] rounded-full blur-3xl opacity-50 -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EAF2FF] rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-6 md:px-12 z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="section-tag">Trusted IT Partner</span>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-[#0B1F3A] leading-[1.1] mb-6 tracking-tight">
              Build Better <span className="text-[#2563EB]">Technology.</span>{' '}
              Drive Better Business.
            </h1>
            <p className="text-lg text-[#64748B] mb-8 max-w-xl leading-relaxed">
              We deliver reliable IT solutions, cloud services, cybersecurity, and digital
              transformation strategies that help businesses operate smarter and grow faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact" className="btn-primary text-base px-6 py-3">
                Get Started <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="btn-outline text-base px-6 py-3">
                Explore Services
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#64748B]">
                  <CheckCircle2 size={16} className="text-[#16A34A]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-2xl border border-[#E5EAF0] shadow-xl p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs text-[#64748B] ml-2">Infrastructure Dashboard</span>
                </div>

                {/* Node diagram */}
                <div className="relative h-56 flex items-center justify-center mb-6">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* Lines */}
                    <line x1="200" y1="100" x2="100" y2="40" stroke="#E5EAF0" strokeWidth="2" />
                    <line x1="200" y1="100" x2="300" y2="40" stroke="#E5EAF0" strokeWidth="2" />
                    <line x1="200" y1="100" x2="80" y2="160" stroke="#E5EAF0" strokeWidth="2" />
                    <line x1="200" y1="100" x2="320" y2="160" stroke="#E5EAF0" strokeWidth="2" />
                    <line x1="200" y1="100" x2="200" y2="20" stroke="#2563EB" strokeWidth="2" strokeDasharray="4" />
                    
                    {/* Animated dots on lines */}
                    <circle cx="150" cy="70" r="3" fill="#2563EB" opacity="0.6">
                      <animateMotion dur="2s" repeatCount="indefinite" path="M50 -60 L-50 60" />
                    </circle>
                    <circle cx="150" cy="70" r="3" fill="#2563EB" opacity="0.6">
                      <animateMotion dur="2.5s" repeatCount="indefinite" path="M100 -60 L0 60" />
                    </circle>

                    {/* Center node */}
                    <circle cx="200" cy="100" r="28" fill="#2563EB" />
                    <text x="200" y="105" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">CORE</text>

                    {/* Outer nodes */}
                    <circle cx="100" cy="40" r="20" fill="#EAF2FF" stroke="#2563EB" strokeWidth="1.5" />
                    <text x="100" y="44" textAnchor="middle" fill="#2563EB" fontSize="9">Cloud</text>
                    
                    <circle cx="300" cy="40" r="20" fill="#EAF2FF" stroke="#2563EB" strokeWidth="1.5" />
                    <text x="300" y="44" textAnchor="middle" fill="#2563EB" fontSize="9">AI</text>

                    <circle cx="80" cy="160" r="20" fill="#EAF2FF" stroke="#2563EB" strokeWidth="1.5" />
                    <text x="80" y="164" textAnchor="middle" fill="#2563EB" fontSize="9">Sec</text>

                    <circle cx="320" cy="160" r="20" fill="#EAF2FF" stroke="#2563EB" strokeWidth="1.5" />
                    <text x="320" y="164" textAnchor="middle" fill="#2563EB" fontSize="9">Data</text>

                    <circle cx="200" cy="20" r="16" fill="#0B1F3A" />
                    <text x="200" y="24" textAnchor="middle" fill="white" fontSize="8">API</text>
                  </svg>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Uptime', value: '99.9%', color: '#16A34A' },
                    { label: 'Clients', value: '50+', color: '#2563EB' },
                    { label: 'Projects', value: '100+', color: '#0B1F3A' },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#F7F9FC] rounded-xl p-3 text-center">
                      <div className="text-xl font-bold" style={{ color: s.color }}>{s.value}</div>
                      <div className="text-xs text-[#64748B]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-white border border-[#E5EAF0] shadow-lg rounded-xl px-4 py-2 flex items-center gap-2 z-20">
                <div className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                <span className="text-xs font-semibold text-[#172033]">All Systems Operational</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#2563EB] shadow-lg rounded-xl px-4 py-2 z-20">
                <span className="text-xs font-semibold text-white">24/7 Support Active</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
