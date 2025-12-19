// src/utils/navigation.ts

// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Tienda", url: "/products" },
  { name: "Servicios", url: "/servicios" },
  { name: "Proyectos", url: "/blog" },
  { name: "Contacto", url: "/contacto" },
];

// An array of links for footer
const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Documentación", url: "/welcome-to-docs/" },
      { name: "Productos y Herramientas", url: "/products" },
      { name: "Servicios Industriales", url: "/servicios" },
    ],
  },
  {
    section: "Compañía",
    links: [
      { name: "Nosotros", url: "#" },
      { name: "Proyectos", url: "/blog" },
      { name: "Empleo", url: "#" },
      { name: "Clientes", url: "#" },
    ],
  },
];

// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/p/MCP-Electric-100092288115172/",
  instagram: "https://www.instagram.com/mcp_electric/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};