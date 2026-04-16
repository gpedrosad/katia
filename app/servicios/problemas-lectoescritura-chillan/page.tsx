import { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Problemas de Lectoescritura en Niños | Fonoaudióloga Chillán",
  description:
    "¿Tu hijo tiene problemas para leer o escribir? La fonoaudiología trata las bases lingüísticas de la lectoescritura. Atención presencial en Chillán.",
  alternates: {
    canonical:
      "https://www.katialafono.cl/servicios/problemas-lectoescritura-chillan",
  },
};

export default function ProblemasLectoescrituraPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Problemas de Lectoescritura - Fonoaudiología Chillán",
    medicalSpecialty: "SpeechTherapy",
    about: {
      "@type": "MedicalCondition",
      name: "Dificultades de Lectoescritura",
      description:
        "Dificultades en el aprendizaje de la lectura y escritura que tienen relación con bases lingüísticas como la conciencia fonológica, vocabulario y procesamiento del lenguaje.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Servicios", href: "/fonoaudiologia-infantil-chillan" },
            { label: "Problemas de Lectoescritura" },
          ]}
        />

        <article className="prose prose-emerald lg:prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-emerald-950">
            Dificultades de Lectoescritura en Niños: Ayuda Fonoaudiológica en
            Chillán
          </h1>
          <p className="lead font-medium text-gray-700">
            La lectura y escritura no son habilidades aisladas: se construyen
            sobre las bases del <strong>lenguaje oral</strong>. Si un niño
            tuvo dificultades para hablar, es probable que esas mismas
            dificultades se reflejen al momento de leer y escribir. La
            fonoaudiología interviene justamente en esa conexión.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-emerald-900">
              Señales de dificultades en lectoescritura
            </h2>
            <ul>
              <li>
                <strong>Lectura lenta y silabeante:</strong> Lee cortando cada
                sílaba sin lograr fluir (&quot;ma-ri-po-sa&quot; en vez de
                &quot;mariposa&quot;).
              </li>
              <li>
                <strong>Confusión de letras:</strong> Sustituye letras similares
                (b/d, p/q, m/n) al leer o escribir.
              </li>
              <li>
                <strong>Comprensión lectora baja:</strong> Lee un texto pero no
                puede explicar de qué se trata.
              </li>
              <li>
                <strong>Escritura con omisiones:</strong> Omite letras o sílabas
                al escribir (&quot;peota&quot; por &quot;pelota&quot;).
              </li>
              <li>
                <strong>Rechazo a leer:</strong> Evita actividades de lectura
                porque le resultan frustrantes.
              </li>
            </ul>
          </section>

          <div className="bg-emerald-50 p-6 rounded-xl my-8 border border-emerald-100">
            <h3 className="text-xl font-bold text-emerald-900 mt-0">
              ¿Cómo ayuda la fonoaudiología con la lectoescritura?
            </h3>
            <p className="text-emerald-800">
              En nuestra consulta en <strong>Chillán</strong>, evaluamos y
              trabajamos las habilidades lingüísticas que son la base de la
              lectura: la{" "}
              <Link
                href="/servicios/conciencia-fonologica-chillan"
                className="font-semibold text-emerald-700 underline"
              >
                conciencia fonológica
              </Link>{" "}
              (identificar sonidos dentro de las palabras), la discriminación
              auditiva, el vocabulario y la estructura gramatical. Si estas
              bases están débiles, la lectoescritura se ve directamente
              afectada.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-emerald-900">
              ¿Cuándo consultar?
            </h2>
            <p>
              Lo ideal es consultar cuando el niño está en{" "}
              <strong>primero o segundo básico</strong> y las dificultades
              lectoras persisten a pesar del apoyo escolar. Sin embargo,
              también es muy valioso consultar <em>antes</em> del inicio de la
              lectura formal si el niño ya presenta antecedentes de{" "}
              <Link
                href="/tratamientos/retraso-del-lenguaje-chillan"
                className="font-semibold text-emerald-600"
              >
                retraso del lenguaje
              </Link>{" "}
              o{" "}
              <Link
                href="/tratamientos/trastorno-fonologico-chillan"
                className="font-semibold text-emerald-600"
              >
                trastorno fonológico
              </Link>
              , ya que son factores de riesgo conocidos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 text-emerald-900">
              Trabajo coordinado con el colegio
            </h2>
            <p>
              Elaboramos{" "}
              <Link
                href="/servicios/informe-fonoaudiologico-pie-chillan"
                className="font-semibold text-emerald-600"
              >
                informes válidos para el PIE
              </Link>{" "}
              que permiten que el colegio entienda las necesidades específicas
              del niño y adapte sus estrategias pedagógicas. La coordinación
              entre terapeuta, profesores y familia es clave para un avance
              sostenido.
            </p>
          </section>

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              href="https://wa.me/56995497838?text=Hola,%20mi%20hijo%20tiene%20problemas%20de%20lectoescritura.%20Busco%20hora%20en%20Chill%C3%A1n"
              className="bg-emerald-600 hover:bg-emerald-700 ring-emerald-300"
            >
              Consultar por Lectoescritura
            </WhatsAppCTA>
          </div>
        </article>
      </main>
    </>
  );
}
