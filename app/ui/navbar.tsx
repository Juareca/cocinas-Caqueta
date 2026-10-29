"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  Squares2X2Icon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

// ─── Navegación ────────────────────────────────────────────
const navbarInfo = [
  { name: "Inicio", href: "/", icon: HomeIcon },
  { name: "Productos", href: "/productos", icon: Squares2X2Icon },
  { name: "Servicios", href: "/servicios", icon: Cog6ToothIcon },
  { name: "Carrito", href: "/carrito", icon: ShoppingCartIcon },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 h-15 w-full border-b border-gray-200 bg-white text-[#202020] shadow-sm">

      {/* Barra principal */}
      <div className="flex h-15 w-full items-center justify-between gap-2 px-3 sm:gap-3 sm:px-6 lg:px-8">

        {/* Logo y nombre */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#008568] text-xl font-bold text-white sm:h-12 sm:w-12 sm:rounded-xl sm:text-2xl">
            M
          </div>

          <h1 className="block min-w-0 max-w-[110px] text-[14px] font-bold leading-tight tracking-tight sm:max-w-none sm:whitespace-nowrap sm:text-lg lg:text-xl">
            Cocinas y triplex caquetá
          </h1>
        </Link>

        {/* Acciones */}
        <div className="flex shrink-0 items-center gap-0.5 sm:gap-2 lg:gap-3">

          {/* Buscar */}
          <Link
            href="/productos"
            aria-label="Buscar productos"
            className="p-2 text-gray-500 transition hover:text-[#008568]"
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </Link>

          {/* Carrito */}
          <Link
            href="/carrito"
            aria-label="Ver carrito"
            className="p-2 text-gray-500 transition hover:text-[#008568]"
          >
            <ShoppingCartIcon className="h-6 w-6 sm:h-7 sm:w-7" />
          </Link>

          {/* Cotizar */}
          <Link
            href="/contacto"
            className="flex h-10 shrink-0 items-center justify-center rounded-lg bg-[#008568] px-3 text-xs font-semibold text-white transition hover:bg-[#006f56] sm:px-4 sm:text-sm lg:min-w-[120px] lg:px-5 lg:text-base"
          >
            Cotizar
          </Link>

          {/* Menú hamburguesa */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="p-2 text-gray-900 transition hover:text-[#008568]"
          >
            {open ? (
              <XMarkIcon className="h-6 w-6 sm:h-7 sm:w-7" />
            ) : (
              <Bars3Icon className="h-6 w-6 sm:h-7 sm:w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Menú desplegable */}
      {open && (
        <>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default bg-black/20"
          />

          <nav className="absolute right-4 top-full z-50 w-64 rounded-xl border border-gray-200 bg-white p-3 shadow-xl sm:right-8">
            {navbarInfo.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "flex items-center gap-3 rounded-lg px-4 py-3 text-base transition hover:bg-gray-100",
                    active
                      ? "bg-emerald-50 font-semibold text-[#008568]"
                      : "text-[#4A3F35]"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon className="h-5 w-5" />
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </>
      )}
    </header>
  );
}