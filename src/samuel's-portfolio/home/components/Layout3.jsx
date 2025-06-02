"use client";

import React from "react";

export function Layout3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Discover My Expertise: Web Development, Full-Stack
              Development, and WordPress Mastery
            </h1>
            <p className="md:text-md">
              I combine creativity with technical skills to deliver
              exceptional web solutions. My proficiency in web development,
              full-stack technologies, and WordPress ensures that every project
              meets the highest standards.
            </p>
          </div>
          <div>
            <img
              src="/src/public/assets/FullStack.jpg"
              className="w-full object-cover"
              alt="Expertise image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
