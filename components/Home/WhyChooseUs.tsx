"use client";
import { useState, useEffect } from "react";

const reasons : string[] = [
  "Proven expertise in telecom, civil, and electrical infrastructure across multiple states.",
  "Timely project execution with a commitment to quality deliverables.",
  "Diversified verticals: OFC, solar, gas pipelines, roads, and skill development.",
  "Associated with industry leaders like Tata Projects, L&T, and Sterlite Technologies.",
  "Driven by a team of experienced professionals with over 10-15 years in the field.",
];

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-[#f9fcfe] py-16 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-10 right-20 w-24 h-24 bg-orange-100 rounded-full animate-bounce opacity-30"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 relative z-10">
        {/* Left Label */}
        <div
          className={`relative md:w-1/3 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="text-9xl text-[#eef6fa] font-bold absolute -top-6 -left-2 -z-10 transition-all duration-500 hover:text-[#e0f0f8] hover:scale-105">
            02
          </div>
          <div className="inline-block bg-blue-800 text-white font-semibold px-4 py-2 mb-3 rounded-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:scale-105 hover:-rotate-1">
            WHY
          </div>
          <h2 className="text-4xl font-bold text-gray-800 transition-all duration-300 hover:text-gray-700 hover:scale-105">
            CHOOSE US
          </h2>
          <div className="w-12 h-1 bg-blue-800 mt-2 rounded-full animate-pulse"></div>
        </div>

        {/* Right Content */}
        <div
          className={`md:w-2/3 flex flex-col gap-6 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] transform ${
                idx % 2 === 0
                  ? "bg-gradient-to-r from-blue-50 to-blue-25"
                  : "bg-gradient-to-r from-white to-gray-50"
              } border-l-4 ${"border-blue-500"}`}
              style={{
                transitionDelay: `${0.1 * idx}s`,
                animation: isVisible
                  ? `slideInUp 0.6s ease-out ${0.1 * idx}s both`
                  : "none",
              }}
            >
              <div
                className={`flex items-center justify-center w-12 h-12 border-2 font-bold rounded-full transition-all duration-300 hover:scale-110 ${"border-blue-500 text-blue-500 bg-blue-50 hover:bg-blue-100"}`}
              >
                <span className="animate-pulse">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-gray-700 text-[17px] leading-relaxed transition-all duration-300 hover:text-gray-800">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
