"use client"
import React, { useState, useEffect } from 'react';
import { Milestones } from '../utils';
import { miltestone } from '../types';

// Define a type for a single milestone item
interface MilestoneItemProps {
  year: number;
  description: string;
  isLeftAligned: boolean;
  index: number;
  isVisible: boolean;
}

const MilestoneItem: React.FC<MilestoneItemProps> = ({ year, description, isLeftAligned, index, isVisible }) => {
  return (
    <>
      {/* Desktop Layout (md and up) */}
      <div className={`hidden md:flex relative text-sm lg:text-lg items-center w-full my-6 lg:my-8 ${isLeftAligned ? 'justify-start' : 'justify-end'}`}>
        {isLeftAligned && (
          <div className={`flex-shrink-0 w-1/2 pr-4 lg:pr-6 text-right transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`} style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-3 lg:px-4 py-2 rounded-lg font-bold text-base lg:text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              {year}
            </div>
          </div>
        )}

        {/* Timeline dot and line */}
        <div className={`relative flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center z-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`} style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}>
          <div className="w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full animate-pulse"></div>
          <div className="absolute inset-0 rounded-full border-4 border-orange-500 opacity-0 hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
        </div>

        {/* Description box */}
        <div className={`flex-shrink-0 w-1/2 p-3 lg:p-4 xl:p-6 rounded-xl shadow-md bg-gradient-to-r from-white to-gray-50 border-l-4 ${
          isLeftAligned ? 'ml-4 lg:ml-6 border-blue-500' : 'mr-4 lg:mr-6 border-orange-500'
        } hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}>
          <p className="text-gray-700 leading-relaxed hover:text-gray-800 transition-colors duration-300">
            {description}
          </p>
        </div>

        {!isLeftAligned && (
          <div className={`flex-shrink-0 w-1/2 pl-4 lg:pl-6 text-left transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`} style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-3 lg:px-4 py-2 rounded-lg font-bold text-base lg:text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              {year}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Layout (below md) */}
      <div className={`flex md:hidden relative text-sm items-start w-full my-6 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ transitionDelay: `${index * 0.1}s` }}>
        {/* Timeline dot */}
        <div className={`relative flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center z-10 shadow-lg mt-1 transition-all duration-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`} style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>

        {/* Content container */}
        <div className="flex-1 ml-4">
          {/* Year badge */}
          <div className={`inline-block bg-gradient-to-r from-blue-700 to-blue-800 text-white px-3 py-1 rounded-lg font-bold text-sm mb-2 transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`} style={{ transitionDelay: `${index * 0.1 + 0.1}s` }}>
            {year}
          </div>
          
          {/* Description */}
          <div className={`p-3 rounded-xl shadow-md bg-gradient-to-r from-white to-gray-50 border-l-4 border-blue-500 transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}>
            <p className="text-gray-700 leading-relaxed text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const MilestoneTimeline: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 font-sans p-4 sm:p-6 lg:p-8 flex flex-col items-center relative overflow-hidden">
      {/* Animated background elements - hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute top-20 left-20 w-16 h-16 lg:w-24 lg:h-24 bg-orange-100 rounded-full animate-pulse opacity-30"></div>
      <div className="hidden sm:block absolute bottom-20 right-20 w-20 h-20 lg:w-32 lg:h-32 bg-blue-100 rounded-full animate-bounce opacity-20"></div>
      <div className="hidden lg:block absolute top-1/2 right-10 w-16 h-16 bg-teal-100 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>

      {/* Header section */}
      <div className={`text-center mb-8 sm:mb-12 lg:mb-16 relative z-10 transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
      }`}>
        <div className="relative mb-4 sm:mb-6">
          {/* Background number - responsive sizing */}
          <div className="text-4xl sm:text-6xl lg:text-8xl text-[#eef6fa] font-bold absolute -top-4 sm:-top-6 lg:-top-8 left-1/2 transform -translate-x-1/2 -z-10">
            04
          </div>
          <div className="inline-block bg-blue-800 text-white font-semibold px-3 sm:px-4 py-1 sm:py-2 mb-2 sm:mb-3 rounded-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:scale-105 hover:-rotate-1 text-sm sm:text-base">
            OUR
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 hover:text-gray-700 transition-colors duration-300">
            JOURNEY
          </h1>
          <div className="w-12 sm:w-16 h-1 bg-orange-500 mx-auto rounded-full animate-pulse"></div>
        </div>
        
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-25 px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-all duration-300 hover:scale-105 mx-4 sm:mx-0">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
          <p className="text-gray-600 font-medium text-sm sm:text-base">Major Milestones Achieved</p>
        </div>
      </div>

      {/* Timeline container */}
      <div className="relative w-full max-w-5xl">
        {/* Central vertical line for desktop */}
        <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-orange-500 to-teal-500 rounded-full transition-all duration-1000 ${
          isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'
        }`} style={{ transitionDelay: '0.5s' }}></div>

        {/* Vertical line for mobile */}
        <div className={`md:hidden absolute left-4 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-orange-500 to-teal-500 rounded-full transition-all duration-1000 ${
          isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'
        }`} style={{ transitionDelay: '0.5s' }}></div>

        {/* Render each milestone item */}
        {Milestones.map((milestone: miltestone, index: number) => (
          <MilestoneItem
            key={index}
            year={milestone.year}
            description={milestone.description}
            isLeftAligned={index % 2 === 0}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>

      {/* Bottom spacing for mobile */}
      <div className="h-8 sm:h-12 lg:h-16"></div>
    </div>
  );
};

export default MilestoneTimeline;