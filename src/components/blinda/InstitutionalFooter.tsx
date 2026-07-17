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
          <div className="mt-6 space-y-1 text-xs leading-relaxed text-[color:oklch(0.980_0.006_70/0.75)]">
            <p>
              <a
                href="mailto:dra.katia.damasceno.am@gmail.com"
                className="underline-offset-4 hover:text-[color:oklch(0.980_0.006_70)] hover:underline"
              >
                dra.katia.damasceno.am@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://wa.me/5592982822119"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-[color:oklch(0.980_0.006_70)] hover:underline"
              >
                Falar no WhatsApp
              </a>
              <span className="ml-2 text-[color:oklch(0.980_0.006_70/0.5)]">(92) 98282-2119</span>
            </p>
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-[0.25em] text-[color:oklch(0.780_0.120_90)]">
            A excelência da estética começa com a segurança jurídica.
          </p>
        </div>
      </div>
    </footer>
  );
}