import React from "react";
import { motion } from "framer-motion";
import HeroMenu from "../data/HeroMenu";
import AutoSlidingMenu from "./AutoSlidingMenu";
import RatingReviews from "./RatingReviews";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";

const Hero = () => {
  const HeroMenuData = HeroMenu;
  return (
    <div className=" grid grid-cols-2 pt-36 px-5 pb-5 font-sans">
      <div className=" flex flex-col justify-b px-10 pt-5 gap-14 text-blue-900">
        <div className=" flex flex-col gap-3">
          <h1 className=" text-left text-4xl">
            Redefining Trust: Data-Driven <b>Credit Scoring</b> for your{" "}
            <b>Bright Future</b>
          </h1>
          <p className="text-lg text-left font-roboto">
            Our advanced credit scoring system leverages data-driven insights to
            evaluate financial reliability with precision. By analyzing
            patterns, behaviors, and risk factors, we empower lenders with
            accurate assessments, ensuring fair and informed lending decisions.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            className="py-2 px-4 bg-blue-900 text-white rounded-lg hover:bg-white hover:text-blue-950 hover:border hover:border-blue-900 transition-all duration-200"
          >
            Login
          </motion.button> */}
          {/* Signup Button */}
          <button className="py-2 px-20 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200">
            Create Account
          </button>
          {/* Login Button */}
          <button className="py-2 px-20 bg-transparent text-blue-900 font-medium border border-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-200">
            Log in
          </button>
        </div>
        <div>
          <RatingReviews />
        </div>
      </div>
      <div>
        <img
          src="/hero.png"
          alt="hero image"
          className=" w-full h-auto align rounded-t-lg"
        />
        <div className=" w-full bg-blue-950 rounded-b-lg">
          <AutoSlidingMenu />
        </div>
      </div>
    </div>
  );
};

export default Hero;
