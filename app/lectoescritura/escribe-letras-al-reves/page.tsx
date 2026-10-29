import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "@/app/guias-padres/guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/lectoescritura/escribe-letras-al-reves";
const TITLE = "Escribe letras al revés o invierte letras";
const DESCRIPTION =
  "Si escribe letras al revés o invierte letras, a veces es el inicio de la escritura. Mira también qué pasa cuando lee. Evaluación en Chillán.";

const faqs = [
  {
    question: "¿Escribir una letra al revés es dislexia?",
    answer:
      "No por sí solo. Al inicio de la escritura es frecuente que alguna letra salga espejada. Preocúpate más si la lectura también se traba: confunde, adivina o evita. Eso se evalúa; no se nombra desde el cuaderno.",
  },
  {
    question: "¿Le corrijo cada letra en el momento?",
    answer:
      "Señalar todas las letras del cuaderno corta las ganas de escribir. Puedes mostrar tú la letra en una palabra que le importe y seguir. Si la lectura ya cuesta, la prioridad no es el espejo aislado.",
  },
  {
    question: "¿El colegio debe pedirme un informe?",
    answer:
      "A veces lo piden para orientar el apoyo. Tú también puedes pedir la evaluación sin esperar esa solicitud. La página del informe fonoaudiológico PIE explica para qué sirve ese documento.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "escribe letras al revés",
    "escritura en espejo niños",
    "letras invertidas",
    "escritura infantil Chillán",
  ],
});

export default function EscribeAlRevesPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Lectoescritura", href: "/lectoescritura" },
        { label: "Letras al revés", href: PATH },
      ]}
      eyebrow="Lectoescritura"
      title="Escribe letras al revés"
      lead="Una letra espejada asusta más de lo que, sola, explica. Mira si el resto de la escritura y de la lectura avanza, o si el cuaderno es solo una parte de una lectura que no despega."
      related={[
        { href: "/lectoescritura", label: "Guías de lectoescritura" },
        { href: "/lectoescritura/confunde-letras-al-leer", label: "Confunde letras al leer" },
        { href: "/chillan/lectoescritura", label: "Lectoescritura en Chillán" },
        { href: "/servicios/informe-fonoaudiologico-pie-chillan", label: "Informe para el colegio" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Escribe letras al revés",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      imageAlt="Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, guía de letras al revés"
      ctaTitle="¿El cuaderno ya te genera duda?"
      ctaBody="Cuéntame el curso y si, además de la letra al revés, leer una frase le cuesta. Evaluamos en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, mi hijo escribe letras al revés y quiero saber si conviene evaluar en Chillán",
      )}
      ctaLabel="Consultar por la escritura"
      backHref="/lectoescritura"
      backLabel="← Volver a lectoescritura"
    >
      <p>
        Al empezar a escribir, la dirección de una letra todavía se está
        armando. Ver una ese, una ene o un número al revés en un cuaderno de
        los primeros intentos no alcanza para concluir un trastorno. La
        pregunta siguiente es qué más pasa cuando lee.
      </p>
      <h2>Cuándo el espejo deja de ser el tema</h2>
      <ul>
        <li>Si al leer confunde letras o adivina la palabra.</li>
        <li>Si no puede decir cómo suena una letra que ya vio muchas veces.</li>
        <li>Si evita escribir y la pelea es diaria.</li>
        <li>Si el habla también cambia sonidos.</li>
      </ul>
      <p>
        Si la lectura es el centro, sigue en{" "}
        <Link href="/lectoescritura/confunde-letras-al-leer">
          confunde letras al leer
        </Link>{" "}
        y en{" "}
        <Link href="/chillan/lectoescritura">
          problemas de lectoescritura en Chillán
        </Link>
        . La base de sonidos está en{" "}
        <Link href="/servicios/conciencia-fonologica-chillan">
          conciencia fonológica
        </Link>
        .
      </p>
      <h2>Si el colegio pide un papel</h2>
      <p>
        Un informe describe lo que se observó. No se inventa en la casa. La
        página{" "}
        <Link href="/servicios/informe-fonoaudiologico-pie-chillan">
          informe fonoaudiológico PIE
        </Link>{" "}
        explica ese documento, y la pregunta{" "}
        <Link href="/preguntas/el-colegio-pidio-un-informe">
          el colegio pidió un informe
        </Link>{" "}
        dice cómo llegar a la hora sin convertir el cuaderno en un veredicto.
      </p>
    </GuiaPage>
  );
}
