"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout245() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Tools</p>
              <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
                Core Technologies That Drive My Development
              </h2>
            </div>
            <div>
              <p className="md:text-md">
                I specialize in crafting responsive and dynamic web
                applications. My expertise spans across various technologies,
                ensuring robust performance and user satisfaction. Explore
                the key technologies that empower my projects.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="/assets/Html.jpg"
                  alt="Relume logo"
                  className="w-full max-w-[80px] md:max-w-[100px] lg:max-w-[120px]"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                HTML, CSS, and JavaScript Mastery
              </h3>
              <p>I build the foundation of every web project.</p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="/assets/React-JS-Logo.jpg"
                  alt="React logo"
                  className="w-full max-w-[80px] md:max-w-[100px] lg:max-w-[120px]"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Frontend Frameworks: React and Angular
              </h3>
              <p>Creating engaging user interfaces with modern frameworks.</p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="/assets/node.jpg"
                  alt="Nodejs logo"
                  className="w-full max-w-[80px] md:max-w-[100px] lg:max-w-[120px]"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Backend Technologies: Node.js and Python
              </h3>
              <p>
                Developing efficient server-side applications to power
                experiences.
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary" >Learn More</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
