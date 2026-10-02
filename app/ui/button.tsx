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
        "md:px-8 md:py-2 md:text-lg", // escritorio

        // Estilos base
        "bg-green-800 hover:bg-green-700 rounded-md font-medium transition",

        className
      )}
    >
      {children}
    </button>
  );
}
