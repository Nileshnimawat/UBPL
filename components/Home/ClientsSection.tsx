"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clients } from "../utils";
import Image from "next/image";

const ClientsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [animatingCards, setAnimatingCards] = useState<boolean>(false);

  const filters: string[] = [
    "All",
    "Telecom Infrastructure",
    "Civil Infrastructure",
    "Gas Pipelines",
  ];

  const filteredClients =
    activeFilter === "All"
      ? Clients
      : Clients.filter((client) => client.category === activeFilter);

  const clientsPerPage = 4;
  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);
  const startIndex = currentPage * clientsPerPage;
  const displayedClients = filteredClients.slice(
    startIndex,
    startIndex + clientsPerPage
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFilterChange = (filter: string) => {
    if (filter === activeFilter) return;
    setAnimatingCards(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setCurrentPage(0);
      setAnimatingCards(false);
    }, 200);
  };

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    setAnimatingCards(true);
    setTimeout(() => {
      setCurrentPage(page);
      setAnimatingCards(false);
    }, 200);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Telecom Infrastructure": "bg-blue-50 text-blue-700 border-blue-200",
      "Sewerage Infrastructure": "bg-green-50 text-green-700 border-green-200",
      "Gas Pipelines": "bg-orange-50 text-orange-700 border-orange-200",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-50 text-gray-700 border-gray-200"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto py-16">
        {/* Header */}
        <div
          className={`text-center mb-12 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Clients
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Trusted partnerships across infrastructure sectors
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterChange(filter)}
              className={`
                transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-blue-600 hover:bg-blue-700 shadow-md text-white"
                    : "hover:bg-blue-50 hover:border-blue-300"
                }
              `}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Client Grid */}
        <div
          className={`grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 gap-2 ld:gap-6 mb-8 sm:mb-10 lg: transition-all duration-300 ${
            animatingCards
              ? "opacity-0 translate-y-2"
              : "opacity-100 translate-y-0"
          }`}
        >
          {displayedClients.map((client, index) => (
            <Card
              key={`${client.name}-${currentPage}`}
              className="group relative bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <CardHeader className="lg:pb-4">
                <div className="h-24 sm:h-32 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden lg:mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={120}
                    height={80}
                    className="object-contain h-full w-auto"
                  />
                </div>
              </CardHeader>

              <CardContent className="pt-0 text-center">
                <CardTitle className="text-base sm:text-lg mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {client.name}
                </CardTitle>
                <Badge
                  className={`text-xs lg:px-3 py-1 rounded-full border ${getCategoryColor(
                    client.category
                  )} transition-all duration-300`}
                >
                  {client.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="hover:bg-gray-50 transition-colors duration-200"
          >
            ← Previous
          </Button>

          <div className="flex gap-2 flex-wrap">
            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-9 h-9 rounded-full transition-all duration-200 ${
                  index === currentPage
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => handlePageChange(index)}
              >
                {index + 1}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              handlePageChange(Math.min(totalPages - 1, currentPage + 1))
            }
            disabled={currentPage === totalPages - 1}
            className="hover:bg-gray-50 transition-colors duration-200"
          >
            Next →
          </Button>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ClientsSection;
