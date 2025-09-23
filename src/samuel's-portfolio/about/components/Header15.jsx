"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header15() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Professional Summary...
            </h1>
          </div>
          <div>
            <p className="md:text-md">
              I am a passionate front-end developer with over two years of experience crafting dynamic, user-focused
              websites that deliver exceptional results. Specializing in React and WordPress, I create visually stunning
              and highly functional web solutions tailored to my clients’ needs. My expertise extends to back-end
              technologies like Node.js, MongoDB, and Express, enabling me to build seamless, full-stack applications.
              With a keen eye for design details and a commitment to exceeding expectations, I take pride in
              delivering projects that not only meet but elevate my clients’ visions. My journey in web development
              began at the University of Ghana in 2022, where I pursued a degree in Computer Science and honed my
              skills through dedication, collaboration, and a drive for excellence.
            </p>

          </div>
        </div>
        <div>
          <img
            src="/Me.JPG"
            className="w-full object-cover"
            alt="Portrait of Samuel Johnson"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
