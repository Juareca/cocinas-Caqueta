import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3, Sparkles } from "lucide-react";
import { mockServices } from "@/app/mocks/services.mock";
import ServiceCard from "@/app/ui/ServiceCard";

export const metadata: Metadata = {
  title: "Servicios | Cocinas y Triplex Caquetá",
  description:
    "Conoce nuestros servicios de diseño, fabricación, instalación y reparación para tus espacios.",
};

export default function ServiciosPage() {
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
            Soluciones para tu hogar
          </p>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
                Creamos espacios que se sienten como tuyos
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#626B65] sm:text-lg">
                Desde una cocina hecha a tu medida hasta la reparación de tus
                muebles, te acompañamos con experiencia, buenos materiales y
                atención cercana.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#007F5F]/10 text-[#007F5F]">
                <Clock3 size={21} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-medium text-[#737B76]">
                  Tiempo estimado
                </p>
                <p className="font-semibold text-[#1A1A1A]">
                  Según tu proyecto
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-20">
          <div className="mb-9 flex flex-col gap-3 sm:mb-11 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#007F5F]">
                Hechos con cuidado
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                Nuestros servicios
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
              Cada espacio es distinto. Cuéntanos qué necesitas y te ayudamos a
              encontrar la mejor solución.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {mockServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#F4F7F4] p-6 sm:flex-row sm:p-8">
            <div>
              <h2 className="text-xl font-bold text-[#1A1A1A] sm:text-2xl">
                ¿Tienes una idea en mente?
              </h2>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Hablemos y encontremos juntos el siguiente paso.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#007F5F] px-5 text-sm font-semibold text-white transition hover:bg-[#006A4F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007F5F]"
            >
              Solicitar cotización
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
