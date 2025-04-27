import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plus, Edit, Trash2, Bell } from "lucide-react";

const InventoryPage = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const inventoryData = [
    { id: "583674", name: "Batería", description: "Fuente de energía", quantity: 20 },
    { id: "456843", name: "Bujías", description: "Para un mejor encendido", quantity: 35 },
    { id: "245679", name: "Pastillas de freno", description: "Frenado eficiente", quantity: 35 },
    { id: "712756", name: "Balatas", description: "Frenado por fricción", quantity: 12 },
    { id: "089543", name: "Radiador", description: "Enfriamiento del motor", quantity: 10 },
    { id: "235678", name: "Gato hidráulico", description: "Elevador de vehículo", quantity: 10 },
    { id: "109234", name: "Desarmador plano", description: "Para tornillo rectos", quantity: 9 },
    { id: "534211", name: "Embudo", description: "Vertedor de líquidos", quantity: 7 },
    { id: "875332", name: "Alternador", description: "Genera electricidad", quantity: 16 },
    { id: "124443", name: "Llave inglesa", description: "Ajuste multiple", quantity: 9 },
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
          {/* Navigation Icons */}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-24 w-full p-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-semibold text-green-400">Inventario</h1>
          <Bell className="w-8 h-8 text-white cursor-pointer" />
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          <Input 
            className="w-full bg-white h-12 pl-12 pr-4 rounded-md text-gray-800 placeholder:text-gray-400"
            placeholder="Buscar..."
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-4 font-semibold text-gray-700">ID del producto</th>
                <th className="text-left p-4 font-semibold text-gray-700">Nombre</th>
                <th className="text-left p-4 font-semibold text-gray-700">Descripción</th>
                <th className="text-left p-4 font-semibold text-gray-700">Cantidad</th>
                <th className="text-left p-4 font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-4 text-gray-800">{item.id}</td>
                  <td className="p-4 text-gray-800">{item.name}</td>
                  <td className="p-4 text-gray-800">{item.description}</td>
                  <td className="p-4 text-gray-800">{item.quantity}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                        onClick={() => setShowEditModal(true)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => setShowDeleteModal(true)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-8 mt-8">
          <Button 
            className="bg-green-100 text-green-700 hover:bg-green-200 w-40 h-12 text-lg"
            onClick={() => setShowAddModal(true)}
          >
            <Plus className="mr-2 h-5 w-5" /> Agregar
          </Button>
          <Button className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200 w-40 h-12 text-lg">
            <Edit className="mr-2 h-5 w-5" /> Editar
          </Button>
          <Button 
            className="bg-red-100 text-red-700 hover:bg-red-200 w-40 h-12 text-lg"
            onClick={() => setShowDeleteModal(true)}
          >
            <Trash2 className="mr-2 h-5 w-5" /> Eliminar
          </Button>
        </div>

        {/* Edit Modal */}
        {showEditModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-[600px] bg-gray-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Editar</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">ID del producto</label>
                    <Input className="bg-gray-100" value="456843" readOnly />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Nombre</label>
                    <Input className="bg-white" defaultValue="Bujías" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Descripción</label>
                    <Input className="bg-white" defaultValue="Para un mejor encendido" />
                  </div>
                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={() => setShowEditModal(false)}>
                      Volver
                    </Button>
                    <Button className="bg-green-600 text-white hover:bg-green-700">
                      Guardar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Add Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-[600px] bg-gray-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Agregar</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">ID del producto</label>
                    <Input className="bg-gray-100" defaultValue="56987" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Nombre</label>
                    <Input className="bg-white" placeholder="Nombre del producto" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Descripción</label>
                    <Input className="bg-white" placeholder="Descripción del producto" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Cantidad</label>
                    <Input className="bg-white" placeholder="Cantidad disponible" />
                  </div>
                  <div className="flex justify-between mt-8">
                    <Button 
                      variant="outline" 
                      className="bg-red-600 text-white hover:bg-red-700"
                      onClick={() => setShowAddModal(false)}
                    >
                      Cancelar
                    </Button>
                    <Button className="bg-green-600 text-white hover:bg-green-700">
                      Agregar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-green-500 rounded-t-lg overflow-hidden">
              <Card className="rounded-t-none border-t-0 w-[500px]">
                <CardContent className="p-8 text-center">
                  <h2 className="text-xl font-semibold text-gray-800 mb-8">
                    ¿Está seguro que desea eliminar el producto?
                  </h2>
                  <div className="flex justify-center gap-6">
                    <Button 
                      className="bg-red-600 text-white hover:bg-red-700 w-32"
                      onClick={() => setShowDeleteModal(false)}
                    >
                      Cancelar
                    </Button>
                    <Button 
                      className="bg-green-600 text-white hover:bg-green-700 w-32"
                      onClick={() => setShowDeleteModal(false)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryPage;