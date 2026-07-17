import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { z } from "zod";

import { BrandMark } from "@/components/blinda/BrandMark";
import { InstitutionalFooter } from "@/components/blinda/InstitutionalFooter";
import { inscreverListaEsperaWorkshop } from "@/lib/blinda/workshop.functions";

export const Route = createFileRoute("/workshop")({
  head: () => ({
    meta: [
      { title: "Workshop B.L.I.N.D.A.® — Lista de espera" },
      {
        name: "description",
        content:
          "Entre na lista de espera do Workshop Método B.L.I.N.D.A.® e seja avisada em primeira mão sobre datas, formato e vagas.",
      },
    ],
  }),
  component: WorkshopPage,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(160),
  email: z.string().trim().email("E-mail inválido").max(255),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(40),
});
type FormData = z.infer<typeof schema>;

function WorkshopPage() {
  const inscrever = useServerFn(inscreverListaEsperaWorkshop);
  const [form, setForm] = useState<FormData>({ nome: "", email: "", whatsapp: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Partial<Record<keyof FormData, string>> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as keyof FormData] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await inscrever({ data: { ...parsed.data, origem: "site-workshop" } });
      setOk(true);
      setForm({ nome: "", email: "", whatsapp: "" });
    } catch (err) {
      console.error(err);
      toast.error("Não foi possível registrar sua inscrição. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  }

  const field = (name: keyof FormData, label: string, type = "text", placeholder = "") => (
    <div>
      <label htmlFor={name} className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={form[name]}
        onChange={(ev) => setForm((f) => ({ ...f, [name]: ev.target.value }))}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
      />
      {errors[name] && <p className="mt-1 text-xs text-destructive">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 md:px-10 md:py-10">
        <Link to="/" className="no-underline">
          <BrandMark />
        </Link>
        <Link
          to="/"
          className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Voltar ao início
        </Link>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-col px-6 py-16 md:py-24">
        <span className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
          Workshop Método B.L.I.N.D.A.®
        </span>
        <h1 className="font-serif text-4xl leading-[1.05] md:text-6xl">
          Você será avisada em primeira mão.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
          O Workshop Método B.L.I.N.D.A.® está em fase de estruturação. É um encontro imersivo
          desenhado para clínicas de estética que desejam elevar sua maturidade institucional e
          implementar, na prática, a governança preventiva. Deixe seus dados abaixo para receber
          novidades sobre datas, formato e abertura de vagas.
        </p>

        {ok ? (
          <div className="mt-12 rounded-2xl border border-accent/50 bg-card p-10 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              Inscrição confirmada
            </p>
            <h2 className="mt-3 font-serif text-2xl">Obrigada — recebemos seus dados.</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">
              Assim que o Workshop tiver datas confirmadas, você será uma das primeiras a saber.
              Enquanto isso, você pode conhecer o Diagnóstico B.L.I.N.D.A.® e mapear a maturidade
              institucional da sua clínica em cerca de 5 minutos.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/diagnostico"
                className="inline-flex items-center rounded-lg bg-foreground px-5 py-3 text-xs uppercase tracking-[0.25em] text-background hover:brightness-110"
              >
                Fazer o Diagnóstico
              </Link>
              <Link
                to="/"
                className="inline-flex items-center rounded-lg border border-foreground/20 px-5 py-3 text-xs uppercase tracking-[0.25em] text-foreground hover:border-foreground"
              >
                Voltar ao início
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-12 rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12"
          >
            <div className="grid gap-5">
              {field("nome", "Nome completo", "text", "Como devemos chamá-la?")}
              {field("email", "E-mail profissional", "email", "voce@suaclinica.com.br")}
              {field("whatsapp", "WhatsApp", "tel", "(11) 99999-9999")}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[color:var(--gold)] px-6 py-4 font-serif text-base tracking-wide text-[color:var(--espresso)] shadow-sm transition-all hover:brightness-105 disabled:opacity-60 md:w-auto"
            >
              {loading ? "Enviando…" : "Entrar na Lista de Espera"}
            </button>
            <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
              Ao se inscrever, você concorda em receber comunicações relacionadas ao Workshop.
              Seus dados são tratados em conformidade com a LGPD.
            </p>
          </form>
        )}
      </main>

      <InstitutionalFooter />
    </div>
  );
}