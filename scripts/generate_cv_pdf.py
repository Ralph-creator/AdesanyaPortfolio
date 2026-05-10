import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "resume-data.json"
OUTPUT_PATH = ROOT / "public" / "Adesanya_Raphael_CV.pdf"

PAGE_WIDTH = 612
PAGE_HEIGHT = 792
LEFT = 54
TOP = 742
LINE_HEIGHT = 15
SECTION_GAP = 10


def escape_pdf_text(value: str) -> str:
    replacements = {
        "\\": "\\\\",
        "(": "\\(",
        ")": "\\)",
        "–": "-",
        "—": "-",
        "’": "'",
        "“": '"',
        "”": '"',
    }
    for source, target in replacements.items():
        value = value.replace(source, target)
    return value.encode("ascii", "ignore").decode("ascii")


def wrap_text(text: str, limit: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = word if not current else f"{current} {word}"
        if len(candidate) <= limit:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


class PdfTextBuilder:
    def __init__(self) -> None:
        self.lines: list[str] = []
        self.y = TOP

    def add_line(self, text: str, size: int = 11, leading: int | None = None) -> None:
        safe_text = escape_pdf_text(text)
        text_y = int(self.y)
        self.lines.append(f"BT /F1 {size} Tf 1 0 0 1 {LEFT} {text_y} Tm ({safe_text}) Tj ET")
        self.y -= leading if leading is not None else LINE_HEIGHT

    def spacer(self, amount: int = SECTION_GAP) -> None:
        self.y -= amount


def build_pdf(content: str) -> bytes:
    objects: list[bytes] = []

    def add_object(body: str | bytes) -> None:
        if isinstance(body, str):
            body = body.encode("latin-1")
        objects.append(body)

    add_object("<< /Type /Catalog /Pages 2 0 R >>")
    add_object("<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
    add_object(
        f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {PAGE_WIDTH} {PAGE_HEIGHT}] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>"
    )
    add_object("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    stream = content.encode("latin-1")
    add_object(b"<< /Length " + str(len(stream)).encode("ascii") + b" >>\nstream\n" + stream + b"\nendstream")

    pdf = bytearray(b"%PDF-1.4\n")
    offsets = [0]
    for index, body in enumerate(objects, start=1):
        offsets.append(len(pdf))
        pdf.extend(f"{index} 0 obj\n".encode("ascii"))
        pdf.extend(body)
        pdf.extend(b"\nendobj\n")

    xref_start = len(pdf)
    pdf.extend(f"xref\n0 {len(offsets)}\n".encode("ascii"))
    pdf.extend(b"0000000000 65535 f \n")
    for offset in offsets[1:]:
        pdf.extend(f"{offset:010d} 00000 n \n".encode("ascii"))
    pdf.extend(
        f"trailer\n<< /Size {len(offsets)} /Root 1 0 R >>\nstartxref\n{xref_start}\n%%EOF".encode(
            "ascii"
        )
    )
    return bytes(pdf)


def main() -> None:
    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    builder = PdfTextBuilder()

    builder.add_line(data["name"], size=20, leading=24)
    builder.add_line(data["title"], size=13, leading=18)
    builder.add_line(
        f'Email: {data["email"]} | Phone: {data["phone"]} | WhatsApp: {data["whatsapp"]}',
        size=10,
    )
    builder.add_line(f'GitHub: {data["github"]} | Location: {data["location"]}', size=10)
    builder.spacer()

    builder.add_line("Professional Summary", size=13, leading=18)
    for line in wrap_text(data["summary"], 88):
        builder.add_line(line, size=11)
    builder.spacer()

    builder.add_line("Experience", size=13, leading=18)
    for item in data["experience"]:
        builder.add_line(f'{item["role"]} - {item["company"]} ({item["period"]})', size=11)
        for highlight in item["highlights"]:
            for line in wrap_text(f"- {highlight}", 90):
                builder.add_line(line, size=10, leading=13)
        builder.spacer(6)

    builder.add_line("Selected Projects", size=13, leading=18)
    for project in data["projects"]:
        builder.add_line(f'{project["name"]} - {project["role"]}', size=11)
        for line in wrap_text(project["details"], 90):
            builder.add_line(line, size=10, leading=13)
        for link in project["links"]:
            for line in wrap_text(link, 90):
                builder.add_line(line, size=9, leading=12)
        builder.spacer(6)

    builder.add_line("Education", size=13, leading=18)
    for item in data["education"]:
        builder.add_line(f'{item["degree"]} - {item["school"]}', size=11)
        builder.add_line(item["period"], size=10, leading=13)
        builder.add_line(item["details"], size=10, leading=13)
    builder.spacer()

    builder.add_line("Skills", size=13, leading=18)
    skills_line = ", ".join(data["skills"])
    for line in wrap_text(skills_line, 92):
        builder.add_line(line, size=10, leading=13)

    OUTPUT_PATH.write_bytes(build_pdf("\n".join(builder.lines)))


if __name__ == "__main__":
    main()
