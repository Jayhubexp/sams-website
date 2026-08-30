import React from "react";
import { Navbar } from "../components/Navbar";
import { AboutMe } from "../components/AboutMe";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { TechStack } from "../components/TechStack";
import { Footer } from "../components/Footer";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 pt-16">
      <Navbar />
      <main>
        <AboutMe />
        <TechStack />
        <ExperienceTimeline />
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
