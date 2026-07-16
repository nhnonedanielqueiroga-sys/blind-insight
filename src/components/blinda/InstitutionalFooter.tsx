import { ASSINATURA, DISCLAIMER } from "@/lib/blinda/questions";

export function InstitutionalFooter() {
  return (
    <footer className="mt-24 bg-[oklch(0.290_0.020_45)] px-6 py-16 text-[color:oklch(0.980_0.006_70/0.65)]">
      <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2">
        <div className="max-w-lg text-xs leading-relaxed">
          <p className="mb-4">
            <span className="font-semibold uppercase tracking-[0.2em] text-[color:oklch(0.980_0.006_70)]">
              Aviso institucional.{" "}
            </span>
            {DISCLAIMER}
          </p>
          <p className="leading-relaxed">{ASSINATURA}</p>
        </div>
        <div className="md:text-right">
          <p className="font-serif text-2xl italic text-[color:oklch(0.980_0.006_70)]">
            Dra. Kátia Damasceno
          </p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.25em]">
            Método B.L.I.N.D.A.® — Governança Preventiva para Clínicas de Estética
          </p>
          <p className="mt-8 text-[10px] uppercase tracking-[0.25em] text-[color:oklch(0.780_0.120_90)]">
            A excelência da estética começa com a segurança jurídica.
          </p>
        </div>
      </div>
    </footer>
  );
}