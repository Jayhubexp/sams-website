"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Portfolio2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Portfolio</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Explore My Recent Projects
            </h2>
            <p className="md:text-md">
              Showcasing a selection of my best work.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:gap-16 lg:gap-20">
          <div>
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="mt-5 grid grid-cols-1 items-start justify-between gap-6 md:mt-6 md:grid-cols-2 md:gap-20">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">
                  <a href="#">E-commerce Platform</a>
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                  <li className="flex">
                    <a
                      href="#"
                      className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                    >
                      Web Development
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href="#"
                      className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                    >
                      Responsive Design
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href="#"
                      className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                    >
                      E-commerce
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  A fully functional e-commerce platform built with React and
                  Node.js. It features a user-friendly interface and secure
                  payment processing.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="mt-5 grid grid-cols-1 items-start justify-between gap-6 md:mt-6 md:grid-cols-2 md:gap-20">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">
                  <a href="#">Portfolio Website</a>
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                  <li className="flex">
                    <a
                      href="#"
                      className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                    >
                      WordPress Development
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href="#"
                      className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                    >
                      Custom Themes
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href="#"
                      className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                    >
                      SEO Optimized
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  A modern portfolio website showcasing my skills and projects.
                  Built with WordPress, it highlights my expertise in web
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button title="View all" variant="secondary" size="primary">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
