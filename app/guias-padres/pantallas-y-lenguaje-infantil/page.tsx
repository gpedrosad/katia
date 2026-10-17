import Link from "next/link";
import { articleJsonLd, faqJsonLd, GuiaPage, guiaMetadata } from "../guia-ui";
import { whatsappUrl } from "@/lib/site";

const PATH = "/guias-padres/pantallas-y-lenguaje-infantil";
const TITLE = "Pantallas y lenguaje infantil: qué saber";
const DESCRIPTION =
  "Pantallas y lenguaje infantil: tele de fondo, videollamadas y el celular de los adultos. Qué puedes cambiar en casa, sin culparte ni inventar diagnósticos.";

const faqs = [
  {
    question: "¿Las pantallas retrasan el lenguaje?",
    answer:
      "Una pantalla, por sí sola, no es un diagnóstico. Lo que sí ocurre es que el video pasivo ocupa el lugar de la conversación: tu hijo escucha menos frases dirigidas a él y practica menos turnos. Si además habla poco, no comprende o se frustra para comunicarse, la pantalla no alcanza como explicación para seguir esperando. Conviene evaluar.",
  },
  {
    question: "¿La videollamada con los abuelos cuenta igual que un video?",
    answer:
      "No. En la videollamada hay una persona que saluda, espera y responde. Eso se parece más a una conversación que a un video que sigue solo. Igual es una versión reducida: se pierde parte del gesto y del contexto. Sirve para mantener el vínculo, sobre todo con familia que está lejos, y no reemplaza el rato cara a cara del día.",
  },
  {
    question: "¿Sirve un video «educativo» si lo ve solo?",
    answer:
      "El cartel de educativo no convierte el video en una conversación. Si lo ven juntos y tú nombras lo que aparece, pausas y lo relacionas con algo de la casa, el rato puede sumar. Si lo dejas solo para que «aprenda palabras», casi todo el trabajo lo hace la pantalla y muy poco lo hace él.",
  },
];

export const metadata = guiaMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "pantallas y lenguaje infantil",
    "televisión y habla en niños",
    "tiempo de pantalla y lenguaje",
    "videollamada y desarrollo del lenguaje",
  ],
});

export default function PantallasYLenguajePage() {
  return (
    <GuiaPage
      crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Guías para padres", href: "/guias-padres" },
        { label: "Pantallas y lenguaje", href: PATH },
      ]}
      eyebrow="Casa y rutina"
      title="Pantallas y lenguaje infantil: qué puedes hacer"
      lead="La pregunta útil no es si la pantalla es buena o mala. Es qué conversación dejó de ocurrir mientras estaba encendida, y qué puedes devolverle a tu hijo sin convertir el día en una pelea."
      related={[
        { href: "/fonoaudiologa-ninos-chillan", label: "Fonoaudióloga infantil en Chillán" },
        { href: "/recursos/estimular-lenguaje-en-casa", label: "Estimular el lenguaje en casa" },
        { href: "/guias-padres/lectura-compartida-de-cuentos", label: "Leer cuentos juntos" },
        { href: "/sintomas/hijo-habla-poco-edad-chillan", label: "Si habla poco para su edad" },
      ]}
      jsonLd={[
        articleJsonLd({
          path: PATH,
          headline: "Pantallas y lenguaje infantil: qué puedes hacer en casa",
          description: DESCRIPTION,
        }),
        faqJsonLd(faqs),
      ]}
      faqs={faqs}
      ctaTitle="¿Bajaste las pantallas y la duda sigue?"
      ctaBody="Si tu hijo habla poco, no responde a su nombre o el jardín lo comentó, una evaluación aclara si hace falta apoyo. No tienes que llegar con la culpa resuelta."
      whatsappHref={whatsappUrl(
        "Hola, quiero orientación sobre el lenguaje de mi hijo y el uso de pantallas en casa",
      )}
      ctaLabel="Quiero preguntar por una evaluación"
    >
      <p>
        Casi todas las casas tienen una tele, un celular o una tablet. Usarlos
        no te convierte en un mal padre o una mala madre. El lenguaje, eso sí,
        se construye cuando alguien le habla a tu hijo, espera un poco y
        responde a lo que él intentó decir. Un video no hace esa espera. Por
        eso el exceso de pantalla pasiva preocupa: no porque «dañe el cerebro»
        de una forma que puedas medir en la cocina, sino porque ocupa minutos
        en los que podría haber turnos de conversación.
      </p>
      <p>
        Esta guía no te pone un número mágico de minutos como si fuera un
        diagnóstico. Las orientaciones más citadas de pediatría van en la
        misma dirección. La Organización Mundial de la Salud sugiere no usar
        pantallas de forma sedentaria en el primer año y, entre los 2 y los 4
        años, no pasar de una hora al día, y que menos es mejor. La Academia
        Americana de Pediatría, en su orientación sobre medios y niños
        pequeños, pide evitar las pantallas antes de los 18 meses salvo las
        videollamadas, y entre los 2 y los 5 años priorizar cerca de una hora
        de contenido de calidad visto con un adulto. Son referencias generales,
        no una orden clínica para tu hijo.
      </p>

      <h2>No todas las pantallas hacen lo mismo</h2>
      <p>
        Ayuda separar cuatro situaciones que en la casa se mezclan. La primera
        es el video que sigue solo: canciones, capítulos, aplicaciones que no
        necesitan a nadie. La segunda es la tele encendida «de fondo» mientras
        ustedes hacen otra cosa. La tercera es la videollamada con una persona
        real, que saluda y espera. La cuarta, y se nota menos, es tu propio
        celular mientras tu hijo te está hablando.
      </p>
      <p>
        El video solo es el que más desplaza la conversación. La videollamada
        conserva algo del turno: hay una cara, una pausa, un «hola» que espera
        respuesta. Sigue siendo más pobre que estar en la misma pieza, porque
        el gesto se corta y el niño no puede mostrarte el juguete con la misma
        facilidad, pero no es lo mismo que dejar un capítulo corriendo. El
        celular del adulto es distinto: la pantalla es tuya, y aun así tu hijo
        aprende si vale la pena insistir cuando te habla y tú no levantas la
        vista.
      </p>

      <h2>Antes de los 2 años</h2>
      <p>
        En los dos primeros años tu hijo aprende palabras unidas a caras,
        manos y rutinas: la mamadera, el zapato, el perro de la vereda. Un
        video puede mostrar un perro, pero no mira hacia donde él mira ni
        ajusta la frase si él no entendió. Esa ajuste —repetir más lento,
        señalar, cambiar la palabra— es el corazón del lenguaje temprano.
      </p>
      <p>
        Si usan videollamada con abuelos o con el otro padre, quédate al lado,
        acerca su cara a la cámara y ponle palabras a lo que él hace: «estás
        mostrando el auto». No le exijas que «salude bien». Si se va a los
        pocos minutos, es habitual: la atención a esa edad es corta. Cierra la
        llamada antes de que se transforme en forcejeo.
      </p>
      <p>
        La tele de fondo, aunque él «no la esté viendo», igual compite. Tú
        hablas menos, él oye peor lo que dices y los dos se distraen con un
        cambio de imagen. En las comidas y en el mudador, apagarla suele rendir
        más que cualquier aplicación.
      </p>

      <h2>Entre los 2 y los 5 años</h2>
      <p>
        A esta edad ya puede sentarse un rato frente a un capítulo. El rato
        suma más si tú estás ahí una parte del tiempo. No hace falta comentar
        cada escena como una clase. Basta nombrar lo que le llamó la atención,
        pausar y dejarle un turno: «el niño se cayó… ¿y después?». Si no
        contesta, respondes tú y sigues. Interrogar («¿de qué color es?»,
        «¿cómo se llama?») cansa y se parece poco a una conversación.
      </p>
      <p>
        Cuando el capítulo termina, engancha una sola cosa con la vida real.
        Si vieron un perro, miren el perro de la cuadra o el dibujo de la
        heladera. Ese puente —de la pantalla a la pieza— es lo que el video no
        puede hacer solo. El resto de ideas para el día, sin convertir la casa
        en una sesión, está en la guía de{" "}
        <Link href="/recursos/estimular-lenguaje-en-casa">
          estimulación del lenguaje en casa
        </Link>
        . Si prefieres un rato sin pantalla, la{" "}
        <Link href="/guias-padres/lectura-compartida-de-cuentos">
          lectura compartida de cuentos
        </Link>{" "}
        suele calzar bien a esta edad.
      </p>

      <h2>Tu celular también entra en la cuenta</h2>
      <p>
        Muchos niños hablan poco justo cuando el adulto está mirando el
        teléfono. No es un reproche: los mensajes del jardín, la pega y la
        familia llegan a toda hora. Puedes elegir dos momentos cortos y
        predecibles en los que el celular queda boca abajo: la comida y los
        diez minutos de juego en el suelo. Si tienes que responder, dilo en
        voz alta: «voy a contestar y después seguimos con los autos». Tu hijo
        entiende mejor una pausa anunciada que una ausencia sin palabras.
      </p>
      <p>
        Evita darle tu celular como primer recurso cada vez que hay que
        esperar. En la fila o en la micro, un objeto de la cartera, un dedo
        que cuenta los autos o una canción corta también llenan la espera. No
        tienes que hacerlo siempre. Si un día la pantalla salva el trayecto,
        el día no se arruinó. Mira la semana, no el minuto.
      </p>

      <h2>Qué observar si te preocupa el lenguaje</h2>
      <p>
        Bajar las pantallas es un cambio razonable. No es una prueba. Si
        después de un par de semanas de más cara a cara tu hijo sigue sin
        mirarte cuando lo llamas, entiende poco lo que le pides o casi no
        intenta comunicarse, la pantalla deja de ser la explicación principal.
        Esas dudas están mejor respondidas en las{" "}
        <Link href="/recursos/senales-de-alerta-del-lenguaje-y-habla">
          señales de alerta del lenguaje y el habla
        </Link>{" "}
        y en la página de{" "}
        <Link href="/sintomas/hijo-habla-poco-edad-chillan">
          un hijo que habla poco para su edad
        </Link>
        .
      </p>
      <p>
        Tampoco sirve prometerte que «al quitar el celular va a hablar». Hay
        niños con poco uso de pantallas que igual necesitan apoyo, y niños que
        ven videos y conversan bien. Si quieres una mirada profesional en
        Chillán, parte por{" "}
        <Link href="/fonoaudiologa-ninos-chillan">
          fonoaudiología infantil
        </Link>{" "}
        o por la{" "}
        <Link href="/servicios/estimulacion-temprana-del-lenguaje-chillan">
          estimulación temprana del lenguaje
        </Link>
        . Lleva ejemplos: a qué hora suele haber pantalla, si tú estás al lado
        y qué pasa cuando está apagada.
      </p>
    </GuiaPage>
  );
}
