export type GlosarioFaq = {
  question: string;
  answer: string;
};

export type GlosarioTermino = {
  slug: string;
  term: string;
  shortDescription: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  headline: string;
  subtitle: string;
  definitionParagraphs: string[];
  commonSigns: string[];
  whenToConsult: string[];
  faqs: GlosarioFaq[];
  relatedSlugs: string[];
  chillanSlug?: string;
  servicioHref?: string;
  whatsappText: string;
};

/** Rutas estáticas con prioridad sobre [slug] */
export const STATIC_GLOSSARY_SLUGS = ["dislalia", "tel"] as const;

export const GLOSARIO_TERMINOS: GlosarioTermino[] = [
  {
    slug: "dislalia",
    term: "Dislalia",
    shortDescription:
      "Dificultad para pronunciar ciertos sonidos correctamente.",
    category: "Trastornos del habla",
    metaTitle: "¿Qué es la Dislalia? | Causas, Síntomas y Tratamiento",
    metaDescription:
      "Qué es la dislalia: dificultad para pronunciar sonidos correctamente. Conoce tipos, causas, síntomas y tratamiento fonoaudiológico.",
    keywords: [
      "qué es dislalia",
      "dislalia definición",
      "dislalia en niños",
      "pronunciación incorrecta",
    ],
    headline: "¿Qué es la dislalia?",
    subtitle:
      "Trastorno del habla por dificultad para articular sonidos. Guía para padres.",
    definitionParagraphs: [
      "La dislalia es un trastorno del habla en el que el niño omite, sustituye o distorsiona sonidos al hablar. Es uno de los motivos más frecuentes de consulta fonoaudiológica en la infancia.",
      "Con evaluación y tratamiento oportuno, la mayoría de los casos mejora de forma significativa y el habla se vuelve más clara para la familia, el colegio y el entorno social.",
    ],
    commonSigns: [
      "Omite sonidos (dice «ato» en vez de «gato»)",
      "Sustituye sonidos (dice «tasa» en vez de «casa»)",
      "Distorsiona la r, s, l u otros fonemas",
      "Persisten errores después de los 5-6 años",
    ],
    whenToConsult: [
      "Si a los 5-6 años aún hay sonidos que no se pronuncian bien",
      "Si el niño se frustra porque no le entienden",
      "Si el colegio o familiares reportan dificultad para comprenderlo",
    ],
    faqs: [
      {
        question: "¿Qué es la dislalia?",
        answer:
          "La dislalia es un trastorno del habla caracterizado por la dificultad para pronunciar ciertos sonidos correctamente. El niño puede omitir, sustituir o distorsionar sonidos al hablar.",
      },
      {
        question: "¿A qué edad se corrige la dislalia?",
        answer:
          "La mayoría de los sonidos deben estar adquiridos a los 4-5 años. Si después de esa edad persisten errores de pronunciación, es recomendable consultar a un fonoaudiólogo.",
      },
      {
        question: "¿La dislalia se cura con tratamiento?",
        answer:
          "Sí, la mayoría de los casos de dislalia se corrigen completamente con tratamiento fonoaudiológico. El tiempo depende de la cantidad y tipo de sonidos afectados.",
      },
    ],
    relatedSlugs: ["trastorno-fonologico", "praxias-orofaciales"],
    chillanSlug: "dislalia",
    servicioHref: "/servicios/trastornos-del-habla",
    whatsappText: "Hola, quiero consultar por dislalia",
  },
  {
    slug: "tel",
    term: "TEL (Trastorno Específico del Lenguaje)",
    shortDescription:
      "Trastorno que afecta la adquisición del lenguaje sin causa aparente.",
    category: "Trastornos del lenguaje",
    metaTitle: "¿Qué es el TEL? | Trastorno Específico del Lenguaje Explicado",
    metaDescription:
      "Qué es el TEL (Trastorno Específico del Lenguaje): causas, síntomas, diagnóstico y tratamiento. Guía para padres.",
    keywords: [
      "qué es TEL",
      "trastorno específico del lenguaje",
      "TEL en niños",
      "síntomas TEL",
    ],
    headline: "¿Qué es el TEL?",
    subtitle:
      "Trastorno Específico del Lenguaje (TDL): guía sobre síntomas, diagnóstico y tratamiento.",
    definitionParagraphs: [
      "El TEL o TDL (Trastorno del Desarrollo del Lenguaje) es un trastorno del neurodesarrollo que afecta la adquisición y el desarrollo del lenguaje sin una causa evidente como pérdida auditiva, discapacidad intelectual o daño neurológico.",
      "Afecta aproximadamente al 7% de los niños. Con intervención fonoaudiológica temprana e intensiva, muchos mejoran de forma importante en vocabulario, gramática y comprensión.",
    ],
    commonSigns: [
      "Vocabulario muy limitado para la edad",
      "Oraciones cortas cuando los pares hablan con frases más largas",
      "Dificultad para seguir instrucciones de 2-3 pasos",
      "Frustración al comunicarse o dificultades escolares pese a buena inteligencia",
    ],
    whenToConsult: [
      "Si el lenguaje va claramente por detrás de otros niños de su edad",
      "Si las dificultades persisten más de 6 meses sin mejoría",
      "Si hay preocupación del colegio o del pediatra",
    ],
    faqs: [
      {
        question: "¿Qué significa TEL?",
        answer:
          "TEL significa Trastorno Específico del Lenguaje. Es un trastorno del neurodesarrollo que afecta la adquisición del lenguaje sin causa aparente como pérdida auditiva o discapacidad intelectual.",
      },
      {
        question: "¿El TEL es lo mismo que TDL?",
        answer:
          "Sí. Actualmente se usa más el término TDL (Trastorno del Desarrollo del Lenguaje) en lugar de TEL. Ambos nombres se refieren a la misma condición.",
      },
      {
        question: "¿El TEL se cura?",
        answer:
          "El TEL es una condición que puede acompañar a la persona, pero con tratamiento adecuado los niños mejoran significativamente y desarrollan estrategias para comunicarse con eficacia.",
      },
    ],
    relatedSlugs: ["disfasia", "retraso-del-lenguaje"],
    chillanSlug: "tel",
    servicioHref: "/servicios/tel-trastorno-especifico-lenguaje",
    whatsappText: "Hola, quiero consultar por TEL",
  },
  {
    slug: "tea",
    term: "TEA (Trastorno del Espectro Autista)",
    shortDescription:
      "Condición del neurodesarrollo que puede afectar la comunicación.",
    category: "Desarrollo",
    metaTitle: "¿Qué es el TEA? | Comunicación y Lenguaje Explicado",
    metaDescription:
      "Qué es el TEA (Trastorno del Espectro Autista) y cómo puede afectar la comunicación y el lenguaje en niños. Guía para padres.",
    keywords: [
      "qué es TEA",
      "trastorno del espectro autista",
      "TEA comunicación",
      "autismo lenguaje",
    ],
    headline: "¿Qué es el TEA?",
    subtitle:
      "Trastorno del Espectro Autista y su relación con la comunicación y el lenguaje.",
    definitionParagraphs: [
      "El TEA (Trastorno del Espectro Autista) es una condición del neurodesarrollo que puede influir en la comunicación social, el lenguaje, la interacción y los patrones de conducta.",
      "No todos los niños con TEA presentan el mismo perfil de lenguaje: algunos hablan con fluidez pero con dificultades pragmáticas; otros tienen poco lenguaje verbal y requieren apoyos de comunicación aumentativa.",
    ],
    commonSigns: [
      "Poco o ningún lenguaje verbal en algunos casos",
      "Dificultad para usar el lenguaje en contexto social",
      "Repetición de frases sin uso comunicativo claro",
      "Dificultad para seguir turnos de conversación o entender gestos",
    ],
    whenToConsult: [
      "Si hay retraso del lenguaje junto con dificultades sociales persistentes",
      "Si el niño no responde a su nombre o evita contacto visual de forma marcada",
      "Si necesitas orientación sobre cómo estimular la comunicación en casa",
    ],
    faqs: [
      {
        question: "¿El TEA siempre implica retraso del lenguaje?",
        answer:
          "No siempre. Algunos niños con TEA hablan bien pero tienen dificultades para usar el lenguaje de forma socialmente adecuada. Otros presentan retraso significativo del lenguaje verbal.",
      },
      {
        question: "¿La fonoaudiología ayuda en el TEA?",
        answer:
          "Sí. La fonoaudióloga trabaja comunicación funcional, lenguaje, pragmática y, cuando corresponde, sistemas alternativos o aumentativos de comunicación.",
      },
      {
        question: "¿A qué edad conviene intervenir?",
        answer:
          "Cuanto antes, mejor. La intervención temprana favorece el desarrollo de la comunicación y reduce la frustración familiar y del niño.",
      },
    ],
    relatedSlugs: ["tel", "retraso-del-lenguaje"],
    chillanSlug: "tea-comunicacion",
    servicioHref: "/servicios/tea-trastorno-espectro-autista",
    whatsappText: "Hola, quiero consultar por TEA y comunicación",
  },
  {
    slug: "trastorno-fonologico",
    term: "Trastorno fonológico",
    shortDescription:
      "Patrones sistemáticos de errores en los sonidos del habla.",
    category: "Trastornos del habla",
    metaTitle: "¿Qué es el Trastorno Fonológico? | Definición y Tratamiento",
    metaDescription:
      "Qué es el trastorno fonológico: patrones de errores en los sonidos del habla, señales de alerta y cuándo consultar a un fonoaudiólogo.",
    keywords: [
      "trastorno fonológico",
      "qué es trastorno fonológico",
      "errores fonológicos niños",
      "fonología infantil",
    ],
    headline: "¿Qué es el trastorno fonológico?",
    subtitle:
      "Patrones sistemáticos de errores en los sonidos que afectan la inteligibilidad del habla.",
    definitionParagraphs: [
      "El trastorno fonológico se refiere a dificultades en el sistema de sonidos del idioma: el niño no solo falla un sonido aislado, sino que aplica patrones de error repetidos (sustituciones, omisiones, simplificaciones).",
      "A diferencia de errores evolutivos puntuales, estos patrones persisten y pueden hacer que el habla sea difícil de entender, especialmente para personas fuera del núcleo familiar.",
    ],
    commonSigns: [
      "Múltiples sustituciones de sonidos de forma consistente",
      "Elimina sílabas («pato» por «zapato»)",
      "Simplifica grupos consonánticos",
      "Habla poco inteligible después de los 4 años",
    ],
    whenToConsult: [
      "Si los errores son muchos y siguen un patrón, no solo un sonido",
      "Si a los 4-5 años la familia o el colegio tienen dificultad para entenderlo",
      "Si el niño evita hablar por vergüenza o frustración",
    ],
    faqs: [
      {
        question: "¿En qué se diferencia del trastorno articulatorio?",
        answer:
          "En el trastorno fonológico predominan patrones de error en el sistema de sonidos; en el articulatorio hay dificultad motora para producir sonidos concretos. A menudo se evalúan juntos.",
      },
      {
        question: "¿Se puede tratar en la infancia?",
        answer:
          "Sí. Con terapia fonoaudiológica especializada se trabajan los patrones fonológicos hasta lograr mayor claridad del habla.",
      },
      {
        question: "¿A qué edad debería preocuparme?",
        answer:
          "Si después de los 4 años persisten muchos errores sistemáticos y el habla no es clara para desconocidos, conviene una evaluación.",
      },
    ],
    relatedSlugs: ["dislalia", "conciencia-fonologica"],
    chillanSlug: "trastorno-fonologico",
    servicioHref: "/servicios/trastornos-del-habla",
    whatsappText: "Hola, quiero consultar por trastorno fonológico",
  },
  {
    slug: "retraso-del-lenguaje",
    term: "Retraso del lenguaje",
    shortDescription:
      "Desarrollo del lenguaje más lento de lo esperado para la edad.",
    category: "Trastornos del lenguaje",
    metaTitle: "¿Qué es el Retraso del Lenguaje? | Señales y Cuándo Consultar",
    metaDescription:
      "Qué es el retraso del lenguaje en niños: definición, señales de alerta, diferencia con el TEL y cuándo acudir a fonoaudiología.",
    keywords: [
      "retraso del lenguaje",
      "niño habla poco",
      "desarrollo del lenguaje",
      "hitos del lenguaje",
    ],
    headline: "¿Qué es el retraso del lenguaje?",
    subtitle:
      "Cuando el niño adquiere el lenguaje más lento de lo esperado para su edad.",
    definitionParagraphs: [
      "El retraso del lenguaje describe un desarrollo del lenguaje oral más lento que el esperado: menos palabras, frases más cortas o comprensión reducida para la edad.",
      "En algunos casos es transitorio con estimulación adecuada; en otros puede ser señal de un trastorno persistente como el TEL. Una evaluación permite orientar el camino.",
    ],
    commonSigns: [
      "A los 2 años dice menos de 50 palabras",
      "No junta dos palabras («mamá agua») a tiempo",
      "Vocabulario muy limitado frente a pares",
      "Dificultad para seguir instrucciones o contar experiencias",
    ],
    whenToConsult: [
      "Si a los 2 años hay muy pocas palabras o no combina palabras",
      "Si a los 3 años solo la familia cercana le entiende con facilidad",
      "Si no hay mejoría evidente en 3-6 meses con estimulación en casa",
    ],
    faqs: [
      {
        question: "¿El retraso del lenguaje es lo mismo que el TEL?",
        answer:
          "No necesariamente. El retraso puede ser temporal; el TEL implica dificultades persistentes sin causa aparente. Solo una evaluación puede diferenciarlos.",
      },
      {
        question: "¿Se resuelve solo?",
        answer:
          "Algunos niños alcanzan hitos con el tiempo, pero muchos requieren estimulación o terapia. Esperar demasiado puede retrasar el apoyo necesario.",
      },
      {
        question: "¿Qué hace la fonoaudióloga?",
        answer:
          "Evalúa comprensión y expresión, identifica áreas afectadas y diseña un plan de intervención con objetivos claros para la familia y, si corresponde, el colegio.",
      },
    ],
    relatedSlugs: ["tel", "tea"],
    chillanSlug: "retraso-del-lenguaje",
    servicioHref: "/servicios/terapia-lenguaje-infantil",
    whatsappText: "Hola, quiero consultar por retraso del lenguaje",
  },
  {
    slug: "conciencia-fonologica",
    term: "Conciencia fonológica",
    shortDescription:
      "Habilidad para identificar y manipular los sonidos del lenguaje.",
    category: "Habilidades",
    metaTitle: "¿Qué es la Conciencia Fonológica? | Base para Leer y Escribir",
    metaDescription:
      "Qué es la conciencia fonológica, por qué es clave para la lectura, señales de dificultad y cuándo evaluarla en niños.",
    keywords: [
      "conciencia fonológica",
      "rimas niños",
      "base lectoescritura",
      "sonidos del lenguaje",
    ],
    headline: "¿Qué es la conciencia fonológica?",
    subtitle:
      "Habilidad para reconocer y jugar con los sonidos del habla; base de la lectoescritura.",
    definitionParagraphs: [
      "La conciencia fonológica es la capacidad de identificar, segmentar, combinar y manipular los sonidos del lenguaje (rimas, sílabas, fonemas) sin necesidad de leer.",
      "Es uno de los predictores más importantes del éxito en lectura y escritura. Déficits en esta área suelen aparecer antes de que el niño falle formalmente en la escuela.",
    ],
    commonSigns: [
      "Dificultad para identificar rimas o palabras que empiezan igual",
      "Problemas para contar sílabas o separar sonidos en palabras",
      "Lentitud o errores al aprender letras y sus sonidos",
      "Lectura inicial muy laboriosa pese a buena comprensión oral",
    ],
    whenToConsult: [
      "Si en preescolar o primer básico cuesta jugar con sonidos y rimas",
      "Si hay antecedentes de TEL y dificultades escolares en lectura",
      "Si el colegio reporta problemas persistentes en lectura inicial",
    ],
    faqs: [
      {
        question: "¿La conciencia fonológica se enseña?",
        answer:
          "Sí. Mediante juegos, rimas, segmentación de palabras y actividades planificadas se puede fortalecer antes y durante el proceso de lectoescritura.",
      },
      {
        question: "¿Está relacionada con la dislexia?",
        answer:
          "Sí. Muchas dificultades de lectura tienen base en el lenguaje oral, incluida la conciencia fonológica. Por eso la fonoaudiología interviene en lectoescritura.",
      },
      {
        question: "¿A qué edad se evalúa?",
        answer:
          "Desde preescolar se pueden observar habilidades tempranas; entre 5 y 7 años es clave si hay señales de riesgo para la lectura.",
      },
    ],
    relatedSlugs: ["dislexia", "trastorno-fonologico"],
    chillanSlug: "lectoescritura",
    servicioHref: "/servicios/dificultades-lectoescritura",
    whatsappText: "Hola, quiero consultar por conciencia fonológica",
  },
  {
    slug: "disfasia",
    term: "Disfasia",
    shortDescription:
      "Otro nombre histórico para el Trastorno Específico del Lenguaje (TEL).",
    category: "Trastornos del lenguaje",
    metaTitle: "¿Qué es la Disfasia? | Relación con el TEL y el TDL",
    metaDescription:
      "Qué es la disfasia, su relación con el TEL/TDL, síntomas y cuándo consultar a un fonoaudiólogo infantil.",
    keywords: [
      "qué es disfasia",
      "disfasia infantil",
      "disfasia y TEL",
      "trastorno del lenguaje",
    ],
    headline: "¿Qué es la disfasia?",
    subtitle:
      "Término clásico para dificultades específicas del lenguaje; hoy suele llamarse TEL o TDL.",
    definitionParagraphs: [
      "La disfasia es un término tradicional que describía dificultades en la adquisición y uso del lenguaje sin alteración general de la inteligencia ni causa neurológica evidente.",
      "En la práctica clínica actual se prefiere hablar de TEL o TDL (Trastorno del Desarrollo del Lenguaje), pero muchas familias y colegios aún usan la palabra disfasia.",
    ],
    commonSigns: [
      "Vocabulario reducido para la edad",
      "Oraciones incompletas o gramaticalmente pobres",
      "Dificultad para comprender o seguir instrucciones complejas",
      "Problemas escolares en lenguaje y, a veces, en lectura",
    ],
    whenToConsult: [
      "Si te han dicho que tu hijo «tiene disfasia» o sospechas TEL",
      "Si el lenguaje no progresa pese a estimulación en casa",
      "Si necesitas un informe claro para el colegio o PIE",
    ],
    faqs: [
      {
        question: "¿Disfasia y TEL son lo mismo?",
        answer:
          "En términos generales, sí. La disfasia es un nombre antiguo; TEL y TDL son los términos actuales para el mismo tipo de dificultad del lenguaje.",
      },
      {
        question: "¿La disfasia afecta la inteligencia?",
        answer:
          "No la inteligencia general. Afecta específicamente áreas del lenguaje (vocabulario, gramática, comprensión o expresión).",
      },
      {
        question: "¿Se trata con fonoaudiología?",
        answer:
          "Sí. El tratamiento es fonoaudiológico, prolongado e individualizado, con coordinación familiar y escolar.",
      },
    ],
    relatedSlugs: ["tel", "retraso-del-lenguaje"],
    chillanSlug: "tel",
    servicioHref: "/servicios/tel-trastorno-especifico-lenguaje",
    whatsappText: "Hola, quiero consultar por disfasia o TEL",
  },
  {
    slug: "disartria",
    term: "Disartria",
    shortDescription:
      "Dificultad para hablar por debilidad de los músculos del habla.",
    category: "Trastornos del habla",
    metaTitle: "¿Qué es la Disartria? | Causas y Tratamiento del Habla",
    metaDescription:
      "Qué es la disartria: habla poco clara por alteración neuromuscular. Señales, causas y rol de la fonoaudiología.",
    keywords: [
      "qué es disartria",
      "disartria infantil",
      "habla poco clara",
      "músculos del habla",
    ],
    headline: "¿Qué es la disartria?",
    subtitle:
      "Trastorno del habla causado por debilidad o incoordinación de los músculos que intervienen al hablar.",
    definitionParagraphs: [
      "La disartria es una dificultad para articular el habla debido a alteraciones en el control neuromuscular de labios, lengua, mandíbula y paladar.",
      "El habla puede sonar imprecisa, lenta, con volumen bajo o con esfuerzo visible. Requiere evaluación médica y fonoaudiológica para identificar la causa y planificar rehabilitación.",
    ],
    commonSigns: [
      "Habla poco clara o «arrastrada»",
      "Debilidad o movimientos limitados en boca y lengua",
      "Esfuerzo visible al hablar",
      "Dificultad para masticar o deglutir en algunos casos",
    ],
    whenToConsult: [
      "Si el habla empeoró tras una enfermedad neurológica o lesión",
      "Si hay diagnóstico médico que afecte músculos orofaciales",
      "Si la inteligibilidad del habla disminuye de forma progresiva",
    ],
    faqs: [
      {
        question: "¿La disartria es lo mismo que la dislalia?",
        answer:
          "No. La dislalia suele ser funcional y se centra en sonidos; la disartria tiene base neuromuscular y afecta la calidad global del habla.",
      },
      {
        question: "¿Se puede mejorar con terapia?",
        answer:
          "En muchos casos sí, con ejercicios de fuerza, coordinación, respiración y articulación adaptados al perfil del niño.",
      },
      {
        question: "¿Siempre necesita evaluación médica?",
        answer:
          "Sí, es recomendable descartar o acompañar causas neurológicas junto con la intervención fonoaudiológica.",
      },
    ],
    relatedSlugs: ["apraxia-del-habla", "praxias-orofaciales"],
    servicioHref: "/servicios/trastornos-del-habla",
    whatsappText: "Hola, quiero consultar por disartria",
  },
  {
    slug: "apraxia-del-habla",
    term: "Apraxia del habla",
    shortDescription:
      "Dificultad para planificar los movimientos necesarios para hablar.",
    category: "Trastornos del habla",
    metaTitle: "¿Qué es la Apraxia del Habla Infantil? | Síntomas y Tratamiento",
    metaDescription:
      "Qué es la apraxia del habla infantil (AHS): errores inconsistentes, señales de alerta y tratamiento fonoaudiológico.",
    keywords: [
      "apraxia del habla infantil",
      "AHS",
      "errores inconsistentes habla",
      "planificación motora del habla",
    ],
    headline: "¿Qué es la apraxia del habla?",
    subtitle:
      "Dificultad para planificar y coordinar los movimientos del habla; también llamada AHS.",
    definitionParagraphs: [
      "La apraxia del habla infantil (AHS) es un trastorno en el que el niño tiene dificultad para programar y ejecutar los movimientos necesarios para producir sonidos y sílabas de forma consistente.",
      "A menudo se observan intentos de corrección, errores variables (a veces acierta, a veces no) y mejor desempeño al imitar que al hablar espontáneamente.",
    ],
    commonSigns: [
      "Errores inconsistentes en los mismos sonidos o palabras",
      "Esfuerzo visible al intentar hablar",
      "Mejor imitación que habla espontánea",
      "Repertorio limitado de consonantes y vocales",
    ],
    whenToConsult: [
      "Si el habla es muy poco clara y los errores «cambian» de un día a otro",
      "Si hay sospecha de AHS tras evaluación inicial",
      "Si el progreso con terapia general de articulación es lento",
    ],
    faqs: [
      {
        question: "¿La apraxia del habla se cura?",
        answer:
          "Con tratamiento especializado e intensivo muchos niños logran habla más clara y funcional, aunque el tiempo de intervención suele ser mayor que en otros trastornos del habla.",
      },
      {
        question: "¿Cómo se diagnostica?",
        answer:
          "Mediante evaluación fonoaudiológica que observa consistencia de errores, imitación, prosodia y perfil motor del habla.",
      },
      {
        question: "¿Es frecuente?",
        answer:
          "Es menos frecuente que la dislalia o el trastorno fonológico, pero debe sospecharse cuando el cuadro encaja con el perfil descrito.",
      },
    ],
    relatedSlugs: ["disartria", "praxias-orofaciales"],
    chillanSlug: "apraxia-del-habla",
    servicioHref: "/servicios/trastornos-del-habla",
    whatsappText: "Hola, quiero consultar por apraxia del habla",
  },
  {
    slug: "disfemia",
    term: "Disfemia (Tartamudez)",
    shortDescription:
      "Alteración de la fluidez del habla con repeticiones o bloqueos.",
    category: "Trastornos del habla",
    metaTitle: "¿Qué es la Disfemia? | Tartamudez en Niños Explicada",
    metaDescription:
      "Qué es la disfemia o tartamudez: repeticiones, bloqueos, cuándo consultar e importancia de la intervención temprana.",
    keywords: [
      "disfemia",
      "tartamudez niños",
      "fluidez del habla",
      "tratamiento tartamudez",
    ],
    headline: "¿Qué es la disfemia?",
    subtitle:
      "Tartamudez: alteración de la fluidez del habla con repeticiones, prolongaciones o bloqueos.",
    definitionParagraphs: [
      "La disfemia, conocida popularmente como tartamudez, es un trastorno de la fluidez del habla. Puede incluir repeticiones de sonidos o sílabas, prolongaciones o bloqueos al iniciar palabras.",
      "En niños pequeños puede aparecer de forma evolutiva; si persiste o genera tensión y evitación, la evaluación fonoaudiológica temprana mejora el pronóstico.",
    ],
    commonSigns: [
      "Repeticiones de sonidos, sílabas o palabras",
      "Prolongaciones («ssssí»)",
      "Bloqueos sin sonido al iniciar frases",
      "Tensión facial o movimientos al hablar",
    ],
    whenToConsult: [
      "Si la tartamudez dura más de 6 meses en preescolar",
      "Si el niño evita hablar o muestra frustración",
      "Si hay antecedentes familiares y empeoramiento progresivo",
    ],
    faqs: [
      {
        question: "¿Toda tartamudez en niños pequeños es disfemia?",
        answer:
          "No. Entre 2 y 5 años puede haber disfluencias normales. Si persisten, son tensas o hay evitación, conviene evaluar.",
      },
      {
        question: "¿Se trata con fonoaudiología?",
        answer:
          "Sí. Se trabajan fluidez, manejo de la tensión y estrategias para el niño y la familia.",
      },
      {
        question: "¿Afecta la autoestima?",
        answer:
          "Puede hacerlo si no se aborda. Por eso la intervención temprana y un ambiente comunicativo tranquilo son clave.",
      },
    ],
    relatedSlugs: ["dislalia", "apraxia-del-habla"],
    chillanSlug: "disfemia",
    servicioHref: "/servicios/trastornos-del-habla",
    whatsappText: "Hola, quiero consultar por tartamudez",
  },
  {
    slug: "dislexia",
    term: "Dislexia",
    shortDescription:
      "Dificultad específica para aprender a leer de origen neurobiológico.",
    category: "Lectoescritura",
    metaTitle: "¿Qué es la Dislexia? | Lectura, Lenguaje y Fonoaudiología",
    metaDescription:
      "Qué es la dislexia: dificultad específica para leer, relación con el lenguaje oral y cuándo buscar ayuda fonoaudiológica.",
    keywords: [
      "qué es dislexia",
      "dislexia niños",
      "dificultad para leer",
      "lectoescritura",
    ],
    headline: "¿Qué es la dislexia?",
    subtitle:
      "Dificultad específica y persistente para aprender a leer; suele tener base en el lenguaje oral.",
    definitionParagraphs: [
      "La dislexia es una dificultad específica para el aprendizaje de la lectura de origen neurobiológico. No se debe a falta de inteligencia ni de esfuerzo.",
      "Muchas veces está relacionada con el lenguaje oral (conciencia fonológica, vocabulario, memoria verbal). La fonoaudiología trabaja esas bases junto con estrategias de lectura.",
    ],
    commonSigns: [
      "Lectura lenta, con muchos errores o laboriosa",
      "Confusión persistente de letras (b/d, p/q)",
      "Dificultad para decodificar palabras nuevas",
      "Problemas de ortografía pese a repasar",
    ],
    whenToConsult: [
      "Si en primer o segundo básico la lectura no despega pese a apoyo",
      "Si hay antecedentes de TEL o dificultades de lenguaje oral",
      "Si el niño evita leer o se frustra con tareas escolares",
    ],
    faqs: [
      {
        question: "¿La dislexia se cura?",
        answer:
          "Es una condición de por vida, pero con intervención adecuada el niño puede leer con mayor eficacia y compensar con estrategias y apoyos escolares.",
      },
      {
        question: "¿Por qué interviene la fonoaudióloga?",
        answer:
          "Porque la lectura se apoya en el lenguaje oral. Se evalúan y tratan habilidades como conciencia fonológica, vocabulario y comprensión.",
      },
      {
        question: "¿A qué edad se sospecha?",
        answer:
          "Suele detectarse entre 6 y 8 años, aunque señales de riesgo pueden observarse antes en preescolar.",
      },
    ],
    relatedSlugs: ["conciencia-fonologica", "tel"],
    chillanSlug: "dislexia",
    servicioHref: "/servicios/dificultades-lectoescritura",
    whatsappText: "Hola, quiero consultar por dislexia",
  },
  {
    slug: "praxias-orofaciales",
    term: "Praxias orofaciales",
    shortDescription:
      "Ejercicios de los músculos de la boca, lengua y cara.",
    category: "Intervención",
    metaTitle: "¿Qué son las Praxias Orofaciales? | Ejercicios del Habla",
    metaDescription:
      "Qué son las praxias orofaciales: ejercicios para fortalecer y coordinar labios, lengua y mandíbula en terapia del habla.",
    keywords: [
      "praxias orofaciales",
      "ejercicios lengua labios",
      "terapia del habla",
      "motricidad orofacial",
    ],
    headline: "¿Qué son las praxias orofaciales?",
    subtitle:
      "Ejercicios para fortalecer y coordinar los músculos de la boca, lengua y cara en terapia fonoaudiológica.",
    definitionParagraphs: [
      "Las praxias orofaciales son ejercicios planificados para mejorar la fuerza, movilidad y coordinación de los músculos que intervienen en el habla, la masticación y la deglución.",
      "Se usan frecuentemente en tratamiento de dislalia, trastornos del habla y apraxia, como preparación para enseñar sonidos correctos con mayor precisión.",
    ],
    commonSigns: [
      "No son un diagnóstico, sino una herramienta terapéutica",
      "Se indican cuando hay debilidad o poca coordinación oral",
      "Forman parte del plan cuando cuesta posicionar lengua o labios",
      "Se combinan con trabajo de sonidos y generalización al habla",
    ],
    whenToConsult: [
      "Si tu hijo está en terapia del habla y el fonoaudiólogo las incluye en el plan",
      "Si hay dificultades motoras orales asociadas a habla poco clara",
      "Si necesitas orientación sobre ejercicios seguros en casa",
    ],
    faqs: [
      {
        question: "¿Las praxias orofaciales solas corrigen la pronunciación?",
        answer:
          "No suelen bastar solas. Se combinan con enseñanza de sonidos, práctica en palabras y conversación para lograr cambios en el habla real.",
      },
      {
        question: "¿Se pueden hacer en casa?",
        answer:
          "Solo bajo indicación del fonoaudiólogo, con ejercicios específicos y frecuencia acordada para no sobrecargar al niño.",
      },
      {
        question: "¿Para qué edades sirven?",
        answer:
          "Se adaptan a la edad y tolerancia del niño, desde preescolar en adelante, siempre con supervisión profesional.",
      },
    ],
    relatedSlugs: ["dislalia", "apraxia-del-habla"],
    servicioHref: "/servicios/trastornos-del-habla",
    whatsappText: "Hola, quiero consultar por terapia del habla",
  },
];

export const GLOSARIO_CATEGORIES = [
  ...new Set(GLOSARIO_TERMINOS.map((t) => t.category)),
];

/** Términos servidos por app/glosario/[slug]/page.tsx (excluye rutas estáticas) */
export const DYNAMIC_GLOSARIO_TERMINOS = GLOSARIO_TERMINOS.filter(
  (t) => !STATIC_GLOSSARY_SLUGS.includes(t.slug as (typeof STATIC_GLOSSARY_SLUGS)[number])
);

export function getTerminoBySlug(slug: string): GlosarioTermino | undefined {
  return GLOSARIO_TERMINOS.find((t) => t.slug === slug);
}

export function getRelatedTerminos(slugs: string[]): GlosarioTermino[] {
  return slugs
    .map((s) => getTerminoBySlug(s))
    .filter((t): t is GlosarioTermino => t !== undefined);
}
