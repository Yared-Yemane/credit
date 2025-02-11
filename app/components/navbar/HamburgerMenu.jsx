"use client";

import React, { useState } from "react";
import useStore from "@/app/store/store";

const HamburgerMenu = () => {
  const { isSidebarOpen, toggleSidebar } = useStore(); // Access Zustand action to toggle sidebar

  return (
    <div
      className={`relative hover:bg-gray-300 p-2 rounded-full transition-all duration-300  `}
    >
      <button
        className={`flex flex-col justify-between items-center w-6 h-6 p-1 space-y-1`}
        onClick={toggleSidebar}
      >
        <span
          className={`block h-1 w-6 bg-gray-800 transition-all duration-300 ${
            isSidebarOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-gray-800 transition-all duration-300 ${
            isSidebarOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-gray-800 transition-all duration-300 ${
            isSidebarOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
    </div>
  );
};

export default HamburgerMenu;
