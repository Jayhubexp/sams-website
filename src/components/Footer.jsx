import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaTerminal,
  FaArrowUp
} from "react-icons/fa6";
import { SiDotnet, SiReact } from "react-icons/si";
import { socialConfig } from "../data/socialConfig";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "UTC",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }) + " UTC"
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#050811] relative overflow-hidden text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/5">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-mono font-bold flex items-center justify-center text-sm">
                SJ
              </div>
              <span className="font-display font-bold text-white text-base">
                Samuel Johnson Sokpoli
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              Full-Stack Software Engineer specializing in ASP.NET Core Clean Architecture, Docker DevOps workflows, and responsive React applications.
            </p>
            <div className="flex items-center gap-2 font-mono text-[11px] text-cyan-400/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>System Clock: {time}</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2.5">
            <h4 className="font-mono uppercase tracking-wider text-slate-300 text-xs font-semibold">
              Navigation
            </h4>
            <ul className="space-y-1.5 font-sans">
              <li>
                <a href="/#hero" className="hover:text-cyan-300 transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="/#architecture" className="hover:text-cyan-300 transition-colors">
                  DevOps Architecture
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-cyan-300 transition-colors">
                  Tech Matrix
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-cyan-300 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="/#terminal" className="hover:text-cyan-300 transition-colors">
                  Interactive CLI
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Status & Tech */}
          <div className="space-y-2.5">
            <h4 className="font-mono uppercase tracking-wider text-slate-300 text-xs font-semibold">
              Deployment Info
            </h4>
            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>All Systems Operational</span>
              </div>
              <div className="text-slate-400">
                Container: <span className="text-cyan-300">Alpine v3.19</span>
              </div>
              <div className="text-slate-400">
                Runtime: <span className="text-blue-300">.NET 10 / React 18</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white flex items-center gap-1.5 text-xs transition-all"
                >
                  <FaArrowUp className="text-[10px]" />
                  <span>Back to Top</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Samuel Johnson Sokpoli. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={socialConfig.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={socialConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/#terminal"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <FaTerminal className="text-[10px]" />
              <span>CLI</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
