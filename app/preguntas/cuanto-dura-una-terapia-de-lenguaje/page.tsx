import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/preguntas/cuanto-dura-una-terapia-de-lenguaje";
const TITLE = "¿Cuánto dura una terapia de lenguaje?";
const DESCRIPTION =
  "No hay un plazo igual para todos. Depende de la evaluación, las áreas que haya que apoyar, la participación del niño y la práctica en casa.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "cuánto dura una terapia de lenguaje",
    "duración terapia fonoaudiológica",
    "terapia de lenguaje infantil Chillán",
  ],
  ogType: "article",
});

const answer =
  "No hay una duración igual para todos los niños. El plazo se propone después de evaluar a tu hijo y se ajusta según las áreas que haya que apoyar, qué tan acotado sea el objetivo, cómo participa en la sesión y qué se puede practicar en la rutina de la casa. Sin verlo, no corresponde adelantar un tiempo.";

export default function CuantoDuraTerapiaPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="Duración de la terapia"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, quiero una evaluación de lenguaje en Chillán para saber qué plan corresponde"
      ctaLabel="Agendar la evaluación por WhatsApp"
      related={[
        {
          href: "/servicios/terapia-lenguaje-infantil",
          label: "Terapia de lenguaje infantil",
        },
        {
          href: "/recursos/primera-evaluacion-fonoaudiologica-infantil",
          label: "Primera evaluación",
        },
        {
          href: "/servicios/evaluacion-fonoaudiologica",
          label: "Evaluación fonoaudiológica",
        },
        {
          href: "/tratamientos/retraso-del-lenguaje-chillan",
          label: "Retraso del lenguaje en Chillán",
        },
      ]}
      tambien={[
        "/preguntas/puedo-pedir-solo-una-evaluacion",
        "/preguntas/que-hace-un-fonoaudiologo-infantil",
        "/preguntas/que-preguntar-en-la-primera-visita",
      ]}
      faqs={[
        {
          question: "¿Me pueden decir el plazo por WhatsApp, antes de verlo?",
          answer:
            "Se puede escuchar el motivo y la edad para proponerte hora. El estimado de terapia sale de la evaluación, cuando ya se vio qué hay que apoyar y cómo responde tu hijo.",
        },
        {
          question: "¿El plan queda fijo el primer día?",
          answer:
            "La devolución de la evaluación propone un camino. Después se revisa según el avance, la participación en sesión y lo que se logra practicar en la casa.",
        },
        {
          question: "¿La evaluación y la terapia duran lo mismo?",
          answer:
            "No se miden con la misma vara. La primera cita es una evaluación, con su propia guía. La terapia, si corresponde, es un proceso distinto y su largo depende de los factores de esta página.",
        },
      ]}
    >
      <h2>De qué depende el plazo</h2>
      <p>
        Dos niños de la misma edad pueden necesitar apoyos distintos. Por eso
        un número genérico no describe tu caso. Estos son los factores que se
        conversan en la devolución, siempre a partir de lo que mostró la
        evaluación:
      </p>
      <ul>
        <li>
          <strong>Qué áreas aparecen:</strong> comprensión, frases,
          pronunciación, relato o lectoescritura no se trabajan igual.
        </li>
        <li>
          <strong>Qué tan acotado es el objetivo:</strong> un sonido aislado y
          un lenguaje que cuesta en varias situaciones no recorren el mismo
          camino.
        </li>
        <li>
          <strong>Cómo participa tu hijo</strong> en la sesión y si logra
          entrar al juego o a la tarea que se le propone.
        </li>
        <li>
          <strong>Qué se puede practicar en la casa</strong> dentro de la
          rutina, sin convertir cada comida en un ejercicio.
        </li>
        <li>
          <strong>Si el colegio también pide apoyo</strong> y hay que coordinar
          lo que se hace en sala con lo que se hace en consulta.
        </li>
      </ul>
      <p>
        La constancia en casa cambia el proceso. Eso no significa más tareas.
        Significa usar, en momentos breves, lo que se acordó en sesión. La
        gravedad de la dificultad también pesa: no es lo mismo orientar una
        duda acotada que acompañar un trastorno del lenguaje. El estimado
        personalizado se conversa cuando ya hubo evaluación.
      </p>
      <h2>Qué sí puedes saber antes de la hora</h2>
      <p>
        Puedes saber cómo es el primer paso. En Chillán la primera cita con
        Katia Domínguez es una evaluación: entrevista, observación, pruebas
        según la edad y una devolución preliminar. Ahí se dice si corresponde
        terapia y qué objetivo tiene sentido primero. Cómo se vive esa sesión
        está en la guía de la{" "}
        <Link href="/recursos/primera-evaluacion-fonoaudiologica-infantil">
          primera evaluación fonoaudiológica
        </Link>
        .
      </p>
      <p>
        Si ya sabes que el motivo es lenguaje —pocas frases, poco vocabulario
        o poca comprensión— puedes leer{" "}
        <Link href="/servicios/terapia-lenguaje-infantil">
          terapia de lenguaje infantil
        </Link>{" "}
        para ver el tipo de trabajo, y dejar el plazo para la devolución. Si
        el motivo es pronunciación, la página de terapia del habla describe
        otro foco.
      </p>
      <h2>Cómo pedir esa primera evaluación</h2>
      <p>
        Escribe por WhatsApp la edad y el motivo. No hace falta que calcules
        tú un número de sesiones. En la consulta presencial en Chillán,
        lunes a viernes de 10:00 a 18:00, el plan se arma con lo que se
        observe. El marco de la atención está en{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          fonoaudióloga infantil en Chillán
        </Link>
        .
      </p>
    </PreguntaArticle>
  );
}
