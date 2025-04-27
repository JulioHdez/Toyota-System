import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AdminDashboard = () => {
  // Chart data for services
  const chartData = [
    { name: "Cambio de aceite", value: 65, color: "#22c55e" },
    { name: "Cambio de bujías", value: 20, color: "#3b82f6" },
    { name: "Cambio de filtro de aire", value: 15, color: "#ef4444" },
  ];

  return (
    <div className="bg-gray-800 flex flex-row justify-center w-full min-h-screen">
      {/* Sidebar */}
      <div className="fixed w-24 h-full top-0 left-0 bg-green-500 flex flex-col items-center">
        <div className="w-24 h-24 bg-green-600 flex items-center justify-center">
          <svg width="80" height="60" viewBox="0 0 80 60" className="text-red-600">
            <ellipse cx="40" cy="30" rx="30" ry="15" fill="none" stroke="currentColor" strokeWidth="3"/>
            <ellipse cx="40" cy="30" rx="15" ry="25" fill="none" stroke="currentColor" strokeWidth="3"/>
            <ellipse cx="40" cy="30" rx="7" ry="15" fill="none" stroke="currentColor" strokeWidth="3"/>
          </svg>
        </div>

        <div className="flex flex-col gap-16 mt-16">
          {/* User Icon */}
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          {/* Calendar Icon */}
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Inventory Icon */}
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>

          {/* Users Icon */}
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>

          {/* Vehicle Icon */}
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-24 w-full p-12">
        <h1 className="text-5xl font-semibold text-green-400 mb-12">Panel de administración</h1>

        <div className="flex gap-12">
          {/* Chart Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-green-400 mb-8">Servicios más vendidos</h2>
            
            {/* Pie Chart */}
            <div className="relative w-96 h-96">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Green Section - 65% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#22c55e"
                  strokeWidth="20"
                  strokeDasharray="251.2"
                  strokeDashoffset="0"
                  transform="rotate(-90 50 50)"
                />
                
                {/* Blue Section - 20% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#3b82f6"
                  strokeWidth="20"
                  strokeDasharray="50.24 201.06"
                  strokeDashoffset="-163.28"
                  transform="rotate(-90 50 50)"
                />
                
                {/* Red Section - 15% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#ef4444"
                  strokeWidth="20"
                  strokeDasharray="37.68 213.62"
                  strokeDashoffset="-213.52"
                  transform="rotate(-90 50 50)"
                />
                
                {/* Center hole */}
                <circle cx="50" cy="50" r="30" fill="#374151" />
                
                {/* Percentage Labels */}
                <text x="35" y="50" fill="white" fontSize="8" fontWeight="bold">65%</text>
                <text x="60" y="35" fill="white" fontSize="6" fontWeight="bold">20%</text>
                <text x="65" y="60" fill="white" fontSize="6" fontWeight="bold">15%</text>
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-8 space-y-2">
              {chartData.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }} />
                  <span className="text-white">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-8">
            <Card className="w-72 bg-gray-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Citas pendientes</h3>
                <p className="text-5xl font-bold text-gray-900">5</p>
              </CardContent>
            </Card>

            <Card className="w-72 bg-gray-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Citas realizadas</h3>
                <p className="text-5xl font-bold text-gray-900">10</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;