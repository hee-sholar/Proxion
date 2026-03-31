"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      data-aos="fade-down"
      className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          <img src="/prologo.jpeg" alt="logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="text-gray-300 hover:text-white transition"
          >
            Home
          </a>

          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("features");
            }}
            className="text-gray-300 hover:text-white transition"
          >
            Features
          </a>

          <a
            href="https://your-gitbook-link.gitbook.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            Whitepaper
          </a>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-white cursor-pointer text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6">
          <div className="flex flex-col items-center text-center space-y-6">
            
            {/* Home */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
                closeMenu();
              }}
              className="text-lg text-gray-300 hover:text-white transition"
            >
              Home
            </a>

            {/* Features */}
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("features");
                closeMenu();
              }}
              className="text-lg text-gray-300 hover:text-white transition"
            >
              Features
            </a>

            {/* Whitepaper */}
            <a
              href="https://your-gitbook-link.gitbook.io"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="text-lg text-gray-300 hover:text-white transition"
            >
              Whitepaper
            </a>

            {/* Divider */}
            <div className="w-full border-t border-gray-800"></div>

            {/* Button */}
            <button className="cursor-pointer w-full max-w-xs bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}