import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/reino-unido";
const TITLE = "Terapia de voz en español en el Reino Unido";
const DESCRIPTION =
  "Terapia de voz en español para adultos en Londres y el Reino Unido, por videollamada desde Chile. El horario se coordina a tu zona horaria.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "speech therapist en español",
    "terapia de voz en español Londres",
    "logopeda en Londres",
    "speech and language therapist en español",
    "fonoaudióloga en español Reino Unido",
  ],
});

const faqItems = [
  {
    question: "¿Hay terapia de voz en español si vivo en Londres?",
    answer:
      "Sí, para adultos, por videollamada desde Chile. Londres y el resto del Reino Unido usan esta página. La sesión es en español. El horario se coordina según tu zona horaria.",
  },
  {
    question: "¿Speech therapist en español y logopeda en Londres son esta sesión?",
    answer:
      "Sí, si quieres la terapia de voz en español. Speech therapist y speech and language therapist son los nombres que se buscan en el Reino Unido. Logopeda es el nombre que se usa en España. Katia es fonoaudióloga en Chile y la hora es por videollamada.",
  },
  {
    question: "¿Cómo se coordina el horario desde el Reino Unido?",
    answer:
      "La atención publicada es de lunes a viernes, de 10:00 a 18:00, hora de Chile. La hora de la videollamada se coordina según tu zona horaria, por WhatsApp.",
  },
  {
    question: "¿La videollamada reemplaza al otorrino?",
    answer:
      "La terapia de voz acompaña el examen del otorrino. Si la ronquera sigue, te duele hablar o la voz se corta, un médico mira las cuerdas de forma presencial. Por cámara se escucha cómo hablas.",
  },
];

export default function VozOnlineReinoUnidoPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Reino Unido"
      quickAnswer="Si en el Reino Unido buscas terapia de voz en español, un speech therapist en español o un logopeda en Londres, la sesión es para adultos, por videollamada desde Chile. Londres y el resto del país usan esta página. El horario se coordina según tu zona horaria."
      serviceName="Terapia de voz en español para adultos en el Reino Unido"
      serviceDescription="Terapia de voz en español por videollamada desde Chile para adultos en el Reino Unido, incluido Londres. El horario se coordina según la zona horaria."
      areaServed={{ "@type": "Country", name: "Reino Unido" }}
      whatsappMessage="Hola, estoy en el Reino Unido y quiero consultar horario para terapia de voz en español."
      hoursPlace="el Reino Unido"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos que viven en el Reino Unido y quieren la terapia de voz en español. Da igual
          si llegaste desde América Latina o desde España: la sesión es en español. El mapa está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Londres y el resto del país</h2>
        <p>
          Londres concentra a mucha gente que busca «speech therapist en español», «speech and
          language therapist en español» o «logopeda en Londres». Manchester, Edimburgo y el resto
          del Reino Unido usan esta misma videollamada desde Chile. El horario se coordina según
          tu zona horaria.
        </p>
        <p>
          Quien vive en España y busca logopeda como nombre de la profesión tiene otra página:{" "}
          <Link href="/voz-online/espana">logopedia de la voz online si estás en España</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Por qué importa el español</h2>
        <p>
          Explicar si la voz se cansa, si carraspeas o si fuerzas el cuello es más claro en el
          idioma en que hablas cada día. La sesión es en español, por videollamada desde Chile. La
          cámara escucha cómo hablas. Las cuerdas las mira el otorrino, de forma presencial.
        </p>
        <p>
          Si estás en Alemania, la página es{" "}
          <Link href="/voz-online/alemania">terapia de voz en español si vives en Alemania</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué se hace en la hora</h2>
        <p>
          La <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> escucha
          cómo hablas. Si la ronquera lleva más de dos semanas sin resfriado, hay dolor o la voz se
          apaga, el otorrino va primero, de forma presencial donde vives. La terapia de voz
          acompaña ese examen.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
