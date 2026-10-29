import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/preguntas/es-normal-no-pronunciar-la-r-a-los-4";
const TITLE = "¿Mi hija no puede pronunciar la R a los 4 años?";
const DESCRIPTION =
  "¿Es normal a los 4 años? La erre fuerte puede ser el único sonido pendiente y consolidarse hacia los 5 o 6. Si fallan varios sonidos, evalúa en Chillán.";

export const metadata = buildPageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "niño de 4 años no pronuncia la r",
    "es normal no decir la r a los 4",
    "dislalia Chillán",
    "pronunciación infantil",
  ],
  ogType: "article",
});

const answer =
  "Puede ser, si a los 4 años la erre fuerte es el único sonido que falta y el resto del habla se entiende. Ese sonido puede consolidarse hacia los 5 o 6 años. Si cambian varios sonidos, cuesta entenderlo o se frustra al hablar, conviene evaluarlo en Chillán.";

export default function ErreALosCuatroPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="La R a los 4 años"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, mi hijo de 4 años no pronuncia la R y quiero una evaluación en Chillán"
      ctaLabel="Consultar el habla por WhatsApp"
      related={[
        {
          href: "/sintomas/nino-pronuncia-mal-chillan",
          label: "No se le entiende al hablar",
        },
        { href: "/glosario/dislalia", label: "Qué es la dislalia" },
        {
          href: "/tratamientos/dislalia-infantil-chillan",
          label: "Tratamiento de dislalia",
        },
        {
          href: "/recursos/hitos-del-lenguaje-por-edad",
          label: "Hitos del lenguaje por edad",
        },
        {
          href: "/servicios/terapia-del-habla-infantil-chillan",
          label: "Terapia del habla",
        },
      ]}
      tambien={[
        "/preguntas/conviene-corregir-cuando-habla-mal",
        "/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo",
        "/preguntas/puedo-pedir-solo-una-evaluacion",
      ]}
      faqs={[
        {
          question: "¿Y si dice «pero» en vez de «perro» y lo demás está claro?",
          answer:
            "Ese ejemplo se parece a una dificultad de un sonido, la erre, con el resto de la palabra reconocible. Aun así, la evaluación confirma si es solo ese fonema o si hay un patrón más amplio.",
        },
        {
          question: "¿Corregir la erre en la casa la adelanta?",
          answer:
            "Corregir cada vez que aparece suele tensar al niño. Puedes repetir tú la palabra bien, dentro de la conversación, sin exigirle que la copie en el momento. El trabajo del sonido, si hace falta, se hace en terapia.",
        },
        {
          question: "¿Dónde está la referencia de los 5 o 6 años?",
          answer:
            "En la guía de hitos del lenguaje: algunos sonidos complejos, como la erre fuerte, pueden consolidarse hacia los 5 o 6 años. Si a los 4 el habla es poco inteligible, esa misma guía recomienda evaluar.",
        },
      ]}
    >
      <h2>Una erre no es lo mismo que un habla confusa</h2>
      <p>
        A los 4 años muchos padres escuchan «peo» por perro, o una erre que
        sale como otra consonante, y el resto de la frase se entiende en la
        casa y también afuera. En la guía de hitos eso se describe así: es
        esperable que algunos sonidos complejos, como la erre fuerte, se
        consoliden recién hacia los 5 o 6 años. La página de pronunciación lo
        resume en una frase: puede ser, y conviene intervenir cuando hay
        muchos sonidos afectados y la inteligibilidad es baja.
      </p>
      <p>
        El panorama cambia si a los 4 años no es solo la erre. Si también se
        caen otras consonantes, si solo la familia lo entiende o si evita
        hablar porque no lo siguen, ya no estás frente a un único sonido
        tardío. Ahí la evaluación del habla ordena si se trata de dislalia, de
        un trastorno fonológico o de otra dificultad de articulación. La
        diferencia entre dislalia y trastorno fonológico está explicada en la{" "}
        <Link href="/comparaciones/dislalia-vs-trastorno-fonologico">
          comparación
        </Link>
        .
      </p>
      <h2>Qué anotar antes de la hora</h2>
      <ul>
        <li>Si la erre es el único sonido que cambia.</li>
        <li>Si lo entienden personas que no viven con él.</li>
        <li>Si se enoja, se calla o deja de intentar la palabra.</li>
        <li>Si el jardín ya lo comentó en la sala.</li>
      </ul>
      <p>
        Con esos cuatro datos la primera sesión parte más clara. No hace falta
        entrenar la erre en la casa durante la semana previa. Llega descansado
        y con ejemplos reales: una palabra, una frase, una situación.
      </p>
      <h2>Dónde seguir leyendo</h2>
      <p>
        Si el problema es que en general no se le entiende, entra a{" "}
        <Link href="/sintomas/nino-pronuncia-mal-chillan">
          no se le entiende al hablar
        </Link>
        . Si quieres el nombre del cuadro cuando el error es de sonidos, está
        en el <Link href="/glosario/dislalia">glosario de dislalia</Link> y el
        tratamiento presencial en{" "}
        <Link href="/tratamientos/dislalia-infantil-chillan">
          dislalia infantil en Chillán
        </Link>
        .
      </p>
      <p>
        La consulta de niños es con{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          Katia Domínguez, fonoaudióloga infantil en Chillán
        </Link>
        . Escribe la edad y si la erre es lo único que te preocupa o si hay
        más sonidos.
      </p>
    </PreguntaArticle>
  );
}
