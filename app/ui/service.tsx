"use client";

import Image from "next/image";
import ServiceCard from "./ServiceCard";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

export default function Servicios() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Bloquear scroll hacia la izquierda
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("scroll", () => {
      if (emblaApi.canScrollPrev()) {
        emblaApi.scrollTo(emblaApi.selectedScrollSnap());
      }
    });

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollNext = () => emblaApi?.scrollNext();
  const scrollPrev = () => emblaApi?.scrollPrev();

  return (
    <section className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <p className="text-[#007F5F] text-sm font-semibold uppercase tracking-wider mb-2">
            ¿Qué hacemos?
          </p>

          <h2 className="text-[#1A1A1A] mb-4 text-3xl md:text-4xl font-bold">
            Nuestros Servicios
          </h2>

          <p className="text-[#6B6B6B] text-base max-w-xl mx-auto font-inter">
            De la idea al resultado final. Acompañamos cada etapa de tu proyecto con experiencia y calidad.
          </p>
        </div>

        {/* Carrusel */}
        <div className="pl-8 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">

            {/* Tarjeta 1 */}
            <div className="min-w-[300px] md:min-w-[350px]">
              <ServiceCard
                img={
                  <div className="relative w-full h-40">
                    <Image
                      src="/cocina.png"
                      alt="Diseño de Cocinas"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                }
                title="Fabricación de Cocinas"
                desc="Diseñamos y fabricamos cocinas a medida con los mejores materiales del mercado."
                price="$350.000"
                time="2–5 días"
              />
            </div>

            {/* Tarjeta 2 */}
            <div className="min-w-[300px] md:min-w-[350px]">
              <ServiceCard
                img={
                  <div className="relative w-full h-40">
                    <Image
                      src="/cocina.png"
                      alt="Decoración"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                }
                title="Decoración de Interiores"
                desc="Diseños personalizados que optimizan tu espacio y reflejan tu estilo."
                price="$350.000"
                time="2–5 días"
              />
            </div>

            {/* Tarjeta 3 */}
            <div className="min-w-[300px] md:min-w-[350px]">
              <ServiceCard
                img={
                  <div className="relative w-full h-40">
                    <Image
                      src="/cocina.png"
                      alt="Reparación"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                }
                title="Reparación de Muebles"
                desc="Servicios de reparación y mantenimiento para todos tus muebles."
                price="$350.000"
                time="2–5 días"
              />
            </div>

            {/* Tarjeta 3 */}
            <div className="min-w-[300px] md:min-w-[350px]">
              <ServiceCard
                img={
                  <div className="relative w-full h-40">
                    <Image
                      src="/cocina.png"
                      alt="Reparación"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                }
                title="Reparación de Muebles"
                desc="Servicios de reparación y mantenimiento para todos tus muebles."
                price="$350.000"
                time="2–5 días"
              />
            </div>

          </div>
        </div>

        {/* Flecha izquierda */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#007F5F] text-white px-4 py-2 mt-16 rounded-full shadow-lg hover:bg-[#005f46] transition"
        >
          {"<"}
        </button>

        {/* Flecha derecha */}
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#007F5F] text-white px-4 py-2 mt-16 rounded-full shadow-lg hover:bg-[#005f46] transition"
        >
          {">"}
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === selectedIndex ? "bg-[#007F5F]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
