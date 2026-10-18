import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/servicios/estimulacion-temprana-del-lenguaje-chillan";
const WHATSAPP_LINK = whatsappUrl(
  "Hola, busco estimulación del lenguaje infantil para mi hijo en Chillán",
);

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Estimulación del lenguaje infantil en Chillán",
  description:
    "Estimulación del lenguaje infantil en Chillán, presencial, de 0 a 3 años: balbuceo, primeras palabras y comprensión. Distinta de la guía para casa.",
  keywords: [
    "estimulación del lenguaje infantil en Chillán",
    "estimulación del lenguaje",
    "estimulación temprana del lenguaje Chillán",
    "bebé no balbucea",
    "fonoaudióloga 0-3 años Chillán",
  ],
});

const faqs = [
  {
    q: "¿Esta página es la guía para estimular el lenguaje en casa?",
    a: "No. Aquí está el servicio profesional de estimulación del lenguaje infantil en Chillán, de 0 a 3 años. Lo que puedes hacer en casa, sin reemplazar la consulta, está en la guía para padres.",
  },
  {
    q: "¿A qué edad corresponde la estimulación temprana?",
    a: "En esta consulta, la estimulación temprana del lenguaje es para bebés y niños de 0 a 3 años: balbuceo, primeras palabras y comprensión.",
  },
  {
    q: "¿Cuándo conviene consultar?",
    a: "Si no balbucea entre los 6 y 9 meses, a los 12 meses no dice palabras ni señala, a los 18 meses tiene muy pocas palabras o a los 24 meses no combina dos palabras, conviene una evaluación presencial en Chillán.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Estimulación del lenguaje infantil en Chillán",
  medicalSpecialty: "SpeechTherapy",
  about: {
    "@type": "TherapeuticProcedure",
    name: "Estimulación del lenguaje infantil",
    description:
      "Servicio profesional de estimulación temprana del lenguaje para bebés y niños de 0 a 3 años en Chillán.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function EstimulacionTempranaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Servicios", href: "/fonoaudiologa-ninos-chillan" },
            { label: "Estimulación del lenguaje" },
          ]}
        />

        <article className="prose prose-cyan lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-cyan-950">
            Estimulación del lenguaje infantil en Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            Servicio profesional de estimulación temprana del lenguaje para
            bebés y niños de 0 a 3 años en Chillán. Si tu hijo no balbucea,
            dice muy pocas palabras o no comprende lo que le pides, la consulta
            presencial mira en qué punto está y qué conviene trabajar.
          </p>

          <section>
            <h2 className="mt-8 text-2xl font-bold text-cyan-900">
              ¿Cuándo conviene consultar por estimulación del lenguaje?
            </h2>
            <ul>
              <li>
                <strong>6-9 meses:</strong> no balbucea (no dice «bababá» ni
                imita sonidos vocálicos).
              </li>
              <li>
                <strong>12 meses:</strong> no dice ninguna palabra reconocible
                ni señala lo que le interesa.
              </li>
              <li>
                <strong>18 meses:</strong> tiene muy pocas palabras y no
                comprende instrucciones simples («dame la pelota»).
              </li>
              <li>
                <strong>24 meses:</strong> no alcanza las 50 palabras ni
                combina dos («mamá agua»).
              </li>
            </ul>
            <p>
              Esas mismas edades, explicadas para padres, están en los{" "}
              <Link href="/recursos/hitos-del-lenguaje-por-edad">
                hitos del lenguaje por edad
              </Link>{" "}
              y en las{" "}
              <Link href="/recursos/senales-de-alerta-del-lenguaje-y-habla">
                señales de alerta del lenguaje y el habla
              </Link>
              .
            </p>
          </section>

          <div className="my-8 rounded-xl border border-cyan-100 bg-cyan-50 p-6">
            <h2 className="mt-0 text-xl font-bold text-cyan-900">
              Cómo es la estimulación en la consulta de Chillán
            </h2>
            <p className="text-cyan-800">
              En la atención presencial en Chillán se usa estimulación
              focalizada, modelado y expansión lingüística dentro del juego.
              Los padres participan para repetir las mismas estrategias en
              casa, fuera de la sesión. La primera sesión dura unos 60 minutos
              y sirve para ver en qué punto está el niño y definir el plan.
            </p>
          </div>

          <section>
            <h2 className="mt-8 text-2xl font-bold text-cyan-900">
              Qué hace la fonoaudióloga y qué puedes hacer en casa
            </h2>
            <p>
              Esta página es el servicio profesional. La guía de{" "}
              <Link href="/recursos/estimular-lenguaje-en-casa">
                cómo estimular el lenguaje en casa
              </Link>{" "}
              explica ideas para el día a día (nombrar, esperar el turno,
              ampliar lo que el niño dice). Esa guía no reemplaza la
              evaluación ni la terapia.
            </p>
            <p>
              Si quieres el mapa general de palabras, frases y comprensión,
              parte por{" "}
              <Link href="/lenguaje-infantil">lenguaje infantil</Link>. Si la
              duda es si va lento o si podría ser un trastorno, mira la{" "}
              <Link href="/comparaciones/tel-vs-retraso-del-lenguaje">
                diferencia entre TEL y retraso del lenguaje
              </Link>{" "}
              y{" "}
              <Link href="/glosario/retraso-del-lenguaje">
                qué es el retraso del lenguaje
              </Link>
              . El nombre actual de ese trastorno persistente está en{" "}
              <Link href="/glosario/tdl">qué es el TDL</Link>.
            </p>
            <p>
              Para pedir hora, puedes{" "}
              <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
                agendar con la fonoaudióloga
              </Link>{" "}
              o escribir desde{" "}
              <Link href="/contacto-fonoaudiologa-chillan">
                contacto en Chillán
              </Link>
              . Si además cuesta entenderle al pronunciar, la ruta es la{" "}
              <Link href="/servicios/evaluacion-del-habla-infantil-chillan">
                evaluación del habla infantil
              </Link>
              , no esta estimulación de 0 a 3 años.
            </p>
          </section>

          <section>
            <h2 className="mt-8 text-2xl font-bold text-cyan-900">
              Preguntas frecuentes
            </h2>
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </section>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href={WHATSAPP_LINK}
              className="bg-cyan-600 ring-cyan-300 hover:bg-cyan-700"
            >
              Consultar por estimulación del lenguaje
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
