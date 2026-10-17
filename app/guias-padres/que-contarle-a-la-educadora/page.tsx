import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "../guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/guias-padres/que-contarle-a-la-educadora";
const TITLE = "Qué contarle a la educadora del jardín";
const DESCRIPTION =
  "Qué decirle a la tía del jardín sobre el habla de tu hijo: ejemplos concretos, sin etiquetas. Y qué preguntarle de vuelta.";

const faqs = [
  {
    question: "¿Le digo que creo que tiene un trastorno?",
    answer:
      "No hace falta. Un nombre puesto en casa tensa la conversación y puede ser inexacto. Mejor: qué hace en la sala, desde cuándo, y qué ves tú en casa. El nombre, si corresponde, sale de la evaluación.",
  },
  {
    question: "¿Le pido que lo haga hablar delante del grupo?",
    answer:
      "No. Pedirle que exponga al niño para «practicar» suele cerrarlo. Puedes pedir que te cuente cómo se comunica en el juego, sin convertirlo en una prueba pública.",
  },
  {
    question: "¿Y si la educadora no nota nada?",
    answer:
      "Puede pasar: en la sala hay ruido y tu hijo se las arregla con gestos. Tu observación de la casa igual cuenta. Si la duda sigue, pide la evaluación aunque en el jardín «lo vean bien».",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "qué decirle a la educadora del lenguaje",
    "hablar con la tía del jardín",
    "observación de habla en la sala",
  ],
});

export default function QueContarleEducadoraPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Guías para padres", href: "/guias-padres" },
        { label: "La educadora", href: PATH },
      ]}
      eyebrow="Jardín"
      title="Qué contarle a la educadora"
      lead="Una conversación corta con la tía rinde más si llevas ejemplos y te vuelves con otros. No es una reunión para que ella diagnostique ni para que tú llegues con el diagnóstico listo."
      related={[
        { href: "/guias-padres", label: "Guías para padres" },
        { href: "/preguntas/el-jardin-me-derivo-a-fonoaudiologia", label: "Si el jardín te derivó" },
        { href: "/preguntas/habla-en-casa-y-calla-en-el-jardin", label: "Habla en casa y calla allá" },
        { href: "/fonoaudiologa-ninos-chillan", label: "Fonoaudióloga en Chillán" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Qué contarle a la educadora del jardín",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía para hablar con la educadora"
      ctaTitle="¿Ya hablaste con el jardín y la duda sigue?"
      ctaBody="Cuéntame qué te dijo la educadora y qué ves en casa. Si corresponde, agendamos la evaluación en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, conversé con la educadora sobre el lenguaje de mi hijo y quiero una evaluación en Chillán",
      )}
      ctaLabel="Pedir hora por WhatsApp"
    >
      <h2>Qué decir, en cuatro líneas</h2>
      <ul>
        <li>La edad.</li>
        <li>Un ejemplo de la casa: cómo pide o cómo cuenta.</li>
        <li>Si lo entienden personas que no viven con ustedes.</li>
        <li>La pregunta concreta: «¿cómo lo ves en la sala, con otros niños?».</li>
      </ul>
      <p>
        Evita llegar con «creo que es TEL» o «tiene dislalia». Esos nombres
        están en el glosario para entenderlos, no para ponerlos antes de
        evaluar. Si ella ya te derivó, lee{" "}
        <Link href="/preguntas/el-jardin-me-derivo-a-fonoaudiologia">
          qué hago con esa derivación
        </Link>
        .
      </p>
      <h2>Qué pedirle de vuelta</h2>
      <p>
        Si habla con compañeros o solo con adultos. Si pide con palabras o con
        la mano. Si se traba. Si comprende las instrucciones del grupo o solo
        copia a los demás. Esas respuestas sirven en la hora con{" "}
        <Link href="/fonoaudiologa-ninos-chillan">Katia Domínguez</Link>. Si el
        contraste es que en casa habla y allá no, está la pregunta{" "}
        <Link href="/preguntas/habla-en-casa-y-calla-en-el-jardin">
          habla en casa y se calla en el jardín
        </Link>
        .
      </p>
      <p>
        No le pidas que haga de terapeuta ni que te mande ejercicios. Si hace
        falta un plan, sale de la evaluación, no de una conversación en la
        puerta a la hora de salida.
      </p>
    </GuiaPage>
  );
}
