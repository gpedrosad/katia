import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { MEDICAL_BUSINESS_ID } from "@/lib/local-business-schema";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/voz-online/polipos-en-las-cuerdas-vocales";

export const metadata = buildPageMetadata({
  path: PATH,
  title: "Pólipos en las cuerdas vocales: terapia online",
  description:
    "Pólipos en las cuerdas vocales y pólipo en la cuerda vocal: terapia de voz online que acompaña al otorrino. Adultos, videollamada en todo Chile.",
  keywords: [
    "pólipos en las cuerdas vocales",
    "polipos cuerdas vocales",
    "pólipo cuerda vocal",
    "polipo cuerda vocal",
    "terapia de voz online",
    "fonoaudióloga voz online",
  ],
});

const faqItems = [
  {
    question: "¿Qué es un pólipo en la cuerda vocal?",
    answer:
      "Un pólipo en la cuerda vocal lo confirma el otorrino cuando mira las cuerdas. La terapia de voz online acompaña ese plan con higiene vocal y técnica, por videollamada, para adultos en todo Chile.",
  },
  {
    question: "¿Puedo empezar la terapia sin ver al otorrino?",
    answer:
      "Si la ronquera lleva más de dos semanas sin resfriado, o ya te mencionaron un pólipo, el primer paso es el otorrino: él mira las cuerdas. En la videollamada se escucha y se describe cómo usas la voz.",
  },
  {
    question: "¿En qué se diferencia de un nódulo?",
    answer:
      "Son lesiones distintas. Las dos las confirma el otorrino. Esta página es la terapia de apoyo cuando el diagnóstico es un pólipo. Si te hablaron de nódulos, el camino está en la página de nódulos en las cuerdas vocales.",
  },
  {
    question: "¿La sesión sirve en todo Chile?",
    answer:
      "Sí. Es para adultos, por videollamada, en cualquier ciudad de Chile. La hora se coordina por WhatsApp. La fonoaudiología infantil de esta consulta sigue siendo presencial en Chillán.",
  },
];

export default function PoliposCuerdasVocalesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Terapia de apoyo para pólipos en las cuerdas vocales",
    serviceType: "Terapia de voz online",
    description:
      "Terapia de voz online para adultos con pólipos en las cuerdas vocales, junto al plan del otorrino, en todo Chile.",
    url: `${SITE_URL}${PATH}`,
    areaServed: { "@type": "Country", name: "Chile" },
    provider: { "@id": MEDICAL_BUSINESS_ID },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Videollamada",
      availableLanguage: "es-CL",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Voz Online", href: "/voz-online/fonoaudiologa-de-voz-online" },
            { label: "Pólipos en las cuerdas" },
          ]}
        />

        <article className="prose prose-fuchsia lg:prose-lg max-w-none">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold text-fuchsia-950">
              Pólipos en las cuerdas vocales: terapia de apoyo
            </h1>
            <div className="not-prose my-6 rounded-2xl border-2 border-fuchsia-200 bg-fuchsia-50 p-5">
              <p className="text-lg font-semibold text-fuchsia-950" data-speakable>
                <strong>Respuesta rápida:</strong> Un pólipo en las cuerdas
                vocales lo confirma el otorrino. La terapia de voz online
                acompaña el plan que él indique, con higiene vocal y técnica,
                por videollamada, para adultos en todo Chile.
              </p>
            </div>
          </header>

          <section>
            <h2 className="text-2xl font-bold text-fuchsia-950">
              ¿Qué es un pólipo en la cuerda vocal?
            </h2>
            <p>
              Un pólipo en la cuerda vocal lo confirma el otorrino cuando mira
              las cuerdas. La terapia de voz online acompaña ese plan con
              higiene vocal y técnica, por videollamada, para adultos en todo
              Chile.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-fuchsia-950">Para quién es</h2>
            <p>
              Para adultos a los que el otorrino les habló de un pólipo, o que
              llevan una ronquera que no cede y quieren el paso siguiente antes
              de ponerse a hacer ejercicios. También si ya tienes el informe y
              te indicaron fonoaudiología junto con el control médico.
            </p>
            <p>
              Si el diagnóstico fue un nódulo, el texto que corresponde es{" "}
              <Link href="/voz-online/nodulos-vocales-tratamiento-online">
                terapia para nódulos en las cuerdas vocales
              </Link>
              . El otorrino es quien dice qué lesión es. Si la voz se cansa
              antes, mira{" "}
              <Link href="/voz-online/fatiga-vocal-tratamiento-online">
                fatiga vocal
              </Link>
              . El conjunto de la atención está en la{" "}
              <Link href="/voz-online/fonoaudiologa-de-voz-online">
                terapia de voz online
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-fuchsia-950">Cómo son las sesiones online</h2>
            <p>
              La atención es por videollamada con Katia Domínguez, fonoaudióloga.
              Necesitas cámara, micrófono y un lugar tranquilo. La hora se
              coordina por WhatsApp.
            </p>
            <ul>
              <li>
                Si el otorrino dejó indicada la vía de terapia, la sesión
                revisa cómo usas la voz: respiración, proyección e{" "}
                <Link href="/voz-online/higiene-vocal-cuidado-voz">
                  higiene vocal
                </Link>
                .
              </li>
              <li>
                Si indicó cirugía, la sesión se coordina con esa indicación.
              </li>
              <li>
                Entre sesiones practicas lo que quedó claro en la
                videollamada. El detalle del formato está en{" "}
                <Link href="/voz-online/como-es-la-sesion-de-voz-online">
                  cómo es una sesión de voz online
                </Link>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-fuchsia-950">Cuándo ver al otorrino primero</h2>
            <p>
              Antes de empezar ejercicios, conviene que un otorrino mire las
              cuerdas si:
            </p>
            <ul>
              <li>La ronquera dura más de dos semanas y no estás resfriado.</li>
              <li>Ya te mencionaron un pólipo, un nódulo u otra lesión.</li>
              <li>Te duele hablar, te falta el aire o la voz se apaga de golpe.</li>
            </ul>
            <p>
              La nasofibrolaringoscopía la hace el otorrino. En la{" "}
              <Link href="/voz-online/evaluacion-vocal-online">
                evaluación vocal online
              </Link>{" "}
              se escucha y se describe el uso de la voz. Si hace falta ver la
              lesión, se deriva. La ronquera que no se va también está explicada
              en{" "}
              <Link href="/voz-online/voz-ronca-causas-tratamiento">
                ronquera persistente
              </Link>{" "}
              y el marco general en{" "}
              <Link href="/voz-online/tratamiento-disfonia-online">
                tratamiento de disfonía online
              </Link>
              .
            </p>
          </section>

          <div className="not-prose my-10 flex justify-center">
            <WhatsAppCTA message="Hola, el otorrino me habló de un pólipo en las cuerdas y quiero terapia de voz online.">
              Escribir por WhatsApp
            </WhatsAppCTA>
          </div>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 rounded-2xl border border-fuchsia-100 bg-fuchsia-50/40 p-8"
          />
        </article>
      </main>
    </>
  );
}
