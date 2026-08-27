import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, FolderGit2, Star, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<'all' | 'featured' | 'fullstack' | 'frontend'>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'featured') return p.featured;
    if (filter === 'fullstack') return p.tags.some(t => ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'].includes(t));
    if (filter === 'frontend') return p.tags.some(t => ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].includes(t));
    return true;
  });

  const borderColors = ['border-t-[#4285F4]', 'border-t-[#EA4335]', 'border-t-[#FBBC05]', 'border-t-[#34A853]'];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-[#f8fafd] border-y border-gray-200/70 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-100 text-[#b06000] text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-[#FBBC05]" />
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Featured Projects & Inventions
          </h2>
          <div className="h-1 w-16 bg-[#FBBC05] rounded-full mx-auto mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'featured', label: 'Featured' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'fullstack', label: 'Full Stack' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === tab.id
                  ? 'bg-gray-900 text-white shadow-xs'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const borderTop = borderColors[index % borderColors.length];
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden border-t-4 ${borderTop} group hover:-translate-y-1`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 group-hover:text-[#1a73e8] transition-colors">
                          <FolderGit2 className="w-5 h-5" />
                        </div>
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-amber-50 text-[#b06000] border border-amber-200 px-2 py-0.5 rounded-full">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> Featured
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-1.5">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} GitHub repo`}
                            className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-md transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live demo`}
                            className="p-1.5 text-gray-500 hover:text-[#1a73e8] hover:bg-blue-50 rounded-md transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1a73e8] transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags Footer */}
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-medium bg-gray-50 text-gray-600 rounded-md border border-gray-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
