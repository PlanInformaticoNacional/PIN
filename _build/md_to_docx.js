/**
 * Markdown → DOCX converter for Plan Informático Nacional v4.0
 */
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, LevelFormat, TableOfContents,
  TabStopType,
} = require("docx");

const A4_W = 11906;
const A4_H = 16838;
const MARGIN = 1134; // 0.79"
const CONTENT_W = A4_W - MARGIN * 2; // 9638
const NAVY = "1B3A4B";
const GOLD = "C4A35A";
const HEADER_BG = "1B3A4B";
const HEADER_FG = "FFFFFF";
const ALT_BG = "F4F1EA";
const BORDER = { style: BorderStyle.SINGLE, size: 4, color: "C4A35A" };
const BORDERS = { top: BORDER, bottom: BORDER, left: BORDER, right: BORDER };

function parseInline(text) {
  const runs = [];
  const re = /(\*\*[^*]+\*\*)|(\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      runs.push(new TextRun({ text: text.slice(last, m.index), font: "Calibri", size: 22 }));
    }
    if (m[1]) {
      runs.push(new TextRun({ text: m[1].slice(2, -2), bold: true, font: "Calibri", size: 22 }));
    } else if (m[2]) {
      const label = m[2].match(/\[([^\]]+)\]/)[1];
      runs.push(new TextRun({ text: label, font: "Calibri", size: 22, color: NAVY, underline: {} }));
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    runs.push(new TextRun({ text: text.slice(last), font: "Calibri", size: 22 }));
  }
  if (runs.length === 0) {
    runs.push(new TextRun({ text: text || "", font: "Calibri", size: 22 }));
  }
  return runs;
}

function stripMd(s) {
  return String(s || "")
    .replace(/\*\*/g, "")
    .replace(/\\/g, "")
    .trim();
}

function headingLevel(n) {
  if (n === 1) return HeadingLevel.HEADING_1;
  if (n === 2) return HeadingLevel.HEADING_2;
  if (n === 3) return HeadingLevel.HEADING_3;
  return HeadingLevel.HEADING_4;
}

function buildTable(rows) {
  if (!rows.length) return null;
  const cols = Math.max(...rows.map((r) => r.length));
  const colW = Math.floor(CONTENT_W / cols);
  const widths = Array(cols).fill(colW);
  widths[widths.length - 1] = CONTENT_W - colW * (cols - 1);

  const tableRows = rows.map((cells, ri) => {
    const isHeader = ri === 0;
    return new TableRow({
      tableHeader: isHeader,
      children: widths.map((w, ci) => {
        const raw = cells[ci] || "";
        const txt = stripMd(raw);
        return new TableCell({
          borders: BORDERS,
          width: { size: w, type: WidthType.DXA },
          shading: {
            fill: isHeader ? HEADER_BG : ri % 2 === 0 ? ALT_BG : "FFFFFF",
            type: ShadingType.CLEAR,
          },
          margins: { top: 60, bottom: 60, left: 80, right: 80 },
          verticalAlign: VerticalAlign.CENTER,
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: txt,
                  bold: isHeader || raw.includes("**"),
                  font: "Calibri",
                  size: isHeader ? 16 : 16,
                  color: isHeader ? HEADER_FG : "222222",
                }),
              ],
            }),
          ],
        });
      }),
    });
  });

  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: widths,
    rows: tableRows,
  });
}

function parseMarkdown(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") {
      i += 1;
      continue;
    }

    if (/^═{8,}/.test(trimmed) || trimmed === "---") {
      blocks.push({ type: "rule" });
      i += 1;
      continue;
    }

    const hm = trimmed.match(/^(#{1,4})\s+(.*)$/);
    if (hm) {
      blocks.push({ type: "h", level: hm[1].length, text: stripMd(hm[2].replace(/\\/g, "")) });
      i += 1;
      continue;
    }

    if (trimmed.startsWith("|")) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim());
        i += 1;
      }
      const rows = tableLines
        .filter((l) => !/^\|[\s|:\-]+\|$/.test(l) && !/^\|[\s\-:|]+\|$/.test(l))
        .map((l) => l.replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim()));
      if (rows.length) blocks.push({ type: "table", rows });
      continue;
    }

    if (/^\*\s+/.test(trimmed) || /^-\s+/.test(trimmed)) {
      const items = [];
      while (i < lines.length && /^[\*\-]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[\*\-]\s+/, ""));
        i += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    let para = trimmed;
    i += 1;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].trim().startsWith("#") &&
      !lines[i].trim().startsWith("|") &&
      !/^[\*\-]\s+/.test(lines[i].trim()) &&
      lines[i].trim() !== "---" &&
      !/^═{8,}/.test(lines[i].trim())
    ) {
      para += " " + lines[i].trim();
      i += 1;
    }
    blocks.push({ type: "p", text: para.replace(/\\/g, "") });
  }
  return blocks;
}

function blocksToDocx(blocks, title) {
  const children = [];

  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [new TextRun({ text: "REPÚBLICA ARGENTINA", font: "Calibri", size: 20, color: NAVY, bold: true, characterSpacing: 200 })],
    })
  );
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      children: [new TextRun({ text: "PLAN INFORMÁTICO NACIONAL", font: "Calibri", size: 36, bold: true, color: NAVY })],
    })
  );
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [new TextRun({ text: title, font: "Calibri", size: 26, color: GOLD, bold: true })],
    })
  );
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
      children: [new TextRun({ text: "Versión 4.0  ·  Septiembre 2026  ·  CC0 1.0", font: "Calibri", size: 18, italics: true, color: "555555" })],
    })
  );

  children.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [new TextRun({ text: "Índice", font: "Calibri", bold: true })],
    })
  );
  children.push(new TableOfContents("Índice", { hyperlink: true, headingStyleRange: "1-3" }));
  children.push(new Paragraph({ spacing: { after: 300 }, children: [] }));

  for (const b of blocks) {
    if (b.type === "h") {
      children.push(
        new Paragraph({
          heading: headingLevel(b.level),
          spacing: { before: b.level === 1 ? 320 : 220, after: 120 },
          children: [new TextRun({ text: b.text, bold: true, font: "Calibri", color: b.level === 1 ? NAVY : "222222" })],
        })
      );
    } else if (b.type === "p") {
      children.push(
        new Paragraph({
          spacing: { after: 140, line: 276 },
          alignment: AlignmentType.JUSTIFIED,
          children: parseInline(b.text),
        })
      );
    } else if (b.type === "ul") {
      for (const item of b.items) {
        children.push(
          new Paragraph({
            numbering: { reference: "bullets", level: 0 },
            spacing: { after: 60 },
            children: parseInline(item),
          })
        );
      }
    } else if (b.type === "table") {
      const t = buildTable(b.rows);
      if (t) {
        children.push(t);
        children.push(new Paragraph({ spacing: { after: 200 }, children: [] }));
      }
    } else if (b.type === "rule") {
      children.push(new Paragraph({ spacing: { before: 120, after: 120 }, children: [] }));
    }
  }

  return children;
}

async function convert(mdPath, outPath, title) {
  const md = fs.readFileSync(mdPath, "utf8");
  const blocks = parseMarkdown(md);
  const children = blocksToDocx(blocks, title);

  const doc = new Document({
    styles: {
      default: { document: { run: { font: "Calibri", size: 22 } } },
      paragraphStyles: [
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 32, bold: true, font: "Calibri", color: NAVY },
          paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0 } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 26, bold: true, font: "Calibri", color: "1B3A4B" },
          paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 } },
        { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 24, bold: true, font: "Calibri", color: "333333" },
          paragraph: { spacing: { before: 180, after: 80 }, outlineLevel: 2 } },
        { id: "Heading4", name: "Heading 4", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 22, bold: true, font: "Calibri" },
          paragraph: { spacing: { before: 140, after: 80 }, outlineLevel: 3 } },
      ],
    },
    numbering: {
      config: [
        {
          reference: "bullets",
          levels: [
            {
              level: 0,
              format: LevelFormat.BULLET,
              text: "•",
              alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 720, hanging: 360 } } },
            },
          ],
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: A4_W, height: A4_H },
            margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W }],
                border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: GOLD, space: 8 } },
                children: [
                  new TextRun({ text: "Plan Informático Nacional  v4.0", font: "Calibri", size: 16, color: NAVY, bold: true }),
                  new TextRun({ text: "\tSeptiembre 2026", font: "Calibri", size: 16, color: "666666" }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                border: { top: { style: BorderStyle.SINGLE, size: 6, color: GOLD, space: 8 } },
                children: [
                  new TextRun({ text: "CC0 1.0 Dominio Público  ·  República Argentina  ·  ", font: "Calibri", size: 14, color: "666666" }),
                  new TextRun({ children: [PageNumber.CURRENT], font: "Calibri", size: 14, color: NAVY }),
                ],
              }),
            ],
          }),
        },
        children,
      },
    ],
  });

  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(outPath, buf);
  console.log("Wrote", outPath, "(" + Math.round(buf.length / 1024) + " KB)");
}

const jobs = [
  {
    md: "00_PLAN_INFORMATICO_NACIONAL.md",
    docx: "00 - PLAN INFORMÁTICO NACIONAL - DESCRIPCIÓN GENERAL.docx",
    title: "Descripción General",
  },
  {
    md: "01_P1_IGA_Detallado.md",
    docx: "01 - PROGRAMA 1 - INTELIGENCIA GENERATIVA ARTIFICIAL (IGA).docx",
    title: "Programa 1 — Inteligencia Generativa Artificial",
  },
  {
    md: "02_P2_Blockchain_Detallado.md",
    docx: "02 - PROGRAMA 2 - BLOCKCHAIN NACIONAL_ CRIPTOMONEDA Y FINANCIAMIENTO SOBERANO.docx",
    title: "Programa 2 — Blockchain Nacional",
  },
  {
    md: "03_P3_Dispositivos_Detallado.md",
    docx: "03 - PROGRAMA 3 - DISPOSITIVOS PORTÁTILES DE INTELIGENCIA ARTIFICIAL.docx",
    title: "Programa 3 — Dispositivos Portátiles de IA",
  },
  {
    md: "04_P4_Universidad_Hacker_Nacional_Detallado.md",
    docx: "04 - PROGRAMA 4 - UNIVERSIDAD HACKER NACIONAL.docx",
    title: "Programa 4 — Universidad Hacker Nacional",
  },
];

const root = path.resolve(__dirname, "..");
const mdDir = path.join(root, "PLAN_INFORMATICO_DETALLE_MARKDOWN");
const docDir = path.join(root, "DOCs");

(async () => {
  for (const j of jobs) {
    await convert(path.join(mdDir, j.md), path.join(docDir, j.docx), j.title);
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
