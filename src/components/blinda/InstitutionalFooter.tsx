import { ASSINATURA, DISCLAIMER } from "@/lib/blinda/questions";

export function InstitutionalFooter() {
  return (
    <footer className="bg-[oklch(0.290_0.020_45)] text-[color:oklch(0.980_0.006_70/0.55)]">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        {/* Linha divisória fina acima separa visualmente do conteúdo */}
        <div className="mb-10 h-px w-full bg-[color:oklch(0.980_0.006_70/0.12)]" />

        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="max-w-lg text-[11px] leading-relaxed">
            <p className="mb-3">
              <span className="font-medium uppercase tracking-[0.2em] text-[color:oklch(0.980_0.006_70/0.75)]">
                Aviso institucional.{" "}
              </span>
              {DISCLAIMER}
            </p>
            <p className="leading-relaxed">{ASSINATURA}</p>
          </div>

          <div className="text-[11px] leading-relaxed md:text-right">
            <p className="font-serif text-lg italic text-[color:oklch(0.980_0.006_70/0.85)]">
              Dra. Kátia Damasceno
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[color:oklch(0.980_0.006_70/0.5)]">
              Método B.L.I.N.D.A.®
            </p>
            <div className="mt-4 space-y-1">
              <p>
                <a
                  href="mailto:dra.katia.damasceno.am@gmail.com"
                  className="underline-offset-4 hover:text-[color:oklch(0.980_0.006_70/0.9)] hover:underline"
                >
                  dra.katia.damasceno.am@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/5592982822119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:text-[color:oklch(0.980_0.006_70/0.9)] hover:underline"
                >
                  Falar no WhatsApp
                </a>
                <span className="ml-2 text-[color:oklch(0.980_0.006_70/0.4)]">(92) 98282-2119</span>
              </p>
            </div>
            <p className="mt-6 text-[10px] uppercase tracking-[0.25em] text-[color:oklch(0.780_0.120_90/0.75)]">
              A excelência da estética começa com a segurança jurídica.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}