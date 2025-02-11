"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Profit() {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-between px-8 pt-12 pb-5 bg-white overflow-hidden"
    >
      {/* Left Side: Illustration */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/profit.png"
          alt="Credit Scoring System"
          className="max-w-full h-auto"
        />
      </motion.div>

      {/* Right Side: Text Content */}
      <motion.div
        className="w-full lg:w-1/2 mt-8 lg:mt-0 text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-yellow-200 text-yellow-800 px-3 py-1 inline-block rounded-full text-sm font-semibold">
          HOW WE PROFIT
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mt-3">
          No Fees for You – We Partner with Banks
        </h2>
        <p className="text-gray-600 mt-4">
          Our credit scoring system is completely free for customers. We ensure
          lenders and banks have the insights they need to make informed lending
          decisions, minimizing risk and maximizing returns.
        </p>
        <p className="text-gray-600 mt-3">
          Our revenue comes directly from financial institutions, so you can use
          our services without worrying about hidden fees or charges.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center text-gray-700">
            <Check className="text-blue-950 w-5 h-5 mr-2" /> Subscription-based
            access to advanced credit analytics
          </li>
          <li className="flex items-center text-gray-700">
            <Check className="text-blue-950 w-5 h-5 mr-2" /> Transaction fees
            for real-time credit evaluations
          </li>
          <li className="flex items-center text-gray-700">
            <Check className="text-blue-950 w-5 h-5 mr-2" /> Premium risk
            assessment reports for financial institutions
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
