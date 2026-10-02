"use client";

import { useState } from "react";
import { GiWoodBeam } from "react-icons/gi";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { inter } from "@/app/ui/fonts";
import { usePathname } from "next/navigation";
import Link from 'next/link'
import clsx from "clsx";
import Icono from "./icono";

const links = [
  { name: "Servicios", href: "/servicios" },
  { name: "Productos", href: "/productos" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full flex items-center justify-between bg-[#F7F3ED]/70 text-[#4A3F35] shadow px-4 py-2 border-b border-[#E5D8C8]/60">
      
      <div className="flex items-center gap-3">
        {/* Botón menú lateral */}
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-md border border-[#C8A98A] md:hidden hover:bg-[#EDE4D9] transition"
        >
          <Bars3Icon className="h-6 w-6 text-[#4A3F35]" />
        </button>

        {/* Icono */}
        <Icono />

        {/* Nombre */}
        <h1 className="text-xl font-semibold tracking-wide text-[#4A3F35]">
          Cocinas y Triplex Caquetá
        </h1>
      </div>

      {/* Enlaces desktop */}
      <nav className={"hidden md:flex items-center gap-10 " + inter.className}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "text-md font-medium transition",
              "text-[#4A3F35] hover:text-green-600",
              {
                "text-green-700 font-semibold": pathname === link.href,
              }
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Drawer lateral */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute left-0 top-0 h-full w-64 bg-[#F7F3ED] text-[#4A3F35] shadow-xl p-6 flex flex-col gap-6 border-r border-[#E5D8C8]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="self-end p-2 border border-[#C8A98A] rounded-md hover:bg-[#EDE4D9] transition"
            >
              ✕
            </button>

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={clsx(
                  "text-lg font-medium transition",
                  "hover:text-[#8B5E3C]",
                  {
                    "text-[#4A3F35] font-semibold": pathname === link.href,
                  }
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
