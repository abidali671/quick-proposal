"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/assets/icon";

const Header = () => {
  const [stickyClass, setStickyClass] = useState("dark");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500 ? setStickyClass("light") : setStickyClass("dark");
    }
  };

  const handleSidebar = () => {};

  return (
    <nav className={`hero-nav ${stickyClass}`}>
      <div className="nav-container">
        <Logo />
        <ul className={`hero-ul`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>
            <Link href="/app">
              <button className="primary-btn hidden md:block">
                Get Started
              </button>
            </Link>

            <div onClick={handleSidebar}>
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
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
