import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/voz-despues-de-un-resfrio";
const TITLE = "La voz no vuelve tras un resfrío o el COVID";
const DESCRIPTION =
  "Si el resfrío o el COVID ya pasó y la voz sigue ronca, el otorrino mira las cuerdas. La terapia online trabaja cómo hablas después. Adultos en Chile.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "voz después de un resfrío",
    "ronquera después del COVID",
    "la voz no vuelve",
    "disfonía después de un resfriado",
    "terapia de voz online",
  ],
});

const faqItems = [
  {
    question: "¿Qué hago si la voz no vuelve después de un resfrío?",
    answer:
      "Si ya pasó el resfrío y la voz sigue ronca, débil o se corta, un otorrino tiene que mirar las cuerdas. La terapia de voz online, para adultos en Chile, trabaja cómo hablas después. No trata el resfrío.",
  },
  {
    question: "¿Y si fue COVID y no un resfrío común?",
    answer:
      "El límite es el mismo. Esta página no trata la infección ni promete recuperar la voz de antes. Si la ronquera se quedó cuando el cuadro ya cedió, el examen de las cuerdas es del otorrino. La videollamada no las ve.",
  },
  {
    question: "¿Cuánto tiempo espero antes de consultar?",
    answer:
      "Si la ronquera lleva más de dos semanas y ya no estás resfriado, no sigas esperando solo. También consulta antes si te duele hablar, te falta el aire o la voz se apaga de golpe.",
  },
  {
    question: "¿En qué se diferencia de la página de ronquera o de la de afonía?",
    answer:
      "La ronquera persistente ordena causas posibles. La afonía es quedarse sin voz, a menudo de golpe. Esta página es otra historia: hubo un resfrío o un COVID, el cuadro bajó y la voz no volvió como antes.",
  },
  {
    question: "¿La terapia online cura el resfrío o el COVID?",
    answer:
      "No. No es un tratamiento de la infección. Si el médico ya miró las cuerdas y la terapia de voz cabe, la sesión trabaja el uso de la voz por videollamada, en todo Chile.",
  },
];

export default function VozDespuesDeUnResfrioPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Voz tras un resfrío"
      quickAnswer="Si el resfrío o el COVID ya pasó y la voz sigue ronca, débil o se corta, el otorrino mira las cuerdas. La terapia de voz online —adultos, por videollamada, en todo Chile— no trata la infección: trabaja cómo hablas después, si ese examen lo permite. No promete que la voz vuelva a ser la de antes."
      serviceName="Terapia de voz online cuando la voz no vuelve tras un resfrío"
      serviceDescription="Acompañamiento fonoaudiológico online para adultos cuya voz no vuelve tras un resfrío o un COVID, en todo Chile, sin tratar la infección ni reemplazar al otorrino."
      areaServed={{ "@type": "Country", name: "Chile" }}
      whatsappMessage="Hola, se me quedó la voz después de un resfrío o COVID y quiero consultar la terapia de voz online."
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos que tuvieron un resfrío, una gripe o un COVID, ya se sienten mejor del
          cuadro, y la voz no. Sigue ronca, sale más débil o se corta al hablar. El mapa está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          No es la página de la ronquera ni la de la afonía
        </h2>
        <p>
          <Link href="/voz-online/voz-ronca-causas-tratamiento">Voz ronca: causas y tratamiento</Link>{" "}
          ordena motivos distintos, entre ellos el mal uso, el reflujo y las lesiones.{" "}
          <Link href="/voz-online/afonia-perdi-la-voz">Me quedé sin voz</Link> es la pérdida, a
          menudo brusca. Aquí el relato es otro: primero hubo una infección de vía aérea y, cuando
          esa parte cedió, la voz no acompañó.
        </p>
        <p>
          El reflujo también puede mantener una ronquera sin que hayas estado resfriado. Si esa es
          la hipótesis que te dio el médico, la página es{" "}
          <Link href="/voz-online/reflujo-y-voz">voz ronca por reflujo</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué no hace la terapia</h2>
        <p>
          No trata el virus, no indica medicamentos y no describe secuelas con cifras. Tampoco
          dice que toda ronquera después de un resfrío sea un hábito. A veces la persona empuja la
          voz mientras todavía está irritada, y eso se puede mirar en la sesión. A veces hay algo
          en las cuerdas que solo se ve con un examen. Las dos cosas pueden existir. La
          videollamada solo alcanza la primera.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Cuándo va el otorrino, y qué sigue</h2>
        <p>
          Si la ronquera lleva más de dos semanas y ya no estás resfriado, si duele hablar o si la
          voz se apaga, el otorrinolaringólogo mira las cuerdas. Después de ese examen, si la
          terapia de voz cabe, la{" "}
          <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> escucha
          cómo hablas. No hay un plazo prometido para recuperar el timbre de antes.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
