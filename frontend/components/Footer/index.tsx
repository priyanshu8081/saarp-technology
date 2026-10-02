import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div>
                <div className="text-sm font-bold tracking-wide">SAARP TECHNOLOGY</div>
                <div className="text-[10px] text-[#64748B] tracking-widest uppercase">Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs mb-6">
              Building reliable IT solutions, cloud infrastructure, and digital transformation
              strategies for businesses across India.
            </p>
            <div className="flex gap-4">
              {[
                {
                  href: '#',
                  label: 'LinkedIn',
                  svg: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                },
                {
                  href: '#',
                  label: 'GitHub',
                  svg: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  ),
                },
                {
                  href: '#',
                  label: 'X / Twitter',
                  svg: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ),
                },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#2563EB] flex items-center justify-center transition-colors duration-200 text-[#94a3b8] hover:text-white"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {['About', 'Careers', 'Case Studies', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {['IT Consulting', 'Cloud Solutions', 'Cybersecurity', 'Managed IT', 'Software Dev'].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-[#94a3b8]">
                <Mail size={14} className="mt-0.5 flex-shrink-0" />
                contact@saarptechnology.com
              </li>
              <li className="flex items-start gap-2 text-sm text-[#94a3b8]">
                <Phone size={14} className="mt-0.5 flex-shrink-0" />
                +91 XXXXX XXXXX
              </li>
              <li className="flex items-start gap-2 text-sm text-[#94a3b8]">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                New Delhi, India
              </li>
            </ul>
            <div className="mt-5 space-y-2">
              {['Blog', 'Documentation', 'FAQs', 'Support'].map((item) => (
                <div key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748B]">
            © 2026 Saarp Technology Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[#64748B]">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
