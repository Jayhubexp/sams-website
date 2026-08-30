import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { DockerArchitectureShowcase } from "../components/DockerArchitectureShowcase";
import { TechStack } from "../components/TechStack";
import { Projects } from "../components/Projects";
import { LiveTerminal } from "../components/LiveTerminal";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function HomePage() {
  useEffect(() => {
    // Handle hash scroll if navigated with hash
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <DockerArchitectureShowcase />
        <TechStack />
        <Projects />
        <LiveTerminal />
        <ExperienceTimeline />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
