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
              <a href="#gold">
                <img
                  src="/Goldlex.jpg"
                  className="w-full object-cover"
                  alt="Goldlex Auto Merchandise"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
            <div className="mt-5 grid grid-cols-1 items-start justify-between gap-6 md:mt-6 md:grid-cols-2 md:gap-20">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">
                  <a href="#gold">Goldlex Auto & Merchandise</a>
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                  <li className="flex">
                    <a
                      href="#"
                      className="bg-accent-soft px-2 py-1 text-sm font-semibold text-theme"
                    >
                      Web Development
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href="#"
                      className="bg-accent-soft px-2 py-1 text-sm font-semibold text-theme"
                    >
                      Responsive Design
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href="#"
                      className="bg-accent-soft px-2 py-1 text-sm font-semibold text-theme"
                    >
                      E-commerce
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p id="gold">
                  A fully functional e-commerce platform built with React and
                  Node.js. It features a user-friendly interface and secure
                  payment processing.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <a href="#mercy">
                <img
                  src="/Mercy.jpg"
                  className="w-full object-cover"
                  alt="Mercy Schools Limited Website"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
            <div className="mt-5 grid grid-cols-1 items-start justify-between gap-6 md:mt-6 md:grid-cols-2 md:gap-20">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">
                  <a href="#mercy">Mercy Schools Limited Website</a>
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                  <li className="flex">
                    <a
                      href="#mercy"
                      className="bg-accent-soft px-2 py-1 text-sm font-semibold text-theme"
                    >
                      WordPress Development
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href="#mercy"
                      className="bg-accent-soft px-2 py-1 text-sm font-semibold text-theme"
                    >
                      Custom Themes
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href="#mercy"
                      className="bg-accent-soft px-2 py-1 text-sm font-semibold text-theme"
                    >
                      SEO Optimized
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p id="mercy">
                  A modern and responsive website developed for Mercy Schools Limited. Built with WordPress, it showcases the school’s programs, achievements, and updates while reflecting a professional and user-friendly design.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <a href="#" className="btn-theme inline-block px-6 py-3 rounded text-sm font-semibold">
            View all
          </a>
        </div>
      </div>
    </section>
  );
}
