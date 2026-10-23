import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/alemania";
const TITLE = "Terapia de voz en español si vives en Alemania";
const DESCRIPTION =
  "Terapia de voz en español para adultos en Alemania, por videollamada desde Chile con una fonoaudióloga. El horario se coordina según tu zona horaria.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "logopeda en español Alemania",
    "terapia de voz en español",
    "Logopädie auf Spanisch",
    "fonoaudióloga online Alemania",
    "terapia de voz online Alemania",
  ],
});

const faqItems = [
  {
    question: "¿Hay logopeda en español si vivo en Alemania?",
    answer:
      "Sí, para adultos. La sesión es terapia de voz en español, por videollamada desde Chile. En Alemania la profesión se busca como Logopädie. Katia es fonoaudióloga en Chile. El horario se coordina según tu zona horaria.",
  },
  {
    question: "¿Puedo atenderne desde Berlín, Múnich u otra ciudad?",
    answer:
      "Sí. Berlín, Múnich y el resto de Alemania usan esta videollamada desde Chile, en español, para adultos. El horario se coordina según tu zona horaria.",
  },
  {
    question: "¿En qué se diferencia de la página de Suiza o de España?",
    answer:
      "En Alemania la búsqueda mezcla Logopädie y logopeda en español, y la sesión de esta página es en español. Suiza tiene su propia página. España usa logopeda como nombre de la profesión y también tiene la suya.",
  },
  {
    question: "¿La videollamada reemplaza al otorrino?",
    answer:
      "La terapia de voz acompaña el examen médico. En Alemania a ese médico se le busca como HNO. Si la ronquera sigue, hay dolor o la voz se corta, esa revisión es presencial. Por cámara se escucha cómo hablas.",
  },
];

export default function VozOnlineAlemaniaPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Alemania"
      quickAnswer="Si vives en Alemania y buscas logopeda en español o terapia de voz en español, la sesión es para adultos, por videollamada desde Chile. Katia Domínguez es fonoaudióloga. El horario se coordina según tu zona horaria."
      serviceName="Terapia de voz en español para adultos en Alemania"
      serviceDescription="Terapia de voz en español por videollamada desde Chile para adultos en Alemania. El horario se coordina según la zona horaria."
      areaServed={{ "@type": "Country", name: "Alemania" }}
      whatsappMessage="Hola, estoy en Alemania y quiero consultar horario para terapia de voz en español."
      hoursPlace="Alemania"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos hispanohablantes en Alemania que quieren trabajar la voz en español. El
          trabajo o el día a día pueden ser en alemán. La sesión de voz, si la pides aquí, es en
          español. El mapa está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Logopädie y logopeda en español</h2>
        <p>
          Logopädie es el nombre de la profesión en Alemania. Quien busca en español escribe
          «logopeda en español», «fonoaudióloga online» o «terapia de voz en español». Esta página
          es esa búsqueda: una videollamada desde Chile, para adultos, con Katia Domínguez,
          fonoaudióloga.
        </p>
        <p>
          El español importa porque la ronquera, el carraspeo y el esfuerzo al hablar se cuentan
          mejor en el idioma que usas para eso. La cámara escucha cómo hablas. Las cuerdas las
          mira el médico.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Si estás en Suiza o en España</h2>
        <p>
          Si estás en Suiza, usa{" "}
          <Link href="/voz-online/suiza">terapia de voz en español si vives en Suiza</Link>. Si
          vives en España y buscas logopeda como nombre de la profesión, la página es{" "}
          <Link href="/voz-online/espana">logopedia de la voz online si estás en España</Link>.
        </p>
        <p>
          Berlín, Múnich, Hamburgo y Fráncfort entran en esta misma videollamada. El horario se
          coordina según tu zona horaria.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué se trabaja</h2>
        <p>
          La <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> escucha
          cómo hablas. Si la ronquera sigue más de dos semanas sin resfriado, hay dolor o la voz se
          apaga, pide hora con un médico HNO donde vives. La terapia de voz acompaña esa revisión.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
