"use client";

import { useState, useEffect } from "react";
import { MessageSquareIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ChatIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDots, setShowDots] = useState(true);

  const toggleChatWindow = () => {
    setIsOpen(!isOpen);
  };

  // Make dots appear and disappear in intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setShowDots((prev) => !prev);
    }, 3000); // Dots swing every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Icon with Swinging Dots */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChatWindow}
        className="relative bg-blue-950 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition-all duration-300"
      >
        <MessageSquareIcon size={30} />

        {/* Swinging Dots (Only when chat is closed) */}
        {!isOpen && showDots && (
          <motion.div
            className="absolute top-[22px] left-1/2 -translate-x-1/2 flex space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[0, 1].map((i) => (
              <motion.span
                key={i}
                className="w-1.5 h-1.5 bg-white rounded-full"
                animate={{
                  y: [0, -2, 0], // Swing up and down
                }}
                transition={{
                  duration: 0.5,
                  repeat: 3, // Swings 3 times per interval
                  repeatType: "reverse",
                  delay: i * 0.2, // Stagger for a wave effect
                }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Animated Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-[70px] right-7 w-80 h-96 bg-white border rounded-lg shadow-xl p-4"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">Chat with us</h3>
              <button
                onClick={toggleChatWindow}
                className="text-gray-500 hover:text-gray-800 transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat messages */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
              className="flex-1 overflow-y-auto mt-4 text-sm text-gray-700"
            >
              <div className="mb-2">
                <strong>Support:</strong> How can I assist you today?
              </div>
              <div className="mb-2">
                <strong>You:</strong> I need help with my account.
              </div>
            </motion.div>

            {/* Input field */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full p-2 border rounded-md text-sm"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatIcon;
