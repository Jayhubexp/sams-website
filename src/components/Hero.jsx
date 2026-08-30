import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaDocker,
  FaArrowRight,
  FaTerminal,
  FaServer,
  FaFileArrowDown,
  FaShieldHalved,
  FaBolt
} from "react-icons/fa6";
import { SiDotnet, SiReact, SiTypescript, SiPostgresql } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const roles = [
  "ASP.NET Core & C# Architect",
  "DevOps & Docker Specialist",
  "Clean Architecture Practitioner",
  "Full-Stack React Engineer",
  "Enterprise System Developer"
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Cyber Grid & Glow Orbs */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-orb-cyan pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] glow-orb-purple pointer-events-none -z-10" />
      <div className="absolute top-20 left-10 w-[350px] h-[350px] glow-orb-blue pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Availability Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md mb-8 shadow-lg shadow-cyan-950/40"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-cyan-300 font-medium">
              Available for Full-Stack & DevOps Roles
            </span>
          </motion.div>

          {/* Main Title & Dynamic Typing */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white max-w-4xl leading-[1.15]"
          >
            Engineering Scalable Software with{" "}
            <span className="text-gradient-cyan">ASP.NET Core</span> &{" "}
            <span className="text-gradient-purple">Docker DevOps</span>
          </motion.h1>

          {/* Dynamic Role Subheader */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 mt-5 flex items-center justify-center font-mono text-lg sm:text-2xl text-cyan-300"
          >
            <span className="text-slate-400 mr-2">&gt;</span>
            <span>{displayedText}</span>
            <span className="w-2.5 h-6 ml-1 bg-cyan-400 inline-block animate-pulse" />
          </motion.div>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl font-sans leading-relaxed"
          >
            Hi, I'm <strong className="text-white font-semibold">Samuel Johnson Sokpoli</strong>. 
            I build production-grade, Clean Architecture backends in <span className="text-blue-400 font-medium">C# .NET</span>, 
            orchestrate resilient <span className="text-cyan-400 font-medium">Docker</span> container environments, 
            and craft hyper-responsive client interfaces with <span className="text-sky-300 font-medium">React</span> and <span className="text-purple-400 font-medium">Blazor</span>.
          </motion.p>

          {/* Key Tech Badges Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-blue-500/30 text-blue-300 text-xs font-mono">
              <TbBrandCSharp className="text-base text-purple-400" />
              <span>C# / .NET 10</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <FaDocker className="text-base text-cyan-400" />
              <span>Docker & Compose</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-sky-500/30 text-sky-300 text-xs font-mono">
              <SiReact className="text-base text-sky-400" />
              <span>React & TypeScript</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <FaShieldHalved className="text-base text-emerald-400" />
              <span>Clean Architecture & CQRS</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 group"
            >
              <span>Explore Projects</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#architecture"
              className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 font-semibold text-sm sm:text-base backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
            >
              <FaServer className="text-cyan-400 text-sm" />
              <span>DevOps Architecture</span>
            </a>

            <a
              href="#terminal"
              className="px-5 py-3.5 rounded-xl bg-cyan-950/30 hover:bg-cyan-900/40 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 font-mono text-sm backdrop-blur-md transition-all duration-200 flex items-center gap-2"
            >
              <FaTerminal className="text-cyan-400 text-xs animate-pulse" />
              <span>Launch CLI</span>
            </a>
          </motion.div>

          {/* Quick Metrics HUD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl"
          >
            {[
              { label: "Production Clean Code", value: "50k+", icon: FaBolt, color: "text-cyan-400" },
              { label: "Docker Containerized", value: "100%", icon: FaDocker, color: "text-blue-400" },
              { label: "Enterprise Modules", value: "14+", icon: FaServer, color: "text-purple-400" },
              { label: "Uptime Reliability", value: "99.9%", icon: FaShieldHalved, color: "text-emerald-400" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-white/15 transition-all text-left flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className={`text-lg ${stat.color}`} />
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Metric</span>
                </div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
