import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/alemania";
const TITLE = "Terapia de voz en español si vives en Alemania";
const DESCRIPTION =
  "Logopeda en español para adultos en Alemania: terapia de voz por videollamada desde Chile. No reemplaza la Logopädie local ni un seguro alemán.";

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
      "La sesión es terapia de voz en español, por videollamada desde Chile, para adultos. En Alemania la profesión local se llama Logopädie. Katia es fonoaudióloga en Chile y no afirma un título alemán.",
  },
  {
    question: "¿Esto lo cubre un seguro alemán?",
    answer:
      "No está publicado un convenio con seguros de Alemania ni con una caja pública. Para consultar si hay hora se escribe por WhatsApp. Aquí no hay precios ni coberturas.",
  },
  {
    question: "¿En qué se diferencia de la página de Suiza o de España?",
    answer:
      "En Alemania la búsqueda mezcla Logopädie y logopeda en español, y el entorno diario suele ser el alemán. Suiza tiene otro país y otros idiomas oficiales. España usa logopeda como nombre local, no como búsqueda de una persona que vive fuera.",
  },
  {
    question: "¿Hay consulta en Berlín, Múnich u otra ciudad?",
    answer:
      "No. Todas las ciudades de Alemania entran en esta videollamada. No hay una ficha por ciudad porque no hay oficina local.",
  },
  {
    question: "¿La videollamada reemplaza al otorrino?",
    answer:
      "No. En Alemania a ese médico se le busca como HNO. Si la ronquera sigue, hay dolor o la voz se corta, esa revisión es presencial. La terapia de voz la acompaña y no la sustituye.",
  },
];

export default function VozOnlineAlemaniaPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Alemania"
      quickAnswer="Si vives en Alemania y buscas logopeda en español o terapia de voz en español, la sesión es por videollamada desde Chile, para adultos. No reemplaza la Logopädie local ni un seguro alemán, y no afirma un título alemán. El horario se coordina según tu zona horaria. Las cuerdas las mira un médico de forma presencial."
      serviceName="Terapia de voz en español para adultos en Alemania"
      serviceDescription="Terapia de voz en español por videollamada desde Chile para adultos en Alemania. Sin título alemán, sin seguros y sin consulta local."
      areaServed={{ "@type": "Country", name: "Alemania" }}
      whatsappMessage="Hola, estoy en Alemania y quiero consultar horario para terapia de voz en español."
      hoursPlace="Alemania"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos hispanohablantes en Alemania que quieren trabajar la voz en español. El
          trabajo, el colegio de los hijos o el médico de cabecera pueden ser en alemán. La sesión
          de voz, si la pides aquí, es en español. El mapa está en{" "}
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
          responde a esa segunda búsqueda: una videollamada desde Chile. No dice que Katia sea
          Logopädin en Alemania ni que sustituya una Logopädie presencial.
        </p>
        <p>
          El español importa porque la ronquera, el carraspeo y el esfuerzo al hablar se cuentan
          mejor en el idioma que usas para eso. No convierte la cámara en un examen de la laringe.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">No es Suiza ni España</h2>
        <p>
          Suiza no es Alemania: hay otros idiomas en la calle y otra forma de nombrar al
          profesional. Si estás allí, usa{" "}
          <Link href="/voz-online/suiza">terapia de voz en español si vives en Suiza</Link>. Si
          vives en España y buscas logopeda como nombre local, la página es{" "}
          <Link href="/voz-online/espana">logopedia de la voz online si estás en España</Link>.
        </p>
        <p>
          Berlín, Múnich, Hamburgo o Fráncfort no tienen ficha propia. No hay consulta en esas
          ciudades. Abrir una URL por ciudad repetiría esta página.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué se trabaja</h2>
        <p>
          La <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> escucha
          cómo hablas. No hay precios ni coberturas de un seguro alemán. Si la ronquera sigue más
          de dos semanas sin resfriado, hay dolor o la voz se apaga, pide hora con un médico HNO
          donde vives. La terapia no reemplaza esa revisión.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
