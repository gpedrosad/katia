import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "../guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/guias-padres/de-los-gestos-a-las-palabras";
const TITLE = "De los gestos a las palabras, sin presionar";
const DESCRIPTION =
  "Si tu hijo pide señalando, puedes decir la palabra y dársela, sin exigirle que la copie. Cómo hacerlo en la rutina y cuándo evaluar.";

const faqs = [
  {
    question: "¿Si le doy lo que señala, nunca va a hablar?",
    answer:
      "Darle lo que pide no apaga el lenguaje. Lo que ayuda es que la palabra aparezca en ese momento, dicha por ti, unida a la cosa. Exigirle que la repita para recién obtener lo que quiere suele frustrar.",
  },
  {
    question: "¿Le tapo la mano para que hable?",
    answer:
      "No. Quitar el gesto antes de que tenga la palabra lo deja sin forma de pedir. El gesto y la palabra pueden convivir un tiempo. Tú pones la palabra al lado del gesto.",
  },
  {
    question: "¿Esto basta si dice muy poco?",
    answer:
      "Es una forma de acompañar, no una terapia. Si las palabras no aparecen, no se juntan o no comprende, pide evaluación. La guía de estimulación en casa tiene más rutinas.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "de los gestos a las palabras",
    "pide señalando y no habla",
    "cómo hacer que pida con palabras",
    "estimular el habla en casa",
  ],
});

export default function GestosAPalabrasPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Guías para padres", href: "/guias-padres" },
        { label: "De los gestos a las palabras", href: PATH },
      ]}
      eyebrow="En la rutina"
      title="De los gestos a las palabras"
      lead="Señalar es comunicación. La palabra puede ponerse al lado, sin un examen para obtener el jugo. Así se ve en la casa, y así se distingue de una terapia."
      related={[
        { href: "/guias-padres", label: "Guías para padres" },
        { href: "/recursos/estimular-lenguaje-en-casa", label: "Estimular el lenguaje en casa" },
        { href: "/lenguaje-infantil/entiende-pero-no-habla", label: "Entiende y no habla" },
        { href: "/preguntas/conviene-corregir-cuando-habla-mal", label: "¿Conviene corregir?" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "De los gestos a las palabras, sin presionar",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía de gestos y palabras"
      ctaTitle="¿Señala todo y las palabras no llegan?"
      ctaBody="Cuéntame la edad y cómo pide: si señala, si dice una palabra o si se frustra. Vemos si corresponde evaluar en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, mi hijo pide con gestos y quiero orientación para el lenguaje en Chillán",
      )}
      ctaLabel="Consultar por WhatsApp"
    >
      <p>
        Estira el brazo hacia la fruta. Tú ya sabes cuál. Se la das y la
        escena termina. Funciona, y la palabra no tuvo lugar. El cambio chico
        es decir el nombre mientras se la das: «plátano», y seguir. Si él
        intenta un sonido, lo recibes. Si no, no hay castigo ni repetición
        obligada.
      </p>
      <h2>Tres momentos, no un programa</h2>
      <ul>
        <li>
          <strong>La comida.</strong> Ofreces dos cosas visibles. Nombras la
          que elige. No escondes las dos hasta que hable.
        </li>
        <li>
          <strong>El juego.</strong> Cuando te pasa el auto, dices «auto» o
          «auto rojo» y se lo devuelves en el juego, no como premio de un
          ensayo.
        </li>
        <li>
          <strong>La rutina.</strong> Zapatos, agua, puerta. Una palabra tuya
          en el momento, no una lista de vocabulario pegada en el refri.
        </li>
      </ul>
      <p>
        Más ideas de rutina están en{" "}
        <Link href="/recursos/estimular-lenguaje-en-casa">
          estimular el lenguaje en casa
        </Link>
        . Si quieres la consulta presencial de 0 a 3 años, es la{" "}
        <Link href="/servicios/estimulacion-temprana-del-lenguaje-chillan">
          estimulación del lenguaje
        </Link>{" "}
        en Chillán. Si el tema es corregir un sonido que ya dice mal, es otra
        página:{" "}
        <Link href="/preguntas/conviene-corregir-cuando-habla-mal">
          ¿conviene corregir?
        </Link>
        . Si comprende y aun así casi no hay palabras, lee{" "}
        <Link href="/lenguaje-infantil/entiende-pero-no-habla">
          entiende, pero casi no habla
        </Link>
        .
      </p>
      <p>
        Cuando el gesto es la única forma de pedir y eso ya te preocupa, la
        evaluación en Chillán con{" "}
        <Link href="/fonoaudiologa-ninos-chillan">Katia Domínguez</Link> mira
        si hace falta algo más que este modelado.
      </p>
    </GuiaPage>
  );
}
