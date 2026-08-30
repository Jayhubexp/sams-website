import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData, architectureConcepts } from "../data/skillsData";
import {
  FaDocker,
  FaServer,
  FaDesktop,
  FaDatabase,
  FaCircleCheck,
  FaLayerGroup,
  FaShieldHalved,
  FaMicrochip
} from "react-icons/fa6";
import { SiDotnet, SiReact, SiTypescript, SiPostgresql, SiTailwindcss, SiLinux } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState("backend");

  const categories = [
    { id: "backend", label: "Backend (.NET & C#)", icon: SiDotnet, color: "text-blue-400" },
    { id: "devops", label: "DevOps & Docker", icon: FaDocker, color: "text-cyan-400" },
    { id: "frontend", label: "Frontend & React", icon: SiReact, color: "text-sky-400" },
    { id: "database", label: "Databases & Design", icon: FaDatabase, color: "text-purple-400" }
  ];

  const currentCategoryData = skillsData[activeCategory];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 glow-orb-purple pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 glow-orb-cyan pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <TbBrandCSharp className="text-purple-400" />
            <span>Core Capabilities & Tech Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Production-Tested <span className="text-gradient-cyan">Tech Stack</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base">
            From low-latency C# backends to containerized cloud deployments and animated React frontends.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 max-w-3xl">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-slate-800 text-white shadow-lg border border-cyan-500/40"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  }`}
                >
                  <Icon className={`text-base ${cat.color}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid for Active Category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 mb-14"
          >
            <div className="mb-6 pb-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {currentCategoryData.category}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {currentCategoryData.description}
                </p>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30 self-start sm:self-auto">
                {currentCategoryData.skills.length} Core Competencies
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentCategoryData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated Progress Meter */}
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"
                    />
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {skill.highlight}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Architecture & Engineering Standards Grid */}
        <div className="mt-8">
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-2xl text-white">
              Architectural Paradigms I Enforce
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Engineering for maintainability, zero data leaks, and enterprise-grade resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {architectureConcepts.map((concept, idx) => (
              <div
                key={idx}
                className="glass-panel-interactive p-5 rounded-2xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                    {idx === 0 && <FaLayerGroup className="text-lg" />}
                    {idx === 1 && <FaDocker className="text-lg" />}
                    {idx === 2 && <FaMicrochip className="text-lg" />}
                    {idx === 3 && <FaShieldHalved className="text-lg" />}
                  </div>
                  <h4 className="font-display font-bold text-base text-white mb-2">
                    {concept.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {concept.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <FaCircleCheck className="text-xs" />
                  <span>Production Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
