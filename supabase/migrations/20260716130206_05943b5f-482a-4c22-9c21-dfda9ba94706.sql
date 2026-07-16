
-- 1. Create app_role enum and user_roles table
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- 2. Security-definer role check
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- 3. Replace permissive INSERT policy with validated one
DROP POLICY IF EXISTS "Qualquer um pode registrar diagnostico" ON public.diagnosticos;

CREATE POLICY "Public can submit valid diagnostics"
ON public.diagnosticos FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(trim(nome)) BETWEEN 1 AND 120
  AND char_length(trim(email)) BETWEEN 3 AND 255
  AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND char_length(trim(whatsapp)) BETWEEN 6 AND 40
  AND char_length(trim(nome_clinica)) BETWEEN 1 AND 160
  AND score_total BETWEEN 0 AND 40
);

-- 4. Explicit admin-only SELECT policy
CREATE POLICY "Admins can view all diagnostics"
ON public.diagnosticos FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
