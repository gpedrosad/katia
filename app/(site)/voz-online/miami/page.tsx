import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/miami";
const TITLE = "Fonoaudióloga en español online en Miami";
const DESCRIPTION =
  "Terapia de voz en español para adultos en Miami y Florida, por videollamada desde Chile con una fonoaudióloga. El horario se coordina a tu zona horaria.";

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
      "Sí, para adultos. La sesión es terapia de voz en español, por videollamada desde Chile, con Katia Domínguez, fonoaudióloga. El horario se coordina según tu zona horaria.",
  },
  {
    question: "¿Speech therapist en español es lo mismo?",
    answer:
      "Es la forma en que muchas personas buscan esta ayuda en Miami. La sesión es terapia de voz en español, por videollamada desde Chile, para adultos.",
  },
  {
    question: "¿Atienden Miami y el resto de Florida?",
    answer:
      "Sí. Miami y el resto de Florida usan esta página. Si estás en otro estado, la página es la de Estados Unidos, con Nueva York, Texas y California.",
  },
  {
    question: "¿La videollamada ve las cuerdas vocales?",
    answer:
      "Por cámara se escucha cómo hablas. Si la ronquera sigue, te duele hablar o la voz se corta, un otorrino mira las cuerdas de forma presencial. La terapia de voz acompaña ese examen.",
  },
];

export default function VozOnlineMiamiPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Miami"
      quickAnswer="Si buscas fonoaudióloga en español en Miami, terapia de voz en español o un speech therapist en español, la sesión es para adultos, por videollamada desde Chile. Cubre Miami y el resto de Florida. El horario se coordina según tu zona horaria."
      serviceName="Terapia de voz en español para adultos en Miami"
      serviceDescription="Terapia de voz en español por videollamada desde Chile para adultos en Miami y Florida. El horario se coordina según la zona horaria."
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
          Fonoaudióloga en español en Miami
        </h2>
        <p>
          En el sur de Florida la misma búsqueda aparece como «fonoaudióloga en español», «terapia
          de voz en español» y «speech therapist en español». Las tres apuntan a una sesión en
          español. Esta página ofrece eso por videollamada desde Chile, para adultos.
        </p>
        <p>
          Hablar de la voz en el idioma en que vives el día a día ayuda a explicar el cansancio, el
          carraspeo o el esfuerzo al hablar. La cámara escucha cómo hablas. Si la queja es la
          calidad de la voz, el marco está en el{" "}
          <Link href="/voz-online/tratamiento-disfonia-online">tratamiento de disfonía</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Florida en esta página, el resto de Estados Unidos en otra
        </h2>
        <p>
          Miami concentra una búsqueda propia, en español. Fort Lauderdale, Orlando y el resto de
          Florida usan esta misma videollamada. El horario se coordina según tu zona horaria.
        </p>
        <p>
          Si estás en Nueva York, Houston, Los Ángeles u otro estado, usa{" "}
          <Link href="/voz-online/estados-unidos">terapia de voz en español en Estados Unidos</Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué se trabaja, y cuándo ver al médico</h2>
        <p>
          La{" "}
          <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> escucha
          cómo hablas. Si la ronquera lleva más de dos semanas sin resfriado, te duele hablar o la
          voz se apaga, el otorrino va primero, de forma presencial. La terapia de voz acompaña
          ese examen.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
