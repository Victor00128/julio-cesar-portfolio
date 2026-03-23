from reportlab.lib.pagesizes import LETTER
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, ListFlowable, ListItem
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.units import inch

OUTPUT = "public/CV-Julio-Cesar.pdf"

NAME = "Julio Cesar Morales Alvarado"
TITLE = "Full Stack Developer (React · TypeScript · Node.js)"
EMAIL = "juliocesarmoralesalvarado9@gmail.com"
GITHUB = "https://github.com/Victor00128"
LINKEDIN = "https://www.linkedin.com/in/julio-cesar-406314373/"
LOCATION = "Latinoamérica (remoto)"

SUMMARY = (
    "Desarrollador Full Stack enfocado en crear aplicaciones web modernas con React + TypeScript y backend con Node.js. "
    "Experiencia construyendo productos con integración de IA (Gemini / GPT), automatización con APIs externas y despliegue con CI/CD. "
    "Me interesa la performance, la UX y entregar soluciones mantenibles."
)

SKILLS = {
    "Frontend": ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Next.js"],
    "Backend": ["Node.js", "REST APIs", "JWT", "Supabase", "PostgreSQL (base)"] ,
    "IA & APIs": ["Gemini AI", "OpenAI/GPT", "Prompt Engineering", "Integración de LLMs"],
    "Herramientas": ["Git", "GitHub", "CI/CD (Netlify)"]
}

EXPERIENCE = [
    {
        "role": "Full Stack Developer – Freelance",
        "org": "Clientes directos / Proyectos independientes",
        "period": "Ene 2024 – Presente",
        "bullets": [
            "Desarrollo de aplicaciones web a medida con enfoque en UX, responsividad y rendimiento.",
            "Integraciones con APIs externas (pagos, notificaciones, CRMs) y automatización de flujos.",
            "Implementación de chatbots con IA para soporte y atención al cliente."
        ],
        "tech": "React, TypeScript, Node.js, Supabase, Tailwind CSS"
    },
    {
        "role": "Creador – Chatbot Vortex (Proyecto personal)",
        "org": "Producto en beta",
        "period": "Sep 2024 – Presente",
        "bullets": [
            "Chatbot multimodal con análisis de PDFs e imágenes y conversación multi-turno.",
            "Optimización de contexto, prompts y manejo de límites (rate limiting).",
            "Despliegue con CI/CD en Netlify."
        ],
        "tech": "React, TypeScript, Gemini AI, GPT, PDF.js, Netlify"
    },
    {
        "role": "Colaboraciones Open Source",
        "org": "GitHub",
        "period": "2023 – Presente",
        "bullets": [
            "Corrección de bugs y mejoras de rendimiento en proyectos de la comunidad.",
            "Documentación, mejoras de README y revisiones de código."
        ],
        "tech": "Git, GitHub, TypeScript, React"
    },
]

PROJECTS = [
    {
        "name": "Chatbot Vortex",
        "links": [
            ("Repo", "https://github.com/Victor00128/Chatbot-Vortex"),
            ("Demo", "https://vortex-ia.netlify.app/")
        ],
        "bullets": [
            "Integración de Gemini AI + GPT con UI moderna.",
            "Soporte para PDFs e imágenes; contexto persistente en conversación.",
        ]
    },
    {
        "name": "Escape Driver",
        "links": [("Repo", "https://github.com/Victor00128/Escape-Driver")],
        "bullets": [
            "Juego 2D con Canvas y físicas de colisión; progresión de dificultad tipo 'estrellas'.",
        ]
    },
    {
        "name": "Editor Code",
        "links": [("Repo", "https://github.com/Victor00128/EDITOR-CODE")],
        "bullets": [
            "IDE en navegador inspirado en VS Code con integración de IA y vista previa.",
        ]
    },
]

EDUCATION = [
    {
        "title": "Bachillerato Técnico en Informática",
        "org": "Institución Educativa Técnica",
        "period": "2022 – 2024",
        "desc": "Fundamentos de programación, redes, bases de datos y lógica de sistemas."
    },
    {
        "title": "React + TypeScript – De cero a experto",
        "org": "Udemy",
        "period": "2023",
        "desc": "Hooks, Context API, patrones modernos y TypeScript aplicado."
    },
    {
        "title": "Node.js, Express & REST APIs",
        "org": "Udemy / Platzi",
        "period": "2023",
        "desc": "APIs REST, autenticación con JWT y despliegue."
    },
    {
        "title": "Integración de LLMs y APIs de IA",
        "org": "Autodidacta + documentación oficial",
        "period": "2024",
        "desc": "Integración de Gemini y GPT en aplicaciones web reales."
    },
]

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="H1", fontSize=18, leading=22, spaceAfter=6, textColor=colors.HexColor("#0B2A33")))
styles.add(ParagraphStyle(name="H2", fontSize=12.5, leading=16, spaceBefore=10, spaceAfter=6, textColor=colors.HexColor("#0B2A33")))
styles.add(ParagraphStyle(name="Body", fontSize=10.2, leading=13.6, textColor=colors.HexColor("#222222")))
styles.add(ParagraphStyle(name="Small", fontSize=9.2, leading=12.0, textColor=colors.HexColor("#333333")))
styles.add(ParagraphStyle(name="Link", parent=styles["Small"], textColor=colors.HexColor("#0066CC")))


def p(text, style="Body"):
    return Paragraph(text, styles[style])


def bullet_list(items):
    return ListFlowable(
        [ListItem(p(i, "Body"), leftIndent=12) for i in items],
        bulletType="bullet",
        start="circle",
        leftIndent=18,
        bulletFontName="Helvetica",
        bulletFontSize=8,
        bulletColor=colors.HexColor("#00A8C8"),
        spaceBefore=2,
        spaceAfter=6,
    )


def hr(width=7.3 * inch, color=colors.HexColor("#DDE7EA")):
    t = Table([[""]], colWidths=[width], rowHeights=[1])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), color),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return t



def build():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=LETTER,
        leftMargin=0.75 * inch,
        rightMargin=0.75 * inch,
        topMargin=0.7 * inch,
        bottomMargin=0.65 * inch,
        title=f"CV - {NAME}",
        author=NAME,
    )

    story = []

    # Header
    story.append(p(NAME, "H1"))
    story.append(p(f"<b>{TITLE}</b>", "Small"))

    contact = (
        f"<b>Ubicación:</b> {LOCATION}  |  "
        f"<b>Email:</b> <a href='mailto:{EMAIL}'>{EMAIL}</a>  |  "
        f"<b>GitHub:</b> <a href='{GITHUB}'>{GITHUB}</a>  |  "
        f"<b>LinkedIn:</b> <a href='{LINKEDIN}'>{LINKEDIN}</a>"
    )
    story.append(Spacer(1, 6))
    story.append(p(contact, "Small"))
    story.append(Spacer(1, 10))
    story.append(hr())

    # Summary
    story.append(p("Resumen", "H2"))
    story.append(p(SUMMARY, "Body"))

    # Skills
    story.append(p("Habilidades", "H2"))
    for k, vals in SKILLS.items():
        story.append(p(f"<b>{k}:</b> " + ", ".join(vals), "Body"))

    # Experience
    story.append(p("Experiencia", "H2"))
    for e in EXPERIENCE:
        story.append(p(f"<b>{e['role']}</b> — {e['org']} <font color='#666666'>({e['period']})</font>", "Body"))
        story.append(bullet_list(e["bullets"]))
        story.append(p(f"<b>Tech:</b> {e['tech']}", "Small"))
        story.append(Spacer(1, 6))

    # Projects
    story.append(p("Proyectos seleccionados", "H2"))
    for pr in PROJECTS:
        links = " · ".join([f"<a href='{u}'>{label}</a>" for (label, u) in pr["links"]])
        story.append(p(f"<b>{pr['name']}</b> <font color='#666666'>({links})</font>", "Body"))
        story.append(bullet_list(pr["bullets"]))

    # Education
    story.append(p("Educación y cursos", "H2"))
    for ed in EDUCATION:
        story.append(p(f"<b>{ed['title']}</b> — {ed['org']} <font color='#666666'>({ed['period']})</font>", "Body"))
        story.append(p(ed["desc"], "Body"))
        story.append(Spacer(1, 4))

    # Footer note
    story.append(Spacer(1, 8))
    story.append(hr())
    story.append(Spacer(1, 8))
    story.append(p("Disponibilidad: Freelance · Full-time remoto · Colaboraciones", "Small"))

    doc.build(story)


if __name__ == "__main__":
    build()
