"use client";
import Link from "next/link";
import { LogoDark, LogoLight } from "@/assets/icon";
import { Sidebar } from "./Sidebar";
import useHeader from "@/hooks/useHeader";

const Header = () => {
  const { stickyClass, isOpen, handleSidebar } = useHeader();

  return (
    <nav className={`hero-nav ${stickyClass}`}>
      <div className="nav-container">
        {stickyClass == "dark" ? <LogoDark /> : <LogoLight />}
        <ul className={`hero-ul`}>
          <li>
            <Link href="/#home">Home</Link>
          </li>
          <li>
            <Link href="/#pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/#contact-us">Contact Us</Link>
          </li>
          <li>
            <Link href="/app">
              <button className="primary-btn hidden md:block">
                Get Started
              </button>
            </Link>
          </li>
        </ul>
        <div className={`md:hidden block side-menu ${stickyClass}`}>
          <Sidebar handleSidebar={handleSidebar} isOpen={isOpen} />
        </div>
      </div>
    </nav>
  );
};
export default Header;
