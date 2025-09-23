"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
// Use the top-level public folder for static assets. Reference by root-relative path when not importing.
import Bg from "/Bg.mp4";

export function Header9() {
  return (
    <section id="relume" className="flex h-svh min-h-svh flex-col">
      <div className="relative flex-1">
        <div className="absolute inset-0 -z-10">
          {/* Decorative background video: provide poster and hide from assistive tech */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/Bg-poster.jpg"
            className="absolute inset-0 size-full object-cover"
            aria-hidden="true"
          >
            <source src={Bg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* subtle overlay to ensure text contrast */}
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.34)]" aria-hidden="true" />
        </div>
      </div>
      <div className="px-[5%]">
        <div className="container">
          <div className="grid grid-rows-1 items-start md:items-center gap-y-5 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
            <div>
              <h1 className="font-bold text-theme" style={{ fontSize: 'clamp(1.6rem, 5.5vw, 4.8rem)' }}>
                Samuel Johnson - Fullstack Web developer : MERN
              </h1>
            </div>
            <div>
              <p className="text-3xl text-theme md:text-md">
                Looking for a dedicated full-stack web
                developer passionate about creating seamless and interactive web
                applications, Look no further!
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
