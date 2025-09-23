"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta19() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Discover My Creative Work
          </h2>
          <p className="md:text-md">
            Explore my portfolio or connect for exciting collaboration
            opportunities in web development.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <a href="/portfolio" aria-label="View portfolio" className="btn-theme px-4 py-2 rounded-md inline-block">View</a>
            <a href="#contact-button" aria-label="Contact" className="px-4 py-2 rounded-md inline-block border">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
