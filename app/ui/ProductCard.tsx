import { Heart, Plus } from "lucide-react";
import { useState } from "react";
import StarRating from "./StarRating";

export type Product = {
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
};

export default function ProductCard({
  product,
  onAdd,
  onView,
}: {
  product: Product;
  onAdd: (p: Product) => void;
  onView: (p: Product) => void;
}) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="
      bg-white 
      rounded-xl 
      border border-[#E3E3E3] 
      shadow-sm 
      hover:shadow-md 
      transition-all 
      group
    ">
      
      {/* Imagen */}
      <div
        className="
          relative 
          aspect-[4/3] 
          bg-[#F5F5F5] 
          overflow-hidden 
          cursor-pointer
        "
        onClick={() => onView(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full h-full object-cover 
            transition-transform duration-500 
            group-hover:scale-105
          "
        />

        {/* Badge */}
        {product.badge && (
          <span className="
            absolute top-3 left-3 
            bg-[#007F5F] 
            text-white 
            text-xs 
            font-semibold 
            px-2 py-1 
            rounded-md
          ">
            {product.badge}
          </span>
        )}

        {/* Like */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="
            absolute top-3 right-3 
            w-8 h-8 
            bg-white 
            rounded-full 
            flex items-center justify-center 
            shadow-sm 
            hover:scale-110 
            transition-transform
          "
        >
          <Heart
            size={16}
            className={
              liked
                ? "fill-red-500 text-red-500"
                : "text-[#6B6B6B]"
            }
          />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-[#007F5F] font-medium mb-1">
          {product.category}
        </p>

        <h4
          className="
            text-[#1A1A1A] 
            font-semibold 
            text-base 
            leading-snug 
            mb-2 
            cursor-pointer 
            hover:text-[#007F5F] 
            transition-colors
          "
          onClick={() => onView(product)}
        >
          {product.name}
        </h4>

        <StarRating rating={product.rating} count={product.reviews} />

        {/* Precio + botón */}
        <div className="
            flex flex-col sm:flex-row 
            sm:items-center sm:justify-between 
            mt-3 gap-3
        ">

          <span className="text-xl font-bold text-[#1A1A1A]">
            ${product.price.toLocaleString("es-CO")}
          </span>

          <button
            onClick={() => onAdd(product)}
            className="
              flex items-center gap-1 
              h-9 px-3 
              rounded-lg 
              bg-[#007F5F] 
              text-white 
              text-sm font-medium 
              hover:bg-[#006a4f] 
              transition-colors 
              active:scale-95
            "
          >
            <Plus size={14} /> Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
