import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "../guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/guias-padres/los-abuelos-dicen-que-ya-va-a-hablar";
const TITLE = "Los abuelos dicen que ya va a hablar";
const DESCRIPTION =
  "«Ya va a hablar» calma y a veces atrasa la consulta. Cómo escuchar a la familia sin soltar lo que observas. Orientación en Chillán.";

const faqs = [
  {
    question: "¿Y si de verdad el papá habló tarde y le fue bien?",
    answer:
      "Puede ser la historia de una persona. No es una regla para tu hijo. Las historias de la familia se cuentan en la evaluación; no reemplazan mirar cómo se comunica hoy.",
  },
  {
    question: "¿Discuto con los abuelos?",
    answer:
      "No hace falta ganar la conversación. Puedes agradecer la calma y igual anotar lo que ves. La hora se pide con tu observación, no con el permiso de toda la familia.",
  },
  {
    question: "¿Esperar un poco nunca está bien?",
    answer:
      "Observar una o dos semanas, con ejemplos escritos, es distinto de archivar la duda hasta una edad redonda. Si ya hay varias señales o el jardín lo comentó, no sigas esperando por respeto a la frase.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "los abuelos dicen que ya va a hablar",
    "ya se le va a soltar el habla",
    "esperar para ir al fonoaudiólogo",
  ],
});

export default function AbuelosYaVaAHablarPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Guías para padres", href: "/guias-padres" },
        { label: "Ya va a hablar", href: PATH },
      ]}
      eyebrow="Familia"
      title="Los abuelos dicen que ya va a hablar"
      lead="La frase quiere tranquilizarte. A veces lo logra y a veces te deja sola con una duda que ya lleva meses. Puedes escuchar el cariño y aun así mirar a tu hijo."
      related={[
        { href: "/guias-padres", label: "Guías para padres" },
        { href: "/preguntas/hay-que-esperar-a-los-4-anos", label: "¿Hay que esperar a los 4?" },
        { href: "/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo", label: "Cuándo consultar" },
        { href: "/fonoaudiologa-ninos-chillan", label: "Fonoaudióloga en Chillán" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Los abuelos dicen que ya va a hablar",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía sobre esperar a que hable"
      ctaTitle="¿La frase de la familia ya no te alcanza?"
      ctaBody="Cuéntame la edad y qué te dicen en casa versus qué ves tú. En Chillán la evaluación no necesita que todos estén de acuerdo antes."
      whatsappHref={whatsappUrl(
        "Hola, en la familia me dicen que mi hijo ya va a hablar y yo sigo con la duda. Quiero orientación en Chillán",
      )}
      ctaLabel="Quiero una segunda mirada"
    >
      <p>
        «El papá también habló tarde», «los niños de ahora los apuran», «en
        cuanto entre al colegio se suelta». Puede haber algo de experiencia
        ahí. También puede haber miedo a una consulta. Las dos cosas caben en
        la misma mesa. Ninguna de las dos describe el lenguaje de tu hijo esta
        semana.
      </p>
      <h2>Qué hacer con la frase</h2>
      <ul>
        <li>No la conviertas en una pelea de quién quiere más al niño.</li>
        <li>Anota tres ejemplos tuyos: cómo pide, si comprende, si se le entiende.</li>
        <li>Si el jardín dijo algo, escríbelo aparte de la opinión de la familia.</li>
        <li>Decide la hora con esos datos, no con la votación.</li>
      </ul>
      <p>
        Si la recomendación fue esperar una edad fija, lee{" "}
        <Link href="/preguntas/hay-que-esperar-a-los-4-anos">
          ¿hay que esperar a los 4 años?
        </Link>
        . Si ya quieres el criterio de consulta, está en{" "}
        <Link href="/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo">
          cuándo llevarlo al fonoaudiólogo
        </Link>
        . Los{" "}
        <Link href="/recursos/hitos-del-lenguaje-por-edad">hitos por edad</Link>{" "}
        sirven para comparar con una referencia, no con el primo que «después
        habló perfecto».
      </p>
      <p>
        En Chillán puedes escribirle a{" "}
        <Link href="/fonoaudiologa-ninos-chillan">Katia Domínguez</Link> aunque
        en la casa todavía no haya acuerdo. La evaluación ordena la conversación
        familiar con algo más concreto que un recuerdo.
      </p>
    </GuiaPage>
  );
}
