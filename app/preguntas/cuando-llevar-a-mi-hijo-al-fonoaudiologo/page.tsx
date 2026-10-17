import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo";
const TITLE = "¿Cuándo llevar a mi hijo al fonoaudiólogo?";
const DESCRIPTION =
  "Pide hora si la duda persiste, hay varias señales juntas o el jardín lo comenta. En Chillán no necesitas orden médica para agendar.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "cuándo llevar a mi hijo al fonoaudiólogo",
    "cuándo consultar fonoaudiólogo infantil",
    "fonoaudióloga Chillán",
  ],
  ogType: "article",
});

const answer =
  "Llévalo cuando la duda ya no es de un día: varias señales juntas, poco avance, el jardín o el colegio lo comenta, o casi no se le entiende. Para una consulta particular en Chillán no necesitas orden médica. Las edades concretas están en la guía de hitos; esta página es para decidir si pides hora.";

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
      <h2>Qué no responde esta página</h2>
      <p>
        «¿A qué edad debe hablar?» tiene su propia guía:{" "}
        <Link href="/recursos/hitos-del-lenguaje-por-edad">
          hitos del lenguaje por edad
        </Link>
        . Ahí están las referencias por etapa. Aquí la pregunta es otra: si
        con lo que ya ves en tu hijo corresponde pedir una evaluación en
        Chillán.
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
        colegio ya lo mencionó. La primera cita es la evaluación, no un
        tratamiento que empiece sin haberlo visto. El horario de atención es
        de lunes a viernes, de 10:00 a 18:00, presencial en Chillán.
      </p>
      <p>
        El recorrido completo de la consulta está en{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          fonoaudióloga infantil en Chillán
        </Link>
        . Si tu duda es el trámite de la orden o del informe del colegio,
        sigue en la pregunta sobre la orden médica.
      </p>
    </PreguntaArticle>
  );
}
