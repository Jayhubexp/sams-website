"use client";

import React from "react";

export function Content1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Bible Echo - Desktop Application
            </h2>
            <div className="prose">
              <div>
                <p>
                  Bible Echo is an innovative desktop application designed to revolutionize how churches and religious gatherings display scripture during live services. Built as part of my final-year project at the University of Ghana, this solution leverages AI-driven speech recognition to capture spoken Bible references in real-time and instantly project the corresponding verse on a secondary display. The goal was to minimize manual intervention, streamline media operations, and create a seamless worship experience for both technical teams and congregants.
                </p>
                <p>
                  The system was developed using React with Vite for the frontend, Tailwind CSS for a clean, responsive UI, and a Flask backend integrated with OpenAI’s Whisper model for offline speech transcription. A structured KJV Bible database powers the verse lookup functionality, ensuring accurate and efficient retrieval of scripture references. Additionally, the application supports multi-display projection, live verse editing, and a user-friendly interface for media teams to override or queue content when needed.
                </p>
                <p>
                  This project not only demonstrates my technical expertise in full-stack development and AI integration, but also showcases my ability to translate a real-world problem into a production-ready solution. Bible Echo reflects my passion for building impactful, user-centric applications and my ability to work end-to-end on complex systems, from architecture design and database modeling to frontend development, testing, and deployment.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img
                src="/Appendice_B_1.jpg"
                className="w-full object-cover"
                alt="Project screenshot"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
