import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mi Hijo No Arma Frases | Cuándo Consultar Fonoaudióloga en Chillán",
  description:
    "¿Tu hijo solo dice palabras sueltas y no arma frases? Conoce las señales de un posible retraso del lenguaje y cuándo pedir hora con fonoaudióloga en Chillán.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/sintomas/hijo-no-arma-frases-chillan",
  },
};

export default function HijoNoArmaFrasesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿A qué edad debería mi hijo armar frases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La mayoría de los niños comienzan a combinar dos palabras (por ejemplo 'mamá agua' o 'más pan') entre los 18 y 24 meses. A los 3 años, deberían usar frases de 3-4 palabras. Si tu hijo a los 2 años y medio solo dice palabras sueltas, es recomendable una evaluación fonoaudiológica.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es normal que un niño de 3 años no arme frases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No es lo esperado. A los 3 años el niño debería estar armando frases simples y relatar experiencias básicas. Si solo usa palabras aisladas, podría tratarse de un retraso del lenguaje que requiere intervención profesional.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            {
              label: "Fonoaudiología",
              href: "/fonoaudiologia-infantil-chillan",
            },
            { label: "No Arma Frases" },
          ]}
        />

        <article className="prose prose-sky lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-sky-950">
            ¿Tu hijo no arma frases? Cuándo consultar en Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            Que un niño diga palabras sueltas pero no logre combinarlas en
            frases puede ser una señal de que su desarrollo lingüístico
            necesita apoyo. Es una de las consultas más frecuentes que recibimos
            de padres en Chillán y alrededores.
          </p>

          <div className="bg-sky-50 rounded-2xl p-8 my-10 border-l-4 border-sky-500">
            <h2 className="text-2xl font-bold mt-0 text-sky-900">
              Hitos esperados en la formación de frases
            </h2>
            <ul className="text-sky-800 space-y-3">
              <li>
                <strong>18-24 meses:</strong> Comienza a juntar dos palabras (
                &quot;más leche&quot;, &quot;papá ven&quot;).
              </li>
              <li>
                <strong>2 a 3 años:</strong> Frases de 2-3 palabras y empieza a
                usar verbos (&quot;quiero jugar&quot;, &quot;mamá dame pan&quot;).
              </li>
              <li>
                <strong>3 a 4 años:</strong> Oraciones más largas, relata
                experiencias simples y hace preguntas (&quot;¿por qué?&quot;,
                &quot;¿dónde está?&quot;).
              </li>
            </ul>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-sky-900">
              Posibles causas de que no arme frases
            </h2>
            <ul>
              <li>
                <Link
                  href="/tratamientos/retraso-del-lenguaje-chillan"
                  className="font-semibold text-sky-600"
                >
                  Retraso del lenguaje expresivo
                </Link>
                : el niño comprende pero no logra producir combinaciones de
                palabras.
              </li>
              <li>
                <Link
                  href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan"
                  className="font-semibold text-sky-600"
                >
                  Trastorno Específico del Lenguaje (TEL)
                </Link>
                : limitaciones más profundas en la estructura gramatical.
              </li>
              <li>
                Dificultades de comprensión auditiva no detectadas.
              </li>
              <li>
                Escasa estimulación comunicativa en el entorno.
              </li>
            </ul>
          </section>

          <div className="bg-sky-50 p-6 rounded-xl my-8 border border-sky-100">
            <h3 className="text-xl font-bold text-sky-900 mt-0">
              Cómo abordamos este síntoma en Chillán
            </h3>
            <p className="text-sky-800">
              En la consulta presencial en <strong>Chillán</strong>, evaluamos
              tanto el lenguaje comprensivo como el expresivo del niño. Si
              confirma un desfase, iniciamos terapia con técnicas de{" "}
              <em>expansión</em> (agregar palabras a lo que dice) y{" "}
              <em>modelado</em> (repetir la frase correcta de forma natural)
              para que progresivamente comience a estructurar frases por sí
              mismo.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20mi%20hijo%20no%20arma%20frases%20y%20me%20preocupa.%20Busco%20hora%20en%20Chill%C3%A1n"
              className="bg-sky-600 hover:bg-sky-700 ring-sky-300"
            >
              Evaluar a mi hijo hoy
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
