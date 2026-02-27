import React, { useState } from "react";
import { Mail } from "lucide-react";
import { Features } from "./Features";

export function Hero() {
  const [email, setEmail] = useState("");

  return (
    <>
      <section
        data-aos="fade-up"
        className="relative min-h-screen bg-black text-white pt-32 pb-24 px-6 overflow-hidden"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 -right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Tag */}
          <div className="flex justify-center mb-8">
            <div className="px-4 py-2 rounded-full border border-gray-700 bg-gray-900/50">
              <span className="text-sm text-gray-400">
                Wallet for the new digital economy
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-gray-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-center mb-6 leading-tight">
            The wallet that
            <br />
            understands you.
          </h1>

          {/* Subheading */}
          <p className="text-center text-gray-400 text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            An intelligent, secure wallet designed for how people actually
            interact with the digital world.
          </p>

          {/* Email Input + Button (Responsive) */}
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Input */}
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-600 transition"
                  />
                </div>

                {/* Button */}
                <button className="px-6 py-3 bg-cyan-400 text-black rounded-full font-semibold hover:bg-cyan-300 transition whitespace-nowrap">
                  Get Early Access
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mb-12">
            Join 14k+ founding community waiting...
          </p>
        </div>

        {/* Big Floating Phone Image */}
        <div className="relative w-full mt-12 z-10 px-4 sm:px-0">
          <img
            src="/Group.png"
            alt="App Mockup"
            className="w-full max-w-none sm:max-w-5xl mx-auto rounded-3xl shadow-2xl  animate-float"
          />
        </div>

        {/* Floating Animation */}
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-30px); }
            }
            .animate-float {
              animation: float 4s ease-in-out infinite;
            }
          `}
        </style>
      </section>

      <Features />
    </>
  );
}