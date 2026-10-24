import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";

const PAGE_PATH = "/comparaciones";

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Diferencia entre trastornos | Habla y lenguaje",
  description:
    "Diferencia entre dislalia y trastorno fonológico, TEL y retraso del lenguaje, y retraso del habla y del lenguaje. Chillán.",
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
  {
    href: "/comparaciones/dislexia-vs-dislalia",
    title: "Dislexia vs dislalia",
    description:
      "El habla y la lectoescritura no son el mismo cuadro. Tabla, señales por edad y cuándo evaluar.",
  },
  {
    href: "/comparaciones/dislalia-vs-disartria",
    title: "Dislalia vs disartria",
    description:
      "Un sonido cambiado no es lo mismo que un habla imprecisa, lenta o con poco volumen. Cuándo evaluar.",
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
      <p className="mt-8 text-gray-700">
        Si la duda es de pronunciación en la casa, sigue en{" "}
        <Link href="/dislalia" className="font-medium text-rose-700 underline">
          las guías de dislalia
        </Link>
        . Si es de frases y palabras, en{" "}
        <Link href="/lenguaje-infantil" className="font-medium text-rose-700 underline">
          lenguaje infantil
        </Link>
        . Las definiciones están en{" "}
        <Link href="/glosario/trastorno-fonologico" className="font-medium text-rose-700 underline">
          qué es el trastorno fonológico
        </Link>
        ,{" "}
        <Link href="/glosario/retraso-del-lenguaje" className="font-medium text-rose-700 underline">
          qué es el retraso del lenguaje
        </Link>{" "}
        y{" "}
        <Link href="/glosario/tdl" className="font-medium text-rose-700 underline">
          qué es el TDL
        </Link>
        . Si la duda es leer o pronunciar, mira{" "}
        <Link href="/comparaciones/dislexia-vs-dislalia" className="font-medium text-rose-700 underline">
          dislexia y dislalia
        </Link>
        . Si el habla suena débil, lenta o arrastrada, mira{" "}
        <Link href="/comparaciones/dislalia-vs-disartria" className="font-medium text-rose-700 underline">
          dislalia y disartria
        </Link>
        . Las edades están en las{" "}
        <Link
          href="/recursos/senales-de-alerta-del-lenguaje-y-habla"
          className="font-medium text-rose-700 underline"
        >
          señales de alerta del lenguaje y el habla
        </Link>
        . Para escribir, usa el{" "}
        <Link href="/contacto-fonoaudiologa-chillan" className="font-medium text-rose-700 underline">
          contacto en Chillán
        </Link>
        .
      </p>
    </main>
  );
}
