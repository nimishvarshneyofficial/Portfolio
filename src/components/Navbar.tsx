import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Briefcase, Award, FileText, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentTime, setCurrentTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timezone, setTimezone] = useState('Asia/Kolkata');

  // Live ticking clock and timezone detection
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-GB', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    // Detect user timezone or default to Asia/Kolkata
    try {
      const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (userTz) setTimezone(userTz);
    } catch {
      setTimezone('Asia/Kolkata');
    }

    return () => clearInterval(timer);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-3.5 h-3.5" />, href: '#home' },
    { id: 'about', label: 'About', icon: <User className="w-3.5 h-3.5" />, href: '#about' },
    { id: 'projects', label: 'Work', icon: <Briefcase className="w-3.5 h-3.5" />, href: '#projects' },
    { id: 'skills', label: 'Skills', icon: <Award className="w-3.5 h-3.5" />, href: '#skills' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left Side: Timezone */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-700 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200/70 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] animate-pulse" />
          <span>{timezone}</span>
        </div>

        {/* Center: Floating Island Nav Pill (matching the screenshot) */}
        <nav
          id="main-floating-navbar"
          className="hidden md:flex items-center gap-1 bg-white/85 backdrop-blur-xl px-2 py-1.5 rounded-full border border-gray-200/90 shadow-md transition-all hover:shadow-lg"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                id={`nav-item-${item.id}`}
                href={item.href}
                className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-gray-900 bg-gray-100 shadow-2xs'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            );
          })}

          {/* Resume button in pill */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[#EA4335]" />
            <span>Resume</span>
          </button>
        </nav>

        {/* Right Side: Live Digital Clock */}
        <div className="flex items-center gap-2">
          <div className="text-xs font-mono font-medium text-gray-800 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gray-200/70 shadow-xs tabular-nums">
            {currentTime || '00:00:00'}
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-gray-700 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full shadow-xs"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 max-w-sm mx-auto bg-white/95 backdrop-blur-xl border border-gray-200/90 rounded-2xl p-3 shadow-xl pointer-events-auto"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-[#1a73e8]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-50 text-left"
              >
                <FileText className="w-3.5 h-3.5 text-[#EA4335]" />
                <span>View Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
