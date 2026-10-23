import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/suiza";
const TITLE = "Terapia de voz en español si vives en Suiza";
const DESCRIPTION =
  "Si en Suiza buscas logopeda y quieres la sesión en español, la terapia de voz es por videollamada desde Chile. Sin seguro suizo ni título local.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "logopeda en español Suiza",
    "terapia de voz en español",
    "fonoaudióloga online Suiza",
    "Logopädie auf Spanisch",
    "terapia de voz online Suiza",
  ],
});

const faqItems = [
  {
    question: "¿Hay terapia de voz en español si vivo en Suiza?",
    answer:
      "Sí, para adultos, por videollamada desde Chile. La sesión es en español. No afirma un título suizo ni un convenio con un seguro de Suiza.",
  },
  {
    question: "¿La hora es en alemán, francés o italiano?",
    answer:
      "No. Aunque en Suiza la profesión se busque como Logopädie, logopédie o logopedia, esta sesión es en español. No cambia de idioma según el cantón.",
  },
  {
    question: "¿Zúrich, Ginebra o Basilea tienen consulta?",
    answer:
      "No. Esas ciudades se nombran porque allí hay hispanohablantes, no porque haya una oficina. Todas entran en la misma videollamada.",
  },
  {
    question: "¿En qué se diferencia de la página de Alemania?",
    answer:
      "Alemania es otro país. Allá la búsqueda parte de la Logopädie en un entorno en alemán. En Suiza el día a día puede ser en alemán, francés o italiano, y la sesión que ofrece esta página sigue siendo solo en español.",
  },
  {
    question: "¿La videollamada reemplaza al otorrino?",
    answer:
      "No. Si la ronquera sigue, te duele hablar o la voz se corta, un médico tiene que mirar las cuerdas de forma presencial en Suiza. La terapia acompaña ese examen.",
  },
];

export default function VozOnlineSuizaPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Suiza"
      quickAnswer="Si vives en Suiza y buscas logopeda o terapia de voz en español, la sesión es por videollamada desde Chile, para adultos. No importa si el cantón habla alemán, francés o italiano: la hora es en español. No hay título suizo, ni seguro, ni consulta en Zúrich o Ginebra. El horario se coordina según tu zona horaria."
      serviceName="Terapia de voz en español para adultos en Suiza"
      serviceDescription="Terapia de voz en español por videollamada desde Chile para adultos en Suiza. Sin título suizo, sin seguros y sin consulta local."
      areaServed={{ "@type": "Country", name: "Suiza" }}
      whatsappMessage="Hola, estoy en Suiza y quiero consultar horario para terapia de voz en español."
      hoursPlace="Suiza"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos hispanohablantes en Suiza que quieren la terapia de voz en español. El
          trabajo puede ser en otro idioma. La sesión, si la pides aquí, no. El mapa está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Un país con varios idiomas, una sesión en español
        </h2>
        <p>
          En Suiza al profesional se le busca como Logopädie, logopédie o logopedia, según la
          región. Quien escribe en español busca «logopeda en español», «fonoaudióloga online» o
          «terapia de voz en español». Esta página es esa última búsqueda. Katia es fonoaudióloga
          en Chile. No afirma un reconocimiento suizo ni que la hora reemplace la logopedia
          presencial del cantón.
        </p>
        <p>
          Zúrich, Ginebra, Basilea, Lausana o Berna no tienen URL propia. Nombrarlas sirve para
          decir que no hay oficina en ninguna. La videollamada es la misma.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">No es la página de Alemania ni la de España</h2>
        <p>
          Si vives en Alemania, el término y el país son otros:{" "}
          <Link href="/voz-online/alemania">terapia de voz en español si vives en Alemania</Link>.
          Si vives en España y logopeda es el nombre local de la profesión, no el de alguien que
          trabaja en otro idioma durante el día, usa{" "}
          <Link href="/voz-online/espana">logopedia de la voz online si estás en España</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué se hace en la hora</h2>
        <p>
          La <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> escucha
          cómo hablas. No hay precios ni cobro a un seguro suizo. El español de la sesión sirve
          para contar el cansancio y los hábitos con precisión. No sirve para ver las cuerdas. Si
          la ronquera sigue más de dos semanas sin resfriado, hay dolor o la voz se apaga, el
          otorrino va primero, de forma presencial.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
