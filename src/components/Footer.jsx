"use client";

import React, { useState } from "react";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="bg-black text-white py-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <img src="/logo.png" className="h-8 sm:h-10" />

        {/* Email */}
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-auto px-4 py-2 rounded-lg sm:rounded-l-lg border border-gray-600 bg-black text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
          />
          <button className="w-full sm:w-auto bg-[#00FFC3] hover:bg-[#00e6b0] text-black font-semibold px-4 py-2 rounded-lg sm:rounded-r-lg">
            Get Early Access
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden"
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-6">
          <a href="/" className="hover:text-green-500">Home</a>
          <a href="#features" className="hover:text-green-500">Features</a>
          <a href="https://your-gitbook-link.gitbook.io"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500">
            Whitepaper
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden mt-4 flex flex-col items-center gap-3 text-center">
          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="https://your-gitbook-link.gitbook.io"
            target="_blank"
            rel="noopener noreferrer">
              Whitepaper
          </a>
        </div>
      )}
    </footer>
  );
}