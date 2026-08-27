import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUpRight, Sparkles, Code2, Bot, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData;

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-8 bg-white overflow-hidden"
    >
      {/* Soft Ambient Mint & Emerald Radial Glow (as seen in the screenshot) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 40%, rgba(110, 231, 183, 0.28) 0%, rgba(167, 243, 208, 0.18) 35%, rgba(240, 253, 244, 0.1) 65%, transparent 100%)',
        }}
      />

      {/* Subtle secondary Google color soft blurs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left / Main Profile Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Main Name Heading (large bold typography from screenshot) */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-950 leading-[0.95] select-none">
              {personal.name}
            </h1>

            {/* Subtitle Bio text with clean tracking & comfortable line-height */}
            <p className="text-base sm:text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-xl">
              Software developer & AI prompt engineer building modern web applications, digital products, and intelligent workflows — from responsive React interfaces to full-stack systems.
            </p>

            {/* Mint / Green Tag Pills (exact style from screenshot) */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#2ee09b]/25 text-[#065f46] border border-[#2ee09b]/40 shadow-2xs hover:bg-[#2ee09b]/35 transition-colors">
                <Bot className="w-3.5 h-3.5 text-[#047857]" />
                AI Prompt Engineering
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#2ee09b]/25 text-[#065f46] border border-[#2ee09b]/40 shadow-2xs hover:bg-[#2ee09b]/35 transition-colors">
                <Code2 className="w-3.5 h-3.5 text-[#047857]" />
                Full-Stack Developer
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#2ee09b]/25 text-[#065f46] border border-[#2ee09b]/40 shadow-2xs hover:bg-[#2ee09b]/35 transition-colors">
                <Terminal className="w-3.5 h-3.5 text-[#047857]" />
                250+ Problems Solved
              </span>
            </div>

            {/* Action Row: 'About me' avatar pill + Social Icons */}
            <div className="flex items-center gap-4 pt-3">
              {/* About Me Pill with Professional Avatar Icon/Thumbnail */}
              <button
                id="hero-about-me-pill-btn"
                onClick={scrollToAbout}
                className="group flex items-center gap-2.5 px-4 py-2 bg-gray-100/90 hover:bg-gray-200/90 text-gray-900 rounded-full text-sm font-semibold border border-gray-200/80 shadow-xs hover:shadow-sm transition-all duration-200"
              >
                {/* Avatar Icon Thumbnail */}
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-gray-800 to-gray-600 text-white flex items-center justify-center text-[10px] font-bold shadow-2xs overflow-hidden border border-white">
                  <span className="tracking-tighter">NV</span>
                </div>
                <span>About me</span>
              </button>

              {/* Minimalist Social Icons */}
              <div className="flex items-center gap-2 text-gray-700">
                <a
                  id="hero-social-github"
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-800 hover:text-black transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  id="hero-social-linkedin"
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-800 hover:text-[#0077b5] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  id="hero-social-mail"
                  href={`mailto:${personal.email}`}
                  aria-label="Email"
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-800 hover:text-[#EA4335] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sleek '✕' Divider and Stylized Bold Monogram/Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-start gap-6 sm:gap-10 pt-4 lg:pt-0"
          >
            {/* Minimalist ✕ Divider */}
            <div className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-400 select-none">
              ✕
            </div>

            {/* High-Tech Stylized Brand / Project Logo (like STARX in screenshot) */}
            <div className="flex flex-col items-start group">
              <a
                href="#projects"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-gray-950 hover:text-[#1a73e8] transition-colors duration-200 flex items-center gap-2 select-none"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  letterSpacing: '-0.06em',
                }}
              >
                <span>STARIGO</span>
                <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-[#1a73e8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all opacity-0 group-hover:opacity-100" />
              </a>
              <div className="text-xs font-mono font-medium text-gray-400 tracking-widest uppercase flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
                Featured Productivity Hub
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
