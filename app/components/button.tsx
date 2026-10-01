"use client";

import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        // Tamaño responsive
        "px-3 py-2 text-sm",          // móvil
        "md:px-16 md:py-3 md:text-lg", // escritorio

        // Estilos base
        "bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition",

        className
      )}
    >
      {children}
    </button>
  );
}
