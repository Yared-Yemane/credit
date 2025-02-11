"use client";

import Lottie from "lottie-react";
import animationData from "./animation.json"; // Your exported animation

const AnimatedComponent = () => {
  return <Lottie animationData={animationData} loop={true} />;
};

export default AnimatedComponent;
