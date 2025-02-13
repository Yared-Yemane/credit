import React from "react";
import HamburgerMenu from "./HamburgerMenu";

const LeftSection = () => {
  return (
    <div className="flex justify-between items-center gap-8">
      <HamburgerMenu />
      <a href="/">
        <label className=" font-semibold text-4xl text-blue-950 tracking-tighter cursor-pointer">
          AfroTrust
        </label>
      </a>
    </div>
  );
};

export default LeftSection;
