export interface Topic {
  slug: string;
  order: number;
  icon: string;
  title: string;
  subtitle: string;
  color: string;
}

export const topics: Topic[] = [
  {
    slug: "finanzas",
    order: 1,
    icon: "📊",
    title: "Finanzas y Contabilidad",
    subtitle: "Leer números, decidir con datos, no quedarse sin caja.",
    color: "#2563eb",
  },
  {
    slug: "estrategia",
    order: 2,
    icon: "🧭",
    title: "Estrategia y Modelo de Negocio",
    subtitle: "Por qué existe la empresa y cómo gana dinero de forma defendible.",
    color: "#7c3aed",
  },
  {
    slug: "ventas-marketing",
    order: 3,
    icon: "📣",
    title: "Ventas y Marketing",
    subtitle: "Conseguir clientes, quedárselos, y saber cuánto cuesta cada uno.",
    color: "#db2777",
  },
  {
    slug: "operaciones",
    order: 4,
    icon: "⚙️",
    title: "Operaciones",
    subtitle: "Entregar lo prometido, de forma consistente y escalable.",
    color: "#059669",
  },
  {
    slug: "personas-liderazgo",
    order: 5,
    icon: "🧑‍🤝‍🧑",
    title: "Personas y Liderazgo",
    subtitle: "Contratar bien, retener mejor, liderar sin ser cuello de botella.",
    color: "#d97706",
  },
  {
    slug: "legal",
    order: 6,
    icon: "⚖️",
    title: "Legal y Cumplimiento",
    subtitle: "No firmar lo que no entiendes; proteger lo que construyes.",
    color: "#475569",
  },
  {
    slug: "tecnologia",
    order: 7,
    icon: "💻",
    title: "Tecnología",
    subtitle: "Hacer las preguntas correctas, aunque no programes tú.",
    color: "#0891b2",
  },
  {
    slug: "habilidades-blandas",
    order: 8,
    icon: "🧠",
    title: "Habilidades Blandas y Pensamiento Sistémico",
    subtitle: "Negociar, comunicar y conectar todas las piezas del negocio.",
    color: "#e11d48",
  },
];
