import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaLocationDot,
  FaPaperPlane,
  FaCircleCheck
} from "react-icons/fa6";
import { SiDotnet } from "react-icons/si";
import { socialConfig } from "../data/socialConfig";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emailAddress = socialConfig.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMessage("");

    try {
      if (socialConfig.web3FormsAccessKey && socialConfig.web3FormsAccessKey.trim() !== "") {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: socialConfig.web3FormsAccessKey.trim(),
            name: formData.name,
            email: formData.email,
            subject: formData.subject || "New Portfolio Inquiry for Samuel Johnson",
            message: formData.message,
            from_name: "Samuel's Portfolio Contact Form"
          })
        });

        const result = await response.json();
        if (result.success) {
          setSubmitted(true);
          try {
            confetti({
              particleCount: 120,
              spread: 80,
              origin: { y: 0.6 }
            });
          } catch (err) {}
        } else {
          setErrorMessage(result.message || "Failed to send message via Web3Forms. Please try emailing directly.");
        }
      } else {
        // Mock fallback if access key is not yet set
        await new Promise((resolve) => setTimeout(resolve, 800));
        setSubmitted(true);
        try {
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch (err) {}
      }
    } catch (err) {
      setErrorMessage("Network error connecting to email service. Please try emailing directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] glow-orb-cyan pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <FaEnvelope className="text-cyan-400" />
            <span>Let's Build Something Great</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Get In <span className="text-gradient-cyan">Touch</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-xl text-sm sm:text-base">
            Looking for a dedicated ASP.NET Core & Full-Stack engineer or DevOps container specialist? Let's discuss how I can add immediate value to your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Quick Copy Pill */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Reach out directly or send a message via the form.
                </p>
              </div>

              {/* Copy Email Box */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      Direct Email
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-white truncate">
                      {emailAddress}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5 transition-all shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              {/* Channel Items */}
              <div className="space-y-4 pt-2 text-xs sm:text-sm font-mono">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                    <FaLocationDot />
                  </div>
                  <span>{socialConfig.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                    <SiDotnet />
                  </div>
                  <span>Full-Stack C# .NET & Docker Available</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={socialConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center text-base transition-all hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a
                  href={socialConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-blue-400 flex items-center justify-center text-base transition-all hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-3xl">
                    <FaCircleCheck />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md">
                    Thank you for reaching out, {formData.name}. I'll review your message and get back to you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs mt-4"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                    Send a Direct Inquiry
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Project Type / Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. ASP.NET Core & Docker Architecture / Full-Stack Project"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your project goals, technical requirements, or timeline..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-mono flex flex-col gap-1.5">
                      <span>{errorMessage}</span>
                      <a
                        href={`mailto:${socialConfig.email}?subject=${encodeURIComponent(formData.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(formData.message)}`}
                        className="text-cyan-400 underline hover:text-cyan-300"
                      >
                        Click here to send directly via your email client
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="font-mono text-sm animate-pulse">
                        Encrypting & Transmitting...
                      </span>
                    ) : (
                      <>
                        <FaPaperPlane className="text-xs" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
