"use client";

import Image from "next/image";
import Button from "./button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <main className="relative w-full min-h-[calc(100vh-53px)] flex items-center justify-center">
      <Image
      src="/cocina.png"
      alt="Cocina"
      fill
      className="object-cover brightness-[0.7]"
      priority
      />
   
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

        <div className="relative text-start z-10 text-white px-2 max-w-xl">
          <p className="text-lg text-start md:text-xl mb-6">
            ✦ Cocinas Premium
          </p>

          <h1 className=" text-4xl md:text-5xl font-bold mb-4">
            Tu cocina, <span className="text-green-600">tu espacio,</span> nuestra pasión
          </h1>

          <div className="flex flex-row gap-3 justify-center mt-6 items-center">
            <Button onClick={() => router.push("/servicios")}>Nuestros Servicios</Button>
            <Button onClick={() => router.push("/productos")}>Ver Productos {">"}</Button>
        </div>        
      </div>
    </main>
  );
}

