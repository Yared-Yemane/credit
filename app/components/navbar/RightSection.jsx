"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import { ChevronDown as ChevronDownIcon } from "lucide-react"; // Import the arrow icon

const RightSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Language state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  const modalRef = useRef(null); // Reference to modal
  const buttonRef = useRef(null); // Reference to settings button
  const dropdownRef = useRef(null); // Reference to language dropdown

  const toggleModal = () => setIsModalOpen((prev) => !prev);

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

  // Close modal and dropdown if clicking outside of them
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the modal if clicking outside of it
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsModalOpen(false);
      }

      // Close the dropdown if clicking outside of it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const languages = [
    { code: "en", name: "English", flagUrl: "https://flagcdn.com/w320/us.png" },
    { code: "fr", name: "French", flagUrl: "https://flagcdn.com/w320/fr.png" },
    { code: "es", name: "Spanish", flagUrl: "https://flagcdn.com/w320/es.png" },
    { code: "de", name: "German", flagUrl: "https://flagcdn.com/w320/de.png" },
    // Add other languages here with URLs to flag images
  ];

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

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
          className="absolute flex justify-between gap-3 top-full right-1 mt-2 bg-white shadow-lg rounded-lg w-auto pt-2 -pb-3 px-5 z-50 max-w-xs  border border-blue-950"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Language Dropdown */}

          <div className="mb-4">
            {/* <h4 className="font-medium text-lg mb-2">Language</h4> */}
            <div
              ref={dropdownRef} // Reference to the dropdown
              className="relative cursor-pointer p-2 rounded-lg border border-[#ccc] focus:outline-none min-w-[95px]"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
            >
              <div className="flex items-center space-x-2">
                <img
                  src={
                    languages.find((lang) => lang.code === selectedLanguage)
                      ?.flagUrl
                  }
                  alt={selectedLanguage}
                  className="w-6 h-4 inline-block object-contain"
                />
                <span>{selectedLanguage.toUpperCase()}</span>
                {/* Arrow Icon */}
                <ChevronDownIcon className="w-4 h-4 text-gray-600 ml-2" />{" "}
                {/* Customize size and color */}
              </div>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 w-[80px] p-2 bg-white shadow-lg rounded-lg z-10">
                  {languages.map((language) => (
                    <div
                      key={language.code}
                      className="flex items-center p-2 rounded-lg hover:bg-[#e2e2e2] cursor-pointer"
                      onClick={() => handleLanguageChange(language.code)}
                    >
                      <img
                        src={language.flagUrl}
                        alt={language.name}
                        className="w-6 h-4 mr-2 inline-block object-contain"
                      />
                      <span>{language.code.toUpperCase()}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Theme Selection */}
          <div className="mb-4 flex items-center justify-between">
            {/* <h4 className="font-medium text-lg">Theme</h4> */}
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
