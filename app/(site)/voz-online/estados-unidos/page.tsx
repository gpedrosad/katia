import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/estados-unidos";
const TITLE = "Terapia de voz en español en Estados Unidos";
const DESCRIPTION =
  "Terapia de voz en español para adultos en Nueva York, Texas y California, por videollamada desde Chile. El horario se coordina a tu zona horaria.";

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
      "Sí, para adultos, por videollamada desde Chile. Cubre Nueva York, Texas, California y otros estados. Miami y Florida tienen una página aparte. El horario se coordina según tu zona horaria.",
  },
  {
    question: "¿Nueva York, Houston y Los Ángeles usan la misma sesión?",
    answer:
      "Sí. Es la misma videollamada desde Chile, en español, para adultos. Miami queda en su página porque la búsqueda de Florida es propia. El horario se coordina según tu zona horaria.",
  },
  {
    question: "¿Speech therapist en español es la sesión en español?",
    answer:
      "Sí. Es el término con el que se busca la terapia de voz en español. Katia Domínguez es fonoaudióloga en Chile y la hora es por videollamada.",
  },
  {
    question: "¿La hora online reemplaza al otorrino?",
    answer:
      "La terapia de voz acompaña el examen del otorrino. Si la ronquera sigue, hay dolor al hablar o la voz se corta, ese médico ve las cuerdas de forma presencial. Por cámara se escucha cómo hablas.",
  },
];

export default function VozOnlineEstadosUnidosPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Estados Unidos"
      quickAnswer="La terapia de voz en español para adultos en Estados Unidos es por videollamada desde Chile, con una fonoaudióloga. Sirve si buscas fonoaudióloga en español o speech therapist en español en Nueva York, Texas, California u otro estado. Miami tiene página propia. El horario se coordina según tu zona horaria."
      serviceName="Terapia de voz en español para adultos en Estados Unidos"
      serviceDescription="Terapia de voz en español por videollamada desde Chile para adultos en Estados Unidos. Miami y Florida tienen página propia. El horario se coordina según la zona horaria."
      areaServed={{ "@type": "Country", name: "Estados Unidos" }}
      whatsappMessage="Hola, estoy en Estados Unidos y quiero consultar horario para terapia de voz en español."
      hoursPlace="Estados Unidos"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos hispanohablantes en Estados Unidos que quieren la sesión en español. El
          servicio es por videollamada desde Chile. El mapa está en{" "}
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
          español». Las dos piden lo mismo: hablar de la voz en español. La videollamada es desde
          Chile, para adultos, y el horario se coordina según tu zona horaria.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Houston y Texas</h2>
        <p>
          En Texas, y en Houston en particular, mucha gente busca «fonoaudióloga» además de «speech
          therapist en español», porque así se llama la profesión en varios países de origen. La
          sesión es terapia de voz en español, por videollamada desde Chile.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Los Ángeles y California</h2>
        <p>
          En Los Ángeles y en el resto de California la necesidad es la misma: una terapia de voz
          en español. California entra en esta videollamada, junto con el resto del país fuera de
          Florida. El horario se coordina según tu zona horaria.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué se trabaja en la sesión</h2>
        <p>
          La{" "}
          <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> escucha
          cómo hablas. La{" "}
          <Link href="/voz-online/higiene-vocal-cuidado-voz">higiene vocal</Link> entra cuando el
          plan lo pide. Si la ronquera sigue más de dos semanas sin resfriado, el otorrino va
          primero, de forma presencial donde vives. La terapia de voz acompaña ese examen.
        </p>
        <p>
          Si estás en Canadá, la página es{" "}
          <Link href="/voz-online/canada">fonoaudióloga en español online en Canadá</Link>.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
