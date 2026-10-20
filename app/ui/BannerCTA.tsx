import Link from "next/link";
import { Phone } from "lucide-react";

export default function BannerCTA({
  title,
  description,
  phone,
  quoteHref,
}: {
  title: string;
  description: string;
  phone: string;
  quoteHref: string;
}) {
  return (
    <section className="relative py-20 bg-[#007F5F] overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #C69C6D 0%, transparent 50%), radial-gradient(circle at 80% 50%, #8B5E3C 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 lg:px-20 text-center">
        <h2 className="text-white mb-4 font-bold text-2xl md:text-3xl">
          {title}
        </h2>

        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            href={quoteHref}
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-white border border-white text-black font-semibold transition-all hover:bg-[#f3f3f3] active:scale-95"
          >
            Solicitar cotización
          </Link>

          <a
            href={`tel:${phone}`}
            className="inline-flex items-center justify-center gap-2 h-12 px-6 text-white font-semibold"
          >
            <Phone size={18} />
            {phone}
          </a>
        </div>
      </div>
    </section>
  );
}