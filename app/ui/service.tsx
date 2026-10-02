import Card from "./card";

export default function Servicios() {
  return (
    <section className="w-full py-10 bg-[#F7F3ED] text-[#4A3F35]">
      <div className="mx-auto px-4">

        <p className="text-md md:text-lg text-green-700 leading-relaxed mb-4 text-center">
          ¿Qué hacemos?
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Servicios destacados
        </h2>

        <p className="text-md md:text-lg text-[#4A3F35]/80 leading-relaxed mb-12 text-center">
          De la idea al resultado final. Acompañamos cada etapa de tu proyecto con experiencia y calidad.
        </p>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 bg-red-500">

          {/* Tarjeta 1 */}
          <Card
            img="ferreteria.png"
            title="Diseño de Cocinas"
            description="Creamos diseños personalizados que se adaptan a tus necesidades y estilo de vida, optimizando cada espacio."
          />

          {/* Tarjeta 2 */}
          <Card
            img="ferreteria.png"
            title="Madera y Triplex"
            description="Materiales de alta calidad para tus proyectos residenciales y comerciales."
          />

          {/* Tarjeta 3 */}
          <Card
            img="ferreteria.png"
            title="Proyectos Personalizados"
            description="Soluciones únicas adaptadas a tus necesidades, desde muebles hasta espacios completos."
          />
          {/* Tarjeta 4 */}
          <Card
            img="ferreteria.png"
            title="Servicio Técnico"
            description="Asistencia técnica especializada para el mantenimiento y reparación de tus proyectos."
          />

        </div>
      </div>
    </section>
  );
}
