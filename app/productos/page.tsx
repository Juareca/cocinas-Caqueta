import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PackageCheck, Phone } from "lucide-react";
import { mockProducts } from "@/app/mocks/products.mock";
import ProductGrid from "@/app/ui/ProductGrid";

export const metadata: Metadata = {
  title: "Productos | Cocinas y Triplex Caquetá",
  description:
    "Explora nuestro catálogo de herrajes, bisagras y triplex para tus proyectos.",
};

const categories = Array.from(
  new Set(mockProducts.map((product) => product.category)),
);

export default function ProductosPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#F4F7F4]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 rounded-full bg-[#007F5F]/10 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:px-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#007F5F]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#007F5F]">
              <PackageCheck size={15} aria-hidden="true" />
              Materiales para crear
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              Encuentra lo que tu proyecto necesita
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#626B65] sm:text-lg">
              Herrajes, bisagras y materiales seleccionados para hacer realidad
              tus ideas. Si buscas algo específico, estamos listos para
              asesorarte.
            </p>
          </div>
          <Link
            href="/contacto"
            className="inline-flex min-h-12 items-center justify-center gap-2 justify-self-start rounded-xl bg-[#007F5F] px-5 text-sm font-semibold text-white transition hover:bg-[#006A4F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007F5F] lg:justify-self-end"
          >
            <Phone size={17} aria-hidden="true" />
            Consultar disponibilidad
          </Link>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-20">
          <div className="mb-8 flex flex-col gap-5 border-b border-[#E8EBE8] pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#007F5F]">
                Catálogo
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                Productos disponibles
              </h2>
              <p className="mt-2 text-sm text-[#6B6B6B]">
                {mockProducts.length} productos para empezar tu proyecto.
              </p>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Categorías disponibles">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-[#E2E9E4] bg-[#F7F9F7] px-3 py-1.5 text-xs font-medium text-[#52615A]"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <ProductGrid products={mockProducts} />

          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#F4F7F4] p-6 sm:flex-row sm:p-8">
            <div>
              <h2 className="text-xl font-bold text-[#1A1A1A] sm:text-2xl">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Escríbenos y te ayudamos a encontrar el material adecuado.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-[#007F5F]/20 bg-white px-5 text-sm font-semibold text-[#007F5F] transition hover:bg-[#007F5F] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007F5F]"
            >
              Contactar
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
