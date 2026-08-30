import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTerminal,
  FaDocker,
  FaCode,
  FaBars,
  FaXmark,
  FaEnvelope,
  FaGithub,
  FaLinkedin
} from "react-icons/fa6";
import { SiDotnet } from "react-icons/si";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "/#hero" },
    { name: "DevOps & Arch", href: "/#architecture" },
    { name: "Tech Stack", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Terminal", href: "/#terminal" },
    { name: "Experience", href: "/#experience" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#070b14]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Status Indicator */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300">
              <span className="font-mono font-black text-cyan-400 text-lg group-hover:scale-110 transition-transform">
                SJ
              </span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#070b14] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-base tracking-tight group-hover:text-cyan-300 transition-colors">
                Samuel Johnson
              </span>
              <span className="text-[11px] font-mono text-cyan-400/80 flex items-center gap-1.5">
                <SiDotnet className="inline text-xs text-blue-400" />
                .NET • Docker • React
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA & Terminal Shortcut */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/#terminal"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-200"
              title="Launch Interactive Terminal"
            >
              <FaTerminal className="text-cyan-400 text-xs animate-pulse" />
              <span>CLI</span>
            </a>
            <a
              href="/#contact"
              className="relative group overflow-hidden rounded-lg p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-lg animate-gradient-x group-hover:opacity-100 opacity-80 blur-[2px] transition-opacity" />
              <span className="relative flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-[#090e1a] text-xs font-semibold text-white group-hover:bg-opacity-80 transition-all">
                <FaEnvelope className="text-cyan-400" />
                <span>Hire Me</span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden p-6 rounded-2xl bg-[#0b1220]/95 backdrop-blur-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-950/50"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live Developer Status: Ready for Work
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-cyan-950/30 rounded-xl transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-center font-semibold text-sm text-white shadow-lg shadow-cyan-500/25"
                >
                  Contact & Hire
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
