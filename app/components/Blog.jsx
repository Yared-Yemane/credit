"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How Credit Scores Impact Loan Approvals",
    date: "2 Days ago",
    description:
      "Understanding how your credit score influences loan approvals and interest rates can help you make better financial decisions.",
    image: "/blog/impact.png",
  },
  {
    id: 2,
    title: "5 Key Factors That Determine Your Credit Score",
    date: "4 Days ago",
    description:
      "Learn about the major factors that affect your credit score and how to optimize them for a better financial future.",
    image: "/blog/factors.png",
  },
  {
    id: 3,
    title: "Building Credit: Best Practices for Beginners",
    date: "3 Days ago",
    description:
      "If you're new to credit, this guide will help you establish a strong credit history and avoid common mistakes.",
    image: "/blog/beginners.png",
  },
  {
    id: 4,
    title: "How to Improve Your Credit Score in 30 Days",
    date: "5 Days ago",
    description:
      "A step-by-step approach to boosting your credit score quickly and effectively.",
    image: "/blog/improve.png",
  },
];

const Blog = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="bg-yellow-200 text-yellow-800 mb-8 px-3 py-1 inline-block rounded-full text-sm font-semibold">
          BLOG POSTS
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ amount: 0.2 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
              />
              <div className="p-5 font-sans">
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <a href="">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                </a>
                <p className="text-gray-600 text-sm mt-2">{post.description}</p>
                <a
                  href="#"
                  className="text-black font-semibold flex items-center mt-4"
                >
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
