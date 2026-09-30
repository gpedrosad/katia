import type { Metadata } from "next";
import Image from "next/image";
import {
  Check,
  Download,
  FileText,
  FolderOpen,
  Scale,
  School,
  UsersRound,
} from "lucide-react";
import { buildNoIndexMetadata } from "@/lib/seo";
import { BUSINESS_NAME } from "@/lib/site";
import { HandMark } from "./HandMark";

const GUIDE_URL = "/meta/primeros-30-dias-tea/guia";
const CTA_LABEL = "Abrir la guía gratuita";

export const metadata: Metadata = {
  ...buildNoIndexMetadata(
    "Guía gratuita: primeros 30 días después de un diagnóstico de autismo",
  ),
  description:
    "Una guía educativa para ordenar profesionales, colegio, derechos, documentos y próximos pasos durante los primeros 30 días.",
};

const included = [
  {
    icon: FolderOpen,
    title: "Información y documentos",
    text: "Informes, fechas y contactos suelen llegar de a poco. Juntarlos evita decidir con papeles sueltos.",
  },
  {
    icon: UsersRound,
    title: "Profesionales de salud y de apoyo",
    text: "Pueden aparecer fonoaudiología, terapia ocupacional, neurología u otras especialidades. Primero conviene entender el rol de cada quien, no sumar todas las citas.",
  },
  {
    icon: School,
    title: "Colegio y apoyos",
    text: "El establecimiento es otro canal, con otras preguntas. No es lo mismo que una consulta de salud, y no tiene que resolverse el mismo día.",
  },
  {
    icon: Scale,
    title: "Derechos e información oficial",
    text: "En Chile hay fuentes públicas —Ley 21.545, SENADIS, Ministerio de Educación— para separar lo oficial de los comentarios.",
  },
];

const faq = [
  {
    question: "¿Esto es para nosotros?",
    answer:
      "Sí, si en la familia acaba de llegar un diagnóstico de autismo y falta una ruta clara. No es un programa clínico ni un listado de terapias. Es una forma de ordenar lo que ya está apareciendo.",
  },
  {
    question: "¿Es tarde si ya pasaron más de 30 días?",
    answer:
      "No. «Los primeros 30 días» es un marco para empezar, no una fecha de vencimiento. El mismo orden sirve más adelante.",
  },
  {
    question: "¿Y si estamos haciéndolo mal?",
    answer:
      "La guía no evalúa a nadie. Sirve para no apilar decisiones por culpa o apuro. Priorizar mal es esperable al comienzo; por eso se anotan preguntas y se deja parte para después.",
  },
  {
    question: "¿La guía recomienda terapias o profesionales?",
    answer:
      "No. Su propósito es ordenar información y preparar preguntas. Las decisiones clínicas corresponden a cada familia, a la persona autista y a los equipos que conocen su situación.",
  },
];

function DownloadButton({ location }: { location: string }) {
  return (
    <a
      href={GUIDE_URL}
      data-download-location={location}
      className="tea-button"
    >
      <Download aria-hidden="true" />
      {CTA_LABEL}
    </a>
  );
}

function GuideMockup() {
  return (
    <div
      className="tea-guide-stage"
      aria-label="Vista previa de la guía Primeros 30 días"
    >
      <div className="tea-paper tea-paper-back" aria-hidden="true" />
      <div className="tea-paper tea-paper-front">
        <div className="tea-cover-tag">GUÍA EDUCATIVA</div>
        <p className="tea-cover-title">
          Primeros
          <br />
          <span>30 días</span>
        </p>
        <p className="tea-cover-copy">
          Un mapa para ordenar preguntas, documentos y próximos pasos.
        </p>
        <div className="tea-cover-list" aria-hidden="true">
          {["Profesionales", "Colegio", "Derechos", "Organización"].map(
            (item) => (
              <div key={item}>
                <span />
                {item}
              </div>
            ),
          )}
        </div>
        <p className="tea-cover-author">Katia Domínguez · Fonoaudióloga</p>
      </div>
      <div className="tea-pencil-note" aria-hidden="true">
        para revisar con calma
        <svg viewBox="0 0 128 38">
          <path d="M4 7c23 17 54 12 83 13 18 0 28 5 36 14" />
        </svg>
      </div>
    </div>
  );
}

export default function First30DaysTeaLanding() {
  const designContract = [
    "<!--",
    "THESIS: Esta landing conecta con el momento post diagnóstico, muestra tipos de ayuda y calma: no hay que resolverlo todo en 30 días.",
    "OWN-WORLD: Tinta #292928, blanco suave, menta #91E3B1, tipografía sans humanista con acentos serif y marcas editoriales dibujadas.",
    "STORY: La visita reconoce el desorden, ve qué tipos de ayuda existen, confirma que no es tarde y abre la guía.",
    "FIRST VIEWPORT: El gancho de los 30 días, CTA visible y una guía física como prueba del recurso.",
    "FORM: Landing de consciente del problema; composición split asimétrica; seed meta-tea-map-01.",
    "FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md",
    "-->",
  ].join("\n");

  return (
    <main className="tea-landing">
      <template dangerouslySetInnerHTML={{ __html: designContract }} />

      <section className="tea-hero">
        <div className="tea-shell">
          <div className="tea-hero-grid">
            <div className="tea-hero-copy">
              <p className="tea-topic">Después de un diagnóstico de autismo</p>
              <h1>
                Los primeros
                <br />
                <span className="tea-hero-accent">
                  <HandMark variant="circle">30 días</HandMark>.
                </span>
              </h1>
              <p className="tea-lead">
                Cuando llega el diagnóstico, no siempre llega una ruta. Estas
                semanas sirven para entender qué tipos de ayuda existen y qué
                puede esperar, no para resolverlo todo.
              </p>
              <div className="tea-hero-action">
                <DownloadButton location="hero" />
                <p>Gratis · para leer o imprimir</p>
              </div>
            </div>
            <GuideMockup />
          </div>
        </div>
        <div className="tea-curve" aria-hidden="true" />
      </section>

      <section className="tea-thesis" aria-labelledby="thesis-title">
        <div className="tea-shell tea-thesis-grid">
          <h2 id="thesis-title">
            Más información no siempre significa{" "}
            <HandMark>más claridad.</HandMark>
          </h2>
          <div>
            <p>
              En las primeras semanas pueden aparecer informes, nombres de
              profesionales, conversaciones con el colegio y dudas sobre
              derechos. No hay que activar todas las ayudas el mismo mes.
            </p>
            <p className="tea-thesis-strong">
              El trabajo de este período es decidir qué revisar primero y qué
              puede esperar.
            </p>
          </div>
        </div>
      </section>

      <section
        id="tipos-de-ayuda"
        className="tea-included"
        aria-labelledby="included-title"
      >
        <div className="tea-shell">
          <div className="tea-section-heading">
            <h2 id="included-title">Hay distintos tipos de ayuda.</h2>
            <p>
              No hace falta usarlos todos a la vez. Sirve saber cuáles existen y
              cuál corresponde a cada conversación.
            </p>
          </div>

          <div className="tea-route">
            <div className="tea-route-line" aria-hidden="true" />
            {included.map((item, index) => (
              <article className="tea-route-item" key={item.title}>
                <div className="tea-route-index" aria-hidden="true">
                  <item.icon />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tea-preview" aria-labelledby="preview-title">
        <div className="tea-shell tea-preview-grid">
          <div className="tea-preview-copy">
            <h2 id="preview-title">
              Estas semanas importan para ordenar,
              <br />
              no para apurar.
            </h2>
            <p>
              Las recomendaciones se acumulan rápido. El período pesa porque
              define qué se revisa primero, no porque todo venza al día 30.
            </p>
            <ul>
              {[
                "¿Cuál es el objetivo de este paso?",
                "¿Qué información debería quedar al finalizar?",
                "¿Qué es prioritario y qué puede esperar?",
                "¿Cómo se coordina con otras personas o instituciones?",
              ].map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="tea-workbook"
            aria-label="Ejemplo de cómo ordenar una conversación"
          >
            <div className="tea-workbook-topline">
              <span>Consultas y reuniones</span>
              <FileText aria-hidden="true" />
            </div>
            <h3>Preguntas para llevar anotadas</h3>
            {["Objetivo", "Información", "Prioridad", "Coordinación"].map(
              (label) => (
                <div className="tea-workbook-row" key={label}>
                  <span className="tea-checkbox" />
                  <span>{label}</span>
                  <i />
                </div>
              ),
            )}
            <p>Mis tres preguntas principales</p>
            <div className="tea-writing-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="tea-author" aria-labelledby="author-title">
        <div className="tea-shell tea-author-grid">
          <div className="tea-author-photo">
            <Image
              src="/katia-guia.png"
              alt="Katia Domínguez, fonoaudióloga infantil"
              fill
              sizes="(max-width: 767px) 88vw, 420px"
              className="object-cover object-center"
            />
          </div>
          <div className="tea-author-copy">
            <p className="tea-author-name">Preparada por {BUSINESS_NAME}</p>
            <h2 id="author-title">
              Una guía para ordenar,
              <br />
              no para apurar.
            </h2>
            <p>
              Katia es fonoaudióloga infantil y cuenta con más de 20 años de
              experiencia. Este recurso reúne una pauta de organización y
              fuentes públicas chilenas para que las preguntas importantes no
              queden perdidas entre documentos y recomendaciones.
            </p>
            <p className="tea-boundary">
              La guía no evalúa, diagnostica ni recomienda una terapia. Tampoco
              reemplaza indicaciones de profesionales de salud o educación.
            </p>
          </div>
        </div>
      </section>

      <section className="tea-faq" aria-labelledby="faq-title">
        <div className="tea-shell tea-faq-grid">
          <h2 id="faq-title">Preguntas que suelen aparecer</h2>
          <div className="tea-faq-list">
            {faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="tea-final" aria-labelledby="final-title">
        <div className="tea-shell tea-final-inner">
          <p className="tea-final-note">No hace falta decidirlo todo hoy.</p>
          <h2 id="final-title">
            Hace falta saber
            <br />
            qué revisar
            <br />
            <HandMark variant="underline">primero.</HandMark>
          </h2>
          <DownloadButton location="final" />
          <p className="tea-final-meta">
            Sin registro · acceso inmediato
          </p>
        </div>
      </section>

      <footer className="tea-footer">
        <div className="tea-shell tea-footer-inner">
          <p>
            <strong>{BUSINESS_NAME}</strong>
            <br />
            Fonoaudióloga infantil
          </p>
          <p>
            Contenido educativo general. No reemplaza evaluación ni indicaciones
            de profesionales de salud, educación o derecho.
          </p>
        </div>
      </footer>

      <div className="tea-mobile-download">
        <a href={GUIDE_URL}>
          <Download aria-hidden="true" />
          {CTA_LABEL}
        </a>
      </div>
    </main>
  );
}
