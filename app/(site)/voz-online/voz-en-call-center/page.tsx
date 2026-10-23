import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/voz-en-call-center";
const TITLE = "Voz en call center y teletrabajo: terapia online";
const DESCRIPTION =
  "Si hablas todo el día con audífonos o en reuniones, la terapia de voz online mira ritmo e higiene. Adultos en Chile. El otorrino ve las cuerdas.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "voz en call center",
    "voz en teletrabajo",
    "voz cansada por reuniones",
    "terapia de voz online",
    "disfonía call center",
  ],
});

const faqItems = [
  {
    question: "¿La terapia de voz online sirve si trabajo en un call center?",
    answer:
      "Puede servir si eres adulto y la queja es cómo usas la voz en turnos de llamadas. La sesión es por videollamada, en todo Chile. No promete que el turno deje de ser largo ni que el trabajo cambie.",
  },
  {
    question: "¿Es lo mismo que la voz cansada al final del día?",
    answer:
      "No. La voz cansada es la queja general de que la voz no alcanza al terminar la jornada. Esta página es el contexto de call center, audífonos y teletrabajo. Si lo que te pasa es el cansancio al cierre del día, parte por esa otra página.",
  },
  {
    question: "¿Y si no estoy en un call center, pero tengo reuniones todo el día?",
    answer:
      "También puede aplicar. El teletrabajo con videollamadas seguidas es otro uso intenso de la voz, distinto del aula y distinto del canto profesional. El plan sale de la evaluación, no de un guion igual para todos.",
  },
  {
    question: "¿El audífono daña las cuerdas?",
    answer:
      "Esta página no afirma eso. El punto es la cantidad de tiempo hablando, las pocas pausas y el esfuerzo por hacerse oír. Si hay ronquera que se queda, dolor o la voz se corta, el otorrino mira las cuerdas. La videollamada no las ve.",
  },
  {
    question: "¿Atienden este motivo en todo Chile?",
    answer:
      "Sí, si eres adulto. La hora se coordina por WhatsApp. La fonoaudiología infantil sigue siendo presencial en Chillán.",
  },
];

export default function VozEnCallCenterPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Call center y teletrabajo"
      quickAnswer="Si trabajas en un call center o en teletrabajo y hablas durante horas con audífonos o en reuniones, la terapia de voz online —adultos, por videollamada, en todo Chile— mira el ritmo, la respiración y la higiene. No es la página de la voz cansada al final del día ni la de los profesores. El otorrino ve las cuerdas si la ronquera se queda."
      serviceName="Terapia de voz online para call center y teletrabajo"
      serviceDescription="Acompañamiento fonoaudiológico online para adultos que usan la voz en call center o teletrabajo, en todo Chile, sin reemplazar el examen del otorrino."
      areaServed={{ "@type": "Country", name: "Chile" }}
      whatsappMessage="Hola, trabajo en call center o teletrabajo y quiero consultar la terapia de voz online."
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos que pasan el turno hablando: call center, mesa de ayuda, ventas por
          teléfono o un día de reuniones en teletrabajo. El mapa está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          No es la fatiga del final del día, ni la voz del aula
        </h2>
        <p>
          Si la frase que te describe es «al final del día ya no me sale la voz», la página de esa
          queja es{" "}
          <Link href="/voz-online/fatiga-vocal-tratamiento-online">voz cansada</Link>. Esta es el
          lugar de trabajo: audífonos, llamadas seguidas, aire seco, poca agua y la siguiente
          llamada ya en línea.
        </p>
        <p>
          Tampoco es la voz de quien proyecta hacia una sala de clases. Eso está en{" "}
          <Link href="/voz-online/terapia-vocal-docentes-profesores">
            voz cansada en profesores
          </Link>
          . El call center habla cerca del micrófono. El aula habla hacia el fondo de la sala. El
          plan no se copia de una a la otra.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué puede mirar la terapia</h2>
        <p>
          En la videollamada se puede ver cómo te sientas, cómo tomas aire entre una llamada y
          otra y si aprietas el cuello para que te escuchen. La{" "}
          <Link href="/voz-online/higiene-vocal-cuidado-voz">higiene vocal</Link> ya publicada
          incluye agua, no carraspear y no gritar. No hay un resultado prometido ni un plazo para
          que el turno deje de cansar.
        </p>
        <p>
          Si además hablas en una reunión grande y la pregunta es cómo hacerse oír sin forzar, la
          página distinta es{" "}
          <Link href="/voz-online/proyeccion-de-voz">proyección de voz para hablar en público</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Cuándo ver al otorrino primero</h2>
        <p>
          El audífono no es un diagnóstico. Conviene que un otorrinolaringólogo mire las cuerdas
          si:
        </p>
        <ul>
          <li>La ronquera dura más de dos semanas y no estás resfriado.</li>
          <li>Te duele hablar o sientes un nudo que no cede.</li>
          <li>La voz se apaga en medio del turno.</li>
          <li>Ya te dijeron que hay una lesión y nadie la ha vuelto a mirar.</li>
        </ul>
        <p>
          La videollamada no reemplaza la nasofibrolaringoscopía. La terapia no pide que dejes el
          trabajo ni afirma que el empleador pague la hora.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
