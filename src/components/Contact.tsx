import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, CheckCircle, Github, Linkedin, MapPin, Sparkles, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('sending');

    // Encode message for seamless email client launch
    const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      // Trigger the mail client with prefilled details
      window.location.href = mailtoUrl;
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-[#f8fafd] border-t border-gray-200/70 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a73e8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Let's build something remarkable together
          </h2>
          <div className="h-1 w-16 bg-[#4285F4] rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white p-7 rounded-2xl border border-gray-200 shadow-xs space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reach Out Directly</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Whether you have a role opening, project inquiry, or just want to connect, my inbox is
                always open.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-50 hover:bg-blue-50/60 border border-gray-200/80 hover:border-blue-200 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-red-50 text-[#EA4335] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-gray-500 font-medium">Email Address</div>
                  <div className="text-sm font-semibold text-gray-900 group-hover:text-[#1a73e8] transition-colors truncate">
                    {personal.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-50 border border-gray-200/80">
                <div className="p-2.5 rounded-lg bg-green-50 text-[#34A853]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Current Location</div>
                  <div className="text-sm font-semibold text-gray-900">{personal.location}</div>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-4 border-t border-gray-100">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Social Profiles
              </div>
              <div className="flex gap-2.5">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-sm font-medium text-gray-800 transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-50 hover:bg-blue-100/70 border border-blue-100 text-sm font-medium text-[#1a73e8] transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white p-7 sm:p-8 rounded-2xl border border-gray-200 shadow-xs relative overflow-hidden"
          >
            {/* Top rainbow accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 google-border-gradient" />

            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-[#4285F4]" />
              <h3 className="text-xl font-bold text-gray-900">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name-input" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:bg-white focus:outline-none focus:border-[#4285F4] focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email-input" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="contact-email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:bg-white focus:outline-none focus:border-[#4285F4] focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject-input" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject-input"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Opportunity / Collaboration Inquiry"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:bg-white focus:outline-none focus:border-[#4285F4] focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message-input" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Message *
                </label>
                <textarea
                  id="contact-message-input"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Nimish, I'd love to connect regarding a project..."
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:bg-white focus:outline-none focus:border-[#4285F4] focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-[#EA4335]">
                  {errorMessage}
                </div>
              )}

              {status === 'success' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-xs text-[#34A853] flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  Your mail client has been opened with the prefilled message! Thank you for reaching out.
                </div>
              )}

              <button
                id="contact-submit-btn"
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium text-sm shadow-xs hover:shadow-md transition-all duration-200 disabled:opacity-50 cursor-pointer"
              >
                {status === 'sending' ? (
                  <span>Opening mail client...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Nimish</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
