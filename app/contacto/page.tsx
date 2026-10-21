import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { siteContact } from "@/app/config/site";

export const metadata: Metadata = {
  title: "Contacto | Cocinas y Triplex Caquetá",
  description:
    "Comunícate con Cocinas y Triplex Caquetá para recibir asesoría sobre tu proyecto.",
};

const contactChannels = [
  {
    title: "Llámanos",
    detail: siteContact.phoneDisplay,
    description: "Conversemos sobre lo que necesitas.",
    href: `tel:${siteContact.phoneNumber}`,
    action: "Llamar ahora",
    icon: Phone,
  },
  {
    title: "Escríbenos",
    detail: siteContact.email,
    description: "Envíanos los detalles de tu idea.",
    href: `mailto:${siteContact.email}?subject=${encodeURIComponent("Consulta sobre un proyecto")}`,
    action: "Enviar correo",
    icon: Mail,
  },
];

export default function ContactoPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#F4F7F4]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#007F5F]/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#007F5F]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#007F5F]">
            <MessageCircle size={15} aria-hidden="true" />
            Estamos para ayudarte
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
            Cuéntanos qué tienes en mente
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#626B65] sm:text-lg">
            Queremos conocer tu idea y ayudarte a encontrar la mejor solución
            para tu espacio. Elige el canal que te resulte más cómodo.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-20">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#007F5F]">
              Hablemos
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Estamos a un mensaje de distancia
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
              Ya sea que estés comenzando a planear o tengas una idea definida,
              podemos orientarte sobre los siguientes pasos.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;

                return (
                  <article
                    key={channel.title}
                    className="flex flex-col rounded-2xl border border-[#E7EAE6] bg-white p-5 shadow-[0_8px_30px_-24px_rgba(26,26,26,0.35)]"
                  >
                    <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#007F5F]/10 text-[#007F5F]">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <h3 className="font-bold text-[#1A1A1A]">
                      {channel.title}
                    </h3>
                    <p className="mt-1 break-words text-sm font-semibold text-[#007F5F]">
                      {channel.detail}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#737B76]">
                      {channel.description}
                    </p>
                    <a
                      href={channel.href}
                      className="mt-5 inline-flex min-h-10 items-center justify-between rounded-lg bg-[#F4F7F5] px-3 text-sm font-semibold text-[#007F5F] transition hover:bg-[#007F5F] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007F5F]"
                    >
                      {channel.action}
                      <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="h-fit rounded-3xl bg-[#F4F7F4] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#007F5F]">
              Información
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1A1A1A]">
              Visítanos o llámanos
            </h2>

            <div className="mt-7 space-y-6">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#007F5F]">
                  <MapPin size={19} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A]">
                    Ubicación
                  </h3>
                  <p className="mt-1 text-sm text-[#6B6B6B]">
                    {siteContact.location}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#007F5F]">
                  <Clock3 size={19} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A]">
                    Horario de atención
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#6B6B6B]">
                    {siteContact.schedule[0]}
                    <br />
                    {siteContact.schedule[1]}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[#DDE5DE] pt-6">
              <p className="text-sm leading-relaxed text-[#6B6B6B]">
                ¿Prefieres explorar primero?
              </p>
              <Link
                href="/servicios"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#007F5F] transition hover:gap-3"
              >
                Conoce nuestros servicios
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
