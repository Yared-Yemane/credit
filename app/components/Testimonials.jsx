"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Elaine Brown Sr.",
    role: "Financial Consultant",
    text: "This credit scoring app has completely transformed the way I manage my finances. The real-time score updates and personalized insights helped me improve my creditworthiness within months!",
    image: "/testimonial/testimonial-large1.png",
  },
  {
    id: 2,
    name: "Gayle Heaney",
    role: "Small Business Owner",
    text: "As an entrepreneur, maintaining a strong credit profile is crucial. This app provided me with detailed credit analysis and practical recommendations that helped me secure a business loan with ease.",
    image: "/testimonial/testimonial-large2.png",
  },
  {
    id: 3,
    name: "Maryann Leannon",
    role: "Freelance Consultant",
    text: "I used to struggle with understanding my credit score, but this app simplified everything! The AI-driven credit improvement tips helped me increase my score by 80 points in just six months.",
    image: "/testimonial/testimonial-large3.png",
  },
  {
    id: 4,
    name: "Frederick Hoeger",
    role: "Mortgage Seeker",
    text: "I was preparing to apply for a mortgage, and this app gave me the tools to optimize my credit profile. Thanks to their recommendations, I qualified for a lower interest rate and saved thousands!",
    image: "/testimonial/testimonial-large4.png",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="bg-yellow-200 text-yellow-800 mb-8 px-3 py-1 inline-block rounded-full text-sm font-semibold"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }} // Animation triggers every time 20% of the element is visible
        >
          WHAT OUR CUSTOMERS SAY
        </motion.h2>

        <div className="grid md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`flex bg-white overflow-hidden ${
                index == 2 || index == 3 ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ amount: 0.2 }} // Animation will play every time it enters the viewport
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-1/2 h-60 object-cover"
              />
              <div className="p-6 text-center text-sm bg-blue-50 w-1/2 flex flex-col justify-center">
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full border-2 border-gray-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
