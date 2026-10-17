import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/preguntas/es-tarde-consultar-en-basica";
const TITLE = "¿Es tarde consultar en básica?";
const DESCRIPTION =
  "No es tarde. Si en básica cuesta el habla, la lectura o la escritura, una evaluación en Chillán muestra qué apoyo corresponde ahora.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "fonoaudiólogo para niños de básica",
    "es tarde llevar al fonoaudiólogo",
    "lectoescritura Chillán",
    "conciencia fonológica",
  ],
  ogType: "article",
});

const answer =
  "No es tarde. Si en básica todavía cuesta entenderlo, leer, escribir o seguir el lenguaje de la sala, una evaluación fonoaudiológica en Chillán sirve para ver qué apoyo corresponde ahora. Consultar antes es útil. En edad escolar también hay motivo, sobre todo cuando ya aparecen la lectura y la escritura.";

export default function TardeEnBasicaPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="Consultar en básica"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, mi hijo está en básica y quiero una evaluación fonoaudiológica en Chillán"
      ctaLabel="Agendar evaluación por WhatsApp"
      related={[
        {
          href: "/servicios/dificultades-lectoescritura",
          label: "Dificultades de lectoescritura",
        },
        {
          href: "/servicios/conciencia-fonologica-chillan",
          label: "Conciencia fonológica",
        },
        {
          href: "/servicios/informe-fonoaudiologico-pie-chillan",
          label: "Informe para el colegio",
        },
        {
          href: "/servicios/evaluacion-fonoaudiologica",
          label: "Evaluación fonoaudiológica",
        },
      ]}
      tambien={[
        "/preguntas/que-hace-un-fonoaudiologo-infantil",
        "/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo",
        "/preguntas/puedo-pedir-solo-una-evaluacion",
      ]}
      faqs={[
        {
          question: "¿La evaluación de un niño de básica es igual a la de un preescolar?",
          answer:
            "La estructura es la misma: entrevista, observación, pruebas según la edad y devolución. Cambian las pruebas y los objetivos, porque ya hay demandas de sala, lectura y escritura.",
        },
        {
          question: "¿Sirve si el colegio ya tiene PIE?",
          answer:
            "Sirve para tener una evaluación actualizada y un informe que el colegio pueda usar. Qué pide ese documento está en la página de informe fonoaudiológico para PIE.",
        },
        {
          question: "¿Hay que prometer un resultado rápido?",
          answer:
            "No. La evaluación muestra qué apoyo corresponde. El plazo de la terapia, si hace falta, se conversa después de ver a tu hijo y depende de las áreas y de la práctica en casa.",
        },
      ]}
    >
      <h2>Qué se mira cuando ya está en el colegio</h2>
      <p>
        En básica la pregunta de los padres suele mezclar habla y escuela.
        Puede costarle que lo entiendan al leer en voz alta, escribir como
        suena, seguir instrucciones largas o contar lo que pasó en el recreo.
        La evaluación separa esas piezas: lenguaje oral, pronunciación,
        conciencia fonológica y lectoescritura. No se asume que «ya es grande
        y se le va a pasar» ni que todo se resuelve con más lectura en la
        casa.
      </p>
      <p>
        La conciencia fonológica —oír y jugar con los sonidos de las palabras—
        es una de las vías cuando la lectura no despega. Tiene su página en{" "}
        <Link href="/servicios/conciencia-fonologica-chillan">
          conciencia fonológica en Chillán
        </Link>
        . Si el motivo principal es leer o escribir, sigue en{" "}
        <Link href="/servicios/dificultades-lectoescritura">
          dificultades de lectoescritura
        </Link>
        .
      </p>
      <h2>Consultar antes y consultar ahora</h2>
      <p>
        Una duda de lenguaje a los dos o tres años merece mirada temprana.
        Eso no cierra la puerta si tu hijo ya está en primero, segundo o más
        arriba y la dificultad sigue. La evaluación de hoy describe el
        momento actual: qué logra en la sala, qué cuesta y qué plan tiene
        sentido. El informe puede servirle al colegio si piden respaldo para
        el PIE. Ese uso está explicado en{" "}
        <Link href="/servicios/informe-fonoaudiologico-pie-chillan">
          informe fonoaudiológico
        </Link>
        .
      </p>
      <p>
        No hace falta una orden médica para agendar la consulta particular.
        Si el profesor ya escribió un comentario, llévalo. Si solo tienes lo
        que ves en las tareas, también sirve.
      </p>
      <h2>Cómo pedir la hora</h2>
      <p>
        Escribe el curso, la edad y el motivo: habla, lectura, escritura o
        comprensión en la sala. La primera cita es una evaluación presencial
        en Chillán, de lunes a viernes, de 10:00 a 18:00. No tienes que
        llegar con un diagnóstico escolar traducido.
      </p>
      <p>
        El conjunto de la atención infantil está en{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          fonoaudióloga infantil en Chillán
        </Link>
        , con Katia Domínguez. Si todavía dudas si corresponde pedir hora,
        cruza lo que ves con la guía de señales de alerta y decide con
        ejemplos, no con la idea de que el curso «ya pasó».
      </p>
    </PreguntaArticle>
  );
}
