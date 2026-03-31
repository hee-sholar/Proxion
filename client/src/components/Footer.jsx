"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { Linkedin, Twitter, Send } from "lucide-react"; // LinkedIn, X/Twitter, Telegram

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const backendUrl = "https://proxion-tdr9.vercel.app";

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const { data } = await axios.post(`${backendUrl}/api/subscribe`, {
        email,
      });

      toast.success(data.message || "Subscribed successfully 🎉");
      setEmail("");
    } catch (err) {
      console.error(err);

      if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="footer" className="bg-black text-white py-8 px-4 sm:px-6">
      <Toaster position="top-right" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <img src="/prologo.jpeg" className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto" />

        {/* Email Subscription */}
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto overflow-hidden rounded-lg border border-gray-700">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 bg-black text-white placeholder-gray-400 focus:outline-none"
          />

          <button
            onClick={handleSubscribe}
            disabled={loading}
            className={`w-full cursor-pointer sm:w-auto bg-[#00FFC3] text-black font-semibold px-5 py-2 transition ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:bg-[#00e6b0]"
            }`}
          >
            {loading ? "Submitting..." : "Get Early Access"}
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
            href="https://proxion.gitbook.io/proxion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00FFC3] transition"
          >
            Whitepaper
          </a>
        </nav>

        {/* Social Media Links */}
        <div className="flex items-center gap-4 mt-4 lg:mt-0">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/showcase/proxiox/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00FFC3] transition"
          >
            <Linkedin size={24} />
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/ProxionWallet" // Real X account
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00FFC3] transition"
          >
            <Twitter size={24} />
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/proxion_channel" // Real Telegram link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00FFC3] transition"
          >
            <Send size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}