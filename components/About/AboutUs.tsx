"use client";

import React from "react";
import Image from "next/image";
import { TrendingUp, Award, MapPin } from "lucide-react";
import CallToAction from "../CallToAction";

import { teamMembers } from "../utils";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="shadow-sm bg-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            About Us
          </h1>
        </div>
      </div>

      {/* At a Glance Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  At a Glance
                </h2>
                <div className="w-16 h-1 bg-blue-600 mb-8"></div>
              </div>

              <div className="space-y-6 text-sm sm:text-md md-text-lg lg-text-xl">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Utishta Bharata Private Limited (UBPL)</strong> is a
                  leading civil and telecommunication infrastructure company
                  with its registered office at Madhya Pradesh and significant
                  presence in Madhya Pradesh, Bihar, UP and Chhattisgarh.
                  Despite tough competition in the field of telecom, it has
                  touched several milestones in a span of 5+ years. A bunch of
                  committed professionals with their prime objective to create
                  world– class civil and telecom infrastructure, have turned
                  this organization into a major force to reckon with in as many
                  as three states
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Its philosophy of quality deliverables and true professionalism has enabled
 it to be associated with some of telecom giants and have been appreciated
 by them for timely and quality work done by us
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/footer/slide1.jpg"
                  alt="Construction equipment at work site"
                  width={500}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="bg-gray-50 py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Founders</h2>
            <p className="mt-4 text-lg text-gray-600">
              Experienced professionals driving our infrastructure excellence
            </p>
          </div>

          <div className="space-y-12 ">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="md:w-80 flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                    className="w-full h-85 md:h-96 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl  lg:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
                    {member.name}
                  </h3>
                  <p className= "md:text-md  md:text-xl text-orange-500 font-medium mb-6">
                    {member.position}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-lg">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Financial Performance Section */}
      <div className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Financial Performance
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Consistent growth and delivery over the years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                ₹8.44 Cr
              </h3>
              <p className="text-gray-600">FY 2021–22 Turnover</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                ₹6.14 Cr
              </h3>
              <p className="text-gray-600">FY 2022–23 Turnover</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                ₹10.06 Cr
              </h3>
              <p className="text-gray-600">FY 2023–24 Turnover</p>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default AboutUs;
