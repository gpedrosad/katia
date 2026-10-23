import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/canada";
const TITLE = "Fonoaudióloga en español online en Canadá";
const DESCRIPTION =
  "Terapia de voz en español para adultos en Toronto, Montreal y el resto de Canadá, por videollamada desde Chile. No es en francés ni con licencia local.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "fonoaudióloga en español Canadá",
    "terapia de voz en español",
    "speech therapist en español",
    "speech-language pathologist en español",
    "fonoaudióloga online Toronto",
  ],
});

const faqItems = [
  {
    question: "¿Hay fonoaudióloga en español para Toronto o Montreal?",
    answer:
      "Sí, para adultos, por videollamada desde Chile. Toronto y Montreal entran en esta misma página. La sesión es en español. No hay consulta en esas ciudades ni licencia canadiense.",
  },
  {
    question: "¿La terapia es en francés si vivo en Montreal?",
    answer:
      "No. La sesión es en español. No es orthophonie en francés ni un servicio para quien necesita la hora en francés o en inglés.",
  },
  {
    question: "¿Por qué no hay una página solo de Toronto y otra de Montreal?",
    answer:
      "Porque no hay consulta local en ninguna de las dos. La videollamada es la misma. Lo que cambia en Montreal es el idioma de la calle, no el formato de la sesión.",
  },
  {
    question: "¿Puedo usar un seguro de Canadá?",
    answer:
      "No está publicado un convenio con seguros canadienses ni con un plan provincial. Para consultar si hay hora se escribe por WhatsApp. Aquí no hay precios ni coberturas.",
  },
  {
    question: "¿La videollamada reemplaza al otorrino?",
    answer:
      "No. Si la ronquera sigue, te duele hablar o la voz se corta, un médico tiene que mirar las cuerdas de forma presencial. La terapia de voz acompaña ese examen.",
  },
];

export default function VozOnlineCanadaPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Canadá"
      quickAnswer="Si en Canadá buscas fonoaudióloga en español, terapia de voz en español o un speech therapist en español, la sesión es por videollamada desde Chile, para adultos. Toronto y Montreal usan esta misma página. No es una hora en francés ni una licencia canadiense. El horario se coordina según tu zona horaria."
      serviceName="Terapia de voz en español para adultos en Canadá"
      serviceDescription="Terapia de voz en español por videollamada desde Chile para adultos en Canadá. Sin licencia canadiense, sin sesión en francés y sin seguros."
      areaServed={{ "@type": "Country", name: "Canadá" }}
      whatsappMessage="Hola, estoy en Canadá y quiero consultar horario para terapia de voz en español."
      hoursPlace="Canadá"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos hispanohablantes en Canadá que quieren trabajar la voz en español. El mapa
          del servicio está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          . Estados Unidos es otra página:{" "}
          <Link href="/voz-online/estados-unidos">terapia de voz en español en Estados Unidos</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Toronto</h2>
        <p>
          En Toronto la búsqueda mezcla «fonoaudióloga en español», «speech-language pathologist en
          español» y «speech therapist en español». Las tres piden una sesión en español. No hay
          consulta en Toronto. La videollamada sale de Chile y el horario se coordina según tu zona
          horaria, sin un desfase publicado.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Montreal: español, no francés</h2>
        <p>
          En Montreal el día a día puede ser en francés o en inglés. Esta terapia no cambia de
          idioma por eso. Si necesitas orthophonie en francés, esta no es la hora. Si quieres
          explicar la ronquera, el cansancio o los hábitos en español, la sesión sí es en español,
          por videollamada. No hay una ficha aparte de Montreal: no existe una oficina que la
          justifique.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué no afirma esta página</h2>
        <p>
          No hay licencia provincial, no hay convenio con seguros y no hay precios. La{" "}
          <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> escucha
          cómo hablas. Si la queja es la calidad de la voz, mira el{" "}
          <Link href="/voz-online/tratamiento-disfonia-online">tratamiento de disfonía</Link>. El
          otorrino, de forma presencial en Canadá, es quien mira las cuerdas si la ronquera se
          queda, hay dolor o la voz se apaga.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
