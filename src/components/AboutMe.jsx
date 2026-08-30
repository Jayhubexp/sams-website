import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaHeart,
  FaShieldHalved,
  FaDocker,
  FaCode,
  FaLightbulb,
  FaRocket
} from "react-icons/fa6";
import { SiDotnet, SiReact } from "react-icons/si";

export function AboutMe() {
  const pillars = [
    {
      title: "Clean Architecture & DDD",
      description: "Separating core business domain rules from framework details ensures testability, maintainability, and clean codebases.",
      icon: FaShieldHalved,
      color: "text-blue-400"
    },
    {
      title: "DevOps & Container Agility",
      description: "Docker multi-stage builds and automated CI/CD pipelines guarantee predictable, immutable deployments.",
      icon: FaDocker,
      color: "text-cyan-400"
    },
    {
      title: "Interactive & Fluid UI",
      description: "Crafting modern, accessible, and animated web interfaces that delight users without sacrificing performance.",
      icon: SiReact,
      color: "text-sky-400"
    },
    {
      title: "Pragmatic Problem Solving",
      description: "Translating complex operational workflows into intuitive software subsystems that solve real business bottlenecks.",
      icon: FaLightbulb,
      color: "text-amber-400"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 glow-orb-purple pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <FaUserTie className="text-cyan-400" />
            <span>Behind The Code</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            About <span className="text-gradient-cyan">Samuel Johnson</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base">
            Software engineer committed to engineering excellence, scalable architectures, and modern cloud deployment standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Portrait & Stats Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900">
                <img
                  src="/Me.JPG"
                  alt="Samuel Johnson Sokpoli"
                  onError={(e) => {
                    e.currentTarget.src = "/FullStack.jpg";
                  }}
                  className="w-full aspect-[4/5] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10">
                  <div className="font-display font-bold text-white text-base">
                    Samuel Johnson Sokpoli
                  </div>
                  <div className="text-xs font-mono text-cyan-400 mt-0.5">
                    Full-Stack .NET & DevOps Engineer
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
              <h3 className="font-display font-bold text-2xl text-white">
                Engineering Scalable, Production-Ready Solutions
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                My approach to software engineering is rooted in building reliable systems that scale gracefully. 
                Whether architecting multi-tier backends using <strong className="text-white">C# and ASP.NET Core</strong> with Clean Architecture and CQRS patterns, 
                or containerizing applications with <strong className="text-white">Docker and multi-stage pipelines</strong>, 
                I prioritize maintainability, security, and performance.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                On the client side, I create responsive, fluid web applications with <strong className="text-white">React, TypeScript, and Blazor</strong> that transform complex business logic into intuitive user experiences.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <Icon className={`text-xl ${p.color} mb-2.5`} />
                      <h4 className="font-display font-semibold text-white text-sm mb-1">
                        {p.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
