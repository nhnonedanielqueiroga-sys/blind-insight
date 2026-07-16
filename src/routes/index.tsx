import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/blinda/BrandMark";
import { InstitutionalFooter } from "@/components/blinda/InstitutionalFooter";
import { PILARES } from "@/lib/blinda/questions";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const pilares = Object.values(PILARES);
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/70">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <BrandMark />
          <span className="hidden text-xs uppercase tracking-[0.25em] text-muted-foreground md:block">
            Método B.L.I.N.D.A.®
          </span>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center md:pt-28">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Sistema de Segurança Jurídica e Governança Preventiva
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-foreground md:text-6xl">
            Diagnóstico de Maturidade Institucional B.L.I.N.D.A.
            <span className="text-accent">®</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Descubra em poucos minutos o nível de organização jurídica e operacional da sua clínica de
            estética — um mapa objetivo para reduzir vulnerabilidades e fortalecer a governança preventiva.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              to="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 font-serif text-base tracking-wide text-primary-foreground shadow-sm transition-all hover:brightness-105"
            >
              Iniciar Diagnóstico
            </Link>
            <p className="text-xs text-muted-foreground">
              20 perguntas · aproximadamente 5 minutos · resultado imediato
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-20">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">
              Princípio da Coerência Documental
            </p>
            <p className="mt-4 font-serif text-xl leading-relaxed text-foreground md:text-2xl">
              “A capacidade demonstrativa de um estabelecimento de saúde estética resulta da harmonia
              entre todo o conjunto de evidências geradas no cotidiano de atendimento — marketing,
              consulta, consentimento, execução técnica e prontuário.”
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24">
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">Os 6 pilares avaliados</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            O acrônimo B.L.I.N.D.A.® estrutura os domínios em que uma clínica precisa demonstrar
            maturidade organizacional.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pilares.map((p) => (
              <div key={p.key} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl text-accent">{p.letra}</span>
                  <span className="font-serif text-lg text-foreground">{p.nome}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.descricaoCurta}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <InstitutionalFooter />
    </div>
  );
}
