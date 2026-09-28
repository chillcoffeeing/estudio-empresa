# Guía del CEO

Guía práctica de conocimiento empresarial para fundadores y CEOs, construida con [Astro Starlight](https://starlight.astro.build).

## Estructura del contenido

```text
src/content/docs/
├── index.mdx                      # Portada
├── finanzas.md                    # Ramas generales
├── matematicas-empresariales.md
├── estrategia.md
├── ventas-marketing.md
├── operaciones.md
├── personas-liderazgo.md
├── legal.md
├── tecnologia.md
├── habilidades-blandas.md
├── venezuela.md                   # Marco fiscal, laboral y regulatorio de Venezuela
└── casos/                         # Guías por tipo de empresa
    ├── carpinteria.md
    ├── hacienda-cafe.md
    ├── helados-congelados.md
    └── productos-limpieza.md
```

- **Ramas generales:** el conocimiento aplicable a cualquier empresa.
- **Operar en Venezuela (`venezuela.md`):** el país de referencia de la guía. Impuestos, obligaciones laborales, permisos y cómo manejar una economía bimonetaria.
- **Guías por tipo de empresa (`casos/`):** resumen de lo que realmente importa de las ramas generales para un negocio concreto, con los puntos clave para escalar y una sección final "En Venezuela".

## Mantener las guías por tipo de empresa al día

Cuando se actualiza una rama general, hay que revisar si ese cambio aplica a alguna guía de `casos/`. Para eso existe el subagente de Claude Code **`revisor-casos`**, definido en [`.claude/agents/revisor-casos.md`](.claude/agents/revisor-casos.md).

### Qué hace

1. Revisa qué cambió en las ramas generales (con `git diff`, o con los archivos que le indiques).
2. Para cada guía de `casos/`, decide si el cambio **aplica** a ese negocio (cambia una decisión, un número clave, un riesgo o un paso para escalar) o **no aplica** (es genérico o ya está cubierto).
3. Si aplica, edita la guía en la sección correspondiente, adaptando el contenido con un ejemplo del rubro y enlazando a la rama general.
4. Compila el sitio para verificar que no haya errores.
5. Devuelve un resumen de qué cambió en cada guía y por qué.

### Cómo usarlo

En Claude Code, dentro de este proyecto:

```text
Usa el agente revisor-casos para revisar los cambios que hice en finanzas
```

o simplemente:

```text
/agents
```

para ver y editar el agente. El archivo [`CLAUDE.md`](CLAUDE.md) le indica a Claude que lo ejecute automáticamente después de modificar cualquier rama general.

### Agregar un nuevo tipo de empresa

1. Crea la página en `src/content/docs/casos/<nombre>.md` siguiendo la estructura de las existentes (lo que hace distinto al negocio, puntos críticos, números clave, lo esencial de cada rama, cómo escalar, errores comunes).
2. Agrégala al sidebar en [`astro.config.mjs`](astro.config.mjs), en el grupo "Guías por tipo de empresa".
3. Agrega su tarjeta en la portada ([`index.mdx`](src/content/docs/index.mdx)).
4. Agrégala a la lista de guías en [`.claude/agents/revisor-casos.md`](.claude/agents/revisor-casos.md).

## Comandos

| Comando             | Acción                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Instala las dependencias                         |
| `npm run dev`       | Levanta el servidor local en `localhost:4321`    |
| `npm run build`     | Genera el sitio de producción en `./dist/`       |
| `npm run preview`   | Previsualiza el build localmente                 |
