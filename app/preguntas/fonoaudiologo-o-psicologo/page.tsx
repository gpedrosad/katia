import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { guiaMetadata } from "@/app/guias-padres/guia-ui";

const PATH = "/preguntas/fonoaudiologo-o-psicologo";
const TITLE = "¿Fonoaudiólogo o psicólogo para mi hijo?";
const DESCRIPTION =
  "Si la duda es habla, lenguaje o comprensión, parte por fonoaudiología. Si hay angustia o conducta, el psicólogo también cabe. Chillán.";

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "fonoaudiólogo o psicólogo",
    "a quién llevar a mi hijo",
    "lenguaje o emoción",
    "fonoaudióloga Chillán",
  ],
});

const answer =
  "Si lo que te preocupa es que no habla, no se le entiende o no comprende, el primer paso es la fonoaudióloga. El psicólogo entra cuando la duda es de emoción, conducta o ánimo. A veces se necesitan los dos, y uno no reemplaza al otro.";

export default function FonoOPsicologoPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="Fono o psicólogo"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, no sé si llevar a mi hijo a fonoaudiología o a psicología. Quiero orientación en Chillán"
      ctaLabel="Consultar por dónde partir"
      related={[
        { href: "/preguntas/que-hace-un-fonoaudiologo-infantil", label: "Qué hace la fonoaudióloga" },
        { href: "/servicios/evaluacion-fonoaudiologica", label: "Evaluación fonoaudiológica" },
        { href: "/lenguaje-infantil", label: "Guías de lenguaje infantil" },
        { href: "/fonoaudiologa-ninos-chillan", label: "Atención infantil en Chillán" },
      ]}
      tambien={[
        "/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo",
        "/preguntas/puedo-pedir-solo-una-evaluacion",
        "/preguntas/habla-en-casa-y-calla-en-el-jardin",
      ]}
      faqs={[
        {
          question: "¿La fonoaudióloga trata la ansiedad?",
          answer:
            "No. La fonoaudiología mira comunicación, habla y lenguaje. Si hay mucha angustia, cambios de ánimo o una conducta que te preocupa por sí misma, el psicólogo es el profesional de esa parte. Puedes consultar los dos.",
        },
        {
          question: "¿Y si no habla porque está triste?",
          answer:
            "El ánimo puede cambiar las ganas de hablar. Aun así, conviene saber si el lenguaje está disponible cuando está tranquilo. Esa pregunta la responde la evaluación fonoaudiológica, no una suposición.",
        },
      ]}
    >
      <h2>Parte por la duda, no por el título</h2>
      <p>
        «No sé a quién llevarlo» suele mezclar dos listas. En la de
        fonoaudiología están: pocas palabras, frases que no aparecen, un habla
        que no se entiende, instrucciones que no sigue, trabas al hablar o
        lectura que no despega. En la de psicología están: miedo intenso,
        sueño que se quebró, enojo que no calma, o un cambio de ánimo que no
        se explica solo por no poder decir las cosas.
      </p>
      <p>
        Si las dos listas tienen algo, no elijas una y descartes la otra.
        Puedes empezar por la que hoy te quita el sueño y contarle al
        profesional que también estás mirando la otra. En Chillán, la
        evaluación de lenguaje y habla es con{" "}
        <Link href="/fonoaudiologa-ninos-chillan">Katia Domínguez</Link>. Qué
        se hace en esa hora está en{" "}
        <Link href="/preguntas/que-hace-un-fonoaudiologo-infantil">
          qué hace un fonoaudiólogo infantil
        </Link>
        .
      </p>
      <h2>Lo que no decide esta página</h2>
      <p>
        No te dice que tu hijo «es de fono» o «es de psicología». No hay un
        test casero para eso. Si la puerta de entrada es el habla, lee{" "}
        <Link href="/lenguaje-infantil">las guías de lenguaje infantil</Link> y
        pide la{" "}
        <Link href="/servicios/evaluacion-fonoaudiologica">evaluación</Link>.
        Si además el jardín se calla y en casa habla, está la pregunta{" "}
        <Link href="/preguntas/habla-en-casa-y-calla-en-el-jardin">
          habla en casa y calla en el jardín
        </Link>
        .
      </p>
    </PreguntaArticle>
  );
}
