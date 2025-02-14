"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Feedback submitted successfully!");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div>
      {" "}
      <div>
        {" "}
        <div className="max-w-lg mx-auto bg-blue-950 text-white shadow-lg rounded-lg p-6 mt-8 border border-white">
          <h2 className="text-2xl font-semibold mb-4">Feedback Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="fullName"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border bg-blue-950 border-white placeholder:text-white rounded-lg"
                placeholder="Your Name"
                required
              />
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border bg-blue-950 border-white placeholder:text-white rounded-lg"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Feedback Textarea */}
            <div className="mb-4">
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows="4"
                className="mt-1 p-2 w-full border bg-blue-950 border-white placeholder:text-white rounded-lg"
                placeholder="Your Messages"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <button className="mt-4 px-5 py-2 bg-white text-blue-950 font-semibold rounded-md flex items-center gap-2 hover:bg-white hover:text-blue-950 hover:border-blue-950 transition-all duration-300">
                {isSubmitting ? "Submitting..." : "Send a Feedback"}
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        {" "}
        {/* QR Code for App Download */}
        <div className="mt-5 flex flex-col justify-between items-center">
          <div className="text-center">
            <p className="text-lg font-semibold text-white mb-4">
              Download Our App
            </p>
            <QRCodeSVG
              className=" ml-4"
              value="https://play.google.com/store/apps?hl=en" // Replace with your app's download URL
              size={160}
              fgColor="#ffffff"
              bgColor="#000000"
              level="H"
            />
            <p className="text-white mt-4">Scan to download our app</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
