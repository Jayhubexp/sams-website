"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout237() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">

            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Why Work With Me
            </h2>
            <p className="md:text-md">
              I'm dedicated to delivering tangible results that align with your goals. I combine strategic thinking with proven expertise to solve problems efficiently, ensuring your project is not just completed, but completed with a standard of excellence that drives real growth.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="/Client.jpg"
                  alt="Client focused service image"
                  className="size-22"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Client-Centric Focus
              </h3>
              <p>
                I prioritize understanding your vision, ensuring every project is tailored to your specific goals and
                delivers measurable results.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="/Delivery.jpg"
                  alt="On-time delivery image"
                  className="size-22"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Reliable Delivery
              </h3>
              <p>
                With a track record of meeting deadlines and exceeding expectations, I bring professionalism and
                dependability to every collaboration.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="/Improvement.jpg"
                  alt="Continuous improvement image"
                  className="size-22"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Continuous Improvement
              </h3>
              <p>
                My commitment to staying updated with the latest technologies and trends ensures your website is built
                with cutting-edge tools and best practices.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
