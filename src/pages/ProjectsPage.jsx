import React from "react";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { DockerArchitectureShowcase } from "../components/DockerArchitectureShowcase";
import { Footer } from "../components/Footer";

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 pt-16">
      <Navbar />
      <main>
        <Projects />
        <DockerArchitectureShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default ProjectsPage;
