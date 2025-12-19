import type { APIRoute } from "astro";
import sharp from "sharp";
import ico from "sharp-ico";
import path from "node:path";
import fs from "node:fs/promises";

// 1. Ajusta esta ruta al nombre real de tu archivo de logo
// Usualmente está en src/assets/images/ o en public/
const relativePath = "src/assets/images/logo.png"; 
const faviconSrc = path.resolve(relativePath);

export const GET: APIRoute = async () => {
  try {
    // Verificar si el archivo existe antes de procesarlo
    await fs.access(faviconSrc);

    // Redimensionar la imagen a los tamaños estándar de favicon
    const sizes = [16, 32, 48]; // Agregué 48px para mejor calidad

    const buffers = await Promise.all(
      sizes.map(async (size) => {
        return await sharp(faviconSrc)
          .resize(size)
          .toFormat("png")
          .toBuffer();
      })
    );

    // Convertir los buffers PNG a un archivo ICO
    const icoBuffer = ico.encode(buffers);

    return new Response(new Uint8Array(icoBuffer), {
      headers: {
        "Content-Type": "image/x-icon",
        // Cachear el favicon por un tiempo largo (1 semana) para rendimiento
        "Cache-Control": "public, max-age=604800, immutable",
      },
    });
  } catch (error) {
    console.error(`Error generando favicon desde: ${faviconSrc}`, error);
    return new Response("Icon source not found", { status: 404 });
  }
};