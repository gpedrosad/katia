import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { StickyWhatsApp } from "@/app/_components/StickyWhatsApp";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL, whatsappUrl } from "@/lib/site";

const PAGE_PATH = "/tratamientos/dislalia-infantil-chillan";
const WHATSAPP_LINK = whatsappUrl("Hola, busco ayuda con dislalia o pronunciación de mi hijo en Chillán");

export const metadata = buildPageMetadata({
  path: PAGE_PATH,
  title: "Tratamiento Dislalia Infantil | Chillán",
  description:
    "Terapia fonoaudiológica para dislalia y problemas de pronunciación en niños en Chillán. Rotacismo, sigmatismo y más. Evaluación presencial y plan personalizado.",
  keywords: ["dislalia infantil Chillán", "terapia pronunciación niños", "rotacismo niños", "fonoaudióloga Chillán"],
});

const signalsByAge = [
  { age: "3 años", concern: "Omite consonantes al inicio («ato» por gato); puede ser esperable en parte." },
  { age: "4 años", concern: "Persisten sustituciones («tasa» por casa) que dificultan entenderlo." },
  { age: "5 años", concern: "No dice la «r» ni otros sonidos que sus pares ya dominan." },
  { age: "6 años", concern: "El colegio o familiares le piden repetir con frecuencia." },
  { age: "7+ años", concern: "Errores de articulación afectan lectura, ortografía o autoestima." },
];

const benefits = [
  { icon: "🔤", title: "Sonidos más claros", description: "Enseñamos posición de lengua y labios con espejo, juego y repetición guiada." },
  { icon: "🎮", title: "Terapia lúdica", description: "Sesiones con soplo, praxias y juegos para que el niño participe sin presión." },
  { icon: "🩺", title: "Revisión OFA", description: "Evaluamos lengua, labios, paladar y frenillo antes de asumir que es solo hábito." },
  { icon: "📈", title: "Automatización", description: "Llevamos cada sonido de sílabas aisladas hasta el habla espontánea en casa." },
];

const faqs = [
  { q: "¿Qué es la dislalia?", a: "Es la dificultad para articular uno o más fonemas: el niño omite, sustituye o distorsiona sonidos. Puede persistir más allá de la edad esperada sin intervención." },
  { q: "¿A qué edad debería decir bien la «r»?", a: "La «r» fuerte suele consolidarse entre 4 y 6 años. Si a los 5-6 años sigue muy alterada y afecta la inteligibilidad, conviene evaluar." },
  { q: "¿La dislalia se corrige con terapia?", a: "En la mayoría de los casos sí, con un plan fonoaudiológico ordenado y práctica en casa. El tiempo depende de cuántos sonidos están involucrados." },
  { q: "¿Puede ser el frenillo?", a: "A veces un frenillo corto limita la movilidad de la lengua. Lo revisamos en la evaluación y, si corresponde, coordinamos con el equipo médico." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Tratamiento de dislalia infantil",
  description: "Terapia fonoaudiológica para corrección de errores de articulación en niños en Chillán.",
  provider: { "@type": "Person", name: "Katia Domínguez", jobTitle: "Fonoaudióloga" },
  areaServed: { "@type": "City", name: "Chillán" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function DislaliaInfantilPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Tratamientos", href: "/fonoaudiologia-infantil-chillan" }, { label: "Dislalia" }]} />
            <span className="mb-4 mt-6 inline-block rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700">Pronunciación y articulación</span>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">Tratamiento de dislalia infantil en Chillán</h1>
            <p data-speakable className="mb-6 text-xl text-gray-600">
              La dislalia es la dificultad para articular correctamente uno o varios sonidos. Si tu hijo pronuncia mal letras como la «r» o la «s» más allá de lo esperable para su edad, una terapia estructurada puede devolverle claridad y confianza al hablar.
            </p>
            <WhatsAppCTA href={WHATSAPP_LINK} className="bg-teal-600 hover:bg-teal-700 ring-teal-300">Agendar evaluación</WhatsAppCTA>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-center text-lg text-gray-600">
              Según la guía de desarrollo del habla de la{" "}
              <a href="https://www.minsal.cl/" target="_blank" rel="noopener noreferrer" className="font-medium text-teal-600 underline">MINSAL</a>
              , la vigilancia del lenguaje y la comunicación forma parte de la atención integral en la infancia; la pronunciación es uno de los hitos a observar.
            </p>
            <h2 className="mb-10 text-center text-3xl font-bold">Señales por edad</h2>
            <div className="space-y-4">
              {signalsByAge.map((s) => (
                <div key={s.age} className="flex gap-4 rounded-xl border border-teal-100 p-4 shadow-sm">
                  <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-teal-100 text-sm font-bold text-teal-700">{s.age}</div>
                  <p className="text-gray-700">{s.concern}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-teal-50 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-gray-600">
            <p>
              Más en <Link href="/glosario/dislalia" className="font-semibold text-teal-600 underline">glosario: dislalia</Link>,{" "}
              <Link href="/chillan/dislalia" className="font-semibold text-teal-600 underline">dislalia en Chillán</Link>,{" "}
              <Link href="/servicios/terapia-del-habla-infantil-chillan" className="font-semibold text-teal-600 underline">terapia del habla</Link> y{" "}
              <Link href="/evaluacion-fonoaudiologica-infantil-chillan" className="font-semibold text-teal-600 underline">evaluación fonoaudiológica</Link>.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold">Beneficios del tratamiento</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4 rounded-xl bg-gray-50 p-6">
                  <div className="text-2xl">{b.icon}</div>
                  <div><h3 className="font-semibold">{b.title}</h3><p className="text-sm text-gray-600">{b.description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-teal-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold">Preguntas frecuentes</h2>
            {faqs.map((f) => (
              <details key={f.q} className="group mb-4 rounded-2xl border bg-white p-6">
                <summary className="flex cursor-pointer justify-between font-semibold">{f.q}<span className="text-teal-500 group-open:rotate-180">▼</span></summary>
                <p className="mt-4 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 px-4 py-16 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">¿Quieres mejorar su pronunciación?</h2>
          <WhatsAppCTA href={WHATSAPP_LINK}>Escribir por WhatsApp</WhatsAppCTA>
        </section>
      </main>
      <StickyWhatsApp href={WHATSAPP_LINK} />
    </>
  );
}
