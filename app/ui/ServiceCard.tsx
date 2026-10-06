import React from "react";

interface Props {
  img: React.ReactNode;
  title: string;
  price: string;
  time: string;
}

export default function ServiceCard({ img, title, price, time }: Props) {
  return (
    <div className=" group bg-[#F5F5F5] rounded-xl p-4 hover:bg-[#007F5F] transition-colors duration-300 w-65 h-100">

      {/* Imagen */}
      <div className="p-0relative w-full h-32 rounded-lg bg-[#007F5F]/10 
                group-hover:bg-white/20 mb-6 transition-colors overflow-hidden">
        {img}
      </div>

      <h3 className="text-[#1A1A1A] group-hover:text-white text-xl font-bold mb-3 transition-colors" style={{ fontFamily: "Poppins" }}>
        {title}
      </h3>

      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs text-[#6B6B6B] group-hover:text-white/60 transition-colors">Desde</p>
          <p className="font-bold text-[#007F5F] group-hover:text-[#C69C6D] transition-colors" style={{ fontFamily: "Poppins" }}>
            {price}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-[#6B6B6B] group-hover:text-white/60 transition-colors">Tiempo</p>
          <p className="font-medium text-sm text-[#1A1A1A] group-hover:text-white transition-colors">
            {time}
          </p>
        </div>
      </div>

      <button className="w-full h-10 rounded-lg border-2 border-[#007F5F] group-hover:border-white text-[#007F5F] group-hover:text-white font-semibold text-sm transition-all hover:bg-[#007F5F] group-hover:hover:bg-white/20">
        Solicitar servicio
      </button>
    </div>
  );
}
