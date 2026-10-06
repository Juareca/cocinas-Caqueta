"use client";

import { ChevronRight } from "lucide-react";
import BtnSecondary from "./BtnSecuday";
import ProductCard from "./ProductCard";
import { Product } from "@/app/ui/ProductCard";

const products: Product[] = [
  {
    name: "Bisagra Oculta 35mm Clip-On",
    category: "Bisagras",
    price: 12500,
    rating: 5,
    reviews: 124,
    image: "/ferreteria.png",
    badge: "Más vendido",
  },
  {
    name: "Herraje Corredera Telescópica 500mm",
    category: "Herrajes",
    price: 38900,
    rating: 5,
    reviews: 87,
    image: "/ferreteria.png",
    badge: "Nuevo",
  },
  {
    name: "Triplex 18mm MDF Enchapado Madera",
    category: "Triplex",
    price: 89000,
    rating: 5,
    reviews: 203,
    image: "/ferreteria.png",
  },
  {
    name: "Bisagra Oculta 35mm Clip-On",
    category: "Bisagras",
    price: 12500,
    rating: 5,
    reviews: 124,
    image: "/ferreteria.png",
    badge: "Más vendido",
  },
];

export default function Products() {

  // 👉 Aquí defines las funciones reales
  const handleAddToCart = (product: Product) => {
    console.log("Agregar al carrito:", product);
    // Aquí conectas tu lógica real de carrito
  };

  const handleViewProduct = (product: Product) => {
    console.log("Ver producto:", product);
    // Aquí abres modal o cambias página
    // setSelectedProduct(product)
    // setPage("detalle")
  };

  return (
    <section className="py-16 lg:py-20 bg-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20">

        {/* Encabezado */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#007F5F] text-sm font-semibold uppercase tracking-wider mb-2">
              Lo más popular
            </p>
            <h2 className="font-bold text-[#1A1A1A] text-xl">
              Productos Destacados
            </h2>
          </div>

          <button
            onClick={() => {}}
            className="hidden sm:flex items-center gap-1 text-[#007F5F] font-medium hover:gap-2 transition-all"
          >
            Ver catálogo <ChevronRight size={18} />
          </button>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <ProductCard
              key={i}
              product={p}
              onAdd={handleAddToCart}
              onView={handleViewProduct}
            />
          ))}
        </div>

        {/* Botón móvil */}
        <div className="text-center mt-8 sm:hidden">
          <BtnSecondary onClick={() => {}}>
            Ver todos los productos
          </BtnSecondary>
        </div>

      </div>
    </section>
  );
}
