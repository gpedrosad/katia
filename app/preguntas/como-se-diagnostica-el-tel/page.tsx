import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/preguntas/como-se-diagnostica-el-tel";
const TITLE = "¿Cómo se diagnostica el TEL en niños?";
const DESCRIPTION =
  "El TEL no sale de un comentario del colegio ni de un solo test. Lo define la fonoaudióloga al evaluar. En Chillán, después: terapia o informe.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "cómo se diagnostica el TEL",
    "tel diagnóstico",
    "evaluación TEL niños",
    "diagnóstico trastorno específico del lenguaje",
    "fonoaudióloga TEL Chillán",
  ],
  ogType: "article",
});

const answer =
  "El TEL se diagnostica con una evaluación fonoaudiológica, no con un solo test ni con lo que comenta el colegio. En Chillán, la fonoaudióloga entrevista a la familia, observa a tu hijo y revisa el lenguaje. Se plantea cuando las dificultades persisten y no hay una causa evidente, como pérdida auditiva, discapacidad intelectual o daño neurológico. Después se define si hay terapia y si hace falta un informe.";

export default function ComoSeDiagnosticaElTelPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="Cómo se diagnostica el TEL"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, quiero una evaluación en Chillán para saber si lo de mi hijo puede ser TEL"
      ctaLabel="Agendar la evaluación por WhatsApp"
      related={[
        {
          href: "/servicios/tel-trastorno-especifico-lenguaje",
          label: "TEL: qué es y cómo se acompaña",
        },
        { href: "/glosario/tel", label: "Qué es el TEL" },
        {
          href: "/comparaciones/tel-vs-retraso-del-lenguaje",
          label: "TEL y retraso del lenguaje",
        },
        {
          href: "/servicios/evaluacion-fonoaudiologica",
          label: "Evaluación fonoaudiológica",
        },
        {
          href: "/servicios/informe-fonoaudiologico-pie-chillan",
          label: "Informe para el PIE o la escuela",
        },
        {
          href: "/agendar-hora-fonoaudiologo-infantil-chillan",
          label: "Agendar la evaluación",
        },
      ]}
      tambien={[
        "/preguntas/el-tel-se-cura",
        "/preguntas/escuela-de-lenguaje-o-fonoaudiologa",
        "/preguntas/el-colegio-pidio-un-informe",
      ]}
      faqs={[
        {
          question: "¿El comentario del colegio o del jardín ya es el diagnóstico?",
          answer:
            "No. El jardín o el colegio pueden notar que le cuesta y pedir una evaluación o un informe. Ese comentario orienta. El diagnóstico sale de la evaluación de la fonoaudióloga, no de una frase de la sala.",
        },
        {
          question: "¿Alcanza con una sola prueba?",
          answer:
            "No. La evaluación junta la entrevista a la familia, la observación y las pruebas de lenguaje. No se nombra el TEL por una prueba suelta ni por lo que comentó el colegio.",
        },
        {
          question: "¿Qué llevo a la evaluación?",
          answer:
            "Si tienes informes previos —del colegio, médicos o de otro especialista—, la libreta de comunicaciones o notas de cómo pide las cosas en la casa, llévalos. Si no hay papeles, igual se puede evaluar.",
        },
        {
          question: "¿TEL y TDL se diagnostican por separado?",
          answer:
            "No. Son el mismo cuadro con distinto nombre. TEL es trastorno específico del lenguaje. TDL es trastorno del desarrollo del lenguaje, el nombre que se usa más ahora. La evaluación mira el lenguaje, no elige una sigla distinta.",
        },
        {
          question: "¿Qué pasa después de la evaluación?",
          answer:
            "Se devuelve lo que se vio y se dice si corresponde terapia. Si el colegio, el PIE o una escuela de lenguaje piden informe, se elabora después de evaluar: no se redacta en la casa. El informe no promete un cupo.",
        },
      ]}
    >
      <h2>Quién evalúa</h2>
      <p>
        El diagnóstico lo plantea una fonoaudióloga, a partir de una evaluación.
        En Chillán esa hora es con Katia Domínguez. No sale de un comentario
        del jardín, del colegio ni de una sola prueba.
      </p>
      <p>
        Esta página es solo el camino del diagnóstico. Si la duda es si el TEL
        se pasa, está en{" "}
        <Link href="/preguntas/el-tel-se-cura">¿el TEL se cura?</Link>. La
        definición breve está en el <Link href="/glosario/tel">glosario de TEL</Link>
        . Qué es el cuadro y cómo se acompaña, en{" "}
        <Link href="/servicios/tel-trastorno-especifico-lenguaje">
          TEL: diagnóstico y tratamiento
        </Link>
        . La diferencia con un retraso del lenguaje, en{" "}
        <Link href="/comparaciones/tel-vs-retraso-del-lenguaje">
          TEL y retraso del lenguaje
        </Link>
        .
      </p>

      <h2>Qué mira la evaluación</h2>
      <p>
        En términos generales, la evaluación incluye entrevista a la familia,
        observación y pruebas de lenguaje. Se mira cómo comprende y cómo se
        expresa, y si esas dificultades se mantienen.
      </p>
      <p>
        El TEL (también llamado TDL) se plantea cuando hay dificultades
        persistentes de lenguaje y no aparece una causa evidente como pérdida
        auditiva, discapacidad intelectual o daño neurológico, con la
        inteligencia general conservada. No es lo mismo que un retraso que
        avanza de forma más pareja. Esa diferencia la aclara la{" "}
        <Link href="/servicios/evaluacion-fonoaudiologica">
          evaluación fonoaudiológica
        </Link>
        , no esta página.
      </p>

      <h2>No es el comentario del colegio</h2>
      <p>
        El jardín o el colegio a veces son quienes notan que le cuesta seguir
        la clase, contar o entender instrucciones. Pueden pedirte una
        evaluación o un informe. Esa observación sirve para llegar a la hora.
        No es el diagnóstico.
      </p>
      <p>
        Si te dijeron «escuela de lenguaje» o «fonoaudióloga particular», las
        dos cosas no se excluyen. Cómo se reparte esa decisión está en{" "}
        <Link href="/preguntas/escuela-de-lenguaje-o-fonoaudiologa">
          escuela de lenguaje o fonoaudióloga
        </Link>
        . Los requisitos los informa cada establecimiento.
      </p>

      <h2>Qué llevar</h2>
      <p>
        Lleva lo que ya tengas: informes previos del colegio, médicos o de otro
        especialista, la libreta de comunicaciones, o notas de cómo pide las
        cosas en la casa. Si no hay papeles, la hora igual se puede hacer. Lo
        que tú ves en la semana —si entiende «ven», si arma frases, si solo la
        familia lo descifra— también sirve.
      </p>

      <h2>Qué pasa después</h2>
      <p>
        Al terminar, se devuelve lo que mostró la evaluación y se dice si
        corresponde terapia. La primera hora no es el inicio automático de un
        tratamiento. Puedes pedirla en{" "}
        <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
          agendar la evaluación
        </Link>
        .
      </p>
      <p>
        Si el colegio habla del PIE o si vas a postular a una escuela de
        lenguaje, el informe se elabora después de evaluar. No se redacta en
        la casa. Documenta lo que se vio y un plan. No promete un cupo. El
        detalle del documento está en el{" "}
        <Link href="/servicios/informe-fonoaudiologico-pie-chillan">
          informe fonoaudiológico para el PIE
        </Link>
        .
      </p>
    </PreguntaArticle>
  );
}
