import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/argentina";
const TITLE = "Fonoaudióloga online de la voz en Argentina";
const DESCRIPTION =
  "Fonoaudióloga online para adultos en Argentina: terapia de voz en español, por videollamada desde Chile. El horario se coordina según tu zona horaria.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "fonoaudióloga online",
    "fonoaudióloga online Argentina",
    "foniatría",
    "terapia de voz online",
    "fonoaudiología de la voz",
  ],
});

const faqItems = [
  {
    question: "¿Hay fonoaudióloga online de la voz para Argentina?",
    answer:
      "Sí, para adultos. Es terapia de voz en español, por videollamada desde Chile, con Katia Domínguez, fonoaudióloga. El horario se coordina según tu zona horaria.",
  },
  {
    question: "¿Foniatría y fonoaudiología de la voz son lo mismo?",
    answer:
      "Foniatría suele nombrar la revisión médica de la laringe. La terapia de voz la hace la fonoaudióloga. Katia es fonoaudióloga en Chile y la sesión es por videollamada. Las cuerdas las mira un otorrino.",
  },
  {
    question: "¿Cómo se coordina el horario desde Argentina?",
    answer:
      "La atención publicada es de lunes a viernes, de 10:00 a 18:00, hora de Chile. La hora de la videollamada se coordina según tu zona horaria, por WhatsApp.",
  },
  {
    question: "¿La videollamada reemplaza al otorrino?",
    answer:
      "La terapia de voz acompaña el examen del otorrino. Si la ronquera sigue, te duele hablar o la voz se corta, ese médico mira las cuerdas de forma presencial en Argentina. Por cámara se escucha cómo hablas.",
  },
];

export default function VozOnlineArgentinaPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Argentina"
      quickAnswer="Si buscas fonoaudióloga online, foniatría o terapia de voz online desde Argentina, la sesión es para adultos, en español, por videollamada desde Chile. Katia Domínguez es fonoaudióloga. El horario se coordina según tu zona horaria. Las cuerdas las mira un otorrino."
      serviceName="Terapia de voz online para adultos en Argentina"
      serviceDescription="Terapia de voz en español para adultos en Argentina, por videollamada desde Chile. El horario se coordina según la zona horaria."
      areaServed={{ "@type": "Country", name: "Argentina" }}
      whatsappMessage="Hola, estoy en Argentina y quiero consultar horario para terapia de voz online."
      hoursPlace="Argentina"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos en Argentina que quieren terapia de voz por videollamada: ronquera que no se
          va, voz cansada o una lesión que el médico ya explicó y dejó en manos de la terapia. El
          mapa está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Fonoaudióloga online y foniatría
        </h2>
        <p>
          En Argentina se busca «fonoaudióloga online», «fonoaudiología de la voz», «foniatría» y
          «terapia de voz online». La fonoaudióloga trabaja cómo usas la voz. El médico —otorrino o
          foniatra— mira la laringe y pone el diagnóstico de una lesión. Katia es fonoaudióloga en
          Chile. La sesión es por videollamada, en español.
        </p>
        <p>
          Si la queja es la ronquera, parte por{" "}
          <Link href="/voz-online/voz-ronca-causas-tratamiento">voz ronca: causas y tratamiento</Link>
          . El examen de las cuerdas lo hace el otorrino. Si la voz cambió de calidad, el marco de
          la terapia está en el{" "}
          <Link href="/voz-online/tratamiento-disfonia-online">tratamiento de disfonía</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué puede hacer la videollamada</h2>
        <p>
          En la{" "}
          <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> se escucha
          cómo hablas, cómo respiras y qué hábitos te cansan la voz. Si ya tienes un informe
          médico, puedes comentarlo en la hora. La hora se pide por WhatsApp y se coordina según
          tu zona horaria.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Cuándo ver al otorrino en Argentina</h2>
        <p>
          Conviene que un médico mire las cuerdas si la ronquera dura más de dos semanas y no estás
          resfriado, si te duele hablar o si la voz se apaga de golpe. Esa revisión es presencial.
          La videollamada desde Chile acompaña la terapia de voz cuando ese examen ya orientó el
          camino.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
