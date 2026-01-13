import Image from "next/image";
import { Metadata } from "next";
import { ConcernCard } from "./_components/ConcernCard";
import { WhatsAppCTA } from "./_components/WhatsAppCTA";
import { StickyWhatsApp } from "./_components/StickyWhatsApp";

export const metadata: Metadata = {
  title: "Fonoaudióloga en Chillán | Lenguaje Infantil | Katia Domínguez",
  description:
    "¿Tu hijo tiene dificultades para hablar? Evaluación y tratamiento fonoaudiológico infantil en Chillán. Primera consulta de evaluación. Agenda tu hora.",
  keywords: [
    "fonoaudióloga Chillán",
    "lenguaje infantil",
    "terapia de lenguaje niños",
    "fonoaudiología infantil Chillán",
    "problemas del habla niños",
  ],
  openGraph: {
    title: "Fonoaudióloga en Chillán | Lenguaje Infantil | Katia Domínguez",
    description:
      "Evaluación y tratamiento fonoaudiológico infantil en Chillán. Ayudamos a tu hijo a comunicarse mejor.",
    type: "website",
    locale: "es_CL",
  },
};

const WHATSAPP_LINK =
  "https://wa.me/56912345678?text=Hola%2C%20quiero%20agendar%20una%20evaluaci%C3%B3n%20de%20lenguaje%20para%20mi%20hijo%2Fa";

const concerns = [
  {
    emoji: "🗣️",
    title: "Habla poco para su edad",
    description:
      "Tu hijo dice menos palabras de las esperadas o le cuesta armar oraciones.",
  },
  {
    emoji: "👂",
    title: "No sigue instrucciones",
    description:
      "Parece no entender lo que le dices o se confunde con indicaciones simples.",
  },
  {
    emoji: "😤",
    title: "Se frustra al comunicarse",
    description:
      "Se enoja o hace berrinches porque no logra expresar lo que quiere.",
  },
  {
    emoji: "🔤",
    title: "Pronuncia mal algunos sonidos",
    description:
      "Cambia o elimina sonidos al hablar y cuesta entenderle.",
  },
  {
    emoji: "📚",
    title: "Dificultades en el colegio",
    description:
      "Le cuesta aprender a leer, escribir o seguir el ritmo de sus compañeros.",
  },
  {
    emoji: "🤝",
    title: "Problemas para socializar",
    description:
      "Le cuesta interactuar con otros niños o iniciar conversaciones.",
  },
];

export default function LenguajeInfantilPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
                📍 Atención presencial en Chillán
              </span>
              <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Fonoaudióloga infantil en Chillán
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-gray-700 sm:text-2xl">
                Evaluación y tratamiento de lenguaje para niños de 2 a 10 años
              </p>
              
              {/* Bullets de beneficios */}
              <ul className="mb-8 space-y-3 text-left text-base text-gray-700 sm:text-lg">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>
                  <span><strong>Evaluación completa</strong> con informe detallado en la primera sesión</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>
                  <span><strong>Terapias presenciales</strong> en Chillán con enfoque lúdico</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>
                  <span><strong>+8 años de experiencia</strong> en trastornos del lenguaje infantil</span>
                </li>
              </ul>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <WhatsAppCTA href={WHATSAPP_LINK}>
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
                <Image
                  src="/KatiaDominguezFonoaudiologa.png"
                  alt="Katia Domínguez - Fonoaudióloga en Chillán"
                  fill
                  className="object-cover"
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
                    <p className="font-semibold text-gray-900">+8 años</p>
                    <p className="text-sm text-gray-600">de experiencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Consult Section - Simplified */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              ¿Cuándo consultar a una fonoaudióloga?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Si tu hijo presenta alguna de estas señales, una evaluación puede ayudar:
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
            <WhatsAppCTA href={WHATSAPP_LINK}>
              Consultar mi caso por WhatsApp
            </WhatsAppCTA>
            <p className="mt-3 text-sm text-gray-600">
              Te respondo con una orientación inicial sin compromiso
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section - NEW */}
      <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              ¿Qué incluye la primera evaluación?
            </h2>
            <p className="text-lg text-gray-600">
              Evaluación completa en una sesión de aproximadamente 60 minutos
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-md sm:p-10">
            <ul className="space-y-5 text-gray-700">
              <li className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-lg">
                  📋
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Anamnesis inicial</p>
                  <p className="text-sm text-gray-600">Conversamos sobre el desarrollo de tu hijo, antecedentes y motivo de consulta</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-lg">
                  🎯
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Evaluación del lenguaje</p>
                  <p className="text-sm text-gray-600">Pruebas específicas para vocabulario, comprensión, expresión y pronunciación</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-lg">
                  📄
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Informe con resultados</p>
                  <p className="text-sm text-gray-600">Diagnóstico claro y recomendaciones específicas para tu hijo</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-lg">
                  💬
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Plan de tratamiento</p>
                  <p className="text-sm text-gray-600">Te explico cuántas sesiones estimo necesarias y qué trabajaremos</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section - Improved */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              ¿Cómo funciona el proceso?
            </h2>
            <p className="text-lg text-gray-600">
              Simple y cercano, en 4 pasos
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative rounded-2xl border-2 border-rose-100 bg-rose-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-rose-200 text-4xl font-bold text-rose-700">
                1
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Escríbeme
              </h3>
              <p className="text-sm text-gray-600">
                Por WhatsApp. Te respondo el mismo día.
              </p>
            </div>
            <div className="relative rounded-2xl border-2 border-rose-100 bg-rose-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-rose-200 text-4xl font-bold text-rose-700">
                2
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Agendamos
              </h3>
              <p className="text-sm text-gray-600">
                Coordinamos día y hora para la evaluación.
              </p>
            </div>
            <div className="relative rounded-2xl border-2 border-rose-100 bg-rose-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-rose-200 text-4xl font-bold text-rose-700">
                3
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Evaluación
              </h3>
              <p className="text-sm text-gray-600">
                60 min. en Chillán, con juegos y pruebas específicas.
              </p>
            </div>
            <div className="relative rounded-2xl border-2 border-rose-100 bg-rose-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-rose-200 text-4xl font-bold text-rose-700">
                4
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Tratamiento
              </h3>
              <p className="text-sm text-gray-600">
                Sesiones semanales personalizadas + actividades para casa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Improved Credentials */}
      <section className="bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white p-8 shadow-md sm:p-12">
            <div className="grid items-center gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  ¿Por qué confiar en mí?
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  Soy <strong>Katia Domínguez</strong>, fonoaudióloga con más de 8 años
                  ayudando a niños de Chillán a desarrollar su lenguaje.
                </p>
                <ul className="mb-6 space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span><strong>Fonoaudióloga</strong> titulada Universidad de Chile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span><strong>Postítulo</strong> en Trastorno Fonológico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span><strong>+8 años</strong> de experiencia clínica con niños</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span><strong>Atención presencial</strong> en Chillán</span>
                  </li>
                </ul>
                <p className="text-base leading-relaxed text-gray-600">
                  Mi enfoque combina técnicas basadas en evidencia con un trato cercano,
                  porque cada niño aprende mejor cuando se siente seguro y motivado.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full bg-rose-100 shadow-lg">
                  <Image
                    src="/KatiaDominguezFonoaudiologa.png"
                    alt="Katia Domínguez - Fonoaudióloga"
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section - NEW */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Preguntas frecuentes
            </h2>
          </div>
          <div className="space-y-6">
            <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                <span>¿A qué edad conviene consultar?</span>
                <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Puedes consultar desde los 18 meses si notas que tu hijo no dice palabras, o a cualquier edad si observas dificultades en el lenguaje. Mientras más temprano se detecte, mejores son los resultados.
              </p>
            </details>

            <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                <span>¿Cuántas sesiones suelen ser necesarias?</span>
                <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Depende del diagnóstico. Algunos casos mejoran en 3-6 meses (12-24 sesiones), otros requieren más tiempo. En la evaluación inicial te daré un estimado según el caso de tu hijo.
              </p>
            </details>

            <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                <span>¿Qué pasa en la primera evaluación?</span>
                <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Conversamos sobre el desarrollo de tu hijo, aplico pruebas específicas de lenguaje (de forma lúdica), y al final te entrego un informe con diagnóstico y plan de tratamiento. Dura aproximadamente 60 minutos.
              </p>
            </details>

            <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                <span>¿Trabaja con niños con TEL o TEA?</span>
                <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Sí, trabajo con niños con Trastorno Específico del Lenguaje (TEL) y también con niños dentro del espectro autista (TEA) que requieran apoyo en comunicación. Cada caso se evalúa de forma individual.
              </p>
            </details>

            <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                <span>¿Dónde atiende en Chillán?</span>
                <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Atiendo en mi Domicilio en Chillán. Al agendar tu hora, te envío por WhatsApp la dirección exacta y referencias de cómo llegar.
              </p>
            </details>

            <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-gray-900">
                <span>¿Cuáles son los valores?</span>
                <span className="flex-shrink-0 text-rose-500 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Los valores varían según el tipo de sesión (evaluación o terapia). Escríbeme por WhatsApp y te envío la información de precios actualizada.
              </p>
            </details>
          </div>

          {/* CTA after FAQs */}
          <div className="mt-12 text-center">
            <WhatsAppCTA href={WHATSAPP_LINK}>
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
            Una evaluación a tiempo puede marcar la diferencia en el desarrollo
            de tu hijo. Escríbeme y conversemos sin compromiso.
          </p>
          <WhatsAppCTA href={WHATSAPP_LINK} className="text-lg sm:text-xl">
            Agendar evaluación por WhatsApp
          </WhatsAppCTA>
          <p className="mt-6 text-base text-gray-300">
            ✓ Respondo el mismo día &nbsp;•&nbsp; ✓ Atención presencial en Chillán
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Katia Domínguez - Fonoaudióloga</p>
          <p className="mt-2">Chillán, Chile</p>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </div>
  );
}
