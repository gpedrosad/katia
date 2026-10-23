import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/miami";
const TITLE = "Fonoaudióloga en español online en Miami";
const DESCRIPTION =
  "Terapia de voz en español para adultos en Miami y Florida, por videollamada desde Chile. Sin licencia de EE.UU. ni seguro médico. El horario se coordina.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "fonoaudióloga en español online Miami",
    "terapia de voz en español",
    "speech therapist en español",
    "fonoaudióloga Miami",
    "terapia de voz online Miami",
  ],
});

const faqItems = [
  {
    question: "¿Hay fonoaudióloga en español online para Miami?",
    answer:
      "Sí, para adultos, por videollamada desde Chile. La sesión es en español. Katia Domínguez es fonoaudióloga en Chile. No afirma licencia de speech-language pathologist en Florida ni consulta en Miami.",
  },
  {
    question: "¿Speech therapist en español es lo mismo?",
    answer:
      "Es la forma en que muchas personas buscan esta ayuda en Miami. La sesión que ofrece esta página es terapia de voz en español, por videollamada. No es una licencia de Estados Unidos ni una clínica en Florida.",
  },
  {
    question: "¿Puedo usar un seguro médico de Florida?",
    answer:
      "No está publicado un convenio con seguros de Estados Unidos. Para consultar si hay hora se escribe por WhatsApp. Aquí no hay precios ni coberturas.",
  },
  {
    question: "¿Atienden solo Miami o también el resto de Florida?",
    answer:
      "Miami y el resto de Florida usan esta página. Si estás en otro estado, la página distinta es la de Estados Unidos. Nueva York, Texas y California no tienen ficha propia.",
  },
  {
    question: "¿La videollamada ve las cuerdas vocales?",
    answer:
      "No. Si la ronquera sigue, te duele hablar o la voz se corta, un otorrino tiene que mirar las cuerdas de forma presencial. La terapia acompaña ese examen.",
  },
];

export default function VozOnlineMiamiPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Miami"
      quickAnswer="Si buscas fonoaudióloga en español en Miami, terapia de voz en español o un speech therapist en español, la sesión es por videollamada desde Chile, para adultos. No hay licencia de Florida, ni consulta en Miami, ni seguro médico de Estados Unidos. El horario se coordina según tu zona horaria. Las cuerdas las mira un otorrino allí."
      serviceName="Terapia de voz en español para adultos en Miami"
      serviceDescription="Terapia de voz en español por videollamada desde Chile para adultos en Miami y Florida. Sin licencia de Estados Unidos ni seguros médicos."
      areaServed={[
        { "@type": "City", name: "Miami" },
        { "@type": "State", name: "Florida" },
        { "@type": "Country", name: "Estados Unidos" },
      ]}
      whatsappMessage="Hola, estoy en Miami y quiero consultar horario para terapia de voz en español."
      hoursPlace="Miami o Florida"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos que viven en Miami o en otra ciudad de Florida y quieren la terapia de voz
          en español. Sirve si la voz se cansa, está ronca o ya un médico te habló de terapia
          vocal. El mapa del servicio está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Fonoaudióloga en español, no una clínica en Miami
        </h2>
        <p>
          En el sur de Florida la misma búsqueda aparece como «fonoaudióloga en español», «terapia
          de voz en español» y «speech therapist en español». Las tres apuntan a una sesión en
          español. Esta página ofrece eso por videollamada desde Chile. No dice que Katia tenga
          licencia de speech-language pathologist en Florida, ni un consultorio en Miami, ni un
          acuerdo con seguros médicos de Estados Unidos.
        </p>
        <p>
          Hablar de la voz en el idioma en que vives el día a día ayuda a explicar el cansancio, el
          carraspeo o el esfuerzo al hablar. No cambia el límite clínico: la cámara no ve las
          cuerdas. Si la queja es la calidad de la voz, el marco está en el{" "}
          <Link href="/voz-online/tratamiento-disfonia-online">tratamiento de disfonía</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Florida en esta página, el resto de Estados Unidos en otra
        </h2>
        <p>
          Miami concentra una búsqueda propia, en español, distinta de «Estados Unidos» a secas.
          Por eso tiene página. Fort Lauderdale, Orlando u otra ciudad de Florida no la necesitan:
          la videollamada es la misma y no hay oficina local que cambie.
        </p>
        <p>
          Si estás en Nueva York, Houston, Los Ángeles u otro estado, usa{" "}
          <Link href="/voz-online/estados-unidos">terapia de voz en español en Estados Unidos</Link>
          . Esa página explica por qué no hay una ficha por ciudad.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué se trabaja, y cuándo ver al médico</h2>
        <p>
          La{" "}
          <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> escucha
          cómo hablas. No promete un plazo ni un resultado. Si la ronquera lleva más de dos semanas
          sin resfriado, te duele hablar o la voz se apaga, el otorrino va primero, de forma
          presencial en Florida. La terapia no reemplaza ese examen.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
