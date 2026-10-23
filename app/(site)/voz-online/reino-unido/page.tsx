import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/reino-unido";
const TITLE = "Terapia de voz en español en el Reino Unido";
const DESCRIPTION =
  "Si en Londres o el Reino Unido buscas un speech therapist en español, la terapia es por videollamada desde Chile. No entra al NHS ni hay registro local.";

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
      "Sí, para adultos, por videollamada desde Chile. Londres y el resto del Reino Unido usan esta página. No hay consulta en Londres ni registro local.",
  },
  {
    question: "¿Speech therapist en español significa que atienden por el NHS?",
    answer:
      "No. La sesión es particular, por videollamada desde Chile. No entra al NHS y no afirma un registro de speech and language therapist en el Reino Unido.",
  },
  {
    question: "¿Por qué no hay una página solo de Londres?",
    answer:
      "Porque no hay consulta en Londres. Manchester, Edimburgo u otra ciudad harían la misma videollamada. El nombre de la ciudad no cambia la sesión.",
  },
  {
    question: "Busco logopeda en Londres. ¿Es esta página?",
    answer:
      "Si quieres la sesión en español, sí puedes partir de aquí. Logopeda es el nombre que se usa en España. Katia es fonoaudióloga en Chile. No afirma colegiación española ni registro británico. Si vives en España, la página distinta es la de España.",
  },
  {
    question: "¿La videollamada reemplaza al otorrino?",
    answer:
      "No. Si la ronquera sigue, te duele hablar o la voz se corta, un médico tiene que mirar las cuerdas de forma presencial. La terapia acompaña ese examen.",
  },
];

export default function VozOnlineReinoUnidoPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Reino Unido"
      quickAnswer="Si en el Reino Unido buscas terapia de voz en español, un speech therapist en español o un logopeda en Londres, la sesión es por videollamada desde Chile, para adultos. No hay consulta en Londres, no entra al NHS y no afirma un registro local. El horario se coordina según tu zona horaria."
      serviceName="Terapia de voz en español para adultos en el Reino Unido"
      serviceDescription="Terapia de voz en español por videollamada desde Chile para adultos en el Reino Unido. Sin NHS, sin registro local y sin consulta en Londres."
      areaServed={{ "@type": "Country", name: "Reino Unido" }}
      whatsappMessage="Hola, estoy en el Reino Unido y quiero consultar horario para terapia de voz en español."
      hoursPlace="el Reino Unido"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos que viven en el Reino Unido y quieren la terapia de voz en español. Da igual
          si llegaste desde América Latina o desde España: la sesión no cambia de idioma. El mapa
          está en{" "}
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
          language therapist en español» o «logopeda en Londres». No hay una página solo de
          Londres. No existe consulta allí, y una ficha con el nombre de la ciudad repetiría esta.
          Si estás en otra ciudad del Reino Unido, es la misma videollamada.
        </p>
        <p>
          Quien vive en España y busca logopeda tiene otra página, porque allá el término es el
          nombre local de la profesión y no el de una persona hispanohablante en un país de habla
          inglesa:{" "}
          <Link href="/voz-online/espana">logopedia de la voz online si estás en España</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Por qué importa el español</h2>
        <p>
          En el Reino Unido la consulta de voz suele ofrecerse en inglés. Explicar si la voz se
          cansa, si carraspeas o si fuerzas el cuello es más claro en el idioma en que hablas cada
          día. Eso no convierte la videollamada en un examen de las cuerdas ni en una vía del NHS.
        </p>
        <p>
          Si estás en Alemania, el término local y el seguro son otros:{" "}
          <Link href="/voz-online/alemania">terapia de voz en español si vives en Alemania</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué se hace en la hora</h2>
        <p>
          La <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> escucha
          cómo hablas. No hay precios ni coberturas en esta página. Si la ronquera lleva más de dos
          semanas sin resfriado, hay dolor o la voz se apaga, el otorrino va primero, de forma
          presencial donde vives.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
