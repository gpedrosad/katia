import Link from "next/link";
import { LatamVoiceLinks } from "@/app/(site)/voz-online/_components/LatamVoiceLinks";
import { VoiceClusterPage } from "@/app/(site)/voz-online/_components/VoiceClusterPage";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/voz-online/logopedia-online-adultos";
const TITLE = "Consulta de logopedia online de voz para adultos";
const DESCRIPTION =
  "Consulta de logopedia online para adultos, centrada en la voz: videollamada en español desde Chile, con horario coordinado a tu zona horaria.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "consulta de logopedia online",
    "consulta de logopedia adultos online",
    "logopedia online adultos",
    "logopeda adulto",
    "logopeda para adultos online",
    "logopedia de la voz online",
  ],
});

const faqItems = [
  {
    question: "¿Puedo hacer logopedia online siendo adulto?",
    answer:
      "Sí. La consulta online de Katia Domínguez, fonoaudióloga, es justamente para adultos y se centra en la voz: ronquera que se queda, voz cansada, disfonía o la voz que usas para trabajar. Es en español, por videollamada desde Chile.",
  },
  {
    question: "¿Logopeda y fonoaudióloga es lo mismo?",
    answer:
      "Sí, es la misma profesión con distinto nombre. En España y otros países se dice logopeda y logopedia; en Chile, fonoaudióloga y fonoaudiología. Katia es fonoaudióloga y en la consulta online atiende la voz de adultos.",
  },
  {
    question: "¿Qué problemas de voz se trabajan online?",
    answer:
      "Entre otros: ronquera que no se va, voz cansada o fatiga vocal, disfonía, nódulos o pólipos ya vistos por un otorrino, la voz que usas para trabajar y los cambios de la voz con los años. El plan de trabajo sale de la evaluación vocal online.",
  },
  {
    question: "¿La consulta online sirve para otros temas de logopedia?",
    answer:
      "La consulta online de Katia es de voz para adultos. Si buscas logopedia por otro motivo, como lenguaje infantil u otros temas que no son la voz, esta consulta no es la indicada.",
  },
  {
    question: "¿Cómo se coordina el horario?",
    answer:
      "La atención publicada es de lunes a viernes, de 10:00 a 18:00, hora de Chile. La hora de la videollamada se coordina según tu zona horaria, por WhatsApp.",
  },
  {
    question: "¿Cómo es la primera consulta?",
    answer:
      "La primera consulta es una evaluación vocal online: se escucha tu voz, se conversa sobre cómo la usas en tu día a día y se describe cómo hablas. Si un otorrino ya te examinó, se toma en cuenta su indicación. De esa evaluación sale el plan de trabajo.",
  },
];

export default function LogopediaOnlineAdultosPage() {
  return (
    <VoiceClusterPage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumb="Logopedia online adultos"
      quickAnswer="La consulta de logopedia online para adultos es terapia de voz en español, por videollamada desde Chile, con Katia Domínguez, fonoaudióloga (en España y otros países, la profesión se llama logopeda). Se trabaja la voz: ronquera, voz cansada, disfonía o la voz que usas para trabajar. El horario se coordina a tu zona horaria."
      serviceName="Consulta de logopedia online de voz para adultos"
      serviceDescription="Logopedia de la voz para adultos por videollamada desde Chile, en español: evaluación vocal online y sesiones de terapia de voz. El horario se coordina según la zona horaria de cada persona."
      areaServed={[
        { "@type": "Country", name: "España" },
        { "@type": "Country", name: "Argentina" },
        { "@type": "Country", name: "México" },
        { "@type": "Country", name: "Colombia" },
        { "@type": "Country", name: "Perú" },
        { "@type": "Country", name: "Estados Unidos" },
      ]}
      whatsappMessage="Hola, busco una consulta de logopedia online para adultos (voz) y quiero consultar horario."
      hoursPlace="tu país"
      dateModified="2026-11-26"
      faq={faqItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-sky-950">
          Qué es la consulta de logopedia online para adultos
        </h2>
        <p>
          Es una consulta de logopedia centrada en la voz, pensada para personas adultas y hecha por
          videollamada. La atiende Katia Domínguez, fonoaudióloga, desde Chile y en español. Trabaja
          cómo usas la voz: la respiración, la postura, el esfuerzo al hablar y los hábitos que la
          cuidan o la cansan.
        </p>
        <p>
          Si escribiste «consulta de logopedia online» pensando en tu voz, estás en el lugar
          correcto. El mapa completo del servicio está en{" "}
          <Link href="/voz-online/fonoaudiologa-de-voz-online">
            terapia de voz online para adultos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">¿Logopeda o fonoaudióloga?</h2>
        <p>
          Es la misma profesión con otro nombre. En España y en otros países se dice logopeda y
          logopedia; en Chile, fonoaudióloga y fonoaudiología. Si buscabas un logopeda para adultos,
          la fonoaudióloga hace ese mismo trabajo. El detalle del término está en{" "}
          <Link href="/glosario/logopeda">qué es un logopeda</Link>.
        </p>
        <p>
          La consulta online de Katia es de voz para adultos. Si el motivo de tu búsqueda es otro
          tema de logopedia que no es la voz, esta consulta no es la indicada.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Problemas de voz que se trabajan</h2>
        <p>Estos son algunos motivos de consulta frecuentes, cada uno con su propia guía:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Ronquera que se queda:{" "}
            <Link href="/voz-online/voz-ronca-causas-tratamiento">voz ronca, causas y terapia</Link>{" "}
            y{" "}
            <Link href="/voz-online/tratamiento-disfonia-online">tratamiento de la disfonía</Link>.
          </li>
          <li>
            Voz que se cansa al final del día:{" "}
            <Link href="/voz-online/fatiga-vocal-tratamiento-online">fatiga vocal</Link>.
          </li>
          <li>
            Te quedaste sin voz:{" "}
            <Link href="/voz-online/afonia-perdi-la-voz">afonía</Link> y{" "}
            <Link href="/voz-online/voz-despues-de-un-resfrio">
              la voz que no vuelve después de un resfrío
            </Link>
            .
          </li>
          <li>
            Lesiones ya vistas por un otorrino:{" "}
            <Link href="/voz-online/nodulos-vocales-tratamiento-online">nódulos vocales</Link>,{" "}
            <Link href="/voz-online/polipos-en-las-cuerdas-vocales">
              pólipos en las cuerdas vocales
            </Link>{" "}
            y{" "}
            <Link href="/voz-online/paralisis-cordal-rehabilitacion-online">
              rehabilitación de la parálisis cordal
            </Link>
            .
          </li>
          <li>
            Voz apretada por tensión:{" "}
            <Link href="/voz-online/disfonia-por-estres">disfonía por estrés</Link> y{" "}
            <Link href="/voz-online/disfonia-espasmodica">disfonía espasmódica</Link>.
          </li>
          <li>
            Ronquera relacionada con el estómago:{" "}
            <Link href="/voz-online/reflujo-y-voz">reflujo y voz</Link>.
          </li>
          <li>
            Cambios de la voz con los años:{" "}
            <Link href="/voz-online/voz-y-menopausia">voz y menopausia</Link> y{" "}
            <Link href="/voz-online/presbifonia">presbifonía</Link>.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Cómo es la consulta</h2>
        <p>
          Se parte con una{" "}
          <Link href="/voz-online/evaluacion-vocal-online">evaluación vocal online</Link>: se escucha
          tu voz, se conversa sobre cómo la usas y se describe cómo hablas. De ahí sale el plan de
          trabajo.
        </p>
        <p>
          En las sesiones siguientes se practican los ejercicios que corresponden a tu caso y se
          revisan hábitos de{" "}
          <Link href="/voz-online/higiene-vocal-cuidado-voz">higiene vocal</Link>. El paso a paso
          está en{" "}
          <Link href="/voz-online/como-es-la-sesion-de-voz-online">
            cómo es la sesión de voz online
          </Link>
          , los{" "}
          <Link href="/voz-online/ejercicios-para-la-voz">ejercicios para la voz</Link> se ajustan
          después de la evaluación, y la duración del proceso se explica en{" "}
          <Link href="/voz-online/cuanto-dura-la-terapia-de-voz">
            cuánto dura la terapia de voz
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Para quién es</h2>
        <p>
          Para adultos que hablan español y quieren cuidar o recuperar su voz, en especial si la voz
          es parte de su trabajo:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Docentes y profesores:{" "}
            <Link href="/voz-online/terapia-vocal-docentes-profesores">
              terapia vocal para docentes
            </Link>
            .
          </li>
          <li>
            Profesionales de la voz:{" "}
            <Link href="/voz-online/rehabilitacion-vocal-profesionales-voz">
              rehabilitación vocal para profesionales de la voz
            </Link>{" "}
            y{" "}
            <Link href="/voz-online/proyeccion-de-voz">proyección de voz</Link> para hablar en
            público.
          </li>
          <li>
            Call center y teletrabajo:{" "}
            <Link href="/voz-online/voz-en-call-center">voz en call center</Link>.
          </li>
          <li>
            Adultos mayores que notan su voz más débil o distinta:{" "}
            <Link href="/voz-online/presbifonia">presbifonía</Link>.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Coordinación con tu otorrino</h2>
        <p>
          La terapia de voz acompaña el examen del otorrinolaringólogo. El diagnóstico de una lesión
          en las cuerdas vocales lo hace el otorrino, de forma presencial, donde tú vives. Si la
          ronquera sigue, te duele hablar o la voz se corta, ese médico mira las cuerdas.
        </p>
        <p>
          Si un otorrino ya te examinó y te indicó terapia de voz, la consulta online sigue esa
          indicación. Por cámara se escucha cómo hablas; las cuerdas las mira el otorrino.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">Qué necesitas para la videollamada</h2>
        <p>
          Como referencia práctica: un computador, tablet o celular con cámara y micrófono, una
          conexión a internet estable y un lugar tranquilo donde puedas hablar con tu voz de
          siempre. Si tienes el informe o la indicación de tu otorrino, tenlo a mano para la primera
          consulta. Los detalles de la videollamada se coordinan por WhatsApp.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-950">En español, desde cualquier país</h2>
        <p>
          La consulta es la misma videollamada desde Chile, en español, y la hora se coordina a tu
          zona horaria. Si quieres ver la página de tu país:{" "}
          <Link href="/voz-online/espana">España</Link>,{" "}
          <Link href="/voz-online/argentina">Argentina</Link>,{" "}
          <Link href="/voz-online/mexico">México</Link>,{" "}
          <Link href="/voz-online/colombia">Colombia</Link>,{" "}
          <Link href="/voz-online/peru">Perú</Link>,{" "}
          <Link href="/voz-online/estados-unidos">Estados Unidos</Link> (y{" "}
          <Link href="/voz-online/miami">Miami</Link>),{" "}
          <Link href="/voz-online/canada">Canadá</Link>,{" "}
          <Link href="/voz-online/reino-unido">Reino Unido</Link>,{" "}
          <Link href="/voz-online/alemania">Alemania</Link>,{" "}
          <Link href="/voz-online/suiza">Suiza</Link> y{" "}
          <Link href="/voz-online/australia">Australia</Link>.
        </p>
        <p>
          Si tu país no aparece, el funcionamiento general está en{" "}
          <Link href="/voz-online/terapia-de-voz-desde-otro-pais">
            terapia de voz desde otro país
          </Link>
          .
        </p>
        <LatamVoiceLinks />
      </section>
    </VoiceClusterPage>
  );
}
