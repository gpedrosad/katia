import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/preguntas/escuela-de-lenguaje-o-fonoaudiologa";
const TITLE = "¿Escuela de lenguaje o fonoaudióloga particular?";
const DESCRIPTION =
  "Escuela de lenguaje o fonoaudióloga particular: no se excluyen. La evaluación y el informe ayudan a decidir. El establecimiento informa sus requisitos.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "escuela de lenguaje o fonoaudióloga",
    "escuela de lenguaje Chillán",
    "fonoaudióloga particular",
    "escuela de lenguaje TEL",
    "informe fonoaudiológico escuela de lenguaje",
  ],
  ogType: "article",
});

const answer =
  "No tienes que elegir una y descartar la otra. Una escuela de lenguaje es un establecimiento educacional. La fonoaudióloga particular hace la evaluación, la terapia y el informe que a veces piden para postular o para el PIE. En Chillán, esa evaluación ayuda a ver qué corresponde. Los requisitos los informa cada establecimiento.";

export default function EscuelaOFonoPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="Escuela o fonoaudióloga"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, no sé si buscar escuela de lenguaje o fonoaudióloga particular. Quiero una evaluación en Chillán"
      ctaLabel="Agendar la evaluación por WhatsApp"
      related={[
        {
          href: "/servicios/tel-trastorno-especifico-lenguaje",
          label: "TEL: qué es y cómo se acompaña",
        },
        {
          href: "/tratamientos/tel-trastorno-especifico-lenguaje-chillan",
          label: "Tratamiento del TEL en Chillán",
        },
        {
          href: "/servicios/informe-fonoaudiologico-pie-chillan",
          label: "Informe para el PIE o la escuela",
        },
        { href: "/glosario/tel", label: "Qué es el TEL" },
        {
          href: "/agendar-hora-fonoaudiologo-infantil-chillan",
          label: "Agendar la evaluación",
        },
      ]}
      tambien={[
        "/preguntas/el-tel-se-cura",
        "/preguntas/el-jardin-me-derivo-a-fonoaudiologia",
        "/preguntas/el-colegio-pidio-un-informe",
      ]}
      faqs={[
        {
          question: "¿La terapia particular es una escuela de lenguaje?",
          answer:
            "No. La terapia particular es atención en consulta. Una escuela de lenguaje es un establecimiento educacional. El informe de la evaluación puede servir para postular a una escuela de lenguaje o para el PIE. No es lo mismo que atenderse en una escuela.",
        },
        {
          question: "¿Puedo hacer las dos cosas?",
          answer:
            "Sí. No se excluyen. Puedes tener terapia particular y, además, postular a una escuela de lenguaje si el establecimiento lo ofrece. Una no reemplaza a la otra. La evaluación dice qué apoyar; el establecimiento dice si pide informe y cómo se postula.",
        },
        {
          question: "¿El informe asegura un lugar en la escuela?",
          answer:
            "No. El informe documenta la evaluación, las áreas que mostró y un plan. No promete un lugar ni un beneficio. Cada establecimiento informa sus propios requisitos. Esta página no los lista.",
        },
        {
          question: "¿Hay que tener TEL para hacerse esta pregunta?",
          answer:
            "No. La duda aparece cuando el jardín o el colegio hablan de lenguaje, de un informe o de una escuela. El TEL es uno de los cuadros que se miran en la evaluación. No se diagnostica por el nombre del establecimiento.",
        },
        {
          question: "¿Katia atiende en una escuela de lenguaje?",
          answer:
            "No. La atención de Katia Domínguez es la consulta particular, presencial en Chillán: evaluación, terapia e informe cuando corresponde. No es una escuela de lenguaje.",
        },
      ]}
    >
      <h2>Qué es una escuela de lenguaje</h2>
      <p>
        En Chile, una escuela de lenguaje es un establecimiento educacional.
        Las familias suelen escuchar ese nombre cuando hay dificultades de
        lenguaje, como el TEL o el TDL. No es la consulta de una fonoaudióloga
        particular. Para postular, lo que el sitio ya publica es que se pide
        un diagnóstico formal. El resto —cupos, edades, plazos o papeles— lo
        informa el propio establecimiento. Aquí no se lista ninguno.
      </p>
      <p>
        La definición del cuadro que más se cruza con esa decisión está en{" "}
        <Link href="/glosario/tel">qué es el TEL</Link>. Si la pregunta es si
        se cura, la respuesta está en{" "}
        <Link href="/preguntas/el-tel-se-cura">¿el TEL se cura?</Link>.
      </p>

      <h2>Qué hace la fonoaudióloga particular</h2>
      <p>
        En la consulta se hace la evaluación, la terapia si corresponde y el
        informe que a veces piden el colegio, el PIE o una escuela de lenguaje.
        Katia Domínguez atiende de forma presencial en Chillán. Esa hora no es
        una matrícula escolar.
      </p>
      <p>
        El marco del TEL está en{" "}
        <Link href="/servicios/tel-trastorno-especifico-lenguaje">
          el servicio de TEL
        </Link>{" "}
        y el trabajo en la ciudad, en{" "}
        <Link href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan">
          tratamiento del TEL en Chillán
        </Link>
        . Ahí también se separa la terapia particular de la escuela. Qué lleva
        el documento está en el{" "}
        <Link href="/servicios/informe-fonoaudiologico-pie-chillan">
          informe fonoaudiológico para el PIE
        </Link>
        .
      </p>

      <h2>No se excluyen</h2>
      <p>
        Elegir la fonoaudióloga no cierra la puerta a una escuela, y postular
        a una escuela no reemplaza la terapia particular. Son apoyos distintos.
        La evaluación ayuda a decidir qué se está viendo y si hace falta un
        informe. No decide por el establecimiento.
      </p>
      <p>
        Si el jardín ya te pidió consultar, parte por{" "}
        <Link href="/preguntas/el-jardin-me-derivo-a-fonoaudiologia">
          el jardín me derivó a fonoaudiología
        </Link>
        . Si el colegio pidió el papel, la duda está en{" "}
        <Link href="/preguntas/el-colegio-pidio-un-informe">
          el colegio pidió un informe
        </Link>
        . Otras preguntas de padres están en{" "}
        <Link href="/preguntas">el índice de preguntas</Link>.
      </p>

      <h2>Cómo ayuda la evaluación a decidir</h2>
      <p>
        Sin esa hora no hay un perfil ni un informe. En la evaluación se
        conversa con la familia, se observa a tu hijo y se mira el lenguaje
        según la edad. Después se dice si corresponde terapia, orientación o
        un documento para el colegio. Puedes pedirla en{" "}
        <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
          agendar hora en Chillán
        </Link>
        .
      </p>
    </PreguntaArticle>
  );
}
