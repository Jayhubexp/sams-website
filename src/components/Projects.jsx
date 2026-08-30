import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, projectCategories } from "../data/projectsData";
import { ProjectModal } from "./ProjectModal";
import {
  FaArrowRight,
  FaDocker,
  FaServer,
  FaLayerGroup,
  FaCode,
  FaShieldHalved
} from "react-icons/fa6";
import { SiDotnet, SiReact } from "react-icons/si";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 glow-orb-blue pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 glow-orb-purple pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <FaServer className="text-cyan-400" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Engineered <span className="text-gradient-cyan">Projects</span> &{" "}
            <span className="text-gradient-purple">Systems</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base">
            Explore real-world software platforms architected with ASP.NET Core Clean Architecture, containerized Docker infrastructure, and responsive modern web frameworks.
          </p>

          {/* Filter Categories */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 max-w-2xl">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-panel-interactive rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={(e) => {
                        if (project.fallbackImage) e.currentTarget.src = project.fallbackImage;
                      }}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-[11px] font-mono font-semibold">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.slice(0, 4).map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-400 border border-cyan-500/20">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer / Action */}
                <div className="p-5 sm:p-6 pt-0 border-t border-white/5 mt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full mt-4 py-2.5 px-4 rounded-xl bg-slate-800/90 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/10 hover:border-cyan-400 transition-all duration-200 shadow-md group/btn"
                  >
                    <span>View Architecture & Case Study</span>
                    <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Deep Dive */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
