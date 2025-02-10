"use client";

import React from "react";

export function PortfolioHeader2() {
  return (
    <section id="relume">
      <div className="flex min-h-svh flex-col">
        <div className="relative flex-1">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            alt="Relume placeholder image 1"
            className="absolute size-full object-cover"
          />
        </div>
        <div className="px-[5%]">
          <div className="mx-auto max-w-lg py-12 text-center md:py-16 lg:py-20">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Dynamic Web App
            </h1>
            <p className="md:text-md">
              An innovative solution that enhances user engagement through
              seamless interactions and modern design principles.
            </p>
            <ul className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6">
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
                  Full-Stack
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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
