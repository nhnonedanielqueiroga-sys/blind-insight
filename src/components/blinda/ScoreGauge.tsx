import { PONTUACAO_MAXIMA } from "@/lib/blinda/questions";

export function ScoreGauge({ score, cor }: { score: number; cor: string }) {
  const size = 200;
  const stroke = 14;
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const pct = Math.min(1, score / PONTUACAO_MAXIMA);
  const offset = circ * (1 - pct);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#E5D8C9" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={cor}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 900ms ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="font-serif text-5xl text-foreground">{score}</div>
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">de {PONTUACAO_MAXIMA} pontos</div>
      </div>
    </div>
  );
}