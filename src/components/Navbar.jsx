import React,{ useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      data-aos="fade-down"
      className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/">
            <img src="/logo.png" alt="Proxion Logo" className="h-10 w-auto" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-gray-300 hover:text-white transition">
            Home
          </a>
          <a href="/" className="text-gray-300 hover:text-white transition">
            Features
          </a>
          <a href="/" className="text-gray-300 hover:text-white transition">
            Whitepaper
          </a>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-white text-black px-6 py-2 cursor-pointer rounded-full font-semibold hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-6">
          <a href="/" className="block text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/" className="block text-gray-300 hover:text-white">
            Features
          </a>
          <a href="/" className="block text-gray-300 hover:text-white">
            Whitepaper
          </a>

          <button className="w-full bg-white cursor-pointer text-black py-3 rounded-full font-semibold">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}