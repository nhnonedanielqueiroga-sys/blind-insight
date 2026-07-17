import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Users,
  FileCheck,
  BookOpen,
  Stethoscope,
  ClipboardCheck,
  ArrowRight,
  GraduationCap,
  Scale,
  Sparkles,
} from "lucide-react";

import { BrandMark } from "@/components/blinda/BrandMark";
import { InstitutionalFooter } from "@/components/blinda/InstitutionalFooter";
import { PILARES, type PilarKey } from "@/lib/blinda/questions";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método B.L.I.N.D.A.® — Diagnóstico de Maturidade Institucional" },
      {
        name: "description",
        content:
          "Avalie em 5 minutos a maturidade institucional da sua clínica de estética sob os 6 pilares do Método B.L.I.N.D.A.®: 20 perguntas, resultado imediato.",
      },
    ],
  }),
  component: HomePage,
});

const PILAR_ICONS: Record<PilarKey, typeof ShieldCheck> = {
  B: ShieldCheck,
  L: Users,
  I: FileCheck,
  N: BookOpen,
  D: Stethoscope,
  A: ClipboardCheck,
};

function HomePage() {
  useReveal();
  const pilares = Object.values(PILARES);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER MINIMAL — apenas a marca */}
      <header className="mx-auto flex w-full max-w-7xl items-center px-6 py-8 md:px-10 md:py-10">
        <BrandMark />
      </header>

      <main>
        {/* 1. HERO */}
        <section className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 pt-16 pb-32 text-center md:pt-24 md:pb-40">
          <span
            data-reveal
            className="reveal mb-8 inline-flex items-center rounded-full border border-accent/40 bg-card/60 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-primary"
          >
            Método B.L.I.N.D.A.®
          </span>

          <h1
            data-reveal
            className="reveal font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ transitionDelay: "80ms" }}
          >
            A maturidade institucional da sua clínica em um novo patamar.
          </h1>

          <p
            data-reveal
            className="reveal mt-8 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg"
            style={{ transitionDelay: "160ms" }}
          >
            Diagnóstico técnico e sereno sob o Princípio da Coerência Documental — para identificar
            vulnerabilidades estruturais e fortalecer a governança preventiva da sua clínica de
            estética.
          </p>

          <div data-reveal className="reveal mt-14" style={{ transitionDelay: "240ms" }}>
            <Link
              to="/diagnostico"
              className="group inline-flex items-center gap-3 rounded-2xl bg-[color:var(--gold)] px-10 py-6 font-serif text-xl text-[color:var(--espresso)] shadow-[0_18px_40px_-18px_color-mix(in_oklab,var(--gold)_55%,transparent)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-18px_color-mix(in_oklab,var(--gold)_65%,transparent)] md:text-2xl"
            >
              Iniciar Minha Avaliação Gratuita
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
            </Link>
          </div>

          <p
            data-reveal
            className="reveal mt-6 text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
            style={{ transitionDelay: "320ms" }}
          >
            20 perguntas · 5 minutos · resultado imediato
          </p>
        </section>

        {/* 2. BLOCO DE AUTORIDADE */}
        <section className="mx-auto w-full max-w-5xl px-6 pb-32 md:pb-40">
          <article
            data-reveal
            className="reveal relative overflow-hidden rounded-3xl border border-accent/40 bg-card/70 p-10 shadow-sm md:p-14"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 hidden h-48 w-48 rounded-full border border-accent/20 md:block"
            />
            <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center md:gap-14">
              <div className="mx-auto flex h-32 w-32 shrink-0 items-center justify-center rounded-full border border-accent bg-background text-[color:var(--gold)] md:mx-0">
                <span className="font-serif text-6xl italic">K</span>
              </div>
              <div className="min-w-0 text-center md:text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  A autora do método
                </p>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl">Dra. Kátia Damasceno</h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/75 md:text-base">
                  Criadora do Método B.L.I.N.D.A.® — Sistema de Segurança Jurídica e Governança
                  Preventiva para Clínicas de Estética.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
                  <CredentialBadge icon={Sparkles} label="Fisioterapeuta Esteta" />
                  <CredentialBadge icon={GraduationCap} label="Professora de Graduação em Estética" />
                  <CredentialBadge icon={Scale} label="Advogada · Pós-graduanda em Direito Digital" />
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* 3. PRINCÍPIO DA COERÊNCIA DOCUMENTAL */}
        <section className="bg-[color:var(--espresso)] px-6 py-28 md:py-36">
          <div data-reveal className="reveal mx-auto max-w-4xl text-center text-[color:var(--beige)]">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--gold)]">
              Princípio da Coerência Documental
            </p>
            <div className="relative mt-10">
              <span
                aria-hidden
                className="pointer-events-none absolute -left-2 -top-16 font-serif text-[10rem] leading-none text-[color:var(--gold)]/50 md:-left-6 md:-top-20 md:text-[14rem]"
              >
                “
              </span>
              <blockquote className="relative font-serif text-2xl italic leading-[1.35] md:text-4xl">
                A capacidade demonstrativa de um estabelecimento de saúde estética resulta da
                harmonia entre todo o conjunto de evidências geradas no cotidiano de atendimento —
                marketing, consulta, consentimento, execução técnica e prontuário.
              </blockquote>
            </div>
            <div className="mx-auto mt-12 h-px w-24 bg-[color:var(--gold)]/60" />
            <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-[color:var(--beige)]/60">
              Fundamento do Método B.L.I.N.D.A.®
            </p>
          </div>
        </section>

        {/* 4. OS 6 PILARES */}
        <section id="pilares" className="mx-auto w-full max-w-6xl px-6 py-28 md:py-36">
          <div data-reveal className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              O Acrônimo B.L.I.N.D.A.®
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Os seis pilares da governança preventiva
            </h2>
            <p className="mt-5 text-foreground/70">
              Mapeamento integral dos domínios em que uma clínica precisa demonstrar maturidade
              organizacional — do cadastro regulatório à auditoria interna.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
            {pilares.map((p, i) => {
              const Icon = PILAR_ICONS[p.key];
              return (
                <article
                  key={p.key}
                  data-reveal
                  className="reveal group flex flex-col rounded-2xl border border-border bg-card/80 p-6 shadow-[0_1px_2px_rgba(61,49,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_20px_40px_-24px_color-mix(in_oklab,var(--gold)_45%,transparent)] md:p-8"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/40 bg-background text-[color:var(--gold)]">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="mb-3 flex items-baseline gap-3">
                    <span className="font-serif text-4xl leading-none text-[color:var(--gold)] md:text-5xl">
                      {p.letra}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Pilar {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-foreground md:text-xl">{p.nome}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {p.descricaoCurta}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* 5. CTA SECUNDÁRIO — WORKSHOP */}
        <section className="border-t border-foreground/5 bg-card/40 px-6 py-24 md:py-28">
          <div data-reveal className="reveal mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Próximo passo
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
              Quer ir além do diagnóstico?
            </h2>
            <p className="mt-4 text-foreground/70">
              Entre na lista de espera do Workshop Método B.L.I.N.D.A.® e receba em primeira mão as
              datas, o formato e a abertura de vagas.
            </p>
            <Link
              to="/workshop"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-[color:var(--gold)] px-6 py-3 text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:bg-[color:var(--gold)]/10"
            >
              Entrar na Lista de Espera do Workshop
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        </section>
      </main>

      <InstitutionalFooter />
    </div>
  );
}

function CredentialBadge({
  icon: Icon,
  label,
}: {
  icon: typeof ShieldCheck;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-background/70 px-3 py-1.5 text-[11px] font-medium tracking-wide text-foreground/80">
      <Icon className="h-3.5 w-3.5 text-[color:var(--gold)]" strokeWidth={1.75} />
      {label}
    </span>
  );
}
