from pathlib import Path
import shutil

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    BaseDocTemplate,
    Flowable,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "guia-primeros-30-dias-tea.pdf"
PUBLIC_COPY = ROOT / "public" / "downloads" / "guia-primeros-30-dias-tea.pdf"

INK = colors.HexColor("#292928")
SOFT = colors.HexColor("#F7F7F7")
WHITE = colors.white
MINT = colors.HexColor("#91E3B1")
MINT_DARK = colors.HexColor("#397552")
SAGE = colors.HexColor("#D1E7C4")
MUTED = colors.HexColor("#60605D")
BORDER = colors.HexColor("#DCDCDC")


def register_fonts():
    candidates = [
        (
            "/System/Library/Fonts/Supplemental/Avenir Next.ttc",
            "/System/Library/Fonts/Supplemental/Georgia.ttf",
        ),
        (
            "/Library/Fonts/Arial.ttf",
            "/Library/Fonts/Georgia.ttf",
        ),
    ]
    for sans_path, serif_path in candidates:
        if Path(sans_path).exists() and Path(serif_path).exists():
            try:
                pdfmetrics.registerFont(TTFont("GuideSans", sans_path, subfontIndex=0))
                pdfmetrics.registerFont(
                    TTFont("GuideSansBold", sans_path, subfontIndex=1)
                )
                pdfmetrics.registerFont(TTFont("GuideSerif", serif_path))
                return "GuideSans", "GuideSansBold", "GuideSerif"
            except Exception:
                continue
    return "Helvetica", "Helvetica-Bold", "Times-Bold"


SANS, SANS_BOLD, SERIF = register_fonts()
styles = getSampleStyleSheet()
STYLES = {
    "cover_title": ParagraphStyle(
        "cover_title",
        parent=styles["Title"],
        fontName=SANS_BOLD,
        fontSize=38,
        leading=40,
        textColor=WHITE,
        alignment=TA_LEFT,
        spaceAfter=8 * mm,
    ),
    "cover_sub": ParagraphStyle(
        "cover_sub",
        parent=styles["BodyText"],
        fontName=SANS,
        fontSize=14,
        leading=20,
        textColor=WHITE,
        spaceAfter=6 * mm,
    ),
    "cover_meta": ParagraphStyle(
        "cover_meta",
        parent=styles["BodyText"],
        fontName=SANS,
        fontSize=9,
        leading=13,
        textColor=colors.HexColor("#C9C9C6"),
        spaceAfter=2 * mm,
    ),
    "h1": ParagraphStyle(
        "h1",
        parent=styles["Heading1"],
        fontName=SANS_BOLD,
        fontSize=26,
        leading=30,
        textColor=INK,
        spaceAfter=7 * mm,
    ),
    "h2": ParagraphStyle(
        "h2",
        parent=styles["Heading2"],
        fontName=SERIF,
        fontSize=17,
        leading=21,
        textColor=INK,
        spaceBefore=4 * mm,
        spaceAfter=3 * mm,
    ),
    "body": ParagraphStyle(
        "body",
        parent=styles["BodyText"],
        fontName=SANS,
        fontSize=10.5,
        leading=16,
        textColor=INK,
        spaceAfter=4 * mm,
    ),
    "body_muted": ParagraphStyle(
        "body_muted",
        parent=styles["BodyText"],
        fontName=SANS,
        fontSize=9,
        leading=13,
        textColor=MUTED,
        spaceAfter=3 * mm,
    ),
    "check": ParagraphStyle(
        "check",
        parent=styles["BodyText"],
        fontName=SANS,
        fontSize=10,
        leading=14,
        textColor=INK,
    ),
    "small_caps": ParagraphStyle(
        "small_caps",
        parent=styles["BodyText"],
        fontName=SANS_BOLD,
        fontSize=8,
        leading=11,
        textColor=MINT_DARK,
        tracking=1.1,
        spaceAfter=4 * mm,
    ),
    "resource": ParagraphStyle(
        "resource",
        parent=styles["BodyText"],
        fontName=SANS,
        fontSize=9.5,
        leading=14,
        textColor=INK,
        spaceAfter=4 * mm,
    ),
}


class CheckItem(Flowable):
    def __init__(self, text, width=160 * mm, gap=7 * mm):
        super().__init__()
        self.text = text
        self.width = width
        self.gap = gap
        self.paragraph = Paragraph(text, STYLES["check"])

    def wrap(self, avail_width, avail_height):
        self.width = min(self.width, avail_width)
        _, height = self.paragraph.wrap(self.width - 11 * mm, avail_height)
        self.height = max(height, 5 * mm) + self.gap
        return self.width, self.height

    def draw(self):
        canvas = self.canv
        canvas.setStrokeColor(INK)
        canvas.setLineWidth(1.1)
        canvas.roundRect(
            0,
            self.height - 5.2 * mm,
            4.2 * mm,
            4.2 * mm,
            1.1 * mm,
            stroke=1,
            fill=0,
        )
        self.paragraph.wrapOn(canvas, self.width - 11 * mm, self.height)
        self.paragraph.drawOn(canvas, 9 * mm, self.gap)


class RuleLines(Flowable):
    def __init__(self, count=4, width=160 * mm, spacing=8 * mm):
        super().__init__()
        self.count = count
        self.width = width
        self.spacing = spacing
        self.height = count * spacing

    def wrap(self, avail_width, avail_height):
        self.width = min(self.width, avail_width)
        return self.width, self.height

    def draw(self):
        self.canv.setStrokeColor(BORDER)
        self.canv.setLineWidth(0.7)
        for index in range(self.count):
            y = self.height - (index + 1) * self.spacing + 2 * mm
            self.canv.line(0, y, self.width, y)


def footer(canvas, doc):
    canvas.saveState()
    if doc.page == 1:
        canvas.restoreState()
        return
    canvas.setStrokeColor(BORDER)
    canvas.setLineWidth(0.6)
    canvas.line(22 * mm, 15 * mm, 188 * mm, 15 * mm)
    canvas.setFont(SANS, 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(22 * mm, 10 * mm, "Katia Domínguez - Guía educativa")
    canvas.drawRightString(188 * mm, 10 * mm, f"{doc.page}")
    canvas.restoreState()


def cover(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(INK)
    canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
    canvas.setFillColor(MINT)
    canvas.roundRect(22 * mm, 246 * mm, 55 * mm, 9 * mm, 4.5 * mm, fill=1, stroke=0)
    canvas.setFillColor(INK)
    canvas.setFont(SANS_BOLD, 8)
    canvas.drawCentredString(49.5 * mm, 249.1 * mm, "GUÍA EDUCATIVA GRATUITA")
    canvas.setStrokeColor(MINT)
    canvas.setLineWidth(3)
    canvas.setLineCap(1)
    canvas.bezier(
        27 * mm,
        133 * mm,
        64 * mm,
        125 * mm,
        118 * mm,
        142 * mm,
        172 * mm,
        130 * mm,
    )
    canvas.setFillColor(SAGE)
    canvas.roundRect(126 * mm, 28 * mm, 58 * mm, 72 * mm, 5 * mm, fill=1, stroke=0)
    canvas.setFillColor(INK)
    canvas.setFont(SANS_BOLD, 11)
    canvas.drawString(136 * mm, 83 * mm, "UN MAPA")
    canvas.setFont(SANS, 8.5)
    canvas.drawString(136 * mm, 75 * mm, "para ordenar preguntas,")
    canvas.drawString(136 * mm, 69 * mm, "documentos y próximos pasos")
    for index in range(4):
        y = 56 * mm - index * 8 * mm
        canvas.rect(136 * mm, y, 4 * mm, 4 * mm, fill=0, stroke=1)
        canvas.line(145 * mm, y + 2 * mm, 174 * mm, y + 2 * mm)
    canvas.restoreState()


def page_heading(label, title, intro=None):
    story = [
        Paragraph(label.upper(), STYLES["small_caps"]),
        Paragraph(title, STYLES["h1"]),
    ]
    if intro:
        story.append(Paragraph(intro, STYLES["body"]))
    return story


def note_box(title, body, bg=SAGE):
    content = [Paragraph(title, STYLES["h2"]), Paragraph(body, STYLES["body"])]
    table = Table([[content]], colWidths=[158 * mm])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), bg),
                ("BOX", (0, 0), (-1, -1), 0, bg),
                ("LEFTPADDING", (0, 0), (-1, -1), 8 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 5 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3 * mm),
            ]
        )
    )
    return table


def build_story():
    story = [
        Spacer(1, 40 * mm),
        Paragraph(
            f"PRIMEROS<br/><font name='{SERIF}'>30 DÍAS</font>",
            STYLES["cover_title"],
        ),
        Paragraph(
            "Una guía para ordenar profesionales, colegio, derechos y próximos "
            "pasos después de un diagnóstico de autismo.",
            STYLES["cover_sub"],
        ),
        Spacer(1, 82 * mm),
        Paragraph("Katia Domínguez", STYLES["cover_sub"]),
        Paragraph(
            "Fonoaudióloga infantil · Contenido informativo para familias en Chile",
            STYLES["cover_meta"],
        ),
        PageBreak(),
    ]

    story.extend(page_heading("Antes de empezar", "No hay que resolverlo todo hoy."))
    story.append(
        Paragraph(
            "Las primeras semanas pueden traer palabras nuevas, documentos, "
            "recomendaciones y decisiones. Esta guía propone una forma de ordenar "
            "esa información. No indica una terapia ni define prioridades clínicas: "
            "esas decisiones corresponden a la persona autista, su familia y los "
            "equipos profesionales que conocen su situación.",
            STYLES["body"],
        )
    )
    story.append(
        note_box(
            "Cómo usar estas páginas",
            "Lee una sección por vez. Marca solo lo que resulte relevante, anota "
            "las preguntas que queden abiertas y lleva esas preguntas a las "
            "conversaciones con salud, educación y redes de apoyo.",
        )
    )
    story.append(Spacer(1, 7 * mm))
    story.append(Paragraph("Tres principios para los primeros 30 días", STYLES["h2"]))
    for item in [
        "Ordenar antes de comparar opciones.",
        "Registrar las preguntas antes de cada consulta o reunión.",
        "Priorizar necesidades y apoyos de la persona, no una lista genérica de tareas.",
    ]:
        story.append(CheckItem(item))
    story.append(Spacer(1, 5 * mm))
    story.append(
        Paragraph(
            "Esta guía no reemplaza una evaluación, una indicación médica, una "
            "orientación jurídica ni los acuerdos con el establecimiento educacional.",
            STYLES["body_muted"],
        )
    )
    story.append(PageBreak())

    story.extend(
        page_heading(
            "Semana 1",
            "Juntar la información en un solo lugar",
            "El objetivo de esta semana es disminuir la dispersión. No es completar "
            "todos los trámites.",
        )
    )
    for item in [
        "Guardar informes, derivaciones, exámenes y datos de contacto en una carpeta física o digital.",
        "Anotar quién entregó cada documento y para qué se solicitó.",
        "Registrar próximas fechas, controles o reuniones ya indicadas.",
        "Escribir las palabras o conceptos que necesitan una explicación más clara.",
        "Definir un canal familiar para compartir novedades sin multiplicar mensajes.",
    ]:
        story.append(CheckItem(item))
    story.append(Spacer(1, 5 * mm))
    story.append(Paragraph("Documentos o pendientes que conviene reunir", STYLES["h2"]))
    story.append(RuleLines(6))
    story.append(PageBreak())

    story.extend(
        page_heading(
            "Profesionales",
            "Entender roles antes de sumar citas",
            "Una lista de nombres no siempre muestra quién hace qué. Esta página "
            "ayuda a preparar preguntas de coordinación.",
        )
    )
    for item in [
        "¿Cuál es el objetivo de esta consulta o evaluación?",
        "¿Qué información necesita este profesional antes de la cita?",
        "¿Qué documento o explicación debería quedar al finalizar?",
        "¿Con qué otros profesionales necesita coordinarse, si corresponde?",
        "¿Qué decisión puede esperar hasta contar con más información?",
    ]:
        story.append(CheckItem(item))
    story.append(Spacer(1, 6 * mm))
    story.append(
        note_box(
            "Mapa de coordinación",
            "Nombre / rol / motivo de consulta / próxima pregunta / forma de "
            "contacto. Completar estos cinco datos suele ser más útil que acumular "
            "recomendaciones sueltas.",
            bg=SOFT,
        )
    )
    story.append(Spacer(1, 7 * mm))
    story.append(Paragraph("Notas para la próxima consulta", STYLES["h2"]))
    story.append(RuleLines(5))
    story.append(PageBreak())

    story.extend(
        page_heading(
            "Colegio",
            "Llegar a la reunión con preguntas concretas",
            "Las necesidades y los apoyos pueden variar según la persona, el "
            "contexto y las demandas del entorno.",
        )
    )
    for item in [
        "Identificar a la persona de contacto del establecimiento.",
        "Preguntar qué antecedentes necesita el colegio y con qué finalidad.",
        "Acordar cómo se compartirán observaciones relevantes entre familia y establecimiento.",
        "Preguntar qué apoyos o ajustes ya existen y cómo se revisan.",
        "Registrar acuerdos, responsables y una fecha para volver a conversar.",
    ]:
        story.append(CheckItem(item))
    story.append(Spacer(1, 6 * mm))
    story.append(
        note_box(
            "Referencia oficial",
            "El Ministerio de Educación mantiene preguntas frecuentes sobre la "
            "Ley 21.545 para comunidades educativas. La normativa y su aplicación "
            "deben revisarse en las fuentes oficiales vigentes.",
        )
    )
    story.append(PageBreak())

    story.extend(
        page_heading(
            "Derechos",
            "Separar la información oficial de los comentarios",
            "En Chile, la Ley 21.545 aborda inclusión, atención integral y protección "
            "de derechos en los ámbitos social, de salud y educación.",
        )
    )
    for item in [
        "Leer el texto oficial o una versión en lenguaje claro antes de asumir que un beneficio aplica.",
        "Anotar el organismo responsable de cada trámite o consulta.",
        "Confirmar requisitos, plazos y documentos en el canal oficial correspondiente.",
        "Guardar comprobantes de solicitudes o respuestas relevantes.",
        "Pedir orientación especializada si una situación requiere interpretación jurídica.",
    ]:
        story.append(CheckItem(item))
    story.append(Spacer(1, 6 * mm))
    story.append(
        note_box(
            "Importante",
            "Esta guía resume una ruta de organización. No determina beneficios, "
            "prestaciones ni resultados para un caso particular.",
            bg=SOFT,
        )
    )
    story.append(Spacer(1, 7 * mm))
    story.append(Paragraph("Preguntas que quiero verificar", STYLES["h2"]))
    story.append(RuleLines(5))
    story.append(PageBreak())

    story.extend(
        page_heading(
            "Organización familiar",
            "Una prioridad por semana",
            "La agenda puede crecer muy rápido. Esta plantilla ayuda a distinguir "
            "lo importante de lo que puede esperar.",
        )
    )
    rows = [["Semana", "Prioridad", "Quién acompaña", "Siguiente paso"]]
    for week in range(1, 5):
        rows.append([str(week), "", "", ""])
    planner = Table(
        rows,
        colWidths=[20 * mm, 58 * mm, 42 * mm, 40 * mm],
        rowHeights=[11 * mm] + [30 * mm] * 4,
    )
    planner.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), INK),
                ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
                ("FONTNAME", (0, 0), (-1, 0), SANS_BOLD),
                ("FONTNAME", (0, 1), (-1, -1), SANS),
                ("FONTSIZE", (0, 0), (-1, -1), 8.5),
                ("GRID", (0, 0), (-1, -1), 0.7, BORDER),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("ALIGN", (0, 0), (0, -1), "CENTER"),
                ("TOPPADDING", (0, 1), (-1, -1), 4 * mm),
            ]
        )
    )
    story.append(planner)
    story.append(Spacer(1, 8 * mm))
    story.append(Paragraph("Algo que decidimos dejar para después", STYLES["h2"]))
    story.append(RuleLines(3))
    story.append(PageBreak())

    story.extend(page_heading("Consultas y reuniones", "Preguntas para llevar anotadas"))
    for item in [
        "¿Cuál es el objetivo de este paso?",
        "¿Qué información nueva deberíamos obtener?",
        "¿Qué opciones existen y qué diferencia hay entre ellas?",
        "¿Qué parte es prioritaria y qué parte puede esperar?",
        "¿Qué señales indican que debemos volver a consultar?",
        "¿Cómo se coordina esta recomendación con el colegio o con otros profesionales?",
        "¿Qué documento conviene guardar y quién puede explicarlo?",
    ]:
        story.append(CheckItem(item, gap=6 * mm))
    story.append(Spacer(1, 5 * mm))
    story.append(Paragraph("Mis tres preguntas principales", STYLES["h2"]))
    story.append(RuleLines(4))
    story.append(PageBreak())

    story.extend(
        page_heading(
            "Fuentes",
            "Dónde seguir informándose",
            "Revisado el 29 de septiembre de 2026. Verifica siempre la versión "
            "vigente en el organismo responsable.",
        )
    )
    resources = [
        (
            "Ley 21.545 - Biblioteca del Congreso Nacional",
            "Texto oficial sobre inclusión, atención integral y protección de derechos.",
            "https://www.bcn.cl/leychile/navegar?f=2023-03-10&i=1190123",
        ),
        (
            "SENADIS - Autismo",
            "Materiales sobre derechos, inclusión, lenguaje claro y recursos para familias.",
            "https://www.senadis.gob.cl/pag/809/2125/autismo",
        ),
        (
            "Ministerio de Educación - Preguntas frecuentes Ley 21.545",
            "Orientaciones para la llegada de la ley a las comunidades educativas.",
            "https://especial.mineduc.cl/wp-content/uploads/sites/31/2023/09/TEA.pdf",
        ),
        (
            "SENADIS - Guía de diagnóstico y apoyos tempranos",
            "Material de referencia sobre evaluación, diagnóstico y apoyos en la niñez autista.",
            "https://www.senadis.gob.cl/descarga/i/8160",
        ),
    ]
    for title, description, url in resources:
        story.append(
            KeepTogether(
                [
                    Paragraph(f"<b>{title}</b>", STYLES["h2"]),
                    Paragraph(description, STYLES["body"]),
                    Paragraph(
                        f'<link href="{url}" color="#397552">{url}</link>',
                        STYLES["resource"],
                    ),
                    Spacer(1, 2 * mm),
                ]
            )
        )
    story.append(Spacer(1, 4 * mm))
    story.append(
        note_box(
            "Alcance de esta guía",
            "Contenido educativo general. No reemplaza evaluaciones, diagnósticos, "
            "indicaciones clínicas, orientación jurídica ni decisiones del "
            "establecimiento educacional. Ante una urgencia o riesgo inmediato, "
            "contacta los servicios de emergencia correspondientes.",
            bg=SAGE,
        )
    )
    story.append(Spacer(1, 8 * mm))
    story.append(Paragraph("Katia Domínguez", STYLES["h2"]))
    story.append(
        Paragraph(
            "Fonoaudióloga infantil - Chillán, Región de Ñuble",
            STYLES["body_muted"],
        )
    )
    story.append(Paragraph("www.katialafono.cl", STYLES["body_muted"]))
    return story


def build_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_COPY.parent.mkdir(parents=True, exist_ok=True)
    frame = Frame(
        22 * mm,
        20 * mm,
        166 * mm,
        255 * mm,
        leftPadding=0,
        rightPadding=0,
        topPadding=0,
        bottomPadding=0,
    )
    cover_frame = Frame(
        22 * mm,
        20 * mm,
        166 * mm,
        255 * mm,
        leftPadding=0,
        rightPadding=0,
        topPadding=0,
        bottomPadding=0,
    )
    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=22 * mm,
        rightMargin=22 * mm,
        topMargin=22 * mm,
        bottomMargin=20 * mm,
        title="Primeros 30 días - Guía educativa",
        author="Katia Domínguez",
        subject=(
            "Organización de preguntas y próximos pasos después de un "
            "diagnóstico de autismo"
        ),
    )
    doc.addPageTemplates(
        [
            PageTemplate(
                id="cover",
                frames=[cover_frame],
                onPage=cover,
                autoNextPageTemplate="content",
            ),
            PageTemplate(id="content", frames=[frame], onPage=footer),
        ]
    )
    doc.build(build_story())
    shutil.copyfile(OUTPUT, PUBLIC_COPY)


if __name__ == "__main__":
    build_pdf()
