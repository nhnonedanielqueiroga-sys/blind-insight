
CREATE TABLE public.lista_espera_workshop (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  origem TEXT,
  observacoes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.lista_espera_workshop TO anon, authenticated;
GRANT SELECT ON public.lista_espera_workshop TO authenticated;
GRANT ALL ON public.lista_espera_workshop TO service_role;

ALTER TABLE public.lista_espera_workshop ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can join waitlist"
  ON public.lista_espera_workshop
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(btrim(nome)) BETWEEN 1 AND 160
    AND char_length(btrim(email)) BETWEEN 3 AND 255
    AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND char_length(btrim(whatsapp)) BETWEEN 6 AND 40
  );

CREATE POLICY "Admins can view waitlist"
  ON public.lista_espera_workshop
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
