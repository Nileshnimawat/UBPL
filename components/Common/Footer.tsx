"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById("footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  const quickLinks: Array<Array<string>> = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Services", "/services"],
    ["Projects", "/projects"],
    ["Machinery", "/machinery"],
  ];

  const galleryImages: Array<string> = [
    "/footer/slide1.jpg",
    "/footer/slide2.jpg",
    "/footer/1.jpg",
    "/footer/2.jpeg",
    "/footer/gas.jpg",
    "/footer/Civil.jpg",
  ];

  return (
    <footer
      id="footer"
      className="bg-gray-100 relative z-10 text-sm text-gray-700"
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {/* Quick Links */}
         {window.innerWidth > 700 &&  <div>
            <h2 className="text-blue-600 font-bold text-lg sm:text-xl mb-4">
              QUICK LINKS
            </h2>
            <ul className="space-y-3 text-[15px]">
              {quickLinks.map(([label, href]) => (
                <li key={label} className="flex items-center gap-2">
                  <span className="text-blue-800 text-lg font-bold transition-transform duration-200 hover:translate-x-1">
                    ›
                  </span>
                  <Link
                    href={href}
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
}
          {/* Gallery */}
          <div>
            <h2 className="text-blue-600 font-bold text-lg sm:text-xl mb-4">
              GALLERY
            </h2>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-sm w-full h-24 sm:h-28"
                >
                  <Image
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h2 className="text-blue-600 font-bold text-lg sm:text-xl mb-4">
              ABOUT
            </h2>
            <p className="text-justify leading-relaxed text-sm sm:text-[15px] lg:text-base">
              Utishta Bharata Private Limited (UBPL) is a leading civil and
              telecom infrastructure company with a strong presence across
              Madhya Pradesh, Bihar, Uttar Pradesh, and Chhattisgarh. We
              specialize in OFC, solar, pipeline, road, and skill development
              projects.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-800 text-white text-[13px] py-4 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="text-center sm:text-left">
          © {new Date().getFullYear()} Utishta Bharata Private Limited. All
          rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
