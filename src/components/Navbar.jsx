"use client";

import React,{ useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      data-aos="fade-down"
      className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/">
          <img src="/logo.png" className="h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="#features" className="text-gray-300 hover:text-white">Features</a>
          <a
            href="https://your-gitbook-link.gitbook.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            Whitepaper
          </a>
        </nav>

        {/* Button */}
        <div className="hidden md:block">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-6 text-center">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a
            href="https://your-gitbook-link.gitbook.io"
            target="_blank"
            onClick={closeMenu}
          >
            Whitepaper
          </a>

          <button className="w-full bg-white text-black py-3 rounded-full font-semibold">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}