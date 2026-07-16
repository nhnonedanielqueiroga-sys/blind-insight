import { useState, type FormEvent } from "react";
import { z } from "zod";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(120),
  email: z.string().trim().email("E-mail inválido").max(255),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(40),
  nome_clinica: z.string().trim().min(2, "Informe o nome da clínica").max(160),
});

export type LeadData = z.infer<typeof schema>;

export function LeadCaptureForm({
  onSubmit,
  loading,
}: {
  onSubmit: (data: LeadData) => void;
  loading: boolean;
}) {
  const [form, setForm] = useState<LeadData>({ nome: "", email: "", whatsapp: "", nome_clinica: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadData, string>>>({});

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Partial<Record<keyof LeadData, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof LeadData;
        errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    onSubmit(parsed.data);
  }

  const field = (name: keyof LeadData, label: string, type = "text", placeholder = "") => (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={form[name]}
        onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
      />
      {errors[name] && <p className="mt-1 text-xs text-destructive">{errors[name]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">Etapa Final</p>
      <h2 className="mt-4 font-serif text-2xl leading-snug md:text-[28px]">
        Para acessar seu diagnóstico personalizado
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Enviaremos seu relatório completo e as recomendações do Método B.L.I.N.D.A.® por e-mail.
        Seus dados são tratados em conformidade com a LGPD.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {field("nome", "Nome completo", "text", "Como devemos chamá-lo(a)?")}
        {field("nome_clinica", "Nome da clínica", "text", "Razão social ou nome fantasia")}
        {field("email", "E-mail profissional", "email", "voce@suaclinica.com.br")}
        {field("whatsapp", "WhatsApp", "tel", "(11) 99999-9999")}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-4 font-serif text-base tracking-wide text-primary-foreground transition-all hover:brightness-105 disabled:opacity-60 md:w-auto"
      >
        {loading ? "Processando…" : "Ver meu diagnóstico"}
      </button>
    </form>
  );
}