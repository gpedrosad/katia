import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/argentina";
const TITLE = "Fonoaudióloga online de la voz en Argentina";
const DESCRIPTION =
  "Fonoaudióloga online para adultos en Argentina, por videollamada desde Chile. La foniatría médica no es esta hora. Sin matrícula ni obra social.";

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
      "Sí, para adultos, por videollamada desde Chile. Katia Domínguez es fonoaudióloga en Chile. Esta página no afirma matrícula en una provincia argentina ni consulta presencial en Argentina.",
  },
  {
    question: "¿Foniatría y fonoaudiología de la voz son lo mismo?",
    answer:
      "No en esta consulta. La foniatría, como revisión médica de la laringe, la hace un médico. La fonoaudióloga hace la terapia de voz. Katia no es médica ni foniatra. La videollamada no mira las cuerdas por dentro.",
  },
  {
    question: "¿Puedo usar una obra social o prepaga?",
    answer:
      "No está publicado un convenio con obras sociales ni prepagas. Para saber si hay hora se escribe por WhatsApp. Aquí no hay precios ni coberturas.",
  },
  {
    question: "¿El horario es el mismo que en Chile?",
    answer:
      "No publicamos un desfase. La atención publicada es de lunes a viernes, de 10:00 a 18:00, hora de Chile, y la hora se coordina según tu zona horaria.",
  },
  {
    question: "¿Sirve para niños en Argentina?",
    answer:
      "No. La terapia de voz online es para adultos. La atención infantil es presencial en Chillán.",
  },
];

export default function VozOnlineArgentinaPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Argentina"
      quickAnswer="Si buscas fonoaudióloga online, foniatría o terapia de voz online desde Argentina, la sesión es por videollamada desde Chile, para adultos. Katia es fonoaudióloga, no médica. No hay matrícula argentina ni obra social. El horario se coordina según tu zona horaria. Las cuerdas las mira un otorrino allí."
      serviceName="Terapia de voz online para adultos en Argentina"
      serviceDescription="Fonoaudiología de la voz por videollamada desde Chile para adultos en Argentina. No incluye foniatría médica, matrícula local ni obras sociales."
      areaServed={{ "@type": "Country", name: "Argentina" }}
      whatsappMessage="Hola, estoy en Argentina y quiero consultar horario para terapia de voz online."
      hoursPlace="Argentina"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos en Argentina que quieren terapia de voz sin viajar a Chile: ronquera que no
          se va, voz cansada o una lesión que el médico ya explicó y dejó en manos de la terapia.
          El mapa está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Fonoaudióloga online no es lo mismo que foniatría
        </h2>
        <p>
          En Argentina se busca «fonoaudióloga online», «fonoaudiología de la voz» y también
          «foniatría» o «terapia de voz online». Conviene separar las palabras. La fonoaudióloga
          trabaja cómo usas la voz. El médico —otorrino o foniatra— es quien mira la laringe y pone
          el diagnóstico de una lesión. Katia es fonoaudióloga en Chile. No es foniatra y no afirma
          matrícula provincial en Argentina.
        </p>
        <p>
          Si la queja es la ronquera, parte por{" "}
          <Link href="/voz-online/voz-ronca-causas-tratamiento">voz ronca: causas y tratamiento</Link>
          . Esa página no reemplaza el examen. Si la voz cambió de calidad, el marco de la terapia
          está en el{" "}
          <Link href="/voz-online/tratamiento-disfonia-online">tratamiento de disfonía</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué puede hacer la videollamada</h2>
        <p>
          En la{" "}
          <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> se escucha
          cómo hablas, cómo respiras y qué hábitos te cansan la voz. La sesión no ve las cuerdas
          por dentro. Si ya tienes un informe médico, puedes comentarlo en la hora. La terapia no
          cambia ese informe ni promete un resultado.
        </p>
        <p>
          No hay convenio publicado con obras sociales ni prepagas, y no hay precios en esta
          página. La forma de preguntar si hay hora es WhatsApp.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Cuándo ver al otorrino en Argentina</h2>
        <p>
          Antes de tratar la voz como si fuera solo un hábito, conviene que un médico mire las
          cuerdas si la ronquera dura más de dos semanas y no estás resfriado, si te duele hablar o
          si la voz se apaga de golpe. Esa revisión es presencial, en Argentina. La videollamada
          desde Chile no la reemplaza.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
