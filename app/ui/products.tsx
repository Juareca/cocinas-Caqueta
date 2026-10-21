import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mockProducts } from "@/app/mocks/products.mock";
import ProductGrid from "./ProductGrid";

export default function Products() {
  return (
    <section className="bg-[#F5F5F5] py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20">
        <div className="mb-8 flex items-end justify-between sm:mb-10">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#007F5F]">
              Lo más popular
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-[#1A1A1A] sm:text-3xl">
              Productos Destacados
            </h2>
          </div>
          <Link
            href="/productos"
            className="hidden items-center gap-2 text-sm font-semibold text-[#007F5F] transition hover:gap-3 sm:flex"
          >
            Ver catálogo <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <ProductGrid products={mockProducts} />
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/productos"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#007F5F]/25 bg-white px-5 text-sm font-semibold text-[#007F5F] transition hover:bg-[#007F5F] hover:text-white"
          >
            Ver todos los productos
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
