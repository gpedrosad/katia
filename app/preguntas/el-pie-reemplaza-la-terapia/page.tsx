import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { guiaMetadata } from "@/app/guias-padres/guia-ui";

const PATH = "/preguntas/el-pie-reemplaza-la-terapia";
const TITLE = "¿El PIE reemplaza la terapia particular?";
const DESCRIPTION =
  "El PIE no reemplaza la terapia particular: es apoyo en el colegio. La consulta evalúa, hace terapia y el informe. En Chillán pueden ir juntas.";

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "PIE o fonoaudióloga particular",
    "el PIE reemplaza la terapia",
    "programa de integración escolar fonoaudiología",
    "informe PIE Chillán",
    "terapia particular y colegio",
  ],
});

const answer =
  "No. El PIE es un apoyo dentro del colegio. La terapia particular es la consulta en Chillán: evaluación, terapia e informe. No se reemplazan. Puedes tener las dos. El colegio decide su apoyo. La fonoaudióloga no promete un cupo ni un beneficio.";

export default function PieReemplazaTerapiaPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="PIE y terapia"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, quiero saber si el PIE reemplaza la terapia particular. Busco evaluación en Chillán"
      ctaLabel="Agendar la evaluación por WhatsApp"
      related={[
        {
          href: "/servicios/informe-fonoaudiologico-pie-chillan",
          label: "Informe para el PIE",
        },
        {
          href: "/preguntas/escuela-de-lenguaje-o-fonoaudiologa",
          label: "Escuela de lenguaje o fonoaudióloga",
        },
        {
          href: "/preguntas/el-colegio-pidio-un-informe",
          label: "El colegio pidió un informe",
        },
        {
          href: "/servicios/tel-trastorno-especifico-lenguaje",
          label: "TEL: qué es y cómo se acompaña",
        },
        {
          href: "/agendar-hora-fonoaudiologo-infantil-chillan",
          label: "Agendar la evaluación",
        },
      ]}
      tambien={[
        "/preguntas/escuela-de-lenguaje-o-fonoaudiologa",
        "/preguntas/el-colegio-pidio-un-informe",
        "/preguntas/el-tel-se-cura",
      ]}
      faqs={[
        {
          question: "¿El PIE es una escuela de lenguaje?",
          answer:
            "No. El PIE es un programa de apoyo en el colegio. Una escuela de lenguaje es un establecimiento educacional. No son la misma decisión. La comparación entre escuela y consulta particular está en su página. El establecimiento informa sus requisitos.",
        },
        {
          question: "¿Puedo tener PIE y terapia particular?",
          answer:
            "Sí. No se excluyen. La consulta hace la evaluación, la terapia y el informe. El colegio usa ese documento si lo pide para el PIE. Una no cierra la otra.",
        },
        {
          question: "¿El informe asegura el ingreso al PIE?",
          answer:
            "No. El informe documenta la evaluación, las áreas que mostró y un plan. No promete un lugar ni un beneficio. Cada colegio informa cómo usa el PIE. Esta página no lista cupos ni papeles.",
        },
        {
          question: "¿Hay que dejar la terapia si entra al PIE?",
          answer:
            "No por entrar. El apoyo del colegio y la hora particular responden a cosas distintas. Si ya hay un plan de terapia, la evaluación dice cómo sigue. El colegio no reemplaza esa hora.",
        },
        {
          question: "¿Katia atiende dentro del colegio?",
          answer:
            "No. La atención de Katia Domínguez es la consulta particular, presencial en Chillán: evaluación, terapia e informe cuando corresponde. No es el PIE del establecimiento ni una escuela de lenguaje.",
        },
      ]}
    >
      <h2>Dos apoyos, no uno que reemplace al otro</h2>
      <p>
        El informe para el{" "}
        <Link href="/servicios/informe-fonoaudiologico-pie-chillan">
          PIE y las escuelas de lenguaje
        </Link>{" "}
        se escribe después de evaluar. Sirve cuando el colegio pide un
        documento para orientar el apoyo. No es la terapia. La terapia es la
        hora en que se trabaja el lenguaje o el habla, con un plan.
      </p>
      <p>
        Si la duda es el establecimiento que se llama escuela de lenguaje, y no
        el PIE del colegio donde ya está tu hijo, la página es{" "}
        <Link href="/preguntas/escuela-de-lenguaje-o-fonoaudiologa">
          ¿escuela de lenguaje o fonoaudióloga particular?
        </Link>
        . Ahí se separa la consulta de la matrícula escolar. Aquí la pregunta es
        otra: si el apoyo del colegio alcanza solo.
      </p>

      <h2>Qué hace la consulta particular</h2>
      <p>
        En Chillán, Katia Domínguez evalúa, hace la terapia si corresponde y
        redacta el informe cuando el colegio, el PIE o una escuela lo piden.
        Esa hora no es una clase del establecimiento. El marco del TEL, que
        suele aparecer en estos papeles, está en{" "}
        <Link href="/servicios/tel-trastorno-especifico-lenguaje">
          el servicio de TEL
        </Link>{" "}
        y en{" "}
        <Link href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan">
          el tratamiento del TEL en Chillán
        </Link>
        .
      </p>
      <p>
        Si el colegio ya pidió el papel, parte por{" "}
        <Link href="/preguntas/el-colegio-pidio-un-informe">
          el colegio pidió un informe
        </Link>
        . No lo armes en casa. Si la palabra que usaron fue dislexia, y no
        lenguaje, mira{" "}
        <Link href="/lectoescritura/el-colegio-dice-dislexia">
          el colegio dice dislexia
        </Link>
        .
      </p>

      <h2>Qué no decide esta página</h2>
      <p>
        No lista colegios, cupos, horas de apoyo dentro de la sala ni
        requisitos. Eso lo informa el establecimiento. El glosario de{" "}
        <Link href="/glosario/tel">TEL</Link> define el cuadro. Si la pregunta
        es si se cura, la respuesta está en{" "}
        <Link href="/preguntas/el-tel-se-cura">¿el TEL se cura?</Link>. Ninguna
        de las dos dice que el PIE cierre la terapia.
      </p>

      <h2>Cómo pedir la hora</h2>
      <p>
        Sin la evaluación no hay perfil ni informe. Llegas con lo que dijo el
        colegio y con lo que ves en casa. La hora se agenda en{" "}
        <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
          agendar hora en Chillán
        </Link>
        . Otras preguntas de padres están en{" "}
        <Link href="/preguntas">el índice de preguntas</Link>.
      </p>
    </PreguntaArticle>
  );
}
