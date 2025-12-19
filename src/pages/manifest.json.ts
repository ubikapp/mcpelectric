import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const manifest = {
    short_name: "MCP Electric",
    name: "MCP Electric | Ingeniería y Automatización",
    description: "Servicios de ingeniería eléctrica, automatización y mantenimiento industrial en Magallanes.",
    display: "standalone",
    id: "/",
    start_url: "/",
    theme_color: "#dc2626",
    background_color: "#171717",
    lang: "es-CL",
  };

  return new Response(JSON.stringify(manifest));
};