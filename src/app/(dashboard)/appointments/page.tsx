"use client";
import React, { useState } from "react";
import { ChevronDown, Upload, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showAppointmentDetails, setShowAppointmentDetails] = useState(false);
  const [selectedTime, setSelectedTime] = useState({ hour: "06", minute: "28", period: "PM" });
  
  // Calendar data
  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  // Calendar dates structure
  const calendarWeeks = [
    [
      { day: "29", isCurrentMonth: false },
      { day: "30", isCurrentMonth: false },
      { day: "31", isCurrentMonth: false },
      { day: "1", isCurrentMonth: true, isHighlighted: true },
      { day: "2", isCurrentMonth: true, isHighlighted: true },
      { day: "3", isCurrentMonth: true, isHighlighted: true },
      { day: "4", isCurrentMonth: true, isHighlighted: true },
    ],
    [
      { day: "5", isCurrentMonth: true },
      { day: "6", isCurrentMonth: true },
      { day: "7", isCurrentMonth: true },
      { day: "8", isCurrentMonth: true },
      { day: "9", isCurrentMonth: true, isSelected: true },
      { day: "10", isCurrentMonth: true },
      { day: "11", isCurrentMonth: true, isHighlighted: true },
    ],
    [
      { day: "12", isCurrentMonth: true },
      { day: "13", isCurrentMonth: true },
      { day: "14", isCurrentMonth: true },
      { day: "15", isCurrentMonth: true },
      { day: "16", isCurrentMonth: true },
      { day: "17", isCurrentMonth: true },
      { day: "18", isCurrentMonth: true },
    ],
    [
      { day: "19", isCurrentMonth: true },
      { day: "20", isCurrentMonth: true },
      { day: "21", isCurrentMonth: true },
      { day: "22", isCurrentMonth: true, isHighlighted: true },
      { day: "23", isCurrentMonth: true, isHighlighted: true },
      { day: "24", isCurrentMonth: true },
      { day: "25", isCurrentMonth: true, isHighlighted: true },
    ],
    [
      { day: "26", isCurrentMonth: true },
      { day: "27", isCurrentMonth: true, isHighlighted: true },
      { day: "28", isCurrentMonth: true },
      { day: "29", isCurrentMonth: true },
      { day: "30", isCurrentMonth: true },
      { day: "1", isCurrentMonth: false },
      { day: "2", isCurrentMonth: false },
    ],
    [
      { day: "3", isCurrentMonth: false },
      { day: "4", isCurrentMonth: false },
      { day: "5", isCurrentMonth: false },
      { day: "6", isCurrentMonth: false },
      { day: "7", isCurrentMonth: false },
      { day: "8", isCurrentMonth: false },
      { day: "9", isCurrentMonth: false },
    ],
  ];

  return (
    <div className="bg-green-500 flex flex-row justify-center w-full min-h-screen">
      {/* Sidebar */}
      <div className="fixed w-24 h-full top-0 left-0 flex flex-col items-center bg-green-500">
        <div className="w-24 h-24 flex items-center justify-center">
          <svg width="80" height="60" viewBox="0 0 80 60" className="text-red-600">
            <ellipse cx="40" cy="30" rx="30" ry="15" fill="none" stroke="currentColor" strokeWidth="3"/>
            <ellipse cx="40" cy="30" rx="15" ry="25" fill="none" stroke="currentColor" strokeWidth="3"/>
            <ellipse cx="40" cy="30" rx="7" ry="15" fill="none" stroke="currentColor" strokeWidth="3"/>
          </svg>
        </div>

        <div className="flex flex-col gap-16 mt-16">
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-14 h-14 flex items-center justify-center">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-14 h-14 flex items-center justify-center">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-14 h-14 flex items-center justify-center">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-24 w-full flex gap-8 p-8">
        {/* Service Card */}
        <div className="w-1/4">
          <Card className="bg-green-600/90 border-none">
            <CardContent className="p-6">
              <img 
                src="/api/placeholder/300/200" 
                alt="Bujías de motor" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-black mb-2">Cambio bujías</h3>
              <p className="text-black text-sm mb-4">
                Mantenimiento preventivo del vehículo en el cual se realiza el cambio de bujías
              </p>
              <p className="text-3xl font-bold text-black">$900</p>
            </CardContent>
          </Card>
        </div>

        {/* Calendar and VIN Section */}
        <div className="flex-1 bg-gray-700 rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-white text-2xl font-semibold mb-3">VIN del Vehículo</h3>
            <Input 
              className="w-full h-12 bg-white text-black text-lg"
              placeholder="Ingrese el VIN"
              defaultValue={showAppointmentDetails ? "1HGCM82633A123456" : ""}
            />
          </div>

          <Button 
            className="bg-blue-900 text-white mb-6 px-6 py-3"
            onClick={() => setShowAppointmentDetails(true)}
          >
            <Upload className="w-5 h-5 mr-2" />
            {showAppointmentDetails ? "Buscar" : "Generar"}
          </Button>

          {!showAppointmentDetails ? (
            // Calendar View
            <Card className="bg-gray-800 border-none">
              <CardContent className="p-6">
                <header className="flex items-center gap-4 mb-6">
                  <div className="flex items-center bg-teal-200 rounded-lg px-4 py-2">
                    <span className="text-teal-700 font-bold mr-2">August</span>
                    <ChevronDown className="w-5 h-5 text-teal-700" />
                  </div>
                  <div className="flex items-center px-4 py-2">
                    <span className="text-white font-bold mr-2">2021</span>
                    <ChevronDown className="w-5 h-5 text-white" />
                  </div>
                </header>

                {/* Days of Week */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {daysOfWeek.map((day, index) => (
                    <div key={index} className="text-center text-gray-400 font-bold">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                {calendarWeeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="grid grid-cols-7 gap-2 mb-2">
                    {week.map((date, dateIndex) => (
                    <div
                        key={dateIndex}
                        className={`
                        p-3 text-center rounded-full cursor-pointer text-sm
                        ${!date.isCurrentMonth ? "text-gray-600" : "text-white"}
                        ${date.isHighlighted ? "bg-red-900/30" : ""}
                        ${date.isSelected ? "bg-gray-600" : ""}
                        ${'isActive' in date && date.isActive ? "bg-teal-600 text-white" : ""}
                    `}
                >
                    {date.day}
                </div>
                ))}
            </div>
        ))}
              </CardContent>
            </Card>
          ) : (
            // Appointment Details View
            <div>
              <h3 className="text-white text-2xl font-semibold mb-4">Datos de la cita</h3>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-600">VIN del vehículo</span>
                      <span className="text-gray-900 font-semibold">1HGCM82633A123456</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-600">Servicio</span>
                      <span className="text-gray-900 font-semibold">Cambio bujías</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-600">Descripción</span>
                      <span className="text-gray-900">Mantenimiento preventivo del vehículo en el cual se realiza el cambio de bujías</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-600">Fecha</span>
                      <span className="text-gray-900 font-semibold">07/06/2025</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-600">Hora</span>
                      <span className="text-gray-900 font-semibold">3:30 pm</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Precio</span>
                      <span className="text-gray-900 font-semibold">$900</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-4 mt-6">
                    <Button variant="outline" className="text-blue-600 border-blue-600">
                      <Edit className="w-4 h-4 mr-2" />
                      Editar
                    </Button>
                    <Button variant="outline" className="text-red-600 border-red-600">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Eliminar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Time Picker */}
        <div className="w-1/4">
          <Card className="bg-gray-900 border-none">
            <CardContent className="p-6">
              <h3 className="text-white text-xl font-semibold mb-6">Elija su hora</h3>
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="text-4xl font-bold text-white">{selectedTime.hour}</div>
                <div className="text-4xl font-bold text-white">:</div>
                <div className="text-4xl font-bold text-white">{selectedTime.minute}</div>
                <div className="text-4xl font-bold text-white ml-4">{selectedTime.period}</div>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" className="bg-gray-700 text-white border-none">
                  Cancel
                </Button>
                <Button className="bg-green-600 text-white">
                  Save
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;