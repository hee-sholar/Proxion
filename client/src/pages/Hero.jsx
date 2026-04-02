"use client";

import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { Features } from "./Features";
import { toast, Toaster } from "react-hot-toast";
import { useForm } from "@formspree/react";

export function Hero() {
  const [email, setEmail] = useState("");

  const [state, handleSubmit] = useForm("xzdkabob");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Successfully subscribed! 🎉");
      setEmail("");
    }

    if (state.errors && state.errors.length > 0) {
      toast.error("Subscription failed. Please try again.");
      console.error("Formspree errors:", state.errors);
    }
  }, [state.succeeded, state.errors]);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    await handleSubmit(e);
  };

  return (
    <>
      <Toaster position="top-right" />

      <section
        id="home"
        data-aos="fade-up"
        className="relative min-h-screen bg-black text-white pt-24 sm:pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 -right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center mb-6">
            <div className="px-3 py-1.5 rounded-full border border-gray-700 bg-gray-900/50">
              <span className="text-xs sm:text-sm text-gray-400 text-center">
                The wallet for the new digital economy
              </span>
            </div>
          </div>

          <h1 className="text-gray-500 text-[clamp(2rem,6vw,4.5rem)] font-light text-center mb-4 leading-tight">
            The wallet that
            <br />
            <span className="text-gray-100">understands you.</span>
          </h1>

          <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-xl mx-auto">
            An intelligent, secure wallet designed for how people actually interact with the digital world.
          </p>

          {/* Formspree subscription */}
          <form
            onSubmit={handleSubscribe}
            className="flex justify-center mb-4"
          >
            <div className="w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`cursor-pointer w-full sm:w-auto px-6 py-3 bg-[#00FFC3] text-black rounded-full font-semibold hover:bg-[#00e6b0] transition ${
                    state.submitting
                      ? "opacity-60 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {state.submitting
                    ? "Submitting..."
                    : "Get Early Access"}
                </button>
              </div>
            </div>
          </form>

          <p className="text-center text-gray-500 text-sm mb-10">
            Join 14k+ founding community waiting...
          </p>
        </div>

        <div className="relative w-full mt-6 z-10 px-2">
          <img
            src="/Group.png"
            alt="App Mockup"
            className="w-full max-w-[95%] sm:max-w-4xl mx-auto rounded-2xl sm:rounded-3xl shadow-2xl animate-float"
          />
        </div>

        <style>{`
          @keyframes float {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}</style>
      </section>

      <section id="features">
        <Features />
      </section>
    </>
  );
}