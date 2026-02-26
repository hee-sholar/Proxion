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
    "w-full max-w-xs sm:max-w-sm md:w-96 md:h-96 h-auto rounded-3xl shadow-2xl border border-gray-700";

  // Improved Container size (better spacing on mobile)
  const containerSize =
    "rounded-3xl p-6 flex flex-col items-center space-y-6";

  return (
    <section className="relative bg-black text-white py-24 px-6">
      {/* Section Header */}
      <div
        className="max-w-7xl mx-auto text-center mb-16"
        data-aos="fade-down"
      >
        <h2 className="text-3xl md:text-4xl font-semibold">
          Intelligent By Design
        </h2>
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-7xl mx-auto mb-32">
        {/* Left Column */}
        <div data-aos="fade-right" className="flex justify-center">
          <div className={`${containerSize}`}>
            <h3 className="font-semibold text-lg text-center md:text-left">
              Private By Default
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
            <h3 className="font-semibold text-lg text-center md:text-left">
              Designed For Mass Adoption
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
  <h1 className="text-gray-400 text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
    Proxion Is Coming!
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