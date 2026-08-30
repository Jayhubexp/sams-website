import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../data/experienceData";
import {
  FaBriefcase,
  FaCalendarDays,
  FaBuilding,
  FaCircleDot,
  FaCheck
} from "react-icons/fa6";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-10 w-96 h-96 glow-orb-cyan pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-300 text-xs font-mono mb-4">
            <FaBriefcase className="text-cyan-400" />
            <span>Engineering Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Experience & <span className="text-gradient-cyan">Milestones</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base">
            A chronological timeline of building enterprise solutions, delivering client systems, and refining system design and DevOps capabilities.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#070b14] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-300 transition-all shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Content Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all shadow-xl">
                {/* Period & Role */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-cyan-400 mt-1">
                      <FaBuilding className="text-xs" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-slate-300 self-start sm:self-auto">
                    <FaCalendarDays className="text-cyan-400 text-xs" />
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Key Deliverables:
                  </h4>
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <FaCheck className="text-emerald-400 text-xs mt-1 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {exp.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/5 text-xs font-mono text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
