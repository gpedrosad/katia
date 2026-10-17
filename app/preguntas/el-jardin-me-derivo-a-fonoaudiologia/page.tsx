import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/preguntas/el-jardin-me-derivo-a-fonoaudiologia";
const TITLE = "El jardín me derivó: ¿qué hago?";
const DESCRIPTION =
  "Si el jardín te pidió consultar, agenda una evaluación en Chillán. Anota qué observaron y llévalo. Esa derivación no es un diagnóstico.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "el jardín me derivó a fonoaudiología",
    "derivación fonoaudiológica jardín infantil",
    "fonoaudióloga Chillán",
  ],
  ogType: "article",
});

const answer =
  "Pide una evaluación. Lo que dice el jardín es una observación de alguien que ve a tu hijo con otros niños, no un diagnóstico. Anota qué te dijeron, lleva ese comentario a la sesión y, si más adelante piden un informe, se elabora después de evaluar en Chillán.";

export default function JardinDerivoPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="Derivación del jardín"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, el jardín me pidió consultar a fonoaudiología y quiero agendar en Chillán"
      ctaLabel="Agendar la evaluación por WhatsApp"
      related={[
        {
          href: "/recursos/primera-evaluacion-fonoaudiologica-infantil",
          label: "Primera evaluación",
        },
        {
          href: "/servicios/informe-fonoaudiologico-pie-chillan",
          label: "Informe para el colegio",
        },
        {
          href: "/recursos/senales-de-alerta-del-lenguaje-y-habla",
          label: "Señales de alerta",
        },
        {
          href: "/agendar-hora-fonoaudiologo-infantil-chillan",
          label: "Agendar hora",
        },
      ]}
      tambien={[
        "/preguntas/necesito-orden-medica-para-fonoaudiologo",
        "/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo",
        "/preguntas/que-preguntar-en-la-primera-visita",
      ]}
      faqs={[
        {
          question: "¿Tengo que estar de acuerdo con la educadora para evaluar?",
          answer:
            "No hace falta que ya compartas la misma conclusión. Basta con que quieras que alguien mire lo que ella vio y lo que tú ves en la casa. La evaluación junta las dos miradas.",
        },
        {
          question: "¿Le digo a mi hijo que va a un examen?",
          answer:
            "Puedes decirle, con palabras simples, que irán a jugar y a conversar con una persona que ayuda a los niños a comunicarse. No hace falta entrenarlo ni repasarle sonidos la noche anterior.",
        },
        {
          question: "¿Y si el jardín nombró PIE o escuela de lenguaje?",
          answer:
            "Anota el nombre de lo que te pidieron y llévalo. El informe para ese trámite se elabora después de la evaluación formal. La página de informe fonoaudiológico explica ese documento.",
        },
      ]}
    >
      <h2>Qué pedirle a la educadora antes de la hora</h2>
      <p>
        Pide ejemplos, no solo la frase «deberías consultar». Te sirve saber
        en qué momento lo notó: en la ronda, cuando da una instrucción, cuando
        tu hijo quiere pedir algo o cuando cuenta lo que hizo. Anota palabras
        textuales si las recuerda. Esos ejemplos valen más que una etiqueta.
      </p>
      <p>
        Pregunta también si lo entiende cuando le habla de a uno, si participa
        con otros niños y si la dificultad es de comprensión, de pronunciación
        o de las dos. Tú no tienes que clasificarlo. Con esa nota, la
        entrevista de la evaluación parte de algo concreto.
      </p>
      <h2>Qué pasa en la consulta</h2>
      <p>
        La primera hora en Chillán es una evaluación. Tú cuentas lo que ves en
        la casa y lo que dijo el jardín. Se observa a tu hijo y se usan
        pruebas según la edad y el motivo. Al cierre hay una devolución
        preliminar: qué se vio y qué paso sigue. El informe escrito, si el
        colegio lo necesita, viene después. El paso a paso está en{" "}
        <Link href="/recursos/primera-evaluacion-fonoaudiologica-infantil">
          qué esperar de la primera evaluación
        </Link>
        .
      </p>
      <p>
        Para pedir hora no necesitas una orden del pediatra. Si la educadora
        te entregó un papel, llévalo. Si solo hubo una conversación en la
        puerta, alcanza con tu resumen.
      </p>
      <h2>Mientras llega el día</h2>
      <p>
        Sigue la rutina. Puedes ofrecer modelos en el juego —repetir tú la
        frase un poco más larga— sin convertir la tarde en práctica. Si
        quieres ideas de ese estilo, están en{" "}
        <Link href="/recursos/estimular-lenguaje-en-casa">
          estimular el lenguaje en casa
        </Link>
        . Si quieres contrastar lo que te dijeron con señales habituales, usa
        la guía de{" "}
        <Link href="/recursos/senales-de-alerta-del-lenguaje-y-habla">
          señales de alerta
        </Link>
        .
      </p>
      <p>
        La atención es presencial en Chillán, con{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          Katia Domínguez, fonoaudióloga infantil
        </Link>
        . En el WhatsApp incluye la edad, el motivo y que la derivación vino
        del jardín.
      </p>
    </PreguntaArticle>
  );
}
