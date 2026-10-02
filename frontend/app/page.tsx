"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ArrowRight, User,
  MessageCircle, ChevronRight, Phone,
  Sparkles, CheckCircle2, Mail, MapPin,
} from 'lucide-react';

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { name: 'Home', path: '/', active: true },
  { name: 'Courses', path: '/courses' },
  { name: 'About Us', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Placement', path: '/placement' },
  { name: 'Contact', path: '/contact' },
];

// ─── AUTHENTIC LOGOS (SVG) ───────────────────────────────────────────────────
function TataLogo() {
  return (
    <div className="flex items-center gap-2 opacity-85 hover:opacity-100 transition-opacity">
      <svg width="34" height="26" viewBox="0 0 34 26" fill="none">
        <ellipse cx="17" cy="13" rx="16" ry="12" stroke="white" strokeWidth="2" />
        <path d="M9 9h16M17 9v11M13 14l4-5 4 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-white font-extrabold text-[15px] tracking-[0.2em]">TATA</span>
    </div>
  );
}

function InfosysLogo() {
  return (
    <div className="opacity-85 hover:opacity-100 transition-opacity">
      <span className="text-white font-bold text-[20px] tracking-tight font-serif italic">
        Infosys
      </span>
    </div>
  );
}

function WiproLogo() {
  return (
    <div className="flex items-center gap-2 opacity-85 hover:opacity-100 transition-opacity">
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="3" fill="#60A5FA" />
        <circle cx="16" cy="8" r="2" fill="white" />
        <circle cx="16" cy="24" r="2" fill="white" />
        <circle cx="8" cy="16" r="2" fill="white" />
        <circle cx="24" cy="16" r="2" fill="white" />
        <circle cx="10" cy="10" r="1.5" fill="#93C5FD" />
        <circle cx="22" cy="22" r="1.5" fill="#93C5FD" />
        <circle cx="10" cy="22" r="1.5" fill="#93C5FD" />
        <circle cx="22" cy="10" r="1.5" fill="#93C5FD" />
        <circle cx="16" cy="3" r="1" fill="#E2E8F0" />
        <circle cx="16" cy="29" r="1" fill="#E2E8F0" />
        <circle cx="3" cy="16" r="1" fill="#E2E8F0" />
        <circle cx="29" cy="16" r="1" fill="#E2E8F0" />
      </svg>
      <span className="text-white font-bold text-[17px] tracking-wider lowercase">wipro</span>
    </div>
  );
}

function CapgeminiLogo() {
  return (
    <div className="flex items-center gap-1.5 opacity-85 hover:opacity-100 transition-opacity">
      <span className="text-white font-semibold text-[17px] tracking-tight">Capgemini</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#60A5FA">
        <path d="M12 2C9.5 6 6 8.5 6 12a6 6 0 0 0 10.5 4.1L12 22l-1.5-3a6 6 0 0 0 7.5-7c0-3.5-3.5-6-6-10z" />
      </svg>
    </div>
  );
}

function HclLogo() {
  return (
    <div className="opacity-85 hover:opacity-100 transition-opacity">
      <span className="text-white font-black italic text-[20px] tracking-widest">
        HCL
      </span>
    </div>
  );
}

function TechMahindraLogo() {
  return (
    <div className="leading-[1.05] opacity-85 hover:opacity-100 transition-opacity text-left">
      <p className="text-white font-bold text-[13px] tracking-wide uppercase">Tech</p>
      <p className="text-white font-extrabold text-[14px] tracking-tight">Mahindra</p>
    </div>
  );
}

// ─── WHATSAPP SVG ICON ────────────────────────────────────────────────────────
function WhatsAppIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

// ─── SOCIAL ICONS ─────────────────────────────────────────────────────────────
function InstagramIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function YoutubeIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

function TwitterIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-[#E5EAF0] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="max-w-[1240px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="shrink-0 flex items-center justify-center">
            <svg width="42" height="30" viewBox="0 0 42 30" fill="none" className="transition-transform group-hover:scale-105">
              <path
                d="M11 26h20a8 8 0 0 0 3-15.4A10.5 10.5 0 0 0 15 6a8.5 8.5 0 0 0-8.2 11.2A7 7 0 0 0 11 26z"
                stroke="#1E6DEB"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="leading-tight">
            <p className="text-[17px] font-extrabold text-[#0B1F3A] tracking-tight">
              Trusted IT Partner
            </p>
            <p className="text-[11px] text-[#64748B] font-medium tracking-wide">
              Learn <span className="text-[#CBD5E1]">|</span> Build <span className="text-[#CBD5E1]">|</span> Grow
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-[14px] font-medium transition-colors relative py-1 ${
                link.active
                  ? 'text-[#1E6DEB] font-semibold'
                  : 'text-[#475569] hover:text-[#1E6DEB]'
              }`}
            >
              {link.name}
              {link.active && (
                <span className="absolute bottom-[-14px] left-0 right-0 h-[2.5px] bg-[#1E6DEB] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1E6DEB] hover:bg-[#1558bf] text-white text-[14px] font-semibold px-5 py-2.5 rounded-[6px] shadow-sm transition-all active:scale-[0.98]"
          >
            <User size={16} strokeWidth={2.2} />
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-[#0B1F3A] hover:bg-slate-100 rounded-md"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-[#E5EAF0]"
          >
            <div className="max-w-[1240px] mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium py-2.5 px-3 rounded-md transition-colors ${
                    link.active
                      ? 'bg-[#EBF3FC] text-[#1E6DEB] font-semibold'
                      : 'text-[#334155] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 bg-[#1E6DEB] text-white text-sm font-semibold py-2.5 rounded-[6px]"
              >
                <User size={15} /> Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative pt-[72px] bg-[#ECF5FE] overflow-hidden min-h-[420px] lg:min-h-[460px] flex items-center">
      {/* Right Desktop Background Image (zoomed out cleanly, desk touching bottom border) */}
      <div className="hidden lg:block absolute bottom-0 right-0 w-[55%] xl:w-[52%] 2xl:w-[50%] h-full pointer-events-none select-none z-0">
        <div className="relative w-full h-full flex items-end justify-end">
          <div className="relative w-full h-full scale-[0.88] xl:scale-[0.84] origin-bottom-right">
            <Image
              src="/hero-laptop.png"
              alt="Learn Web Development & Advertisement Training"
              fill
              priority
              className="object-contain object-right-bottom"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 w-full relative z-10 py-10 lg:py-14">
        <div className="max-w-[520px]">
          {/* Pill Badge */}
          <div className="inline-block bg-[#DCEBFE] text-[#1D4ED8] text-[12.5px] font-semibold px-3.5 py-1.5 rounded-full mb-5 shadow-[0_1px_2px_rgba(30,109,235,0.06)]">
            Best IT Training Institute
          </div>

          {/* Main Headline */}
          <h1 className="text-[36px] sm:text-[44px] lg:text-[48px] font-extrabold text-[#0B1F3A] leading-[1.12] tracking-tight mb-5">
            Learn Web Development<br />
            & <span className="text-[#1E6DEB]">Advertisement</span><br />
            Build Your Future
          </h1>

          {/* Subtitle Description */}
          <p className="text-[#475569] text-[15px] leading-relaxed mb-8 max-w-[460px]">
            Get hands-on training in web development, digital marketing
            and online advertisement. Learn from industry experts, work
            on real projects, and grow your career with us.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2.5 bg-[#1E6DEB] hover:bg-[#1558bf] text-white font-semibold text-[14px] px-6 py-3 rounded-[6px] shadow-sm transition-all hover:shadow-md active:scale-[0.98]"
            >
              <span>Explore Courses</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-[#93C5FD] text-[#0B1F3A] hover:text-[#1E6DEB] font-semibold text-[14px] px-5 py-3 rounded-[6px] transition-all active:scale-[0.98]"
            >
              <MessageCircle size={17} className="text-[#1E6DEB]" />
              <span>Talk to Us</span>
            </Link>
          </div>
        </div>

        {/* Mobile/Tablet Fallback Image */}
        <div className="lg:hidden relative w-full h-[260px] sm:h-[320px] mt-8 rounded-lg overflow-hidden">
          <Image
            src="/hero-laptop.png"
            alt="Learn Web Development & Advertisement Training"
            fill
            priority
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}

// ─── FEATURES STRIP ──────────────────────────────────────────────────────────
function FeaturesStrip() {
  const features = [
    {
      title: 'Expert Trainers',
      desc: 'Learn from industry professionals',
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1E6DEB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <polyline points="7 10 9 8 7 6" />
          <polyline points="17 10 15 8 17 6" />
          <line x1="13" y1="6" x2="11" y2="12" />
        </svg>
      ),
    },
    {
      title: 'Real Projects',
      desc: 'Work on live projects & portfolios',
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1E6DEB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="13" height="16" rx="2" />
          <line x1="2" y1="9" x2="15" y2="9" />
          <circle cx="5" cy="6.5" r="0.7" fill="#1E6DEB" />
          <circle cx="8" cy="6.5" r="0.7" fill="#1E6DEB" />
          <path d="M15 11h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-3" />
          <path d="M17 16v3a2 2 0 0 1-2 2h-1" />
          <circle cx="18" cy="14" r="1" fill="#1E6DEB" />
        </svg>
      ),
    },
    {
      title: 'Certification',
      desc: 'Get recognized with valid certificate',
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1E6DEB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z" />
          <line x1="8" y1="7" x2="16" y2="7" />
          <line x1="8" y1="11" x2="13" y2="11" />
          <circle cx="9.5" cy="16" r="2.2" />
          <path d="M8 18l-1 3 2.5-1 2.5 1-1-3" />
        </svg>
      ),
    },
    {
      title: 'Placement Support',
      desc: 'Guidance for your career growth',
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1E6DEB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="7" r="3" />
          <path d="M3 18v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          <circle cx="17" cy="8" r="2.5" />
          <path d="M16 13a3.5 3.5 0 0 1 3.5 3.5V18" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white border-y border-[#E5EAF0] py-6">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E5EAF0]">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`flex items-center gap-4 py-3 sm:py-0 ${
                i === 0 ? 'sm:pr-5' : i === 3 ? 'sm:pl-5' : 'sm:px-5'
              }`}
            >
              <div className="shrink-0 flex items-center justify-center">
                {f.icon}
              </div>
              <div>
                <p className="text-[15px] font-bold text-[#0B1F3A] leading-snug">
                  {f.title}
                </p>
                <p className="text-[12.5px] text-[#64748B] mt-0.5 leading-snug">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TRUST BAR ───────────────────────────────────────────────────────────────
function TrustBar() {
  return (
    <section className="bg-[#08182B] py-6">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          <div className="shrink-0 text-center lg:text-left lg:border-r lg:border-white/15 lg:pr-10">
            <p className="text-white font-bold text-[18px] tracking-tight">
              Trusted by 1000+ Learners
            </p>
            <p className="text-[#94A3B8] text-[12.5px] mt-0.5">
              Our students work at top companies
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 lg:gap-10 flex-1 w-full">
            <TataLogo />
            <InfosysLogo />
            <WiproLogo />
            <CapgeminiLogo />
            <HclLogo />
            <TechMahindraLogo />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── POPULAR COURSES SECTION ─────────────────────────────────────────────────
function CoursesSection() {
  const courses = [
    {
      title: 'Web Development',
      desc: 'HTML, CSS, JavaScript, React, PHP, MySQL',
      bgClass: 'bg-[#2563EB]',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <circle cx="6" cy="8" r="1" fill="white" />
          <circle cx="10" cy="8" r="1" fill="white" />
          <circle cx="14" cy="8" r="1" fill="white" />
          <circle cx="18" cy="8" r="1" fill="white" />
        </svg>
      ),
    },
    {
      title: 'Digital Marketing',
      desc: 'SEO, SEM, Social Media, Google Ads',
      bgClass: 'bg-[#10B981]',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      ),
    },
    {
      title: 'Advertisement Training',
      desc: 'Google Ads, Facebook Ads, YouTube Ads',
      bgClass: 'bg-[#F59E0B]',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="white" />
          <circle cx="9" cy="10" r="1.5" fill="#F59E0B" />
          <circle cx="15" cy="10" r="1.5" fill="#F59E0B" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-14">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[12px] font-bold text-[#1E6DEB] uppercase tracking-wider mb-1.5">
              OUR TRAINING COURSES
            </p>
            <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0B1F3A] tracking-tight">
              Popular Courses
            </h2>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#1E6DEB] hover:text-[#1558bf] transition-colors group"
          >
            <span>View All Courses</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.title}
              href="/courses"
              className="border border-[#E5EAF0] rounded-[14px] p-5 flex items-center justify-between gap-4 bg-white hover:border-[#BFDBFE] hover:shadow-[0_4px_16px_rgba(30,109,235,0.08)] transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-[12px] ${course.bgClass} flex items-center justify-center shrink-0 shadow-sm`}>
                  {course.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0B1F3A] text-[15px] group-hover:text-[#1E6DEB] transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-[12px] text-[#64748B] mt-0.5 leading-snug">
                    {course.desc}
                  </p>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-[#F0F6FF] group-hover:bg-[#1E6DEB] flex items-center justify-center shrink-0 transition-colors">
                <ChevronRight size={16} className="text-[#1E6DEB] group-hover:text-white transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS DATA ────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 'hotel-management',
    title: 'Hotel Management System',
    category: 'Hospitality & Booking',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    img: '/projects/hotel.jpg',
    description:
      'Complete luxury resort reservation portal featuring room occupancy tracking, guest check-in/out workflows, interactive calendar booking, and automated invoice billing.',
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind'],
    phone: '+919876543210',
    whatsapp: '919876543210',
  },
  {
    id: 'recruitex',
    title: 'RecruiteX - Job Portal',
    category: 'Career & Recruitment',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    img: '/projects/recruitex.jpg',
    description:
      'Next-generation employment platform with smart resume parsing, candidate application status tracking, recruiter talent search, and real-time interview scheduling.',
    tech: ['TypeScript', 'Next.js 15', 'PostgreSQL', 'Prisma', 'Tailwind'],
    phone: '+919876543210',
    whatsapp: '919876543210',
  },
  {
    id: 'book-store',
    title: 'The Book Nook - Book Store',
    category: 'E-Commerce & Digital Media',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    img: '/projects/bookstore.jpg',
    description:
      'Interactive online bookstore with genre shelves, bestseller carousels, audiobook listening previews, instant shopping cart checkout, and reader reviews.',
    tech: ['React', 'Redux', 'Stripe API', 'Express.js', 'Tailwind'],
    phone: '+919876543210',
    whatsapp: '919876543210',
  },
  {
    id: 'event-management',
    title: 'Eventify - Event Management',
    category: 'Ticketing & Concerts',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    img: '/projects/event.jpg',
    description:
      'Live concert & festival booking system featuring interactive venue seat map selection, digital QR code ticketing, schedule lineups, and real-time organizer dashboards.',
    tech: ['Next.js', 'Supabase', 'Framer Motion', 'Tailwind', 'Stripe'],
    phone: '+919876543210',
    whatsapp: '919876543210',
  },
  {
    id: 'portfolio-building',
    title: 'NovaFolio - Portfolio Building',
    category: 'Personal Branding & 3D UI',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    img: '/projects/portfolio.jpg',
    description:
      'Ultra-modern personal brand portfolio for developers and designers with interactive skill charts, project galleries, sleek dark-mode glassmorphism, and instant booking modal.',
    tech: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
    phone: '+919876543210',
    whatsapp: '919876543210',
  },
];

// ─── OUR PROJECTS SECTION ─────────────────────────────────────────────────────
function ProjectsSection() {
  return (
    <section className="bg-[#F8FAFC] py-20 border-t border-[#E5EAF0]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3FC] text-[#1E6DEB] text-[12px] font-bold tracking-wider uppercase mb-2">
              <Sparkles size={13} className="text-[#1E6DEB]" />
              <span>Real-World Projects</span>
            </div>
            <h2 className="text-[30px] sm:text-[36px] font-extrabold text-[#0B1F3A] tracking-tight">
              Our Featured Projects
            </h2>
            <p className="text-[#64748B] text-[14.5px] mt-1.5 max-w-xl">
              Explore live enterprise applications designed, developed, and deployed by our team and students with modern technologies.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-[#CBD5E1] hover:border-[#1E6DEB] text-[#0B1F3A] hover:text-[#1E6DEB] font-semibold text-[13.5px] px-5 py-2.5 rounded-[8px] transition-all self-start md:self-auto shadow-sm"
          >
            <span>Request Project Demo</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 5 Project Cards Grid (Image > 55% height, content tightly compressed, twin Call & WhatsApp buttons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#E5EAF0] rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(30,109,235,0.1)] hover:border-[#BFDBFE] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Image Preview - Takes MORE than half the card height */}
              <div className="relative h-[275px] sm:h-[290px] w-full overflow-hidden bg-slate-100">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className={`inline-block px-3 py-1 rounded-md text-[11px] font-bold border backdrop-blur-md bg-white/95 shadow-sm ${project.badgeColor}`}>
                    {project.category}
                  </span>
                </div>

                {/* Live Indicator */}
                <div className="absolute top-3.5 right-3.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-semibold bg-emerald-500 text-white shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Live Demo
                  </span>
                </div>

                {/* Bottom title overlay */}
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-white text-[12px] font-medium tracking-wide drop-shadow-sm opacity-90">
                    Production Build
                  </p>
                </div>
              </div>

              {/* Compressed Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[17px] font-extrabold text-[#0B1F3A] group-hover:text-[#1E6DEB] transition-colors leading-snug mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-[12.5px] text-[#64748B] leading-snug mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10.5px] font-semibold bg-[#F1F5F9] text-[#475569] px-2 py-0.5 rounded-md border border-slate-200/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Compressed Action Buttons: Phone & WhatsApp (No Arrow) */}
                <div className="pt-3 border-t border-[#F1F5F9] flex items-center gap-2">
                  {/* Phone Button */}
                  <a
                    href={`tel:${project.phone}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-[9px] bg-[#EBF3FC] hover:bg-[#1E6DEB] text-[#1E6DEB] hover:text-white transition-all text-[12px] font-bold shadow-sm active:scale-[0.98]"
                    title={`Call about ${project.title}`}
                  >
                    <Phone size={13} strokeWidth={2.4} />
                    <span>Call</span>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${project.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(project.title)}%20project`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-[9px] bg-[#ECFDF5] hover:bg-[#25D366] text-[#059669] hover:text-white transition-all text-[12px] font-bold shadow-sm active:scale-[0.98]"
                    title={`Chat on WhatsApp about ${project.title}`}
                  >
                    <WhatsAppIcon size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* 6th Card: Custom Project Inquiry (Symmetrically Completes 3x2 Grid) */}
          <div className="bg-gradient-to-br from-[#0B1F3A] via-[#0D264A] to-[#1E3A8A] rounded-[20px] p-6 text-white flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(11,31,58,0.25)] hover:-translate-y-1.5 transition-all duration-300 border border-blue-900/40">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-[11px] font-semibold mb-3 backdrop-blur-sm border border-white/10">
                <Sparkles size={12} className="text-yellow-400" />
                <span>Custom Software</span>
              </div>
              <h3 className="text-[20px] font-extrabold tracking-tight leading-snug mb-2">
                Have a Custom Project in Mind?
              </h3>
              <p className="text-blue-100/80 text-[12.5px] leading-relaxed mb-4">
                Learn how to build these full-stack enterprise web platforms step-by-step or hire our expert developers to build and launch your custom software.
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-[12px] text-blue-100/95 font-medium">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>1-on-1 Live Project Mentorship</span>
                </div>
                <div className="flex items-center gap-2 text-[12px] text-blue-100/95 font-medium">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Production Deployment & Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-[12px] text-blue-100/95 font-medium">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Complete Source Code & Placement</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/15 flex items-center gap-2">
              <a
                href="tel:+919876543210"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-[9px] bg-white hover:bg-blue-50 text-[#0B1F3A] font-bold text-[12px] transition-all shadow-sm active:scale-95"
              >
                <Phone size={13} className="text-[#1E6DEB]" />
                <span>Call Us</span>
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20discuss%20a%20custom%20project%20or%20training"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-[9px] bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-[12px] transition-all shadow-sm active:scale-95"
              >
                <WhatsAppIcon size={14} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── MODERN FOOTER ────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#08182B] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand Info (Col 1 & 2) */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="shrink-0 flex items-center justify-center">
                <svg width="40" height="28" viewBox="0 0 42 30" fill="none" className="transition-transform group-hover:scale-105">
                  <path
                    d="M11 26h20a8 8 0 0 0 3-15.4A10.5 10.5 0 0 0 15 6a8.5 8.5 0 0 0-8.2 11.2A7 7 0 0 0 11 26z"
                    stroke="#60A5FA"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="leading-tight">
                <p className="text-[18px] font-extrabold text-white tracking-tight">
                  Trusted IT Partner
                </p>
                <p className="text-[11px] text-blue-200/80 font-medium tracking-wide">
                  Learn <span className="text-blue-400/50">|</span> Build <span className="text-blue-400/50">|</span> Grow
                </p>
              </div>
            </Link>

            <p className="text-[#94A3B8] text-[13.5px] leading-relaxed max-w-sm mb-6">
              Leading IT training & software development institute empowering individuals and businesses through hands-on web development, full-stack engineering, and digital advertising mastery.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5">
              {[
                { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
                { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com' },
                { name: 'YouTube', icon: YoutubeIcon, href: 'https://youtube.com' },
                { name: 'GitHub', icon: GithubIcon, href: 'https://github.com' },
                { name: 'Twitter', icon: TwitterIcon, href: 'https://twitter.com' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#1E6DEB] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-white/5 hover:border-[#1E6DEB] shadow-sm hover:scale-105"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Courses (Col 3) */}
          <div>
            <h4 className="text-[15px] font-bold text-white tracking-tight mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E6DEB]" />
              Popular Courses
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#94A3B8]">
              <li>
                <Link href="/courses" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Digital Marketing & SEO
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Advertisement & Google Ads
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  React & Next.js Mastery
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Full Stack MERN Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Live Projects (Col 4) */}
          <div>
            <h4 className="text-[15px] font-bold text-white tracking-tight mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              Student Projects
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#94A3B8]">
              <li>
                <Link href="/projects" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Hotel Management System
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  RecruiteX Job Portal
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Online Book Store
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Eventify Platform
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  NovaFolio Showcase
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information (Col 5) */}
          <div>
            <h4 className="text-[15px] font-bold text-white tracking-tight mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              Get in Touch
            </h4>
            <div className="space-y-3.5 text-[13px] text-[#94A3B8]">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-md bg-white/5 group-hover:bg-[#1E6DEB] flex items-center justify-center shrink-0 transition-colors">
                  <Phone size={13} className="text-blue-400 group-hover:text-white" />
                </div>
                <span>+91 98765 43210</span>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-md bg-white/5 group-hover:bg-[#25D366] flex items-center justify-center shrink-0 transition-colors">
                  <WhatsAppIcon size={14} className="text-emerald-400 group-hover:text-white" />
                </div>
                <span>WhatsApp Support</span>
              </a>

              <a
                href="mailto:contact@trusteditpartner.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-md bg-white/5 group-hover:bg-[#1E6DEB] flex items-center justify-center shrink-0 transition-colors">
                  <Mail size={13} className="text-blue-400 group-hover:text-white" />
                </div>
                <span>contact@trusteditpartner.com</span>
              </a>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={13} className="text-blue-400" />
                </div>
                <span className="leading-snug">Tech Park, Sector 62, Noida, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12.5px] text-[#64748B]">
          <p>© {new Date().getFullYear()} Trusted IT Partner. All rights reserved. Design and develop by saarp technology pvt ltd.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#94A3B8] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#94A3B8] transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="hover:text-[#94A3B8] transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── HOMEPAGE MAIN ────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navbar />
      <main>
        <Hero />
        <FeaturesStrip />
        <TrustBar />
        <CoursesSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
