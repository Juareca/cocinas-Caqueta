"use client";

import type { Product } from "@/app/types/product";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  const handleAddToCart = (product: Product) => {
    console.log("Agregar al carrito:", product);
  };

  const handleViewProduct = (product: Product) => {
    console.log("Ver producto:", product);
  };

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={handleAddToCart}
          onView={handleViewProduct}
        />
      ))}
    </div>
  );
}
