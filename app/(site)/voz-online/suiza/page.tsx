import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/suiza";
const TITLE = "Terapia de voz en español si vives en Suiza";
const DESCRIPTION =
  "Terapia de voz en español para adultos en Suiza, por videollamada desde Chile con una fonoaudióloga. El horario se coordina según tu zona horaria.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "logopeda en español Suiza",
    "terapia de voz en español",
    "fonoaudióloga online Suiza",
    "Logopädie auf Spanisch",
    "terapia de voz online Suiza",
  ],
});

const faqItems = [
  {
    question: "¿Hay terapia de voz en español si vivo en Suiza?",
    answer:
      "Sí, para adultos, por videollamada desde Chile. La sesión es en español, con Katia Domínguez, fonoaudióloga. El horario se coordina según tu zona horaria.",
  },
  {
    question: "¿En qué idioma es la sesión?",
    answer:
      "En español. En Suiza la profesión se busca como Logopädie, logopédie o logopedia, según la región. Esta hora es terapia de voz en español, por videollamada desde Chile, para adultos.",
  },
  {
    question: "¿Puedo atenderne desde Zúrich, Ginebra o Basilea?",
    answer:
      "Sí. Zúrich, Ginebra, Basilea y el resto de Suiza usan esta misma videollamada desde Chile. El horario se coordina según tu zona horaria.",
  },
  {
    question: "¿La videollamada reemplaza al otorrino?",
    answer:
      "La terapia de voz acompaña el examen del otorrino. Si la ronquera sigue, te duele hablar o la voz se corta, un médico mira las cuerdas de forma presencial. Por cámara se escucha cómo hablas.",
  },
];

export default function VozOnlineSuizaPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Suiza"
      quickAnswer="Si vives en Suiza y buscas logopeda o terapia de voz en español, la sesión es para adultos, por videollamada desde Chile. Aunque el cantón hable alemán, francés o italiano, la hora es en español. El horario se coordina según tu zona horaria."
      serviceName="Terapia de voz en español para adultos en Suiza"
      serviceDescription="Terapia de voz en español por videollamada desde Chile para adultos en Suiza. El horario se coordina según la zona horaria."
      areaServed={{ "@type": "Country", name: "Suiza" }}
      whatsappMessage="Hola, estoy en Suiza y quiero consultar horario para terapia de voz en español."
      hoursPlace="Suiza"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos hispanohablantes en Suiza que quieren la terapia de voz en español. El
          trabajo puede ser en otro idioma. La sesión, si la pides aquí, es en español. El mapa
          está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Un país con varios idiomas, una sesión en español
        </h2>
        <p>
          En Suiza al profesional se le busca como Logopädie, logopédie o logopedia, según la
          región. Quien escribe en español busca «logopeda en español», «fonoaudióloga online» o
          «terapia de voz en español». Esta página es esa búsqueda. Katia es fonoaudióloga en
          Chile y la hora es por videollamada, para adultos.
        </p>
        <p>
          Zúrich, Ginebra, Basilea, Lausana y Berna entran en esta misma videollamada. El horario
          se coordina según tu zona horaria.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Si estás en Alemania o en España</h2>
        <p>
          Si vives en Alemania, la página es{" "}
          <Link href="/voz-online/alemania">terapia de voz en español si vives en Alemania</Link>.
          Si vives en España y logopeda es el nombre de la profesión, usa{" "}
          <Link href="/voz-online/espana">logopedia de la voz online si estás en España</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué se hace en la hora</h2>
        <p>
          La <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> escucha
          cómo hablas. El español de la sesión sirve para contar el cansancio y los hábitos con
          precisión. Si la ronquera sigue más de dos semanas sin resfriado, hay dolor o la voz se
          apaga, el otorrino va primero, de forma presencial. La terapia de voz acompaña ese
          examen.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
