import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const RespostaEnum = z.enum(["sim", "parcialmente", "nao"]);

const SalvarSchema = z.object({
  nome: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  whatsapp: z.string().trim().min(6).max(40),
  nome_clinica: z.string().trim().min(1).max(160),
  respostas: z.array(
    z.object({
      id: z.number().int().min(1).max(20),
      resposta: RespostaEnum,
    }),
  ).length(20),
  score_total: z.number().int().min(0).max(40),
  score_base_regulatoria: z.number().int().min(0).max(8),
  score_lideranca: z.number().int().min(0).max(8),
  score_integridade_documental: z.number().int().min(0).max(8),
  score_normatizacao: z.number().int().min(0).max(8),
  score_diagnostico: z.number().int().min(0).max(4),
  score_auditoria: z.number().int().min(0).max(4),
  nivel: z.string().min(1).max(80),
});

export type SalvarDiagnosticoInput = z.infer<typeof SalvarSchema>;

export const salvarDiagnostico = createServerFn({ method: "POST" })
  .inputValidator((data: SalvarDiagnosticoInput) => SalvarSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env.SUPABASE_URL!;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY!;

    const supabase = createClient<Database>(url, key, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    });

    const { error } = await supabase
      .from("diagnosticos")
      .insert({
        nome: data.nome,
        email: data.email,
        whatsapp: data.whatsapp,
        nome_clinica: data.nome_clinica,
        respostas: data.respostas,
        score_total: data.score_total,
        score_base_regulatoria: data.score_base_regulatoria,
        score_lideranca: data.score_lideranca,
        score_integridade_documental: data.score_integridade_documental,
        score_normatizacao: data.score_normatizacao,
        score_diagnostico: data.score_diagnostico,
        score_auditoria: data.score_auditoria,
        nivel: data.nivel,
      });

    if (error) {
      console.error("[salvarDiagnostico]", error);
      throw new Error("Não foi possível salvar o diagnóstico.");
    }

    // Notifica Dra. Kátia (fire-and-forget — não bloqueia a resposta).
    try {
      const { notificarNovoLead } = await import("./notify.server");
      await notificarNovoLead({
        origem: "diagnostico",
        nome: data.nome,
        email: data.email,
        whatsapp: data.whatsapp,
        extra: {
          clinica: data.nome_clinica,
          score_total: data.score_total,
          nivel: data.nivel,
        },
      });
    } catch (notifyErr) {
      console.error("[salvarDiagnostico] notificação falhou", notifyErr);
    }

    return { ok: true as const };
  });