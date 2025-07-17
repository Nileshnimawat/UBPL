"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import CallToAction from "../CallToAction";
import { services, serviceAreas } from "../utils";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Section */}
      <div className="bg-gray-600 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">Services</h1>
          <p className="mt-4 text-base sm:text-xl text-blue-100 max-w-2xl">
            Comprehensive infrastructure, telecom, and civil engineering services tailored for public and private sector projects.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col-reverse ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10`}
            >
              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h2>
                <div className="w-12 h-1 bg-blue-600 mb-4"></div>

                <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Services:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-600"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={500}
                    className="w-full h-[280px] sm:h-[350px] object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Service Areas</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our operations currently span across multiple states
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {serviceAreas.map((state, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="font-medium text-gray-900">{state}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CallToAction />
    </div>
  );
};

export default Services;
