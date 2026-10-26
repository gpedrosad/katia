import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/lenguaje-infantil/nino-de-18-meses-no-habla";
const TITLE = "Niño de 18 meses que no habla: qué mirar";
const DESCRIPTION =
  "A los 18 meses sin palabras con significado conviene mirar gestos, el nombre y la comprensión. Cuándo evaluar en Chillán.";

const faqs = [
  {
    question: "¿A los 18 meses ya debería decir varias palabras?",
    answer:
      "En la guía de hitos, las primeras palabras con significado suelen aparecer entre los 11 y 14 meses. Si a los 18 meses no hay ninguna, esa misma guía recomienda consultar. No hace falta llegar contando un número exacto de palabras.",
  },
  {
    question: "¿Y si señala todo y solo no dice palabras?",
    answer:
      "Señalar, mirarte y entender «ven» o «no» son parte de la comunicación. Igual, la ausencia de palabras a los 18 meses es motivo para evaluar, no para esperar a que «se le suelte» sin mirarlo.",
  },
  {
    question: "¿El bilingüismo explica que no hable a esta edad?",
    answer:
      "Dos idiomas en casa no explican, por sí solos, la falta de palabras. La guía de bilingüismo dice qué mirar en los dos idiomas. A los 18 meses, si no hay palabras en ninguno, conviene evaluar.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "niño de 18 meses no habla",
    "bebé de 18 meses no dice palabras",
    "cuándo preocuparse si no habla",
    "fonoaudióloga Chillán",
  ],
});

export default function NinoDe18MesesPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Lenguaje infantil", href: "/lenguaje-infantil" },
        { label: "18 meses sin hablar", href: PATH },
      ]}
      eyebrow="Lenguaje infantil"
      title="Si tu hijo de 18 meses no habla"
      lead="Que no diga palabras a esta edad no es un diagnóstico. Sí es una edad en la que conviene mirar el resto de la comunicación y, si no hay palabras con significado, pedir una evaluación."
      related={[
        { href: "/lenguaje-infantil", label: "Guías de lenguaje infantil" },
        { href: "/recursos/hitos-del-lenguaje-por-edad", label: "Hitos por edad" },
        { href: "/sintomas/hijo-habla-poco-edad-chillan", label: "Habla poco para su edad" },
        { href: "/guias-padres/bilinguismo-y-lenguaje-infantil", label: "Bilingüismo y lenguaje" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Si tu hijo de 18 meses no habla",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía de los 18 meses"
      ctaTitle="¿Quieres que lo miremos en consulta?"
      ctaBody="Escribe que tiene cerca de 18 meses y qué hace cuando quiere algo: si señala, si te mira, si dice alguna palabra."
      whatsappHref={whatsappUrl(
        "Hola, mi hijo tiene cerca de 18 meses y todavía no habla. Quiero una orientación en Chillán",
      )}
      ctaLabel="Consultar por los 18 meses"
      backHref="/lenguaje-infantil"
      backLabel="← Volver a lenguaje infantil"
    >
      <p>
        En la guía de{" "}
        <Link href="/recursos/hitos-del-lenguaje-por-edad">hitos del lenguaje</Link>{" "}
        las primeras palabras con significado —«mamá», «agua», el nombre de algo
        que pide— suelen aparecer entre los 11 y los 14 meses. Esa misma guía
        dice que, si a los 18 meses no hay ninguna, es momento de consultar. Esta
        página no cambia ese criterio: te ayuda a observar qué más está pasando.
      </p>
      <h2>Qué mirar además de las palabras</h2>
      <ul>
        <li>Si gira cuando dices su nombre en un momento tranquilo.</li>
        <li>Si señala lo que quiere o te muestra un objeto.</li>
        <li>Si entiende avisos cortos de la casa: «ven», «no», «dame».</li>
        <li>Si balbucea con entonación, aunque todavía no sean palabras.</li>
        <li>Si se frustra y no tiene otra forma de pedir.</li>
      </ul>
      <p>
        Un niño puede señalar mucho y decir poco. Eso muestra intención de
        comunicarse, y no borra la falta de palabras. Otro puede decir dos
        palabras y no mirarte cuando lo llamas. Anota ejemplos de una semana,
        no un juicio general de «no habla nada».
      </p>
      <h2>Qué no hace falta hacer antes de la hora</h2>
      <p>
        No hace falta un plan de ejercicios ni repetirle «di mamá» todo el día.
        Puedes nombrar lo que mira, esperar un segundo y responder a su gesto.
        La guía de{" "}
        <Link href="/recursos/estimular-lenguaje-en-casa">
          estimulación en casa
        </Link>{" "}
        ordena esas rutinas. Si hay dos idiomas, lee también{" "}
        <Link href="/guias-padres/bilinguismo-y-lenguaje-infantil">
          bilingüismo y lenguaje
        </Link>
        : no se le pide que suelte uno para «que hable».
      </p>
      <h2>Dónde sigue la evaluación en Chillán</h2>
      <p>
        Si ya quieres la hora, la página de{" "}
        <Link href="/sintomas/hijo-habla-poco-edad-chillan">
          habla poco para su edad
        </Link>{" "}
        y la de{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          fonoaudiología infantil en Chillán
        </Link>{" "}
        explican el paso presencial. A esta edad, la consulta de las primeras
        palabras es la{" "}
        <Link href="/servicios/estimulacion-temprana-del-lenguaje-chillan">
          estimulación del lenguaje
        </Link>{" "}
        en Chillán. Lleva la edad en meses y dos o tres ejemplos: qué pide,
        cómo lo pide y si te entiende.
      </p>
    </GuiaPage>
  );
}
