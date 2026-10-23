import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/espana";
const TITLE = "Logopedia de la voz online si estás en España";
const DESCRIPTION =
  "Logopedia de la voz para adultos en España, por videollamada desde Chile con una fonoaudióloga. El horario se coordina a tu zona horaria.";

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
    question: "¿La logopedia de la voz online llega a España?",
    answer:
      "Sí, para adultos. Es terapia de voz en español, por videollamada desde Chile, con Katia Domínguez, fonoaudióloga. En España esta profesión se llama logopeda. El horario se coordina según tu zona horaria.",
  },
  {
    question: "¿Hay diferencia si vivo en Madrid o en Barcelona?",
    answer:
      "La sesión es la misma videollamada desde Chile, en español, para adultos. Madrid, Barcelona y el resto de España coordinan el horario según tu zona horaria.",
  },
  {
    question: "¿Cómo se coordina el horario desde España?",
    answer:
      "La atención publicada es de lunes a viernes, de 10:00 a 18:00, hora de Chile. La hora de la videollamada se coordina según tu zona horaria, por WhatsApp.",
  },
  {
    question: "¿La videollamada reemplaza al otorrino en España?",
    answer:
      "La terapia de voz acompaña el examen del otorrinolaringólogo. Si la ronquera sigue, te duele hablar o la voz se corta, ese médico mira las cuerdas de forma presencial. Por cámara se escucha cómo hablas.",
  },
];

export default function VozOnlineEspanaPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="España"
      quickAnswer="Si buscas logopeda o logopedia de la voz en España, la terapia es para adultos, en español, por videollamada desde Chile, con Katia Domínguez, fonoaudióloga. Madrid, Barcelona y el resto del país usan esta misma sesión. El horario se coordina según tu zona horaria."
      serviceName="Terapia de voz online para adultos en España"
      serviceDescription="Logopedia de la voz para adultos en España, por videollamada desde Chile y en español. El horario se coordina según la zona horaria."
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
          . Si el término que escribiste fue logopeda, el nombre de la profesión está en{" "}
          <Link href="/glosario/logopeda">qué es un logopeda</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Logopeda, logopedia de la voz y terapia de voz online
        </h2>
        <p>
          En España la profesión se llama logopeda y la disciplina, logopedia. En Chile se dice
          fonoaudióloga y fonoaudiología. Es el mismo campo con otro nombre. Katia atiende la voz
          de adultos por videollamada desde Chile, en español.
        </p>
        <p>
          La búsqueda «logopedia de la voz» o «terapia de voz online» encaja con el trabajo de la
          sesión: cómo usas la voz, la respiración, la postura y la{" "}
          <Link href="/voz-online/higiene-vocal-cuidado-voz">higiene vocal</Link>. El diagnóstico
          de una lesión lo hace el otorrino, de forma presencial, donde tú vives.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Madrid, Barcelona y el resto de España
        </h2>
        <p>
          Madrid, Barcelona y cualquier otra ciudad entran en la misma videollamada desde Chile.
          El idioma es el español y la hora se coordina según tu zona horaria. Si estás en
          cualquiera de las dos, o en otra ciudad, partes de esta página.
        </p>
        <p>
          Si vives en el Reino Unido y buscas la terapia en español, la página es{" "}
          <Link href="/voz-online/reino-unido">terapia de voz en español en el Reino Unido</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué se hace en la sesión</h2>
        <p>
          En la{" "}
          <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> se escucha
          la voz y se describe cómo hablas. Los ejercicios salen de esa evaluación. Si la queja es
          la calidad de la voz, el marco está en el{" "}
          <Link href="/voz-online/tratamiento-disfonia-online">tratamiento de disfonía</Link>.
        </p>
        <p>
          Si un otorrino en España ya vio una lesión y pidió terapia de voz, la sesión acompaña
          esa indicación. La cámara escucha cómo hablas. Las cuerdas las mira el otorrino.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
