"use client";

import React, { useEffect, useRef, useState } from "react";
import useStore from "../store/store";
import NavBarMenus from "../data/NavBarMenus";

const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useStore();
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        overlayRef.current &&
        overlayRef.current.contains(event.target)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSidebar]);

  return (
    <div>
      {/* 🔷 Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-100 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
      ></div>
      {/* 📌 Sidebar */}
      {/* h-[calc(100vh-4rem)] */}
      <div
        ref={sidebarRef}
        className={`fixed top-24 left-1 rounded-md py-5 z-10 w-64  bg-white shadow-md transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {NavBarMenus.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                onClick={() => setActive(item.label)}
                className={`cursor-pointer flex items-center gap-4 px-6 py-3 rounded-r-full transition ${
                  active === item.label
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon
                  size={20}
                  className={
                    active === item.label ? "text-blue-600" : "text-gray-600"
                  }
                />
                <h1 className="text-sm font-semibold">{item.label}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
