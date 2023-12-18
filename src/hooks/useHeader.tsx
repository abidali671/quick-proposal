import { useState, useEffect } from "react";

interface HeaderState {
  stickyClass: string;
  isOpen: boolean;
}

interface HeaderActions {
  handleSidebar: () => void;
}

type HeaderHookResult = HeaderState & HeaderActions;

const useHeader = (): HeaderHookResult => {
  const [stickyClass, setStickyClass] = useState<string>("dark");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    windowHeight > 500 ? setStickyClass("light") : setStickyClass("dark");
  };

  const handleResize = () => {
    setIsOpen(window.innerWidth <= 786 ? false : isOpen);
  };

  const handleSidebar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", stickNavbar);
    handleResize();

    return () => {
      window.removeEventListener("scroll", stickNavbar);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    stickyClass,
    isOpen,
    handleSidebar,
  };
};

export default useHeader;
