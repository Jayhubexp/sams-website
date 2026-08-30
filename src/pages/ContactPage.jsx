import React from "react";
import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";
import { LiveTerminal } from "../components/LiveTerminal";
import { Footer } from "../components/Footer";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 pt-16">
      <Navbar />
      <main>
        <Contact />
        <LiveTerminal />
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
