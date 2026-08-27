import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-white border-t border-gray-200 py-10 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand info with 4-dot google logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
            <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
            <span className="w-2 h-2 rounded-full bg-[#FBBC05]" />
            <span className="w-2 h-2 rounded-full bg-[#34A853]" />
          </div>
          <span className="text-sm font-semibold text-gray-800">
            {personal.name}
          </span>
          <span className="text-xs text-gray-400">© {new Date().getFullYear()}</span>
        </div>

        {/* Center: Built with dedication */}
        <div className="text-xs text-gray-500 flex items-center gap-1.5">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-[#EA4335] fill-[#EA4335]" />
          <span>using React, Tailwind CSS & Motion</span>
        </div>

        {/* Right: Back to top button */}
        <button
          id="footer-back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors shadow-xs"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
