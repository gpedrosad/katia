import Link from "next/link";
import { LatamVoiceLinks } from "@/app/(site)/voz-online/_components/LatamVoiceLinks";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/mexico";
const TITLE = "Terapeuta de lenguaje: voz online en México";
const DESCRIPTION =
  "Terapeuta de lenguaje para la voz de adultos en México, por videollamada en español desde Chile. Hay varias zonas horarias: la hora se coordina a la tuya.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "terapeuta de lenguaje online",
    "terapeuta de lenguaje México",
    "terapia de voz online México",
    "fonoaudióloga online México",
    "terapia de lenguaje voz",
  ],
});

const faqItems = [
  {
    question: "¿Hay terapeuta de lenguaje online para la voz en México?",
    answer:
      "Sí, para adultos. Es terapia de voz en español, por videollamada desde Chile, con Katia Domínguez, fonoaudióloga. En México esta búsqueda suele escribirse «terapeuta de lenguaje». El horario se coordina según tu zona horaria.",
  },
  {
    question: "¿Terapeuta de lenguaje y fonoaudióloga son lo mismo?",
    answer:
      "En México se busca terapeuta de lenguaje o terapia de lenguaje. En Chile la profesión se llama fonoaudióloga. Es el mismo campo con otro nombre. Katia es fonoaudióloga y la sesión de voz es por videollamada. Las cuerdas las mira un otorrino.",
  },
  {
    question: "¿Cómo se coordina el horario si México tiene varias zonas horarias?",
    answer:
      "La atención publicada es de lunes a viernes, de 10:00 a 18:00, hora de Chile. México no usa una sola hora: hay zona centro, Pacífico, noroeste y sureste. La videollamada se acuerda por WhatsApp según la tuya. Esta página no publica un desfase en horas.",
  },
  {
    question: "¿La videollamada reemplaza al otorrino en México?",
    answer:
      "La terapia de voz acompaña el examen del otorrino. Si la ronquera sigue, te duele hablar o la voz se corta, ese médico mira las cuerdas de forma presencial. Por cámara se escucha cómo hablas.",
  },
];

export default function VozOnlineMexicoPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="México"
      quickAnswer="Si en México buscas terapeuta de lenguaje para la voz, la sesión es para adultos, en español, por videollamada desde Chile. Katia Domínguez es fonoaudióloga: en Chile ese es el nombre de la profesión. Ciudad de México, Guadalajara, Monterrey y el resto del país usan esta misma página. México tiene varias zonas horarias y la hora se coordina según la tuya. Las cuerdas las mira un otorrino."
      serviceName="Terapia de voz online para adultos en México"
      serviceDescription="Terapia de voz en español para adultos en México, por videollamada desde Chile. El horario se coordina según la zona horaria."
      areaServed={{ "@type": "Country", name: "México" }}
      whatsappMessage="Hola, estoy en México y quiero consultar horario para terapia de voz online."
      hoursPlace="México"
      dateModified="2026-11-06"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos en México que quieren trabajar la voz por videollamada: ronquera que no se
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
          Terapeuta de lenguaje, terapia de lenguaje y fonoaudióloga
        </h2>
        <p>
          En México la búsqueda de esta profesión se escribe «terapeuta de lenguaje» y «terapia de
          lenguaje». En Chile se dice fonoaudióloga y fonoaudiología. No es otra carrera: es el
          nombre local del mismo campo. Katia es fonoaudióloga en Chile. La sesión de voz es por
          videollamada, en español, para adultos.
        </p>
        <p>
          «Logopeda» es el nombre que se usa en España, no el de México. Si esa fue la palabra que
          buscaste, el glosario está en <Link href="/glosario/logopeda">qué es un logopeda</Link> y
          la página de España en{" "}
          <Link href="/voz-online/espana">logopeda de la voz online en España</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Ciudad de México, Guadalajara y Monterrey
        </h2>
        <p>
          Ciudad de México, Guadalajara, Monterrey y cualquier otra ciudad entran en la misma
          videollamada desde Chile. No hay una página distinta por ciudad. El idioma es el español
          y la hora se coordina según tu zona horaria.
        </p>
        <p>
          México tiene más de una zona horaria: centro, Pacífico, noroeste y sureste. Por eso esta
          página no calcula un desfase fijo con Chile. Escribes por WhatsApp desde qué ciudad te
          conectas y qué franja te acomoda.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué puede hacer la videollamada</h2>
        <p>
          En la <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> se
          escucha cómo hablas, cómo respiras y qué hábitos te cansan la voz. Si ya tienes un
          informe del otorrino, puedes comentarlo en la hora. La cámara no mira las cuerdas.
        </p>
        <p>
          Si la queja es la ronquera, parte por{" "}
          <Link href="/voz-online/voz-ronca-causas-tratamiento">voz ronca: causas y tratamiento</Link>
          . Si la voz cambió de calidad, el marco está en el{" "}
          <Link href="/voz-online/tratamiento-disfonia-online">tratamiento de disfonía</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Cuándo ver al otorrino en México</h2>
        <p>
          Conviene que un médico mire las cuerdas si la ronquera dura más de dos semanas y no estás
          resfriado, si te duele hablar o si la voz se apaga de golpe. Esa revisión es presencial.
          La videollamada desde Chile acompaña la terapia de voz cuando ese examen ya orientó el
          camino.
        </p>
        <LatamVoiceLinks omitHref={PATH} />
        <p>
          En Argentina el nombre de la profesión coincide con el de Chile:{" "}
          <Link href="/voz-online/argentina">fonoaudióloga online de la voz en Argentina</Link>.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
