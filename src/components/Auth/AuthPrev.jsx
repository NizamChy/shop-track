"use client";

import React, { useState, useEffect } from "react";

const AuthModal = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const switchToRegister = () => setIsLoginView(false);
  const switchToLogin = () => setIsLoginView(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      isLoginView ? "Login form submitted" : "Register form submitted"
    );
  };

  if (!mounted) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-black bg-opacity-50 backdrop-blur-sm"
            : "bg-black bg-opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      >
        <div
          className={`bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 p-6 relative transform transition-all duration-300 ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex mb-6 border-b border-gray-200">
            <button
              onClick={switchToLogin}
              className={`py-2 px-4 font-medium text-center flex-1 transition-colors ${
                isLoginView
                  ? "text-teal-600 border-b-2 border-teal-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Login
            </button>
            <button
              onClick={switchToRegister}
              className={`py-2 px-4 font-medium text-center flex-1 transition-colors ${
                !isLoginView
                  ? "text-teal-600 border-b-2 border-teal-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Register
            </button>
          </div>

          {isLoginView ? (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600 mb-6">Sign in to your account</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <div className="text-right mt-2">
                    <button
                      type="button"
                      className="text-sm text-teal-600 hover:text-teal-800"
                    >
                      Forgot password?
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 transition duration-200 font-medium shadow-md hover:shadow-teal-200 shadow-teal-100"
                >
                  Sign In
                </button>
              </form>
              <p className="mt-6 text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={switchToRegister}
                  className="text-teal-600 hover:text-teal-800 font-medium"
                >
                  Register now
                </button>
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Create Account
              </h2>
              <p className="text-gray-600 mb-6">
                Join us to start tracking your shops
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="register-phone"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="register-phone"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="register-password"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="register-password"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Create a password (min. 8 characters)"
                    required
                    minLength={8}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="confirm-password"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 transition duration-200 font-medium shadow-md hover:shadow-teal-200 shadow-teal-100"
                >
                  Create Account
                </button>
              </form>
              <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={switchToLogin}
                  className="text-teal-600 hover:text-teal-800 font-medium"
                >
                  Sign in
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthModal;

// modal open from another component

// const [isModalOpen, setIsModalOpen] = useState(false);

// const openModal = () => {
//   setIsModalOpen(true);
//   document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
// };

// const closeModal = () => {
//   setIsModalOpen(false);
//   document.body.style.overflow = "unset"; // Re-enable scrolling
// };

// <>     {/* <AuthModal isOpen={isModalOpen} onClose={closeModal} /> */}  </>
