// Server-only helper to notify Dra. Kátia when a new lead is captured.
// This uses Resend as an example. To activate, add a Lovable secret named
// RESEND_API_KEY (Project → Backend → Secrets) and — for production email —
// verify a sender domain in Resend, then replace `onboarding@resend.dev`
// below with an address on that domain (e.g. "notificacoes@suaclinica.com.br").
// While RESEND_API_KEY is not set, this function is a no-op and never throws.

const NOTIFY_TO = "dra.katia.damasceno.am@gmail.com";

type LeadNotification = {
  origem: "diagnostico" | "lista_espera_workshop";
  nome: string;
  email: string;
  whatsapp: string;
  extra?: Record<string, string | number | undefined>;
};

export async function notificarNovoLead(payload: LeadNotification): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Sem chave configurada: apenas registra no log do servidor.
    console.info("[notificarNovoLead] RESEND_API_KEY ausente — notificação ignorada", {
      origem: payload.origem,
      email: payload.email,
    });
    return;
  }

  const titulo =
    payload.origem === "diagnostico"
      ? "Novo Diagnóstico B.L.I.N.D.A.® concluído"
      : "Nova inscrição — Lista de espera do Workshop";

  const extraLinhas = payload.extra
    ? Object.entries(payload.extra)
        .filter(([, v]) => v !== undefined && v !== "")
        .map(([k, v]) => `<li><strong>${escapeHtml(k)}:</strong> ${escapeHtml(String(v))}</li>`)
        .join("")
    : "";

  const html = `
    <div style="font-family:Georgia,serif;color:#3D312A;">
      <h2 style="margin:0 0 12px;">${escapeHtml(titulo)}</h2>
      <ul style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6;padding-left:18px;">
        <li><strong>Nome:</strong> ${escapeHtml(payload.nome)}</li>
        <li><strong>E-mail:</strong> ${escapeHtml(payload.email)}</li>
        <li><strong>WhatsApp:</strong> ${escapeHtml(payload.whatsapp)}</li>
        ${extraLinhas}
      </ul>
      <p style="font-family:Arial,sans-serif;font-size:12px;color:#8a7a70;margin-top:24px;">
        Notificação automática — Método B.L.I.N.D.A.®
      </p>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        // Substitua por um remetente do seu domínio verificado no Resend.
        from: "B.L.I.N.D.A. <onboarding@resend.dev>",
        to: [NOTIFY_TO],
        subject: titulo,
        html,
        reply_to: payload.email,
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error("[notificarNovoLead] Resend respondeu com erro", res.status, body);
    }
  } catch (err) {
    console.error("[notificarNovoLead] falha ao enviar notificação", err);
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}