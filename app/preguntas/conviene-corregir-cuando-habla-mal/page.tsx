import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/preguntas/conviene-corregir-cuando-habla-mal";
const TITLE = "¿Corregir a mi hijo cuando habla mal?";
const DESCRIPTION =
  "No corrijas cada frase. Repite tú la palabra bien, dentro de la conversación. Corregir todo el rato tensa al niño y puede empeorar el habla.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "corregir a mi hijo cuando habla mal",
    "cómo corregir la pronunciación",
    "estimulación del lenguaje en casa",
    "fonoaudióloga Chillán",
  ],
  ogType: "article",
});

const answer =
  "No conviene corregirlo en cada frase. Di tú la palabra bien, dentro de la conversación, sin pedirle que la repita en el momento. Las correcciones constantes aumentan la tensión y pueden empeorar la articulación. Si hay que trabajar un sonido, eso se hace en terapia, con juego.";

export default function ConvieneCorregirPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="Corregir el habla"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, mi hijo pronuncia mal y quiero orientación de una fonoaudióloga en Chillán"
      ctaLabel="Pedir orientación por WhatsApp"
      related={[
        {
          href: "/recursos/estimular-lenguaje-en-casa",
          label: "Estimular el lenguaje en casa",
        },
        {
          href: "/sintomas/nino-pronuncia-mal-chillan",
          label: "Pronuncia mal",
        },
        {
          href: "/servicios/terapia-del-habla-infantil-chillan",
          label: "Terapia del habla",
        },
        { href: "/glosario/dislalia", label: "Dislalia" },
      ]}
      tambien={[
        "/preguntas/es-normal-no-pronunciar-la-r-a-los-4",
        "/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo",
        "/preguntas/cuanto-dura-una-terapia-de-lenguaje",
      ]}
      faqs={[
        {
          question: "¿Modelar es lo mismo que ignorar el error?",
          answer:
            "No se trata de hacer como si no hubieras escuchado. Tú respondes al mensaje y, en tu turno, dices la palabra completa y clara. Él escucha el modelo sin un «no se dice así».",
        },
        {
          question: "¿Puedo pedirle que mire mi boca a veces?",
          answer:
            "En un juego breve frente al espejo, sin corregir todo el rato, se pueden mirar labios y lengua. La página de pronunciación lo propone como juego, no como examen en cada comida.",
        },
        {
          question: "¿Esto reemplaza la terapia del habla?",
          answer:
            "La estimulación en casa acompaña. No reemplaza la terapia si hay un trastorno o si cuesta entenderlo. La evaluación dice si basta con orientar la casa o si corresponde un plan.",
        },
      ]}
    >
      <h2>Qué hacer en la conversación</h2>
      <p>
        Tu hijo dice «oto» y tú entiendes que quiere el auto. Respondes al
        pedido y dices la palabra bien: «el auto, vamos en el auto». Sigues
        el juego. No detienes la frase para que la repita. Esa manera de
        modelar ya está en la guía de{" "}
        <Link href="/recursos/estimular-lenguaje-en-casa">
          estimulación del lenguaje en casa
        </Link>
        : seguir su atención, modelar sin corregir cada error y expandir lo
        que dice.
      </p>
      <p>
        Expandir es devolver la idea un poco más armada. Si dice «agua»,
        puedes decir «quieres agua». Si dice una frase corta, tú agregas un
        dato. El foco es el mensaje, no el examen de cada sonido.
      </p>
      <h2>Qué suele salir mal</h2>
      <p>
        Corregir en cada oración corta la conversación. El niño empieza a
        hablar menos, o se apura y el sonido sale peor. En la página de
        pronunciación la indicación es directa: evita las burlas y las
        correcciones constantes, porque aumentan la tensión y empeoran la
        articulación. Tampoco ayuda que hermanos o adultos imiten el error
        para reírse.
      </p>
      <p>
        Otra trampa es practicar una lista de palabras al azar, muchos
        minutos, porque alguien dijo que «hay que ejercitar». Sin un objetivo
        elegido en evaluación, esa lista cansa y no le muestra para qué sirve
        el sonido. Si hay terapia, las prácticas de la casa son cortas y
        salen de lo que se vio en sesión.
      </p>
      <h2>Cuándo pasar de la casa a la consulta</h2>
      <p>
        Modelar en la rutina es el acompañamiento de todos los días. Pide
        hora si cuesta entenderlo fuera de la familia, si hay varios sonidos
        cambiados, si se frustra o si el jardín ya lo comentó. El cuadro de
        conjunto está en{" "}
        <Link href="/sintomas/nino-pronuncia-mal-chillan">
          niño que pronuncia mal
        </Link>{" "}
        y el trabajo de articulación, cuando corresponde, en{" "}
        <Link href="/servicios/terapia-del-habla-infantil-chillan">
          terapia del habla infantil en Chillán
        </Link>
        .
      </p>
      <p>
        La evaluación presencial es con{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          Katia Domínguez, fonoaudióloga infantil en Chillán
        </Link>
        . Cuéntale la edad y un ejemplo de palabra, no hace falta que llegues
        con el sonido «entrenado».
      </p>
    </PreguntaArticle>
  );
}
