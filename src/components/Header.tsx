"use client";
import Link from "next/link";
import { LogoDark, LogoLight, Logout } from "@/assets/icon";
import { Sidebar } from "./Sidebar";
import useHeader from "@/hooks/useHeader";
import Button from "./Button";
import { usePathname, useRouter } from "next/navigation";
import { useStore } from "@/lib/Context";
import { useState } from "react";

const Header = () => {
  const { stickyClass, isOpen, handleSidebar } = useHeader();
  const { user, updateAccessToken } = useStore();
  const pathname = usePathname();
  const router = useRouter();

  const [menu, setMenu] = useState(false);

  const DashboardNavList = () => {
    return (
      <li className="relative">
        <div
          className="h-8 w-8 md:w-10 md:h-10 rounded-full bg-gray-200 cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          <p className="text-gray-700 text-center uppercase font-bold text-lg leading-8 md:leading-10">
            {user?.name[0]}
          </p>
        </div>

        <div
          className={
            "bg-gray-100 shadow rounded-md absolute top-full right-0 mt-1 w-64 overflow-hidden transition-all duration-1000 " +
            (menu ? "max-h-[300px] " : "max-h-0 ")
          }
        >
          <ul>
            <li className="flex items-center gap-2 border-b border-gray-200 p-2">
              <div className="h-8 w-8 md:w-10 md:h-10 rounded-full bg-gray-300 cursor-pointer">
                <p className="text-gray-700 text-center uppercase font-bold text-lg leading-8 md:leading-10">
                  {user?.name[0]}
                </p>
              </div>
              <div>
                <p className="font-bold text-sm capitalize">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
            </li>
            <li
              className="px-2 py-3 flex items-center gap-2"
              onClick={() => {
                updateAccessToken("");
                router.push("/");
              }}
            >
              <Logout className="text-gray-500" />
              <p className="text-sm font-medium text-gray-500">Logout</p>
            </li>
          </ul>
        </div>
      </li>
    );
  };

  return (
    <nav className={`hero-nav ${stickyClass}`}>
      <div className="nav-container">
        <Link href="/">
          {stickyClass == "dark" ? (
            <LogoDark className="h-9 md:h-10" />
          ) : (
            <LogoLight className="h-9 md:h-10" />
          )}
        </Link>
        <ul className={`hero-ul`}>
          {pathname === "/dashboard" ? (
            <DashboardNavList />
          ) : (
            <>
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
              {user ? (
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
              ) : (
                <li className="w-32">
                  <Link href="/register">
                    <Button label="Get Started" />
                  </Link>
                </li>
              )}
            </>
          )}
        </ul>
        <div className={`md:hidden block side-menu ${stickyClass}`}>
          <Sidebar handleSidebar={handleSidebar} isOpen={isOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
