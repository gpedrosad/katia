import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "../guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/guias-padres/chupete-mamadera-y-habla";
const TITLE = "Chupete, mamadera y habla de tu hijo";
const DESCRIPTION =
  "Chupete y mamadera: qué es tema del pediatra, qué puede influir en dientes y sonidos, y cuándo el habla merece una evaluación. Sin alarmas falsas.";

const faqs = [
  {
    question: "¿El chupete deja a mi hijo con un retraso del lenguaje?",
    answer:
      "No está demostrado que el chupete, por sí solo, produzca un trastorno del lenguaje. Si lo usa gran parte del día, practica menos sonidos y palabras. Si lo mantiene varios años, puede cambiar dientes y la postura de la lengua, y eso a veces se nota en sonidos como la /s/. Muchos niños usan chupete y hablan bien. La alarma no es el objeto: es si el habla no se entiende o no avanza.",
  },
  {
    question: "¿A qué edad conviene dejar la mamadera?",
    answer:
      "En alimentación y en dientes, lo habitual es pasar al vaso durante el segundo año de vida. No es una regla de habla. Un niño puede seguir con mamadera y pronunciar bien, y otro puede haberla dejado y aun así necesitar que miren su habla. Si solo queda la mamadera de la noche y el resto del día conversa, el paso puede ser gradual.",
  },
  {
    question: "¿Hay que sacarle el chupete antes del año por el habla?",
    answer:
      "En el primer año, ofrecer chupete para dormir es un tema de pediatría: se ha asociado a menor riesgo de muerte súbita del lactante. No lo retires por el habla sin conversarlo con el pediatra. La preocupación por la mordida y por algunos sonidos aparece sobre todo cuando el chupete sigue puesto gran parte del día, pasados los 2 o 3 años.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "chupete y habla",
    "mamadera y lenguaje",
    "chupete pronunciación niños",
    "dejar el chupete y el habla",
  ],
});

export default function ChupeteMamaderaPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Guías para padres", href: "/guias-padres" },
        { label: "Chupete y mamadera", href: PATH },
      ]}
      eyebrow="Hábitos de la boca"
      title="Chupete, mamadera y el habla de tu hijo"
      lead="El chupete y la mamadera no son un diagnóstico. En el primer año tienen un lugar en el cuidado del sueño y de la alimentación. Más adelante, lo que importa es cuántas horas al día ocupan la boca y si el habla se está entendiendo."
      related={[
        { href: "/fonoaudiologa-ninos-chillan", label: "Fonoaudióloga infantil en Chillán" },
        { href: "/sintomas/nino-pronuncia-mal-chillan", label: "Si pronuncia mal" },
        { href: "/tratamientos/dislalia-infantil-chillan", label: "Dislalia infantil" },
        { href: "/glosario/dislalia", label: "Qué es la dislalia" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Chupete, mamadera y el habla de tu hijo",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      ctaTitle="¿No se le entiende y el chupete ya no explica todo?"
      ctaBody="Si personas fuera de casa no lo entienden, o si los mismos sonidos fallan aunque el chupete no esté puesto, se puede evaluar el habla en Chillán."
      whatsappHref={whatsappUrl(
        "Hola, quiero evaluar el habla de mi hijo. Usa chupete o mamadera y no siempre se le entiende",
      )}
      ctaLabel="Preguntar por el habla"
    >
      <p>
        Muchas familias llegan con la misma frase: «habla así por el chupete» o
        «es la mamadera». A veces el hábito está en el medio. Casi nunca es la
        única causa. Conviene separar tres planos que se mezclan en la
        conversación de la casa: el cuidado del lactante, los dientes y el
        habla. Cada uno tiene un momento distinto.
      </p>

      <h2>El primer año: primero el pediatra</h2>
      <p>
        En los primeros meses el chupete de la siesta y de la noche es un tema
        de pediatría, no de pronunciación. Ofrecerlo al dormir se ha asociado
        a un menor riesgo de muerte súbita del lactante. Por eso no tiene
        sentido quitárselo «para que hable» antes de que siquiera esté en la
        edad de las frases. Si quieres cambiar ese hábito en el primer año,
        conversalo con quien controla su salud.
      </p>
      <p>
        La mamadera, en esa etapa, es comida. El paso al vaso se plantea sobre
        todo por dientes y por autonomía, no porque la mamadera impida las
        primeras palabras. Mientras come o se duerme con ella y el resto del
        tiempo tiene la boca libre para balbucear, el lenguaje tiene espacio.
      </p>

      <h2>Cuando el chupete se queda puesto de día</h2>
      <p>
        El cambio importante aparece si el chupete pasa de ser un objeto para
        dormir a estar en la boca durante el juego, el jardín y la conversación.
        Con la boca ocupada, tu hijo practica menos sonidos, pide más con el
        gesto y recibe menos turnos de palabra. No es que el chupete «bloquee»
        un centro del lenguaje. Es más simple: no se puede conversar bien con
        un objeto atravesado.
      </p>
      <p>
        Puedes limitar el chupete a la siesta y a la noche sin transformarlo en
        un castigo. Avísale antes: «en la calle va en el bolsillo; en la cama
        lo tienes». Si lo pide de día, ofrece un reemplazo concreto —un auto,
        tu mano, una canción— en vez de un discurso. Si se suelta llorando el
        primer día, no significa que hayas dañado el habla. Significa que el
        hábito calmaba, y el reemplazo todavía es nuevo.
      </p>

      <h2>Dientes, lengua y algunos sonidos</h2>
      <p>
        Cuando el chupete o la mamadera se mantienen varios años, el efecto
        más claro es el de la mordida: los dientes de adelante pueden quedar
        separados y la lengua acostumbrarse a asomarse. Varias guías de
        odontopediatría proponen ir dejando el chupete alrededor de los 3 años
        por esa razón. No es una fecha mágica del lenguaje. Es una referencia
        para los dientes.
      </p>
      <p>
        Esa postura a veces se nota al hablar, sobre todo en sonidos como la
        /s/, en los que la lengua se escapa entre los dientes. No le pasa a
        todos los niños que usaron chupete. Tampoco toda /s/ distinta viene
        del chupete: hay edades en las que ese sonido todavía se está
        ordenando. Si quieres el marco general de cuándo una pronunciación
        merece mirada, está la página de{" "}
        <Link href="/sintomas/nino-pronuncia-mal-chillan">
          un niño que pronuncia mal
        </Link>{" "}
        y el tratamiento de{" "}
        <Link href="/tratamientos/dislalia-infantil-chillan">
          dislalia infantil en Chillán
        </Link>
        . La definición corta está en el{" "}
        <Link href="/glosario/dislalia">glosario de dislalia</Link>.
      </p>
      <p>
        El frenillo, la forma del paladar o un patrón de errores que se repite
        en varios sonidos pueden parecerse, desde afuera, al «habla del
        chupete». Por eso no conviene decidir el diagnóstico en la casa. Una
        evaluación del habla mira cómo se mueve la lengua al hablar, no solo
        si hubo mamadera.
      </p>

      <h2>La mamadera después de los 2 años</h2>
      <p>
        Pasar de la mamadera al vaso durante el segundo año es lo más habitual
        para cuidar los dientes, sobre todo si se queda dormido con leche. Para
        el habla, el punto es parecido al del chupete: si la mamadera solo
        aparece en la noche y de día la boca está libre, es poco probable que
        ella explique frases que no se entienden. Si circula por la casa todo
        el día, reduce los ratos de conversación y mantiene un patrón de
        succión que ya no necesita para alimentarse.
      </p>
      <p>
        El cambio funciona mejor si el vaso es fácil de agarrar y si no hay una
        pelea en cada comida. Puedes mantener la mamadera de la noche un tiempo
        y mover el día al vaso. Explícaselo en una frase, no en una campaña.
        Si el dentista ya vio una mordida abierta, sigue su indicación: esa
        parte no se resuelve con ejercicios de lenguaje.
      </p>

      <h2>Qué no concluye esta guía</h2>
      <p>
        Sacar el chupete no «arregla» un trastorno del habla de un día para
        otro. Dejar la mamadera tampoco enseña, por sí solo, a armar frases.
        Si tu hijo se entiende en casa y fuera de casa, juega, comprende y el
        hábito ya está acotado a la noche, puedes seguir el ritmo del pediatra
        y del dentista sin sumar una alerta de lenguaje.
      </p>
      <p>
        Pide una mirada fonoaudiológica si, con o sin chupete en la boca, cuesta
        entenderlo, si evita hablar o si el jardín repite que no se le
        entiende. El lugar para esa evaluación en Chillán está en{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          fonoaudiología infantil
        </Link>{" "}
        y en{" "}
        <Link href="/servicios/trastornos-del-habla">
          trastornos del habla
        </Link>
        . Cuenta desde cuándo usa chupete o mamadera, si es solo para dormir y
        qué sonidos te cuestan entender. Con eso se distingue un hábito de un
        problema de habla.
      </p>
    </GuiaPage>
  );
}
