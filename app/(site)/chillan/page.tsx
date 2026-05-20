import Link from "next/link";
import { PATOLOGIAS } from "@/app/chillan/[slug]/patologias";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";

const PAGE_PATH = "/chillan";

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Patologías del lenguaje y habla en Chillán",
  description:
    "Tratamiento fonoaudiológico en Chillán por patología: dislalia, TEL, retraso del lenguaje, dislexia, tartamudez, TEA y más. Evaluación y terapia presencial.",
});

export default function ChillanPatologiasHubPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Patologías en Chillán" },
        ]}
      />
      <header className="mb-10 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          Tratamiento por patología en Chillán
        </h1>
        <p className="text-lg text-gray-600">
          Cada página explica señales, evaluación y terapia para una condición
          concreta. Atención presencial con más de 20 años de experiencia.
        </p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {PATOLOGIAS.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/chillan/${p.slug}`}
              className="block rounded-2xl border border-rose-100 bg-white p-6 shadow-sm transition hover:border-rose-300 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {p.titulo}
              </h2>
              <p className="mt-2 text-sm text-gray-600">{p.subtitulo}</p>
              <span className="mt-4 inline-block text-sm font-medium text-rose-600">
                Ver tratamiento →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <section className="mt-12 rounded-2xl border border-rose-100 bg-rose-50 p-6 text-center">
        <p className="mb-4 text-gray-700">
          Atención presencial en Chillán, Ñuble. Primera cita: evaluación
          fonoaudiológica.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/fonoaudiologa-ninos-chillan"
            className="font-semibold text-rose-700 underline"
          >
            Fonoaudióloga infantil
          </Link>
          <Link
            href="/agendar-hora-fonoaudiologo-infantil-chillan"
            className="font-semibold text-rose-700 underline"
          >
            Agendar hora
          </Link>
          <Link href="/glosario" className="font-semibold text-rose-700 underline">
            Glosario (dislalia, TEL…)
          </Link>
        </div>
      </section>
    </main>
  );
}
