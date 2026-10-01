import Image from "next/image";
import Button from "./components/button";

export default function Home() {
  return (
    <main className="relative w-full h-[90vh] flex items-center justify-center">
      <Image
      src="/cocina.png"
      alt="Cocina"
      fill
      className="object-cover brightness-[0.7]"
      priority
    />
   
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

      <div className="relative text-start z-10 text-white px-0 ">
        <p className="text-lg text-start px-2 md:text-xl mb-6">
          ✦ Cocinas Premium
        </p>

        <h1 className="text-4xl px-2 md:text-6xl font-bold mb-4">
          Tu cocina, <p className="text-green-600">tu espacio,</p> nuestra pasión
        </h1>

        <div className="flex flex-row gap-3 justify-start mt-6">
          <Button>Ver Productos</Button>
          <Button>Ver Servicios</Button>
        </div>        
      </div>
    </main>
  );
}

