import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/lenguaje-infantil/habla-como-bebe";
const TITLE = "¿Por qué un niño habla como bebé? Qué mirar";
const DESCRIPTION =
  "Hablar como bebé no es un diagnóstico: palabras cortadas, pocas frases o un habla que solo entienden en casa. Qué anotar y cuándo evaluar en Chillán.";

const faqs = [
  {
    question: "¿«Habla como bebé» es un diagnóstico?",
    answer:
      "No. Es la forma en que muchas familias describen un habla más simple de lo que esperaban. Puede ser pronunciación, pocas frases o las dos cosas. La evaluación pone el nombre, si hace falta uno.",
  },
  {
    question: "¿Corregirlo cada vez lo adelanta?",
    answer:
      "Corregir cada frase suele tensar. Puedes repetir tú la palabra completa dentro de la conversación, sin exigirle que la copie al tiro. La página sobre corregir cuando habla mal lo explica con más calma.",
  },
  {
    question: "¿Y si solo lo entendemos en la casa?",
    answer:
      "Eso ya es un dato de claridad, no solo de «tono de bebé». Si personas que no viven con él no lo siguen, conviene evaluar aunque en casa la conversación funcione.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "mi hijo habla como bebé",
    "hablar como bebé",
    "por qué un niño habla como bebé",
    "habla como guagua",
    "habla infantilizado",
    "pronunciación infantil Chillán",
  ],
});

export default function HablaComoBebePage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Lenguaje infantil", href: "/lenguaje-infantil" },
        { label: "Habla como bebé", href: PATH },
      ]}
      eyebrow="Lenguaje infantil"
      title="Mi hijo habla como bebé"
      lead="Esa frase junta cosas distintas: palabras cortadas, un tono más chico, frases que no aparecen o un habla que solo ustedes descifran. Separarlas cambia lo que conviene observar."
      related={[
        { href: "/lenguaje-infantil", label: "Guías de lenguaje infantil" },
        { href: "/dislalia", label: "Guías de dislalia" },
        { href: "/sintomas/nino-pronuncia-mal-chillan", label: "No se le entiende" },
        { href: "/preguntas/conviene-corregir-cuando-habla-mal", label: "¿Conviene corregirlo?" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Mi hijo habla como bebé",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía habla como bebé"
      ctaTitle="¿El habla de tu hijo se quedó más chica?"
      ctaBody="Dime la edad y un ejemplo de cómo pide algo. Con eso vemos si la duda es de sonidos, de frases o de las dos."
      whatsappHref={whatsappUrl(
        "Hola, siento que mi hijo habla como bebé y quiero una orientación en Chillán",
      )}
      ctaLabel="Consultar por WhatsApp"
      backHref="/lenguaje-infantil"
      backLabel="← Volver a lenguaje infantil"
    >
      <p>
        «Habla como bebé» no es un término de la evaluación. Sirve en la casa y
        se desarma en tres preguntas. ¿Las palabras están cortadas? ¿Hay pocas
        frases para su edad? ¿Lo entiende alguien que no vive con él?
      </p>
      <h2>Tres situaciones que se parecen y no son la misma</h2>
      <ul>
        <li>
          <strong>Palabras recortadas.</strong> Dice «ete» por leche o cambia
          sonidos. Eso se parece más a pronunciación. Sigue en{" "}
          <Link href="/dislalia">dislalia</Link> y en{" "}
          <Link href="/sintomas/nino-pronuncia-mal-chillan">
            no se le entiende al hablar
          </Link>
          .
        </li>
        <li>
          <strong>Pocas frases.</strong> Tiene palabras y no las junta, o junta
          muy poco. Eso está en{" "}
          <Link href="/lenguaje-infantil/dice-palabras-y-no-frases">
            dice palabras y no arma frases
          </Link>
          .
        </li>
        <li>
          <strong>Un tono más chico con personas nuevas.</strong> A veces es
          vergüenza. Si en casa, tranquilo, el habla también se queda corta, no
          lo expliques solo por timidez.
        </li>
      </ul>
      <h2>Qué anotar esta semana</h2>
      <p>
        Elige tres momentos: el desayuno, un juego y una salida. Escribe la
        frase tal como salió, no la traducción. Anota si lo entendió un
        familiar que no está todos los días. Esa nota vale más que decirle
        «habla bien» cada vez que abre la boca. Si quieres el criterio de
        corrección, está en{" "}
        <Link href="/preguntas/conviene-corregir-cuando-habla-mal">
          ¿conviene corregir cuando habla mal?
        </Link>
      </p>
      <p>
        La edad importa, y los hitos están en su{" "}
        <Link href="/recursos/hitos-del-lenguaje-por-edad">guía</Link>. Si ya
        está en el jardín y la educadora también lo nota, no esperes a que el
        habla «se le pase» sin mirarlo. En Chillán puedes pedir la evaluación
        con{" "}
        <Link href="/fonoaudiologa-ninos-chillan">Katia Domínguez</Link>.
      </p>
    </GuiaPage>
  );
}
