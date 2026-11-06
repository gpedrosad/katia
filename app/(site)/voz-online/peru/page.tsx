import Link from "next/link";
import { LatamVoiceLinks } from "@/app/(site)/voz-online/_components/LatamVoiceLinks";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/peru";
const TITLE = "Terapia de lenguaje y voz online en Perú";
const DESCRIPTION =
  "Fonoaudióloga y terapia de lenguaje para la voz de adultos en Perú, por videollamada en español desde Chile. La hora se coordina a la hora de Perú.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "terapia de lenguaje Perú",
    "fonoaudióloga online Perú",
    "terapia de voz online Perú",
    "fonoaudiología de la voz",
    "terapeuta de lenguaje voz",
  ],
});

const faqItems = [
  {
    question: "¿Hay terapia de voz online para adultos en Perú?",
    answer:
      "Sí. Es terapia de voz en español, por videollamada desde Chile, con Katia Domínguez, fonoaudióloga. En Perú también se busca como terapia de lenguaje y como fonoaudióloga. El horario se coordina según tu zona horaria.",
  },
  {
    question: "¿Fonoaudióloga y terapia de lenguaje son lo mismo en Perú?",
    answer:
      "En Perú se usan los dos nombres para este campo: fonoaudióloga o fonoaudiólogo, y terapia de lenguaje. En Chile se dice fonoaudióloga. Logopeda es el nombre de España. La sesión de esta página es de voz, para adultos, por videollamada. Las cuerdas las mira un otorrino.",
  },
  {
    question: "¿Cómo se coordina el horario desde Perú?",
    answer:
      "La atención publicada es de lunes a viernes, de 10:00 a 18:00, hora de Chile. Perú usa una sola zona horaria. La hora de la videollamada se acuerda por WhatsApp según esa zona. Esta página no publica un desfase en horas.",
  },
  {
    question: "¿La videollamada reemplaza al otorrino en Perú?",
    answer:
      "La terapia de voz acompaña el examen del otorrino. Si la ronquera sigue, te duele hablar o la voz se corta, ese médico mira las cuerdas de forma presencial. Por cámara se escucha cómo hablas.",
  },
];

export default function VozOnlinePeruPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Perú"
      quickAnswer="Si en Perú buscas terapia de lenguaje, fonoaudióloga o terapia de voz online, la sesión es para adultos, en español, por videollamada desde Chile. Katia Domínguez es fonoaudióloga. Lima, Arequipa y el resto del país usan esta misma página. Perú tiene una sola zona horaria y la hora se coordina según esa zona. Las cuerdas las mira un otorrino."
      serviceName="Terapia de voz online para adultos en Perú"
      serviceDescription="Terapia de voz en español para adultos en Perú, por videollamada desde Chile. El horario se coordina según la zona horaria."
      areaServed={{ "@type": "Country", name: "Perú" }}
      whatsappMessage="Hola, estoy en Perú y quiero consultar horario para terapia de voz online."
      hoursPlace="Perú"
      dateModified="2026-11-06"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos en Perú que quieren terapia de voz por videollamada: ronquera que no cede,
          voz cansada al trabajar o un plan que el otorrino ya dejó en terapia. El mapa está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Terapia de lenguaje y fonoaudióloga
        </h2>
        <p>
          En Perú conviven dos búsquedas: «terapia de lenguaje» y «fonoaudióloga» o
          «fonoaudiólogo». Las dos nombran este campo. En Chile se dice fonoaudióloga. En México
          predomina terapeuta de lenguaje. En España, logopeda. Katia es fonoaudióloga en Chile y
          atiende la voz de adultos por videollamada, en español.
        </p>
        <p>
          La hora no es de lenguaje infantil. Si buscas fonoaudiología para un niño en Chillán, esa
          atención es presencial y está en el párrafo final de esta página. Aquí el tema es la voz
          del adulto: cómo hablas, cómo respiras y qué hábitos te cansan.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Lima, Arequipa y la hora de Perú</h2>
        <p>
          Lima, Arequipa, Trujillo y cualquier otra ciudad entran en la misma videollamada. No hay
          una página por ciudad. Perú usa una sola zona horaria. La atención publicada es de lunes
          a viernes, de 10:00 a 18:00, hora de Chile, y la sesión se coordina según tu zona. No se
          publica un desfase en horas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué se trabaja, y qué no</h2>
        <p>
          En la <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> se
          escucha cómo hablas. La{" "}
          <Link href="/voz-online/higiene-vocal-cuidado-voz">higiene vocal</Link> entra si el plan
          lo pide. Si la voz está ronca, el punto de partida está en{" "}
          <Link href="/voz-online/voz-ronca-causas-tratamiento">voz ronca: causas y tratamiento</Link>
          . El marco de una disfonía está en el{" "}
          <Link href="/voz-online/tratamiento-disfonia-online">tratamiento de disfonía</Link>.
        </p>
        <p>
          La videollamada no mira las cuerdas. Si la ronquera dura más de dos semanas y no estás
          resfriado, si te duele hablar o si la voz se apaga, el otorrino va primero, de forma
          presencial en Perú. La terapia acompaña lo que ese examen indique.
        </p>
        <LatamVoiceLinks omitHref={PATH} />
        <p>
          En Colombia el nombre habitual es fonoaudióloga:{" "}
          <Link href="/voz-online/colombia">fonoaudióloga online de la voz en Colombia</Link>. En
          Argentina,{" "}
          <Link href="/voz-online/argentina">fonoaudióloga online de la voz en Argentina</Link>.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
