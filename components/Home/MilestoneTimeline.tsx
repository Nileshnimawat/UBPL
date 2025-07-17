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
    <div className={`relative text-xs sm:text-sm md:text-md lg:text-lg flex items-center w-full my-8 ${isLeftAligned ? 'justify-start' : 'justify-end'}`}>
      {/* Year on the left for left-aligned items, on the right for right-aligned */}
      {isLeftAligned && (
        <div className={`flex-shrink-0 w-1/2 pr-6 text-right transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`} style={{ transitionDelay: `${index * 0.1}s` }}>
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 py-2 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            {year}
          </div>
        </div>
      )}

      {/* Timeline dot and line */}
      <div className={`relative flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center z-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`} style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}>
        <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
        {/* Animated ring on hover */}
        <div className="absolute inset-0 rounded-full border-4 border-orange-500 opacity-0 hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
      </div>

      {/* Description box */}
      <div className={`flex-shrink-0 w-1/2 p-3 sm:p-4 md:p-5 xl:p-6 rounded-xl shadow-md bg-gradient-to-r from-white to-gray-50 border-l-4 ${
        isLeftAligned ? 'ml-6 border-blue-500' : 'mr-6 border-orange-500'
      } hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}>
        <p className="text-gray-700 leading-relaxed hover:text-gray-800 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Year on the right for right-aligned items */}
      {!isLeftAligned && (
        <div className={`flex-shrink-0 w-1/2 pl-6 text-left transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`} style={{ transitionDelay: `${index * 0.1}s` }}>
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 py-2 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            {year}
          </div>
        </div>
      )}
    </div>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 font-sans p-8 flex flex-col items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-orange-100 rounded-full animate-pulse opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-100 rounded-full animate-bounce opacity-20"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-teal-100 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>

      {/* Header section */}
      <div className={`text-center mb-16 relative z-10 transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
      }`}>
        <div className="relative mb-6">
          <div className="text-8xl text-[#eef6fa] font-bold absolute -top-8 left-1/2 transform -translate-x-1/2 -z-10">
            04
          </div>
          <div className="inline-block bg-blue-800 text-white font-semibold px-4 py-2 mb-3 rounded-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:scale-105 hover:-rotate-1">
            OUR
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4 hover:text-gray-700 transition-colors duration-300">
            JOURNEY
          </h1>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full animate-pulse"></div>
        </div>
        
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-25 px-6 py-4 rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-all duration-300 hover:scale-105">
          <div className="w-4 h-4 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
          <p className="text-gray-600 font-medium">Major Milestones Achieved</p>
        </div>
      </div>

      {/* Timeline container */}
      <div className="relative w-full max-w-5xl">
        {/* Central vertical line that runs through the entire timeline */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-orange-500 to-teal-500 rounded-full transition-all duration-1000 ${
          isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'
        }`} style={{ transitionDelay: '0.5s' }}></div>

        {/* Render each milestone item */}
        {Milestones.map((milestone : miltestone, index:number) => (
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
    </div>
  );
};

export default MilestoneTimeline;