import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/preguntas/necesito-orden-medica-para-fonoaudiologo";
const TITLE = "¿Necesito orden médica para ir al fonoaudiólogo?";
const DESCRIPTION =
  "No hace falta orden médica para ir al fonoaudiólogo en consulta particular en Chillán. Si el colegio pide informe, se elabora tras la evaluación.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "orden médica fonoaudiólogo",
    "derivación fonoaudiólogo infantil",
    "agendar fonoaudióloga Chillán",
  ],
  ogType: "article",
});

const answer =
  "No. Para agendar una consulta particular con la fonoaudióloga en Chillán no es obligatoria una orden médica ni una derivación del colegio. Si el jardín, el PIE o el pediatra piden un informe, ese documento se elabora después de la evaluación.";

export default function OrdenMedicaPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="Orden médica"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, quiero agendar una evaluación fonoaudiológica en Chillán"
      ctaLabel="Agendar sin orden por WhatsApp"
      related={[
        {
          href: "/agendar-hora-fonoaudiologo-infantil-chillan",
          label: "Agendar hora",
        },
        {
          href: "/servicios/informe-fonoaudiologico-pie-chillan",
          label: "Informe fonoaudiológico",
        },
        {
          href: "/tratamientos/retraso-del-lenguaje-chillan",
          label: "Retraso del lenguaje",
        },
        {
          href: "/contacto-fonoaudiologa-chillan",
          label: "Contacto",
        },
      ]}
      tambien={[
        "/preguntas/el-jardin-me-derivo-a-fonoaudiologia",
        "/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo",
        "/preguntas/puedo-pedir-solo-una-evaluacion",
      ]}
      faqs={[
        {
          question: "¿Y si el pediatra igual me dio una orden?",
          answer:
            "Tráela a la sesión, junto con cualquier informe previo. Sirve como antecedente. No es un requisito para que te den hora en la consulta particular.",
        },
        {
          question: "¿El informe del colegio se entrega el mismo día?",
          answer:
            "La evaluación incluye una devolución preliminar al cierre. El informe escrito, cuando el colegio o el PIE lo piden, se elabora después y en el plazo que se acuerda en la consulta.",
        },
        {
          question: "¿Qué escribo al pedir hora?",
          answer:
            "La edad de tu hijo, el motivo y si hay derivación del colegio o informes previos. Con eso se propone un horario de lunes a viernes, entre 10:00 y 18:00.",
        },
      ]}
    >
      <h2>Consulta particular y pedido del colegio</h2>
      <p>
        Son dos momentos distintos. El primero es pedir hora porque tú, o la
        educadora, quieren que alguien mire el lenguaje o el habla. Para eso,
        en la consulta particular de Katia Domínguez en Chillán, no se exige
        orden médica. Puedes escribir directo por WhatsApp.
      </p>
      <p>
        El segundo momento aparece cuando un colegio, un PIE o una escuela de
        lenguaje piden un documento con resultados. Ese informe se hace
        después de una evaluación formal, con las pruebas que correspondan a
        la edad y al motivo. Qué cubre y para qué lo piden está en{" "}
        <Link href="/servicios/informe-fonoaudiologico-pie-chillan">
          informe fonoaudiológico
        </Link>
        .
      </p>
      <h2>Qué conviene llevar si ya lo tienes</h2>
      <ul>
        <li>Informes anteriores, si existen.</li>
        <li>El comentario escrito del jardín o del colegio.</li>
        <li>La solicitud del PIE o de la escuela de lenguaje, si te la dieron.</li>
        <li>Una lista breve de ejemplos: qué dice, qué entiende, qué cuesta.</li>
      </ul>
      <p>
        Si no tienes nada de eso, igual puedes evaluar. La entrevista de la
        primera sesión recoge la historia desde lo que tú recuerdas. La guía
        de la primera evaluación detalla la sesión; la página para{" "}
        <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
          agendar hora
        </Link>{" "}
        detalla el mensaje de WhatsApp.
      </p>
      <h2>Por qué esta respuesta está en el sitio</h2>
      <p>
        En el tratamiento de retraso del lenguaje la misma orientación ya
        está dicha: la derivación del médico o del colegio no es obligatoria
        para agendar, y el informe se elabora si el colegio o el PIE lo
        piden. Esta página deja esa respuesta al inicio, para quien busca
        solo el trámite.
      </p>
      <p>
        La atención infantil es presencial en Chillán. El contexto de la
        consulta está en{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          fonoaudióloga infantil en Chillán
        </Link>
        . Si quien te habló fue el jardín y no un médico, la pregunta
        siguiente es qué hacer con esa derivación.
      </p>
    </PreguntaArticle>
  );
}
