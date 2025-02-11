"use client";

import { useState } from "react";
import React from "react";
import NavBarMenus from "@/app/data/NavBarMenus";

const NavMenus = () => {
  const [active, setActive] = useState("Home"); // Default active tab
  const NavBarMenusData = NavBarMenus;

  return (
    <div className="sticky w-full">
      <div className="flex items-center justify-start gap-2 h-14 text-gray-700 text-sm font-medium px-6">
        {NavBarMenusData.map((menu, index) => {
          const Icon = menu.icon;
          return (
            <button
              key={index}
              onClick={() => setActive(menu.label)}
              className={`inline-flex items-center gap-2 rounded-3xl py-[10px] px-3 transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap ${
                active === menu.label
                  ? "text-blue-600 font-semibold bg-blue-50"
                  : "border border-gray-300 hover:bg-[#f3f4ff] hover:text-blue-600"
              }`}
            >
              <Icon size={18} className="text-blue-600" />
              {menu.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NavMenus;
