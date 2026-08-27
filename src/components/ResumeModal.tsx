import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, Mail, Github, Linkedin, MapPin, Briefcase, Award, Code2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { personal, experience, projects, skillCategories, achievements } = portfolioData;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Modal Top Bar */}
          <div className="p-4 bg-[#f8fafd] border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
              </div>
              <span className="text-sm font-bold text-gray-800 ml-1">
                {personal.name} — Curriculum Vitae
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-200/60 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Paper Content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-gray-900 font-sans">
            {/* Header */}
            <div className="border-b border-gray-200 pb-6">
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                {personal.name}
              </h1>
              <p className="text-lg font-medium text-[#1a73e8] mt-1">{personal.title}</p>

              <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-600">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#EA4335]" />
                  {personal.email}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#34A853]" />
                  {personal.location}
                </span>
                <span className="flex items-center gap-1">
                  <Github className="w-3.5 h-3.5 text-gray-800" />
                  github.com/nimish-varshney
                </span>
                <span className="flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                  linkedin.com/in/nimish-varshney
                </span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#1a73e8] mb-2 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" /> Professional Summary
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">{personal.bio}</p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#1a73e8] mb-4 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" /> Work Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <div className="text-sm font-bold text-gray-900">
                        {exp.role} <span className="font-normal text-gray-600">at {exp.company}</span>
                      </div>
                      <div className="text-xs text-gray-500 font-mono">{exp.duration}</div>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-gray-700 flex items-start gap-1.5">
                          <span className="text-[#1a73e8] mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#1a73e8] mb-4 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" /> Key Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.slice(0, 4).map((p) => (
                  <div key={p.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-xs font-bold text-gray-900 mb-1">{p.title}</div>
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">{p.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[10px] bg-white px-1.5 py-0.5 rounded border border-gray-200 text-gray-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#1a73e8] mb-3 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" /> Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {skillCategories.map((cat) => (
                  <div key={cat.title}>
                    <span className="font-semibold text-gray-800">{cat.title}: </span>
                    <span className="text-gray-600">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#1a73e8] mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Honors & Achievements
              </h2>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {achievements.map((ach) => (
                  <li key={ach.id} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
                    <span className="font-semibold">{ach.title}</span>
                    <span className="text-gray-500">— {ach.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
