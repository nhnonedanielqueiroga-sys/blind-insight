import { PillarRadar } from "./PillarRadar";
import { ScoreGauge } from "./ScoreGauge";
import type { ResultadoDiagnostico } from "@/lib/blinda/scoring";
import { DISCLAIMER } from "@/lib/blinda/questions";
import { gerarPdfDiagnostico } from "@/lib/blinda/pdf";

export function ResultScreen({
  resultado,
  nome,
  nomeClinica,
  onRefazer,
}: {
  resultado: ResultadoDiagnostico;
  nome: string;
  nomeClinica: string;
  onRefazer: () => void;
}) {
  const { nivel, scoreTotal, pilaresDetalhados } = resultado;

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
        <div className="grid gap-10 md:grid-cols-[auto,1fr] md:items-center">
          <div className="flex justify-center md:justify-start">
            <ScoreGauge score={scoreTotal} cor={nivel.cor} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent">
              Nível {nivel.numero} — Maturidade Institucional
            </p>
            <h1 className="mt-3 font-serif text-3xl leading-tight md:text-[38px]">{nivel.nome}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Diagnóstico de <span className="text-foreground">{nomeClinica}</span>
            </p>
            <div
              className="mt-5 inline-block rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white"
              style={{ backgroundColor: nivel.cor }}
            >
              Faixa {nivel.faixa[0]}–{nivel.faixa[1]} pts
            </div>
            <p className="mt-6 leading-relaxed text-foreground">{nivel.descricao}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="font-serif text-xl">Maturidade por pilar</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Percentual atingido em cada um dos 6 pilares do Método B.L.I.N.D.A.®
          </p>
          <div className="mt-4">
            <PillarRadar pilares={pilaresDetalhados} corPrimaria={nivel.cor} />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="font-serif text-xl">Detalhamento</h3>
          <ul className="mt-4 divide-y divide-border">
            {pilaresDetalhados.map((p) => (
              <li key={p.key} className="flex items-center justify-between py-3">
                <div>
                  <div className="font-medium text-foreground">{p.nome}</div>
                  <div className="text-xs text-muted-foreground">
                    {p.pontos} de {p.maximo} pontos
                  </div>
                </div>
                <div className="w-40">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full"
                      style={{ width: `${p.percentual}%`, backgroundColor: nivel.cor }}
                    />
                  </div>
                  <div className="mt-1 text-right text-[11px] text-muted-foreground">{p.percentual}%</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="rounded-2xl border p-8 shadow-sm md:p-10"
        style={{ borderColor: nivel.cor, backgroundColor: `${nivel.cor}0D` }}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-foreground/70">Próximo passo recomendado</p>
        <h3 className="mt-3 font-serif text-2xl">{nivel.ctaLabel}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80">
          Uma trilha construída para o estágio atual da sua clínica, com foco em reduzir vulnerabilidades e
          fortalecer a governança preventiva.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={nivel.ctaHref}
            className="inline-flex items-center rounded-lg bg-primary px-5 py-3 font-serif text-sm tracking-wide text-primary-foreground hover:brightness-105"
          >
            {nivel.ctaLabel}
          </a>
          <button
            type="button"
            onClick={() => gerarPdfDiagnostico({ resultado, nome, nomeClinica })}
            className="inline-flex items-center rounded-lg border border-foreground/20 bg-background px-5 py-3 font-serif text-sm text-foreground hover:border-accent"
          >
            Baixar resultado em PDF
          </button>
          <button
            type="button"
            onClick={onRefazer}
            className="inline-flex items-center rounded-lg px-5 py-3 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Refazer diagnóstico
          </button>
        </div>
      </div>

      <p className="rounded-xl border border-dashed border-border p-5 text-xs leading-relaxed text-muted-foreground">
        <span className="font-semibold text-foreground">Aviso institucional. </span>
        {DISCLAIMER}
      </p>
    </div>
  );
}