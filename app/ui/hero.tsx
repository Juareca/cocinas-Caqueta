"use client";

import Image from "next/image";
import Button from "./Buttons";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <main className="relative w-full min-h-[calc(100vh-53px)] flex items-center justify-center">
      <Image
      src="/image.png"
      alt="Cocina"
      fill
      className="object-cover brightness-[0.7]"
      priority
      />
   
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

        <div className="relative text-start z-10 text-white px-2 max-w-xl">
          <p className="inline-block bg-[#007F5F]/20 text-[#4DB890] text-sm font-semibold px-3 py-1 rounded-full mb-6 border border-[#007F5F]/30">
            ✦ Cocinas Premium
          </p>



          <h1 className=" text-4xl md:text-5xl font-bold mb-6">
            Tu cocina, <span className="text-[#C69C6D]">tu espacio,</span> nuestra pasión
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-8 font-inter">
            Somos especialistas en accesorios para cocinas y muebles, triplex y herrajes. Transformamos tus espacios con calidad.
          </p>

          <div className="flex flex-row gap-3 justify-center mt-6 items-center">
            <Button onClick={() => router.push("/servicios")}>Nuestros Servicios</Button>
            <Button onClick={() => router.push("/productos")}>Ver Productos {">"}</Button>
        </div>        
      </div>
    </main>
  );
}

