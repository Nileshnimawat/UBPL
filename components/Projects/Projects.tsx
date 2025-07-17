"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
  Users,
} from "lucide-react";

import CallToAction from "../CallToAction";
import { projects } from "../utils";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gray-600 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16  text-left">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            Our Projects
          </h1>
          <p className="mt-4 text-base sm:text-xl text-blue-100 max-w-2xl">
            Showcasing our expertise in infrastructure development across India with successful project implementations.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-10`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    {project.status}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h2>
                <div className="w-12 h-1 bg-blue-600 mb-4" />

                {/* Info Row */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.duration}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    {project.client}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-justify">
                  {project.description}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                  {project.details}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Project Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-gray-600"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Get Similar Project
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Project Statistics
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Our track record of successful project delivery across India
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard value="50+" label="Projects Completed" />
            <StatCard value="8" label="States Covered" />
            <StatCard value="500+" label="KM Pipeline Laid" />
            <StatCard value="2L+" label="Beneficiaries" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <CallToAction />
    </div>
  );
};

export default Projects;

// Helper component
const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
    <div className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
    <p className="font-medium text-gray-900">{label}</p>
  </div>
);
