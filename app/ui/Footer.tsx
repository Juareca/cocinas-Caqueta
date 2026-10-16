export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20 py-10">

        {/* Grid principal */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Marca */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">
              Cocinas y Triplex Caquetá
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Fabricación, diseño e instalación de cocinas, muebles y proyectos en madera.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-semibold mb-2">Navegación</h4>
            <ul className="flex flex-col gap-1 text-sm text-white/80">
              <li><a href="/servicios" className="hover:text-white">Servicios</a></li>
              <li><a href="/productos" className="hover:text-white">Productos</a></li>
              <li><a href="/proyectos" className="hover:text-white">Proyectos</a></li>
              <li><a href="/contacto" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-2">Contacto</h4>
            <ul className="flex flex-col gap-1 text-sm text-white/80">
              <li>📍 Santa Marta, Colombia</li>
              <li>
                📞 <a href="tel:+576041234567" className="hover:text-white">
                  +57 604 123 4567
                </a>
              </li>
              <li>
                ✉️ <a href="mailto:info@cocinascaqueta.com" className="hover:text-white">
                  info@cocinascaqueta.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="font-semibold mb-2">Horario</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Lunes a Sábado<br />
              8:00 AM – 6:00 PM
            </p>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-white/10 mt-8 pt-4 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Cocinas y Triplex Caquetá. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}
