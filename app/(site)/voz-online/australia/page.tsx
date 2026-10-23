import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/australia";
const TITLE = "Fonoaudióloga en español online en Australia";
const DESCRIPTION =
  "Terapia de voz en español para adultos en Australia, por videollamada desde Chile con una fonoaudióloga. El horario se coordina según tu zona horaria.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "fonoaudióloga en español Australia",
    "speech pathologist en español",
    "terapia de voz en español",
    "fonoaudióloga online Australia",
    "terapia de voz online Australia",
  ],
});

const faqItems = [
  {
    question: "¿Hay fonoaudióloga en español online para Australia?",
    answer:
      "Sí, para adultos, por videollamada desde Chile. La sesión es en español, con Katia Domínguez, fonoaudióloga. El horario se coordina según tu zona horaria.",
  },
  {
    question: "¿Speech pathologist en español es esta sesión?",
    answer:
      "Sí. Es el término con el que se busca la terapia de voz en español en Australia. La hora es por videollamada desde Chile, para adultos, y se coordina según tu zona horaria.",
  },
  {
    question: "¿Cómo se coordina el horario si Australia está lejos de Chile?",
    answer:
      "La atención publicada es de lunes a viernes, de 10:00 a 18:00, hora de Chile. La hora de la videollamada se coordina según tu zona horaria, por WhatsApp.",
  },
  {
    question: "¿La videollamada reemplaza al otorrino?",
    answer:
      "La terapia de voz acompaña el examen del otorrino. Si la ronquera sigue, te duele hablar o la voz se corta, un médico mira las cuerdas de forma presencial en Australia. Por cámara se escucha cómo hablas.",
  },
];

export default function VozOnlineAustraliaPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Australia"
      quickAnswer="Si en Australia buscas fonoaudióloga en español, speech pathologist en español o terapia de voz en español, la sesión es para adultos, por videollamada desde Chile. Sídney, Melbourne y el resto del país usan esta página. El horario se coordina según tu zona horaria."
      serviceName="Terapia de voz en español para adultos en Australia"
      serviceDescription="Terapia de voz en español por videollamada desde Chile para adultos en Australia. El horario se coordina según la zona horaria."
      areaServed={{ "@type": "Country", name: "Australia" }}
      whatsappMessage="Hola, estoy en Australia y quiero consultar horario para terapia de voz en español."
      hoursPlace="Australia"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos hispanohablantes en Australia que quieren la terapia de voz en español. El
          mapa del servicio está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Speech pathologist en español
        </h2>
        <p>
          En Australia la profesión se busca como speech pathologist. Quien quiere la hora en
          español escribe «speech pathologist en español», «fonoaudióloga en español» o «terapia de
          voz en español». Esta página es esa búsqueda. La sesión sale de Chile, para adultos, con
          Katia Domínguez, fonoaudióloga.
        </p>
        <p>
          El español importa para contar cómo se cansa la voz y qué hábitos la aprietan. La cámara
          escucha cómo hablas. Las cuerdas las mira el otorrino.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Sídney, Melbourne y la distancia</h2>
        <p>
          Sídney, Melbourne, Brisbane y el resto de Australia usan esta videollamada desde Chile.
          La distancia es grande: la hora se coordina según tu zona horaria, por WhatsApp, con la
          franja que te acomoda y con el horario de atención publicado en Chile, de lunes a
          viernes, de 10:00 a 18:00.
        </p>
        <p>
          Cómo se escucha la voz en la primera hora está en la{" "}
          <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link>. Los
          hábitos del día a día, si el plan los incluye, están en la{" "}
          <Link href="/voz-online/higiene-vocal-cuidado-voz">higiene vocal</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Cuándo ver al otorrino allí</h2>
        <p>
          Si la ronquera dura más de dos semanas y no estás resfriado, te duele hablar o la voz se
          apaga, un médico mira las cuerdas en Australia. La terapia de voz online acompaña lo que
          ese examen indique. Si la queja es la calidad de la voz, el marco está en el{" "}
          <Link href="/voz-online/tratamiento-disfonia-online">tratamiento de disfonía</Link>.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
