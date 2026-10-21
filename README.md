# Cocinas y Triplex Caquetá

Sitio web para mostrar los servicios, productos e inspiración de proyectos de
Cocinas y Triplex Caquetá, y facilitar el contacto con sus clientes.

## Requisitos

- Node.js 20.9 o superior.
- pnpm 12.8.1, según la versión declarada en `package.json`.

## Empezar en tu computador

1. Clona el repositorio y entra a la carpeta del proyecto:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <CARPETA_DEL_PROYECTO>
   ```

2. Instala las dependencias:

   ```bash
   pnpm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   pnpm dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en el navegador. Los cambios en el código se reflejan mientras trabajas.

Para detener el servidor, vuelve a la terminal y presiona `Ctrl + C`.

## Páginas del sitio

| Dirección | Contenido |
| --- | --- |
| `/` | Inicio, presentación, servicios destacados y productos destacados |
| `/servicios` | Servicios disponibles y acceso a cotización |
| `/productos` | Catálogo de productos |
| `/proyectos` | Referencias visuales para inspirar proyectos |
| `/contacto` | Teléfono, correo, ubicación y horario de atención |

## Estructura del proyecto

```text
app/
├── config/       # Enlaces y datos generales del sitio
├── contacto/     # Página de contacto
├── mocks/        # Datos de ejemplo para productos y servicios
├── productos/    # Página del catálogo
├── proyectos/    # Página de inspiración
├── servicios/    # Página de servicios
├── types/        # Tipos de TypeScript
├── ui/           # Componentes visuales reutilizables
├── globals.css   # Estilos globales
├── layout.tsx    # Layout raíz, navegación y pie de página
└── page.tsx      # Página de inicio
public/           # Imágenes y otros archivos estáticos
```

Las rutas se crean con el sistema App Router de Next.js. Por ejemplo,
`app/servicios/page.tsx` corresponde a `/servicios`. Los componentes se renderizan en el servidor por defecto; `"use client"` se reserva para las partes que necesitan estado o interacción en el navegador.

## Editar el contenido

- **Datos de contacto y navegación:** `app/config/site.ts`.
- **Productos de muestra:** `app/mocks/products.mock.ts`.
- **Servicios de muestra:** `app/mocks/services.mock.ts`.
- **Imágenes:** guarda los archivos en `public/` y referencia, por ejemplo,
  una imagen como `public/cocina.png` usando `/cocina.png`.
- **Estilos globales:** `app/globals.css`. El diseño usa Tailwind CSS 4.

Para añadir una página, crea una carpeta dentro de `app/` y agrega un
`page.tsx`. Por ejemplo, `app/nosotros/page.tsx` crea la ruta `/nosotros`.
Puedes consultar las rutas existentes como referencia antes de añadir una
nueva.

## Tecnologías

- Next.js 16 y React 19
- TypeScript
- Tailwind CSS 4
- Lucide, Heroicons y React Icons

## Estado actual

Los productos y servicios se alimentan de datos de ejemplo definidos en `app/mocks/`. Algunas acciones de productos son todavía demostrativas; antes de usarlas como tienda se deben conectar a una fuente de datos y a la lógica real de compra. Las imágenes de la página de proyectos son referencias visuales, no un registro de trabajos realizados.
