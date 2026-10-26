import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "../guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/guias-padres/lectura-compartida-de-cuentos";
const TITLE = "Cómo leer cuentos y acompañar el lenguaje";
const DESCRIPTION =
  "Cómo leer cuentos con tu hijo para que participe, aunque hable poco: pausas, preguntas abiertas y frases un poco más largas. Sin convertirlo en clase.";

const faqs = [
  {
    question: "¿Sirve leerle si todavía no habla?",
    answer:
      "Sí. A esa edad el cuento no es para que repita palabras. Es para mirar juntos, señalar y oír la misma frase varias veces, ligada a un dibujo. Tú pones las palabras. Él pone la mirada, el gesto o un sonido. Eso ya es un turno.",
  },
  {
    question: "¿Cuántos minutos tiene que durar?",
    answer:
      "No hay un mínimo que «sirva». Un cuento corto, de pocas páginas, leído varias veces en la semana, suele rendir más que una sesión larga que termina en forcejeo. Si se va a los dos minutos, cierras con una frase y lo dejas ir. Mañana hay otra página.",
  },
  {
    question: "¿Leer en voz alta reemplaza la terapia?",
    answer:
      "No. Leer juntos fortalece la conversación y, más adelante, la atención a los sonidos de las palabras. Si hay un trastorno del lenguaje o del habla, el cuento acompaña el trabajo; no lo sustituye. Si la duda ya está, conviene evaluar además de leer.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "lectura compartida lenguaje infantil",
    "cómo leer cuentos a los niños",
    "cuentos para estimular el lenguaje",
    "leer en voz alta y habla",
  ],
});

export default function LecturaCompartidaPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Guías para padres", href: "/guias-padres" },
        { label: "Lectura de cuentos", href: PATH },
      ]}
      eyebrow="Cuentos en casa"
      title="Cómo leer cuentos y acompañar el lenguaje"
      lead="Leer juntos no es enseñarle a leer ni tomarle una prueba. Es un rato corto en el que los dos miran lo mismo y tú dejas un espacio para que él entre en la historia, con una palabra, un gesto o un silencio."
      related={[
        { href: "/fonoaudiologa-ninos-chillan", label: "Fonoaudióloga infantil en Chillán" },
        { href: "/recursos/estimular-lenguaje-en-casa", label: "Estimular el lenguaje en casa" },
        { href: "/servicios/conciencia-fonologica-chillan", label: "Conciencia fonológica" },
        { href: "/guias-padres/pantallas-y-lenguaje-infantil", label: "Pantallas y lenguaje" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Cómo leer cuentos y acompañar el lenguaje de tu hijo",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      ctaTitle="¿Lees con él y aun así cuesta conversar?"
      ctaBody="El cuento ayuda. No aclara, por sí solo, si hay una dificultad de lenguaje. Si esa duda ya está, se puede evaluar en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, quiero evaluar el lenguaje de mi hijo. Leemos cuentos y sigo con dudas",
      )}
      ctaLabel="Quiero una orientación"
    >
      <p>
        Un cuento leído de corrido, mientras tu hijo mira para otro lado, es un
        audio de fondo. El mismo cuento, leído despacio y siguiendo lo que él
        señala, es una conversación con dibujos. La diferencia no está en el
        libro «correcto» ni en una voz de locutor. Está en el turno: tú dices
        algo, esperas, y tomas lo que él hizo como respuesta.
      </p>
      <p>
        Esta forma de leer se parece a lo que en educación inicial se llama
        lectura compartida o dialógica. La idea, muy usada con niños pequeños,
        es simple: comentar, preguntar poco y de a una, ampliar lo que el niño
        dijo y volver a decir la frase ya más completa. No necesitas el nombre
        técnico para hacerlo esta noche.
      </p>

      <h2>Elige un libro que se pueda interrumpir</h2>
      <p>
        Sirven los libros con pocas frases por página y dibujos claros: animales,
        rutinas de la casa, un paseo, la hora de dormir. Si el texto es largo,
        no tienes que leerlo entero. Cuenta el dibujo con tus palabras. Un
        libro «para más grandes» que tu hijo no logra seguir se convierte en
        una prueba. Guárdalo para más adelante.
      </p>
      <p>
        El mismo cuento, repetido, no es pereza. La repetición deja que él
        anticipe: sabe que después del perro viene el gato y puede completar
        un sonido. Cambiar de libro cada noche parece más estimulante y a
        veces le quita esa anticipación. Ten dos o tres favoritos y rota con
        calma.
      </p>

      <h2>Sigue el dedo, no solo el texto</h2>
      <p>
        Si él señala la rueda y el texto habla de la lluvia, habla de la rueda.
        «Es la rueda del auto. Gira.» El interés de tu hijo es la entrada. Tú
        pones una frase corta, unida a lo que miró. Después puedes volver al
        texto, o no. Ganó la atención compartida, no la página.
      </p>
      <p>
        Señala tú también, cerca del dibujo, y deja el dedo un segundo. Esa
        pausa es una invitación. Si él no habla, no llenes el silencio al
        instante con otra pregunta. Cuenta hasta tres, despacio. A veces el
        turno llega tarde. Si no llega, sigues tú: no se perdió el cuento.
      </p>

      <h2>Preguntas que abren y preguntas que cierran</h2>
      <p>
        «¿De qué color es el auto?» cierra: hay una sola respuesta y se siente
        a examen. «¿Qué está haciendo el auto?» o «mira, se fue…» abren un
        poco más. Con niños que hablan poco, incluso la pregunta abierta puede
        sobrar. En ese caso comenta y deja el final en el aire: «el perro está
        triste porque…». Si él dice «solo» o cualquier aproximación, esa es la
        respuesta. No pidas la frase perfecta.
      </p>
      <p>
        Una pregunta por página alcanza. Varias seguidas parecen un
        interrogatorio y muchos niños se bajan del regazo. El mismo cuidado
        —no corregir cada palabra— está en la guía de{" "}
        <Link href="/recursos/estimular-lenguaje-en-casa">
          estimulación del lenguaje en casa
        </Link>
        . El cuento es un momento de esa rutina, no una lista aparte de
        ejercicios.
      </p>

      <h2>Amplía un poquito lo que dijo</h2>
      <p>
        Si dice «guau», puedes decir «sí, el perro hace guau. El perro corre».
        Agregaste una idea, no un párrafo. Si dice «auto rojo mío», respondes
        «tu auto rojo se fue». Esa expansión le devuelve la frase un punto más
        larga, con la gramática ya armada, sin decirle «así no se dice».
      </p>
      <p>
        Si todavía no hay palabras, amplías el gesto. Él alcanza el libro y tú
        dices «quieres el libro de los autos». Él empuja la página y tú dices
        «das vuelta la página». El gesto cuenta como su turno. Tú pones la
        frase que él todavía no puede decir.
      </p>

      <h2>Si se va a los dos minutos</h2>
      <p>
        No lo persigas con el libro. Cierra: «el auto se fue a dormir. Mañana
        seguimos». Un final predecible enseña que el cuento tiene borde, y
        evita que leer sea una lucha. Puedes dejar el libro a la vista, no
        guardado en un estante alto, para que él lo traiga cuando quiera. Ese
        inicio —él lo elige— suele durar más que el inicio impuesto.
      </p>
      <p>
        La hora tampoco tiene que ser la noche si a esa hora ya está pasado.
        Hay familias a las que les funciona después del almuerzo, o una sola
        página mientras se ponen los zapatos. Corto y repetido gana a largo y
        excepcional. Si el celular compite con ese rato, mira la guía de{" "}
        <Link href="/guias-padres/pantallas-y-lenguaje-infantil">
          pantallas y lenguaje
        </Link>
        : no hace falta eliminarlas del día, sí dejar el cuento sin una
        pantalla al lado.
      </p>

      <h2>Más adelante: sonidos, no solo historia</h2>
      <p>
        Cuando tu hijo ya arma frases y disfruta el juego con palabras, el
        cuento puede incluir rimas, palmas en las sílabas o «qué empieza como
        mamá». Eso se acerca a la{" "}
        <Link href="/servicios/conciencia-fonologica-chillan">
          conciencia fonológica
        </Link>
        , que es otra habilidad: darse cuenta de los sonidos dentro de las
        palabras. No hace falta adelantarla a los 2 años. Primero viene
        disfrutar el cuento y conversar. La conciencia de sonidos se apoya en
        ese gusto, no lo reemplaza.
      </p>
      <p>
        Si al leer notas que no comprende la historia simple, no señala, no
        sostiene la atención ni un minuto con algo que le gusta, o el jardín
        dice que no sigue los cuentos del grupo, anótalo. Esos datos sirven en
        una evaluación. Los hitos generales están en{" "}
        <Link href="/recursos/hitos-del-lenguaje-por-edad">
          hitos del lenguaje por edad
        </Link>
        . Si tu hijo tiene entre 0 y 3 años y al leer ves que las palabras no llegan,
        la consulta de esa etapa es la{" "}
        <Link href="/servicios/estimulacion-temprana-del-lenguaje-chillan">
          estimulación del lenguaje
        </Link>{" "}
        en Chillán. Para una mirada en Chillán, parte por{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          fonoaudiología infantil
        </Link>
        . Lleva el nombre de un cuento que sí le gusta y otro momento en que se
        baja: con eso se ve qué apoya y qué se traba.
      </p>
    </GuiaPage>
  );
}
