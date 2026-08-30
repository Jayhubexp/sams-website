import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDocker,
  FaServer,
  FaLayerGroup,
  FaShieldHalved,
  FaNetworkWired,
  FaCheck,
  FaCircleCheck,
  FaTerminal,
  FaCode
} from "react-icons/fa6";
import { SiDotnet, SiPostgresql, SiNginx, SiReact } from "react-icons/si";

export function DockerArchitectureShowcase() {
  const [activeTab, setActiveTab] = useState("architecture");
  const [selectedLayer, setSelectedLayer] = useState(0);

  const architectureLayers = [
    {
      id: "api",
      name: "1. Presentation / ASP.NET Core Web API",
      tech: "C# • ASP.NET Core 10 • Swagger",
      description: "Handles HTTP/REST endpoints, route binding, JWT authentication filters, rate-limiting, and middleware pipeline.",
      codeSnippet: `// Program.cs - ASP.NET Core Web API
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddApplicationServices();
builder.Services.AddInfrastructureServices(builder.Configuration);
builder.Services.AddControllers();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options => { /* JWT Token Validation */ });

var app = builder.Build();
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();`,
      badgeColor: "border-blue-500/40 text-blue-400 bg-blue-950/30"
    },
    {
      id: "application",
      name: "2. Application Layer (CQRS & MediatR)",
      tech: "MediatR • FluentValidation • AutoMapper",
      description: "Orchestrates use cases, command/query handlers, validation pipelines, and business transactions without UI coupling.",
      codeSnippet: `// CreateTaskCommand.cs - CQRS MediatR Handler
public record CreateTaskCommand(string Title, string Description, PriorityLevel Priority) 
    : IRequest<Result<Guid>>;

public class CreateTaskCommandHandler : IRequestHandler<CreateTaskCommand, Result<Guid>>
{
    private readonly ITaskRepository _taskRepo;
    private readonly IUnitOfWork _uow;

    public async Task<Result<Guid>> Handle(CreateTaskCommand request, CancellationToken ct)
    {
        var task = TaskItem.Create(request.Title, request.Description, request.Priority);
        await _taskRepo.AddAsync(task, ct);
        await _uow.SaveChangesAsync(ct);
        return Result<Guid>.Success(task.Id);
    }
}`,
      badgeColor: "border-purple-500/40 text-purple-400 bg-purple-950/30"
    },
    {
      id: "domain",
      name: "3. Domain Core Layer (Enterprise Rules)",
      tech: "Pure C# • DDD Entities • Domain Events",
      description: "Zero external dependencies. Contains enterprise entities, value objects, domain logic, and invariants.",
      codeSnippet: `// TaskItem.cs - Pure Domain Entity
public class TaskItem : AggregateRoot<Guid>
{
    public string Title { get; private set; }
    public TaskStatus Status { get; private set; }
    public DateTime CreatedAt { get; private set; }

    public void MarkCompleted()
    {
        if (Status == TaskStatus.Completed) return;
        Status = TaskStatus.Completed;
        AddDomainEvent(new TaskCompletedEvent(Id, DateTime.UtcNow));
    }
}`,
      badgeColor: "border-emerald-500/40 text-emerald-400 bg-emerald-950/30"
    },
    {
      id: "infrastructure",
      name: "4. Infrastructure Layer (EF Core & DB)",
      tech: "EF Core • PostgreSQL / SQLite • Migrations",
      description: "Implements repository interfaces, database contexts, shadow auditing properties, and external file services.",
      codeSnippet: `// AppDbContext.cs - EF Core Infrastructure
public class AppDbContext : DbContext, IUnitOfWork
{
    public DbSet<TaskItem> Tasks => Set<TaskItem>();
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
        base.OnModelCreating(modelBuilder);
    }
}`,
      badgeColor: "border-amber-500/40 text-amber-400 bg-amber-950/30"
    },
    {
      id: "docker",
      name: "5. DevOps & Multi-Stage Docker Container",
      tech: "Docker • Multi-stage • Alpine Linux",
      description: "Sub-90MB production images with build stage isolation, non-root user security, and automatic health checks.",
      codeSnippet: `# Multi-Stage Production Dockerfile
FROM mcr.microsoft.com/dotnet/sdk:10.0-alpine AS build
WORKDIR /src
COPY ["TaskManager.Api/TaskManager.Api.csproj", "TaskManager.Api/"]
RUN dotnet restore "TaskManager.Api/TaskManager.Api.csproj"
COPY . .
RUN dotnet publish "TaskManager.Api/TaskManager.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:10.0-alpine AS final
WORKDIR /app
COPY --from=build /app/publish .
USER 1000:1000
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost:8080/health || exit 1
ENTRYPOINT ["dotnet", "TaskManager.Api.dll"]`,
      badgeColor: "border-cyan-500/40 text-cyan-400 bg-cyan-950/30"
    }
  ];

  const dockerContainers = [
    {
      name: "taskmanager-api",
      image: "taskmanager-api:v10-alpine",
      status: "running",
      port: "8080:8080",
      memory: "42.5 MB",
      cpu: "0.2%",
      uptime: "34d 18h",
      network: "taskmanager-bridge"
    },
    {
      name: "taskmanager-db-postgres",
      image: "postgres:16-alpine",
      status: "running",
      port: "5432:5432",
      memory: "68.1 MB",
      cpu: "0.1%",
      uptime: "34d 18h",
      network: "taskmanager-bridge"
    },
    {
      name: "taskmanager-web-client",
      image: "nginx:1.25-alpine (Blazor WASM)",
      status: "running",
      port: "80:80",
      memory: "12.8 MB",
      cpu: "0.0%",
      uptime: "34d 18h",
      network: "taskmanager-bridge"
    },
    {
      name: "nginx-reverse-proxy",
      image: "nginx:alpine-ssl",
      status: "running",
      port: "443:443",
      memory: "18.4 MB",
      cpu: "0.1%",
      uptime: "34d 18h",
      network: "taskmanager-bridge"
    }
  ];

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 cyber-dots opacity-25 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-300 text-xs font-mono mb-4">
            <FaDocker className="text-cyan-400" />
            <span>Enterprise Architecture & DevOps</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            How I Build: <span className="text-gradient-cyan">ASP.NET Core</span> &{" "}
            <span className="text-gradient-purple">Docker DevOps</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base">
            Clean Architecture separation paired with multi-stage Docker containerization ensures zero tight couplings, instantaneous testability, and sub-100MB production deployments.
          </p>

          {/* Toggle Tab */}
          <div className="mt-8 flex items-center p-1.5 rounded-xl bg-slate-900/90 border border-white/10 shadow-lg">
            <button
              onClick={() => setActiveTab("architecture")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "architecture"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <FaLayerGroup />
              <span>Clean Architecture Layers</span>
            </button>
            <button
              onClick={() => setActiveTab("docker")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "docker"
                  ? "bg-gradient-to-r from-cyan-600 to-emerald-600 text-white shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <FaDocker />
              <span>Live Docker Container Inspector</span>
            </button>
          </div>
        </div>

        {/* View 1: Architecture Layers */}
        {activeTab === "architecture" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Layer Selector Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {architectureLayers.map((layer, idx) => {
                const isSelected = selectedLayer === idx;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setSelectedLayer(idx)}
                    className={`text-left p-4 rounded-xl transition-all duration-200 border flex flex-col gap-1.5 relative overflow-hidden ${
                      isSelected
                        ? "bg-slate-900/90 border-cyan-500/60 shadow-xl shadow-cyan-950/50"
                        : "bg-slate-900/40 border-white/5 hover:border-white/15 hover:bg-slate-900/60"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeLayerIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-500"
                      />
                    )}
                    <div className="flex items-center justify-between">
                      <span className="font-display font-semibold text-sm sm:text-base text-white">
                        {layer.name}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${layer.badgeColor}`}>
                        {layer.tech.split("•")[0]}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {layer.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right: Code & Detail Window */}
            <div className="lg:col-span-7">
              <div className="terminal-window rounded-2xl overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="px-4 py-3 bg-slate-950 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400">
                      {architectureLayers[selectedLayer].name.split(". ")[1]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/30">
                    <FaCode className="text-xs" />
                    <span>C# / Docker Blueprint</span>
                  </div>
                </div>

                {/* Layer Description Banner */}
                <div className="p-4 bg-slate-900/50 border-b border-white/5">
                  <div className="text-xs font-mono text-cyan-300 font-semibold mb-1">
                    Tech Stack: {architectureLayers[selectedLayer].tech}
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    {architectureLayers[selectedLayer].description}
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono text-slate-200 bg-[#090e1a]/95">
                  <pre>
                    <code>{architectureLayers[selectedLayer].codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View 2: Docker Container Inspector */}
        {activeTab === "docker" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Top Container Overview Ribbon */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="glass-panel p-4 rounded-xl border border-white/10">
                <div className="text-xs font-mono text-slate-400">Daemon Status</div>
                <div className="text-lg font-bold text-emerald-400 flex items-center gap-2 mt-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  Docker Engine Online
                </div>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-white/10">
                <div className="text-xs font-mono text-slate-400">Total Containers</div>
                <div className="text-lg font-bold text-white mt-1">4 Running / 0 Exited</div>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-white/10">
                <div className="text-xs font-mono text-slate-400">Orchestration</div>
                <div className="text-lg font-bold text-cyan-400 mt-1">Docker Compose v2</div>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-white/10">
                <div className="text-xs font-mono text-slate-400">Avg Image Size</div>
                <div className="text-lg font-bold text-purple-400 mt-1">&lt; 85 MB (Alpine)</div>
              </div>
            </div>

            {/* Container List Table */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-white/10">
              <div className="px-5 py-4 bg-slate-900/80 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                  <FaDocker className="text-cyan-400 text-base" />
                  <span>docker ps --format "table &#123;&#123;.Names&#125;&#125;\t&#123;&#123;.Image&#125;&#125;\t&#123;&#123;.Status&#125;&#125;"</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded border border-emerald-500/30">
                  All Healthchecks Passing
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-950/60 text-slate-400 uppercase tracking-wider border-b border-white/5">
                    <tr>
                      <th className="px-5 py-3">Container Name</th>
                      <th className="px-5 py-3">Image / Tag</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3">Ports</th>
                      <th className="px-5 py-3">RAM</th>
                      <th className="px-5 py-3">CPU</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-200">
                    {dockerContainers.map((c, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                        <td className="px-5 py-3.5 font-bold text-white flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          {c.name}
                        </td>
                        <td className="px-5 py-3.5 text-cyan-300">{c.image}</td>
                        <td className="px-5 py-3.5">
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-[11px]">
                            <FaCircleCheck className="text-[10px]" />
                            Up {c.uptime} (healthy)
                          </span>
                        </td>
                        <td className="px-5 py-3.5 text-amber-300">{c.port}</td>
                        <td className="px-5 py-3.5 text-purple-300">{c.memory}</td>
                        <td className="px-5 py-3.5 text-slate-400">{c.cpu}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
