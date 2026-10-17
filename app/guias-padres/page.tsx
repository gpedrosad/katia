import Link from "next/link";
import { GUIAS_PADRES } from "./guias";
import { GuiaPage, guiaMetadata } from "./guia-ui";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PATH = "/guias-padres";
const TITLE = "Guías de lenguaje infantil para padres";
const DESCRIPTION =
  "Guías para padres: pantallas, bilingüismo, hábitos, oídos, familia y jardín. Orientación general y cómo agendar en Chillán.";

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  ogType: "website",
  keywords: [
    "guías para padres lenguaje infantil",
    "pantallas y lenguaje",
    "bilingüismo infantil",
    "chupete y habla",
    "lectura de cuentos lenguaje",
  ],
});

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}${PATH}#collection`,
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  inLanguage: "es-CL",
  hasPart: GUIAS_PADRES.map((guia) => ({
    "@type": "Article",
    name: guia.title,
    description: guia.summary,
    url: `${SITE_URL}${guia.href}`,
  })),
};

export default function GuiasPadresPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Guías para padres", href: PATH },
      ]}
      eyebrow="Para la casa"
      title="Guías para padres sobre el lenguaje infantil"
      lead="Temas que suelen aparecer en la cocina, en el jardín y en el celular, y que no reemplazan una evaluación. Sirven para observar con más calma y decidir si conviene pedir hora."
      related={[
        { href: "/fonoaudiologa-ninos-chillan", label: "Fonoaudiología infantil en Chillán" },
        { href: "/recursos", label: "Recursos que ya están publicados" },
        { href: "/recursos/hitos-del-lenguaje-por-edad", label: "Hitos por edad" },
        { href: "/contacto-fonoaudiologa-chillan", label: "Contacto" },
      ]}
      jsonLd={[collectionJsonLd]}
      ctaTitle="¿La duda sigue después de leer?"
      ctaBody="Cuéntame la edad de tu hijo y qué te llama la atención. En la primera conversación vemos si corresponde evaluar."
      whatsappHref={whatsappUrl(
        "Hola, leí las guías para padres y quiero orientación sobre el lenguaje de mi hijo",
      )}
      ctaLabel="Escribir por WhatsApp"
      showBackLink={false}
    >
      <p>
        Estas guías están escritas para madres, padres y cuidadores. Usan lo que
        la pediatría y la fonoaudiología repiten con más acuerdo: el lenguaje se
        aprende en la conversación, con alguien que responde, y una sola costumbre
        de la casa casi nunca explica todo. No hay aquí cifras inventadas ni una
        receta que reemplace mirar a tu hijo.
      </p>
      <p>
        Tres temas que también interesan a las familias ya tienen su propia
        página. Si buscas juegos y rutinas por edad, parte por{" "}
        <Link href="/recursos/estimular-lenguaje-en-casa">
          cómo estimular el lenguaje en casa
        </Link>
        . Si quieres señales de que no conviene seguir esperando, está la guía de{" "}
        <Link href="/recursos/senales-de-alerta-del-lenguaje-y-habla">
          señales de alerta del lenguaje y el habla
        </Link>
        , junto con los{" "}
        <Link href="/recursos/hitos-del-lenguaje-por-edad">
          hitos del lenguaje por edad
        </Link>
        . Si la hora ya está tomada o estás por pedirla, lee{" "}
        <Link href="/recursos/primera-evaluacion-fonoaudiologica-infantil">
          qué esperar en la primera evaluación
        </Link>
        . Esta sección no vuelve a contar eso.
      </p>

      <h2>Elige la guía según la duda</h2>
      <ul>
        {GUIAS_PADRES.map((guia) => (
          <li key={guia.href}>
            <Link href={guia.href}>{guia.title}</Link>. {guia.summary}
          </li>
        ))}
      </ul>

      <h2>Cómo usarlas sin asustarte</h2>
      <p>
        Léelas como una linterna, no como un veredicto. Una costumbre —el
        chupete, la tele, el hermano que responde primero— puede convivir con un
        desarrollo que va bien, y también puede convivir con una dificultad que
        ya estaba. La guía te ayuda a separar esas dos cosas y a anotar ejemplos
        concretos: qué dijo, en qué momento, quién estaba cerca y si te miró.
      </p>
      <p>
        Si después de observar una o dos semanas la duda sigue, o si el jardín
        te lo comentó, el paso siguiente es una{" "}
        <Link href="/servicios/evaluacion-fonoaudiologica">
          evaluación fonoaudiológica
        </Link>
        . En Chillán puedes partir por la página de{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          fonoaudiología infantil
        </Link>{" "}
        y escribir por WhatsApp con la edad y el motivo. No hace falta llegar
        con un diagnóstico puesto en casa.
      </p>
      <p>
        Nada de lo que leas aquí cambia un tratamiento médico. Si hay fiebre,
        dolor de oído, rechazo de la comida o algo que te preocupe en la salud,
        el pediatra va primero. La fonoaudiología entra cuando la pregunta es
        cómo se comunica tu hijo.
      </p>
    </GuiaPage>
  );
}
