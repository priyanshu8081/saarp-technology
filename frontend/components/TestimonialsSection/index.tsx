"use client";

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'The team helped us modernize our infrastructure and significantly improve the reliability of our technology environment. We saw measurable results within the first quarter.',
    name: 'Rajesh Kumar',
    role: 'CTO, FinServe India',
    initials: 'RK',
  },
  {
    quote:
      'Saarp Technology delivered a robust and scalable platform on time. Their communication and technical depth impressed us throughout the engagement.',
    name: 'Priya Sharma',
    role: 'CEO, HealthPlus Solutions',
    initials: 'PS',
  },
  {
    quote:
      'Their managed IT services reduced our system downtime to near zero. The team is responsive, proactive, and genuinely invested in our success.',
    name: 'Aman Singh',
    role: 'COO, LogiTrack Systems',
    initials: 'AS',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <span className="section-tag">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#64748B] max-w-lg mx-auto">
            Don't take our word for it — hear directly from businesses we've helped grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card p-7 flex flex-col"
            >
              <Quote size={28} className="text-[#2563EB] opacity-50 mb-4" />
              <p className="text-[#64748B] text-sm leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 border-t border-[#E5EAF0] pt-5">
                <div className="w-10 h-10 rounded-full bg-[#0B1F3A] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-[#0B1F3A] text-sm">{t.name}</div>
                  <div className="text-xs text-[#64748B]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
