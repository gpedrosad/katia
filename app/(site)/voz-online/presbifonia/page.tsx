import Link from "next/link";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/presbifonia";
const TITLE = "Presbifonía: la voz en la adultez mayor";
const DESCRIPTION =
  "La presbifonía nombra cambios de la voz con la edad. No se diagnostica por videollamada: el otorrino mira las cuerdas. No es deglución ni audición.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "presbifonía",
    "voz en adultos mayores",
    "cambios de la voz con la edad",
    "terapia de voz online",
    "ronquera en el adulto mayor",
  ],
});

const faqItems = [
  {
    question: "¿Qué es la presbifonía?",
    answer:
      "Es el nombre que se usa cuando la voz cambia con la edad: más delgada, más ronca, menos intensa o se cansa antes. Ponerle ese nombre en una videollamada no es un diagnóstico. El otorrino mira las cuerdas.",
  },
  {
    question: "¿La terapia de voz online es para adultos mayores?",
    answer:
      "La terapia de voz online es para adultos, también si ya tienes más edad y la queja es la voz. Es por videollamada, en todo Chile. No es un programa de geriatría ni promete devolver la voz de años atrás.",
  },
  {
    question: "¿También ven deglución o audición?",
    answer:
      "No. Si el problema es atorarse al comer o escuchar menos, esta no es la consulta. Aquí solo se trabaja la voz, y solo después de que el examen médico que corresponda esté claro.",
  },
  {
    question: "¿Es lo mismo que la voz en la menopausia?",
    answer:
      "No. La menopausia es una etapa hormonal. La presbifonía se busca como cambio de la voz asociado a la edad. Pueden coincidir, y cada una tiene su página para no mezclar la queja.",
  },
  {
    question: "¿Cuándo va primero el otorrino?",
    answer:
      "Si la ronquera dura más de dos semanas sin resfriado, te duele hablar, te falta el aire o la voz se apaga. En un adulto mayor eso no se cierra con «es la edad». La videollamada no mira las cuerdas.",
  },
];

export default function PresbifoniaPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Presbifonía"
      quickAnswer="La presbifonía nombra cambios de la voz asociados a la edad. No se diagnostica por videollamada. La terapia de voz online —adultos, también mayores, en todo Chile— trabaja cómo hablas, si el otorrino ya miró las cuerdas. No trata la deglución ni la audición y no promete la voz de antes."
      serviceName="Terapia de voz online ante presbifonía"
      serviceDescription="Acompañamiento fonoaudiológico de la voz por videollamada para adultos mayores en Chile. No diagnostica presbifonía ni trata deglución o audición."
      areaServed={{ "@type": "Country", name: "Chile" }}
      whatsappMessage="Hola, soy adulto mayor y quiero consultar la terapia de voz online por cambios en la voz."
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos mayores, o para quien los acompaña, cuando la voz se oyó más delgada, más
          ronca, menos fuerte o se cansa antes. El servicio de voz online es para adultos en todo
          Chile. El mapa está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          El nombre no es un diagnóstico por cámara
        </h2>
        <p>
          Presbifonía es la palabra con la que se busca ese cambio de la voz asociado a la edad.
          Usarla aquí no significa que la hora online la confirme. Una ronquera en esta etapa
          también puede ser otra cosa. El otorrinolaringólogo mira las cuerdas. La videollamada no
          las ve y no reemplaza la nasofibrolaringoscopía.
        </p>
        <p>
          Si la queja se parece a la ronquera de cualquier edad, parte también por{" "}
          <Link href="/voz-online/voz-ronca-causas-tratamiento">voz ronca: causas y tratamiento</Link>
          . La edad no borra esa revisión.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué sí puede hacer la terapia de voz</h2>
        <p>
          Si el médico ya vio las cuerdas y la terapia de voz cabe, la sesión escucha cómo hablas,
          cómo tomas aire y qué hábitos aprietan la voz. La{" "}
          <Link href="/voz-online/higiene-vocal-cuidado-voz">higiene vocal</Link> —agua, no
          carraspear, no gritar— puede entrar en el plan. La{" "}
          <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link> no
          promete recuperar la voz de hace años. No hay un plazo publicado.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Lo que esta página no ofrece</h2>
        <p>
          No es consulta de deglución. Si hay atoramiento, tos al comer o dificultad para tragar,
          eso se ve con el médico que corresponda, no en esta terapia de voz. Tampoco es una
          evaluación de audición.
        </p>
        <p>
          Si el cambio que notas coincide con la menopausia y no con «la edad» como relato
          principal, la página distinta es{" "}
          <Link href="/voz-online/voz-y-menopausia">voz y menopausia</Link>. Pueden coincidir en la
          misma persona. No se tratan como la misma búsqueda.
        </p>
      </section>
    </VoiceClusterPage>
  );
}
