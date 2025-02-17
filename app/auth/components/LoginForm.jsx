"use client";

import React, { useState } from "react";
import { FaUser, FaCog, FaBuilding, FaEye, FaEyeSlash } from "react-icons/fa";

const ForgotPasswordForm = ({
  setEmail,
  email,
  handleForgotPasswordSubmit,
}) => (
  <div className="mt-6 p-4 border rounded-lg bg-gray-50">
    <h3 className="text-xl font-semibold text-center">Forgot Password</h3>
    <form onSubmit={handleForgotPasswordSubmit} className="mt-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
      />
      <button
        type="submit"
        className="w-full mt-4 bg-blue-900 text-white py-3 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl"
      >
        Send Reset Link
      </button>
    </form>
  </div>
);

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedForm, setSelectedForm] = useState("customer");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [email, setEmail] = useState(""); // for Forgot Password form
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setConfirmPasswordVisible(!confirmPasswordVisible);

  const handleValidation = (name, value) => {
    const newErrors = { ...errors };

    if (name === "firstName" || name === "lastName") {
      newErrors[name] = value ? "" : "This field is required";
    }

    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA1-9.-]+\.[a-zA-Z]{2,}$/;
      newErrors[name] = emailRegex.test(value) ? "" : "Invalid email address";
    }

    if (name === "phone") {
      const phoneRegex = /^[0-9]{9}$/;
      newErrors[name] = phoneRegex.test(value) ? "" : "Invalid phone number";
    }

    if (name === "password") {
      newErrors[name] =
        value.length >= 6 ? "" : "Password must be at least 6 characters";
    }

    if (name === "confirmPassword") {
      newErrors[name] =
        value === errors.password ? "" : "Passwords do not match";
    }

    setErrors(newErrors);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to handle sending a password reset email
    console.log("Reset link sent to", email);
  };

  const getSideImage = () => {
    switch (selectedForm) {
      case "customer":
        return "/auth/customer-image.png";
      case "institution":
        return "/auth/institution-image.png";
      case "admin":
        return "/auth/admin-image.png";
      default:
        return "/auth/default-image.png";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-6 pb-16 pt-32">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8 md:flex md:space-x-8">
        {/* Left Side: Form Section */}
        <div className="flex-1">
          <div className="flex justify-center mb-6">
            {/* Icon/Logo Section */}
            <div className="bg-purple-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-10 h-10 text-blue-950"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-4.03-9-9-9 4.03-9 9-9zm0 0v9l6 3"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-center text-gray-900">
            {isLogin ? "Welcome back" : "Create an account"}
          </h2>
          <p className="text-sm text-center text-gray-500 mb-8">
            {isLogin
              ? "Please enter your details to log in"
              : "Sign up to get started"}
          </p>

          <div className="flex justify-center space-x-6 mb-6">
            <button
              onClick={() => setSelectedForm("customer")}
              className={`flex items-center space-x-2 px-6 py-2 text-sm font-semibold rounded-lg focus:outline-none transition-all duration-300 ease-in-out transform ${
                selectedForm === "customer"
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 text-blue-900"
              }`}
            >
              <FaUser className="text-lg" />
              <span>Customer</span>
            </button>
            <button
              onClick={() => setSelectedForm("institution")}
              className={`flex items-center space-x-2 px-6 py-2 text-sm font-semibold rounded-lg focus:outline-none transition-all duration-300 ease-in-out transform ${
                selectedForm === "institution"
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 text-blue-900"
              }`}
            >
              <FaBuilding className="text-lg" />
              <span>Institution</span>
            </button>
            <button
              onClick={() => setSelectedForm("admin")}
              className={`flex items-center space-x-2 px-6 py-2 text-sm font-semibold rounded-lg focus:outline-none transition-all duration-300 ease-in-out transform ${
                selectedForm === "admin"
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 text-blue-900"
              }`}
            >
              <FaCog className="text-lg" />
              <span>Admin</span>
            </button>
          </div>

          <form>
            {/* Render different forms based on selected type */}
            {!isLogin && selectedForm === "customer" && (
              <div className="transition-all duration-500 ease-in-out opacity-100">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      name="firstName"
                      onBlur={(e) =>
                        handleValidation("firstName", e.target.value)
                      }
                      className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Middle Name"
                      className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      name="lastName"
                      onBlur={(e) =>
                        handleValidation("lastName", e.target.value)
                      }
                      className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                  <div>
                    <select
                      required
                      className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    >
                      <option value="" className="text-gray-500">
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                required
                name="email"
                onBlur={(e) => handleValidation("email", e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {!isLogin && (
              <div className="mb-6">
                <div className="flex items-stretch border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-900">
                  <span className="px-3 py-2 bg-gray-200 rounded-l-lg flex items-center h-full">
                    +251
                  </span>
                  <input
                    type="tel"
                    maxLength="9"
                    pattern="[0-9]{9}"
                    placeholder="912345678"
                    required
                    name="phone"
                    onBlur={(e) => handleValidation("phone", e.target.value)}
                    className="w-full h-full text-sm focus:outline-none py-2 px-3 rounded-r-lg"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            )}

            <div className="mb-6 relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                required
                name="password"
                onBlur={(e) => handleValidation("password", e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {passwordVisible ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:translate-y-1 active:translate-y-0 active:shadow-md"
            >
              {isLogin ? "Log in" : "Sign up"}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-950 font-semibold hover:underline"
            >
              {isLogin ? "Create account" : "Log in"}
            </button>
          </p>

          {/* Forgot Password Form is now a separate component */}
          {/* {isLogin && (
            <ForgotPasswordForm
              setEmail={setEmail}
              email={email}
              handleForgotPasswordSubmit={handleForgotPasswordSubmit}
            />
          )} */}
        </div>

        {/* Right Side: Image Based on Selected Form */}
        <div className="hidden md:block flex-1">
          <div className="h-full w-full rounded-2xl px-10 flex items-center justify-center">
            <img
              src={getSideImage()} // Dynamically select image
              alt="Side Image"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
