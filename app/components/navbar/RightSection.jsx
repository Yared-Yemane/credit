"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";

const RightSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("light"); // Theme state
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Language state

  const modalRef = useRef(null); // Reference to modal
  const buttonRef = useRef(null); // Reference to settings button

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    // Implement theme change logic here (e.g., toggle dark mode)
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Implement language change logic here
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  // Close modal if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center gap-4 relative">
      {/* Login Button */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.95 }}
        className="py-2 px-4 w-auto text-nowrap bg-blue-900 text-white rounded-lg hover:bg-white hover:text-blue-950 hover:border hover:border-blue-900 transition-all duration-200"
      >
        Log in
      </motion.button>

      <label htmlFor="">|</label>

      {/* Settings Icon Button */}
      <motion.button
        ref={buttonRef}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-blue-950 rounded-lg hover:bg-white hover:text-blue-950 transition-all duration-200"
        onClick={toggleModal} // Toggle modal visibility
      >
        <Settings size={20} />
      </motion.button>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          ref={modalRef}
          className="absolute top-full left-6 mt-2 bg-white shadow-lg rounded-lg w-auto py-4 px-5 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Theme Selection */}
          <div className="mb-4">
            <h4 className="font-medium mb-2">Theme</h4>
            <button
              onClick={toggleDarkMode}
              className="text-[#9e95c2] dark:text-[#f9f9f9] hover:bg-[#e2e2e2] dark:hover:bg-[#444] p-2 rounded-full"
            >
              {isDarkMode ? "🌞" : "🌙"}
            </button>
          </div>

          {/* Language Selection */}
          <div className="mb-4">
            <h4 className="font-medium mb-2">Language</h4>
            <button
              onClick={toggleDarkMode}
              className="text-[#9e95c2] dark:text-[#f9f9f9] hover:bg-[#e2e2e2] dark:hover:bg-[#444] p-2 rounded-full"
            >
              {isDarkMode ? "🌞" : "🌙"}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default RightSection;
