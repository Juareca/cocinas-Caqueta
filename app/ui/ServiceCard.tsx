import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { Service } from "@/app/types/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E7EAE6] bg-white shadow-[0_8px_30px_-20px_rgba(26,26,26,0.28)] transition duration-300 hover:-translate-y-1 hover:border-[#007F5F]/30 hover:shadow-[0_20px_45px_-24px_rgba(0,127,95,0.35)]">
      <div className="relative aspect-[1.45] overflow-hidden bg-[#E9EFEB]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
        <p className="absolute bottom-4 left-5 right-5 text-lg font-semibold leading-snug text-white sm:text-xl">
          {service.title}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-5 flex items-end justify-between gap-3">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[#7B817D]">
              Desde
            </p>
            <p className="text-xl font-bold tracking-tight text-[#007F5F]">
              {service.price}
            </p>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg bg-[#F4F7F5] px-3 py-2 text-xs font-medium text-[#52615A]">
            <Clock3 size={15} aria-hidden="true" className="text-[#007F5F]" />
            {service.time}
          </div>
        </div>

        <Link
          href={`/contacto?servicio=${service.id}`}
          className="mt-auto inline-flex min-h-11 items-center justify-between rounded-xl bg-[#007F5F]/[0.07] px-4 text-sm font-semibold text-[#007F5F] transition hover:bg-[#007F5F] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007F5F]"
        >
          Solicitar servicio
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
