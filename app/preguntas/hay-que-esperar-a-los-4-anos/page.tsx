import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { guiaMetadata } from "@/app/guias-padres/guia-ui";

const PATH = "/preguntas/hay-que-esperar-a-los-4-anos";
const TITLE = "¿Hay que esperar a los 4 años para consultar?";
const DESCRIPTION =
  "Esperar a los 4 no es una regla para todas las dudas. Si no hay palabras, no comprende o no se le entiende, puedes evaluar antes. Chillán.";

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "esperar a los 4 años para el fonoaudiólogo",
    "a qué edad consultar fonoaudiólogo",
    "es pronto para evaluar el lenguaje",
  ],
});

const answer =
  "No. Los 4 años no son la puerta de entrada. Hay dudas —ninguna palabra hacia los 18 meses, no comprender, un habla que nadie entiende— que se miran antes. Otros sonidos, como la erre fuerte, sí pueden consolidarse más tarde. La edad se lee junto con la duda, no al revés.";

export default function EsperarALosCuatroPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="Esperar a los 4"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, me dijeron que espere a los 4 años para llevar a mi hijo al fonoaudiólogo. Quiero orientación en Chillán"
      ctaLabel="Preguntar si conviene esperar"
      related={[
        { href: "/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo", label: "Cuándo llevarlo" },
        { href: "/lenguaje-infantil/nino-de-18-meses-no-habla", label: "18 meses sin hablar" },
        { href: "/recursos/hitos-del-lenguaje-por-edad", label: "Hitos por edad" },
        { href: "/guias-padres/los-abuelos-dicen-que-ya-va-a-hablar", label: "Si te dicen que ya va a hablar" },
      ]}
      tambien={[
        "/preguntas/es-normal-no-pronunciar-la-r-a-los-4",
        "/preguntas/es-tarde-consultar-en-basica",
        "/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo",
      ]}
      faqs={[
        {
          question: "¿Entonces a los 4 años no se consulta?",
          answer:
            "Sí se consulta, cuando la duda sigue a esa edad. Lo que no se sostiene es usar los 4 como fecha para recién mirar cualquier cosa, incluidas las que ya se veían antes.",
        },
        {
          question: "¿Y la erre?",
          answer:
            "La erre fuerte puede consolidarse hacia los 5 o 6 años. Esa es una duda de un sonido, y tiene su propia respuesta. No sirve para postergar una evaluación si el niño no habla o no se le entiende.",
        },
      ]}
    >
      <h2>De dónde sale la frase</h2>
      <p>
        «Esperemos a los 4» se repite en la familia y a veces en la sala. Mezcla
        dos ideas ciertas con una conclusión que no lo es. Es cierto que el
        habla se ordena con el tiempo y que algunos sonidos llegan más tarde.
        No es cierto que toda duda deba esperar esa fecha.
      </p>
      <p>
        Si a los 18 meses no hay palabras con significado, la guía de{" "}
        <Link href="/lenguaje-infantil/nino-de-18-meses-no-habla">
          18 meses sin hablar
        </Link>{" "}
        y los{" "}
        <Link href="/recursos/hitos-del-lenguaje-por-edad">hitos</Link> dicen
        que conviene consultar. Si no comprende o no arma frases, tampoco se
        gana nada con un calendario vacío. La página{" "}
        <Link href="/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo">
          cuándo llevarlo al fonoaudiólogo
        </Link>{" "}
        ordena esa decisión. Si ya no vas a esperar, la primera hora es la{" "}
        <Link href="/servicios/evaluacion-fonoaudiologica">
          evaluación fonoaudiológica
        </Link>
        .
      </p>
      <h2>Cuándo sí tiene sentido no apurar un sonido</h2>
      <p>
        Si la única duda es la erre a los 4 y el resto se entiende, lee{" "}
        <Link href="/preguntas/es-normal-no-pronunciar-la-r-a-los-4">
          ¿es normal no pronunciar la R a los 4?
        </Link>
        . Eso no se copia a «no habla» ni a «no se le entiende fuera de casa».
        Si en la familia te insisten con que ya se le va a soltar, está la guía{" "}
        <Link href="/guias-padres/los-abuelos-dicen-que-ya-va-a-hablar">
          los abuelos dicen que ya va a hablar
        </Link>
        .
      </p>
    </PreguntaArticle>
  );
}
