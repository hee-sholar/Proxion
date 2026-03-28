"use client";

import React, { useState } from "react";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="bg-black text-white py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <img src="/logo.png" className="h-8 sm:h-10" />

        {/* Email */}
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto overflow-hidden rounded-lg border border-gray-700">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-64 px-4 py-2 bg-black text-white placeholder-gray-400 focus:outline-none"
          />
          <button className="w-full sm:w-auto bg-[#00FFC3] hover:bg-[#00e6b0] text-black font-semibold px-5 py-2 transition">
            Get Early Access
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <a href="/" className="text-gray-400 hover:text-[#00FFC3] transition">
            Home
          </a>
          <a href="#features" className="text-gray-400 hover:text-[#00FFC3] transition">
            Features
          </a>
          <a
            href="https://your-gitbook-link.gitbook.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00FFC3] transition"
          >
            Whitepaper
          </a>
        </nav>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-6 flex flex-col items-center gap-4 text-center text-sm font-medium border-t border-gray-800 pt-4">
          <a href="/" className="text-gray-400 hover:text-[#00FFC3] transition">
            Home
          </a>
          <a href="#features" className="text-gray-400 hover:text-[#00FFC3] transition">
            Features
          </a>
          <a
            href="https://your-gitbook-link.gitbook.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00FFC3] transition"
          >
            Whitepaper
          </a>
        </div>
      )}
    </footer>
  );
}