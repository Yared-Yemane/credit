"use client";

import React, { useState, useEffect } from "react";
import LeftSection from "./LeftSection";
import NavMenus from "./NavMenus";
import RightSection from "./RightSection";
import useStore from "@/app/store/store";

const NavBar = () => {
  const { isSidebarOpen } = useStore();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollThreshold, setScrollThreshold] = useState(50); // Adjust delay threshold

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + scrollThreshold) {
        // Waits for some downward scrolling before hiding
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Shows immediately on scroll up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollThreshold]);

  return (
    <div
      className={`fixed top-0 left-0 w-full font-sans bg-white z-50 flex justify-between items-center gap-10 py-3 pl-5 pr-14 border-2 transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <LeftSection />
      <NavMenus />
      <RightSection />
    </div>
  );
};

export default NavBar;
