"use client";

import { useState } from "react";
import { GiWoodBeam } from "react-icons/gi";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between bg-white text-black shadow px-4 py-3">
      
      <div className="flex items-center gap-2">
        {/* Botón menú lateral */}
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-md border md:hidden"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>

        
        {/* Icono de la página */}
        <GiWoodBeam className="text-5xl text-green-500 border-1 border-green-500 rounded-full p-1" />

        {/* Nombre de la página */}
        <h1 className="text-lg font-bold">Cocinas y triplex caquetá</h1>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <a href="#" className="text-sm font-medium">Servicios</a>
        <a href="#" className="text-sm font-medium">Productos</a>
        <a href="#" className="text-sm font-medium">Proyectos</a>
        <a href="#" className="text-sm font-medium">Contacto</a>
      </nav>

      {/* Drawer lateral */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute left-0 top-0 h-full w-64 bg-white text-black shadow-lg p-6 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="self-end p-2 border rounded-md hover:bg-gray-100"
            >
              ✕
            </button>

            <a href="#" className="text-lg font-medium hover:text-blue-600">Servicios</a>
            <a href="#" className="text-lg font-medium hover:text-blue-600">Productos</a>
            <a href="#" className="text-lg font-medium hover:text-blue-600">Contacto</a>
          </div>
        </div>
      )}

    </header>
  );
}
