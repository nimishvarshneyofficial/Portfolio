import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  const dotColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 bg-white relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#EA4335] text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Career Path
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Work Experience & Contributions
          </h2>
          <div className="h-1 w-16 bg-[#EA4335] rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-gray-200 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-12">
          {experience.map((exp, index) => {
            const color = dotColors[index % dotColors.length];
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div
                  className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-4 shadow-xs transition-transform duration-200 group-hover:scale-125"
                  style={{ borderColor: color }}
                />

                {/* Experience Card */}
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-xs group-hover:shadow-md transition-all duration-200 hover:border-gray-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1a73e8] transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-base font-semibold text-gray-700 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-gray-500 font-mono">
                      <span className="flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-200">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-200">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                  {/* Highlights Bullet points */}
                  <div className="space-y-2 mb-5">
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700 leading-snug">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-gray-50 text-gray-700 rounded-md border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
