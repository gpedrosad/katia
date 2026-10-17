import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "../guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/guias-padres/bilinguismo-y-lenguaje-infantil";
const TITLE = "Bilingüismo y lenguaje infantil: qué mirar";
const DESCRIPTION =
  "Dos idiomas no causan un trastorno del lenguaje. Cómo mirar las palabras en ambos, la mezcla de idiomas y cuándo sí conviene evaluar.";

const faqs = [
  {
    question: "¿Hablarle dos idiomas lo confunde?",
    answer:
      "Mezclar palabras de los dos idiomas es habitual y no prueba confusión. Los niños bilingües usan la palabra que tienen más a mano. Un trastorno no se diagnostica por esa mezcla: se mira si comprende y se expresa con dificultad en los dos idiomas, no en uno solo comparado con un niño que habla únicamente castellano.",
  },
  {
    question: "¿Conviene dejar un idioma para que hable más rápido?",
    answer:
      "En general, no. Quitar el idioma de la casa no corrige un trastorno y sí puede cortar la forma en que una parte de la familia se relaciona con él. Si hay una dificultad, suele aparecer en los dos idiomas. La evaluación tiene que considerar ambos, no pedirte que apagues uno antes de mirar.",
  },
  {
    question: "¿Un idioma por persona es obligatorio?",
    answer:
      "No es una regla. A algunas familias les acomoda que cada adulto use un idioma con el niño. Otras mezclan y el niño igual recibe bastante de los dos. Importa más que el idioma se use de verdad —en el juego, la comida y los cuentos— que cumplir un esquema rígido.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "bilingüismo y lenguaje infantil",
    "niño bilingüe habla poco",
    "dos idiomas retraso del lenguaje",
    "mezclar idiomas en niños",
  ],
});

export default function BilinguismoPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Guías para padres", href: "/guias-padres" },
        { label: "Bilingüismo", href: PATH },
      ]}
      eyebrow="Dos idiomas en casa"
      title="Bilingüismo y lenguaje infantil: qué mirar"
      lead="Crecer con dos idiomas no es un problema de lenguaje. La duda aparece cuando alguien compara a tu hijo solo con niños que hablan castellano, o cuando te piden que dejes el otro idioma «para que hable bien»."
      related={[
        { href: "/fonoaudiologa-ninos-chillan", label: "Fonoaudióloga infantil en Chillán" },
        { href: "/recursos/hitos-del-lenguaje-por-edad", label: "Hitos del lenguaje por edad" },
        { href: "/servicios/evaluacion-del-lenguaje-infantil-chillan", label: "Evaluación del lenguaje" },
        { href: "/glosario/tel", label: "Qué es el TEL" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Bilingüismo y lenguaje infantil: qué mirar en casa",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      ctaTitle="¿Te pidieron dejar un idioma y no te calza?"
      ctaBody="Se puede evaluar el lenguaje considerando los dos idiomas que escucha tu hijo. Cuéntame cuáles se hablan en casa y qué te preocupa."
      whatsappHref={whatsappUrl(
        "Hola, en casa hablamos más de un idioma y quiero evaluar el lenguaje de mi hijo",
      )}
      ctaLabel="Preguntar por una evaluación"
    >
      <p>
        En Chillán hay casas donde se habla castellano y también inglés, creole,
        mapudungun u otro idioma: un padre, una abuela, una cuidadora. Eso es
        bilingüismo del día a día, no un programa especial. Tu hijo puede
        entender la comida en un idioma y el juego en el otro. Las dos vías
        cuentan. Lo que no cuenta es exigirle el vocabulario de un niño
        monolingüe en cada idioma por separado y concluir que «va atrasado».
      </p>
      <p>
        El acuerdo más firme entre quienes trabajan lenguaje infantil es este:
        aprender dos idiomas no provoca un trastorno del lenguaje. Un niño con
        un trastorno lo muestra en los dos idiomas, no solo en el que llegó
        después. Mezclar palabras —decir una frase con términos de ambos— es
        una conducta habitual, no una alarma por sí misma.
      </p>

      <h2>Cómo mirar las palabras sin descontar un idioma</h2>
      <p>
        Si haces una lista, anota la idea, no solo la palabra en castellano.
        «Agua» y «water» son dos formas de pedir lo mismo: para el concepto,
        cuenta una vez si estás mirando cuántas ideas maneja, y las dos formas
        importan si estás mirando qué tan rico es cada idioma. Un niño puede
        saber menos palabras en castellano que su compañero del jardín y, al
        sumar el otro idioma, estar en un rango parecido al de los demás.
      </p>
      <p>
        Por eso los{" "}
        <Link href="/recursos/hitos-del-lenguaje-por-edad">
          hitos del lenguaje por edad
        </Link>{" "}
        sirven como referencia general, no como una regla que ignore el segundo
        idioma. Úsalos para ver si hay intención de comunicar, si comprende
        pedidos simples y si las frases van creciendo. No los uses para exigir
        que cada idioma, por separado, se vea idéntico al de un niño que solo
        escucha castellano.
      </p>

      <h2>Mezclar idiomas no es el problema</h2>
      <p>
        Cuando tu hijo dice «quiero más leche» con una palabra cambiada al otro
        idioma, está armando una frase con lo que tiene disponible. Los adultos
        bilingües también lo hacen. Puedes responder con la frase completa en
        el idioma que tú estás usando en ese momento, sin corregirlo como si
        hubiera fallado un dictado. Modelar es más útil que «dilo bien».
      </p>
      <p>
        La mezcla preocupa de más cuando se confunde con otra cosa: que no lo
        entiendan fuera de casa, que se frustre o que casi no intente hablar.
        Esas señales se miran aparte. Si solo mezcla y por lo demás conversa,
        juega y comprende, no hace falta un plan para «separarle los idiomas»
        a la fuerza.
      </p>

      <h2>Un trastorno se ve en los dos idiomas</h2>
      <p>
        Esta es la pista que más ayuda a las familias. Si tu hijo comprende
        poco en castellano y también comprende poco en el idioma de la casa,
        no alcanza con decir «es que es bilingüe». Lo mismo si en los dos le
        cuesta armar frases, contar lo que hizo o seguir una instrucción
        simple. Ahí la evaluación del lenguaje tiene sentido, y tiene que
        preguntar por los dos.
      </p>
      <p>
        Al revés: si en la casa, en el idioma que más escucha, conversa y
        comprende, y la dificultad aparece solo en el idioma nuevo del jardín,
        lo esperable es darle tiempo y exposición, no etiquetar un retraso con
        la vara del idioma que acaba de entrar. Un periodo más callado al
        llegar a un idioma nuevo es frecuente. Puede durar semanas o algunos
        meses. Mientras tanto, fíjate si entiende cada vez más y si se
        comunica con gestos, miradas o palabras sueltas.
      </p>
      <p>
        Si la dificultad es clara en los dos, los nombres que a veces aparecen
        —retraso del lenguaje o{" "}
        <Link href="/glosario/tel">TEL</Link>— no se ponen por ser bilingüe.
        Se plantean cuando la comprensión o la expresión quedan por detrás en
        el conjunto de sus idiomas. Una{" "}
        <Link href="/servicios/evaluacion-del-lenguaje-infantil-chillan">
          evaluación del lenguaje
        </Link>{" "}
        en Chillán puede ordenar esa diferencia. Llega con ejemplos en los dos
        idiomas, aunque quien evalúe hable solo castellano: tu descripción es
        parte de la información.
      </p>

      <h2>No tienes que apagar un idioma</h2>
      <p>
        A veces el jardín o un familiar pide «háblenle solo castellano para que
        despegue». Suena práctico y suele salir caro. El idioma que se apaga
        es, muchas veces, el de la abuela, el de los cariños o el de los
        cuentos. Perderlo no repara un trastorno. Si el castellano es el idioma
        del jardín, puede crecer con más exposición —cuentos, juegos, conversación—
        sin borrar el otro.
      </p>
      <p>
        «Un adulto, un idioma» es una forma ordenada de hacerlo, no la única
        correcta. Si los dos adultos hablan los dos idiomas, también puede
        funcionar, siempre que tu hijo reciba bastante de cada uno en
        situaciones reales. Un idioma que solo aparece en una aplicación, media
        hora a la semana, no se parece a una casa bilingüe. Las pantallas en
        otro idioma no sustituyen a una persona: de eso habla la guía de{" "}
        <Link href="/guias-padres/pantallas-y-lenguaje-infantil">
          pantallas y lenguaje
        </Link>
        .
      </p>

      <h2>Qué anotar antes de pedir hora</h2>
      <ul>
        <li>Qué idiomas escucha, con quién y en qué momentos del día.</li>
        <li>En cuál comprende mejor pedidos como «trae los zapatos».</li>
        <li>Si mezcla palabras dentro de una frase o si evita hablar.</li>
        <li>Si la dificultad se nota en los dos idiomas o solo en el más nuevo.</li>
        <li>Qué dijo el jardín y en qué idioma fue la observación.</li>
      </ul>
      <p>
        Con esas notas la conversación parte de tu hijo, no de un mito. Si
        quieres revisarlo de forma presencial, la puerta de entrada es{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          fonoaudiología infantil en Chillán
        </Link>
        . No hace falta que traduzcas todo ni que llegues con un informe del
        colegio: basta la edad, los idiomas de la casa y dos o tres ejemplos.
      </p>
    </GuiaPage>
  );
}
