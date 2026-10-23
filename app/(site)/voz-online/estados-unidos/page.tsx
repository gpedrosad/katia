import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/estados-unidos";
const TITLE = "Terapia de voz en español en Estados Unidos";
const DESCRIPTION =
  "Fonoaudióloga en español por videollamada desde Chile para Nueva York, Texas, California y el resto. Miami tiene página propia. Sin licencia ni seguro.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "fonoaudióloga en español",
    "terapia de voz en español",
    "speech therapist en español",
    "fonoaudióloga online Estados Unidos",
    "terapia de voz online en español",
  ],
});

const faqItems = [
  {
    question: "¿Hay terapia de voz en español para todo Estados Unidos?",
    answer:
      "Sí, para adultos, por videollamada desde Chile. Cubre Nueva York, Texas, California y otros estados. Miami y Florida tienen una página aparte. No hay licencia estatal ni seguro médico de Estados Unidos.",
  },
  {
    question: "¿Por qué no hay una página para Nueva York, Houston o Los Ángeles?",
    answer:
      "Porque la sesión es la misma videollamada y no hay consulta en esas ciudades. Una ficha por ciudad solo cambiaría el nombre. Miami queda aparte porque la búsqueda en Florida ya tiene página propia.",
  },
  {
    question: "¿Speech therapist en español significa licencia en Estados Unidos?",
    answer:
      "No. Es el término con el que se busca la sesión en español. Katia Domínguez es fonoaudióloga en Chile. Esta página no afirma licencia de speech-language pathologist en ningún estado.",
  },
  {
    question: "¿Puedo usar Medicare, Medicaid o un seguro privado?",
    answer:
      "No está publicado ningún convenio con seguros de Estados Unidos. Para consultar disponibilidad se escribe por WhatsApp. Aquí no hay precios ni coberturas.",
  },
  {
    question: "¿La hora online reemplaza al otorrino?",
    answer:
      "No. Si la ronquera sigue, hay dolor al hablar o la voz se corta, un otorrino tiene que ver las cuerdas de forma presencial. La terapia de voz acompaña ese examen.",
  },
];

export default function VozOnlineEstadosUnidosPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Estados Unidos"
      quickAnswer="La terapia de voz en español para adultos en Estados Unidos es por videollamada desde Chile. Sirve si buscas fonoaudióloga en español o speech therapist en español en Nueva York, Texas, California u otro estado. Miami tiene página propia. No hay licencia de EE.UU. ni seguro. El horario se coordina según tu zona horaria."
      serviceName="Terapia de voz en español para adultos en Estados Unidos"
      serviceDescription="Terapia de voz en español por videollamada desde Chile para adultos en Estados Unidos, fuera de la ficha de Miami. Sin licencia estatal ni seguros."
      areaServed={{ "@type": "Country", name: "Estados Unidos" }}
      whatsappMessage="Hola, estoy en Estados Unidos y quiero consultar horario para terapia de voz en español."
      hoursPlace="Estados Unidos"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos hispanohablantes en Estados Unidos que quieren la sesión en español, no una
          hora de voz explicada solo en inglés. El servicio sale de Chile. El mapa está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          . Si estás en Miami o en otra ciudad de Florida, usa{" "}
          <Link href="/voz-online/miami">fonoaudióloga en español online en Miami</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Nueva York</h2>
        <p>
          En Nueva York la búsqueda suele mezclar «speech therapist en español» y «fonoaudióloga en
          español». Las dos piden lo mismo: hablar de la voz en español. No hay consulta en
          Manhattan, Queens ni otra zona. La videollamada es desde Chile, y el horario se coordina
          según tu zona horaria, sin un desfase publicado.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Houston y Texas</h2>
        <p>
          En Texas, y en Houston en particular, mucha gente busca «fonoaudióloga» además de «speech
          therapist en español», porque así se llama la profesión en varios países de origen. La
          sesión sigue siendo terapia de voz en español, por videollamada. No hay oficina en
          Houston ni una licencia de Texas detrás de esta página.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Los Ángeles y California</h2>
        <p>
          En Los Ángeles y en el resto de California se repite la misma necesidad: una terapia de
          voz en español cuando el entorno clínico está en inglés. No armamos una página solo para
          Los Ángeles. Sería la misma videollamada con otro nombre de ciudad. Si estás en
          California, partes de aquí.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué no afirma esta página</h2>
        <p>
          No hay licencia de speech-language pathologist en ningún estado, no hay convenio con
          seguros médicos y no hay precios publicados. La{" "}
          <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> escucha
          cómo hablas. La{" "}
          <Link href="/voz-online/higiene-vocal-cuidado-voz">higiene vocal</Link> entra cuando el
          plan lo pide. Si la ronquera sigue más de dos semanas sin resfriado, el otorrino va
          primero, de forma presencial donde vives.
        </p>
        <p>
          Canadá es otro país, con otra búsqueda. Si estás allí, la página es{" "}
          <Link href="/voz-online/canada">fonoaudióloga en español online en Canadá</Link>.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
