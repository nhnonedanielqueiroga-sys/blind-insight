import { PILARES, type PilarKey } from "@/lib/blinda/questions";

export function QuizProgress({
  current,
  total,
  pilar,
}: {
  current: number;
  total: number;
  pilar: PilarKey;
}) {
  const percent = Math.round((current / total) * 100);
  const p = PILARES[pilar];
  return (
    <div className="w-full">
      <div className="flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>
          Pilar {p.letra} — {p.nome}
        </span>
        <span>
          Pergunta {current} de {total}
        </span>
      </div>
      <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-border">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}