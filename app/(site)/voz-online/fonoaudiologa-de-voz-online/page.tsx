import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { TestimonialCard } from "@/app/_components/TestimonialCard";
import Link from "next/link";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { MEDICAL_BUSINESS_ID } from "@/lib/local-business-schema";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata = buildPageMetadata({
  path: "/voz-online/fonoaudiologa-de-voz-online",
  title: "Terapia de voz online para adultos en Chile",
  description:
    "Fonoaudióloga de voz online para adultos en todo Chile. Terapia por videollamada: disfonía, ronquera, nódulos y voz cansada. +20 años. Agenda por WhatsApp.",
  keywords: [
    "terapia de voz online",
    "fonoaudióloga voz online",
    "fonoaudiología voz adultos",
    "fonoaudióloga de voz online",
    "fonoaudiólogo especialista en voz",
    "fonoaudióloga especialista en voz",
    "disfonía tratamiento",
    "ronquera persistente",
    "voz cansada profesores",
    "nódulos en las cuerdas vocales terapia",
    "higiene vocal",
    "terapia vocal cantantes",
    "terapia vocal locutores",
  ],
});

const faqItems = [
  {
    question: "¿Qué es la terapia de voz online?",
    answer:
      "Es fonoaudiología de voz para adultos, por videollamada, en todo Chile. Katia Domínguez evalúa y trabaja disfonía, ronquera, nódulos, voz cansada, higiene vocal y el uso profesional de la voz. Si hay que mirar las cuerdas, el otorrino va primero y la terapia acompaña ese diagnóstico.",
  },
  {
    question: "¿Puedo atenderme con una fonoaudióloga online desde cualquier ciudad de Chile?",
    answer:
      "Sí. El servicio de fonoaudióloga online / fonoaudiólogo online de voz está disponible para todo Chile: Santiago, regiones y localidades sin especialista en voz cercano. Sin traslados y con agenda flexible.",
  },
  {
    question: "¿Qué trastornos de la voz se pueden tratar online?",
    answer:
      "Disfonía funcional y orgánica, fatiga vocal, nódulos y pólipos en fase conservadora, preparación y rehabilitación post-cirugía, parálisis cordal leve a moderada, y programas de higiene vocal para docentes y profesionales de la voz.",
  },
  {
    question: "¿La terapia vocal por videollamada es tan efectiva como la presencial?",
    answer:
      "La evidencia en adultos muestra resultados comparables en parámetros acústicos y perceptivos cuando se usan protocolos estandarizados. La tele-rehabilitación permite mayor adherencia al tratamiento al eliminar traslados.",
  },
  {
    question: "¿Atienden pacientes fuera de Chillán?",
    answer:
      "Sí. El servicio de voz online está disponible para todo Chile: Santiago, regiones y localidades sin fonoaudiólogo especializado en voz cercano.",
  },
];

export default function FonoaudiologaVozOnlinePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Terapia de voz online para adultos — Katia Domínguez",
    description:
      "Fonoaudiología de voz para adultos, 100% online por videollamada, en todo Chile.",
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Teleconsulta",
      availableLanguage: "Español",
    },
    provider: {
      "@type": "Person",
      name: "Katia Domínguez",
      jobTitle: "Fonoaudióloga",
      alumniOf: "Universidad de Chile",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Terapia de voz online para adultos",
            serviceType: "Terapia de voz",
            description:
              "Fonoaudiología de voz para adultos por videollamada en todo Chile: disfonía, ronquera, nódulos, voz cansada e higiene vocal.",
            url: `${SITE_URL}/voz-online/fonoaudiologa-de-voz-online`,
            areaServed: { "@type": "Country", name: "Chile" },
            provider: { "@id": MEDICAL_BUSINESS_ID },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceType: "Videollamada",
              availableLanguage: "es-CL",
            },
          }),
        }}
      />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Fonoaudióloga de Voz Online" },
          ]}
        />

        <article className="prose prose-sky lg:prose-lg max-w-none">
          <header className="mb-12 rounded-3xl bg-gradient-to-br from-sky-50 to-indigo-50 px-8 py-12 text-center text-sky-950">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Terapia de voz online para adultos en todo Chile
            </h1>
            <div className="not-prose mx-auto mb-6 max-w-3xl rounded-2xl border border-sky-200 bg-white/80 p-5 text-left">
              <p className="text-lg font-semibold leading-relaxed text-sky-950" data-speakable>
                <strong>Respuesta rápida:</strong> La terapia de voz online es
                fonoaudiología de voz para adultos, por videollamada, en todo
                Chile. La hace Katia Domínguez, fonoaudióloga de la Universidad
                de Chile, con más de 20 años de experiencia clínica. Sirve si
                tienes disfonía, ronquera, nódulos, voz cansada o usas la voz
                para trabajar. Si hay que mirar las cuerdas, el otorrino va
                primero: la terapia acompaña ese diagnóstico.
              </p>
            </div>
            <p className="mx-auto mb-4 max-w-3xl text-2xl font-semibold leading-snug text-sky-900">
              ¿Sientes que tu voz te abandona cuando más la necesitas?
            </p>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-sky-800/80">
              Vivir con ronquera constante, ardor en la garganta o sentir que debes esforzarte para que te escuchen <strong>no es normal</strong>. Detén el desgaste antes de que sea irreversible con terapia vocal online especializada.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-sky-800/90">
              <strong>Dato:</strong> Estudios de la ASHA estiman que entre el 6% y el 10% de los adultos experimentará un trastorno de la voz en algún momento de su vida.
              <cite className="mt-1 block text-xs text-sky-700 not-italic">
                Fuente:{" "}
                <a
                  href="https://www.asha.org/public/speech/disorders/Voice-Disorders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-sky-900"
                >
                  American Speech-Language-Hearing Association (ASHA)
                </a>
                , datos epidemiológicos sobre trastornos de la voz.
              </cite>
            </p>
            <div className="mt-8 flex flex-col items-center justify-center space-y-4">
              <WhatsAppCTA message="Hola, siento que mi voz falla y necesito ayuda. Quiero agendar una evaluación online.">
                Salvar mi Voz Hoy
              </WhatsAppCTA>
              <p className="text-sm font-medium text-sky-700">🗓️ Agenda abierta. Cupos limitados para pacientes nuevos este mes.</p>
            </div>
          </header>

          <section className="my-12">
            <h2 className="text-3xl font-bold text-sky-900 border-b pb-4">
              Fonoaudióloga de voz online para adultos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Katia Domínguez es fonoaudióloga de voz. La{" "}
              <strong>terapia de voz online</strong> es por videollamada, para
              adultos en todo Chile: disfonía, ronquera persistente, nódulos,
              voz cansada e higiene vocal. Sin traslados, con agenda por
              WhatsApp. La consulta infantil sigue siendo presencial en Chillán.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Si buscas fonoaudiología de voz con una especialista, el trabajo
              es por videollamada: evaluación vocal, ejercicios guiados e
              higiene vocal para docentes y profesionales de la voz. La
              tele-rehabilitación en adultos tiene resultados comparables a la
              presencial cuando se usan protocolos estandarizados.
            </p>
          </section>

          <section className="my-12">
            <h2 className="text-3xl font-bold text-sky-900 border-b pb-4">
              El dolor silencioso de perder tu herramienta vital
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Ya sea que uses tu voz para hacer clases, liderar reuniones, vender o cantar, cuando tu voz falla, tu confianza también lo hace. Empiezas a evitar hablar, cancelas panoramas y vives con el miedo de quedarte mudo en medio de una frase importante.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Ignorar síntomas como la <strong>fatiga vocal</strong> o la <strong>disfonía crónicas</strong> suele llevar a lesiones orgánicas como nódulos o pólipos que podrían requerir cirugía. La buena noticia es que la gran mayoría de estos problemas se resuelven con <strong>terapia de rehabilitación adecuada</strong>.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-sky-100">
                <h3 className="text-xl font-bold text-rose-800 mt-0 mb-4">Señales de que necesitas ayuda urgente:</h3>
                <ul className="space-y-2 m-0 p-0 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">⚠️</span>
                    <span>Tu voz amanece bien, pero en la tarde está áspera o débil.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">⚠️</span>
                    <span>Sientes un &quot;nudo&quot;, dolor o tensión constante en el cuello al hablar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">⚠️</span>
                    <span>Llevas más de 2 semanas con ronquera sin estar resfriado.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="my-16 bg-sky-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-sky-900 text-center mb-10">
                Transformamos voces fatigadas en voces fuertes y sanas
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 not-prose mb-12">
                {[
                  {
                    title: "Disfonía y ronquera",
                    desc: "Tratamiento de disfonía cuando la ronquera no se va.",
                    href: "/voz-online/tratamiento-disfonia-online",
                    icon: "🗣️",
                  },
                  {
                    title: "Nódulos en las cuerdas",
                    desc: "Terapia vocal que acompaña el diagnóstico del otorrino.",
                    href: "/voz-online/nodulos-vocales-tratamiento-online",
                    icon: "🔬",
                  },
                  {
                    title: "Pólipos en las cuerdas",
                    desc: "Terapia de apoyo: no reemplaza el examen del otorrino.",
                    href: "/voz-online/polipos-en-las-cuerdas-vocales",
                    icon: "🩺",
                  },
                  {
                    title: "Voz cansada",
                    desc: "Si al final del día ya no te alcanza la voz.",
                    href: "/voz-online/fatiga-vocal-tratamiento-online",
                    icon: "😮‍💨",
                  },
                  {
                    title: "Voz cansada en profesores",
                    desc: "Terapia vocal para docentes, compatible con la jornada.",
                    href: "/voz-online/terapia-vocal-docentes-profesores",
                    icon: "👩‍🏫",
                  },
                  {
                    title: "Cantantes y locutores",
                    desc: "Terapia vocal para quien vive de la voz.",
                    href: "/voz-online/rehabilitacion-vocal-profesionales-voz",
                    icon: "🎤",
                  },
                  {
                    title: "Higiene vocal",
                    desc: "Hábitos diarios para cuidar las cuerdas.",
                    href: "/voz-online/higiene-vocal-cuidado-voz",
                    icon: "💧",
                  },
                  {
                    title: "Cómo es la sesión",
                    desc: "Qué pasa en la videollamada y qué necesitas.",
                    href: "/voz-online/como-es-la-sesion-de-voz-online",
                    icon: "💻",
                  },
                  {
                    title: "Evaluación vocal",
                    desc: "El primer paso, 100% online, con plan.",
                    href: "/voz-online/evaluacion-vocal-online",
                    icon: "📋",
                  },
                  {
                    title: "Me quedé sin voz",
                    desc: "Afonía: qué hacer y cuándo ver al otorrino.",
                    href: "/voz-online/afonia-perdi-la-voz",
                    icon: "🔇",
                  },
                  {
                    title: "Ejercicios para la voz",
                    desc: "Calentamiento general, después de la evaluación.",
                    href: "/voz-online/ejercicios-para-la-voz",
                    icon: "🎵",
                  },
                  {
                    title: "Reflujo y voz",
                    desc: "La ronquera por reflujo y el apoyo de la terapia.",
                    href: "/voz-online/reflujo-y-voz",
                    icon: "🔥",
                  },
                  {
                    title: "Disfonía por estrés",
                    desc: "Cuando la voz se aprieta por tensión.",
                    href: "/voz-online/disfonia-por-estres",
                    icon: "😣",
                  },
                  {
                    title: "Disfonía espasmódica",
                    desc: "Qué es y cómo apoya la terapia de voz.",
                    href: "/voz-online/disfonia-espasmodica",
                    icon: "〰️",
                  },
                  {
                    title: "Call center y teletrabajo",
                    desc: "Voz con audífonos, llamadas y reuniones largas.",
                    href: "/voz-online/voz-en-call-center",
                    icon: "🎧",
                  },
                  {
                    title: "Voz y menopausia",
                    desc: "Cambios de la voz. Las hormonas las ve el médico.",
                    href: "/voz-online/voz-y-menopausia",
                    icon: "🌿",
                  },
                  {
                    title: "Tras un resfrío o COVID",
                    desc: "Si la voz no vuelve cuando el cuadro ya pasó.",
                    href: "/voz-online/voz-despues-de-un-resfrio",
                    icon: "🤒",
                  },
                  {
                    title: "Proyección de voz",
                    desc: "Hablar en público sin gritar.",
                    href: "/voz-online/proyeccion-de-voz",
                    icon: "📣",
                  },
                  {
                    title: "Presbifonía",
                    desc: "Cambios de la voz en la adultez mayor.",
                    href: "/voz-online/presbifonia",
                    icon: "🗣️",
                  },
                  {
                    title: "Desde otro país",
                    desc: "Videollamada desde Chile. El horario se coordina a tu zona.",
                    href: "/voz-online/terapia-de-voz-desde-otro-pais",
                    icon: "🌎",
                  },
                  {
                    title: "Cuánto dura",
                    desc: "El plan sale de la evaluación vocal. No hay un paquete fijo.",
                    href: "/voz-online/cuanto-dura-la-terapia-de-voz",
                    icon: "🗓️",
                  },
                ].map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-sky-300 hover:-translate-y-1"
                  >
                    <span className="text-3xl">{s.icon}</span>
                    <h3 className="mt-4 text-lg font-bold text-sky-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 font-medium">{s.desc}</p>
                    <span className="mt-4 inline-block text-sm font-bold text-sky-600">Saber más →</span>
                  </Link>
                ))}
              </div>
              <p className="mx-auto max-w-3xl text-center text-base text-sky-900">
                Si la queja es la ronquera, parte por{" "}
                <Link href="/voz-online/voz-ronca-causas-tratamiento" className="font-semibold underline">
                  ronquera persistente
                </Link>
                . Si el otorrino diagnosticó una parálisis de cuerda, la{" "}
                <Link href="/voz-online/paralisis-cordal-rehabilitacion-online" className="font-semibold underline">
                  rehabilitación de parálisis cordal
                </Link>{" "}
                también es online.
              </p>
            </div>
          </section>

          <section className="my-16">
            <h2 className="text-3xl font-bold text-center text-sky-900 mb-8">
              Historias de pacientes reales
            </h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <TestimonialCard
                name="María José E., Docente"
                text="Llegaba a mi casa llorando de dolor de garganta después de hacer clases. Creí que tendría que cambiar de profesión. Con un par de meses de terapia online aprendí a usar mi voz sin lastimarme. La teleterapia me salvó porque no tenía tiempo para ir a consultas."
              />
              <TestimonialCard
                name="Roberto V., Jefe de Ventas"
                text="Me diagnosticaron nódulos y me aterraba la cirugía pues vivo de mi voz. Gracias al tratamiento online pude rehabilitar mis cuerdas sin tener que operarme. Katia te guía en los ejercicios con muchísima claridad y cercanía."
              />
            </div>
          </section>

          <section className="my-12 rounded-3xl border border-sky-100 bg-white p-8 shadow-sm text-center">
            <h2 className="mb-4 text-3xl font-bold text-sky-900">
              ¿Por qué la terapia online es la mejor opción?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              La evidencia científica actual ha demostrado que la tele-rehabilitación vocal en adultos tiene <strong>la misma efectividad clínica</strong> que la presencial, sumando inmensas ventajas para tu día a día:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left not-prose">
              <div className="bg-sky-50 rounded-xl p-5">
                <span className="text-2xl mb-2 block">🌎</span>
                <h4 className="font-bold text-sky-900 text-sm mb-1">Sin limites de ciudad</h4>
                <p className="text-xs text-gray-600">Accede a una fonoaudióloga experta sin importar en qué lugar de Chile te encuentres.</p>
              </div>
              <div className="bg-sky-50 rounded-xl p-5">
                <span className="text-2xl mb-2 block">⏱️</span>
                <h4 className="font-bold text-sky-900 text-sm mb-1">Cero traslados</h4>
                <p className="text-xs text-gray-600">No pierdas horas en tacos o salas de espera. Conéctate, haz tu terapia y sigue con tu vida.</p>
              </div>
              <div className="bg-sky-50 rounded-xl p-5">
                <span className="text-2xl mb-2 block">🏠</span>
                <h4 className="font-bold text-sky-900 text-sm mb-1">Espacio seguro</h4>
                <p className="text-xs text-gray-600">Trabajamos tu voz en tu ambiente, donde realmente necesitas usarla a diario.</p>
              </div>
              <div className="bg-sky-50 rounded-xl p-5">
                <span className="text-2xl mb-2 block">🚀</span>
                <h4 className="font-bold text-sky-900 text-sm mb-1">Constancia asegurada</h4>
                <p className="text-xs text-gray-600">No interrumpas tu tratamiento por viajes o mal tiempo. Al ser online, tu avance no se pausa.</p>
              </div>
            </div>
          </section>

          <section className="my-16 not-prose">
            <h2 className="mb-6 text-center text-3xl font-bold text-sky-900">
              Atención online en tu ciudad
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">
              Terapia vocal por videollamada para profesionales de la voz en
              todo Chile. Elige tu ciudad para ver cómo funciona la atención
              online en tu región.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/voz-online/fonoaudiologa-voz-santiago",
                  label: "Santiago",
                },
                {
                  href: "/voz-online/fonoaudiologa-voz-concepcion",
                  label: "Concepción",
                },
                {
                  href: "/voz-online/fonoaudiologa-voz-vina-del-mar",
                  label: "Viña del Mar",
                },
                {
                  href: "/voz-online/fonoaudiologa-voz-temuco",
                  label: "Temuco",
                },
                {
                  href: "/voz-online/fonoaudiologa-voz-antofagasta",
                  label: "Antofagasta",
                },
              ].map((ciudad) => (
                <li key={ciudad.href}>
                  <Link
                    href={ciudad.href}
                    className="block rounded-2xl border border-sky-100 bg-white p-5 text-center shadow-sm transition hover:border-sky-300 hover:shadow-md"
                  >
                    <span className="text-lg font-semibold text-sky-900">
                      Fonoaudióloga de voz en {ciudad.label}
                    </span>
                    <span className="mt-2 block text-sm text-sky-600">
                      Atención online →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="my-16 not-prose">
            <h2 className="mb-4 text-center text-3xl font-bold text-sky-900">
              Terapia de voz en español fuera de Chile
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">
              La sesión es por videollamada desde Chile, en español, para adultos.
              El horario se coordina según tu zona horaria. Si estás en Miami, la
              página es{" "}
              <Link href="/voz-online/miami" className="font-semibold text-sky-800 underline">
                fonoaudióloga en español en Miami
              </Link>
              . La duda general, desde cualquier país, está en{" "}
              <Link
                href="/voz-online/terapia-de-voz-desde-otro-pais"
                className="font-semibold text-sky-800 underline"
              >
                terapia de voz desde otro país
              </Link>
              .
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/voz-online/espana",
                  title: "España",
                  desc: "Logopeda y logopedia de la voz.",
                },
                {
                  href: "/voz-online/argentina",
                  title: "Argentina",
                  desc: "Fonoaudióloga online y foniatría.",
                },
                {
                  href: "/voz-online/miami",
                  title: "Miami",
                  desc: "Fonoaudióloga en español en Florida.",
                },
                {
                  href: "/voz-online/estados-unidos",
                  title: "Estados Unidos",
                  desc: "Nueva York, Texas, California y el resto.",
                },
                {
                  href: "/voz-online/canada",
                  title: "Canadá",
                  desc: "Toronto, Montreal y el resto del país.",
                },
                {
                  href: "/voz-online/reino-unido",
                  title: "Reino Unido",
                  desc: "Londres y speech therapist en español.",
                },
                {
                  href: "/voz-online/alemania",
                  title: "Alemania",
                  desc: "Terapia de voz en español, por videollamada.",
                },
                {
                  href: "/voz-online/suiza",
                  title: "Suiza",
                  desc: "Sesión en español, en cualquier cantón.",
                },
                {
                  href: "/voz-online/australia",
                  title: "Australia",
                  desc: "Fonoaudióloga en español, por videollamada.",
                },
              ].map((pais) => (
                <li key={pais.href}>
                  <Link
                    href={pais.href}
                    className="block h-full rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition hover:border-sky-300 hover:shadow-md"
                  >
                    <span className="text-lg font-semibold text-sky-900">{pais.title}</span>
                    <span className="mt-2 block text-sm text-gray-600">{pais.desc}</span>
                    <span className="mt-3 inline-block text-sm font-bold text-sky-600">
                      Ver atención →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <GeoFAQ
            items={faqItems}
            className="not-prose my-16 rounded-3xl border border-sky-100 bg-sky-50/50 p-8"
          />
        </article>
      </main>
    </>
  );
}
