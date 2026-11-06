import Link from "next/link";
import { LatamVoiceLinks } from "@/app/(site)/voz-online/_components/LatamVoiceLinks";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/colombia";
const TITLE = "Fonoaudióloga online de la voz en Colombia";
const DESCRIPTION =
  "Fonoaudióloga online para adultos en Colombia: terapia de voz en español, por videollamada desde Chile. Una zona horaria; la hora se coordina a la tuya.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "fonoaudióloga online Colombia",
    "fonoaudiología de la voz",
    "terapia de voz online Colombia",
    "fonoaudióloga de la voz",
    "terapia vocal online",
  ],
});

const faqItems = [
  {
    question: "¿Hay fonoaudióloga online de la voz para Colombia?",
    answer:
      "Sí, para adultos. Es terapia de voz en español, por videollamada desde Chile, con Katia Domínguez, fonoaudióloga. En Colombia la profesión se llama fonoaudióloga, igual que en Chile. El horario se coordina según tu zona horaria.",
  },
  {
    question: "¿En Colombia se dice logopeda o fonoaudióloga?",
    answer:
      "Fonoaudióloga. Logopeda es el nombre de España. Terapeuta de lenguaje es la búsqueda más habitual en México. En Colombia y en Chile se dice fonoaudióloga y fonoaudiología. La sesión es de voz, por videollamada. Las cuerdas las mira un otorrino.",
  },
  {
    question: "¿Cómo se coordina el horario desde Colombia?",
    answer:
      "La atención publicada es de lunes a viernes, de 10:00 a 18:00, hora de Chile. Colombia usa una sola zona horaria en todo el país. La hora de la videollamada se acuerda por WhatsApp según esa zona. Esta página no publica un desfase en horas.",
  },
  {
    question: "¿La videollamada reemplaza al otorrino en Colombia?",
    answer:
      "La terapia de voz acompaña el examen del otorrino. Si la ronquera sigue, te duele hablar o la voz se corta, ese médico mira las cuerdas de forma presencial. Por cámara se escucha cómo hablas.",
  },
];

export default function VozOnlineColombiaPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Colombia"
      quickAnswer="Si en Colombia buscas fonoaudióloga online o terapia de voz, la sesión es para adultos, en español, por videollamada desde Chile. Katia Domínguez es fonoaudióloga: en Colombia y en Chile se usa el mismo nombre. Bogotá, Medellín, Cali y el resto del país usan esta página. Colombia tiene una sola zona horaria y la hora se coordina según esa zona. Las cuerdas las mira un otorrino."
      serviceName="Terapia de voz online para adultos en Colombia"
      serviceDescription="Terapia de voz en español para adultos en Colombia, por videollamada desde Chile. El horario se coordina según la zona horaria."
      areaServed={{ "@type": "Country", name: "Colombia" }}
      whatsappMessage="Hola, estoy en Colombia y quiero consultar horario para terapia de voz online."
      hoursPlace="Colombia"
      dateModified="2026-11-06"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos en Colombia que quieren terapia de voz por videollamada: ronquera que se
          queda, voz cansada o una indicación del otorrino para trabajar cómo hablas. El mapa del
          servicio está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Fonoaudióloga en Colombia y en Chile
        </h2>
        <p>
          En Colombia la profesión se llama fonoaudióloga y la disciplina, fonoaudiología. Es el
          mismo nombre que en Chile. No hace falta traducirlo a logopeda: ese término es el de
          España. En México la búsqueda más común es terapeuta de lenguaje. Aquí la palabra que
          coincide es fonoaudióloga.
        </p>
        <p>
          La sesión trabaja cómo usas la voz, la respiración, la postura y la{" "}
          <Link href="/voz-online/higiene-vocal-cuidado-voz">higiene vocal</Link>. El diagnóstico de
          una lesión lo hace el otorrino, de forma presencial, donde tú vives.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Bogotá, Medellín, Cali y la hora</h2>
        <p>
          Bogotá, Medellín, Cali y cualquier otra ciudad entran en la misma videollamada desde
          Chile. No hay una página por ciudad. Colombia usa una sola zona horaria. La hora de
          atención publicada sigue siendo la de Chile, de lunes a viernes, de 10:00 a 18:00, y la
          videollamada se coordina según tu zona. No se publica un desfase fijo.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué se hace en la sesión</h2>
        <p>
          En la <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> se
          escucha la voz y se describe cómo hablas. Si la queja es la calidad de la voz, el marco
          está en el{" "}
          <Link href="/voz-online/tratamiento-disfonia-online">tratamiento de disfonía</Link>. Si la
          ronquera es el motivo, mira{" "}
          <Link href="/voz-online/voz-ronca-causas-tratamiento">voz ronca: causas y tratamiento</Link>
          .
        </p>
        <p>
          Si un otorrino en Colombia ya vio las cuerdas y pidió terapia de voz, la sesión acompaña
          esa indicación. La cámara no reemplaza ese examen.
        </p>
        <LatamVoiceLinks omitHref={PATH} />
        <p>
          El mismo nombre de profesión, en Argentina, está en{" "}
          <Link href="/voz-online/argentina">fonoaudióloga online de la voz en Argentina</Link>. Si
          buscas el término de España, entra por{" "}
          <Link href="/voz-online/espana">logopeda de la voz online en España</Link>.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
