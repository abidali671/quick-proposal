"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500
        ? setStickyClass("bg-white shadow-md")
        : setStickyClass("bg-gray-dark");
    }
  };
  return (
    <div>
      <nav className={`hero-nav ${stickyClass}`}>
        <div className="nav-container">
          <Image
            alt="logo"
            width={110}
            height={110}
            src={
              stickyClass
                ? "https://n.foxdsgn.com/twilo/wp-content/uploads/2020/10/Group-113258899.png"
                : "https://n.foxdsgn.com/twilo/wp-content/uploads/2020/10/Group-52-1.png"
            }
          />
          <ul
            className={`${
              !stickyClass ? "text-white " : "text-black "
            } hero-ul`}
          >
            <li>Home</li>
            <li>Pages</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact</li>
            <li>
              <button className="primary-btn hidden md:block">
                Get Started
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 block md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </li>
          </ul>
        </div>
      </nav>
      {/* hero section start*/}
      <div className="bg-gray-dark relative">
        <div
          className="hero-overlay"
          style={{
            backgroundImage:
              "url('https://n.foxdsgn.com/twilo/wp-content/uploads/2022/04/Group-49.png')",
          }}
        ></div>
        <div className="wrapper">
          <div className="main-hero">
            <div className="hero-left">
              <h1 className="text-5xl font-bold leading-[60px] text-white">
                Craft Compelling Proposals in{" "}
                <span className="text-orange-light">
                  Minutes with Quick Proposal
                </span>
              </h1>
              <p className="text-[#618A88]">
                Quick Proposal is an AI-powered writing tool that helps you
                create winning Upwork and freelance job proposals in no time.
              </p>

              <div className="pt-5">
                <button className="primary-btn">Get Started</button>
              </div>
            </div>
            <div className="hero-right">
              <Image
                src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/08/Group-2325-2-768x711.png"
                alt="work-image"
                width="1000"
                className="w-full  object-contain"
                height="1000"
              />
            </div>
          </div>
        </div>
      </div>
      {/* hero section end*/}
    </div>
  );
};
export default Header;
