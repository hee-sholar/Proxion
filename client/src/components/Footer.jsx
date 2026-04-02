"use client";

import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Linkedin, X } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { useForm, ValidationError } from "@formspree/react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [state, handleSubmit] = useForm("xkopvwep");

  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
      setEmail("");
    }

    if (state.errors && state.errors.length > 0) {
      toast.error("Submission failed. Please try again.");
      console.error("Formspree errors:", state.errors);
    }
  }, [state.succeeded, state.errors]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    await handleSubmit(e);
  };

  return (
    <>
      <footer
        id="footer"
        className="bg-black text-white py-8 px-4 sm:px-6"
      >
        <Toaster position="top-right" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <img
            src="/prologo.jpeg"
            alt="Proxion Logo"
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
          />

          {/* Email Subscription */}
          <form
            onSubmit={onSubmit}
            className="flex flex-col sm:flex-row items-center w-full sm:w-auto overflow-hidden rounded-lg border border-gray-700"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-64 px-4 py-2 bg-black text-white placeholder-gray-400 focus:outline-none"
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className={`w-full cursor-pointer sm:w-auto bg-[#00FFC3] text-black font-semibold px-5 py-2 transition ${
                state.submitting
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-[#00e6b0]"
              }`}
            >
              {state.submitting
                ? "Submitting..."
                : "Get Early Access"}
            </button>
          </form>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a
              href="/"
              className="text-gray-400 hover:text-[#00FFC3] transition"
            >
              Home
            </a>

            <a
              href="#features"
              className="text-gray-400 hover:text-[#00FFC3] transition"
            >
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
            <a
              href="https://www.linkedin.com/showcase/proxiox/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00FFC3] transition"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="https://x.com/ProxionWallet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00FFC3] transition"
            >
              <RiTwitterXFill size={24} />
            </a>

            <a
              href="https://t.me/proxion_channel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00FFC3] transition"
            >
              <FaTelegramPlane size={24} />
            </a>
          </div>
        </div>
      </footer>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#111] border border-gray-800 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center relative shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="text-4xl mb-4">🎉✨</div>

            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              You're In!
            </h2>

            <p className="text-gray-400 leading-7">
              Thanks for joining the{" "}
              <span className="text-white font-medium">
                Proxion waitlist
              </span>{" "}
              🚀
              <br />
              We’ve just sent you a confirmation email 📩
              <br />
              Stay close — something exciting is coming soon ✨
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 px-6 py-3 bg-[#00FFC3] text-black rounded-full font-semibold hover:bg-[#00e6b0] transition"
            >
              Awesome 🚀
            </button>
          </div>
        </div>
      )}

      <Toaster position="top-right" />
    </>
  );
}