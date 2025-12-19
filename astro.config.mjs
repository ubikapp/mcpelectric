import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://mcpelectric.cl",
  image: {
    domains: ["images.unsplash.com"],
  },
  
  prefetch: true,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es", // Español como idioma principal
        locales: {
          es: "es",
          en: "en", // Mantenemos inglés opcional por si decides traducir
        },
      },
    }),
    starlight({
      title: "Documentación MCP",
      defaultLocale: "root", // Define la raíz como el idioma por defecto configurado abajo
      locales: {
        root: {
          label: "Español",
          lang: "es",
        },
        en: { 
          label: "English", 
          lang: "en" 
        },
      },
      // Barra lateral adaptada a Ingeniería Eléctrica
      sidebar: [
        {
          label: "Protocolos de Seguridad",
          translations: {
            en: "Safety Protocols",
          },
          autogenerate: { directory: "guides" },
        },
        {
          label: "Manuales de Equipos",
          items: [
            { label: "Instrumentación", link: "tools/tool-guides/" },
            { label: "Mantenimiento", link: "tools/equipment-care/" },
          ],
        },
        {
          label: "Servicios Técnicos",
          autogenerate: { directory: "construction" },
        },
        {
          label: "Normativa SEC",
          autogenerate: { directory: "advanced" },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/", // Puedes poner tu repo o eliminar esto si es privado
        },
        {
          icon: "email",
          label: "Contacto",
          href: "mailto:contacto@mcpelectric.cl",
        },
      ],
      disable404Route: true,
      customCss: ["./src/assets/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
        MobileMenuFooter:
          "./src/components/ui/starlight/MobileMenuFooter.astro",
        ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://mcpelectric.cl" + "/social.webp",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://mcpelectric.cl" + "/social.webp",
          },
        },
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    mdx(),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});