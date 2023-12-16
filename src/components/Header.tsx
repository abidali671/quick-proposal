"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

  return (
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
        <ul className={`hero-ul`}>
          <li>Home</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>
            <button className="primary-btn hidden md:block">Get Started</button>
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
  );
};
export default Header;
