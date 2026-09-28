## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Contenido de la guía

- Ramas generales: `src/content/docs/*.md`. Guías por tipo de empresa: `src/content/docs/casos/`.
- País de referencia: Venezuela (`src/content/docs/venezuela.md`). Los datos regulatorios venezolanos deben verificarse en fuentes oficiales antes de escribirlos.
- Después de modificar cualquier rama general, ejecuta el subagente `revisor-casos` (`.claude/agents/revisor-casos.md`) para verificar si el cambio aplica a las guías por tipo de empresa y actualizarlas.
- Al agregar una nueva guía en `casos/`, súmala al sidebar en `astro.config.mjs`, a la portada (`index.mdx`) y a la lista del agente `revisor-casos`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
