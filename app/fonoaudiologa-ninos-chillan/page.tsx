import { SITE_URL, whatsappUrl } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import { buildMedicalBusinessJsonLd } from "@/lib/local-business-schema";
import { Portrait } from "@/app/_components/Portrait";
import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";

// Componentes compartidos
import { ConcernCard } from "../chillan/lenguaje-infantil/_components/ConcernCard";
import { WhatsAppCTA } from "../chillan/lenguaje-infantil/_components/WhatsAppCTA";
import { StickyWhatsApp } from "../chillan/lenguaje-infantil/_components/StickyWhatsApp";

const PAGE_PATH = "/fonoaudiologa-ninos-chillan";
const WHATSAPP_HREF = whatsappUrl("Hola, quiero agendar una evaluación de lenguaje para mi hijo/a");
const PAGE_TITLE =
  "Fonoaudiólogo infantil en Chillán | Katia Domínguez";
const PAGE_DESCRIPTION =
  "Fonoaudiología infantil en Chillán con fonoaudióloga para niños. Evaluación de lenguaje y habla, informe y plan de terapia. Presencial. +20 años.";

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["fonoaudióloga en Chillán",
    "fonoaudióloga para niños",
    "terapia de lenguaje para niños",
    "trastornos del habla",
    "dificultades de lectura y escritura",
    "fonoaudiología infantil Chillán",
    "fonoaudiólogo infantil",
    "fonoaudióloga infantil",
    "problemas de pronunciación niños",
    "terapia fonoaudiológica Chillán",],
});

// ============================================================================
// JSON-LD STRUCTURED DATA
// ============================================================================

const jsonLd = {
  "@context": "https://schema.org",
  ...buildMedicalBusinessJsonLd({
    description: PAGE_DESCRIPTION,
    pageUrl: `${SITE_URL}${PAGE_PATH}`,
    extra: {
      availableLanguage: {
        "@type": "Language",
        name: "Español",
        alternateName: "es",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de fonoaudiología infantil",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Evaluación fonoaudiológica infantil",
              description:
                "Evaluación completa de lenguaje y habla para niños con informe detallado",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Terapia de lenguaje",
              description:
                "Tratamiento de trastornos del lenguaje expresivo y comprensivo",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Terapia del habla",
              description:
                "Tratamiento de dificultades de pronunciación y trastornos fonológicos",
            },
          },
        ],
      },
    },
  }),
};

const pillarFaqs = [
  {
    question: "¿Qué cubre la fonoaudiología infantil?",
    answer:
      "Cubre prevenir, evaluar y tratar el lenguaje, el habla, la pronunciación y la lectoescritura, desde los primeros meses hasta la adolescencia. En Chillán también incluye TEL, apoyo comunicativo en TEA e informe para el PIE.",
  },
  {
    question: "¿A qué edad debo llevar a mi hijo al fonoaudiólogo?",
    answer:
      "Puedes consultar desde los 18 meses si notas que tu hijo no dice palabras, o a cualquier edad si observas dificultades en el lenguaje, habla o pronunciación. Mientras más temprano se detecte un problema, mejores son los resultados.",
  },
  {
    question: "¿Cómo es la primera evaluación en Chillán?",
    answer:
      "Es presencial y dura unos 60 minutos: pruebas de lenguaje y habla, y un informe con diagnóstico y plan de tratamiento. La coordinas por WhatsApp; respondo el mismo día, de lunes a viernes.",
  },
  {
    question: "¿La fonoaudiología infantil es presencial o online?",
    answer:
      "La fonoaudiología infantil de esta consulta es presencial en Chillán. La terapia de voz, para adultos, es online por videollamada en todo Chile.",
  },
  {
    question: "¿Cuántas sesiones de terapia son necesarias?",
    answer:
      "Depende del diagnóstico. Algunos casos de trastornos del habla mejoran en 3-6 meses (12-24 sesiones), otros requieren más tiempo. En la evaluación inicial te daré un estimado según el caso de tu hijo.",
  },
  {
    question: "¿Cómo sé si mi hijo tiene un trastorno del habla o del lenguaje?",
    answer:
      "Algunas señales incluyen: habla poco para su edad, no sigue instrucciones simples, pronuncia mal varios sonidos, se frustra al comunicarse, o tiene dificultades de lectura y escritura. Una evaluación profesional puede determinar si existe un trastorno y cuál es el mejor tratamiento.",
  },
  {
    question: "¿Trabaja con niños con TEL o TEA?",
    answer:
      "Sí, trabajo con niños con Trastorno Específico del Lenguaje (TEL) y también con niños dentro del espectro autista (TEA) que requieran apoyo en comunicación y lenguaje. Cada caso se evalúa de forma individual.",
  },
  {
    question: "¿Dónde atiende en Chillán?",
    answer:
      "Atiendo en consulta presencial en Chillán, Región de Ñuble. Al agendar por WhatsApp coordinamos día, hora y detalles de la cita.",
  },
  {
    question: "¿Puede ayudar con dificultades de lectura y escritura?",
    answer:
      "Sí, muchas dificultades de lectura y escritura tienen su origen en problemas del lenguaje oral. Trabajo tanto el lenguaje hablado como las habilidades pre-lectoras y de lectoescritura cuando es necesario.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pillarFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

// WebPage con SpeakableSpecification (GEO: extracción por IA y búsqueda por voz)
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}${PAGE_PATH}#webpage`,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: `${SITE_URL}${PAGE_PATH}`,
  inLanguage: "es-CL",
  isPartOf: { "@type": "WebSite", name: "Katia Domínguez - Fonoaudióloga", url: SITE_URL },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", "[data-speakable]"],
  },
};

// ============================================================================
// DATOS DE LA PÁGINA
// ============================================================================

const concerns = [
  {
    emoji: "🗣️",
    title: "Habla poco o no habla a los 2 años",
    description:
      "Tu hijo dice menos palabras de las esperadas o todavía no combina frases simples.",
  },
  {
    emoji: "👂",
    title: "No comprende instrucciones",
    description:
      "Parece no entender lo que le dices o se confunde con indicaciones simples.",
  },
  {
    emoji: "😤",
    title: "No arma frases",
    description:
      "Usa palabras sueltas, se frustra o no logra explicar lo que quiere.",
  },
  {
    emoji: "🔤",
    title: "Pronuncia mal algunos sonidos",
    description:
      "Cambia, omite o distorsiona sonidos al hablar y cuesta entenderle.",
  },
  {
    emoji: "📚",
    title: "Dificultades de lectura y escritura",
    description:
      "Le cuesta aprender a leer, escribir o confunde letras y palabras.",
  },
  {
    emoji: "🤝",
    title: "Problemas para socializar",
    description:
      "Le cuesta interactuar con otros niños, iniciar o mantener conversaciones.",
  },
];

const therapySteps = [
  {
    number: 1,
    title: "Contacto inicial",
    description:
      "Escríbeme por WhatsApp. Te respondo el mismo día para coordinar.",
  },
  {
    number: 2,
    title: "Evaluación completa",
    description:
      "Sesión de 60 min. en Chillán con pruebas específicas de lenguaje y habla.",
  },
  {
    number: 3,
    title: "Diagnóstico e informe",
    description:
      "Recibes un informe detallado con diagnóstico y plan de tratamiento.",
  },
  {
    number: 4,
    title: "Terapia personalizada",
    description:
      "Sesiones semanales con enfoque lúdico + actividades para practicar en casa.",
  },
];

const guiasPorTema = [
  { href: "/lenguaje-infantil", label: "Guías de lenguaje infantil" },
  { href: "/dislalia", label: "Guías de dislalia para padres" },
  { href: "/tartamudez", label: "Guías de tartamudez" },
  { href: "/lectoescritura", label: "Guías de lectoescritura" },
  { href: "/preguntas", label: "Preguntas de padres" },
  { href: "/guias-padres", label: "Guías para la casa" },
  { href: "/sintomas/mi-hijo-no-habla-bien-chillan", label: "Mi hijo no habla bien" },
  { href: "/sintomas/nino-pronuncia-mal-chillan", label: "Mi hijo de 3 años no se le entiende" },
  { href: "/sintomas/hijo-habla-poco-edad-chillan", label: "Mi hijo de 2 años habla poco" },
  { href: "/sintomas/hijo-no-arma-frases-chillan", label: "Mi hijo de 2 años no forma frases" },
  { href: "/sintomas/nino-no-entiende-instrucciones-chillan", label: "Niño no entiende instrucciones" },
  { href: "/sintomas/nino-tartamudea-chillan", label: "Niño tartamudea" },
  { href: "/tratamientos/dislalia-infantil-chillan", label: "Tratamiento dislalia infantil" },
  { href: "/agendar-hora-fonoaudiologo-infantil-chillan", label: "Agendar hora de evaluación en Chillán" },
  { href: "/tratamientos/retraso-del-lenguaje-chillan", label: "Tratamiento del retraso del lenguaje en Chillán" },
  { href: "/tratamientos/retraso-del-habla-chillan", label: "Retraso del habla" },
  { href: "/tratamientos/tel-trastorno-especifico-lenguaje-chillan", label: "TEL en Chillán" },
  { href: "/tratamientos/trastorno-fonologico-chillan", label: "Tratamiento del trastorno fonológico en Chillán" },
  { href: "/tratamientos/apraxia-del-habla-infantil-chillan", label: "Apraxia del habla infantil" },
  { href: "/chillan/dislalia", label: "Dislalia en Chillán" },
  { href: "/chillan/retraso-del-lenguaje", label: "Retraso del lenguaje en Chillán" },
  { href: "/chillan/tel", label: "TEL en Chillán" },
  { href: "/chillan/dislexia", label: "Dislexia y fonoaudiología" },
  { href: "/chillan/lectoescritura", label: "Dificultades de lectoescritura" },
  { href: "/glosario", label: "Glosario fonoaudiológico" },
  { href: "/comparaciones", label: "Comparaciones clínicas (dislalia, TEL…)" },
  {
    href: "/comparaciones/retraso-del-habla-vs-retraso-del-lenguaje",
    label: "Retraso del habla vs retraso del lenguaje",
  },
  { href: "/recursos", label: "Recursos y guías para padres" },
  { href: "/servicios/evaluacion-fonoaudiologica", label: "Evaluación fonoaudiológica infantil" },
];

const benefits = [
  {
    icon: "🎯",
    title: "Mejor comunicación",
    description:
      "Tu hijo podrá expresar sus ideas, necesidades y emociones con mayor claridad.",
  },
  {
    icon: "📖",
    title: "Mejor rendimiento escolar",
    description:
      "Una buena base de lenguaje facilita el aprendizaje de lectura, escritura y otras materias.",
  },
  {
    icon: "😊",
    title: "Mayor autoestima",
    description:
      "Al comunicarse mejor, los niños se sienten más seguros y confiados socialmente.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Menos frustración familiar",
    description:
      "La comunicación fluida reduce conflictos y mejora la dinámica en casa.",
  },
];

// ============================================================================
// COMPONENTE DE LA PÁGINA
// ============================================================================

export default function FonoaudiologaNinosChillanPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                {
                  label: "Fonoaudiología infantil en Chillán",
                  href: "/fonoaudiologa-ninos-chillan",
                },
              ]}
            />
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                  📍 Atención presencial en Chillán
                </span>

                {/* H1 Principal - Keyword principal */}
                <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Fonoaudiología infantil en Chillán
                </h1>

                <p
                  data-speakable
                  className="mb-6 text-xl leading-relaxed text-gray-700 sm:text-2xl"
                >
                  Fonoaudiólogo y fonoaudióloga infantil en Chillán: evaluación y terapia especializada de lenguaje, habla, pronunciación y lectoescritura para niños. Si tu hijo habla poco, no arma frases o no se hace entender, agenda evaluación con informe y plan de tratamiento personalizado.
                </p>

                {/* Bullets de beneficios */}
                <ul className="mb-8 space-y-3 text-left text-base text-gray-700 sm:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Evaluación completa</strong> con informe detallado
                      en la primera sesión
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Terapia de lenguaje</strong> con enfoque lúdico y
                      personalizado
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Más de 20 años</strong> tratando trastornos del
                      habla infantil
                    </span>
                  </li>
                </ul>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <WhatsAppCTA href={WHATSAPP_HREF}>
                    Agendar evaluación por WhatsApp
                  </WhatsAppCTA>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Respondo en menos de 24 horas • Lunes a Viernes
                </p>
              </div>

              {/* Image */}
              <div className="relative mx-auto w-full max-w-md lg:mx-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-rose-100 shadow-2xl">
                  <Portrait
                    alt="Retrato de Katia Domínguez, fonoaudióloga especialista en lenguaje de niños, en Chillán"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">+20 años</p>
                      <p className="text-sm text-gray-600">de experiencia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to Consult Section */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-10 text-center text-lg leading-relaxed text-gray-600">
              El Trastorno Específico del Lenguaje (TEL) afecta aproximadamente al{" "}
              <strong>7% de los niños en edad escolar</strong>, según estimaciones de la{" "}
              <a
                href="https://www.asha.org/public/speech/disorders/language-disorders/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-rose-600 underline hover:text-rose-700"
              >
                American Speech-Language-Hearing Association (ASHA)
              </a>{" "}
              y la{" "}
              <a
                href="https://www.who.int/news-room/fact-sheets/detail/developmental-disabilities-in-children"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-rose-600 underline hover:text-rose-700"
              >
                Organización Mundial de la Salud (OMS)
              </a>
              . Una evaluación temprana permite identificar si tu hijo necesita apoyo.
            </p>
            <div className="mb-10 text-center">
              {/* H2 con variación de keyword */}
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                ¿Cuándo consultar a un fonoaudiólogo infantil?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Si tu hijo presenta alguna de estas señales, una evaluación de
                lenguaje puede ayudar a detectar y tratar problemas a tiempo.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {concerns.map((concern, index) => (
                <ConcernCard
                  key={index}
                  emoji={concern.emoji}
                  title={concern.title}
                  description={concern.description}
                />
              ))}
            </div>

            {/* CTA intermedio */}
            <div className="mt-12 text-center">
              <WhatsAppCTA href={WHATSAPP_HREF}>
                Consultar mi caso por WhatsApp
              </WhatsAppCTA>
              <p className="mt-3 text-sm text-gray-600">
                Te respondo con una orientación inicial sin compromiso
              </p>
            </div>
          </div>
        </section>

        {/* What is Fonoaudiología Infantil Section */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                ¿Qué es la fonoaudiología infantil?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                La fonoaudiología infantil se especializa en prevenir, evaluar y tratar trastornos del lenguaje, habla, pronunciación y lectoescritura en niños desde los primeros meses hasta la adolescencia.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-rose-100 bg-rose-50 p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Lenguaje (comprensión y expresión)
                </h3>
                <p className="mb-3 text-gray-700">
                  Vocabulario, comprensión, formación de frases, relatos y habilidades para contar experiencias.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>
                    → <Link href="/tratamientos/retraso-del-lenguaje-chillan" className="font-medium text-rose-600 underline hover:text-rose-700">Tratamiento del retraso del lenguaje en Chillán</Link>
                  </li>
                  <li>
                    → <Link href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan" className="font-medium text-rose-600 underline hover:text-rose-700">TEL / TDL (Trastorno Específico del Lenguaje)</Link>
                  </li>
                  <li>
                    → <Link href="/servicios/terapia-lenguaje-infantil" className="font-medium text-rose-600 underline hover:text-rose-700">Terapia de lenguaje infantil</Link>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-rose-100 bg-rose-50 p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Habla y pronunciación
                </h3>
                <p className="mb-3 text-gray-700">
                  Articulación de sonidos, claridad al hablar y corrección de errores de pronunciación.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>
                    → <Link href="/tratamientos/dislalia-infantil-chillan" className="font-medium text-rose-600 underline hover:text-rose-700">Dislalia (errores de pronunciación)</Link>
                  </li>
                  <li>
                    → <Link href="/tratamientos/trastorno-fonologico-chillan" className="font-medium text-rose-600 underline hover:text-rose-700">Tratamiento del trastorno fonológico en Chillán</Link>
                  </li>
                  <li>
                    → <Link href="/tratamientos/retraso-del-habla-chillan" className="font-medium text-rose-600 underline hover:text-rose-700">Retraso del habla</Link>
                  </li>
                  <li>
                    → <Link href="/tratamientos/apraxia-del-habla-infantil-chillan" className="font-medium text-rose-600 underline hover:text-rose-700">Apraxia del habla infantil</Link>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-rose-100 bg-rose-50 p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Lectoescritura
                </h3>
                <p className="mb-3 text-gray-700">
                  Conciencia fonológica, habilidades pre-lectoras, lectura, escritura y comprensión lectora.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>
                    → <Link href="/servicios/dificultades-lectoescritura" className="font-medium text-rose-600 underline hover:text-rose-700">Dificultades de lectoescritura</Link>
                  </li>
                  <li>
                    → <Link href="/servicios/conciencia-fonologica-chillan" className="font-medium text-rose-600 underline hover:text-rose-700">Conciencia fonológica</Link>
                  </li>
                  <li>
                    → <Link href="/chillan/dislexia" className="font-medium text-rose-600 underline hover:text-rose-700">Dislexia y fonoaudiología</Link>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-rose-100 bg-rose-50 p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  TEL, TDL y otras dificultades
                </h3>
                <p className="mb-3 text-gray-700">
                  Trastornos persistentes del lenguaje, apoyo en TEA (Trastorno del Espectro Autista) y evaluaciones PIE.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>
                    → <Link href="/tratamientos/tel-trastorno-especifico-lenguaje-chillan" className="font-medium text-rose-600 underline hover:text-rose-700">TEL / TDL en Chillán</Link>
                  </li>
                  <li>
                    → <Link href="/servicios/tea-trastorno-espectro-autista" className="font-medium text-rose-600 underline hover:text-rose-700">Apoyo en TEA (comunicación)</Link>
                  </li>
                  <li>
                    → <Link href="/servicios/informe-fonoaudiologico-pie-chillan" className="font-medium text-rose-600 underline hover:text-rose-700">Informe fonoaudiológico PIE</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How Therapy Works Section */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              {/* H2 con keyword de terapia */}
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                ¿Cómo es la terapia de lenguaje para niños?
              </h2>
              <p className="text-lg text-gray-600">
                Un proceso simple y cercano, diseñado para que tu hijo aprenda
                jugando
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {therapySteps.map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-2xl border-2 border-rose-100 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-200 text-3xl font-bold text-rose-700">
                    {step.number}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits of Early Intervention */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              {/* H2 con beneficios de intervención */}
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Beneficios de la intervención temprana
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Tratar los trastornos del habla y del lenguaje a tiempo marca
                una diferencia significativa en el desarrollo de tu hijo.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-6"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-2xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About the Professional */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl bg-white p-8 shadow-md sm:p-12">
              <div className="grid items-center gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  {/* H2 sobre la profesional */}
                  <h2 className="mb-6 text-3xl font-bold text-gray-900">
                    Fonoaudióloga infantil en Chillán
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Soy <strong>Katia Domínguez</strong>, fonoaudióloga
                    infantil con más de 20 años ayudando a niños de Chillán y
                    la región a desarrollar su lenguaje y comunicación.
                  </p>
                  <ul className="mb-6 space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        ✓
                      </span>
                      <span>
                        <strong>Fonoaudióloga</strong> titulada Universidad de
                        Chile
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        ✓
                      </span>
                      <span>
                        <strong>Postítulo</strong> en Trastorno Fonológico
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        ✓
                      </span>
                      <span>
                        <strong>Especialista</strong> en trastornos del habla y
                        del lenguaje en niños
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        ✓
                      </span>
                      <span>
                        <strong>Experiencia</strong> en dificultades de lectura
                        y escritura
                      </span>
                    </li>
                  </ul>
                  <p className="text-base leading-relaxed text-gray-600">
                    Mi enfoque combina técnicas basadas en evidencia con un
                    trato cercano y empático, porque cada niño aprende mejor
                    cuando se siente seguro y motivado.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link
                      href="/sobre-katia-dominguez-fonoaudiologa-chillan"
                      className="font-medium text-rose-600 hover:underline"
                    >
                      Ver perfil completo →
                    </Link>
                    <Link
                      href="/contacto-fonoaudiologa-chillan"
                      className="font-medium text-rose-600 hover:underline"
                    >
                      Contacto y consulta →
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full bg-rose-100 shadow-lg">
                    <Portrait
                      alt="Foto de perfil de Katia Domínguez, fonoaudióloga infantil en Chillán"
                      sizes="192px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guías por tema */}
        <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Guías por tema
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Explora síntomas, tratamientos y patologías según lo que observas
                en tu hijo. Cada guía explica señales y cuándo agendar evaluación.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {guiasPorTema.map((guia) => (
                <li key={guia.href}>
                  <Link
                    href={guia.href}
                    className="block rounded-xl border border-rose-100 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm transition hover:border-rose-300 hover:text-rose-700"
                  >
                    {guia.label} →
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center text-sm text-gray-600">
              <Link
                href="/recursos"
                className="font-medium text-rose-600 underline hover:text-rose-700"
              >
                Guías para padres
              </Link>
              {" · "}
              <Link
                href="/sintomas"
                className="font-medium text-rose-600 underline hover:text-rose-700"
              >
                Ver índice de síntomas
              </Link>
              {" · "}
              <Link
                href="/chillan"
                className="font-medium text-rose-600 underline hover:text-rose-700"
              >
                Todas las patologías en Chillán
              </Link>
            </p>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              {/* H2 para FAQ */}
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Preguntas frecuentes sobre terapia de lenguaje
              </h2>
            </div>
            <div className="space-y-6">
              {pillarFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                    <span>{faq.question}</span>
                    <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>

            {/* CTA after FAQs */}
            <div className="mt-12 text-center">
              <WhatsAppCTA href={WHATSAPP_HREF}>
                Resolver mis dudas por WhatsApp
              </WhatsAppCTA>
              <p className="mt-3 text-sm text-gray-600">
                Sin compromiso • Te respondo el mismo día
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Da el primer paso hoy
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-gray-200">
              Una evaluación de lenguaje a tiempo puede marcar la diferencia en
              el desarrollo de tu hijo. Escríbeme y conversemos sobre su caso.
            </p>
            <WhatsAppCTA href={WHATSAPP_HREF} className="text-lg sm:text-xl">
              Agendar evaluación por WhatsApp
            </WhatsAppCTA>
            <p className="mt-6 text-base text-gray-300">
              ✓ Respondo el mismo día &nbsp;•&nbsp; ✓ Atención presencial en
              Chillán
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-950 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Katia Domínguez - Fonoaudióloga</p>
            <p className="mt-2">
              Fonoaudióloga en Chillán • Terapia de lenguaje para niños
            </p>
          </div>
        </footer>

        {/* Sticky WhatsApp Button */}
        <StickyWhatsApp href={WHATSAPP_HREF} />
      </div>
    </>
  );
}
