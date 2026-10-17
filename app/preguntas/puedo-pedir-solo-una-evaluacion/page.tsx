import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/preguntas/puedo-pedir-solo-una-evaluacion";
const TITLE = "¿Puedo pedir solo una evaluación?";
const DESCRIPTION =
  "Sí. En Chillán la primera hora es una evaluación, no un tratamiento automático. Ahí se decide si hace falta terapia o basta con orientación.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "solo evaluación fonoaudiológica",
    "primera evaluación fonoaudiológica infantil",
    "fonoaudióloga Chillán",
  ],
  ogType: "article",
});

const answer =
  "Sí. La primera hora en Chillán es una evaluación, no el inicio automático de un tratamiento largo. En esa sesión se ve si hace falta terapia, con qué objetivo, o si basta con orientación. No todas las consultas derivan en un tratamiento prolongado.";

export default function SoloEvaluacionPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="Solo evaluación"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, quiero agendar la evaluación fonoaudiológica de mi hijo en Chillán"
      ctaLabel="Agendar la evaluación por WhatsApp"
      related={[
        {
          href: "/recursos/primera-evaluacion-fonoaudiologica-infantil",
          label: "Qué esperar en la primera evaluación",
        },
        {
          href: "/agendar-hora-fonoaudiologo-infantil-chillan",
          label: "Agendar hora",
        },
        {
          href: "/servicios/evaluacion-fonoaudiologica",
          label: "Evaluación fonoaudiológica",
        },
        {
          href: "/servicios/test-de-lenguaje-infantil-chillan",
          label: "Test de lenguaje infantil",
        },
      ]}
      tambien={[
        "/preguntas/que-preguntar-en-la-primera-visita",
        "/preguntas/cuanto-dura-una-terapia-de-lenguaje",
        "/preguntas/necesito-orden-medica-para-fonoaudiologo",
      ]}
      faqs={[
        {
          question: "¿Me van a inscribir en terapia el mismo día?",
          answer:
            "La sesión cierra con una devolución preliminar y una recomendación. La terapia se propone si la evaluación muestra que corresponde. Tú escuchas el plan antes de seguir.",
        },
        {
          question: "¿Siempre hay informe?",
          answer:
            "Sí. Después de la evaluación se elabora un informe con resultados, fortalezas, dificultades y recomendaciones. La familia puede compartirlo con el colegio u otro profesional si lo necesita.",
        },
        {
          question: "¿Qué le digo a mi hijo que va a pasar?",
          answer:
            "Que irán a jugar y a conversar con una profesional que ayuda a los niños a comunicarse. Conviene que esté descansado y en un horario en que suele estar receptivo. No hay que prepararlo con ensayos.",
        },
      ]}
    >
      <h2>Qué incluye esa hora</h2>
      <p>
        La primera cita es la evaluación diagnóstica. Incluye entrevista
        contigo, observación de tu hijo, pruebas adaptadas a la edad y una
        devolución al final. No es un examen que deba aprobar. Es un espacio
        para ver cómo se comunica y explicarte qué se encontró. El relato
        completo está en{" "}
        <Link href="/recursos/primera-evaluacion-fonoaudiologica-infantil">
          primera evaluación fonoaudiológica infantil
        </Link>
        .
      </p>
      <p>
        Según el motivo, el foco puede estar en el lenguaje, en el habla o en
        los dos. Si el colegio pidió pruebas con nombre y apellido, la página
        de{" "}
        <Link href="/servicios/test-de-lenguaje-infantil-chillan">
          test de lenguaje infantil
        </Link>{" "}
        explica ese tipo de evaluación. Tú no tienes que elegir el test antes
        de escribir.
      </p>
      <h2>Qué se decide al terminar</h2>
      <p>
        La evaluación identifica si hay dificultades de lenguaje, habla o
        comunicación y cómo se ven. Con eso se define si corresponde terapia,
        qué objetivo va primero y qué puedes hacer en la casa. También puede
        concluir que, por ahora, basta con orientación y con seguir mirando
        el avance. Esa frase ya está en la guía de la primera evaluación: no
        todas las consultas derivan en un tratamiento prolongado.
      </p>
      <p>
        El informe queda para la familia. Si el colegio lo pide, puedes
        compartirlo. El documento pensado para PIE o escuela de lenguaje tiene
        su propia página, por si la derivación venía con ese nombre.
      </p>
      <h2>Cómo agendar solo ese paso</h2>
      <p>
        Escribe por WhatsApp que quieres la evaluación, la edad y el motivo.
        No necesitas prometer un tratamiento. El horario de atención es de
        lunes a viernes, de 10:00 a 18:00, presencial en Chillán. El texto de
        apoyo para ese mensaje está en{" "}
        <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
          agendar hora
        </Link>
        .
      </p>
      <p>
        Si quieres ver quién hace la evaluación y qué otras líneas atiende,
        entra a{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          fonoaudióloga infantil en Chillán
        </Link>
        .
      </p>
    </PreguntaArticle>
  );
}
