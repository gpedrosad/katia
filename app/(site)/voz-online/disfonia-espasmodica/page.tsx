import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { MEDICAL_BUSINESS_ID } from "@/lib/local-business-schema";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/voz-online/disfonia-espasmodica";
const TITLE = "Disfonía espasmódica: qué es y cómo ayuda la terapia de voz";
const DESCRIPTION =
  "Condición neurológica: la diagnostican el otorrino o el neurólogo. La terapia de voz online es un complemento, sin prometer cura. Adultos en Chile.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "disfonía espasmódica",
    "disfonía espasmódica tratamiento",
    "terapia de voz online",
    "disfonía neurológica",
    "fonoaudióloga de voz",
  ],
});

const faqItems = [
  {
    question: "¿La disfonía espasmódica se cura con terapia de voz?",
    answer:
      "No. Es una condición neurológica. La terapia de voz no la cura. Apoya, como complemento, cómo usas la voz. El tratamiento médico lo decide el médico, no la fonoaudióloga.",
  },
  {
    question: "¿Quién diagnostica la disfonía espasmódica?",
    answer:
      "El otorrinolaringólogo o el neurólogo. La videollamada no pone ese diagnóstico ni reemplaza el examen de la laringe.",
  },
  {
    question: "¿La fonoaudióloga indica el tratamiento médico?",
    answer:
      "No. Si existe un tratamiento médico, lo indica y lo sigue el médico que te atiende. Aquí no se nombran fármacos ni dosis. La terapia de voz acompaña ese plan.",
  },
  {
    question: "¿Es lo mismo que la disfonía por estrés?",
    answer:
      "No. La disfonía por estrés o tensión muscular se trabaja sobre respiración, postura y hábitos. La espasmódica es neurológica y la confirma el médico. Si te suenan parecidas, no las nombres tú: pide el examen.",
  },
  {
    question: "¿Sirve si vivo fuera de Chillán?",
    answer:
      "Sí, para adultos, por videollamada, en cualquier ciudad de Chile. La hora se coordina por WhatsApp. La fonoaudiología infantil es presencial en Chillán.",
  },
];

export default function DisfoniaEspasmodicaPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Terapia de voz online como complemento en disfonía espasmódica",
    serviceType: "Terapia de voz online",
    description:
      "Acompañamiento fonoaudiológico online para adultos con disfonía espasmódica, como complemento del tratamiento médico, en todo Chile. No reemplaza el diagnóstico del otorrino o del neurólogo.",
    url: `${SITE_URL}${PATH}`,
    areaServed: { "@type": "Country", name: "Chile" },
    provider: { "@id": MEDICAL_BUSINESS_ID },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Videollamada",
      availableLanguage: "es-CL",
    },
  };

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    inLanguage: "es-CL",
    datePublished: "2026-10-22",
    dateModified: "2026-10-22",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Voz Online", href: "/voz-online/fonoaudiologa-de-voz-online" },
            { label: "Disfonía espasmódica" },
          ]}
        />

        <article className="prose prose-rose lg:prose-lg max-w-none">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold text-rose-950">
              Disfonía espasmódica: qué es y cómo ayuda la terapia de voz
            </h1>
            <div className="not-prose my-6 rounded-2xl border-2 border-rose-200 bg-rose-50 p-5">
              <p className="text-lg font-semibold text-rose-950" data-speakable>
                <strong>Respuesta rápida:</strong> La disfonía espasmódica es
                una condición neurológica. La diagnostica el otorrinolaringólogo
                o el neurólogo, y el tratamiento médico lo deciden ellos. La
                fonoaudióloga apoya con terapia de voz, como complemento, por
                videollamada para adultos en todo Chile. No es una cura. La
                videollamada no reemplaza el examen de la laringe.
              </p>
            </div>
          </header>

          <section>
            <h2 className="text-2xl font-bold text-rose-950">Para quién es</h2>
            <p>
              Para adultos a los que un médico ya les habló de disfonía
              espasmódica, o que quieren entender qué puede hacer la terapia de
              voz sin adelantar un diagnóstico. El mapa del servicio está en{" "}
              <Link href="/voz-online/fonoaudiologa-de-voz-online">
                terapia de voz online para adultos
              </Link>
              . Si buscas fonoaudiología para un niño en Chillán, esa atención
              es presencial:{" "}
              <Link href="/fonoaudiologa-ninos-chillan">
                fonoaudióloga infantil en Chillán
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rose-950">
              Qué es, y qué no es
            </h2>
            <p>
              La disfonía espasmódica es una condición neurológica de la voz.
              La voz puede cortarse o apretarse de una forma que no se explica
              solo por el estrés o por un hábito. Eso no alcanza para ponerle
              el nombre: el diagnóstico lo hace el otorrinolaringólogo o el
              neurólogo, con el examen que ellos indiquen.
            </p>
            <p>
              No es lo mismo que la{" "}
              <Link href="/voz-online/disfonia-por-estres">
                disfonía por estrés o tensión muscular
              </Link>
              , donde la terapia trabaja respiración, postura y hábitos. Tampoco
              es lo mismo que una{" "}
              <Link href="/voz-online/paralisis-cordal-rehabilitacion-online">
                parálisis de cuerda vocal
              </Link>
              , que es otra indicación médica. Si todavía no tienes un
              diagnóstico, la página general es{" "}
              <Link href="/voz-online/tratamiento-disfonia-online">
                tratamiento de disfonía
              </Link>
              , y el primer paso médico es el otorrino.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rose-950">
              Quién decide el tratamiento médico
            </h2>
            <p>
              El tratamiento médico existe y lo decide el médico que te
              diagnostica. La fonoaudióloga no lo indica, no lo cambia y no
              nombra fármacos ni dosis. Si tu otorrino o tu neurólogo ya
              definieron un plan, la terapia de voz se acomoda a ese plan. No
              lo reemplaza.
            </p>
            <p>
              No se promete una cura ni un plazo. Lo que se puede decir es que
              la terapia es un complemento: acompaña el uso de la voz mientras
              el equipo médico lleva la parte que le corresponde.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rose-950">
              Qué hace la terapia de voz, como complemento
            </h2>
            <p>
              En la videollamada, para adultos en todo Chile, se escucha cómo
              hablas y se trabaja respiración, hábitos e{" "}
              <Link href="/voz-online/higiene-vocal-cuidado-voz">
                higiene vocal
              </Link>{" "}
              en torno al plan médico. No es una sesión para diagnosticar la
              laringe. El formato está en{" "}
              <Link href="/voz-online/como-es-la-sesion-de-voz-online">
                cómo es una sesión de voz online
              </Link>
              . La primera hora de esta consulta es una{" "}
              <Link href="/voz-online/evaluacion-vocal-online">
                evaluación vocal online
              </Link>
              : describe el uso de la voz. No sustituye el examen del otorrino.
            </p>
            <p>
              Los ejercicios, si corresponden, se indican después de esa
              evaluación y de lo que haya dicho el médico. Están descritos en{" "}
              <Link href="/voz-online/ejercicios-para-la-voz">
                ejercicios para la voz
              </Link>
              . No los empieces por tu cuenta para «corregir» una disfonía
              espasmódica.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rose-950">
              La videollamada no reemplaza el examen
            </h2>
            <p>
              Si la voz se corta, se aprieta, duele hablar o la ronquera sigue
              más de dos semanas sin resfriado, el otorrinolaringólogo va
              primero. La nasofibrolaringoscopía y el diagnóstico neurológico
              no se hacen por WhatsApp ni por videollamada. Escribe cuando ya
              tengas la indicación médica, o cuando quieras ordenar el
              complemento fonoaudiológico sin saltarte ese examen.
            </p>
          </section>

          <div className="not-prose my-10 flex justify-center">
            <WhatsAppCTA message="Hola, me hablaron de disfonía espasmódica y quiero saber cómo apoya la terapia de voz online.">
              Escribir por WhatsApp
            </WhatsAppCTA>
          </div>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-12 rounded-2xl border border-rose-100 bg-rose-50/40 p-8"
          />
        </article>
      </main>
    </>
  );
}
