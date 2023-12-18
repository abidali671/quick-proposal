import React, { useEffect } from "react";

import { useState } from "react";
export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth <= 786 ? false : isOpen);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* overlay */}

      <div
        className={`w-8/12 h-screen bg-white fixed top-0 right-0 transition-transform duration-300 z-20 ${
          isOpen ? "translate-x-0" : " translate-x-full"
        }`}
      >
        {/* Your Sidebar Content */}
      </div>

      {isOpen && (
        <div
          onClick={handleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-10"
        ></div>
      )}
      <div onClick={handleSidebar} className="relative z-40">
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
