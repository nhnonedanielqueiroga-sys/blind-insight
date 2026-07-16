
CREATE TABLE public.diagnosticos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  email text NOT NULL,
  whatsapp text NOT NULL,
  nome_clinica text NOT NULL,
  respostas jsonb NOT NULL,
  score_total int NOT NULL,
  score_base_regulatoria int NOT NULL,
  score_lideranca int NOT NULL,
  score_integridade_documental int NOT NULL,
  score_normatizacao int NOT NULL,
  score_diagnostico int NOT NULL,
  score_auditoria int NOT NULL,
  nivel text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.diagnosticos TO anon, authenticated;
GRANT ALL ON public.diagnosticos TO service_role;

ALTER TABLE public.diagnosticos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer um pode registrar diagnostico"
  ON public.diagnosticos FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
