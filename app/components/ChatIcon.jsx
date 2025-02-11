"use client";

import { useState } from "react";
// import { Chat } from "lucide-react"; // Using Lucide icons, you can replace with any other icon library
import { MessageSquareIcon } from "lucide-react";

const ChatIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatWindow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 border-2 border-white rounded-full">
      {/* Chat Icon */}
      <div
        onClick={toggleChatWindow}
        className="bg-blue-950 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition-all duration-300"
      >
        <MessageSquareIcon size={24} />
      </div>

      {/* Chat Window (Hidden initially) */}
      {isOpen && (
        <div className="fixed bottom-[70px] right-7 w-80 h-96 bg-white border rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Chat with us</h3>
            <button onClick={toggleChatWindow} className="text-gray-500">
              X
            </button>
          </div>
          {/* Chat messages go here */}
          <div className="flex-1 overflow-y-auto mt-4">
            {/* Example messages */}
            <div className="mb-2 text-sm text-gray-700">
              <strong>Support:</strong> How can I assist you today?
            </div>
            <div className="mb-2 text-sm text-gray-700">
              <strong>You:</strong> I need help with my account.
            </div>
          </div>
          {/* Input field for user */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border rounded-md text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatIcon;
