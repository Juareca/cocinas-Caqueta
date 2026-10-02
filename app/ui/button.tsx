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
        "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-[#007F5F] text-white font-semibold text-base transition-all hover:bg-[#006a4f] active:scale-95",

        className
      )}
    >
      {children}
    </button>
  );
}
