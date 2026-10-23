import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/canada";
const TITLE = "Fonoaudióloga en español online en Canadá";
const DESCRIPTION =
  "Terapia de voz en español para adultos en Toronto, Montreal y el resto de Canadá, por videollamada desde Chile. El horario se coordina a tu zona horaria.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "fonoaudióloga en español Canadá",
    "terapia de voz en español",
    "speech therapist en español",
    "speech-language pathologist en español",
    "fonoaudióloga online Toronto",
  ],
});

const faqItems = [
  {
    question: "¿Hay fonoaudióloga en español para Toronto o Montreal?",
    answer:
      "Sí, para adultos, por videollamada desde Chile. Toronto, Montreal y el resto de Canadá usan esta página. La sesión es en español. El horario se coordina según tu zona horaria.",
  },
  {
    question: "¿En qué idioma es la sesión en Montreal?",
    answer:
      "En español. Es terapia de voz por videollamada desde Chile, para adultos, con una fonoaudióloga. El horario se coordina según tu zona horaria.",
  },
  {
    question: "¿Cómo se coordina el horario desde Canadá?",
    answer:
      "La atención publicada es de lunes a viernes, de 10:00 a 18:00, hora de Chile. La hora de la videollamada se coordina según tu zona horaria, por WhatsApp.",
  },
  {
    question: "¿La videollamada reemplaza al otorrino?",
    answer:
      "La terapia de voz acompaña el examen del otorrino. Si la ronquera sigue, te duele hablar o la voz se corta, un médico mira las cuerdas de forma presencial. Por cámara se escucha cómo hablas.",
  },
];

export default function VozOnlineCanadaPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Canadá"
      quickAnswer="Si en Canadá buscas fonoaudióloga en español, terapia de voz en español o un speech therapist en español, la sesión es para adultos, por videollamada desde Chile. Toronto y Montreal usan esta misma página. La hora es en español y se coordina según tu zona horaria."
      serviceName="Terapia de voz en español para adultos en Canadá"
      serviceDescription="Terapia de voz en español por videollamada desde Chile para adultos en Canadá, incluidos Toronto y Montreal. El horario se coordina según la zona horaria."
      areaServed={{ "@type": "Country", name: "Canadá" }}
      whatsappMessage="Hola, estoy en Canadá y quiero consultar horario para terapia de voz en español."
      hoursPlace="Canadá"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos hispanohablantes en Canadá que quieren trabajar la voz en español. El mapa
          del servicio está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          . Estados Unidos es otra página:{" "}
          <Link href="/voz-online/estados-unidos">terapia de voz en español en Estados Unidos</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Toronto</h2>
        <p>
          En Toronto la búsqueda mezcla «fonoaudióloga en español», «speech-language pathologist en
          español» y «speech therapist en español». Las tres piden una sesión en español. La
          videollamada sale de Chile, para adultos, y el horario se coordina según tu zona horaria.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Montreal, en español</h2>
        <p>
          En Montreal el día a día puede ser en francés o en inglés. Esta sesión es en español, por
          videollamada desde Chile, para que puedas contar la ronquera, el cansancio y los hábitos
          en tu idioma. Toronto y Montreal comparten esta página. El horario se coordina según tu
          zona horaria.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué se trabaja en la sesión</h2>
        <p>
          La{" "}
          <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> escucha
          cómo hablas. Si la queja es la calidad de la voz, mira el{" "}
          <Link href="/voz-online/tratamiento-disfonia-online">tratamiento de disfonía</Link>. El
          otorrino, de forma presencial en Canadá, mira las cuerdas si la ronquera se queda, hay
          dolor o la voz se apaga. La terapia de voz acompaña ese examen.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
