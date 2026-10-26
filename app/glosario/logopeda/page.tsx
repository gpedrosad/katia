import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { Footer } from "@/app/_components/Footer";
import { Header } from "@/app/_components/Header";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { BUSINESS_HOURS, SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/glosario/logopeda";
const WHATSAPP_HREF = whatsappUrl(
  "Hola, quiero consultar por fonoaudiología infantil en Chillán",
);

const faqs = [
  {
    question: "¿Qué es un logopeda?",
    answer:
      "Es el nombre que se usa en España y en algunos otros países para la persona que en Chile se llama fonoaudiólogo o fonoaudióloga.",
  },
  {
    question: "¿Qué es la logopedia?",
    answer:
      "Es el nombre de la disciplina en España y en algunos otros países. En Chile esa disciplina se llama fonoaudiología.",
  },
  {
    question: "¿Logopeda y fonoaudiólogo es lo mismo?",
    answer:
      "Sí. Es la misma profesión. Cambia el nombre según el país, no el trabajo: comunicación, lenguaje, habla, voz y deglución.",
  },
  {
    question: "¿Logopedia y fonoaudiología son lo mismo?",
    answer:
      "Sí. Es la misma disciplina. Logopedia es el nombre en España y en algunos otros países; en Chile se llama fonoaudiología.",
  },
  {
    question: "¿Un logopeda atiende a niños y adultos?",
    answer:
      "Sí. La profesión atiende a niños y a adultos. En niños suele ser lenguaje, habla y pronunciación. En adultos, una consulta frecuente es la voz. En este sitio, la fonoaudiología infantil es presencial en Chillán. La terapia de voz para adultos es online, por videollamada, y no depende de la ciudad.",
  },
  {
    question: "¿En Chile se dice logopeda o fonoaudiólogo?",
    answer:
      "En Chile se dice fonoaudiólogo o fonoaudióloga. El término logopeda casi no se usa.",
  },
  {
    question: "¿Qué hace un logopeda infantil?",
    answer:
      "Evalúa y trata dificultades de comunicación, lenguaje, habla, pronunciación, lectoescritura y voz en niños. En la práctica infantil entran, entre otros, el retraso del lenguaje, el TEL, la dislalia y la tartamudez.",
  },
  {
    question: "¿Cómo busco un logopeda si estoy en Chile?",
    answer:
      "Busca fonoaudiólogo infantil o fonoaudióloga. En Chillán la hora presencial se pide por WhatsApp.",
  },
];

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Logopeda y logopedia: qué son en Chile",
  description:
    "Logopeda y logopedia nombran, en España y otros países, al fonoaudiólogo y a la fonoaudiología de Chile. Qué hace un logopeda infantil y cómo buscarlo.",
  keywords: [
    "logopeda",
    "logopedia",
    "logopeda infantil",
    "qué es un logopeda",
    "diferencia logopeda fonoaudiólogo",
  ],
  ogType: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "¿Qué es un logopeda?",
  description:
    "Logopeda y logopedia nombran, en España y otros países, al fonoaudiólogo y a la fonoaudiología de Chile.",
  datePublished: "2026-10-09",
  dateModified: "2026-10-26",
  inLanguage: "es-CL",
  author: {
    "@type": "Person",
    name: "Katia Domínguez",
    jobTitle: "Fonoaudióloga",
  },
  publisher: {
    "@type": "Organization",
    name: "Katia Domínguez - Fonoaudióloga",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_PATH}`,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const guides = [
  {
    href: "/fonoaudiologa-ninos-chillan",
    title: "Fonoaudióloga infantil en Chillán",
    note: "La página de la atención presencial.",
  },
  {
    href: "/voz-online/fonoaudiologa-de-voz-online",
    title: "Terapia de voz online para adultos",
    note: "La misma profesión, cuando el tema es la voz y la persona es adulta. No depende de la ciudad.",
  },
  {
    href: "/lenguaje-infantil",
    title: "Lenguaje infantil: guías para padres",
    note: "18 meses, entiende y no habla, habla como bebé, palabras sin frases.",
  },
  {
    href: "/dislalia",
    title: "Dislalia: guías para padres",
    note: "Pronunciación: la S, sonidos que cambian, se entiende solo en casa.",
  },
  {
    href: "/tartamudez",
    title: "Tartamudez infantil: guías para padres",
    note: "Repeticiones, qué hacer cuando se traba, el silencio en el jardín.",
  },
  {
    href: "/agendar-hora-fonoaudiologo-infantil-chillan",
    title: "Agendar hora",
    note: "Cómo pedir la evaluación presencial en Chillán.",
  },
  {
    href: "/preguntas/que-hace-un-fonoaudiologo-infantil",
    title: "¿Qué hace un fonoaudiólogo infantil?",
    note: "La misma profesión, con el nombre que se usa en Chile.",
  },
];

export default function LogopedaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <article className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Glosario", href: "/glosario" },
                { label: "Logopeda" },
              ]}
            />

            <header className="mb-8">
              <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                Terminología
              </span>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                ¿Qué es un logopeda?
              </h1>
              <p className="text-xl text-gray-600">
                Logopeda es la persona y logopedia, la disciplina. En España y
                en algunos otros países así se llama al fonoaudiólogo y a la
                fonoaudiología de Chile. Un logopeda infantil evalúa lenguaje,
                habla y voz en niños. Si buscas en Chile, pregunta por
                fonoaudiólogo o fonoaudióloga.
              </p>
            </header>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <h2 className="text-2xl font-bold text-gray-900">
                Logopeda y logopedia
              </h2>
              <p>
                <strong>Logopeda</strong> es la persona. <strong>Logopedia</strong>{" "}
                es la disciplina. En España y en algunos otros países se usan
                esas dos palabras para lo que en Chile, Argentina y gran parte
                de Latinoamérica se llama fonoaudiólogo (o fonoaudióloga) y
                fonoaudiología. En inglés, el nombre habitual es
                speech-language pathologist.
              </p>
              <p>
                Es la misma profesión. El trabajo es la comunicación, el
                lenguaje, el habla, la voz y la deglución. Cambia el nombre
                según el país.
              </p>

              <h2 className="text-2xl font-bold text-gray-900">
                Qué hace un logopeda infantil
              </h2>
              <p>
                Un logopeda infantil —en Chile, un fonoaudiólogo infantil—
                evalúa y trata dificultades de comunicación, lenguaje, habla,
                pronunciación, lectoescritura y voz en niños. En la consulta
                eso se ve, entre otros temas, como retraso del lenguaje, TEL,
                dislalia o tartamudez.
              </p>
              <p>
                No es un consejo distinto por venir de una página que dice
                «logopedia». Si lees en internet sobre logopedia infantil, habla
                de esta misma profesión.
              </p>

              <h2 className="text-2xl font-bold text-gray-900">
                Cómo encontrar el equivalente en Chile
              </h2>
              <p>
                Si estás en Chile, busca «fonoaudiólogo infantil» o
                «fonoaudióloga». «Logopeda» casi no se usa en el país, y por
                eso una búsqueda con esa palabra suele caer en páginas de
                España o en la portada de un sitio chileno que no explica el
                nombre.
              </p>
              <p>
                En Chillán, la fonoaudiología infantil de Katia Domínguez es
                presencial, {BUSINESS_HOURS.daysLabel}, de {BUSINESS_HOURS.opens}{" "}
                a {BUSINESS_HOURS.closes}. La hora se pide por WhatsApp. La
                página de la atención es{" "}
                <Link
                  href="/fonoaudiologa-ninos-chillan"
                  className="font-semibold text-rose-700 underline"
                >
                  fonoaudióloga infantil en Chillán
                </Link>{" "}
                y el paso para pedir hora está en{" "}
                <Link
                  href="/agendar-hora-fonoaudiologo-infantil-chillan"
                  className="font-semibold text-rose-700 underline"
                >
                  agendar
                </Link>
                .
              </p>
              <p>
                Si quien necesita la hora es un adulto y el tema es la voz, no
                es esta consulta infantil. La atención de voz es online, por
                videollamada, y no depende de la ciudad:{" "}
                <Link
                  href="/voz-online/fonoaudiologa-de-voz-online"
                  className="font-semibold text-rose-700 underline"
                >
                  terapia de voz online
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-gray-900">
                Cuándo consultar
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Si buscas atención en Chile, pregunta por fonoaudiólogo
                  infantil o fonoaudióloga.
                </li>
                <li>
                  Si el jardín, el colegio o el pediatra te pidieron apoyo de
                  lenguaje o de habla.
                </li>
                <li>
                  Si tu hijo va atrás en el habla o en el lenguaje para lo que
                  ves en otros niños de su edad.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900">
                Preguntas frecuentes
              </h2>
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-rose-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                ¿Buscabas un logopeda infantil en Chile?
              </h2>
              <p className="mb-6 text-gray-600">
                En Chillán la hora se coordina por WhatsApp. Cuéntame la edad
                de tu hijo y qué te llama la atención.
              </p>
              <WhatsAppCTA href={WHATSAPP_HREF}>
                Escribir por WhatsApp
              </WhatsAppCTA>
            </div>

            <div className="mt-12">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                Para seguir
              </h2>
              <ul className="space-y-4">
                {guides.map((guide) => (
                  <li key={guide.href}>
                    <Link
                      href={guide.href}
                      className="font-semibold text-rose-700 underline"
                    >
                      {guide.title}
                    </Link>
                    <p className="text-sm text-gray-600">{guide.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
