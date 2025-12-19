import type { APIRoute, ImageMetadata } from "astro";
import { getImage } from "astro:assets";
import icon from "@images/icon.png"; 
// Usaremos el mismo icono por defecto. Si tienes uno específico para 'maskable', cambia la importación.
import maskableIcon from "@images/icon.png"; 

interface Favicon {
  purpose: 'any' | 'maskable' | 'monochrome';
  src: ImageMetadata;
  sizes: number[];
}

const sizes = [192, 512];
const favicons: Favicon[] = [
  {
    purpose: 'any',
    src: icon,
    sizes,
  },
  {
    purpose: 'maskable',
    src: maskableIcon,
    sizes,
  },
];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    favicons.flatMap((favicon) =>
      favicon.sizes.map(async (size) => {
        const image = await getImage({
          src: favicon.src,
          width: size,
          height: size,
          format: "png",
        });
        return {
          src: image.src,
          sizes: `${image.options.width}x${image.options.height}`,
          type: `image/${image.options.format}`,
          purpose: favicon.purpose,
        };
      }),
    ),
  );

  const manifest = {
    short_name: "MCP Electric",
    name: "MCP Electric | Ingeniería y Automatización",
    description: "Servicios de ingeniería eléctrica, automatización y mantenimiento industrial en Magallanes.",
    icons,
    display: "standalone", // 'standalone' hace que parezca una app nativa sin barra de navegador
    id: "/",
    start_url: "/",
    theme_color: "#dc2626", // Rojo Corporativo
    background_color: "#171717", // Gris oscuro neutral
    lang: "es-CL",
  };

  return new Response(JSON.stringify(manifest));
};