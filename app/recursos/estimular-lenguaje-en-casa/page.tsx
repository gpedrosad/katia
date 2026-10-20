import Link from "next/link";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { WhatsAppCTA } from "../../_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/recursos/estimular-lenguaje-en-casa";
const WHATSAPP_HREF = whatsappUrl(
  "Hola, estoy haciendo terapia de lenguaje en casa pero sigo con dudas y quiero evaluar a mi hijo"
);

const faqs = [
  {
    question: "¿Cómo hacer terapia de lenguaje en casa?",
    answer:
      "La terapia de lenguaje en casa no es una clase: se integra en la rutina (comidas, baño, paseos y juego). Sigue la atención de tu hijo, habla más lento, modela sin corregir cada error y expande lo que dice (si dice «perro», puedes decir «perro grande»). Evita interrogar y exigir repetición constante. Si hay un trastorno, esto complementa la terapia fonoaudiológica; no la reemplaza.",
  },
  {
    question: "¿Cómo empezar la terapia de lenguaje en casa?",
    answer:
      "Empieza por momentos breves y frecuentes cara a cara: nombra lo que mira, ofrece opciones («¿leche o jugo?»), lee juntos y celebra cualquier intento. No hace falta una sesión larga forzada. Unos 15-20 minutos de interacción de calidad, varias veces al día, suelen ser más útiles. Si después de varias semanas no hay progreso, conviene evaluar.",
  },
  {
    question: "¿Se puede estimular el lenguaje sin ser especialista?",
    answer:
      "Sí. Los padres pueden hacer mucho en el día a día: hablar con el niño, seguir su interés, modelar palabras y frases, leer juntos y crear rutinas de juego comunicativo. No reemplaza la terapia cuando hay un trastorno, pero sí fortalece el desarrollo del lenguaje en casa.",
  },
  {
    question: "¿Cuánto tiempo al día conviene dedicar?",
    answer:
      "No hace falta una «clase» formal. Lo más efectivo son momentos breves y frecuentes integrados en la rutina: comidas, baño, paseos y juego. Unos 15-20 minutos de interacción cara a cara de calidad, varias veces al día, suelen ser más útiles que una sesión larga forzada.",
  },
  {
    question: "¿Las pantallas retrasan el lenguaje?",
    answer:
      "El exceso de pantallas puede limitar la interacción verbal cara a cara, que es clave para el lenguaje. Contenido pasivo no sustituye el juego, la conversación y la respuesta del adulto. Se recomienda limitar pantallas y priorizar actividades compartidas con habla y gestos.",
  },
  {
    question: "¿Cuándo conviene evaluar en vez de seguir esperando?",
    answer:
      "Si después de estimular en casa durante varias semanas no hay progreso, si hay señales de alerta (habla muy poco, no se entiende, frustración intensa) o si la familia sigue con dudas, conviene una evaluación fonoaudiológica antes de seguir esperando.",
  },
];

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Terapia de lenguaje en casa: cómo empezar con tu hijo",
  description:
    "Cómo empezar la terapia de lenguaje en casa: sigue su atención, modela, expande y no interrogues. Unos 15-20 minutos, varias veces al día.",
  keywords: [
    "cómo empezar la terapia de lenguaje en casa",
    "cómo hacer terapia de lenguaje en casa",
    "terapia de lenguaje en casa",
    "como hacer terapia de lenguaje en casa",
    "como dar terapia de lenguaje en casa",
    "estimular lenguaje en casa",
    "cómo ayudar a mi hijo a hablar",
    "actividades para estimular el lenguaje",
    "ejercicios de lenguaje para niños en casa",
  ],
  ogType: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Terapia de lenguaje en casa: cómo empezar con tu hijo",
  description:
    "Cómo empezar y cómo hacer terapia de lenguaje en casa, con pautas para la rutina de 1 a 5 años.",
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
  dateModified: "2026-10-20",
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

export default function EstimularLenguajeEnCasaPage() {
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
                { label: "Terapia de lenguaje en casa" },
              ]}
            />

            <header className="mb-8">
              <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800">
                Consejos prácticos
              </span>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                Terapia de lenguaje en casa: cómo empezar con tu hijo
              </h1>
              <div className="mb-6 rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6">
                <p className="text-lg font-semibold text-gray-900">
                  <strong>Respuesta rápida:</strong> Empieza con momentos
                  breves de la rutina, cara a cara. Sigue lo que tu hijo mira,
                  modela sin corregir cada error y expande lo que dice. No lo
                  interrogues ni le exijas que repita. Unos 15-20 minutos de
                  interacción de calidad, varias veces al día, suelen servir
                  más que una clase larga.
                </p>
              </div>
              <p className="text-xl text-gray-600">
                Ideas simples para acompañar el desarrollo del lenguaje en la
                rutina diaria, sin convertir cada momento en una «clase» en{" "}
                <strong>Chillán, Ñuble</strong>.
              </p>
            </header>

            <nav
              aria-label="Enlaces relacionados"
              className="mb-8 rounded-2xl border border-rose-200 bg-white p-5"
            >
              <p className="mb-3 text-sm font-semibold text-rose-800">
                Guías y servicios relacionados
              </p>
              <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap">
                <li>
                  <Link
                    href="/recursos/hitos-del-lenguaje-por-edad"
                    className="font-medium text-rose-600 underline"
                  >
                    Hitos del lenguaje por edad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/recursos/senales-de-alerta-del-lenguaje-y-habla"
                    className="font-medium text-rose-600 underline"
                  >
                    Señales de alerta
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sintomas/hijo-habla-poco-edad-chillan"
                    className="font-medium text-rose-600 underline"
                  >
                    Mi hijo de 2 años habla poco
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sintomas/hijo-no-arma-frases-chillan"
                    className="font-medium text-rose-600 underline"
                  >
                    Mi hijo de 2 años no forma frases
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
                    href="/servicios/terapia-lenguaje-infantil"
                    className="font-medium text-rose-600 underline"
                  >
                    Terapia de lenguaje infantil
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="prose prose-lg max-w-none">
              <p>
                La terapia de lenguaje en casa no significa presionar ni corregir
                constantemente. Significa crear oportunidades naturales para que tu
                hijo escuche, participe y se exprese en un ambiente tranquilo y
                cercano.
              </p>

              <h2>¿Cómo empezar la terapia de lenguaje en casa?</h2>
              <p>
                Empieza por momentos breves y frecuentes cara a cara: nombra lo
                que mira, ofrece opciones («¿leche o jugo?»), lee juntos y
                celebra cualquier intento. No hace falta una sesión larga
                forzada. Unos 15-20 minutos de interacción de calidad, varias
                veces al día, suelen ser más útiles. Si después de varias
                semanas no hay progreso, conviene evaluar.
              </p>
              <p>
                Elige esos momentos dentro de la rutina —comidas, baño, paseos
                y juego— en vez de armar una «clase».
              </p>

              <h2>¿Cómo hacer terapia de lenguaje en casa paso a paso?</h2>
              <p>Cómo dar terapia de lenguaje en casa, en la práctica:</p>
              <ul>
                <li>
                  <strong>Sigue su atención:</strong> comenta lo que mira o le
                  interesa, no solo lo que tú quieres enseñar.
                </li>
                <li>
                  <strong>Habla más lento:</strong> da tiempo para procesar y
                  responder, especialmente si habla poco.
                </li>
                <li>
                  <strong>Modela sin corregir cada error:</strong> si dice «agua
                  tía», puedes responder «sí, quieres agua fría» en lugar de
                  exigir repetición perfecta.
                </li>
                <li>
                  <strong>Expande:</strong> toma lo que dice y agrégale una o
                  dos palabras. Si dice «perro», puedes decir «perro grande» o
                  «el perro corre».
                </li>
                <li>
                  <strong>No interrogues:</strong> evita «¿qué es esto?» y
                  «¿de qué color?» seguidos, y no le pidas «dilo bien» todo el
                  rato.
                </li>
              </ul>
              <p>
                Estas pautas apoyan la terapia de lenguaje en casa. Si hay
                señales de alerta o no ves avances, conviene evaluar: no es lo
                mismo acompañar en la rutina que tratar un trastorno.
              </p>

              <h2>Ideas para niños de 1 a 2 años</h2>
              <ul>
                <li>Nombrar objetos, acciones y emociones durante la rutina</li>
                <li>Cantar canciones con gestos y pausas para que participe</li>
                <li>Jugar a «¿dónde está…?» con objetos familiares</li>
                <li>Imitar balbuceos y sonidos, celebrando cualquier intento</li>
                <li>Leer libros con imágenes grandes y señalar juntos</li>
                <li>Ofrecer opciones: «¿leche o jugo?» para favorecer respuesta</li>
              </ul>

              <h2>Ideas para niños de 2 a 3 años</h2>
              <ul>
                <li>Juegos de roles simples (cocina, doctor, tienda)</li>
                <li>Pedir ayuda con tareas cotidianas: «pásame la cuchara»</li>
                <li>Contar lo que hacen: «subimos las escaleras, ahora abrimos la puerta»</li>
                <li>Hacer preguntas abiertas: «¿qué ves?», «¿qué pasó?»</li>
                <li>Ampliar frases: si dice «más pan», responder «quieres más pan con mantequilla»</li>
                <li>Canciones con rimas y repeticiones que invite a completar palabras</li>
              </ul>

              <h2>Ideas para niños de 3 a 5 años</h2>
              <ul>
                <li>Contar historias con muñecos o dibujos</li>
                <li>Preguntar «por qué» y «cómo» para favorecer explicaciones</li>
                <li>Juegos de categorías: «nombra tres cosas que comen»</li>
                <li>Describir secuencias: «primero nos vestimos, después desayunamos»</li>
                <li>Leer cuentos y preguntar qué pasó, qué sintió el personaje</li>
                <li>Favorecer conversación en paseos, comidas y juego libre</li>
              </ul>

              <h2>Qué evitar</h2>
              <ul>
                <li>
                  <strong>Interrogar:</strong> muchas preguntas seguidas («¿qué es
                  esto?», «¿de qué color?») pueden generar presión y bloqueo.
                </li>
                <li>
                  <strong>Exigir repetición constante:</strong> «dilo bien», «repítelo»
                  puede desmotivar si se usa en exceso.
                </li>
                <li>
                  <strong>Exceso de pantallas:</strong> limitar tiempo pasivo frente a
                  dispositivos y priorizar interacción cara a cara.
                </li>
                <li>
                  <strong>Corregir todo el tiempo:</strong> prioriza el mensaje y la
                  confianza; corrige de forma natural modelando la respuesta correcta.
                </li>
              </ul>

              <h2>¿Cuándo no basta con lo que haces en casa?</h2>
              <p>
                Lo que haces en casa es valioso, pero no siempre basta. Conviene
                evaluar si hay señales de alerta persistentes, si no hay progreso
                después de varias semanas o si el colegio reporta dificultades.
                Una{" "}
                <Link href="/servicios/evaluacion-del-lenguaje-infantil-chillan">
                  evaluación del lenguaje
                </Link>{" "}
                puede identificar si hay retraso, trastorno del lenguaje o habla, y
                si corresponde{" "}
                <Link href="/servicios/terapia-lenguaje-infantil">
                  terapia fonoaudiológica
                </Link>
                . Actuar a tiempo suele facilitar mejores resultados.
              </p>
              <p>
                Si buscas un plan profesional (no solo ideas para casa), una{" "}
                <Link href="/servicios/evaluacion-fonoaudiologica">
                  evaluación fonoaudiológica
                </Link>{" "}
                aclara si conviene{" "}
                <Link href="/servicios/terapia-lenguaje-infantil">
                  terapia de lenguaje infantil
                </Link>
                .
              </p>
              <p>
                Si lo que buscas es el acompañamiento en la consulta, revisa la{" "}
                <Link href="/servicios/estimulacion-temprana-del-lenguaje-chillan">
                  estimulación del lenguaje en Chillán
                </Link>
                .
              </p>

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
                ¿Estimulas en casa pero no ves avances?
              </h2>
              <p className="mb-6 text-gray-600">
                Una evaluación puede aclarar si necesitas apoyo profesional.
              </p>
              <WhatsAppCTA href={WHATSAPP_HREF}>
                Quiero una evaluación si esto no mejora
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
