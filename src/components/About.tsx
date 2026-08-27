import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { Code, Server, Smartphone, Award, Lightbulb, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: <Code className="w-5 h-5 text-[#4285F4]" />,
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      title: 'Frontend Engineering',
      desc: 'Expertise in React, TypeScript, Next.js, and crafting smooth interactive design systems.',
    },
    {
      icon: <Server className="w-5 h-5 text-[#EA4335]" />,
      bg: 'bg-red-50',
      border: 'border-red-100',
      title: 'Backend & APIs',
      desc: 'Building scalable RESTful APIs, database architectures, and serverless workflows.',
    },
    {
      icon: <Smartphone className="w-5 h-5 text-[#34A853]" />,
      bg: 'bg-green-50',
      border: 'border-green-100',
      title: 'Responsive & Accessible',
      desc: 'Mobile-first, cross-browser compatibility with high performance metrics.',
    },
    {
      icon: <Award className="w-5 h-5 text-[#FBBC05]" />,
      bg: 'bg-amber-50',
      border: 'border-yellow-100',
      title: 'Competitive Spirit',
      desc: 'Hackathon participant and problem solver with 250+ DSA problems solved.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-[#f8fafd] border-y border-gray-200/70 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a73e8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Lightbulb className="w-3.5 h-3.5 text-[#FBBC05]" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Passionate about building fast, intuitive web applications
          </h2>
          <div className="h-1 w-16 bg-[#4285F4] rounded-full mx-auto mt-4" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Bio card with Google accents */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-xs relative overflow-hidden"
          >
            {/* Top decorative rainbow line */}
            <div className="absolute top-0 left-0 right-0 h-1 google-border-gradient" />

            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>A brief introduction</span>
              <HeartHandshake className="w-5 h-5 text-[#EA4335]" />
            </h3>

            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>{personal.bio}</p>
              <p>
                I thrive in fast-paced collaborative environments, turning complex technical
                challenges into clean, maintainable codebases with meticulous attention to detail.
              </p>
            </div>

            {/* Quick Stat Pill Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <div className="text-2xl font-black text-[#4285F4]">5+</div>
                <div className="text-xs font-medium text-gray-500">Shipped Projects</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <div className="text-2xl font-black text-[#34A853]">250+</div>
                <div className="text-xs font-medium text-gray-500">Problems Solved</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`bg-white p-5 rounded-xl border border-gray-200 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1`}
              >
                <div className={`p-2.5 rounded-lg ${item.bg} ${item.border} border w-fit mb-3`}>
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-normal">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
