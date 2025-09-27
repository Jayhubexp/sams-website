"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import {
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer2() {
  const formState = useForm();
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 lg:grid-cols-3">
            <a
              href="/"
              className="sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
            >
              <img
                src="/Group.png"
                alt="Logo image"
                className="max-h-12 lg:max-h-16 object-contain"
              />
            </a>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Quick Links</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="/" className="flex items-center gap-3">
                    Home Page
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/portfolio" className="flex items-center gap-3">
                    My Work
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/about" className="flex items-center gap-3">
                    About Me
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="mailto:samueljohnsonsokpoli@gmail.com" className="flex items-center gap-3">
                    Contact Info
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="https://mindshifttttttt.blogspot.com/" className="flex items-center gap-3" target="_blank">
                    Blog Posts
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Follow Me</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="https://github.com/Jayhubexp" className="flex items-center gap-3" target="_blank">
                    GitHub Profile
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="https://www.linkedin.com/in/samuel-sokpoli-49736123a/
" className="flex items-center gap-3" target="_blank">
                    LinkedIn Page
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="https://x.com/SamuelJohn95977" className="flex items-center gap-3" target="_blank">
                    Twitter Feed
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="https://t.me/+6-Icaz0tAb00YTBk" className="flex items-center gap-3" target="_blank">
                    Telegram Channel
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/portfolio" className="flex items-center gap-3">
                    Portfolio Site
                  </a>
                </li>
              </ul>
            </div>

          </div>
          <div className="flex flex-col">
            <h1 className="mb-3 font-semibold md:mb-4">Subscribe</h1>
            <p className="mb-3 text-sm md:mb-4">
              Join my newsletter to stay informed about updates and new
              features.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email Here"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button title="Join" variant="secondary" size="sm">
                  Join
                </Button>
              </form>
              <p className="text-xs">
                By subscribing, you consent to my Privacy Policy and updates.
              </p>
            </div>
          </div>
        </div>
        <div className="h-px w-full hr-theme" />
        <div className="flex flex-col-reverse items-start pb-4 pt-6 text-sm md:justify-start md:pb-0 md:pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
            <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
              <p className="mt-8 md:mt-0">
                © 2024 Samuel Johnson Sokpoli. All rights reserved.
              </p>
            </div>
          </div>
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
            <a href="https://snapchat.com/t/qC4xmRs3" target="_blank">
              <FaSnapchat className="size-6" />
            </a>
            <a href="https://www.instagram.com/_super.sam?igsh=b2hkOGNqM2tvbng1&utm_source=qr
" target="_blank">
              <BiLogoInstagram className="size-6" />
            </a>
            <a href="https://x.com/SamuelJohn95977" target="_blank">
              <FaXTwitter className="size-6 p-0.5" />
            </a>
            <a href="https://www.linkedin.com/in/samuel-sokpoli-49736123a/
" target="_blank">
              <BiLogoLinkedinSquare className="size-6" />
            </a>
            <a href="https://t.me/brighttday" target="_blank">
              <FaTelegram className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
