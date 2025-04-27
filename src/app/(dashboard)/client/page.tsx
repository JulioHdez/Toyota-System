import { Bell } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ClientDashboard = () => {
  // Define the progress steps data
  const progressSteps = [
    {
      id: 1,
      label: "Recibido",
      status: "completed",
    },
    {
      id: 2,
      label: "Proceso",
      status: "inProgress",
    },
    {
      id: 3,
      label: "Finalizado",
      status: "default",
    },
    {
      id: 4,
      label: "Entregado",
      status: "default",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
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
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-24 w-full">
        {/* Header */}
        <div className="h-28 bg-red-900/90 flex items-center justify-between px-20">
          <h1 className="text-6xl font-semibold text-white">Bienvenidos</h1>
          <Bell className="w-12 h-12 text-white cursor-pointer" />
        </div>

        {/* Content Area */}
        <div className="p-12">
          {/* Progress Tracker */}
          <Card className="w-[700px] bg-rose-100/30 rounded-md border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                {progressSteps.map((step, index) => (
                  <div key={step.id} className="flex flex-col items-center">
                    <div className="relative">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center
                        ${step.status === 'completed' ? 'bg-green-500' : 
                          step.status === 'inProgress' ? 'bg-yellow-500' : 
                          'bg-white'} shadow-md`}>
                        {step.status === 'completed' && (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      {index < progressSteps.length - 1 && (
                        <div className={`absolute top-5 left-10 w-16 h-0.5 
                          ${index === 0 ? 'bg-yellow-500' : 
                            index === 1 ? 'bg-gray-300' : 
                            'bg-gray-300'}`} />
                      )}
                    </div>
                    <span className={`mt-2 text-sm font-medium
                      ${step.status === 'inProgress' ? 'text-yellow-600' : 
                        step.status === 'completed' ? 'text-green-600' : 
                        'text-gray-900'}`}>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bottom Section */}
          <div className="mt-12 flex justify-between">
            {/* Recommended Services */}
            <div>
              <h2 className="text-5xl font-semibold text-black mb-8">Servicios recomendados</h2>
              <div className="flex gap-6">
                <Card className="w-64 bg-white shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Cambio aceite</h3>
                    <p className="text-4xl font-bold text-gray-900 mb-4">$700</p>
                    <ul className="text-gray-600 text-sm mb-6">
                      <li>• Cambio de aceite</li>
                      <li>• Cambio filtro de aceite</li>
                    </ul>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">
                      Comprar
                    </Button>
                  </CardContent>
                </Card>

                <Card className="w-64 bg-white shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Cambio filtro de aire</h3>
                    <p className="text-4xl font-bold text-gray-900 mb-4">$500</p>
                    <ul className="text-gray-600 text-sm mb-6">
                      <li>• Limpieza de cofre</li>
                      <li>• Cambio del filtro de aire</li>
                    </ul>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">
                      Comprar
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Side Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-5xl font-semibold text-black mb-4">Tiempo espera</h3>
                <Card className="w-64 bg-gray-100">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">2:30 Horas</p>
                    <p className="text-sm text-gray-600">Tiempo de espera</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="w-64 bg-gray-100">
                <CardContent className="p-6 text-center">
                  <p className="text-xl font-semibold text-gray-900 mb-2">Visitas acumuladas</p>
                  <p className="text-5xl font-bold text-gray-900">10</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;