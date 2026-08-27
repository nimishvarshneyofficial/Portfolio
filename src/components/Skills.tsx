import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Terminal, Layout, Database, Wrench, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;

  const categoryIcons: Record<string, { icon: React.ReactNode; color: string; bg: string; border: string }> = {
    Frontend: {
      icon: <Layout className="w-5 h-5 text-[#4285F4]" />,
      color: 'text-[#4285F4]',
      bg: 'bg-blue-50',
      border: 'border-blue-100',
    },
    'Backend & DB': {
      icon: <Database className="w-5 h-5 text-[#EA4335]" />,
      color: 'text-[#EA4335]',
      bg: 'bg-red-50',
      border: 'border-red-100',
    },
    'Languages & CS': {
      icon: <Terminal className="w-5 h-5 text-[#34A853]" />,
      color: 'text-[#34A853]',
      bg: 'bg-green-50',
      border: 'border-green-100',
    },
    'Tools & Devops': {
      icon: <Wrench className="w-5 h-5 text-[#FBBC05]" />,
      color: 'text-[#b06000]',
      bg: 'bg-amber-50',
      border: 'border-yellow-100',
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-[#34A853] text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Skills & Competencies
          </h2>
          <div className="h-1 w-16 bg-[#34A853] rounded-full mx-auto mt-4" />
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const style = categoryIcons[category.title] || {
              icon: <Sparkles className="w-5 h-5 text-[#4285F4]" />,
              color: 'text-[#4285F4]',
              bg: 'bg-blue-50',
              border: 'border-blue-100',
            };

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-all duration-200 hover:border-gray-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl ${style.bg} ${style.border} border`}>
                    {style.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                </div>

                {/* Skills Badges Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-white text-gray-800 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-xs transition-all duration-200"
                    >
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#4285F4] transition-colors" />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
