import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "../guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/guias-padres/otitis-audicion-y-lenguaje";
const TITLE = "Otitis a repetición y lenguaje infantil";
const DESCRIPTION =
  "Otitis, líquido en el oído y lenguaje: qué puedes notar en casa, por qué el pediatra va primero y cuándo sumar una evaluación fonoaudiológica.";

const faqs = [
  {
    question: "¿Varias otitis significan que va a tener un retraso?",
    answer:
      "No. Hay niños con varios cuadros de oído que conversan bien, y niños sin otitis que igual necesitan apoyo de lenguaje. Lo que sí puede pasar es que, mientras el oído está tapado, escuche peor y más fluctuante: un día responde y otro parece que no oyó. Eso merece control médico. No es, por sí solo, un diagnóstico de lenguaje.",
  },
  {
    question: "¿La fonoaudióloga trata la otitis?",
    answer:
      "No. El dolor, la fiebre, el líquido y la decisión de tratarlos son del pediatra o del otorrino. La fonoaudiología mira cómo se comunica tu hijo y cómo oye en la conversación cotidiana. Si la audición está comprometida, primero se aclara el oído. Hacer ejercicios de lenguaje encima de un oído tapado no reemplaza ese paso.",
  },
  {
    question: "¿Cuándo pido además una evaluación de lenguaje?",
    answer:
      "Cuando, además del oído, notas que comprende poco, habla muy poco para su edad o no se le entiende, y eso sigue incluso en las semanas en que parece oír mejor. También si el jardín lo comenta. Lleva las fechas aproximadas de las otitis y si ya le hicieron una audiometría.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "otitis y lenguaje infantil",
    "otitis a repetición y habla",
    "líquido en el oído y lenguaje",
    "niño no oye bien y habla poco",
  ],
});

export default function OtitisAudicionPage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Guías para padres", href: "/guias-padres" },
        { label: "Otitis y lenguaje", href: PATH },
      ]}
      eyebrow="Oídos y lenguaje"
      title="Otitis, audición y lenguaje infantil"
      lead="Un resfrío que termina en otitis cambia lo que tu hijo oye durante días o semanas. El lenguaje se alimenta de lo que oye. Por eso el oído se revisa con el pediatra, y el habla se mira cuando la duda sigue más allá del resfrío."
      related={[
        { href: "/fonoaudiologa-ninos-chillan", label: "Fonoaudióloga infantil en Chillán" },
        { href: "/servicios/evaluacion-fonoaudiologica", label: "Evaluación fonoaudiológica" },
        { href: "/recursos/senales-de-alerta-del-lenguaje-y-habla", label: "Señales de alerta" },
        { href: "/servicios/evaluacion-del-habla-infantil-chillan", label: "Evaluación del habla" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Otitis, audición y lenguaje infantil: qué observar",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      ctaTitle="¿El oído ya está en control y el lenguaje sigue en duda?"
      ctaBody="Cuéntame la edad, si ha tenido otitis y qué te preocupa del habla o de la comprensión. Vemos si corresponde evaluar."
      whatsappHref={whatsappUrl(
        "Hola, mi hijo ha tenido otitis y quiero orientación sobre su audición y su lenguaje",
      )}
      ctaLabel="Consultar por una evaluación"
    >
      <p>
        La otitis es frecuente en la infancia, sobre todo después de un
        resfrío. A veces duele y da fiebre. Otras veces queda líquido detrás
        del tímpano sin que tú veas un oído «enfermo»: tu hijo no se queja y,
        aun así, oye como si estuviera con los oídos tapados. Esa segunda
        forma es la que más se cruza con el lenguaje, porque puede pasar
        desapercibida justo en los años en que está aprendiendo palabras.
      </p>
      <p>
        Esta página no te dice si tu hijo tiene una infección ni qué
        medicamento usar. Eso lo ve el pediatra. Aquí vas a encontrar qué
        puedes observar en casa, cómo hablarle mientras oye peor y en qué
        momento tiene sentido sumar una mirada fonoaudiológica en Chillán.
      </p>

      <h2>Oír peor no es siempre «no oír»</h2>
      <p>
        Con líquido en el oído medio, muchos niños no quedan sordos. Oyen
        bajito, o oyen mejor unos días y peor otros. Por eso la escena
        confunde: el lunes responde a su nombre desde la cocina y el jueves
        solo gira si lo miras. No está «portándose mal» por turnos. Puede
        estar oyendo por turnos.
      </p>
      <p>
        El lenguaje necesita un modelo estable. Si la frase del adulto llega
        completa una semana y apagada la siguiente, cuesta más agarrar sonidos
        parecidos y palabras nuevas. No todos los niños con otitis a
        repetición terminan con una dificultad de lenguaje. Sí conviene no
        esperar a que «se le pase solo el habla» mientras el oído sigue sin
        revisarse.
      </p>

      <h2>Qué puedes notar en la casa</h2>
      <ul>
        <li>Sube el volumen de la tele o se acerca mucho al parlante.</li>
        <li>Dice «¿ah?» o te mira la boca antes de responder.</li>
        <li>No gira cuando lo llamas desde atrás y sí cuando te ve.</li>
        <li>Después de un resfrío, el habla se pone menos clara por unos días.</li>
        <li>Se frustra en lugares ruidosos: la sala, una comida familiar, la calle.</li>
        <li>Parece distraído justo en las semanas de los oídos, y más conectado cuando está sano.</li>
      </ul>
      <p>
        Anota fechas aproximadas. «Tuvo otitis en junio y en agosto, y esas
        semanas dejó de decir algunas palabras» es más útil que «siempre ha
        tenido los oídos malos». Si ya le hicieron una audiometría o lo vio un
        otorrino, guarda ese dato para la evaluación. No tienes que interpretar
        el examen tú.
      </p>

      <h2>Primero el oído, con quien trata la salud</h2>
      <p>
        Dolor, fiebre, salida de líquido o la sospecha de que oye mal se
        conversan con el pediatra. Si los cuadros se repiten, es habitual que
        deriven a otorrino y, cuando corresponde, a un estudio de audición. La
        fonoaudiología no reemplaza ese circuito. Un niño puede necesitar
        tratamiento médico del oído y, además, apoyo de lenguaje. Son pasos
        distintos. Hacer solo ejercicios de palabras mientras el oído sigue
        tapado deja la causa sin mirar.
      </p>
      <p>
        Mientras esperas la hora médica, no tienes que quedarte en silencio.
        Acércate, ponte a su altura y baja el ruido de fondo: tele apagada,
        una sola persona hablando. Habla un poco más lento, sin gritar. El
        grito deforma los sonidos y no enseña mejor. Frases cortas, cara
        visible, la palabra unida al objeto que está mirando. Si usa señas o
        gestos para pedir, respóndelos: el gesto no impide que después llegue
        la palabra, y mientras tanto la comunicación sigue.
      </p>

      <h2>Cómo se cruza con el habla y la comprensión</h2>
      <p>
        Algunos niños, en las semanas de oído tapado, simplifican más los
        sonidos o piden menos. Cuando el oído mejora, parte de eso se ordena.
        Si la claridad no vuelve, o si la comprensión de instrucciones simples
        sigue baja en los periodos en que parece oír bien, ya no alcanza con
        atribuirlo todo a la última otitis. Ahí entra una{" "}
        <Link href="/servicios/evaluacion-fonoaudiologica">
          evaluación fonoaudiológica
        </Link>
        , que puede incluir la duda de habla o de lenguaje según lo que
        observes.
      </p>
      <p>
        No uses esta guía como lista de alarma completa. Las señales generales
        —no responde al nombre de forma persistente, habla muy poco, no se le
        entiende— están en{" "}
        <Link href="/recursos/senales-de-alerta-del-lenguaje-y-habla">
          señales de alerta del lenguaje y el habla
        </Link>
        . Si la queja principal es que pronuncia mal incluso cuando está sano,
        mira también la{" "}
        <Link href="/servicios/evaluacion-del-habla-infantil-chillan">
          evaluación del habla
        </Link>
        . El oído puede ser parte de la historia y no toda la historia.
      </p>

      <h2>Qué llevar si pides hora de lenguaje</h2>
      <ul>
        <li>Edad de tu hijo y quién lo cuida durante el día.</li>
        <li>Cuántas otitis recuerdas y si hubo líquido, tubos u controles de audición.</li>
        <li>Un ejemplo de algo que comprendió bien y otro que no.</li>
        <li>Si el jardín nota diferencia después de los resfríos.</li>
        <li>Si hay otros motivos de duda: poco vocabulario, frases que no avanzan, frustración.</li>
      </ul>
      <p>
        Con eso no llegas a «confirmar un retraso». Llegas a ordenar si el
        siguiente paso es solo seguir el oído, sumar una evaluación de
        comunicación, o las dos cosas. En Chillán puedes partir por{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          fonoaudiología infantil
        </Link>{" "}
        y escribir por WhatsApp. Si el pediatra todavía no ha visto este
        episodio, esa hora va primero: el dolor de oído no se agenda como
        terapia de lenguaje.
      </p>
    </GuiaPage>
  );
}
