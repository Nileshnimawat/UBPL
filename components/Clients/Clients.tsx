"use client";

import React, { useMemo, useState } from "react";
import {
  Globe,
  Building2,
  Zap,
  Construction,
  Award,
  Users,
  TrendingUp,
  Star,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CallToAction from "../CallToAction";
import { Clients as CLIENTS } from "../utils";
import Image from "next/image";



const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Telecom Infrastructure":
      return <Zap className="w-5 h-5 text-blue-500" />;
    case "Civil Infrastructure":
      return <Building2 className="w-5 h-5 text-green-500" />;
    case "Gas Pipelines":
      return <Construction className="w-5 h-5 text-orange-500" />;
    default:
      return <Globe className="w-5 h-5 text-gray-500" />;
  }
};

const Clients = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(CLIENTS.map((client) => client.category))],
    []
  );

  const filteredClients =
    selectedCategory === "All"
      ? CLIENTS
      : CLIENTS.filter((client) => client.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="shadow-sm bg-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Clients</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl">
            Discover our collaborations across various sectors
          </p>
        </div>
      </div>

      {/* Clients Grid with Tabs */}
      <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl mx-4 my-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <Tabs defaultValue="All" onValueChange={setSelectedCategory}>
            <TabsList className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full">
            {filteredClients.length === 0 ? (
              <p className="col-span-full text-center text-gray-500">
                No clients available in this category.
              </p>
            ) : (
              filteredClients.map((client, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl shadow-md  p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl flex flex-col items-center text-center"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={80}
                    height={80}
                    className="mb-4 object-contain"
                    unoptimized
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {client.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    {getCategoryIcon(client.category)}
                    {client.category}
                  </p>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-200/20 to-purple-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-6 sm:p-12 text-white text-center shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.1%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

          <div className="relative z-10">
            <Star className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Industry Leaders Choose Us</h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-10">
              Join our growing network of satisfied clients who trust us with their most critical infrastructure projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Award className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-blue-100">World-class results with unmatched precision and quality.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Users className="w-12 h-12 mx-auto mb-4 text-green-300" />
                <h3 className="text-xl font-semibold mb-2">Partnership</h3>
                <p className="text-blue-100">Building lasting relationships through trust and reliability.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-purple-300" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-blue-100">Leading the industry with cutting-edge solutions and technology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default Clients;
