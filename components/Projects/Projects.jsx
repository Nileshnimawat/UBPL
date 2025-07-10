"use client";
import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Calendar,
  MapPin,
  Users,
  Award,
} from "lucide-react";
import CallToAction from "../CallToAction";
import { projects } from "../utils";
import Image from "next/image";
const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="shadow-sm bg-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Our Projects
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl">
            Showcasing our expertise in infrastructure development across India
            with successful project implementations
          </p>
        </div>
      </div>

      {/* Projects Section - Alternating Layout */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                      style={{ objectFit: "cover" }}
                       width={100}
                      height={100}
                      quality={100}
                      unoptimized
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2">
                  <div className="mb-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h2>
                    <div className="w-12 h-1 bg-blue-600"></div>
                  </div>

                  {/* Project Info */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.client}</span>
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
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
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
      </div>

      {/* Project Statistics Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Project Statistics
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our track record of successful project delivery across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <p className="font-medium text-gray-900">Projects Completed</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
              <p className="font-medium text-gray-900">States Covered</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <p className="font-medium text-gray-900">KM Pipeline Laid</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">2L+</div>
              <p className="font-medium text-gray-900">Beneficiaries</p>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default Projects;
