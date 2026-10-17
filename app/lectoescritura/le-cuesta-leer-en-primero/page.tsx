import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/lectoescritura/le-cuesta-leer-en-primero";
const TITLE = "Le cuesta leer en primero básico";
const DESCRIPTION =
  "En primero, leer puede ser esfuerzo, adivinación o rechazo. Cómo observarlo sin llamarlo dislexia desde la casa. Evaluación en Chillán.";

const faqs = [
  {
    question: "¿Es normal que primero básico cueste?",
    answer:
      "Aprender a leer pide práctica y no todos parten igual. Si el esfuerzo es enorme, adivina en vez de leer o se niega, ya no es solo «le cuesta al principio». Conviene describirlo y evaluar.",
  },
  {
    question: "¿Lo dejo sin apoyo para que no se estrese?",
    answer:
      "Esperar sin mirar no baja la frustración: la sala sigue avanzando. Puedes bajar la pelea en casa —textos cortos, sin examen— y aun así pedir una evaluación.",
  },
  {
    question: "¿Es tarde si ya está en primero?",
    answer:
      "No. La pregunta «¿es tarde consultar en básica?» responde eso: se puede mirar cuando ya hay lectura y sala de clases. Mientras antes se entienda qué se traba, más claro es el apoyo.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "le cuesta leer en primero básico",
    "no quiere leer",
    "dificultad de lectura primero",
    "fonoaudióloga lectura Chillán",
  ],
});

export default function LeCuestaLeerPrimeroPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Lectoescritura", href: "/lectoescritura" },
        { label: "Primero básico", href: PATH },
      ]}
      eyebrow="Lectoescritura"
      title="Le cuesta leer en primero básico"
      lead="Primero es el año en que la lectura deja de ser un juego del jardín. Si cada tarea termina en enojo, observa cómo lee, no solo si «no le gusta»."
      related={[
        { href: "/lectoescritura", label: "Guías de lectoescritura" },
        { href: "/preguntas/es-tarde-consultar-en-basica", label: "¿Es tarde consultar en básica?" },
        { href: "/servicios/dificultades-lectoescritura", label: "Dificultades de lectoescritura" },
        { href: "/chillan/lectoescritura", label: "Lectoescritura en Chillán" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Le cuesta leer en primero básico",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía de lectura en primero"
      ctaTitle="¿La tarea de lectura ya es un conflicto?"
      ctaBody="Cuéntame qué pasa en una página: si silabea, adivina o cierra el libro. Coordinamos la evaluación en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, a mi hijo le cuesta leer en primero básico y quiero evaluar en Chillán",
      )}
      ctaLabel="Consultar por la lectura"
      backHref="/lectoescritura"
      backLabel="← Volver a lectoescritura"
    >
      <p>
        Que primero básico sea exigente no explica, por sí solo, que leer una
        frase corta sea una pelea diaria. Hay niños que van lento y entienden.
        Hay otros que miran la primera letra, dicen una palabra parecida y
        siguen, o que esconden el libro.
      </p>
      <h2>Tres formas de «le cuesta»</h2>
      <ul>
        <li>
          <strong>Esfuerzo largo y acierto.</strong> Demora, y la palabra
          termina bien. Anótalo: el ritmo importa, y no es lo mismo que
          adivinar.
        </li>
        <li>
          <strong>Adivina.</strong> No une los sonidos. Ahí cruza con{" "}
          <Link href="/lectoescritura/confunde-letras-al-leer">
            confundir letras
          </Link>{" "}
          y con la{" "}
          <Link href="/servicios/conciencia-fonologica-chillan">
            conciencia fonológica
          </Link>
          .
        </li>
        <li>
          <strong>Se niega.</strong> La negativa a veces esconde el esfuerzo.
          Bajar los gritos en casa no reemplaza mirar qué no puede hacer.
        </li>
      </ul>
      <h2>Sin ponerle dislexia en la cocina</h2>
      <p>
        La palabra dislexia se usa demasiado rápido. La evaluación está en{" "}
        <Link href="/chillan/dislexia">dislexia en Chillán</Link> y el servicio
        general en{" "}
        <Link href="/servicios/dificultades-lectoescritura">
          dificultades de lectoescritura
        </Link>
        . Si te preguntas si ya es tarde, lee{" "}
        <Link href="/preguntas/es-tarde-consultar-en-basica">
          ¿es tarde consultar en básica?
        </Link>
        . No lo es.
      </p>
      <p>
        En la hora con{" "}
        <Link href="/fonoaudiologa-ninos-chillan">Katia Domínguez</Link> sirve
        un ejemplo del cuaderno y cómo fue la tarea, no un niño que ensayó la
        página hasta memorizarla.
      </p>
    </GuiaPage>
  );
}
