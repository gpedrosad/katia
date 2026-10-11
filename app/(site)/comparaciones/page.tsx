import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";

const PAGE_PATH = "/comparaciones";

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Diferencia entre... | Comparaciones Fonoaudiología Infantil Chillán",
  description:
    "Diferencia entre dislalia y trastorno fonológico, TEL vs retraso del lenguaje, retraso del habla vs lenguaje. Tabla comparativa, señales y cuándo consultar en Chillán.",
  keywords: [
    "diferencia entre dislalia trastorno fonológico",
    "TEL vs retraso del lenguaje",
    "retraso del habla vs retraso del lenguaje",
    "comparación fonoaudiología",
  ],
});

const comparaciones = [
  {
    href: "/comparaciones/dislalia-vs-trastorno-fonologico",
    title: "Dislalia vs trastorno fonológico",
    description:
      "Definición, tabla de diferencias y cuándo llevar al niño al fonoaudiólogo por problemas de pronunciación.",
  },
  {
    href: "/comparaciones/tel-vs-retraso-del-lenguaje",
    title: "TEL vs retraso del lenguaje",
    description:
      "Cómo distinguir el Trastorno Específico del Lenguaje de un retraso transitorio y qué hacer en cada caso.",
  },
  {
    href: "/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje",
    title: "Retraso del habla vs retraso del lenguaje",
    description:
      "Diferencias entre pronunciación y vocabulario/comprensión, señales en casa y cuándo evaluar en Chillán.",
  },
];

export default function ComparacionesHubPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Comparaciones" },
        ]}
      />
      <header className="mb-10 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          ¿Cuál es la diferencia entre...? Comparaciones fonoaudiológicas
        </h1>
        <p className="text-lg text-gray-600">
          Cuando dos condiciones suenan parecidas, estas guías te explican las diferencias con tablas claras, señales prácticas y cuándo conviene consultar en Chillán.
        </p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {comparaciones.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-2xl border border-rose-100 bg-white p-6 shadow-sm transition hover:border-rose-300 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-rose-600">
                Leer comparación →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
