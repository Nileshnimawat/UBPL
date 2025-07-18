"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaClock,
  // FaFacebookF,
  // FaTwitter,
  // FaLinkedinIn,
  // FaPinterestP,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import MobileSidebar from "./MobileSidebar";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full relative">
      {/* Top Bar - Contact Info */}
      <div className="bg-blue-800 text-white py-2 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Desktop Contact Info */}
          <div className="hidden lg:flex justify-between items-center text-sm">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-xs flex-shrink-0" />
                <span>+91 – 7869977333, 9457635747</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="text-sm flex-shrink-0" />
                <span>ubpl.business@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-xs flex-shrink-0" />
                <span>Mon - Sat: 9:30 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Contact Info - Simplified */}
          <div className="flex lg:hidden justify-between items-center text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 items-start sm:items-center">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-xs flex-shrink-0" />
                <span className="truncate">+91 – 7869977333</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="text-sm flex-shrink-0" />
                <span className="truncate">ubpl.business@gmail.com</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs">
              <FaClock className="text-xs flex-shrink-0" />
              <span className="whitespace-nowrap">Mon-Sat: 9:30-6:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md relative py-2">
        <div className="max-w-6xl mx-auto px-4 ">
          <div className="grid grid-cols-3 items-center h-20">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >
                {isMobileMenuOpen ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
              </button>
            </div>

            {/* Left Navigation */}
            <div className="hidden md:flex items-center justify-start space-x-8">
              <Link
                href="/"
                className="text-gray-700 font-semibold hover:text-orange-500 transition-colors"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="text-gray-700 font-semibold hover:text-orange-400 transition-colors"
              >
                ABOUT
              </Link>
              <Link
                href="/services"
                className="text-gray-700 font-semibold hover:text-orange-400 transition-colors"
              >
                SERVICES
              </Link>
              <Link
                href="/projects"
                className="text-gray-700 font-semibold hover:text-orange-400 transition-colors"
              >
                PROJECTS
              </Link>
            </div>

            {/* Center Logo */}
            <div className="flex justify-center items-center">
              <div className="w-35 h-25 lg:w-46 lg:h-26 mt-3 absolute bg-white rounded-3xl  flex items-center justify-center z-30">
                <Image
                  src="/vercel.svg"
                  alt="Company Logo"
                  width={64}
                  height={64}
                  className="object-contain bg-black"
                />
              </div>
            </div>

            {/* Right Navigation */}
            <div className="hidden md:flex items-center justify-end space-x-5 ">
              <Link
                href={"/clients"}
                className="flex items-center space-x-1 text-gray-700 font-semibold hover:text-orange-400 transition-colors cursor-pointer"
              >
                <span>CLIENTS</span>
                {/* <FaChevronDown className="text-xs" /> */}
              </Link>
              <Link
                href="/machinery"
                className="text-gray-700 font-semibold hover:text-orange-400 transition-colors"
              >
                MACHINERY
              </Link>
              <Link
                href={"/career"}
                className="flex items-center space-x-1 text-gray-700 font-semibold hover:text-orange-400 transition-colors cursor-pointer"
              >
                CAREERS
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 font-semibold hover:text-orange-400 transition-colors"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>

        <MobileSidebar isOpen={isMobileMenuOpen} />
      </nav>
    </header>
  );
};

export default Navbar;
