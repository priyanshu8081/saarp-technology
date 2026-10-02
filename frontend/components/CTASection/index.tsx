"use client";

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-24 bg-[#0B1F3A] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#2563EB] rounded-full blur-3xl opacity-10" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/20 border border-[#2563EB]/30 text-[#93c5fd] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <MessageSquare size={14} />
            Let's Talk
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to Transform<br />Your IT?
          </h2>
          <p className="text-[#94a3b8] text-lg mb-10 leading-relaxed">
            Let's discuss your technology challenges and build a solution that works for your
            business — from strategy to execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)]"
            >
              Talk to an Expert <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all border border-white/10"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
