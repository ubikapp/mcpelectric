export const SITE = {
  title: "MCP Electric",
  tagline: "Ingeniería y Automatización Industrial",
  description: "Líderes en automatización, montajes eléctricos y mantenimiento industrial en Magallanes. Soluciones técnicas avanzadas para el sector naval y pesquero.",
  description_short: "Ingeniería eléctrica experta, automatización y mantenimiento en Magallanes.",
  url: "https://mcpelectric.cl",
  author: "Molly Inc.",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-CL",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_CL",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Ingeniería Eléctrica & Automatización`,
  description: "Optimice sus operaciones con MCP Electric. Expertos en integración de sistemas, tableros eléctricos y mantenimiento de motores en la Patagonia.",
  // IMPORTANTE: Usamos una URL directa para evitar errores de compilación si falta el archivo local
  image: "https://mcpelectric.cl/social.png",
};

// DATA DE CLIENTES / PARTNERS
export const partnersData = [
    {
      icon: `<svg class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="10" y="40" font-family="Arial" font-size="24" fill="#4B5563" font-weight="bold">NAVIERA</text></svg>`,
      name: "Naviera Austral",
      href: "#",
    },
    {
      icon: `<svg class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="10" y="40" font-family="Arial" font-size="24" fill="#4B5563" font-weight="bold">FRIGORIFICO</text></svg>`,
      name: "Frigorífico Magallanes",
      href: "#",
    },
    {
       icon: `<svg class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="10" y="40" font-family="Arial" font-size="24" fill="#4B5563" font-weight="bold">IND. SUR</text></svg>`,
       name: "Industrial Sur",
       href: "#",
    },
];