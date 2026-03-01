import Image from "next/image";
import Link from "next/link";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { ServiceCard } from "./_components/ServiceCard";
import { TestimonialCard } from "./_components/TestimonialCard";

const WHATSAPP_LINK =
  "https://wa.me/56995497838?text=Hola%2C%20quiero%20agendar%20una%20hora";

const testimonials = [
  {
    name: "Marcela Pedrosa",
    text: "Excelente fonoaudióloga. Intervención profesional, clara y bien estructurada, con evaluación precisa y seguimiento constante. Logró avances significativos en mi hijo.",
  },
  {
    name: "Gonzalo Larrea",
    text: "Excelente profesional, atendió a mi hijo y los avances fueron notables. Responsable, con mucha experiencia y muy cercana. Totalmente recomendada.",
  },
  {
    name: "Marcela Opazo",
    text: "Excelente Profesional, muy cercana con sus pacientes y comprometida, nos ayudó como familia a superar el diagnóstico de nuestro pequeño. 100% recomendada!",
  },
  {
    name: "Arantzazu Larraza",
    text: "Atendió a mi hija de 10 años, fue una excelente experiencia de principio a fin. Es una profesional comprometida, entregada y muy lúdica! 100% recomendada.",
  },
  {
    name: "Raimundo Rodríguez",
    text: "Excelente fonoaudióloga, en pocos meses su tratamiento hizo un cambio increíble. Se nota que ama lo que hace y se preocupa de verdad.",
  },
  {
    name: "Carolina Rojas",
    text: "La dedicación en la Fonoaudiología que entrega fue fundamental para mi recuperación. Su constancia y empatía me ayudó mucho, su trabajo cambia vidas.",
  },
];

const services = [
  {
    href: "/servicios/terapia-lenguaje-infantil",
    emoji: "👶",
    title: "Terapia de lenguaje infantil",
    description:
      "Evaluación y tratamiento de trastornos del lenguaje en niños de 2 a 10 años.",
  },
  {
    href: "/servicios/trastornos-del-habla",
    emoji: "🗣️",
    title: "Trastornos del habla",
    description:
      "Dislalias, trastornos fonológicos y dificultades de pronunciación.",
  },
  {
    href: "/servicios/evaluacion-fonoaudiologica",
    emoji: "📋",
    title: "Evaluación fonoaudiológica",
    description:
      "Evaluación completa con informe detallado y plan de tratamiento.",
  },
  {
    href: "/servicios/tel-trastorno-especifico-lenguaje",
    emoji: "💬",
    title: "TEL",
    description: "Trastorno Específico del Lenguaje: diagnóstico y tratamiento.",
  },
  {
    href: "/servicios/tea-trastorno-espectro-autista",
    emoji: "🧩",
    title: "TEA y comunicación",
    description: "Apoyo en comunicación para niños con Trastorno del Espectro Autista.",
  },
  {
    href: "/servicios/dificultades-lectoescritura",
    emoji: "📚",
    title: "Lectoescritura",
    description: "Dificultades de aprendizaje de lectura y escritura.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://www.katialafono.cl/#business",
  name: "Fonoaudióloga Katia Domínguez",
  description:
    "Fonoaudióloga en Chillán especialista en terapia de lenguaje infantil, trastornos del habla, TEL, TEA y lectoescritura. Más de 20 años de experiencia.",
  url: "https://www.katialafono.cl",
  telephone: "+56995497838",
  areaServed: {
    "@type": "City",
    name: "Chillán",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Región de Ñuble",
    },
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "40",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Marcela Andrea Pedrosa Ramirez",
      },
      reviewBody:
        "Excelente fonoaudióloga. Intervención profesional, clara y bien estructurada, con evaluación precisa y seguimiento constante. Logró avances significativos en mi hijo.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Gonzalo Larrea",
      },
      reviewBody:
        "Excelente profesional, atendió a mi hijo y los avances fueron notables. Responsable, con mucha experiencia y muy cercana. Totalmente recomendada.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Marcela Opazo Cid",
      },
      reviewBody:
        "Excelente Profesional, muy cercana con sus pacientes y comprometida, nos ayudó como familia a superar el diagnóstico de nuestro pequeño asociado a problemas en el lenguaje.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Raimundo Rodríguez",
      },
      reviewBody:
        "Excelente fonoaudióloga, en pocos meses su tratamiento hizo un cambio increíble. Se nota que ama lo que hace y se preocupa de verdad.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        {/* Hero Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Content */}
              <div className="text-center lg:text-left">
                <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl">
                  Fonoaudióloga en Chillán
                </h1>
                <p className="mb-4 text-2xl font-medium text-rose-600 sm:text-3xl">
                  Katia Domínguez
                </p>
                <p className="mb-8 text-xl leading-relaxed text-gray-600">
                  Especialista en evaluación y tratamiento de trastornos del
                  lenguaje y comunicación en niños. Más de 20 años de
                  experiencia. Atención presencial en Chillán.
                </p>

                {/* CTAs */}
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-5 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Agendar hora
                  </a>
                  <Link
                    href="/servicios"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-rose-600 px-8 py-5 text-lg font-bold text-rose-600 transition-all hover:bg-rose-50"
                  >
                    Ver servicios
                  </Link>
                </div>

                <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row lg:justify-start">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 font-semibold text-gray-900">5.0</span>
                    <span className="text-gray-600">(40 reseñas)</span>
                  </div>
                  <span className="hidden sm:inline text-gray-300">•</span>
                  <span className="text-sm text-gray-600">
                    📍 Chillán • Respondo en menos de 24 horas
                  </span>
                </div>
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
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Servicios de fonoaudiología en Chillán
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Atención especializada para niños con dificultades de lenguaje,
                habla y comunicación.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.href} {...service} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/servicios"
                className="text-lg font-medium text-rose-600 hover:underline"
              >
                Ver todos los servicios →
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-rose-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="mb-4 flex items-center justify-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-6 w-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xl font-bold text-gray-900">5.0</span>
                <span className="text-gray-600">(40 reseñas en Google)</span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Lo que dicen las familias
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Más de 40 familias confían en mi trabajo
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="https://g.page/r/CQTz_OxX_3IBEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-rose-600 hover:underline"
              >
                Ver todas las reseñas en Google →
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl bg-white p-8 shadow-lg sm:p-12">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Tu fonoaudióloga en Chillán
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Soy <strong>Katia Domínguez</strong>, fonoaudióloga con más de
                20 años de experiencia en evaluación y tratamiento de
                trastornos de la comunicación en niños.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>
                  <span>
                    <strong>Fonoaudióloga</strong> titulada Universidad de Chile
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
                    <strong>Más de 20 años</strong> de experiencia clínica con
                    niños
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>
                  <span>
                    <strong>Atención presencial</strong> en Chillán
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resources Preview */}
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Recursos para padres
              </h2>
              <p className="text-lg text-gray-600">
                Información útil sobre desarrollo del lenguaje y cuándo
                consultar
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <Link
                href="/glosario"
                className="rounded-xl border-2 border-gray-100 bg-gray-50 p-6 text-center transition-colors hover:border-rose-200"
              >
                <span className="mb-3 block text-3xl">📖</span>
                <h3 className="font-semibold text-gray-900">Glosario</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Términos fonoaudiológicos explicados
                </p>
              </Link>
              <Link
                href="/recursos"
                className="rounded-xl border-2 border-gray-100 bg-gray-50 p-6 text-center transition-colors hover:border-rose-200"
              >
                <span className="mb-3 block text-3xl">📚</span>
                <h3 className="font-semibold text-gray-900">Guías</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Señales de alerta y consejos
                </p>
              </Link>
              <Link
                href="/servicios/evaluacion-fonoaudiologica"
                className="rounded-xl border-2 border-gray-100 bg-gray-50 p-6 text-center transition-colors hover:border-rose-200"
              >
                <span className="mb-3 block text-3xl">📋</span>
                <h3 className="font-semibold text-gray-900">Primera consulta</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Qué esperar de la evaluación
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              ¿Tu hijo necesita una evaluación?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Escríbeme por WhatsApp y conversemos sobre tu caso. Sin
              compromiso.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-5 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar hora por WhatsApp
            </a>
            <p className="mt-6 text-gray-300">
              Respondo en menos de 24 horas • Lunes a Viernes
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
