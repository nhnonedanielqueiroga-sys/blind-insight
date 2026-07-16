import { jsPDF } from "jspdf";
import type { ResultadoDiagnostico } from "./scoring";
import { ASSINATURA, DISCLAIMER, PONTUACAO_MAXIMA } from "./questions";

export function gerarPdfDiagnostico({
  resultado,
  nome,
  nomeClinica,
}: {
  resultado: ResultadoDiagnostico;
  nome: string;
  nomeClinica: string;
}) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const w = doc.internal.pageSize.getWidth();
  const margin = 48;
  let y = 60;

  doc.setFont("times", "italic");
  doc.setFontSize(10);
  doc.setTextColor(120, 100, 80);
  doc.text("Metodo B.L.I.N.D.A. - Diagnostico de Maturidade Institucional", margin, y);
  y += 24;

  doc.setFont("times", "bold");
  doc.setFontSize(22);
  doc.setTextColor(61, 49, 42);
  doc.text(`Nivel ${resultado.nivel.numero} - ${resultado.nivel.nome}`, margin, y);
  y += 20;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(90, 78, 68);
  doc.text(`Clinica: ${nomeClinica}`, margin, y);
  y += 14;
  doc.text(`Responsavel: ${nome}`, margin, y);
  y += 14;
  doc.text(`Data: ${new Date().toLocaleDateString("pt-BR")}`, margin, y);
  y += 26;

  const rgb = hexToRgb(resultado.nivel.cor);
  doc.setFillColor(rgb[0], rgb[1], rgb[2]);
  doc.roundedRect(margin, y, w - margin * 2, 60, 8, 8, "F");
  doc.setFont("times", "bold");
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  doc.text(`${resultado.scoreTotal}/${PONTUACAO_MAXIMA} pontos`, margin + 20, y + 40);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(
    `Faixa ${resultado.nivel.faixa[0]}-${resultado.nivel.faixa[1]}`,
    w - margin - 20,
    y + 36,
    { align: "right" },
  );
  y += 84;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(61, 49, 42);
  const desc = doc.splitTextToSize(resultado.nivel.descricao, w - margin * 2);
  doc.text(desc, margin, y);
  y += desc.length * 14 + 16;

  doc.setFont("times", "bold");
  doc.setFontSize(14);
  doc.text("Maturidade por pilar", margin, y);
  y += 18;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  for (const p of resultado.pilaresDetalhados) {
    doc.setTextColor(61, 49, 42);
    doc.text(p.nome, margin, y);
    doc.text(`${p.pontos}/${p.maximo} (${p.percentual}%)`, w - margin, y, { align: "right" });
    y += 6;
    doc.setFillColor(230, 220, 205);
    doc.roundedRect(margin, y, w - margin * 2, 6, 3, 3, "F");
    doc.setFillColor(rgb[0], rgb[1], rgb[2]);
    doc.roundedRect(margin, y, (w - margin * 2) * (p.percentual / 100), 6, 3, 3, "F");
    y += 20;
  }

  y += 8;

  doc.setFont("times", "bold");
  doc.setFontSize(13);
  doc.setTextColor(61, 49, 42);
  doc.text("Proximo passo recomendado", margin, y);
  y += 16;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const cta = doc.splitTextToSize(resultado.nivel.ctaLabel, w - margin * 2);
  doc.text(cta, margin, y);
  y += cta.length * 14 + 24;

  if (y > 720) {
    doc.addPage();
    y = 60;
  }

  doc.setDrawColor(200, 185, 165);
  doc.line(margin, y, w - margin, y);
  y += 18;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(120, 105, 90);
  const disc = doc.splitTextToSize(DISCLAIMER, w - margin * 2);
  doc.text(disc, margin, y);
  y += disc.length * 12 + 14;
  const ass = doc.splitTextToSize(ASSINATURA, w - margin * 2);
  doc.text(ass, margin, y);

  doc.save(`diagnostico-blinda-${slug(nomeClinica)}.pdf`);
}

function slug(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}