import Link from "next/link";
import { PreguntaArticle } from "@/app/preguntas/_components/PreguntaArticle";
import { guiaMetadata } from "@/app/guias-padres/guia-ui";

const PATH = "/preguntas/habla-en-casa-y-calla-en-el-jardin";
const TITLE = "Habla en casa y en el jardín se calla";
const DESCRIPTION =
  "Hablar en casa y callar en el jardín no es un diagnóstico. Qué anotar de los dos lugares antes de la evaluación en Chillán.";

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "habla en casa y no en el jardín",
    "niño callado en el colegio",
    "no habla en la sala",
  ],
});

const answer =
  "Que hable en casa y casi no hable en el jardín es un contraste real, no un diagnóstico. Puede ser timidez de las primeras semanas o una evitación que se mantiene. Anota los dos lugares y, si además se traba o dice muy poco también en casa, dilo en la evaluación.";

export default function HablaEnCasaCallaPage() {
  return (
    <PreguntaArticle
      path={PATH}
      crumb="Calla en el jardín"
      title={TITLE}
      answer={answer}
      whatsappMessage="Hola, mi hijo habla en casa y en el jardín casi no habla. Quiero una orientación en Chillán"
      ctaLabel="Consultar el contraste"
      related={[
        { href: "/tartamudez/no-quiere-hablar-en-el-jardin", label: "No quiere hablar en el jardín" },
        { href: "/preguntas/el-jardin-me-derivo-a-fonoaudiologia", label: "Si el jardín te derivó" },
        { href: "/guias-padres/que-contarle-a-la-educadora", label: "Qué contarle a la educadora" },
        { href: "/fonoaudiologa-ninos-chillan", label: "Fonoaudióloga en Chillán" },
      ]}
      tambien={[
        "/preguntas/fonoaudiologo-o-psicologo",
        "/preguntas/cuando-llevar-a-mi-hijo-al-fonoaudiologo",
        "/preguntas/el-jardin-me-derivo-a-fonoaudiologia",
      ]}
      faqs={[
        {
          question: "¿Si en casa habla harto, descarto un problema?",
          answer:
            "No automáticamente. El habla de la casa muestra que puede decir cosas con gente conocida. No explica por qué en la sala no lo hace. Las dos escenas se llevan a la evaluación.",
        },
        {
          question: "¿Le pido que practique hablar delante de visitas?",
          answer:
            "Exhibirlo suele cerrarlo más. Mejor baja la audiencia y observa si aparece el habla cuando el grupo es chico. No es un entrenamiento.",
        },
      ]}
    >
      <h2>Dos columnas, no una etiqueta</h2>
      <p>
        En una columna: con quién habla en casa, si arma frases, si se traba.
        En la otra: si en el jardín pide, si le habla a un compañero, si solo
        usa gestos, desde cuándo. Esa tabla casera vale más que buscar el
        nombre del cuadro en internet.
      </p>
      <p>
        La guía{" "}
        <Link href="/tartamudez/no-quiere-hablar-en-el-jardin">
          no quiere hablar en el jardín
        </Link>{" "}
        baja esto a lo que puedes preguntarle a la educadora. Si vas a
        escribirle, usa{" "}
        <Link href="/guias-padres/que-contarle-a-la-educadora">
          qué contarle a la educadora
        </Link>
        : ejemplos, no una etiqueta.
      </p>
      <h2>Cuándo no lo dejes solo en «es tímido»</h2>
      <p>
        Las primeras semanas de sala pueden ser silencio. Si pasan los meses,
        si tampoco habla con niños en la plaza o si en casa el lenguaje es
        corto, la timidez se queda chica como única frase. Ahí pide la
        evaluación en Chillán con{" "}
        <Link href="/fonoaudiologa-ninos-chillan">Katia Domínguez</Link>. Si el
        jardín ya te lo dijo por escrito, parte también por{" "}
        <Link href="/preguntas/el-jardin-me-derivo-a-fonoaudiologia">
          la derivación del jardín
        </Link>
        .
      </p>
    </PreguntaArticle>
  );
}
