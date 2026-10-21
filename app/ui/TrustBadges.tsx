import { Shield, Package, Wrench, Phone } from "lucide-react";

const items = [
  { icon: Shield, label: "Garantía de calidad", desc: "2 años en herrajes" },
  { icon: Package, label: "Envío rápido", desc: "24–48 horas en Medellín" },
  { icon: Wrench, label: "Instalación incluida", desc: "En servicios mayores" },
  { icon: Phone, label: "Asesoría gratuita", desc: "Lun–Sáb 8am–6pm" },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-[#F5F5F5] border-t border-[#D9D9D9]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20">

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.label} className="flex items-start gap-4">

              {/* Icono */}
              <div className="w-12 h-12 rounded-xl bg-[#007F5F]/10 flex items-center justify-center shrink-0">
                <item.icon size={22} className="text-[#007F5F]" />
              </div>

              {/* Texto */}
              <div>
                <p className="font-semibold text-[#1A1A1A] text-sm">
                  {item.label}
                </p>
                <p className="text-[#6B6B6B] text-xs mt-0.5">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
