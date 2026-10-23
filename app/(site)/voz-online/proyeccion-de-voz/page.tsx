import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/proyeccion-de-voz";
const TITLE = "Proyección de voz para hablar en público";
const DESCRIPTION =
  "Proyectar la voz al hablar en público no es gritar. La terapia online mira respiración y volumen. Adultos en Chile. Si la ronquera sigue, ve al otorrino.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "proyección de voz",
    "hablar en público sin gritar",
    "proyección vocal",
    "terapia de voz online",
    "voz para presentaciones",
  ],
});

const faqItems = [
  {
    question: "¿Qué es proyectar la voz?",
    answer:
      "En esta consulta, proyectar es hacerse oír en una sala o en una reunión sin apretar el cuello ni gritar. No es un tono falso ni un curso de oratoria. El plan sale de la evaluación, por videollamada, para adultos en todo Chile.",
  },
  {
    question: "¿Proyectar es hablar más fuerte?",
    answer:
      "No basta con subir el volumen a la fuerza. Quien grita para que lo escuchen suele cansarse y quedarse ronco. La terapia mira la respiración y el modo de usar la voz. No promete que una charla salga fácil.",
  },
  {
    question: "¿Sirve si doy una charla o hablo en reuniones, y no canto ni hago clases?",
    answer:
      "Sí, ese es el motivo de esta página. Cantantes y locutores tienen su página. Los profesores, otra. El call center y el teletrabajo, otra. Aquí la queja es hacerse oír en público sin vivir de la voz todo el día.",
  },
  {
    question: "¿Me van a pasar una lista de ejercicios?",
    answer:
      "No en frío. Los ejercicios se indican después de la evaluación vocal. Una rutina sacada de internet no reemplaza ese plan.",
  },
  {
    question: "¿Tengo que ver al otorrino antes?",
    answer:
      "Si la ronquera dura más de dos semanas sin resfriado, te duele hablar o la voz se apaga, sí. Proyectar mal no descarta una lesión. La videollamada no mira las cuerdas.",
  },
];

export default function ProyeccionDeVozPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Proyección de voz"
      quickAnswer="Proyectar la voz para hablar en público es hacerse oír sin gritar ni apretar el cuello. La terapia de voz online —adultos, por videollamada, en todo Chile— mira la respiración y el volumen. No es oratoria ni la página de cantantes o de profesores. Si la ronquera se queda, el otorrino mira las cuerdas."
      serviceName="Terapia de voz online para proyección al hablar en público"
      serviceDescription="Acompañamiento fonoaudiológico online para adultos que necesitan proyectar la voz al hablar en público, en todo Chile, sin reemplazar el examen del otorrino."
      areaServed={{ "@type": "Country", name: "Chile" }}
      whatsappMessage="Hola, quiero consultar la terapia de voz online para proyectar la voz al hablar en público."
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos a los que no les alcanza la voz en una charla, una reunión, una exposición
          o una sala, y terminan gritando o quedándose roncos. No hace falta vivir del canto ni
          hacer clases todos los días. El mapa está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Proyectar no es gritar ni impostar</h2>
        <p>
          Subir el volumen a costa del cuello cansa. Impostar, en la página de profesionales, es
          forzar un tono que no es el tuyo. Aquí el objetivo es más acotado: que te escuchen sin
          ese esfuerzo. La sesión mira cómo tomas aire y cómo armas la frase. No es un taller de
          oratoria y no promete seguridad al hablar.
        </p>
        <p>
          Los ejercicios no se entregan como lista. Se indican después de la{" "}
          <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link>. El
          calentamiento general, cuando cabe, ya está explicado en{" "}
          <Link href="/voz-online/ejercicios-para-la-voz">ejercicios para la voz</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Páginas que no son esta</h2>
        <p>
          Si das clases toda la jornada, parte por{" "}
          <Link href="/voz-online/terapia-vocal-docentes-profesores">
            voz cansada en profesores
          </Link>
          . Si cantas o locutas como trabajo, la página es{" "}
          <Link href="/voz-online/rehabilitacion-vocal-profesionales-voz">
            cantantes y locutores
          </Link>
          . Si el día es un call center o reuniones seguidas con audífonos, mira{" "}
          <Link href="/voz-online/voz-en-call-center">voz en call center y teletrabajo</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Cuándo ver al otorrino</h2>
        <p>
          Querer más volumen no explica una ronquera de más de dos semanas, un dolor al hablar o
          una voz que se apaga. Eso lo mira el otorrinolaringólogo. La videollamada no reemplaza
          la nasofibrolaringoscopía. La{" "}
          <Link href="/voz-online/higiene-vocal-cuidado-voz">higiene vocal</Link> entra en el plan
          cuando corresponde, no como reemplazo del examen.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
