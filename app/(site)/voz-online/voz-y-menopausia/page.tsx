import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/voz-y-menopausia";
const TITLE = "Voz y menopausia: cambios y terapia de voz";
const DESCRIPTION =
  "Si notas la voz distinta en la menopausia, la terapia online trabaja cómo hablas. No diagnostica hormonas. El otorrino ve las cuerdas. Adultos en Chile.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "voz y menopausia",
    "cambios de la voz en la menopausia",
    "ronquera en la menopausia",
    "terapia de voz online",
    "voz y hormonas",
  ],
});

const faqItems = [
  {
    question: "¿La menopausia puede cambiar la voz?",
    answer:
      "Algunas adultas notan la voz más seca, más ronca, menos estable o con otro tono en esa etapa. Eso no se confirma por videollamada. El médico ve el tema hormonal. Si la ronquera se queda, el otorrino mira las cuerdas.",
  },
  {
    question: "¿La terapia de voz online trata las hormonas?",
    answer:
      "No. No diagnostica menopausia, no indica hormonas y no promete que la voz vuelva a ser la de antes. Trabaja cómo hablas, la respiración y la higiene vocal, por videollamada, para adultas en todo Chile.",
  },
  {
    question: "¿Es lo mismo que la presbifonía?",
    answer:
      "No. La presbifonía es el nombre que se usa para cambios de la voz asociados a la edad. La menopausia es una etapa hormonal y no le ocurre solo a quien ya se define como adulto mayor. Pueden coincidir en la misma persona, y aun así son búsquedas distintas.",
  },
  {
    question: "¿Cuándo veo al otorrino?",
    answer:
      "Si la ronquera dura más de dos semanas sin resfriado, te duele hablar o la voz se apaga. Una ronquera no se archiva como «es la menopausia» sin que alguien mire las cuerdas. La videollamada no las ve.",
  },
  {
    question: "¿Atienden este motivo en todo Chile?",
    answer:
      "Sí, si eres adulta. La hora se coordina por WhatsApp. La fonoaudiología infantil sigue siendo presencial en Chillán.",
  },
];

export default function VozYMenopausiaPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Voz y menopausia"
      quickAnswer="Si en la menopausia notas la voz más seca, ronca o distinta, la terapia de voz online —adultas, por videollamada, en todo Chile— trabaja cómo hablas y la higiene. No diagnostica hormonas ni promete un resultado. El médico ve esa parte. Si la ronquera se queda, el otorrino mira las cuerdas: la videollamada no las ve."
      serviceName="Terapia de voz online ante cambios de la voz en la menopausia"
      serviceDescription="Acompañamiento fonoaudiológico online para adultas que notan cambios de la voz en la menopausia, en todo Chile, sin diagnosticar hormonas ni reemplazar al otorrino."
      areaServed={{ "@type": "Country", name: "Chile" }}
      whatsappMessage="Hola, noté cambios en la voz en la menopausia y quiero consultar la terapia de voz online."
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultas que relacionan un cambio de la voz con la menopausia o con otra etapa
          hormonal, y quieren saber qué puede hacer la terapia de voz. El mapa está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué se puede decir, y qué no</h2>
        <p>
          Algunas personas cuentan la voz más seca, con menos estabilidad, más ronca o en un tono
          que no reconocen. Esa descripción no es un diagnóstico. Esta consulta no pide exámenes
          hormonales, no indica tratamientos médicos y no afirma que la hormona sea la causa. Eso
          lo conversas con tu médico.
        </p>
        <p>
          La terapia mira lo que sí se puede trabajar por videollamada: cómo tomas aire, si
          aprietas el cuello, si carraspeas y cómo está tu{" "}
          <Link href="/voz-online/higiene-vocal-cuidado-voz">higiene vocal</Link>. No hay un plazo
          prometido para que la voz «vuelva».
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Menopausia no es lo mismo que presbifonía
        </h2>
        <p>
          Si la búsqueda es el cambio de la voz con la edad, la página distinta es{" "}
          <Link href="/voz-online/presbifonia">presbifonía: la voz en la adultez mayor</Link>. Una
          persona puede estar en las dos situaciones. Aun así, la menopausia no se explica como «es
          la edad» y la presbifonía no se trata aquí como un tema hormonal.
        </p>
        <p>
          Si la queja principal es la ronquera, sin importar la etapa, parte también por{" "}
          <Link href="/voz-online/voz-ronca-causas-tratamiento">voz ronca: causas y tratamiento</Link>
          . Esa página no cierra la causa.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Cuándo va primero el otorrino</h2>
        <p>
          Una ronquera de más de dos semanas, sin resfriado, no se atribuye a la menopausia sin
          examen. También si duele hablar o la voz se apaga. El otorrinolaringólogo mira las
          cuerdas. En la{" "}
          <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> se
          escucha cómo hablas. Esa hora no reemplaza la nasofibrolaringoscopía.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
