import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const WHATSAPP_LINK =
    "https://wa.me/56995497838?text=Hola%2C%20quiero%20agendar%20una%20hora";

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl">
                Katia Domínguez
              </h1>
              <p className="mb-4 text-2xl font-medium text-rose-600 sm:text-3xl">
                Fonoaudióloga
              </p>
              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                Especialista en evaluación y tratamiento de trastornos del
                lenguaje y comunicación. Atención presencial en Chillán.
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
              </div>

              <p className="mt-6 text-sm text-gray-600">
                📍 Chillán, Chile • Respondo en menos de 24 horas
              </p>
            </div>

            {/* Image */}
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-rose-100 shadow-2xl">
                <Image
                  src="/KatiaDominguezFonoaudiologa.png"
                  alt="Katia Domínguez - Fonoaudióloga"
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
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Áreas de atención
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <Link
              href="/chillan/lenguaje-infantil"
              className="group rounded-2xl border-2 border-rose-100 bg-white p-8 shadow-sm transition-all hover:border-rose-300 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">👶</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-rose-600">
                Lenguaje infantil
              </h3>
              <p className="mb-4 text-gray-600">
                Evaluación y tratamiento de trastornos del lenguaje en niños de
                2 a 10 años.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-rose-600">
                Ver más
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>

            {/* Service Card 2 */}
            <div className="rounded-2xl border-2 border-gray-100 bg-gray-50 p-8">
              <div className="mb-4 text-4xl">🗣️</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Trastornos del habla
              </h3>
              <p className="text-gray-600">
                Dislalias, disfemia y otros trastornos de la pronunciación.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="rounded-2xl border-2 border-gray-100 bg-gray-50 p-8">
              <div className="mb-4 text-4xl">👂</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Trastornos de la voz
              </h3>
              <p className="text-gray-600">
                Disfonías y alteraciones de la calidad vocal.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="rounded-2xl border-2 border-gray-100 bg-gray-50 p-8">
              <div className="mb-4 text-4xl">📖</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Lectoescritura
              </h3>
              <p className="text-gray-600">
                Apoyo en dificultades de aprendizaje de lectura y escritura.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="rounded-2xl border-2 border-gray-100 bg-gray-50 p-8">
              <div className="mb-4 text-4xl">🧩</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                TEL y TEA
              </h3>
              <p className="text-gray-600">
                Trastorno Específico del Lenguaje y Trastorno del Espectro
                Autista.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="rounded-2xl border-2 border-gray-100 bg-gray-50 p-8">
              <div className="mb-4 text-4xl">💬</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Deglución
              </h3>
              <p className="text-gray-600">
                Trastornos de la deglución y disfagia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-rose-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white p-8 shadow-md sm:p-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Sobre mí
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Soy <strong>Katia Domínguez</strong>, fonoaudióloga con más de 20
              años de experiencia en evaluación y tratamiento de trastornos de
              la comunicación.
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
                  <strong>Más de 20 años</strong> de experiencia clínica
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

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            ¿Necesitas una evaluación?
          </h2>
          <p className="mb-8 text-xl text-gray-200">
            Escríbeme por WhatsApp y conversemos sobre tu caso.
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

      {/* Footer */}
      <footer className="bg-gray-950 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Katia Domínguez - Fonoaudióloga</p>
          <p className="mt-2">Chillán, Chile</p>
        </div>
      </footer>
    </div>
  );
}
