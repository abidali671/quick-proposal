import Link from "next/link";
import React from "react";

interface SidebarProps {
  handleSidebar: () => void;
  isOpen: boolean;
}
export const Sidebar: React.FC<SidebarProps> = ({ handleSidebar, isOpen }) => {
  return (
    <>
      {/* overlay */}

      <div
        className={`w-6/12 h-screen   bg-gray-200 fixed top-0 right-0  transition-transform duration-300 z-20 ${
          isOpen ? "translate-x-0" : " translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-10 gap-7 text-black ">
          <li>
            <Link href="/" onClick={handleSidebar}>
              Home
            </Link>
          </li>
          <li>Pricing</li>
          <li>Contact</li>

          <Link href="/app">
            <button className="primary-btn hidden md:block">Get Started</button>
          </Link>
        </ul>
      </div>

      {isOpen && (
        <div
          onClick={handleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-10"
        ></div>
      )}
      <div onClick={handleSidebar} className="relative z-40 cursor-pointer">
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-9 h-9  block md:hidden ${isOpen && "text-black"}  `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-9 h-9 block md:hidden ${isOpen && "text-black"}  `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        )}
      </div>
    </>
  );
};
