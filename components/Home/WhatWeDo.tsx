"use client";
import { useState, useEffect } from "react";

 interface serviceTypes {
  title: string,
  icon: string
}

const services : Array<serviceTypes> = [
  { title: "Optical Fiber Cable (OFC)", icon: "🧵" },
  { title: "Telecom Infrastructure", icon: "📡" },
  { title: "Civil & Electrical Construction", icon: "🏗️" },
  { title: "Gas Pipelines", icon: "🔥" },
  { title: "Solar Projects", icon: "☀️" },
  { title: "Skill Development", icon: "🎓" },
];

const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-white py-16 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: "url(/image.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Animated background elements */}
      <div className="absolute top-16 right-16 w-20 h-20 bg-blue-100 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-20 left-12 w-16 h-16 bg-orange-100 rounded-full animate-bounce opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div
          className={`relative mb-12 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-9xl text-[#eef6fa] font-bold absolute -top-6 -left-2 -z-10 transition-all duration-500 hover:text-[#e0f0f8] hover:scale-105">
            03
          </div>
          <div className="inline-block bg-blue-800 text-white font-semibold px-4 py-2 mb-3 rounded-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:scale-105 hover:-rotate-1">
            WHAT
          </div>
          <h2 className="text-4xl font-bold text-gray-800 transition-all duration-300 hover:text-gray-700 hover:scale-105">
            WE DO
          </h2>
          <div className="w-12 h-1 bg-blue-900 mt-2 rounded-full animate-pulse"></div>
        </div>

        <h3
          className={`text-sm sm:text-md lg:text-lg font-semibold mb-12 bg-gradient-to-r from-blue-50 to-blue-25 px-6 py-4 rounded-xl w-fit border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          Our diverse verticals span across telecom, construction, energy, and
          skilling to serve India&apos;s growing infrastructure needs.
        </h3>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-evenly gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center w-35 h-35 sm:w-40 sm:h-40 md:w-50 md:h-50  lg:w-60 lg:h-60 rounded-full bg-gradient-to-br from-[#004c66] to-[#003d52] text-white text-center p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-rotate-3 cursor-pointer group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${0.4 + i * 0.2}s`,
                animation: isVisible
                  ? `bounceIn 0.8s ease-out ${0.4 + i * 0.2}s both` 
                  : "none",
              }}
            >
              <div className="text-xl sm:text-2xl md:text-4xl lg:text-6xl mb-4 transition-all duration-300 group-hover:scale-125 group-hover:animate-pulse">
                {item.icon}
              </div>
              <div className="text-xs sm:text-md md:text-lg lg:text-xl font-bold tracking-wide group-hover:text-orange-300 transition-colors duration-300">
                {item.title}
              </div>

              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: translateY(-10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;
