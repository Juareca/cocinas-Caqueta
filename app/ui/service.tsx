import { MdKitchen, MdHomeRepairService } from "react-icons/md";
import { GiWoodBeam } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import Image from "next/image";
import ServiceCard from "./ServiceCard";

export default function Servicios() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <p className="text-[#007F5F] text-sm font-semibold uppercase tracking-wider mb-2">
            ¿Qué hacemos?
          </p>

          <h2 className="text-[#1A1A1A] mb-4 text-3xl md:text-4xl font-bold" style={{ fontFamily: "Poppins" }}>
            Nuestros Servicios
          </h2>

          <p className="text-[#6B6B6B] text-base max-w-xl mx-auto font-inter">
            De la idea al resultado final. Acompañamos cada etapa de tu proyecto con experiencia y calidad.
          </p>
        </div>

        {/* Tarjetas de servicios */}
        {/* Grid */}
        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-3 md:gap-4">

          <ServiceCard
            img={
              <Image
                src="/cocina.png"
                alt="Diseño de Cocinas"
                fill
                className="object-cover"
              />
            }
            title="Fabricación de Cocinas"
            desc="Diseñamos y fabricamos cocinas a medida con los mejores materiales del mercado. Desde el diseño hasta la instalación."
            price="$350.000"
            time="2–5 días"
          />
          <ServiceCard
            img={
              <Image
                src="/cocina.png"
                alt="Diseño de Cocinas"
                fill
                className="object-cover sm:w-10 sm:h-20"
              />
            }
            title="Decoración de Interiores"
            desc="Diseños personalizados que optimizan tu espacio y reflejan tu estilo."
            price="$350.000"
            time="2–5 días"
          />
          <ServiceCard
            img={
              <Image
                src="/cocina.png"
                alt="Diseño de Cocinas"
                fill
                className="object-cover"
              />
            }
            title="Reparación de Muebles"
            desc="Servicios de reparación y mantenimiento para todos tus muebles."
            price="$350.000"
            time="2–5 días"
          />
        </div>
      </div>
    </section>
  );
}
