import React from "react";
import FeedbackForm from "./FeedbackForm";
import LeftFooterSection from "./LeftFooterSection";

const Footer = () => {
  return (
    <div className=" flex justify-between gap-5 h-auto bg-blue-950 py-5">
      <div className=" w-full">
        <LeftFooterSection />
      </div>
      <div className=" w-full">
        <FeedbackForm />
      </div>
    </div>
  );
};

export default Footer;
