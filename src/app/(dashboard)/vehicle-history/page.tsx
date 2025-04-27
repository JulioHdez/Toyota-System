import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const VehicleHistoryPage = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [vin, setVin] = useState("");

  const historyData = [
    {
      service: "Cambio bujías",
      description: "Mantenimiento preventivo del vehículo en el cual se realiza el cambio de bujías",
      date: "19/03/2024",
      time: "12:30 pm",
      user: "Seba451"
    },
    {
      service: "Cambio aceite",
      description: "Reemplazo de aceite viejo de motor por uno nuevo",
      date: "22/11/2024",
      time: "5:00 pm",
      user: "Seba451"
    }
  ];

  const handleSearch = () => {
    if (vin) {
      setShowHistory(true);
    }
  };

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>

          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-14 h-14 flex items-center justify-center">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>

          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-14 h-14 bg-black/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-24 w-full bg-gray-800 p-12">
        <h1 className="text-5xl font-semibold text-green-400 mb-8">Historial del vehículo</h1>

        {/* VIN Search Section */}
        <div className="mb-8">
          <h3 className="text-white text-2xl font-semibold mb-4">VIN del Vehículo</h3>
          <div className="flex gap-4 items-center">
            <Input 
              className="w-full max-w-md h-12 bg-white text-black text-lg"
              placeholder="Ingrese el VIN"
              value={vin}
              onChange={(e) => setVin(e.target.value)}
            />
            <Button 
              className="bg-green-500 text-white hover:bg-green-600 px-8 py-3"
              onClick={handleSearch}
            >
              Buscar
            </Button>
          </div>
        </div>

        {/* History Table */}
        {showHistory && (
          <div>
            <h3 className="text-white text-2xl font-semibold mb-4">Datos del vehículo</h3>
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="text-gray-600">VIN del vehículo: </span>
                  <span className="text-gray-900 font-semibold">1HGCM82633A123456</span>
                </div>
                
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-500 text-white">
                      <th className="text-left p-3 font-semibold">Servicio</th>
                      <th className="text-left p-3 font-semibold">Descripción</th>
                      <th className="text-left p-3 font-semibold">Fecha</th>
                      <th className="text-left p-3 font-semibold">Hora</th>
                      <th className="text-left p-3 font-semibold">Usuario</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historyData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-3 text-gray-800">{item.service}</td>
                        <td className="p-3 text-gray-800">{item.description}</td>
                        <td className="p-3 text-gray-800">{item.date}</td>
                        <td className="p-3 text-gray-800">{item.time}</td>
                        <td className="p-3 text-gray-800">{item.user}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-gray-600">Mostrando 2 de 2 resultados</span>
                  <div className="flex gap-2">
                    <Button variant="outline" disabled>Anterior</Button>
                    <Button variant="outline" className="bg-gray-200">1</Button>
                    <Button variant="outline" disabled>Siguiente</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleHistoryPage;