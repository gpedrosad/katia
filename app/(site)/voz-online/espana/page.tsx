import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/espana";
const TITLE = "Logopedia de la voz online si estás en España";
const DESCRIPTION =
  "Si buscas logopeda o logopedia de la voz en España, la sesión es por videollamada desde Chile. Sin colegiación ni consulta local. El horario se coordina.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "logopeda de la voz",
    "logopedia de la voz",
    "terapia de voz online",
    "logopeda online España",
    "terapia de voz online España",
  ],
});

const faqItems = [
  {
    question: "¿Una fonoaudióloga de Chile puede hacer logopedia de la voz si estoy en España?",
    answer:
      "La sesión es de terapia de voz, por videollamada y en español. En España esa profesión se llama logopeda. Katia Domínguez es fonoaudióloga en Chile. Esta página no dice que esté colegiada en España ni que sustituya una consulta presencial allí.",
  },
  {
    question: "¿Hay diferencia si vivo en Madrid o en Barcelona?",
    answer:
      "No para esta atención. Madrid, Barcelona y el resto de España entran en la misma videollamada desde Chile. No hay consulta en esas ciudades y el horario se coordina según tu zona horaria, sin un desfase publicado.",
  },
  {
    question: "¿La videollamada reemplaza al otorrino en España?",
    answer:
      "No. Si la ronquera sigue, te duele hablar o la voz se corta, un otorrinolaringólogo tiene que mirar las cuerdas. La terapia de voz acompaña ese examen. Por cámara no se hace una nasofibrolaringoscopía.",
  },
  {
    question: "¿Puedo pagar esto con un seguro de España?",
    answer:
      "No está publicado un convenio con seguros, mutuas ni la sanidad pública. Para saber si hay hora, se escribe por WhatsApp. En esta página no hay precios ni coberturas.",
  },
  {
    question: "¿La logopedia de la voz online sirve para niños en España?",
    answer:
      "No. La terapia de voz online es para adultos. La fonoaudiología infantil de Katia es presencial en Chillán.",
  },
];

export default function VozOnlineEspanaPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="España"
      quickAnswer="Si buscas logopeda o logopedia de la voz en España, la terapia es por videollamada desde Chile, en español, con Katia Domínguez, fonoaudióloga. No hay consulta presencial ni colegiación española. El horario se coordina según tu zona horaria. Las cuerdas las mira un otorrino: la videollamada no las ve."
      serviceName="Terapia de voz online para adultos en España"
      serviceDescription="Logopedia de la voz por videollamada desde Chile para adultos en España. Sin colegiación española ni consulta presencial."
      areaServed={{ "@type": "Country", name: "España" }}
      whatsappMessage="Hola, estoy en España y quiero consultar horario para terapia de voz online."
      hoursPlace="España"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos que están en España y buscan terapia de voz: ronquera que se queda, voz
          cansada, nódulos ya vistos por un médico, o voz que usas para trabajar. El mapa del
          servicio está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          . Si el término que escribiste fue logopeda, la diferencia de nombre está en{" "}
          <Link href="/glosario/logopeda">qué es un logopeda</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Logopeda, logopedia de la voz y terapia de voz online
        </h2>
        <p>
          En España la profesión se llama logopeda y la disciplina, logopedia. En Chile se dice
          fonoaudióloga y fonoaudiología. Es el mismo campo con otro nombre, no un título español
          automático. Katia atiende la voz de adultos por videollamada desde Chile. No afirma estar
          colegiada en un colegio de logopedas de España, ni tiene consulta en Madrid, Barcelona ni
          otra ciudad.
        </p>
        <p>
          La búsqueda «logopedia de la voz» o «terapia de voz online» encaja con el trabajo de la
          sesión: cómo usas la voz, la respiración, la postura y la{" "}
          <Link href="/voz-online/higiene-vocal-cuidado-voz">higiene vocal</Link>. No encaja con un
          diagnóstico de lesión. Eso lo hace el otorrino, de forma presencial, donde tú vives.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Madrid, Barcelona y el resto de España
        </h2>
        <p>
          No hay una página aparte para Madrid ni para Barcelona. La sesión es la misma
          videollamada, el idioma es el mismo y la forma de pedir hora es la misma. Una ficha por
          ciudad solo cambiaría el nombre del lugar. Si estás en cualquiera de las dos, o en otra
          ciudad, partes de esta página.
        </p>
        <p>
          Tampoco es lo mismo que vivir en el Reino Unido y buscar la terapia en español. Si estás
          fuera de España, la página distinta es{" "}
          <Link href="/voz-online/reino-unido">terapia de voz en español en el Reino Unido</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué se hace en la sesión, y qué no</h2>
        <p>
          En la{" "}
          <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> se escucha
          la voz y se describe cómo hablas. Los ejercicios salen de esa evaluación, no de una lista
          genérica. Si la queja es la calidad de la voz, el marco está en el{" "}
          <Link href="/voz-online/tratamiento-disfonia-online">tratamiento de disfonía</Link>.
        </p>
        <p>
          La videollamada no mira las cuerdas por dentro, no promete quitar una ronquera en un
          plazo y no publica precios. Si un otorrino en España ya vio una lesión y pidió terapia de
          voz, la sesión puede acompañar esa indicación. No la reemplaza.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
