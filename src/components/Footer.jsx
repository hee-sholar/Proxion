import React, { useState } from "react";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="bg-black text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png" // replace with your logo path
            alt="Proxion Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Center: Email input + button */}
        <div className="hidden sm:flex items-center space-x-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 rounded-l-lg border border-gray-600 bg-black text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
          />
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-r-lg">
            Get Early Access
          </button>
        </div>

        {/* Right: Navigation Links */}
        <div className="sm:hidden flex items-center">
          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <nav className="hidden sm:flex space-x-6 font-medium">
          <a href="#home" className="hover:text-green-500">Home</a>
          <a href="#features" className="hover:text-green-500">Features</a>
          <a href="#whitepaper" className="hover:text-green-500">Whitepaper</a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden mt-4 flex flex-col space-y-2 px-2">
          <a href="#home" className="hover:text-green-500">Home</a>
          <a href="#features" className="hover:text-green-500">Features</a>
          <a href="#whitepaper" className="hover:text-green-500">Whitepaper</a>

          {/* Mobile Email Input + Button */}
          <div className="flex flex-col sm:hidden space-y-2 mt-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-lg border border-gray-600 bg-black text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
            />
            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-lg">
              Get Early Access
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}