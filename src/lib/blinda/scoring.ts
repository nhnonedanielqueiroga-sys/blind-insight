import { NIVEIS, PERGUNTAS, PILARES, RESPOSTA_PONTOS, type Nivel, type PilarKey, type Resposta } from "./questions";

export type Respostas = Record<number, Resposta>;

export type PilarScore = {
  key: PilarKey;
  nome: string;
  pontos: number;
  maximo: number;
  percentual: number;
};

export type ResultadoDiagnostico = {
  scoreTotal: number;
  scorePorPilar: Record<PilarKey, number>;
  pilaresDetalhados: PilarScore[];
  nivel: Nivel;
};

export function calcularResultado(respostas: Respostas): ResultadoDiagnostico {
  const scorePorPilar: Record<PilarKey, number> = { B: 0, L: 0, I: 0, N: 0, D: 0, A: 0 };

  for (const p of PERGUNTAS) {
    const r = respostas[p.id];
    if (!r) continue;
    scorePorPilar[p.pilar] += RESPOSTA_PONTOS[r];
  }

  const scoreTotal = (Object.values(scorePorPilar) as number[]).reduce((a, b) => a + b, 0);

  const pilaresDetalhados: PilarScore[] = (Object.keys(PILARES) as PilarKey[]).map((k) => {
    const p = PILARES[k];
    const pontos = scorePorPilar[k];
    return {
      key: k,
      nome: p.nome,
      pontos,
      maximo: p.maximo,
      percentual: Math.round((pontos / p.maximo) * 100),
    };
  });

  const nivel = classificarNivel(scoreTotal);

  return { scoreTotal, scorePorPilar, pilaresDetalhados, nivel };
}

export function classificarNivel(score: number): Nivel {
  return (
    NIVEIS.find((n) => score >= n.faixa[0] && score <= n.faixa[1]) ?? NIVEIS[0]
  );
}