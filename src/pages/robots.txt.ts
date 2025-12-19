import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: *
Allow: /

# Bloquear partes privadas o de administración si las tuvieras en el futuro
Disallow: /private/

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE ?? 'https://mcpelectric.cl').href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};