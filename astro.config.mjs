// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Guía del CEO',
      description: 'Guía práctica de conocimiento empresarial para fundadores y CEOs.',
      defaultLocale: 'es',
      locales: {
        root: { label: 'Español', lang: 'es' },
      },
      social: [],
      sidebar: [
        { label: 'Finanzas y Contabilidad', slug: 'finanzas' },
        { label: 'Estrategia y Modelo de Negocio', slug: 'estrategia' },
        { label: 'Ventas y Marketing', slug: 'ventas-marketing' },
        { label: 'Operaciones', slug: 'operaciones' },
        { label: 'Personas y Liderazgo', slug: 'personas-liderazgo' },
        { label: 'Legal y Cumplimiento', slug: 'legal' },
        { label: 'Tecnología', slug: 'tecnologia' },
        { label: 'Habilidades Blandas y Pensamiento Sistémico', slug: 'habilidades-blandas' },
      ],
    }),
  ],
});
