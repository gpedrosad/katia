import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/preguntas/que-hace-un-fonoaudiologo-infantil";
const TITLE = "¿Qué es y qué hace un fonoaudiólogo infantil?";
const DESCRIPTION =
  "Fonoaudiólogo infantil: evalúa cómo tu hijo comprende, habla y pronuncia. Qué es una fonoaudióloga infantil en Chillán: primera hora, evaluación e informe.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "qué hace un fonoaudiólogo infantil",
    "fonoaudiólogo infantil",
    "qué es una fonoaudióloga infantil",
    "fonoaudióloga infantil Chillán",
    "evaluación de lenguaje",
    "terapia de habla",
  ],
  ogType: "article",
});

const answer =
  "Un fonoaudiólogo infantil evalúa y trata cómo tu hijo comprende, arma frases y pronuncia. Una fonoaudióloga infantil hace ese mismo trabajo. En Chillán, Katia Domínguez lo hace de forma presencial: la primera hora es una evaluación con informe y, si hace falta, un plan de terapia.";

const queEs =
  "Una fonoaudióloga infantil evalúa y trata cómo un niño comprende, arma frases y pronuncia. En Chillán, Katia Domínguez lo hace de forma presencial. La primera hora es una evaluación con informe y, si hace falta, un plan de terapia.";

export default function QueHaceUnFonoaudiologoInfantilPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="Qué hace"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, quiero saber qué hace la fonoaudióloga infantil y agendar una evaluación en Chillán"
      ctaLabel="Agendar evaluación por WhatsApp"
      related={[
        { href: "/servicios", label: "Servicios de fonoaudiología" },
        {
          href: "/servicios/evaluacion-fonoaudiologica",
          label: "Evaluación fonoaudiológica",
        },
        {
          href: "/servicios/terapia-lenguaje-infantil",
          label: "Terapia de lenguaje infantil",
        },
        {
          href: "/sobre-katia-dominguez-fonoaudiologa-chillan",
          label: "Sobre Katia Domínguez",
        },
      ]}
      tambien={[
        "/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo",
        "/preguntas/puedo-pedir-solo-una-evaluacion",
        "/preguntas/que-preguntar-en-la-primera-visita",
      ]}
      faqs={[
        {
          question: "¿Qué es una fonoaudióloga infantil?",
          answer: queEs,
        },
        {
          question: "¿Atiende solo a niños que no hablan?",
          answer:
            "No. También consulta quien habla y no se le entiende, quien comprende poco, quien no arma frases o quien ya está en el colegio y le cuesta leer o escribir. El motivo lo cuentas tú al escribir.",
        },
        {
          question: "¿La primera hora ya es terapia?",
          answer:
            "La primera hora es una evaluación: entrevista contigo, observación, pruebas según la edad y una devolución preliminar. El informe y la decisión de terapia vienen después de esa sesión.",
        },
        {
          question: "¿Dónde es la atención infantil?",
          answer:
            "La fonoaudiología infantil de Katia Domínguez es presencial en Chillán, de lunes a viernes, de 10:00 a 18:00. La hora se coordina por WhatsApp.",
        },
      ]}
    >
      <h2>¿Qué es una fonoaudióloga infantil?</h2>
      <p>{queEs}</p>
      <h2>Qué se mira en la evaluación</h2>
      <p>
        La consulta parte por lo que tú ves en la casa y por lo que comenta el
        jardín o el colegio. En la sesión se observa cómo tu hijo se comunica
        cuando juega y cuando le piden algo, y se eligen pruebas según la edad
        y el motivo. No es el mismo trabajo si la duda es el vocabulario, la
        comprensión, la pronunciación o la lectura.
      </p>
      <p>
        En lenguaje se mira si entiende lo que le dicen, cuántas ideas logra
        armar y cómo usa las frases en una situación real. En habla se mira si
        los sonidos salen claros y si una persona que no vive con él puede
        seguirlo. Si ya lee o escribe, también puede revisarse la conciencia
        fonológica y la lectoescritura. El detalle de cada vía está en la{" "}
        <Link href="/servicios/evaluacion-del-lenguaje-infantil-chillan">
          evaluación del lenguaje
        </Link>{" "}
        y en la{" "}
        <Link href="/servicios/evaluacion-del-habla-infantil-chillan">
          evaluación del habla
        </Link>
        .
      </p>
      <h2>Qué puede venir después</h2>
      <p>
        Con lo observado se elabora un informe: qué se vio, qué está firme y
        qué conviene apoyar. A veces el paso siguiente es orientación para la
        casa. A veces es terapia de lenguaje, terapia del habla o un trabajo
        de lectoescritura. También hay consultas por retraso del lenguaje,
        retraso del habla, TEL, dislalia, trastorno fonológico, apraxia del
        habla o comunicación en niños con TEA. Cada una tiene su página de
        tratamiento porque el plan no es el mismo.
      </p>
      <p>
        Katia Domínguez lleva más de 20 años en trastornos del habla infantil.
        La atención de niños es presencial en Chillán. Si el colegio pide un
        documento para el PIE o para una escuela de lenguaje, ese informe se
        explica en la página de{" "}
        <Link href="/servicios/informe-fonoaudiologico-pie-chillan">
          informe fonoaudiológico
        </Link>
        .
      </p>
      <h2>Qué haces tú en ese proceso</h2>
      <p>
        Tú cuentas la historia: desde cuándo lo notas, en qué momentos se
        entiende mejor y qué dijo la educadora. Entre sesiones, si hay
        terapia, la práctica entra en la rutina. No se trata de convertir la
        casa en una clase. La guía de{" "}
        <Link href="/recursos/estimular-lenguaje-en-casa">
          terapia de lenguaje en casa
        </Link>{" "}
        ordena esa idea para el día a día.
      </p>
      <p>
        Si quieres ver el conjunto de la consulta antes de escribir, entra a{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          fonoaudióloga infantil en Chillán
        </Link>
        . Ahí está el recorrido de evaluación, informe y terapia.
      </p>
    </PreguntaArticle>
  );
}
