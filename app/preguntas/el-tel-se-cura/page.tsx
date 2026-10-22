import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/preguntas/el-tel-se-cura";
const H1 = "¿El TEL se cura?";
const TITLE = "¿El TEL se cura? Lo que pasa con el trastorno del lenguaje";
const DESCRIPTION =
  "El TEL no se cura: acompaña, y con terapia y apoyo puede mejorar mucho. Qué cambia con la edad, el colegio y cómo se diagnostica.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "el tel se cura",
    "TEL se cura",
    "tel diagnóstico",
    "trastorno específico del lenguaje",
    "TDL",
  ],
  ogType: "article",
});

const answer =
  "El TEL, hoy también llamado TDL, no se cura: es una condición del desarrollo del lenguaje que acompaña. No desaparece de un día para otro. Con terapia y apoyo en la casa y en el colegio, lo que se ve puede cambiar y mejorar mucho. La evaluación temprana define qué apoyar. No hay un plazo igual para todos.";

export default function ElTelSeCuraPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="¿El TEL se cura?"
      title={H1}
      answer={answer}
      whatsappMessage="Hola, quiero una evaluación de lenguaje en Chillán para saber si lo de mi hijo puede ser TEL"
      ctaLabel="Agendar la evaluación por WhatsApp"
      related={[
        {
          href: "/servicios/tel-trastorno-especifico-lenguaje",
          label: "TEL: diagnóstico y tratamiento",
        },
        {
          href: "/tratamientos/tel-trastorno-especifico-lenguaje-chillan",
          label: "Tratamiento TEL en Chillán",
        },
        {
          href: "/comparaciones/tel-vs-retraso-del-lenguaje",
          label: "TEL y retraso del lenguaje",
        },
        {
          href: "/agendar-hora-fonoaudiologo-infantil-chillan",
          label: "Agendar la evaluación",
        },
      ]}
      tambien={[
        "/preguntas/cuanto-dura-una-terapia-de-lenguaje",
        "/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo",
        "/preguntas/el-colegio-pidio-un-informe",
      ]}
      faqs={[
        {
          question: "¿El TEL dura toda la vida?",
          answer:
            "Es una condición del desarrollo que acompaña. No se pasa como un resfrío. Lo que notas puede cambiar con la edad, la terapia y el apoyo de la casa y del colegio. No se promete una cura.",
        },
        {
          question: "¿Cuánto dura la terapia?",
          answer:
            "No hay un plazo igual para todos y no corresponde adelantar sesiones por WhatsApp. El estimado sale de la evaluación. Los factores están en la pregunta «¿Cuánto dura una terapia de lenguaje?», sin un número fijo.",
        },
        {
          question: "¿Cómo se diagnostica el TEL?",
          answer:
            "Se orienta con una evaluación fonoaudiológica: entrevista a la familia, observación y pruebas de lenguaje. Se plantea cuando las dificultades persisten y no aparece una causa como pérdida auditiva, discapacidad intelectual o daño neurológico.",
        },
        {
          question: "¿TEL y TDL son lo mismo?",
          answer:
            "Sí. TEL es trastorno específico del lenguaje. TDL es trastorno del desarrollo del lenguaje, el nombre que se usa más ahora. Los dos se refieren a la misma condición.",
        },
      ]}
    >
      <h2>No se cura, y tampoco se pasa solo</h2>
      <p>
        El TEL (trastorno específico del lenguaje) es una condición del
        desarrollo. Afecta cómo tu hijo comprende o usa el lenguaje, sin una
        causa evidente como pérdida auditiva, discapacidad intelectual o daño
        neurológico. Hoy el mismo cuadro se llama también TDL. No desaparece
        de un día para otro y no se resuelve solo con el tiempo.
      </p>
      <p>
        Eso no significa que nada cambie. Con terapia y con apoyo en la casa
        y en el colegio, las manifestaciones pueden cambiar y mejorar mucho:
        más palabras, frases más claras, mejor participación. No es una cura
        ni un resultado prometido. El camino se define cuando ya se evaluó a
        tu hijo.
      </p>
      <p>
        No es lo mismo que un retraso del lenguaje, que avanza más lento y
        con un progreso más parejo. La diferencia está en{" "}
        <Link href="/comparaciones/tel-vs-retraso-del-lenguaje">
          TEL y retraso del lenguaje
        </Link>
        . El marco del tratamiento, en{" "}
        <Link href="/servicios/tel-trastorno-especifico-lenguaje">
          diagnóstico y tratamiento del TEL
        </Link>
        .
      </p>

      <h2>Qué puede cambiar con la edad</h2>
      <p>
        La condición acompaña. Lo que tú ves puede ir cambiando. Cuando es
        más chico, suele notarse en frases cortas, poco vocabulario o
        dificultad para seguir instrucciones. Más adelante, el mismo cuadro
        puede aparecer al contar algo, al seguir el lenguaje de la clase o en
        la lectura y la escritura. El lenguaje es la base de ese aprendizaje.
      </p>
      <p>
        No hay una edad en la que «se pase». Por eso no corresponde esperar a
        que cumpla años para recién mirarlo. Lo que sí cambia es el apoyo: en
        la casa se practica lo acordado en sesión, y en el colegio se puede
        ajustar lo que se le pide en sala.
      </p>

      <h2>Por qué conviene evaluar temprano</h2>
      <p>
        La evaluación no cura el TEL. Sirve para ver qué está pasando y qué
        apoyar primero. En Chillán la primera hora con Katia Domínguez es
        esa evaluación: entrevista, observación, pruebas según la edad y una
        devolución. Ahí se dice si corresponde terapia y por dónde empezar.
      </p>
      <p>
        Sin esa hora no hay un plan. Esperar «a ver si habla» deja la duda
        abierta. Si ya te estás preguntando si es TEL, el paso es la
        evaluación, no un plazo inventado. Puedes pedirla en{" "}
        <Link href="/agendar-hora-fonoaudiologo-infantil-chillan">
          agendar hora
        </Link>
        . Cómo se trabaja después, en{" "}
        <Link href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan">
          tratamiento del TEL en Chillán
        </Link>
        .
      </p>

      <h2>El colegio y el PIE</h2>
      <p>
        El colegio a veces es quien nota que le cuesta seguir la clase, contar
        o entender instrucciones. Puede pedirte un informe fonoaudiológico.
        Ese papel se elabora después de evaluar: no se redacta en la casa.
      </p>
      <p>
        Si el colegio habla del PIE (Programa de Integración Escolar), el
        informe documenta lo que mostró la evaluación para que el colegio
        vea qué apoyos pedir. No reemplaza la terapia ni promete un cupo. El
        detalle del documento está en el{" "}
        <Link href="/servicios/informe-fonoaudiologico-pie-chillan">
          informe fonoaudiológico para el PIE
        </Link>
        .
      </p>

      <h2>TEL y TDL: el mismo cuadro, otro nombre</h2>
      <p>
        TEL y TDL nombran la misma condición. TEL es el nombre que muchos
        colegios y familias todavía usan. TDL (trastorno del desarrollo del
        lenguaje) es el término más usado ahora. La definición breve de cada
        uno está en el glosario:{" "}
        <Link href="/glosario/tel">qué es el TEL</Link> y{" "}
        <Link href="/glosario/tdl">qué es el TDL</Link>.
      </p>

      <h2>Cuánto dura la terapia</h2>
      <p>
        No hay un número de sesiones que sirva para todos. Depende de lo que
        muestre la evaluación, de qué áreas haya que apoyar y de lo que se
        pueda practicar en la rutina. Esos factores, sin un plazo adelantado,
        están en{" "}
        <Link href="/preguntas/cuanto-dura-una-terapia-de-lenguaje">
          ¿cuánto dura una terapia de lenguaje?
        </Link>
        .
      </p>
    </PreguntaArticle>
  );
}
