import Link from "next/link";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/recursos/hitos-del-lenguaje-por-edad";
const WHATSAPP_HREF = whatsappUrl(
  "Hola, tengo dudas sobre los hitos del lenguaje de mi hijo y quiero evaluarlo"
);

const faqs = [
  {
    question: "¿Es normal que mi hijo de 2 años hable poco?",
    answer:
      "Algunos niños de 2 años hablan menos que otros y alcanzan a sus pares con el tiempo. Sin embargo, a esa edad suele esperarse un vocabulario de unas 50 palabras y frases de dos palabras. Si habla muy poco, no se entiende en casa o no combina palabras, conviene observar con atención y considerar una evaluación.",
  },
  {
    question: "¿Cuántas palabras debería decir a los 2 años?",
    answer:
      "Como referencia orientativa, muchos niños de 2 años dicen alrededor de 50 palabras o más y empiezan a juntar dos palabras, como «mamá agua» o «más pan». No se trata de un número exacto: importa también si comprende, se comunica con gestos y si progresa mes a mes.",
  },
  {
    question: "¿Cuándo preocuparse por el lenguaje?",
    answer:
      "Conviene preocuparse si hay varias señales juntas: no responde al nombre, no sigue instrucciones simples, habla muy poco para su edad, no se entiende casi nada o muestra frustración intensa al comunicarse. Una sola duda no siempre es alerta, pero varias señales persistentes merecen consulta.",
  },
  {
    question: "¿Cuándo conviene evaluar?",
    answer:
      "Si tu hijo no cumple varios hitos de su edad, si lleva semanas sin progreso o si la familia o el colegio tienen dificultad para entenderlo, una evaluación fonoaudiológica puede aclarar si hay retraso, trastorno del habla o del lenguaje, y qué hacer a continuación.",
  },
];

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Hitos del Lenguaje por Edad | Guía para Padres",
  description:
    "Qué esperar del lenguaje de un niño a los 12 meses, 2 años, 3 años, 4 años y 5 años. Guía práctica con señales de alerta.",
  keywords: [
    "hitos del lenguaje por edad",
    "desarrollo del lenguaje infantil",
    "qué debe decir un niño por edad",
    "lenguaje 2 años",
  ],
  ogType: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hitos del lenguaje por edad: qué esperar y cuándo consultar",
  description:
    "Guía práctica sobre el desarrollo del lenguaje infantil por edad, con señales de alerta y cuándo pedir evaluación fonoaudiológica.",
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
  datePublished: "2026-05-20",
  dateModified: "2026-05-20",
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

export default function HitosDelLenguajePorEdadPage() {
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
                { label: "Recursos", href: "/recursos" },
                { label: "Hitos del lenguaje por edad" },
              ]}
            />

            <header className="mb-8">
              <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                Desarrollo del lenguaje
              </span>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                Hitos del lenguaje por edad: qué esperar y cuándo consultar
              </h1>
              <p className="text-xl text-gray-600">
                Cada niño tiene su propio ritmo, pero existen hitos orientativos
                que ayudan a saber qué suele ocurrir en cada etapa y cuándo
                conviene pedir orientación en{" "}
                <strong>Chillán, Ñuble</strong>.
              </p>
            </header>

            <nav
              aria-label="Enlaces relacionados"
              className="mb-8 rounded-2xl border border-rose-200 bg-white p-5"
            >
              <p className="mb-3 text-sm font-semibold text-rose-800">
                ¿Tienes dudas sobre el lenguaje de tu hijo?
              </p>
              <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap">
                <li>
                  <Link
                    href="/sintomas/mi-hijo-no-habla-bien-chillan"
                    className="font-medium text-rose-600 underline"
                  >
                    Mi hijo no habla bien
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sintomas/hijo-habla-poco-edad-chillan"
                    className="font-medium text-rose-600 underline"
                  >
                    Habla poco para su edad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/evaluacion-del-lenguaje-infantil-chillan"
                    className="font-medium text-rose-600 underline"
                  >
                    Evaluación del lenguaje
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agendar-hora-fonoaudiologo-infantil-chillan"
                    className="font-medium text-rose-600 underline"
                  >
                    Agendar hora
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="prose prose-lg max-w-none">
              <p>
                Esta guía resume qué suele comprender y decir un niño en distintas
                edades. No reemplaza una evaluación profesional, pero puede ayudarte
                a observar con más claridad y decidir si es momento de consultar.
              </p>

              <h2>12 meses</h2>
              <p>
                <strong>Qué suele comprender:</strong> responde a su nombre, reconoce
                palabras frecuentes como «no», «adiós» o el nombre de personas
                cercanas, y entiende gestos simples como señalar o pedir con la mano.
              </p>
              <p>
                <strong>Qué suele decir:</strong> balbucea con entonación, imita
                sonidos y puede decir una o pocas palabras con significado, como
                «mamá», «papá» o «agua».
              </p>
              <p>
                <strong>Ejemplos concretos:</strong> señala lo que quiere, imita
                sonidos de animales, responde cuando le hablan y usa gestos para
                pedir o saludar.
              </p>
              <p>
                <strong>Señal de alerta principal:</strong> no responde al nombre de
                forma consistente o no muestra intención comunicativa clara (gestos,
                balbuceo, contacto visual).
              </p>

              <h2>18 meses</h2>
              <p>
                <strong>Qué suele comprender:</strong> sigue instrucciones simples
                como «dame la pelota» o «ven acá», identifica objetos comunes y
                partes del cuerpo cuando se le pide.
              </p>
              <p>
                <strong>Qué suele decir:</strong> entre 10 y 20 palabras o más, con
                vocabulario en crecimiento. Empieza a pedir cosas con palabras, no
                solo con gestos.
              </p>
              <p>
                <strong>Ejemplos concretos:</strong> dice «más», «no», nombra
                objetos cotidianos («pelota», «leche») y combina gesto con palabra.
              </p>
              <p>
                <strong>Señal de alerta principal:</strong> no dice palabras con
                significado o no progresa en vocabulario durante varios meses.
              </p>

              <h2>2 años</h2>
              <p>
                <strong>Qué suele comprender:</strong> entiende preguntas simples,
                sigue instrucciones de dos pasos y reconoce acciones en imágenes o
                historias cortas.
              </p>
              <p>
                <strong>Qué suele decir:</strong> alrededor de 50 palabras o más y
                frases de dos palabras, como «mamá agua», «más galleta» o «papá
                fuera».
              </p>
              <p>
                <strong>Ejemplos concretos:</strong> pide cosas con palabras,
                nombra personas y objetos del entorno, imita frases cortas del adulto.
              </p>
              <p>
                <strong>Señal de alerta principal:</strong> no combina palabras, tiene
                un vocabulario muy limitado o la familia lo entiende poco.
              </p>

              <h2>3 años</h2>
              <p>
                <strong>Qué suele comprender:</strong> responde preguntas de «qué»,
                «dónde» y «quién», sigue instrucciones más largas y entiende
                conceptos como «grande/pequeño» o «arriba/abajo».
              </p>
              <p>
                <strong>Qué suele decir:</strong> oraciones de 3 a 4 palabras,
                vocabulario amplio y mayor claridad al hablar. Extraños suelen
                entenderlo al menos en gran parte.
              </p>
              <p>
                <strong>Ejemplos concretos:</strong> «Quiero más jugo», «Mamá, mira
                el perro», cuenta experiencias simples del día.
              </p>
              <p>
                <strong>Señal de alerta principal:</strong> habla en frases muy
                cortas o telegráficas, se entiende poco fuera de casa o no responde
                preguntas simples.
              </p>

              <h2>4 años</h2>
              <p>
                <strong>Qué suele comprender:</strong> entiende historias cortas,
                sigue instrucciones de varios pasos y comprende opuestos, colores y
                conceptos básicos de cantidad.
              </p>
              <p>
                <strong>Qué suele decir:</strong> oraciones más completas y
                gramaticalmente organizadas, relatos simples y preguntas frecuentes.
                La mayoría de sonidos del habla empiezan a estar presentes.
              </p>
              <p>
                <strong>Ejemplos concretos:</strong> «Fui al parque con papá y vi un
                perro grande», explica qué quiere y por qué, conversa con adultos y
                pares.
              </p>
              <p>
                <strong>Señal de alerta principal:</strong> no forma oraciones
                completas, tiene errores de pronunciación que dificultan mucho la
                comprensión o muestra dificultad persistente para expresarse.
              </p>

              <h2>5 años</h2>
              <p>
                <strong>Qué suele comprender:</strong> comprende relatos, instrucciones
                complejas y explicaciones del entorno escolar. Entiende humor simple y
                doble sentido básico.
              </p>
              <p>
                <strong>Qué suele decir:</strong> habla fluida, cuenta historias con
                secuencia (inicio, medio, final) y usa vocabulario variado. Debería
                ser entendido por la mayoría de las personas.
              </p>
              <p>
                <strong>Ejemplos concretos:</strong> explica qué pasó en el colegio,
                hace preguntas elaboradas, participa en conversaciones grupales.
              </p>
              <p>
                <strong>Señal de alerta principal:</strong> dificultad para contar
                experiencias, errores de pronunciación persistentes o problemas para
                seguir el ritmo del lenguaje en el aula.
              </p>

              <h2>Señales de alerta que no conviene esperar</h2>
              <ul>
                <li>No responde al nombre de forma consistente</li>
                <li>No sigue instrucciones simples para su edad</li>
                <li>Habla muy poco o no progresa en vocabulario</li>
                <li>No se entiende casi nada al hablar</li>
                <li>Frustración intensa al intentar comunicarse</li>
                <li>Pérdida de palabras o habilidades que ya tenía</li>
                <li>Evita interactuar o jugar de forma comunicativa</li>
              </ul>

              <h2>Qué hacer si tu hijo no cumple algunos hitos</h2>
              <ol>
                <li>
                  <strong>Observar:</strong> anota durante una o dos semanas qué
                  comprende, qué dice y en qué situaciones se comunica mejor.
                </li>
                <li>
                  <strong>Registrar ejemplos:</strong> guarda frases, gestos o
                  momentos en que le cuesta expresarse. Esto ayuda mucho en una
                  evaluación.
                </li>
                <li>
                  <strong>Pedir evaluación si hay varias señales:</strong> una
                  consulta fonoaudiológica no significa que «algo esté mal»; aclara
                  si hay retraso, trastorno o solo un ritmo distinto, y qué apoyo
                  conviene.
                </li>
              </ol>

              <h2>Preguntas frecuentes</h2>
            </div>

            <div className="not-prose space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                    <span>{faq.question}</span>
                    <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-rose-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                ¿Quieres saber si el lenguaje de tu hijo va en la línea esperada?
              </h2>
              <p className="mb-6 text-gray-600">
                Una evaluación puede darte claridad y un plan concreto de apoyo.
              </p>
              <WhatsAppCTA href={WHATSAPP_HREF}>
                Quiero evaluar el lenguaje de mi hijo
              </WhatsAppCTA>
            </div>

            <div className="mt-8 text-center text-sm">
              <Link href="/recursos" className="font-medium text-rose-600 underline">
                ← Volver a recursos para padres
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
