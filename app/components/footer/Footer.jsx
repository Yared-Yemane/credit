import React from "react";
import FeedbackForm from "./FeedbackForm";
import LeftFooterSection from "./LeftFooterSection";

const Footer = () => {
  return (
    <div className="flex flex-col bg-blue-950 py-5">
      <div className="flex justify-between gap-5 px-10">
        <div className="w-full">
          <LeftFooterSection />
        </div>
        <div className="w-full">
          <FeedbackForm />
        </div>
      </div>
      <div className="border-t border-gray-700 mt-5 pt-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} AfroTrust. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
