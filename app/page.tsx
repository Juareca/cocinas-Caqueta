"use client";

import Hero from "./ui/hero";
import Services from "./ui/service";
import Products from "./ui/products";
import BannerCTA from "./ui/BannerCTA";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Hero />
      <Services />
      <Products />
      <BannerCTA
        title="¿Tienes un proyecto en mente?"
        description="Cuéntanos tu idea y te ayudamos a hacerla realidad. Cotización gratuita y sin compromiso."
        phone="+57 604 123 4567"
        onQuote={() => router.push("/servicios")}
      />
    </>
  );
}
