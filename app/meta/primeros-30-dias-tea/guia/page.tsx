import type { Metadata } from "next";
import { buildNoIndexMetadata } from "@/lib/seo";
import { BUSINESS_NAME, SITE_URL } from "@/lib/site";
import { PrintButton } from "./PrintButton";
import "./guide.css";

export const metadata: Metadata = {
  ...buildNoIndexMetadata("Guía: primeros 30 días después de un diagnóstico de autismo"),
  description:
    "Una guía educativa para ordenar profesionales, colegio, derechos, documentos y próximos pasos durante los primeros 30 días.",
};

const LANDING_URL = "/meta/primeros-30-dias-tea";

const week1 = [
  "Guardar informes, derivaciones, exámenes y datos de contacto en una carpeta física o digital.",
  "Anotar quién entregó cada documento y para qué se solicitó.",
  "Registrar próximas fechas, controles o reuniones ya indicadas.",
  "Escribir las palabras o conceptos que necesitan una explicación más clara.",
  "Definir un canal familiar para compartir novedades sin multiplicar mensajes.",
];

const professionals = [
  "¿Cuál es el objetivo de esta consulta o evaluación?",
  "¿Qué información necesita este profesional antes de la cita?",
  "¿Qué documento o explicación debería quedar al finalizar?",
  "¿Con qué otros profesionales necesita coordinarse, si corresponde?",
  "¿Qué decisión puede esperar hasta contar con más información?",
];

const school = [
  "Identificar a la persona de contacto del establecimiento.",
  "Preguntar qué antecedentes necesita el colegio y con qué finalidad.",
  "Acordar cómo se compartirán observaciones relevantes entre familia y establecimiento.",
  "Preguntar qué apoyos o ajustes ya existen y cómo se revisan.",
  "Registrar acuerdos, responsables y una fecha para volver a conversar.",
];

const rights = [
  "Leer el texto oficial o una versión en lenguaje claro antes de asumir que un beneficio aplica.",
  "Anotar el organismo responsable de cada trámite o consulta.",
  "Confirmar requisitos, plazos y documentos en el canal oficial correspondiente.",
  "Guardar comprobantes de solicitudes o respuestas relevantes.",
  "Pedir orientación especializada si una situación requiere interpretación jurídica.",
];

const questions = [
  "¿Cuál es el objetivo de este paso?",
  "¿Qué información nueva deberíamos obtener?",
  "¿Qué opciones existen y qué diferencia hay entre ellas?",
  "¿Qué parte es prioritaria y qué parte puede esperar?",
  "¿Qué señales indican que debemos volver a consultar?",
  "¿Cómo se coordina esta recomendación con el colegio o con otros profesionales?",
  "¿Qué documento conviene guardar y quién puede explicarlo?",
];

const resources = [
  {
    title: "Ley 21.545 — Biblioteca del Congreso Nacional",
    text: "Texto oficial sobre inclusión, atención integral y protección de derechos.",
    href: "https://www.bcn.cl/leychile/navegar?f=2023-03-10&i=1190123",
  },
  {
    title: "SENADIS — Autismo",
    text: "Materiales sobre derechos, inclusión, lenguaje claro y recursos para familias.",
    href: "https://www.senadis.gob.cl/pag/809/2125/autismo",
  },
  {
    title: "Ministerio de Educación — Preguntas frecuentes Ley 21.545",
    text: "Orientaciones para la llegada de la ley a las comunidades educativas.",
    href: "https://especial.mineduc.cl/wp-content/uploads/sites/31/2023/09/TEA.pdf",
  },
  {
    title: "SENADIS — Guía de diagnóstico y apoyos tempranos",
    text: "Material de referencia sobre evaluación, diagnóstico y apoyos en la niñez autista.",
    href: "https://www.senadis.gob.cl/descarga/i/8160",
  },
];

function Checks({ items }: { items: string[] }) {
  return (
    <ul className="tea-guide-checks">
      {items.map((item) => (
        <li key={item}>
          <i aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Lines({ count }: { count: number }) {
  return (
    <div className="tea-guide-lines" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

function SheetFoot() {
  return (
    <p className="tea-guide-sheet-foot">
      <span>{BUSINESS_NAME} — Guía educativa</span>
      <span />
    </p>
  );
}

export default function TeaGuideDocument() {
  return (
    <article className="tea-guide">
      <div className="tea-guide-toolbar">
        <a href={LANDING_URL}>Volver</a>
        <PrintButton />
      </div>

      <section className="tea-guide-sheet tea-guide-cover" aria-label="Portada">
        <p className="tea-guide-kicker">Guía educativa gratuita</p>
        <h1>
          Primeros
          <em>30 días</em>
        </h1>
        <p>
          Una guía para ordenar profesionales, colegio, derechos y próximos
          pasos después de un diagnóstico de autismo.
        </p>
        <svg className="tea-guide-swoosh" viewBox="0 0 420 28" aria-hidden="true">
          <path d="M4 16c52-10 118 12 206-2 62-10 140 8 206 4" />
        </svg>
        <div className="tea-guide-cover-foot">
          <div>
            <strong>{BUSINESS_NAME}</strong>
            <p>Fonoaudióloga infantil · Contenido informativo para familias en Chile</p>
          </div>
          <div className="tea-guide-mapcard">
            <strong>Un mapa</strong>
            <p>para ordenar preguntas, documentos y próximos pasos</p>
            <span>
              <i />
              <b />
            </span>
            <span>
              <i />
              <b />
            </span>
            <span>
              <i />
              <b />
            </span>
            <span>
              <i />
              <b />
            </span>
          </div>
        </div>
      </section>

      <section className="tea-guide-sheet">
        <p className="tea-guide-label">Antes de empezar</p>
        <h2>No hay que resolverlo todo hoy.</h2>
        <p>
          Las primeras semanas pueden traer palabras nuevas, documentos,
          recomendaciones y decisiones. Esta guía propone una forma de ordenar
          esa información. No indica una terapia ni define prioridades clínicas:
          esas decisiones corresponden a la persona autista, su familia y los
          equipos profesionales que conocen su situación.
        </p>
        <div className="tea-guide-note">
          <h3>Cómo usar estas páginas</h3>
          <p>
            Lee una sección por vez. Marca solo lo que resulte relevante, anota
            las preguntas que queden abiertas y lleva esas preguntas a las
            conversaciones con salud, educación y redes de apoyo.
          </p>
        </div>
        <h3>Tres principios para los primeros 30 días</h3>
        <Checks
          items={[
            "Ordenar antes de comparar opciones.",
            "Registrar las preguntas antes de cada consulta o reunión.",
            "Priorizar necesidades y apoyos de la persona, no una lista genérica de tareas.",
          ]}
        />
        <p className="tea-guide-muted">
          Esta guía no reemplaza una evaluación, una indicación médica, una
          orientación jurídica ni los acuerdos con el establecimiento educacional.
        </p>
        <SheetFoot />
      </section>

      <section className="tea-guide-sheet">
        <p className="tea-guide-label">Semana 1</p>
        <h2>Juntar la información en un solo lugar</h2>
        <p>
          El objetivo de esta semana es disminuir la dispersión. No es completar
          todos los trámites.
        </p>
        <Checks items={week1} />
        <h3>Documentos o pendientes que conviene reunir</h3>
        <Lines count={6} />
        <SheetFoot />
      </section>

      <section className="tea-guide-sheet">
        <p className="tea-guide-label">Profesionales</p>
        <h2>Entender roles antes de sumar citas</h2>
        <p>
          Una lista de nombres no siempre muestra quién hace qué. Esta página
          ayuda a preparar preguntas de coordinación.
        </p>
        <Checks items={professionals} />
        <div className="tea-guide-note tea-guide-note-soft">
          <h3>Mapa de coordinación</h3>
          <p>
            Nombre / rol / motivo de consulta / próxima pregunta / forma de
            contacto. Completar estos cinco datos suele ser más útil que acumular
            recomendaciones sueltas.
          </p>
        </div>
        <h3>Notas para la próxima consulta</h3>
        <Lines count={5} />
        <SheetFoot />
      </section>

      <section className="tea-guide-sheet">
        <p className="tea-guide-label">Colegio</p>
        <h2>Llegar a la reunión con preguntas concretas</h2>
        <p>
          Las necesidades y los apoyos pueden variar según la persona, el
          contexto y las demandas del entorno.
        </p>
        <Checks items={school} />
        <div className="tea-guide-note">
          <h3>Referencia oficial</h3>
          <p>
            El Ministerio de Educación mantiene preguntas frecuentes sobre la Ley
            21.545 para comunidades educativas. La normativa y su aplicación deben
            revisarse en las fuentes oficiales vigentes.
          </p>
        </div>
        <SheetFoot />
      </section>

      <section className="tea-guide-sheet">
        <p className="tea-guide-label">Derechos</p>
        <h2>Separar la información oficial de los comentarios</h2>
        <p>
          En Chile, la Ley 21.545 aborda inclusión, atención integral y protección
          de derechos en los ámbitos social, de salud y educación.
        </p>
        <Checks items={rights} />
        <div className="tea-guide-note tea-guide-note-soft">
          <h3>Importante</h3>
          <p>
            Esta guía resume una ruta de organización. No determina beneficios,
            prestaciones ni resultados para un caso particular.
          </p>
        </div>
        <h3>Preguntas que quiero verificar</h3>
        <Lines count={5} />
        <SheetFoot />
      </section>

      <section className="tea-guide-sheet">
        <p className="tea-guide-label">Organización familiar</p>
        <h2>Una prioridad por semana</h2>
        <p>
          La agenda puede crecer muy rápido. Esta plantilla ayuda a distinguir lo
          importante de lo que puede esperar.
        </p>
        <div className="tea-guide-table-wrap">
          <table className="tea-guide-table">
            <thead>
              <tr>
                <th>Semana</th>
                <th>Prioridad</th>
                <th>Quién acompaña</th>
                <th>Siguiente paso</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((week) => (
                <tr key={week}>
                  <td>{week}</td>
                  <td />
                  <td />
                  <td />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3>Algo que decidimos dejar para después</h3>
        <Lines count={3} />
        <SheetFoot />
      </section>

      <section className="tea-guide-sheet">
        <p className="tea-guide-label">Consultas y reuniones</p>
        <h2>Preguntas para llevar anotadas</h2>
        <Checks items={questions} />
        <h3>Mis tres preguntas principales</h3>
        <Lines count={4} />
        <SheetFoot />
      </section>

      <section className="tea-guide-sheet">
        <p className="tea-guide-label">Fuentes</p>
        <h2>Dónde seguir informándose</h2>
        <p>
          Revisado el 29 de septiembre de 2026. Verifica siempre la versión
          vigente en el organismo responsable.
        </p>
        {resources.map((resource) => (
          <div className="tea-guide-resource" key={resource.href}>
            <h3>{resource.title}</h3>
            <p>{resource.text}</p>
            <a href={resource.href} rel="noopener noreferrer">
              {resource.href}
            </a>
          </div>
        ))}
        <div className="tea-guide-note">
          <h3>Alcance de esta guía</h3>
          <p>
            Contenido educativo general. No reemplaza evaluaciones, diagnósticos,
            indicaciones clínicas, orientación jurídica ni decisiones del
            establecimiento educacional. Ante una urgencia o riesgo inmediato,
            contacta los servicios de emergencia correspondientes.
          </p>
        </div>
        <h3>{BUSINESS_NAME}</h3>
        <p className="tea-guide-muted">
          Fonoaudióloga infantil
          <br />
          {SITE_URL.replace("https://", "")}
        </p>
        <SheetFoot />
      </section>
    </article>
  );
}
