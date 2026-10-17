import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "../guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/guias-padres/cuando-el-hermano-habla-por-el";
const TITLE = "Cuando el hermano habla por él: qué hacer";
const DESCRIPTION =
  "Si el hermano mayor responde por tu hijo, puedes devolverle el turno sin retarlo. Qué observar cuando el menor casi no intenta hablar por su cuenta.";

const faqs = [
  {
    question: "¿Es malo que el hermano mayor lo ayude a hablar?",
    answer:
      "Ayudar no es el problema. El mayor suele traducir porque quiere que la casa funcione y porque entiende antes. Se complica cuando el menor ya no necesita intentarlo: espera, señala al hermano y se queda callado. Puedes agradecer la ayuda y, al mismo tiempo, dejarle al menor el primer turno.",
  },
  {
    question: "¿Le digo al mayor que se calle?",
    answer:
      "Un «cállate» lo deja como culpable de algo que hacía por cariño o por costumbre. Funciona mejor un encargo claro: «primero lo miramos a él, contamos hasta tres y, si no sale, tú me ayudas». El mayor sigue teniendo un papel. El menor recupera un espacio.",
  },
  {
    question: "¿Y si el menor tampoco habla cuando están solos?",
    answer:
      "Ahí el hermano ya no explica la escena. Si a solas también hay pocos intentos, poca comprensión o mucha frustración, conviene mirar el lenguaje del menor, no solo la dinámica entre ellos. Anota un ejemplo con el hermano presente y otro sin él.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "el hermano habla por él",
    "hermano mayor responde por el menor",
    "niño no habla y el hermano habla",
    "habla poco por el hermano",
  ],
});

export default function HermanoHablaPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Guías para padres", href: "/guias-padres" },
        { label: "El hermano habla por él", href: PATH },
      ]}
      eyebrow="Hermanos"
      title="Cuando el hermano habla por tu hijo"
      lead="El mayor contesta, pide el jugo y cuenta lo que pasó en el jardín. El menor asiente. A veces es complicidad. A veces el menor dejó de practicar porque alguien más rápido ya dijo la frase."
      related={[
        { href: "/fonoaudiologa-ninos-chillan", label: "Fonoaudióloga infantil en Chillán" },
        { href: "/sintomas/hijo-habla-poco-edad-chillan", label: "Si habla poco para su edad" },
        { href: "/recursos/estimular-lenguaje-en-casa", label: "Estimular el lenguaje en casa" },
        { href: "/recursos/senales-de-alerta-del-lenguaje-y-habla", label: "Señales de alerta" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Cuando el hermano habla por tu hijo: qué puedes hacer",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      ctaTitle="¿El menor tampoco intenta cuando están solos?"
      ctaBody="Si la duda ya no es solo el hermano, una evaluación del lenguaje ordena qué está pasando. Cuéntame las edades de los dos y un ejemplo concreto."
      whatsappHref={whatsappUrl(
        "Hola, el hermano mayor habla por mi hijo y quiero orientación sobre su lenguaje",
      )}
      ctaLabel="Escribir por WhatsApp"
    >
      <p>
        En muchas casas el hijo mayor es el traductor oficial. Conoce las
        palabras, se anticipa y evita el llanto. Tú también te acostumbras:
        preguntas al mayor porque la respuesta llega. Nadie está haciendo algo
        malo. El costo aparece despacio. El menor aprende que su turno no hace
        falta. Señala al hermano, espera y recibe igual el jugo, el cuento o
        la respuesta.
      </p>
      <p>
        Eso no significa que el mayor «le esté atrasando el lenguaje» como si
        fuera una causa única. Significa que hay menos práctica. El lenguaje
        crece cuando el intento, aunque sea torpe, obtiene una respuesta. Si
        el intento nunca llega a salir, hay menos oportunidades de ajustar la
        frase. La guía es para devolverle ese intento al menor sin convertir
        al mayor en el problema.
      </p>

      <h2>Por qué el mayor se adelanta</h2>
      <p>
        A veces lo hace por cariño: quiere que su hermano consiga lo que pide.
        A veces lo hace porque la casa va con prisa y la frase del menor tarda.
        A veces porque los adultos le han dicho, sin querer, que su rol es
        «hablar por los dos». También puede pasar que el menor mire al mayor
        antes de cualquier sonido, y el mayor lea esa mirada como un pedido de
        auxilio. Las dos lecturas caben. No tienes que decidir cuál es «la
        verdadera» para cambiar el turno.
      </p>
      <p>
        Observa una comida sin corregir a nadie. ¿A quién miras tú cuando
        preguntas qué quieren tomar? ¿El menor alcanza a abrir la boca? ¿El
        mayor responde mirándote a ti o mirándolo a él? Esos segundos dicen
        más que una charla larga sobre «dejarlo expresarse».
      </p>

      <h2>El primer turno es del que todavía no habla tanto</h2>
      <p>
        El cambio más concreto es el orden. Pregúntale al menor, agáchate a su
        altura y espera. Cuenta hasta tres por dentro. Si aparece un gesto, una
        palabra a medias o un sonido, respóndele a él: «jugo. Quieres jugo».
        Recién ahí, si no alcanzó, el mayor puede completar. La frase de
        cierre puede ser: «tu hermano dijo jugo. Gracias por esperar».
      </p>
      <p>
        El mayor necesita un papel, si no se siente echado de la conversación.
        Puedes dárselo después del silencio: «ahora tú cuéntame la parte que
        falta» o «ayúdame a escuchar, no a contestar al tiro». Elogia la
        espera, que es la conducta nueva. Si solo elogias cuando traduce, va a
        seguir traduciendo. Es lo que le ha funcionado.
      </p>
      <p>
        Las opciones cerradas le dejan al menor un turno corto: «¿jugo o
        leche?», mientras le muestras los dos. No es un interrogatorio de
        cinco preguntas. Es una sola decisión, posible de contestar con la
        mano o con una sílaba. Más ideas de este estilo, para la rutina y no
        solo para los hermanos, están en{" "}
        <Link href="/recursos/estimular-lenguaje-en-casa">
          cómo estimular el lenguaje en casa
        </Link>
        .
      </p>

      <h2>Qué decirle al mayor sin dejarlo de culpable</h2>
      <p>
        Habla con el mayor en un momento en que el menor no esté en el medio
        del conflicto. Algo así alcanza: «me encanta cómo lo cuidas. Vamos a
        probar una cosa. Yo le pregunto primero. Tú esperas. Si no sale,
        entras tú. Sigues siendo su ayuda». Evita «por tu culpa no habla». No
        es justo y además no es exacto: hablar poco puede tener otras razones,
        y el mayor no las causó.
      </p>
      <p>
        Si el mayor es muy pequeño, la explicación larga no entra. Basta el
        gesto repetido: tu mano suave en su hombro, «espera», y después
        «ahora sí». Los niños copian el orden que ven, no el discurso. Si tú
        también te adelantas y respondes por el menor, el mayor está imitando
        la casa. Parte por tu propia pausa.
      </p>

      <h2>Cuando el menor sí quiere y no lo dejan</h2>
      <p>
        Hay otra escena: el menor empieza la frase y el mayor la tapa. Ahí el
        menor se frustra, empuja o llora. No le falta intención. Le falta
        espacio. Puedes ponerle palabras a eso sin sermón: «estabas diciendo
        tú. Seguimos contigo». Devuélvele la palabra exacta que alcanzó a
        decir, aunque esté incompleta, para que note que su intento se oyó.
      </p>
      <p>
        En el juego pasa lo mismo. Si el mayor narra todo el juego de roles
        («tú eras el doctor y dijiste que yo estaba enfermo»), invierte un
        turno: el menor elige el personaje aunque sea señalando, y el mayor
        espera a que «el doctor» haga un gesto antes de seguir la historia.
        No tienes que lograr un diálogo largo. Un turno recuperado ya cambia
        el patrón.
      </p>

      <h2>Cuando el hermano no explica lo que ves</h2>
      <p>
        Prueba un rato a solas con el menor, sin el mayor en la pieza. Si ahí
        señala, balbucea, trae juguetes y te mira, la dinámica entre hermanos
        pesa mucho y el lenguaje de base está en marcha. Sigue con las pausas
        y no hace falta alarmarse por el traductor de la casa.
      </p>
      <p>
        Si a solas también hay poco intento, no responde a su nombre, comprende
        poco o se frustra para pedir, el hermano es solo una parte de la
        escena. Esas dudas están descritas en{" "}
        <Link href="/sintomas/hijo-habla-poco-edad-chillan">
          habla poco para su edad
        </Link>{" "}
        y en las{" "}
        <Link href="/recursos/senales-de-alerta-del-lenguaje-y-habla">
          señales de alerta
        </Link>
        . No copies un diagnóstico desde esta página. Anota dos ejemplos: uno
        con el hermano y otro sin él. Con eso, una evaluación en Chillán puede
        separar costumbre de dificultad. La puerta está en{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          fonoaudiología infantil
        </Link>
        .
      </p>
      <p>
        Lleva las edades de los dos, quién pasa más tiempo con ellos y si en
        el jardín el menor habla distinto que en la casa. A veces en la sala,
        sin el hermano, aparece otro niño. Esa diferencia también es
        información, no una contradicción.
      </p>
    </GuiaPage>
  );
}
