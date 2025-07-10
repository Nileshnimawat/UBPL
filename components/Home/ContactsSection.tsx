"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const ContactsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-16 w-24 h-24 bg-orange-100 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gray-200 rounded-full opacity-40 animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Title and Decorative Element */}
          <div
            className={`relative transition-all duration-800 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Large Background Number */}
            <div className="absolute -top-8 -left-4 text-9xl font-bold text-gray-100 -z-10 transition-all duration-500 hover:text-gray-200 hover:scale-105">
              04
            </div>

            {/* Orange Banner */}
            <div className="relative mb-8 group">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold text-lg px-8 py-4 inline-block transform -skew-x-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="transform skew-x-12 inline-block">OUR</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl font-bold text-gray-900 mb-12 tracking-tight hover:text-gray-800 transition-colors duration-300">
              CONTACTS
            </h1>

            {/* Decorative underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mb-8 animate-pulse"></div>

            {/* Decorative Quote */}
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <p className="text-gray-700 italic font-medium">
                &ldquo;Ready to connect and collaborate on your next infrastructure project&rdquo;
              </p>
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div
            className={`space-y-8 transition-all duration-800 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                  <h2 className="text-blue-600 text-lg font-bold tracking-wide uppercase">
                    Registered & Corporate Office
                  </h2>
                </div>
                <h3 className="text-gray-800 text-2xl font-semibold">
                  Utishta Bharata Private Limited
                </h3>
              </div>

              {/* Address */}
              <div className="text-gray-600 leading-relaxed mb-8">
                <div className="flex items-start mb-4">
                  <div className="w-5 h-5 bg-blue-500 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                  <div>
                    <p className="mb-2 font-medium">
                      Slice-3, Flat No 521/A/G, Scheme-78, Aaranya Nagar,
                    </p>
                    <p className="mb-4 font-medium">
                      Indore, Madhya Pradesh – 452001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                  <p className="font-medium">
                    Phone: Mr. Alok Ranjan – 7869977333,<br /> Mr. Sandeep Kumar –
                    9457635747
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl">
                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">Email Id:</p>
                </div>
                <a
                  href="mailto:ubpl.business@gmail.com"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-300 text-lg font-semibold ml-8 hover:underline"
                >
                  ubpl.business@gmail.com
                </a>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <Link href="/contact" className="w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div
          className={`flex justify-center mt-20 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="relative group">
            <div className="w-16 h-16 border-4 border-blue-400 rotate-45 flex items-center justify-center hover:border-blue-500 transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-700 to-blue-800 rotate-45 group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300"></div>
            </div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-blue-500 rotate-45 animate-ping opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;
