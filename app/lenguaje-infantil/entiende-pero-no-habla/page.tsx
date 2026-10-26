import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/lenguaje-infantil/entiende-pero-no-habla";
const TITLE = "Entiende todo, pero casi no habla";
const DESCRIPTION =
  "Si tu hijo comprende y señala, y aun así dice muy poco, no es lo mismo que no entender. Qué anotar y cuándo evaluar en Chillán.";

const faqs = [
  {
    question: "¿Si entiende, el lenguaje está bien?",
    answer:
      "Comprender es una parte. Decir es otra. Un niño puede seguir instrucciones de la casa y tener muy pocas palabras para pedir, contar o responder. Las dos cosas se miran en la evaluación.",
  },
  {
    question: "¿Puede ser timidez?",
    answer:
      "La timidez se nota más con personas nuevas. Si en casa, con gente conocida y sin apuro, también dice muy poco, la timidez no alcanza como única explicación.",
  },
  {
    question: "¿Habla y lenguaje son lo mismo?",
    answer:
      "No. El habla es cómo salen los sonidos. El lenguaje incluye las palabras, las frases y la comprensión. La comparación entre retraso del habla y retraso del lenguaje lo ordena con más detalle.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "entiende todo pero no habla",
    "mi hijo comprende y no habla",
    "habla poco y entiende",
    "retraso del habla Chillán",
  ],
});

export default function EntiendePeroNoHablaPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Lenguaje infantil", href: "/lenguaje-infantil" },
        { label: "Entiende y no habla", href: PATH },
      ]}
      eyebrow="Lenguaje infantil"
      title="Entiende todo, pero casi no habla"
      lead="Que te siga cuando le hablas es una buena señal. No responde, por sí sola, la pregunta de por qué dice tan poco. Comprensión y expresión se miran juntas."
      related={[
        { href: "/lenguaje-infantil", label: "Guías de lenguaje infantil" },
        {
          href: "/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje",
          label: "Habla vs lenguaje",
        },
        { href: "/sintomas/hijo-habla-poco-edad-chillan", label: "Habla poco para su edad" },
        { href: "/tratamientos/retraso-del-habla-chillan", label: "Retraso del habla en Chillán" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Entiende todo, pero casi no habla",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía comprende y no habla"
      ctaTitle="¿Comprende y aun así dice muy poco?"
      ctaBody="Cuéntame la edad, qué instrucciones sigue y cómo pide las cosas. Con eso vemos si corresponde evaluar en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, mi hijo entiende pero casi no habla. Quiero una evaluación en Chillán",
      )}
      ctaLabel="Consultar por WhatsApp"
      backHref="/lenguaje-infantil"
      backLabel="← Volver a lenguaje infantil"
    >
      <p>
        Muchas familias llegan con esta frase: «me entiende todo, pero no
        habla». A veces es bastante cierto: trae los zapatos, se detiene con el
        «no», elige cuando le muestras dos cosas. Otras veces «entiende todo»
        es lo que la familia ya adivinó por el contexto. Por eso conviene
        separar los ejemplos.
      </p>
      <h2>Cómo comprobar la comprensión sin un test en la casa</h2>
      <ul>
        <li>Pídele algo que no estás señalando ni mirando tú.</li>
        <li>Cambia el orden: primero el objeto, después la acción, o al revés.</li>
        <li>Fíjate si responde a una pregunta corta («¿dónde está el agua?») o solo al gesto.</li>
        <li>Mira si entiende a alguien que no vive con él, no solo a ti.</li>
      </ul>
      <p>
        Si la comprensión se cae cuando no hay gestos, la duda ya no es solo
        «no habla». La página de{" "}
        <Link href="/sintomas/mi-hijo-no-comprende-chillan">
          no comprende
        </Link>{" "}
        y la de{" "}
        <Link href="/sintomas/nino-no-entiende-instrucciones-chillan">
          no entiende instrucciones
        </Link>{" "}
        describen ese otro lado.
      </p>
      <h2>Si de verdad comprende y dice poco</h2>
      <p>
        Ahí la pregunta es de expresión: pocas palabras, palabras que no se
        juntan, o un niño que sabe qué quiere y no logra decirlo. Eso se parece
        más a lo que la{" "}
        <Link href="/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje">
          comparación entre habla y lenguaje
        </Link>{" "}
        separa. No le pongas tú el nombre. Anota si señala, si se frustra y si
        hay palabras sueltas.
      </p>
      <p>
        En consulta, en Chillán, se observa cómo pide, cómo responde y cómo se
        le entiende. El tratamiento, si hace falta, se decide después de esa
        evaluación. Puedes partir por{" "}
        <Link href="/tratamientos/retraso-del-habla-chillan">
          retraso del habla
        </Link>{" "}
        o por{" "}
        <Link href="/servicios/terapia-lenguaje-infantil">
          terapia de lenguaje infantil
        </Link>
        , según lo que viste en casa. Si tu hijo tiene entre 0 y 3 años y la
        duda está en el balbuceo o en las primeras palabras, la consulta de
        esa etapa es la{" "}
        <Link href="/servicios/estimulacion-temprana-del-lenguaje-chillan">
          estimulación del lenguaje
        </Link>{" "}
        en Chillán.
      </p>
    </GuiaPage>
  );
}
