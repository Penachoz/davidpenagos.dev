#!/usr/bin/env python3
"""Render David's infrastructure career roadmap as a polished PDF."""

from __future__ import annotations

import html
import re
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "docs" / "roadmap_empleo_infraestructura_david.md"
OUTPUT = Path(
    "/opt/cursor/artifacts/roadmap_empleo_infraestructura_david_penagos.pdf"
)

NAVY = colors.HexColor("#0B172A")
INK = colors.HexColor("#182235")
BLUE = colors.HexColor("#1769AA")
CYAN = colors.HexColor("#0B8FA8")
PALE = colors.HexColor("#EAF4F8")
LIGHT = colors.HexColor("#F4F7FA")
MID = colors.HexColor("#637083")
LINE = colors.HexColor("#D7E0E8")
WHITE = colors.white

pdfmetrics.registerFont(
    TTFont("DejaVu", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf")
)
pdfmetrics.registerFont(
    TTFont("DejaVu-Bold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf")
)
pdfmetrics.registerFont(
    TTFont("DejaVu-Mono", "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf")
)


def inline_markup(text: str) -> str:
    """Convert the small Markdown subset used by the source to ReportLab markup."""
    tokens: list[str] = []

    def stash(value: str) -> str:
        tokens.append(value)
        return f"@@TOKEN{len(tokens) - 1}@@"

    text = re.sub(
        r"\[([^\]]+)\]\((https?://[^)]+)\)",
        lambda m: stash(
            f'<link href="{html.escape(m.group(2), quote=True)}" '
            f'color="#1769AA"><u>{html.escape(m.group(1))}</u></link>'
        ),
        text,
    )
    text = re.sub(
        r"`([^`]+)`",
        lambda m: stash(
            f'<font name="DejaVu-Mono" color="#0B6D83">{html.escape(m.group(1))}</font>'
        ),
        text,
    )
    text = html.escape(text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<b>\1</b>", text)
    for idx, token in enumerate(tokens):
        text = text.replace(f"@@TOKEN{idx}@@", token)
    return text


styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="CoverEyebrow",
        fontName="DejaVu-Bold",
        fontSize=10,
        leading=13,
        textColor=colors.HexColor("#77D4E5"),
        alignment=TA_CENTER,
        spaceAfter=6,
    )
)
styles.add(
    ParagraphStyle(
        name="CoverTitle",
        fontName="DejaVu-Bold",
        fontSize=27,
        leading=32,
        textColor=WHITE,
        alignment=TA_CENTER,
        spaceAfter=15,
    )
)
styles.add(
    ParagraphStyle(
        name="CoverSub",
        fontName="DejaVu",
        fontSize=12,
        leading=18,
        textColor=colors.HexColor("#D4E7EE"),
        alignment=TA_CENTER,
        spaceAfter=10,
    )
)
styles.add(
    ParagraphStyle(
        name="H1Custom",
        fontName="DejaVu-Bold",
        fontSize=18,
        leading=23,
        textColor=NAVY,
        spaceBefore=9,
        spaceAfter=8,
        keepWithNext=True,
    )
)
styles.add(
    ParagraphStyle(
        name="H2Custom",
        fontName="DejaVu-Bold",
        fontSize=13.5,
        leading=18,
        textColor=BLUE,
        spaceBefore=7,
        spaceAfter=5,
        keepWithNext=True,
    )
)
styles.add(
    ParagraphStyle(
        name="H3Custom",
        fontName="DejaVu-Bold",
        fontSize=11,
        leading=15,
        textColor=INK,
        spaceBefore=5,
        spaceAfter=3,
        keepWithNext=True,
    )
)
styles.add(
    ParagraphStyle(
        name="BodyCustom",
        fontName="DejaVu",
        fontSize=9.2,
        leading=14,
        textColor=INK,
        spaceAfter=5,
    )
)
styles.add(
    ParagraphStyle(
        name="BulletCustom",
        parent=styles["BodyCustom"],
        leftIndent=13,
        firstLineIndent=-7,
        bulletIndent=3,
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="QuoteCustom",
        parent=styles["BodyCustom"],
        leftIndent=12,
        rightIndent=8,
        borderColor=CYAN,
        borderWidth=1.5,
        borderPadding=(6, 9, 6, 9),
        backColor=PALE,
        spaceBefore=4,
        spaceAfter=8,
    )
)
styles.add(
    ParagraphStyle(
        name="SmallCustom",
        fontName="DejaVu",
        fontSize=7.5,
        leading=10,
        textColor=MID,
    )
)


class RoadmapDocument(BaseDocTemplate):
    def __init__(self, filename: str):
        super().__init__(
            filename,
            pagesize=A4,
            leftMargin=19 * mm,
            rightMargin=19 * mm,
            topMargin=18 * mm,
            bottomMargin=18 * mm,
            title="Roadmap de empleo en Infraestructura y DevOps — David Penagos",
            author="David Penagos",
            subject="Plan de carrera, práctica UAO y presupuesto de certificación",
        )
        frame = Frame(
            self.leftMargin,
            self.bottomMargin,
            self.width,
            self.height,
            id="normal",
        )
        self.addPageTemplates(
            [
                PageTemplate(
                    id="content",
                    frames=[frame],
                    onPage=self.draw_page,
                )
            ]
        )

    @staticmethod
    def draw_page(canvas, doc):
        page = canvas.getPageNumber()
        if page == 1:
            canvas.saveState()
            canvas.setFillColor(NAVY)
            canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
            canvas.setFillColor(CYAN)
            canvas.rect(0, A4[1] - 7 * mm, A4[0], 7 * mm, fill=1, stroke=0)
            canvas.restoreState()
            return

        canvas.saveState()
        canvas.setStrokeColor(LINE)
        canvas.setLineWidth(0.5)
        canvas.line(19 * mm, A4[1] - 11 * mm, A4[0] - 19 * mm, A4[1] - 11 * mm)
        canvas.setFont("DejaVu", 7)
        canvas.setFillColor(MID)
        canvas.drawString(19 * mm, A4[1] - 8.2 * mm, "DAVID PENAGOS  ·  INFRAESTRUCTURA / CLOUD / DEVOPS")
        canvas.drawRightString(A4[0] - 19 * mm, 9 * mm, f"{page}")
        canvas.drawString(19 * mm, 9 * mm, "Plan personal · septiembre 2026")
        canvas.restoreState()


def cover_story() -> list:
    return [
        Spacer(1, 41 * mm),
        Paragraph("PLAN PERSONAL 2026", styles["CoverEyebrow"]),
        Paragraph(
            "Roadmap para conseguir<br/>empleo en Infraestructura,<br/>Cloud o DevOps",
            styles["CoverTitle"],
        ),
        HRFlowable(
            width="44%",
            thickness=1.5,
            color=colors.HexColor("#26B5CD"),
            spaceBefore=5,
            spaceAfter=18,
            hAlign="CENTER",
        ),
        Paragraph("David Alejandro Penagos Valencia", styles["CoverSub"]),
        Paragraph(
            "UAO · Cali, Colombia · Inglés C1 · Presupuesto máximo USD 200",
            styles["CoverSub"],
        ),
        Spacer(1, 20 * mm),
        Table(
            [
                [
                    Paragraph(
                        "<b>La apuesta</b><br/>AWS primero · Linux y Terraform como base",
                        ParagraphStyle(
                            "CoverBox",
                            parent=styles["BodyCustom"],
                            textColor=WHITE,
                            alignment=TA_CENTER,
                            fontSize=10,
                            leading=15,
                        ),
                    )
                ]
            ],
            colWidths=[136 * mm],
            style=TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#132A43")),
                    ("BOX", (0, 0), (-1, -1), 0.8, colors.HexColor("#2E6A89")),
                    ("LEFTPADDING", (0, 0), (-1, -1), 12),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 12),
                    ("TOPPADDING", (0, 0), (-1, -1), 10),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
                ]
            ),
        ),
        Spacer(1, 56 * mm),
        Paragraph(
            "Decisiones, hitos, presupuesto, ruta UAO y sistema semanal",
            styles["CoverEyebrow"],
        ),
        PageBreak(),
    ]


def parse_table(lines: list[str]) -> Table:
    rows: list[list] = []
    for line in lines:
        cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
        if all(re.fullmatch(r":?-{3,}:?", cell) for cell in cells):
            continue
        rows.append(
            [
                Paragraph(
                    inline_markup(cell),
                    ParagraphStyle(
                        f"Cell{len(rows)}",
                        parent=styles["BodyCustom"],
                        fontSize=8,
                        leading=11,
                        spaceAfter=0,
                    ),
                )
                for cell in cells
            ]
        )
    widths = [32 * mm, 25 * mm, 106 * mm] if len(rows[0]) == 3 else None
    table = Table(rows, colWidths=widths, repeatRows=1, hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), NAVY),
                ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
                ("FONTNAME", (0, 0), (-1, 0), "DejaVu-Bold"),
                ("GRID", (0, 0), (-1, -1), 0.4, LINE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, LIGHT]),
                ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    return table


def markdown_story(markdown: str) -> list:
    story: list = []
    lines = markdown.splitlines()
    idx = 0
    # The cover already carries the title and metadata.
    while idx < len(lines) and not lines[idx].startswith("# 1."):
        idx += 1

    paragraph_buffer: list[str] = []

    def flush_paragraph():
        if paragraph_buffer:
            story.append(
                Paragraph(
                    inline_markup(" ".join(paragraph_buffer)),
                    styles["BodyCustom"],
                )
            )
            paragraph_buffer.clear()

    while idx < len(lines):
        line = lines[idx].rstrip()
        stripped = line.strip()

        if not stripped:
            flush_paragraph()
            idx += 1
            continue

        if stripped == "---":
            flush_paragraph()
            story.append(
                HRFlowable(
                    width="100%",
                    thickness=0.6,
                    color=LINE,
                    spaceBefore=5,
                    spaceAfter=7,
                )
            )
            idx += 1
            continue

        if stripped.startswith("|"):
            flush_paragraph()
            table_lines = []
            while idx < len(lines) and lines[idx].strip().startswith("|"):
                table_lines.append(lines[idx])
                idx += 1
            story.extend([parse_table(table_lines), Spacer(1, 7)])
            continue

        if stripped.startswith("# "):
            flush_paragraph()
            story.append(Paragraph(inline_markup(stripped[2:]), styles["H1Custom"]))
            idx += 1
            continue

        if stripped.startswith("## "):
            flush_paragraph()
            story.append(Paragraph(inline_markup(stripped[3:]), styles["H2Custom"]))
            idx += 1
            continue

        if stripped.startswith("### "):
            flush_paragraph()
            story.append(Paragraph(inline_markup(stripped[4:]), styles["H3Custom"]))
            idx += 1
            continue

        if stripped.startswith("> "):
            flush_paragraph()
            story.append(
                Paragraph(inline_markup(stripped[2:]), styles["QuoteCustom"])
            )
            idx += 1
            continue

        bullet_match = re.match(r"^-\s+(.+)$", stripped)
        numbered_match = re.match(r"^(\d+)\.\s+(.+)$", stripped)
        if bullet_match or numbered_match:
            flush_paragraph()
            if bullet_match:
                symbol, body = "•", bullet_match.group(1)
            else:
                symbol, body = f"{numbered_match.group(1)}.", numbered_match.group(2)
            story.append(
                Paragraph(
                    f"<b>{symbol}</b> {inline_markup(body)}",
                    styles["BulletCustom"],
                )
            )
            idx += 1
            continue

        paragraph_buffer.append(stripped)
        idx += 1

    flush_paragraph()
    return story


def build() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    document = RoadmapDocument(str(OUTPUT))
    story = cover_story()
    story.extend(markdown_story(SOURCE.read_text(encoding="utf-8")))
    document.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build()
