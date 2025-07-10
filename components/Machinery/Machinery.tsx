"use client"
import React from 'react'
import CallToAction from '../CallToAction';
import {machineryData} from "../utils"
const Machinery = () => {
  

  const totalOwned = machineryData.reduce((sum, item) => sum + item.owned, 0);
  const totalHired = machineryData.reduce((sum, item) => sum + item.hired, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
     {/* Header Section */}
      <div className="shadow-sm bg-gray-600">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Join Our Team</h1>
          <p className="mt-4 text-lg text-gray-200">
            Ready to build your career with us? Apply now and become part of our construction family.
          </p>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{totalOwned}</div>
            <div className="text-gray-600">Total Owned Equipment</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{totalHired}</div>
            <div className="text-gray-600">Total Hired Equipment</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{totalOwned + totalHired}</div>
            <div className="text-gray-600">Total Fleet Size</div>
          </div>
        </div>

        {/* Equipment List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-2xl font-bold text-gray-800">Equipment Fleet</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipment</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Owned</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Hired</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {machineryData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {item.owned}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {item.hired}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {item.owned + item.hired}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Capabilities</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-medium">✓</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600">Optical Fiber Cable (OFC) installation with HDD machines</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-medium">✓</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600">Telecom infrastructure construction and maintenance</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-medium">✓</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600">Civil construction and excavation work</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-medium">✓</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600">Gas pipeline installation and maintenance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Equipment Strategy</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Flexible Fleet Management</h4>
                <p className="text-sm text-blue-700">
                  Our organized setup combines owned and leased machinery to cater to any quantum of work efficiently.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Scalable Operations</h4>
                <p className="text-sm text-green-700">
                  Strategic hiring of additional equipment allows us to scale operations based on project requirements.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">Cost Optimization</h4>
                <p className="text-sm text-purple-700">
                  Balanced mix of owned and hired equipment ensures cost-effective project execution.
                </p>
              </div>
            </div>
          </div>
        </div>

     
      </div>
        <CallToAction/>
    </div>
  );
};

export default Machinery;