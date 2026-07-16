import { ASSINATURA, DISCLAIMER } from "@/lib/blinda/questions";

export function InstitutionalFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-card/40">
      <div className="mx-auto max-w-4xl px-6 py-10 text-sm text-muted-foreground">
        <p className="mb-4 leading-relaxed">
          <span className="font-semibold text-foreground">Aviso institucional. </span>
          {DISCLAIMER}
        </p>
        <p className="leading-relaxed">{ASSINATURA}</p>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-accent">
          A excelência da estética começa com a segurança jurídica.
        </p>
      </div>
    </footer>
  );
}