import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Hammer, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Proyectos | Cocinas y Triplex Caquetá",
  description:
    "Inspírate para tu próximo proyecto de cocina y carpintería a medida.",
};

const inspirations = [
  {
    title: "Cocinas integrales",
    description:
      "Distribuciones prácticas, materiales cálidos y detalles pensados para el día a día.",
    image: "/cocina.png",
    imageAlt: "Referencia visual de una cocina integral contemporánea",
    number: "01",
    className: "lg:col-span-7",
  },
  {
    title: "Espacios para compartir",
    description:
      "Diseños que hacen de la cocina el lugar favorito para reunirse.",
    image: "/image.png",
    imageAlt: "Personas compartiendo un momento en la cocina",
    number: "02",
    className: "lg:col-span-5",
  },
  {
    title: "Detalles y materiales",
    description:
      "Herrajes, texturas y acabados que ayudan a llevar cada idea a la realidad.",
    image: "/ferreteria.png",
    imageAlt: "Referencia visual de herramientas y materiales de trabajo",
    number: "03",
    className: "lg:col-span-12",
  },
];

export default function ProyectosPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#F4F7F4]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#007F5F]/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#007F5F]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#007F5F]">
            <Sparkles size={15} aria-hidden="true" />
            Ideas que toman forma
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
            Un buen proyecto empieza imaginando lo que es posible
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#626B65] sm:text-lg">
            Explora estas referencias y cuéntanos qué te gustaría crear.
            Adaptamos cada propuesta a tu espacio, tus necesidades y tu estilo.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-20">
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#007F5F]">
                Galería de inspiración
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                ¿Qué podemos crear juntos?
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
              Estas imágenes son referencias visuales, no fotografías de
              proyectos realizados.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            {inspirations.map((item) => (
              <article
                key={item.number}
                className={`group relative isolate min-h-[300px] overflow-hidden rounded-3xl bg-[#1A1A1A] sm:min-h-[360px] ${item.className}`}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 58vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/5" />
                <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/25 px-3 py-1 text-xs font-medium tracking-wider text-white backdrop-blur-sm">
                  REFERENCIA {item.number}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl bg-[#F4F7F4] p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#007F5F] shadow-sm">
                <Hammer size={20} aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-[#1A1A1A] sm:text-2xl">
                  ¿Tienes un proyecto en mente?
                </h2>
                <p className="mt-1 text-sm text-[#6B6B6B]">
                  Cuéntanos tu idea y conversemos sobre cómo hacerla realidad.
                </p>
              </div>
            </div>
            <Link
              href="/contacto"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#007F5F] px-5 text-sm font-semibold text-white transition hover:bg-[#006A4F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007F5F]"
            >
              Hablemos de tu proyecto
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
