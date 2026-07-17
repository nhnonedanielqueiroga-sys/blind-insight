GRANT INSERT ON public.diagnosticos TO anon, authenticated;
GRANT SELECT ON public.diagnosticos TO authenticated;
GRANT ALL ON public.diagnosticos TO service_role;

GRANT INSERT ON public.lista_espera_workshop TO anon, authenticated;
GRANT SELECT ON public.lista_espera_workshop TO authenticated;
GRANT ALL ON public.lista_espera_workshop TO service_role;