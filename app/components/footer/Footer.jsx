import React from "react";
import FeedbackForm from "./FeedbackForm";

const Footer = () => {
  return (
    <div className=" flex justify-between gap-5 h-auto bg-blue-950 py-5">
      <div></div>
      <div className=" w-full">
        <FeedbackForm />
      </div>
    </div>
  );
};

export default Footer;
