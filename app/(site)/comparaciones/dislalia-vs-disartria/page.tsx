import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/comparaciones/dislalia-vs-disartria";
const TITLE = "Dislalia y disartria: diferencias y cómo saber cuál es";
const DESCRIPTION =
  "Dislalia y disartria no son lo mismo: sonidos sin causa neuromotora, o una alteración motora del habla de origen neurológico. Evaluación en Chillán.";

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "dislalia y disartria",
    "diferencia entre dislalia y disartria",
    "dislalia vs disartria",
    "qué es disartria infantil",
    "habla arrastrada niño",
    "disartria y dislalia",
  ],
  ogType: "article",
});

const faqs = [
  {
    question: "¿La disartria es lo mismo que la dislalia?",
    answer:
      "No. La dislalia se centra en sonidos: el niño omite, sustituye o distorsiona fonemas. La disartria tiene base neuromuscular y afecta la calidad global del habla. Pueden sonar parecidas para la familia. La evaluación las separa.",
  },
  {
    question: "¿Cómo suena la disartria?",
    answer:
      "El glosario la describe como un habla poco clara o arrastrada, con debilidad o movimientos limitados de boca y lengua, esfuerzo visible, volumen bajo o lentitud. No es un solo fonema cambiado y el resto de la palabra bien.",
  },
  {
    question: "¿Hay que ver a un médico además de la fonoaudióloga?",
    answer:
      "Sí, es recomendable. La disartria se acompaña de una evaluación médica para descartar o seguir causas neurológicas, junto con la intervención fonoaudiológica. La hora de habla no reemplaza esa mirada.",
  },
  {
    question: "¿Y si también le cuesta masticar o tragar?",
    answer:
      "El glosario lo anota como una señal que a veces va junto al habla. Se lo comentas al médico. En esta evaluación se mira la claridad del habla.",
  },
  {
    question: "¿Se puede mejorar con terapia?",
    answer:
      "El glosario dice que, en muchos casos, sí: con ejercicios de fuerza, coordinación, respiración y articulación adaptados al perfil. No hay un plazo único. El plan sale de la evaluación, no de esta tabla.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Diferencia entre dislalia y disartria",
  description: DESCRIPTION,
  inLanguage: "es-CL",
  datePublished: "2026-10-24",
  dateModified: "2026-10-31",
  author: {
    "@type": "Person",
    name: "Katia Domínguez",
    url: `${SITE_URL}/sobre-katia-dominguez-fonoaudiologa-chillan`,
  },
  publisher: {
    "@type": "Organization",
    name: "Katia Domínguez - Fonoaudióloga",
    url: SITE_URL,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_PATH}`,
  },
  url: `${SITE_URL}${PAGE_PATH}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Comparaciones",
      item: `${SITE_URL}/comparaciones`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Dislalia vs disartria",
      item: `${SITE_URL}${PAGE_PATH}`,
    },
  ],
};

const rows = [
  {
    aspect: "Qué es",
    dislalia:
      "Dificultad para pronunciar sonidos. El niño omite, sustituye o distorsiona fonemas.",
    disartria:
      "Dificultad para articular por el control neuromuscular de labios, lengua, mandíbula y paladar.",
  },
  {
    aspect: "Qué se afecta",
    dislalia: "Sonidos concretos. El resto del habla puede estar claro.",
    disartria:
      "La calidad global del habla: precisión, ritmo, volumen o esfuerzo.",
  },
  {
    aspect: "Cómo se oye",
    dislalia: "«Tasa» por casa, una ese que se cae, o una r distorsionada.",
    disartria:
      "Habla poco clara o arrastrada, lenta, con volumen bajo o con esfuerzo visible.",
  },
  {
    aspect: "Qué más puede verse",
    dislalia: "La familia ya traduce. Las personas nuevas no.",
    disartria:
      "Debilidad o poco movimiento de boca y lengua. A veces, dificultad para masticar o tragar: eso se lo dices al médico.",
  },
  {
    aspect: "Evaluación",
    dislalia:
      "Evaluación del habla: qué sonidos omite, sustituye o distorsiona.",
    disartria:
      "Evaluación fonoaudiológica y, además, evaluación médica. La hora de habla no reemplaza al médico.",
  },
];

export default function DislaliaVsDisartriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Comparaciones", href: "/comparaciones" },
                { label: "Dislalia vs disartria" },
              ]}
            />

            <article className="prose prose-rose lg:prose-lg max-w-none">
              <h1 className="text-4xl font-extrabold text-gray-900">
                Diferencia entre dislalia y disartria
              </h1>
              <p className="lead text-lg text-gray-700" data-speakable>
                Dislalia y disartria no son el mismo cuadro. La dislalia es
                articular mal los sonidos —omitirlos, sustituirlos o
                distorsionarlos— sin una causa neuromotora. La disartria es una
                alteración motora del habla de origen neurológico: puede sonar
                imprecisa, lenta, con poco volumen o con esfuerzo, y además se
                mira con un médico.
              </p>

              <h2>Tabla comparativa</h2>
              <div className="not-prose overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-rose-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-gray-900">
                        Aspecto
                      </th>
                      <th className="px-4 py-3 text-left font-bold text-rose-800">
                        Dislalia
                      </th>
                      <th className="px-4 py-3 text-left font-bold text-rose-800">
                        Disartria
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {rows.map((row) => (
                      <tr key={row.aspect}>
                        <td className="px-4 py-3 font-semibold text-gray-900">
                          {row.aspect}
                        </td>
                        <td className="px-4 py-3 text-gray-700">{row.dislalia}</td>
                        <td className="px-4 py-3 text-gray-700">{row.disartria}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>En palabras simples</h2>
              <ul>
                <li>
                  <strong>Dislalia:</strong> el problema está en uno o más
                  sonidos. La definición está en el{" "}
                  <Link href="/glosario/dislalia">glosario de dislalia</Link> y
                  las guías de casa, en el{" "}
                  <Link href="/dislalia">hub de dislalia</Link>.
                </li>
                <li>
                  <strong>Disartria:</strong> el problema está en la fuerza o la
                  coordinación de los músculos del habla. La definición está en{" "}
                  <Link href="/glosario/disartria">qué es la disartria</Link>.
                </li>
                <li>
                  Si la duda es leer y no pronunciar, no uses esta tabla. Esa
                  comparación es{" "}
                  <Link href="/comparaciones/dislexia-vs-dislalia">
                    dislexia vs dislalia
                  </Link>
                  .
                </li>
              </ul>

              <h2>No es la apraxia</h2>
              <p>
                Hay un tercer nombre que la familia confunde con estos dos. En
                la apraxia del habla los errores cambian de un intento a otro y
                suele imitar mejor de lo que habla solo. Eso tiene su
                tratamiento en{" "}
                <Link href="/tratamientos/apraxia-del-habla-infantil-chillan">
                  apraxia del habla en Chillán
                </Link>{" "}
                y su definición en el{" "}
                <Link href="/glosario/apraxia-del-habla">
                  glosario de apraxia
                </Link>
                . Esta página no la diagnostica.
              </p>

              <h2>Cuándo evaluar en Chillán</h2>
              <p>
                Pide hora de habla si después de los 4 o 5 años siguen errores
                de pronunciación, si a los 4 no se le entiende, o si el habla
                suena débil, lenta o con esfuerzo y no es un solo sonido. Si
                empeoró después de una enfermedad o hay un diagnóstico que
                afecte los músculos de la boca, lleva también esa información
                al médico. La fonoaudióloga mira la claridad del habla.
              </p>
              <p>
                El tratamiento de la dislalia en la ciudad está en{" "}
                <Link href="/tratamientos/dislalia-infantil-chillan">
                  dislalia infantil en Chillán
                </Link>
                . Si cambia varios sonidos a la vez, mira la{" "}
                <Link href="/comparaciones/dislalia-vs-trastorno-fonologico">
                  diferencia entre dislalia y trastorno fonológico
                </Link>
                . Si no se le entiende o le faltan palabras, mira{" "}
                <Link href="/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje">
                  retraso del habla o del lenguaje
                </Link>
                . Si te hablaron de TEL o de un retraso del lenguaje, mira{" "}
                <Link href="/comparaciones/tel-vs-retraso-del-lenguaje">
                  TEL o retraso del lenguaje
                </Link>
                . La hora de habla es la{" "}
                <Link href="/servicios/evaluacion-del-habla-infantil-chillan">
                  evaluación del habla infantil
                </Link>
                , y el servicio general está en{" "}
                <Link href="/servicios/trastornos-del-habla">
                  trastornos del habla
                </Link>
                .
              </p>

              <div className="not-prose my-8">
                <WhatsAppCTA
                  href={whatsappUrl(
                    "Hola, no sé si lo de mi hijo es dislalia o disartria y quiero evaluar el habla en Chillán",
                  )}
                >
                  Consultar por el habla
                </WhatsAppCTA>
              </div>

              <GeoFAQ
                items={faqs}
                heading="Preguntas frecuentes"
                className="not-prose my-10 rounded-2xl border border-rose-100 bg-white p-6"
              />
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
