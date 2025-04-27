import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const LoginPage = () => {
  return (
    <div className="bg-gray-900 flex flex-row justify-center w-full min-h-screen">
      <div className="w-full max-w-7xl relative py-12">
        <div className="flex flex-col items-center justify-center">
          {/* Toyota Logo */}
          <div className="mb-12">
            <svg width="160" height="120" viewBox="0 0 160 120" className="text-red-600">
              <ellipse cx="80" cy="60" rx="75" ry="35" fill="none" stroke="currentColor" strokeWidth="4"/>
              <ellipse cx="80" cy="60" rx="35" ry="55" fill="none" stroke="currentColor" strokeWidth="4"/>
              <ellipse cx="80" cy="60" rx="15" ry="35" fill="none" stroke="currentColor" strokeWidth="4"/>
            </svg>
            <div className="text-red-600 text-4xl font-bold text-center mt-2">TOYOTA</div>
          </div>

          <Card className="w-full max-w-md bg-transparent border-none shadow-none">
            <CardContent className="p-0 space-y-6">
              <div className="space-y-1">
                <label className="block font-semibold text-green-400 text-base font-sans ml-4">
                  Correo
                </label>
                <Input 
                  type="email"
                  className="h-12 bg-gray-700/60 rounded-lg border-2 border-gray-600 text-white placeholder:text-gray-400 mx-4" 
                />
              </div>
              <div className="space-y-1">
                <label className="block font-semibold text-green-400 text-base font-sans ml-4">
                  Contraseña
                </label>
                <Input
                  type="password"
                  className="h-12 bg-gray-700/60 rounded-lg border-2 border-gray-600 text-white placeholder:text-gray-400 mx-4"
                />
              </div>
              <div className="flex flex-col items-center space-y-4 pt-4">
                <a
                  href="#"
                  className="font-sans text-green-400 text-base underline hover:text-green-300 transition-colors"
                >
                  Olvidé mi contraseña
                </a>
                <Button className="w-48 h-12 bg-gray-600 rounded-full text-gray-100 font-semibold font-sans hover:bg-gray-500 transition-colors">
                  Iniciar Sesión
                </Button>
                <p className="font-sans text-gray-400 text-base mt-4">
                  ¿No tienes cuenta?{" "}
                  <a href="#" className="underline hover:text-gray-300 transition-colors">
                    Regístrate
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;