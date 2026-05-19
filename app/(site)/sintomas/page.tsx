import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";

const PAGE_PATH = "/sintomas";

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Síntomas frecuentes en niños | Fonoaudiología Chillán",
  description:
    "Guías por síntoma: hijo que habla poco, pronuncia mal, no arma frases, tartamudez y más. Orientación y cuándo agendar evaluación en Chillán.",
});

const sintomas = [
  {
    href: "/sintomas/mi-hijo-no-habla-bien-chillan",
    title: "Mi hijo no habla bien",
    description: "Señales de alerta y cuándo pedir evaluación fonoaudiológica.",
  },
  {
    href: "/sintomas/nino-pronuncia-mal-chillan",
    title: "Niño pronuncia mal",
    description: "Errores de articulación, dislalia y trastorno fonológico.",
  },
  {
    href: "/sintomas/hijo-habla-poco-edad-chillan",
    title: "Hijo habla poco para su edad",
    description: "Hitos del lenguaje y retraso del lenguaje en la infancia.",
  },
  {
    href: "/sintomas/hijo-no-arma-frases-chillan",
    title: "Hijo no arma frases",
    description: "Morfosintaxis, TEL y estimulación del lenguaje.",
  },
  {
    href: "/sintomas/nino-no-entiende-instrucciones-chillan",
    title: "Niño no entiende instrucciones",
    description: "Comprensión del lenguaje y dificultades auditivas vs lenguaje.",
  },
  {
    href: "/sintomas/nino-tartamudea-chillan",
    title: "Niño tartamudea",
    description: "Fluidez del habla, disfemia e intervención temprana.",
  },
];

export default function SintomasHubPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Síntomas" },
        ]}
      />
      <header className="mb-10 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          Síntomas frecuentes en niños
        </h1>
        <p className="text-lg text-gray-600">
          Si reconoces alguna de estas señales en tu hijo, estas guías te
          orientan sobre causas posibles y el momento de consultar en Chillán.
        </p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {sintomas.map((item) => (
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
                Ver guía →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
