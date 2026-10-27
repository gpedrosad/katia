import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo";
const TITLE = "¿Cuándo llevar a mi hijo al fonoaudiólogo?";
const DESCRIPTION =
  "Señales por edad: a los 18 meses sin palabras con significado, a los 2 sin frases de dos, o a los 4 si cuesta entenderlo. Evaluación en Chillán.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "cuándo llevar a mi hijo al fonoaudiólogo",
    "cuándo consultar fonoaudiólogo infantil",
    "fonoaudióloga Chillán",
    "señales por edad para el fonoaudiólogo",
  ],
  ogType: "article",
});

const answer =
  "Conviene consultar si, para su edad, la señal ya está en los hitos: a los 18 meses no hay palabras con significado, a los 2 años no junta dos palabras, o a los 4 cuesta entenderlo. Si hay avance claro y una sola duda menor, no es la misma situación. En consulta particular en Chillán no necesitas orden médica.";

export default function CuandoLlevarPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="Cuándo consultar"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, quiero saber si conviene llevar a mi hijo al fonoaudiólogo en Chillán"
      ctaLabel="Pedir hora por WhatsApp"
      related={[
        {
          href: "/recursos/senales-de-alerta-del-lenguaje-y-habla",
          label: "Señales de alerta",
        },
        {
          href: "/recursos/hitos-del-lenguaje-por-edad",
          label: "Hitos del lenguaje por edad",
        },
        { href: "/sintomas", label: "Síntomas que ven los padres" },
        {
          href: "/agendar-hora-fonoaudiologo-infantil-chillan",
          label: "Agendar hora",
        },
      ]}
      tambien={[
        "/preguntas/el-jardin-me-derivo-a-fonoaudiologia",
        "/preguntas/necesito-orden-medica-para-fonoaudiologo",
        "/preguntas/que-hace-un-fonoaudiologo-infantil",
      ]}
      faqs={[
        {
          question: "¿Tengo que esperar a que cumpla más años?",
          answer:
            "Esperar tiene sentido solo si hay avance claro y una sola duda menor. Si las señales se juntan o llevan tiempo sin cambio, la evaluación ordena el panorama antes de seguir esperando.",
        },
        {
          question: "¿El pediatra tiene que derivarlo primero?",
          answer:
            "Para agendar en consulta particular no es obligatoria una orden médica ni una derivación del colegio. Si más adelante piden un informe, se elabora después de la evaluación.",
        },
        {
          question: "¿Dónde veo las edades del lenguaje?",
          answer:
            "La guía de hitos del lenguaje por edad responde qué suele verse a cada edad. Esta página no reemplaza esa tabla: te ayuda a decidir si pides hora.",
        },
      ]}
    >
      <h2>Señales para dejar de esperar</h2>
      <p>
        Una sola curiosidad, un día malo o un sonido aislado no siempre es
        motivo de consulta. Conviene pedir hora cuando se juntan varias cosas
        y se mantienen: no responde al nombre de forma consistente, no sigue
        instrucciones simples para su edad, habla muy poco, casi nadie lo
        entiende o se frustra mucho al intentar comunicarse. El listado por
        edad, con más detalle, está en{" "}
        <Link href="/recursos/senales-de-alerta-del-lenguaje-y-habla">
          señales de alerta del lenguaje y el habla
        </Link>
        .
      </p>
      <p>
        También pesa lo que dice otra persona que lo ve con niños de su misma
        edad. Si la educadora te comenta que no la sigue, que no participa o
        que cuesta entenderlo en la ronda, anota el ejemplo y tráelo a la
        evaluación. Esa observación no es un diagnóstico. Es información.
      </p>
      <h2>Señales por edad</h2>
      <p>
        «¿A qué edad debe hablar?» tiene su propia guía:{" "}
        <Link href="/recursos/hitos-del-lenguaje-por-edad">
          hitos del lenguaje por edad
        </Link>
        . Esta lista usa solo esas referencias, no un plazo nuevo:
      </p>
      <ul>
        <li>
          A los 18 meses, si no dice ninguna palabra con significado, conviene
          consultar.
        </li>
        <li>
          A los 2 años, la referencia es alrededor de 50 palabras o más y frases
          de dos. Si no combina palabras, conviene mirarlo.
        </li>
        <li>
          Alrededor de los 3 años, muchos niños arman oraciones que extraños
          entienden en gran parte.
        </li>
        <li>
          A los 4 años, si le cuesta expresarse con claridad de forma
          persistente o su habla es poco inteligible, conviene evaluar. La erre
          fuerte puede llegar hacia los 5 o 6, y ese plazo no cubre el resto
          del habla.
        </li>
      </ul>
      <p>
        Aquí la pregunta es otra: si, con lo que ya ves en tu hijo, corresponde
        pedir hora en Chillán.
      </p>
      <p>
        Si ya tienes el síntoma puesto en palabras, mira el índice de{" "}
        <Link href="/sintomas">síntomas</Link>: habla poco, no arma frases, no
        comprende, pronuncia mal o se traba. Esas páginas describen la
        situación. Esta te dice cuándo pasar de la duda a la hora.
      </p>
      <h2>Cómo pedir la hora</h2>
      <p>
        Escribe por WhatsApp la edad, qué te preocupa y si el jardín o el
        colegio ya lo mencionó. La primera cita es la{" "}
        <Link href="/servicios/evaluacion-fonoaudiologica">
          evaluación fonoaudiológica
        </Link>
        , no un tratamiento que empiece sin haberlo visto. El horario de
        atención es de lunes a viernes, de 10:00 a 18:00, presencial en
        Chillán.
      </p>
      <p>
        El recorrido completo de la consulta está en{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          fonoaudiología infantil en Chillán
        </Link>
        . Si tu duda es el trámite de la orden o del informe del colegio,
        sigue en la pregunta sobre la orden médica.
      </p>
    </PreguntaArticle>
  );
}
