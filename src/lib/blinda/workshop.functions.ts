import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const Schema = z.object({
  nome: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(255),
  whatsapp: z.string().trim().min(6).max(40),
  observacoes: z.string().trim().max(1000).optional(),
  origem: z.string().trim().max(80).optional(),
});

export type InscreverListaEsperaInput = z.infer<typeof Schema>;

export const inscreverListaEsperaWorkshop = createServerFn({ method: "POST" })
  .inputValidator((data: InscreverListaEsperaInput) => Schema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env.SUPABASE_URL!;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
    const supabase = createClient<Database>(url, key, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    });

    const { data: inserted, error } = await supabase
      .from("lista_espera_workshop")
      .insert({
        nome: data.nome,
        email: data.email,
        whatsapp: data.whatsapp,
        observacoes: data.observacoes ?? null,
        origem: data.origem ?? "site",
      })
      .select("id")
      .single();

    if (error) {
      console.error("[inscreverListaEsperaWorkshop]", error);
      throw new Error("Não foi possível registrar sua inscrição.");
    }

    try {
      const { notificarNovoLead } = await import("./notify.server");
      await notificarNovoLead({
        origem: "lista_espera_workshop",
        nome: data.nome,
        email: data.email,
        whatsapp: data.whatsapp,
        extra: { origem_form: data.origem ?? "site", observacoes: data.observacoes ?? "" },
      });
    } catch (err) {
      console.error("[inscreverListaEsperaWorkshop] notificação falhou", err);
    }

    return { id: inserted.id as string };
  });