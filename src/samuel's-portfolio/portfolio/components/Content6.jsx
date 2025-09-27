"use client";

import React from "react";

export function Content6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-16 md:gap-y-20 lg:grid-cols-[1.5fr_1fr] lg:gap-x-20">
          <div className="order-2 grid grid-cols-1 gap-6 md:gap-8 lg:order-1">
            <div>
              <img
                src="/Dashboard.jpg"
                alt="Project image 1"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <img
                src="Appendice_B_1.jpg"
                alt="Project image 2"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <img
                src="/APpendice_B_2.jpg"
                alt="Project image 3"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="static order-1 lg:sticky lg:top-20 lg:order-2">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Building Bible Echo: From Concept to Working Solution
            </h2>
            <div className="prose">
              <div>
                <p>
                  Bible Echo started as an idea to eliminate delays in projecting Bible verses during live church services. My first step was conducting user research with church media teams to understand their workflow and pain points. This guided my requirements gathering and system design, leading to a solution that needed real-time audio processing, accurate scripture detection, and instant projection. I adopted an iterative development approach, beginning with prototyping the core speech recognition pipeline using OpenAI Whisper, before progressively adding verse matching logic, a database layer for the King James Version (KJV) Bible, and a user interface for monitoring and manual override.
                </p>
                <p>
                  The system’s backend was built with Flask and CORS, handling audio transcription, Bible verse lookup, and communication with the frontend through RESTful APIs. For the database, I used a JSON-based KJV dataset, indexing verses by book, chapter, and verse for efficient lookup. The frontend was developed with React (using Vite) and styled with Tailwind CSS, focusing on a clean, distraction-free projection view and an intuitive media team dashboard. I implemented a multi-display projection system using Electron to ensure that detected verses could be displayed full-screen on a secondary monitor while maintaining control options on the primary interface.
                </p>
                <p>
                  To ensure reliability in live environments, I conducted multiple rounds of real-world testing during simulated services. This included evaluating transcription accuracy, latency from speech to display, and robustness against background noise. I optimized the Whisper model loading process to run locally for offline reliability and implemented error handling for empty or poor-quality audio. Performance benchmarks showed near real-time response with less than a 2-second delay in verse projection. The final build was packaged as a cross-platform desktop application (for Windows, macOS, and Linux) using Electron, making it easy to install and use without technical expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
