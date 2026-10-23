import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/australia";
const TITLE = "Fonoaudióloga en español online en Australia";
const DESCRIPTION =
  "Fonoaudióloga o speech pathologist en español en Australia: la terapia es por videollamada desde Chile. Sin Medicare ni licencia local.";

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
      "Sí, para adultos, por videollamada desde Chile. La sesión es en español. No afirma licencia australiana ni un convenio con Medicare.",
  },
  {
    question: "¿Speech pathologist en español es una matrícula de Australia?",
    answer:
      "No. Es el término con el que se busca la ayuda en español. Katia Domínguez es fonoaudióloga en Chile. Esta página no dice que esté registrada como speech pathologist en Australia.",
  },
  {
    question: "¿Sídney o Melbourne tienen consulta?",
    answer:
      "No. Esas ciudades, y el resto de Australia, usan la misma videollamada. No hay una página por ciudad porque no hay oficina local.",
  },
  {
    question: "¿El horario alcanza si Australia está lejos de Chile?",
    answer:
      "No publicamos un desfase. La atención es de lunes a viernes, de 10:00 a 18:00, hora de Chile, y la hora se coordina según tu zona horaria. Si no hay un cruce posible, se dice por WhatsApp.",
  },
  {
    question: "¿La videollamada reemplaza al otorrino?",
    answer:
      "No. Si la ronquera sigue, te duele hablar o la voz se corta, un médico tiene que mirar las cuerdas de forma presencial en Australia. La terapia acompaña ese examen.",
  },
];

export default function VozOnlineAustraliaPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Australia"
      quickAnswer="Si en Australia buscas fonoaudióloga en español, speech pathologist en español o terapia de voz en español, la sesión es por videollamada desde Chile, para adultos. No hay licencia australiana, ni Medicare, ni consulta en Sídney o Melbourne. El horario se coordina según tu zona horaria, sin un desfase publicado."
      serviceName="Terapia de voz en español para adultos en Australia"
      serviceDescription="Terapia de voz en español por videollamada desde Chile para adultos en Australia. Sin licencia australiana, sin Medicare y sin consulta local."
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
          Speech pathologist en español no es un registro local
        </h2>
        <p>
          En Australia la profesión se busca como speech pathologist. Quien quiere la hora en
          español escribe «speech pathologist en español», «fonoaudióloga en español» o «terapia de
          voz en español». Esta página es esa búsqueda. La sesión sale de Chile. No dice que Katia
          esté registrada en Australia ni que Medicare cubra la hora.
        </p>
        <p>
          El español importa para contar cómo se cansa la voz y qué hábitos la aprietan. No
          convierte la videollamada en una revisión de las cuerdas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Sídney, Melbourne y la distancia</h2>
        <p>
          Sídney, Melbourne, Brisbane u otra ciudad no tienen página propia. No hay consulta en
          ninguna. La distancia con Chile es grande y el cruce de horario no se adivina con un
          número fijo: se conversa por WhatsApp, con la franja que a ti te sirve y con el horario
          de atención publicado en Chile.
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
          apaga, un médico tiene que mirar las cuerdas en Australia. La terapia de voz online puede
          acompañar lo que ese examen indique. No lo reemplaza. Si la queja es la calidad de la
          voz, el marco está en el{" "}
          <Link href="/voz-online/tratamiento-disfonia-online">tratamiento de disfonía</Link>.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
