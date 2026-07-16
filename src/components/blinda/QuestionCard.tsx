import type { Pergunta, Resposta } from "@/lib/blinda/questions";

const OPCOES: { value: Resposta; label: string; hint: string }[] = [
  { value: "sim", label: "Sim", hint: "Implantado e em uso regular" },
  { value: "parcialmente", label: "Parcialmente", hint: "Existe, mas de forma incompleta" },
  { value: "nao", label: "Não", hint: "Ainda não implantado" },
];

export function QuestionCard({
  pergunta,
  respostaAtual,
  onResponder,
  onVoltar,
  podeVoltar,
}: {
  pergunta: Pergunta;
  respostaAtual?: Resposta;
  onResponder: (r: Resposta) => void;
  onVoltar: () => void;
  podeVoltar: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">
        Questão {pergunta.id.toString().padStart(2, "0")}
      </p>
      <h2 className="mt-4 font-serif text-2xl leading-snug text-foreground md:text-[28px]">
        {pergunta.texto}
      </h2>

      <div className="mt-8 grid gap-3 md:grid-cols-3">
        {OPCOES.map((opt) => {
          const active = respostaAtual === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onResponder(opt.value)}
              className={`group flex flex-col items-start rounded-xl border px-5 py-4 text-left transition-all ${
                active
                  ? "border-accent bg-accent/10 shadow-[0_0_0_1px_var(--accent)]"
                  : "border-border bg-background hover:border-accent/60 hover:bg-accent/5"
              }`}
            >
              <span className="font-serif text-lg text-foreground">{opt.label}</span>
              <span className="mt-1 text-xs text-muted-foreground">{opt.hint}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={onVoltar}
          disabled={!podeVoltar}
          className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline disabled:opacity-30"
        >
          ← Voltar
        </button>
        <p className="text-xs text-muted-foreground">O avanço é automático ao responder.</p>
      </div>
    </div>
  );
}