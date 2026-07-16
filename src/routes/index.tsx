import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/blinda/BrandMark";
import { InstitutionalFooter } from "@/components/blinda/InstitutionalFooter";
import { PILARES } from "@/lib/blinda/questions";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const NUMEROS = ["01", "02", "03", "04", "05", "06"] as const;

function HomePage() {
  const pilares = Object.values(PILARES);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between border-b border-foreground/5 px-6 py-8 md:px-10 md:py-10">
        <BrandMark />
        <nav className="hidden gap-10 text-[11px] font-medium uppercase tracking-[0.25em] text-foreground/70 md:flex">
          <a href="#metodo" className="transition-colors hover:text-accent">
            O Método
          </a>
          <a href="#pilares" className="transition-colors hover:text-accent">
            Os 6 Pilares
          </a>
          <a href="#autora" className="transition-colors hover:text-accent">
            Dra. Kátia Damasceno
          </a>
        </nav>
        <Link
          to="/diagnostico"
          className="hidden border border-foreground px-5 py-2 text-[10px] uppercase tracking-[0.25em] transition-all hover:bg-foreground hover:text-background sm:inline-block"
        >
          Iniciar Diagnóstico
        </Link>
      </header>

      <main>
        {/* HERO — SPLIT-SCREEN */}
        <section
          id="metodo"
          className="mx-auto flex w-full max-w-7xl flex-col border-b border-foreground/5 lg:min-h-[80vh] lg:flex-row"
        >
          <div className="flex flex-col justify-center border-b border-foreground/5 px-6 py-16 lg:w-1/2 lg:border-b-0 lg:border-r lg:px-24 lg:py-24">
            <span className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Sistema de Segurança Jurídica e Governança Preventiva
            </span>
            <h1 className="font-serif text-5xl leading-[1.05] text-foreground lg:text-7xl">
              A maturidade institucional da sua clínica em um novo patamar.
            </h1>
            <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-foreground/80">
              Uma análise técnica e serena sob o Princípio da Coerência Documental — para identificar
              vulnerabilidades estruturais e fortalecer a governança preventiva antes que qualquer
              risco se materialize.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link
                to="/diagnostico"
                className="inline-flex items-center justify-center bg-foreground px-10 py-5 text-xs uppercase tracking-[0.25em] text-background transition-all hover:bg-foreground/90"
              >
                Iniciar Diagnóstico
              </Link>
              <a
                href="#pilares"
                className="inline-flex items-center justify-center border border-foreground/20 px-10 py-5 text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:border-foreground"
              >
                Conhecer Metodologia
              </a>
            </div>
            <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              20 perguntas · ~5 minutos · resultado imediato
            </p>
          </div>

          {/* PAINEL INSTITUCIONAL */}
          <div className="relative flex items-center justify-center bg-card p-8 lg:w-1/2 lg:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden opacity-[0.05]"
            >
              <span className="font-serif text-[28rem] leading-none lg:text-[40rem]">B</span>
            </div>
            <div className="relative z-10 flex w-full max-w-sm flex-col items-center justify-center border border-accent/40 p-10 text-center lg:aspect-[4/5] lg:p-12">
              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-accent">
                <span className="font-serif text-4xl text-accent">K</span>
              </div>
              <h3 className="mb-4 font-serif text-2xl italic text-accent">
                Princípio da Coerência Documental
              </h3>
              <p className="text-sm italic leading-loose text-foreground/70">
                “A capacidade demonstrativa de um estabelecimento de saúde estética resulta da
                harmonia entre todo o conjunto de evidências geradas no cotidiano de atendimento —
                marketing, consulta, consentimento, execução técnica e prontuário.”
              </p>
              <div className="mt-10 h-16 w-px bg-accent/40" />
            </div>
          </div>
        </section>

        {/* 6 PILARES */}
        <section id="pilares" className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
          <div className="mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                O Acrônimo B.L.I.N.D.A.®
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
                Os seis pilares da governança preventiva
              </h2>
              <p className="mt-6 text-foreground/70">
                Mapeamento integral dos domínios em que uma clínica precisa demonstrar maturidade
                organizacional — do cadastro regulatório à auditoria interna.
              </p>
            </div>
            <div className="h-px w-32 bg-accent md:mt-0" />
          </div>

          <div className="grid grid-cols-1 gap-px border border-foreground/10 bg-foreground/10 md:grid-cols-2 lg:grid-cols-3">
            {pilares.map((p, i) => (
              <article key={p.key} className="group bg-background p-10 transition-colors hover:bg-card lg:p-12">
                <div className="mb-6 flex items-baseline gap-4">
                  <span className="font-serif text-xl text-accent">{NUMEROS[i]}</span>
                  <span className="font-serif text-2xl text-accent">{p.letra}</span>
                </div>
                <h4 className="mb-4 text-base font-medium uppercase tracking-tight text-foreground">
                  {p.nome}
                </h4>
                <p className="text-sm leading-relaxed text-foreground/70 transition-colors group-hover:text-foreground">
                  {p.descricaoCurta}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* AUTORA */}
        <section id="autora" className="border-t border-foreground/5 bg-card/60 px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_2fr] md:items-start">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                A autora do método
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
                Dra. Kátia Damasceno
              </h3>
            </div>
            <div className="text-base leading-relaxed text-foreground/80">
              <p>
                Fisioterapeuta esteta, professora do Curso de Graduação em Estética, advogada e
                pós-graduanda em Direito Digital. Criadora do Método B.L.I.N.D.A.® — Sistema de
                Segurança Jurídica e Governança Preventiva para Clínicas de Estética.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-16 bg-accent" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  Ensino, prática clínica e direito em um só método
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <InstitutionalFooter />
    </div>
  );
}
