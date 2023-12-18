"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/assets/icon";
import { Sidebar } from "./Sidebar";

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
        <ul className={`hero-ul relative`}>
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
          </li>
          <Sidebar />
        </ul>
      </div>
    </nav>
  );
};
export default Header;
