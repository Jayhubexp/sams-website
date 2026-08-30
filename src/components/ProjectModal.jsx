import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaXmark,
  FaDocker,
  FaGithub,
  FaArrowUpRightFromSquare,
  FaCircleCheck,
  FaLayerGroup,
  FaChartLine,
  FaServer
} from "react-icons/fa6";
import { SiDotnet, SiReact } from "react-icons/si";

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#05070f]/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0b1220] border border-cyan-500/30 shadow-2xl shadow-cyan-950/80 z-10 custom-scrollbar"
        >
          {/* Header Banner */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0b1220]/95 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                Year: {project.date}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close Case Study"
            >
              <FaXmark className="text-lg" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Title & Tagline */}
            <div>
              <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-base text-cyan-300 font-sans">
                {project.tagline}
              </p>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-900/80 border border-white/5">
              {project.metrics?.map((m, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {m.label}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Overview & Image Preview */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 space-y-4">
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <FaServer className="text-cyan-400" />
                  <span>System Overview</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-white/10 text-xs font-mono text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-6 rounded-xl overflow-hidden border border-white/10 shadow-lg relative aspect-video bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    if (project.fallbackImage) e.currentTarget.src = project.fallbackImage;
                  }}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Architecture Highlights */}
            {project.architectureHighlights && (
              <div className="p-5 rounded-xl bg-slate-900/60 border border-cyan-500/20 space-y-3">
                <h4 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <FaLayerGroup className="text-base" />
                  <span>Engineering & Architecture Highlights</span>
                </h4>
                <ul className="space-y-2.5">
                  {project.architectureHighlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <FaCircleCheck className="text-cyan-400 text-sm mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-slate-400">
                Architected & Implemented by Samuel Johnson Sokpoli
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all"
                >
                  Discuss Architecture
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
