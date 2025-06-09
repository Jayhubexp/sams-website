"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog34() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Iron and Wisdom
            </h1>
            <p className="md:text-md">
              Mastering Confidence, Leadership, and Growth.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="https://mindshifttttttt.blogspot.com/2025/02/go-wild-or-go-home-breaking-free-from.html" className="mb-6 w-full">
              <img
                src="/assets/Blog_G.jpg"
                alt="Relume placeholder image 1"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Growth
              </p>
              <p className="inline text-sm font-semibold">5 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="https://mindshifttttttt.blogspot.com/2025/02/go-wild-or-go-home-breaking-free-from.html">
              <h2 className="text-xl font-bold md:text-2xl">
                Go Wild or Go Home
              </h2>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <a
              title="Read more"
              href="https://mindshifttttttt.blogspot.com/2025/02/go-wild-or-go-home-breaking-free-from.html"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </a>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="https://mindshifttttttt.blogspot.com/2025/05/the-relativity-of-vision-why-your.html" className="mb-6 w-full">
              <img
                src="/assets/Blog_R.jpg"
                alt="Relume placeholder image 1"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Confidence
              </p>
              <p className="inline text-sm font-semibold">5 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="https://mindshifttttttt.blogspot.com/2025/05/the-relativity-of-vision-why-your.html">
              <h2 className="text-xl font-bold md:text-2xl">
                Your perspective determines your reality
              </h2>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <a
              title="Read more"
              href="https://mindshifttttttt.blogspot.com/2025/05/the-relativity-of-vision-why-your.html"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </a>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="https://mindshifttttttt.blogspot.com/2025/02/the-weight-of-crown-why-modern-men-must.html" className="mb-6 w-full">
              <img
                src="/assets/Blog_L.jpg"
                alt="Relume placeholder image 1"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Leadership
              </p>
              <p className="inline text-sm font-semibold">5 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="https://mindshifttttttt.blogspot.com/2025/02/the-weight-of-crown-why-modern-men-must.html">
              <h2 className="text-xl font-bold md:text-2xl">
                The weight of the crown
              </h2>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <a
              title="Read more"
              href="https://mindshifttttttt.blogspot.com/2025/02/the-weight-of-crown-why-modern-men-must.html"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">

          <a href="https://mindshifttttttt.blogspot.com/"
            title="View all"
            className="mt-10 md:mt-14 lg:mt-16">View all</a>
        </div>
      </div>
    </section>
  );
}
