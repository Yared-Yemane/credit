"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ imgSrc, title, description, color }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // Set state to true when element is in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    // Target the element we want to observe
    const target = document.getElementById(title);
    if (target) {
      observer.observe(target);
    }

    // Clean up observer on component unmount
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [title]);

  return (
    <div
      className="bg-white rounded-lg w-80 p-6 text-center relative flex flex-col items-center"
      id={title}
    >
      {/* Circle with the icon */}
      <motion.div
        className="absolute -top-16 w-[132px] h-[132px] bg-blue-950 flex justify-center items-center rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: inView ? 1.1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        <img src={imgSrc} alt={title} className="w-12" />
      </motion.div>

      {/* Title and description */}
      <div className="pt-24">
        {" "}
        {/* Adjusted padding-top to position below the circle */}
        <h3 className={`text-xl font-bold ${color}`}>{title}</h3>
        <p className="text-gray-500 mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

const KeyFeatures = () => {
  return (
    <div className="py-12 px-5">
      <h1 className="text-center text-blue-900 font-bold max-w-lg mx-auto mb-5 text-4xl">
        We Are Increasing Success With IT Solution
      </h1>
      <p className="text-center text-blue-900 max-w-3xl mx-auto mb-5 text-lg font-roboto">
        Customers can track and improve their scores effortlessly, while lenders
        gain access to reliable, data-backed evaluations for smarter lending
        decisions. Whether you're securing better loan offers or optimizing risk
        assessment, our solution ensures transparency, accuracy, and financial
        growth.
      </p>
      <div className="flex justify-center gap-10 flex-wrap bg-white mx-16 pt-20 border">
        {/* Feature Card 1 */}
        <FeatureCard
          imgSrc="/icons/credit-score.svg"
          title="Analyze Your Score"
          description="Get real-time insights into your credit score and understand factors affecting it."
          color="text-blue-900"
        />

        {/* Feature Card 2 */}
        <FeatureCard
          imgSrc="/icons/improve.svg"
          title="Improve Your Score"
          description="Personalized tips and strategies to enhance your creditworthiness."
          color="text-green-900"
        />

        {/* Feature Card 3 */}
        <FeatureCard
          imgSrc="/icons/loan.svg"
          title="Access Better Loans"
          description="Use your improved credit score to qualify for better loan offers and financial products."
          color="text-purple-900"
        />
      </div>
    </div>
  );
};

export default KeyFeatures;
