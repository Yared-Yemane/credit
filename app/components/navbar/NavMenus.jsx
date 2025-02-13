"use client";

import { useState } from "react";
import React from "react";
import NavBarMenus from "@/app/data/NavBarMenus";
import { IoIosArrowDown } from "react-icons/io"; // Add arrow icon

const NavMenus = () => {
  const [active, setActive] = useState("Home"); // Default active tab
  const [openDropdown, setOpenDropdown] = useState(null); // Track dropdown state
  const NavBarMenusData = NavBarMenus;

  return (
    <div className="sticky w-full bg-white border-b border-gray-200">
      <div className="flex items-center justify-start gap-2 h-14 text-gray-700 text-sm font-medium px-6 relative">
        {NavBarMenusData.map((menu, index) => {
          const Icon = menu.icon;
          const hasDropdown = menu.submenus && menu.submenus.length > 0;

          return (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => setActive(menu.label)}
                className={`inline-flex items-center gap-2 rounded-3xl py-[10px] px-3 transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap ${
                  active === menu.label
                    ? "text-blue-600 font-semibold bg-blue-50"
                    : "border border-gray-300 hover:bg-[#f3f4ff] hover:text-blue-600"
                }`}
              >
                <Icon size={18} className="text-blue-600" />
                {menu.label}
                {/* Conditional rendering of dropdown arrow */}
                {hasDropdown && (
                  <IoIosArrowDown
                    size={14}
                    className={`transition-transform duration-200 ease-in-out ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Dropdown Menu - Same position for all menus */}
              {hasDropdown && (
                <div
                  className={`absolute grid grid-cols-2 gap-4 w-[calc(100vw-4rem)] p-2 bg-blue-950 shadow-xl rounded-lg border border-gray-100 transition-all duration-300 ease-in-out transform ${
                    openDropdown === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3 pointer-events-none"
                  }`}
                  style={{
                    position: "fixed", // Make sure it stays in the same place
                    left: "50%", // Align dropdown to the center of the viewport
                    top: "100%", // Position the dropdown directly below the navbar
                    transform: "translateX(-50%)", // Center the dropdown horizontally
                    zIndex: 10, // Ensure dropdown is above other elements
                  }}
                >
                  {/* Left side - Submenu Cards (2x2 grid) */}
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {menu.submenus.map((submenu, subIndex) => (
                      <a
                        key={subIndex}
                        href={submenu.url}
                        className="block px-6 py-5 bg-blue-950 border border-white rounded-lg hover:shadow-xl hover:bg-white transition-all duration-300 ease-in-out text-white hover:text-blue-950"
                      >
                        <div className="flex flex-col">
                          <span className="text-lg font-semibold">
                            {submenu.label}
                          </span>
                          <span className="text-sm text-gray-400 mt-2">
                            {submenu.description}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Right side - Image related to the main menu */}
                  <div className="flex justify-center items-center bg-gray-100 rounded-lg">
                    <img
                      src={menu.image || "/default-image.jpg"} // Replace with actual image URL
                      alt={menu.label}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavMenus;
