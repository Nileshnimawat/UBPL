"use client";
import { useState, useEffect } from "react";

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left Section: Heading */}
        <div
          className={`relative w-full md:w-1/3 text-left transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="text-8xl text-[#eef6fa] font-bold absolute top-0 left-0 -z-10 transition-all duration-500 hover:text-[#e0f0f8]">
            01
          </div>
          <div className="inline-block bg-blue-800 text-white font-semibold px-3 py-1 mb-2 rounded transition-all duration-300 hover:bg-orange-600 hover:shadow-md">
            WHO
          </div>
          <h2 className="text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-gray-700">
            WE ARE
          </h2>
        </div>

        {/* Right Section: Description */}
        <div
          className={`w-full md:w-2/3 text-[#2196c0] leading-8 text-justify text-base transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="transition-all duration-300 hover:text-[#1976a3]">
            <p className="mb-4">
              <strong className="text-blue-800">Utishta Bharata Private Limited (UBPL)</strong> is a leading civil and telecommunication infrastructure company with operations spanning across Madhya Pradesh, Bihar, Uttar Pradesh, and Chhattisgarh.
            </p>
            <p className="mb-4">
              Established in 2017, UBPL has successfully built a reputation for delivering high-quality projects in telecom infrastructure, optical fiber cable (OFC), civil and electrical construction, gas pipelines, roads, and buildings. Despite tough competition, the company has grown significantly within just 5+ years.
            </p>
            <p>
              UBPL has also ventured into the domain of <strong>Skill Development</strong> in response to the national call to build a skilled India. With a passionate team and state-of-the-art training facilities, the company is making meaningful contributions toward nation-building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
