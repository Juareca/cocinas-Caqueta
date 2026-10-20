"use client";

import ServiceCard from "./ServiceCard";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import ArrowButtons from "./ArrowButtons";
import { CarouselDots } from "./CarouselDots";
import { mockServices } from "@/app/mocks/services.mock";

export default function Servicios() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "keepSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollSnaps = emblaApi?.scrollSnapList() ?? [];

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelectedIndex = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", updateSelectedIndex);
    emblaApi.on("reInit", updateSelectedIndex);

    return () => {
      emblaApi.off("select", updateSelectedIndex);
      emblaApi.off("reInit", updateSelectedIndex);
    };
  }, [emblaApi]);

  const scrollNext = () => emblaApi?.scrollNext();
  const scrollPrev = () => emblaApi?.scrollPrev();

  return (
    <section className="py-8 lg:py-10 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">

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
        <div className="embla">
          <div className="embla__viewport overflow-hidden pl-4" ref={emblaRef}>
            <div className="embla__container flex gap-8">

              {mockServices.map((service) => (
                <div
                  key={service.id}
                  className="embla__slide min-w-[260px] md:min-w-[300px]"
                >
                  <ServiceCard service={service} />
                </div>
              ))}

            </div>
          </div>
        </div>

        <ArrowButtons onPrev={scrollPrev} onNext={scrollNext} />

        <CarouselDots
          scrollSnaps={scrollSnaps}
          selectedIndex={selectedIndex}
          onDotClick={(index) => emblaApi?.scrollTo(index)}
        />

      </div>
    </section>
  );
}
