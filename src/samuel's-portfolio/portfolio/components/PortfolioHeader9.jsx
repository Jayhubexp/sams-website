"use client";

import React from "react";

export function PortfolioHeader9() {
  return (
    <section id="relume" className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-6 py-16 md:grid-cols-2 md:gap-x-12 md:py-24 lg:gap-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Dynamic Web Application
            </h1>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  JavaScript
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  React Framework
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  API Integration
                </a>
              </li>
            </div>
          </div>
          <div>
            <p className="md:text-md">
              Samuel approaches each project with a focus on user experience and
              functionality. He excels in leveraging modern technologies to
              create seamless web solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
