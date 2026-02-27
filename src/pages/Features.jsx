// IntelligentSection.tsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Features() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Image size for feature boxes
  const imageSize =
  "w-72 md:w-80 h-[450px] md:h-[520px] object-contain rounded-3xl shadow-2xl ";

  // Improved Container size (better spacing on mobile)
  const containerSize =
    "rounded-3xl p-6 flex flex-col items-center space-y-6 border border-[#0D0D0D] bg-[#0D0D0D] w-full max-w-sm sm:max-w-md md:max-w-lg";

  return (
    <section className="relative bg-black text-white py-24 px-6">
      {/* Section Header */}
      <div
        className="max-w-7xl mx-auto text-center mb-16"
        data-aos="fade-down"
      >
        <h2 className="text-3xl md:text-4xl font-semibold">
          <span className="text-gray-500">Intelligent</span> By Design
        </h2>
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-7xl mx-auto mb-32">
        {/* Left Column */}
        <div data-aos="fade-right" className="flex justify-center">
          <div className={`${containerSize}`}>
            <h3 className="font-semibold text-2xl text-center md:text-left">
              <span className="text-gray-500">Private</span> By Default
            </h3>
            <img
              src="/Iphone1.png"
              alt="Private By Default"
              className={imageSize}
            />
          </div>
        </div>

        {/* Center Column */}
        <div data-aos="fade-up" className="flex justify-center">
          <div className={`${containerSize}`}>
            <h3 className="font-semibold text-lg text-center md:text-left">
              Security Built In
            </h3>
            <img
              src="/Iphone2.png"
              alt="Security Built In"
              className={imageSize}
            />
          </div>
        </div>

        {/* Right Column */}
        <div data-aos="fade-left" className="flex justify-center">
          <div className={`${containerSize}`}>
            <h3 className="font-semibold text-2xl text-center md:text-left">
              <span className="text-gray-400">Designed For </span>Mass Adoption
            </h3>
            <img
              src="/Iphone3.png"
              alt="Mass Adoption"
              className={imageSize}
            />
          </div>
        </div>
      </div>

      {/* Proxion Coming Section */}
      <div className="flex flex-col items-center justify-center space-y-8 px-4 md:px-0">
  <h1 className="text-gray-100 text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
    <span className="text-gray-400">Proxion</span> Is Coming !
  </h1>

  <div className="relative w-full flex justify-center">
    <img
      src="/iphone.png"
      alt="Phone Mockup"
      className="transform -rotate-12 w-64 h-auto sm:w-80 md:w-[30rem] md:h-[25rem] drop-shadow-2xl"
    />
  </div>
      </div>
    </section>
  );
}