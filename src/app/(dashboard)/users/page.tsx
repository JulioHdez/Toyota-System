import React, { useState } from "react";
import { Bell, Edit, Trash2, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const UserAdminPage = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const users = [
    {
      name: "Julio Alejandro",
      username: "July02",
      email: "Julioale@gmail.com",
      password: "Julio123",
      phone: "6641236547",
      role: "Administrador"
    },
    {
      name: "Ramiro G.",
      username: "rmr22",
      email: "RamiroG12@gmail.com",
      password: "Rami123",
      phone: "6641547895",
      role: "Usuario"
    },
    {
      name: "Luis Lua",
      username: "Luax3",
      email: "Lua21@gmail.com",
      password: "Lua123",
      phone: "664843791",
      role: "Usuario"
    },
    {
      name: "Sebastian C.",
      username: "Sebas12",
      email: "Sebas32@gmail.com",
      password: "Seba451",
      phone: "664354795",
      role: "Administrador"
    }
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

          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-24 w-full p-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-semibold text-green-400">Administración de usuarios</h1>
          <div className="flex items-center gap-4">
            <Button 
              className="bg-green-500 text-white hover:bg-green-600"
              onClick={() => setShowCreateModal(true)}
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Nuevo Usuario
            </Button>
            <Bell className="w-8 h-8 text-white cursor-pointer" />
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="text-left p-4 font-semibold">Nombre</th>
                <th className="text-left p-4 font-semibold">Usuario</th>
                <th className="text-left p-4 font-semibold">Correo</th>
                <th className="text-left p-4 font-semibold">Contraseña</th>
                <th className="text-left p-4 font-semibold">Teléfono</th>
                <th className="text-left p-4 font-semibold">Rol</th>
                <th className="text-left p-4 font-semibold">Editar</th>
                <th className="text-left p-4 font-semibold">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-4 text-gray-800">{user.name}</td>
                  <td className="p-4 text-gray-800">{user.username}</td>
                  <td className="p-4 text-gray-800">{user.email}</td>
                  <td className="p-4 text-gray-800">******</td>
                  <td className="p-4 text-gray-800">{user.phone}</td>
                  <td className="p-4 text-gray-800">{user.role}</td>
                  <td className="p-4">
                    <Button variant="ghost" size="icon" className="text-gray-700 hover:text-gray-900">
                      <Edit className="h-5 w-5" />
                    </Button>
                  </td>
                  <td className="p-4">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-gray-700 hover:text-red-600"
                      onClick={() => setShowDeleteModal(true)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 flex justify-between items-center border-t">
            <span className="text-gray-600">Mostrando 4 de 4 resultados</span>
            <div className="flex gap-2">
              <Button variant="outline" disabled>Anterior</Button>
              <Button variant="outline" className="bg-gray-200">1</Button>
              <Button variant="outline" disabled>Siguiente</Button>
            </div>
          </div>
        </div>

        {/* Create User Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-[600px] bg-gray-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Administración de usuarios</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Nombre</label>
                    <Input className="bg-white" placeholder="Nombre completo" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Usuario</label>
                    <Input className="bg-white" placeholder="Nombre de usuario" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Correo electrónico</label>
                    <Input className="bg-white" type="email" placeholder="correo@ejemplo.com" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Contraseña</label>
                    <Input className="bg-white" type="password" placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Teléfono</label>
                    <Input className="bg-white" placeholder="664-123-4567" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Rol</label>
                    <Select defaultValue="usuario">
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Seleccionar rol" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usuario">Usuario</SelectItem>
                        <SelectItem value="administrador">Administrador</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-between mt-8">
                    <Button className="bg-green-600 text-white hover:bg-green-700">
                      Crear
                    </Button>
                    <Button 
                      className="bg-red-600 text-white hover:bg-red-700"
                      onClick={() => setShowCreateModal(false)}
                    >
                      Volver
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {showDeleteModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-green-500 rounded-t-lg overflow-hidden">
              <Card className="rounded-t-none border-t-0 w-[500px]">
                <CardContent className="p-8 text-center">
                  <h2 className="text-xl font-semibold text-gray-800 mb-8">
                    ¿Está seguro que desea eliminar al usuario?
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

export default UserAdminPage;