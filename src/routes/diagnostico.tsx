import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState, useTransition } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";

import { BrandMark } from "@/components/blinda/BrandMark";
import { InstitutionalFooter } from "@/components/blinda/InstitutionalFooter";
import { QuestionCard } from "@/components/blinda/QuestionCard";
import { QuizProgress } from "@/components/blinda/QuizProgress";
import { LeadCaptureForm, type LeadData } from "@/components/blinda/LeadCaptureForm";
import { LoadingCalculation } from "@/components/blinda/LoadingCalculation";
import { ResultScreen } from "@/components/blinda/ResultScreen";
import { PERGUNTAS, TOTAL_PERGUNTAS, type Resposta } from "@/lib/blinda/questions";
import { calcularResultado, type Respostas } from "@/lib/blinda/scoring";
import { salvarDiagnostico } from "@/lib/blinda/diagnostico.functions";

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    meta: [
      { title: "Diagnóstico B.L.I.N.D.A.® — Comece agora" },
      {
        name: "description",
        content:
          "Questionário de 20 perguntas que avalia a maturidade institucional da sua clínica em 6 pilares.",
      },
    ],
  }),
  component: DiagnosticoPage,
});

type Etapa = "perguntas" | "lead" | "loading" | "resultado";

function DiagnosticoPage() {
  const navigate = useNavigate();
  const [etapa, setEtapa] = useState<Etapa>("perguntas");
  const [index, setIndex] = useState(0);
  const [respostas, setRespostas] = useState<Respostas>({});
  const [lead, setLead] = useState<LeadData | null>(null);
  const [pending, startTransition] = useTransition();

  const salvar = useServerFn(salvarDiagnostico);

  const pergunta = PERGUNTAS[index];
  const resultado = useMemo(() => calcularResultado(respostas), [respostas]);

  function responder(r: Resposta) {
    const novo = { ...respostas, [pergunta.id]: r };
    setRespostas(novo);
    if (index < TOTAL_PERGUNTAS - 1) {
      setTimeout(() => setIndex((i) => i + 1), 180);
    } else {
      setTimeout(() => setEtapa("lead"), 200);
    }
  }

  function voltar() {
    if (index > 0) setIndex((i) => i - 1);
  }

  async function submeterLead(data: LeadData) {
    setLead(data);
    setEtapa("loading");
    const r = calcularResultado(respostas);
    try {
      await salvar({
        data: {
          nome: data.nome,
          email: data.email,
          whatsapp: data.whatsapp,
          nome_clinica: data.nome_clinica,
          respostas: Object.entries(respostas).map(([id, resposta]) => ({
            id: Number(id),
            resposta,
          })),
          score_total: r.scoreTotal,
          score_base_regulatoria: r.scorePorPilar.B,
          score_lideranca: r.scorePorPilar.L,
          score_integridade_documental: r.scorePorPilar.I,
          score_normatizacao: r.scorePorPilar.N,
          score_diagnostico: r.scorePorPilar.D,
          score_auditoria: r.scorePorPilar.A,
          nivel: r.nivel.nome,
        },
      });
    } catch (err) {
      console.error(err);
      toast.error(
        "Não foi possível registrar seu diagnóstico. Você ainda pode visualizar o resultado.",
      );
    }
    setTimeout(() => setEtapa("resultado"), 1200);
  }

  function refazer() {
    startTransition(() => {
      setRespostas({});
      setLead(null);
      setIndex(0);
      setEtapa("perguntas");
      navigate({ to: "/diagnostico" });
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/70">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link to="/" className="no-underline">
            <BrandMark />
          </Link>
          <span className="hidden text-xs uppercase tracking-[0.25em] text-muted-foreground md:block">
            Diagnóstico de Maturidade Institucional
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        {etapa === "perguntas" && (
          <div className="space-y-10">
            <QuizProgress current={index + 1} total={TOTAL_PERGUNTAS} pilar={pergunta.pilar} />
            <QuestionCard
              pergunta={pergunta}
              respostaAtual={respostas[pergunta.id]}
              onResponder={responder}
              onVoltar={voltar}
              podeVoltar={index > 0}
            />
          </div>
        )}

        {etapa === "lead" && <LeadCaptureForm onSubmit={submeterLead} loading={pending} />}

        {etapa === "loading" && <LoadingCalculation />}

        {etapa === "resultado" && lead && (
          <ResultScreen
            resultado={resultado}
            nome={lead.nome}
            nomeClinica={lead.nome_clinica}
            onRefazer={refazer}
          />
        )}
      </main>

      <InstitutionalFooter />
    </div>
  );
}