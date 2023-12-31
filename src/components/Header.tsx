"use client";
import Link from "next/link";
import { LogoDark, LogoLight } from "@/assets/icon";
import { Sidebar } from "./Sidebar";
import useHeader from "@/hooks/useHeader";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { useStore } from "@/lib/Context";

const Header = () => {
  const { stickyClass, isOpen, handleSidebar } = useHeader();

  const pathname = usePathname();
  const store = useStore();

  return (
    <nav className={`hero-nav ${stickyClass}`}>
      <div className="nav-container">
        {stickyClass == "dark" ? (
          <LogoDark className="h-9 md:h-10" />
        ) : (
          <LogoLight className="h-9 md:h-10" />
        )}
        <ul className={`hero-ul`}>
          <li>
            <Link href="/#home">Home</Link>
          </li>
          <li>
            <Link href="/#features">Features</Link>
          </li>
          <li>
            <Link href="/#pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/#contact-us">Contact Us</Link>
          </li>
          <li>
            <Link href="/#testimonials">Testimonials</Link>
          </li>
          <li className="w-32">
            <Link href="/register">
              <Button label="Get Started" />
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
