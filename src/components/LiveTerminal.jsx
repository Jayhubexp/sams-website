import React, { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  FaTerminal,
  FaDocker,
  FaPlay,
  FaCircle,
  FaEraser,
  FaAnglesRight
} from "react-icons/fa6";
import { SiDotnet } from "react-icons/si";
import { socialConfig } from "../data/socialConfig";

export function LiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      content:
        "Welcome to Samuel's Interactive CLI v2.4 (x86_64-docker-linux)\nType 'help' to see available commands or 'sudo hire-me' to initiate collaboration."
    }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    const tokens = raw.split(" ");
    const command = tokens[0].toLowerCase();
    const args = tokens.slice(1);

    const newHistory = [...history, { type: "user", content: raw }];
    setCommandHistory((prev) => [...prev, raw]);
    setHistoryPointer(-1);

    switch (command) {
      case "help":
        newHistory.push({
          type: "response",
          content: `Available commands:
  • help            - Show this menu
  • skills          - Inspect .NET, Docker, and full-stack capabilities
  • projects        - List production projects & architectural highlights
  • docker ps       - List running production containers & resource stats
  • arch            - View Clean Architecture & CQRS execution flow
  • bio             - About Samuel Johnson Sokpoli
  • contact         - Reach out directly (Email, Phone, LinkedIn)
  • sudo hire-me    - Trigger instant hire celebration
  • clear           - Clear terminal window`
        });
        break;

      case "skills":
        newHistory.push({
          type: "response",
          content: `[CORE TECH STACK]
• Backend:  C# 13, .NET 10, ASP.NET Core Web API, EF Core, CQRS (MediatR), Blazor WASM
• DevOps:   Docker, Docker Compose, Multi-stage builds, Linux, Nginx, CI/CD Actions
• Frontend: React 18, TypeScript, Tailwind CSS, Next.js, Framer Motion, Electron
• Data:     PostgreSQL, SQL Server, SQLite, MongoDB, RBAC Security`
        });
        break;

      case "projects":
        newHistory.push({
          type: "response",
          content: `[FEATURED PRODUCTION SYSTEMS]
1. TaskManager & Inventory (.NET 10 Clean Architecture, Blazor, Docker)
2. DiamondTech School ERP (14 modular ERP subsystems, RBAC security)
3. Enterprise Hospital System (Clinical records, triage, pharmacy inventory)
4. ExpenseTracker FullStack (ASP.NET Core API + Blazor/React, multi-currency)
5. FYP Desktop Intelligence (Electron + React + embedded Python engine + SQLite)`
        });
        break;

      case "docker":
        if (args[0] === "ps") {
          newHistory.push({
            type: "response",
            content: `CONTAINER ID   IMAGE                          STATUS         PORTS
a9f408e1c210   taskmanager-api:v10-alpine     Up (healthy)   0.0.0.0:8080->8080/tcp
b319e88d01bc   postgres:16-alpine             Up (healthy)   0.0.0.0:5432->5432/tcp
c812bb09e13a   blazor-web-client:wasm         Up (healthy)   0.0.0.0:80->80/tcp
d44f7721a990   nginx:alpine-ssl               Up (healthy)   0.0.0.0:443->443/tcp`
          });
        } else {
          newHistory.push({
            type: "response",
            content: "Try 'docker ps' to see running container status."
          });
        }
        break;

      case "arch":
        newHistory.push({
          type: "response",
          content: `[CLEAN ARCHITECTURE FLOW]
[Client (Blazor/React)] 
      │  (HTTP / JWT Auth)
      ▼
[API Layer (ASP.NET Core Web API)]
      │  (Send Commands/Queries)
      ▼
[Application Layer (CQRS & MediatR Handlers)]
      │  (Invokes Pure Business Logic)
      ▼
[Domain Core (Entities, Value Objects, Domain Events)]
      ▲
      │  (Implements Repositories via Interfaces)
[Infrastructure Layer (EF Core + Database)]
      ▲
[Docker Deployment Container (Sub-90MB Alpine Linux)]`
        });
        break;

      case "bio":
        newHistory.push({
          type: "response",
          content: `Samuel Johnson Sokpoli
Full-Stack Software Engineer & DevOps Practitioner
Passionate about engineering maintainable enterprise software, robust C# APIs, and automated container workflows.`
        });
        break;

      case "contact":
        newHistory.push({
          type: "response",
          content: `Direct Channels:
• Email:    ${socialConfig.email}
• Location: ${socialConfig.location}
• GitHub:   ${socialConfig.github}
• LinkedIn: ${socialConfig.linkedin}
• Status:   ${socialConfig.availability}`
        });
        break;

      case "sudo":
        if (args.join(" ") === "hire-me" || args[0] === "hire") {
          try {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 }
            });
          } catch (e) {}

          newHistory.push({
            type: "response",
            content: `🎉 CONGRATULATIONS! You have initiated the collaboration sequence.
Directing to contact form or reach me at: ${socialConfig.email}`
          });

          // Scroll to contact section
          setTimeout(() => {
            const contactSection = document.getElementById("contact");
            contactSection?.scrollIntoView({ behavior: "smooth" });
          }, 1500);
        } else {
          newHistory.push({
            type: "response",
            content: `Permission granted. Try 'sudo hire-me'`
          });
        }
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        newHistory.push({
          type: "error",
          content: `Command not recognized: '${command}'. Type 'help' for valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex =
          historyPointer === -1
            ? commandHistory.length - 1
            : Math.max(0, historyPointer - 1);
        setHistoryPointer(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyPointer !== -1) {
        const nextIndex = historyPointer + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryPointer(nextIndex);
          setInput(commandHistory[nextIndex]);
        } else {
          setHistoryPointer(-1);
          setInput("");
        }
      }
    }
  };

  const quickCommands = ["help", "skills", "projects", "docker ps", "arch", "sudo hire-me"];

  return (
    <section id="terminal" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <FaTerminal className="text-cyan-400" />
            <span>Interactive CLI Shell</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Developer <span className="text-gradient-cyan">Terminal</span>
          </h2>
          <p className="mt-3 text-slate-300 max-w-xl text-xs sm:text-sm">
            Interact with my portfolio directly via command line. Type commands or click quick shortcuts below.
          </p>

          {/* Quick Command Pills */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-mono text-slate-500">Quick test:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-xs font-mono hover:bg-cyan-950/50 transition-all"
              >
                ${cmd}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Window Box */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="terminal-window rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/30 cursor-text"
        >
          {/* Top Bar */}
          <div className="px-4 py-3 bg-[#060a14] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span className="ml-2 font-mono text-xs text-slate-400 hidden sm:inline">
                samuel@production-server: ~/workspace
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setHistory([]);
              }}
              className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900 border border-white/5"
            >
              <FaEraser className="text-xs" />
              <span>Clear</span>
            </button>
          </div>

          {/* Terminal Output Area */}
          <div className="p-4 sm:p-6 min-h-[320px] max-h-[460px] overflow-y-auto font-mono text-xs sm:text-sm space-y-3 bg-[#070b16]/95 custom-scrollbar">
            {history.map((entry, idx) => (
              <div key={idx} className="leading-relaxed">
                {entry.type === "system" && (
                  <div className="text-cyan-400/90 whitespace-pre-line border-l-2 border-cyan-500 pl-3 py-1 bg-cyan-950/20 rounded-r">
                    {entry.content}
                  </div>
                )}
                {entry.type === "user" && (
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="text-emerald-400 font-bold">samuel@server:~$</span>
                    <span className="text-white">{entry.content}</span>
                  </div>
                )}
                {entry.type === "response" && (
                  <pre className="text-slate-300 whitespace-pre-wrap pl-4 text-xs sm:text-sm">
                    {entry.content}
                  </pre>
                )}
                {entry.type === "error" && (
                  <div className="text-rose-400 pl-4">{entry.content}</div>
                )}
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-emerald-400 font-bold shrink-0">samuel@server:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command..."
                className="w-full bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm placeholder-slate-600 focus:ring-0 p-0"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
