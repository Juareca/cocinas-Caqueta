"use client";

import Image from "next/image";
import ServiceCard from "./ServiceCard";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import ArrowButtons from "./ArrowButtons";
import { CarouselDots } from "./CarouselDots";

const services = [
  {
    title: "Fabricación de Cocinas",
    image: "/cocina.png",
    price: "$350.000",
    time: "2–5 días",
  },
  {
    title: "Decoración de Interiores",
    image: "/cocina.png",
    price: "$350.000",
    time: "2–5 días",
  },
  {
    title: "Reparación de Muebles",
    image: "/cocina.png",
    price: "$350.000",
    time: "2–5 días",
  },
  {
    title: "Reparación de Máquinas",
    image: "/cocina.png",
    price: "$350.000",
    time: "2–5 días",
  },
];

export default function Servicios() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "keepSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
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

              {services.map((service, index) => (
                <div
                  key={index}
                  className="embla__slide min-w-[260px] md:min-w-[300px]"
                >
                  <ServiceCard
                    img={
                      <div className="relative w-full h-40">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 300px"
                          className="object-cover"
                        />
                      </div>
                    }
                    title={service.title}
                    price={service.price}
                    time={service.time}
                  />
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
