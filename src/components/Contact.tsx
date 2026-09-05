import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaCopy, FaCheck, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { PERSONAL_INFO } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link fallback for 100% reliable delivery
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || `Message from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.open(mailtoUrl, "_blank");
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              <span>// Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 tracking-tight">
              Recruiter & Hiring Contact
            </h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Full Stack / Backend Roles</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-[#0e1424] border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <FaEnvelope className="text-amber-400 text-sm" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Direct Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-amber-300 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-amber-400 bg-slate-900 border border-slate-700/60 rounded-lg text-xs transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                </button>
              </div>
              {copiedEmail && (
                <div className="text-[11px] font-mono text-emerald-400 text-right">
                  Email copied to clipboard!
                </div>
              )}
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-[#0e1424] border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <FaPhoneAlt className="text-emerald-400 text-sm" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Phone & WhatsApp</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                      className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors font-mono"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <a
                    href={`https://wa.me/917018614030`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-emerald-400 hover:bg-emerald-500/10 bg-slate-900 border border-slate-700/60 rounded-lg text-xs transition-colors"
                    title="Chat on WhatsApp"
                    aria-label="Chat on WhatsApp"
                  >
                    <FaWhatsapp size={14} />
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 text-slate-400 hover:text-amber-400 bg-slate-900 border border-slate-700/60 rounded-lg text-xs transition-colors"
                    title="Copy phone to clipboard"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                  </button>
                </div>
              </div>
              {copiedPhone && (
                <div className="text-[11px] font-mono text-emerald-400 text-right">
                  Phone copied to clipboard!
                </div>
              )}
            </div>

            {/* LinkedIn & GitHub Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0e1424] border border-slate-800 hover:border-sky-500/50 p-4 rounded-2xl transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <FaLinkedin className="text-sky-400 text-xl" />
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-sky-400">CONNECT ↗</span>
                </div>
                <div className="mt-3">
                  <div className="text-xs font-mono text-slate-400">LinkedIn</div>
                  <div className="text-xs font-semibold text-white truncate">sandeep-mern</div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0e1424] border border-slate-800 hover:border-slate-500 p-4 rounded-2xl transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <FaGithub className="text-slate-200 text-xl" />
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-white">VISIT ↗</span>
                </div>
                <div className="mt-3">
                  <div className="text-xs font-mono text-slate-400">GitHub</div>
                  <div className="text-xs font-semibold text-white truncate">mrDark1802</div>
                </div>
              </a>
            </div>

            {/* Recruiter Notice Box */}
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-4 space-y-1">
              <div className="text-xs font-semibold text-slate-300">Fast Response Guarantee</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                I monitor email and LinkedIn actively during business days and typically reply within 2–4 hours.
              </p>
            </div>

          </div>

          {/* Quick Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0e1424] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Reach out regarding full-time roles, contract engineering, or technical inquiries.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                  <FaCheck />
                </div>
                <h4 className="text-lg font-bold text-white">Opening Email Client...</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out! You can also email me directly at{" "}
                  <strong className="text-amber-400 font-mono">{PERSONAL_INFO.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Your Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe / Company"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Your Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Full Stack Role / Collaboration Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Message <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe the role or project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl text-sm transition-all shadow-lg shadow-amber-500/10 active:scale-[0.99]"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>Send Message Directly</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
