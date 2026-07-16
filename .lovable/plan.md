# Plano — Diagnóstico de Maturidade Institucional B.L.I.N.D.A.®

## Objetivo
App web (TanStack Start) com quiz de 20 perguntas, cálculo de score (0–40), classificação em 4 níveis, captura obrigatória de lead antes do resultado, gráfico radar por pilar, exportação em PDF e persistência no Lovable Cloud.

## Design System (`src/styles.css` + `__root.tsx`)
- Paleta oklch com tokens: `--background` #FAF8F5, `--foreground` #3D312A, `--primary` rose gold #BD9885, `--accent` dourado #D4AF37, `--card` #F3ECE4.
- Fontes carregadas via `<link>` no `__root.tsx`: Georgia (títulos, serif nativa) + Inter/Helvetica Neue fallback no corpo. Tokens `--font-serif` e `--font-sans`.
- Cantos suaves (radius 0.75rem), sombras discretas, muito whitespace. Estilo Harvard Executive + clínica premium.
- Meta tags institucionais (title, description, OG, twitter) atualizadas no `__root.tsx`.

## Estrutura de Rotas
```
src/routes/
  __root.tsx          (layout, meta, footer com disclaimer + assinatura Dra. Kátia)
  index.tsx           (Boas-vindas → CTA "Iniciar Diagnóstico")
  diagnostico.tsx     (fluxo do quiz — state machine local)
```
Fluxo em `/diagnostico`: `intro → perguntas (1..20) → captura de lead → loading → resultado`. Estado gerido por `useState`/`useReducer` na página; sem sub-rotas para preservar contexto.

## Componentes (`src/components/blinda/`)
- `WelcomeHero.tsx` — título, subtítulo, botão iniciar, selo dourado.
- `QuizProgress.tsx` — barra de progresso + label "Pilar X — Nome" + "Pergunta N de 20".
- `QuestionCard.tsx` — enunciado + 3 botões (Sim/Parcialmente/Não), auto-avanço.
- `LeadCaptureForm.tsx` — nome, e-mail, WhatsApp, clínica (validação Zod).
- `LoadingCalculation.tsx` — animação 2s "Calculando o Score B.L.I.N.D.A.®".
- `ResultScreen.tsx` — score total (gauge circular), nome/cor do nível, texto do nível, radar dos 6 pilares (recharts `RadarChart`), CTA condicional, botões "Baixar PDF" e "Refazer".
- `PillarRadar.tsx` — recharts com 6 eixos normalizados (0–100%).
- `InstitutionalFooter.tsx` — disclaimer + assinatura.

## Dados estáticos (`src/lib/blinda/questions.ts`)
Array com as 20 perguntas tipadas: `{ id, pilar: 'B'|'L'|'I'|'N'|'D'|'A', texto }`. Distribuição 4/4/4/4/2/2 conforme brief. Também: `PILARES` (nome, cor, máximo), `NIVEIS` (faixa, cor, título, descrição, CTA).

## Backend (Lovable Cloud)
Ativar via `supabase--enable`. Migração cria tabela `diagnosticos` conforme seção 8 do brief + GRANTs + RLS:
- `GRANT INSERT ON public.diagnosticos TO anon, authenticated;` (quiz é público)
- `GRANT ALL TO service_role;`
- RLS: policy `INSERT` permitida a `anon` e `authenticated`; sem SELECT público (dados de lead são privados).

Server function `src/lib/blinda/diagnostico.functions.ts`:
- `salvarDiagnostico` (`createServerFn` POST, sem middleware auth) — valida payload com Zod, insere via client publishable (server) e retorna `{ id }`.

Chamada via `useServerFn` no submit do lead-capture (antes do loading).

## Cálculo e Classificação (`src/lib/blinda/scoring.ts`)
- Soma total + soma por pilar.
- Função `classificarNivel(score)` → `{ nivel: 1|2|3|4, nome, cor, descricao, ctaLabel, ctaHref }`.

## Exportação PDF
Bibliotecas client-side: `jspdf` + `html2canvas` (via `bun add`). Botão "Baixar PDF" na tela de resultado captura o card de resultado renderizado e gera `diagnostico-blinda.pdf`. Inclui score, nível, radar, disclaimer e assinatura.

## Copy
Todos os textos seguem tom institucional da seção 9 do brief: "reduzir vulnerabilidades", "fortalecer governança", "organizar processos". Nunca "blindagem garantida", "zero risco". Disclaimer no rodapé de todas as telas + reforçado na tela de resultado.

## Detalhes técnicos
- Instalar: `recharts` (radar), `jspdf`, `html2canvas`, `zod` (já provável).
- Persistência do progresso opcional (localStorage) se o usuário atualizar — MVP: reset ao recarregar, exceto se resultado já salvo.
- Sem SSR issues: fluxo é client-heavy dentro de rota pública; server fn é chamada apenas no submit.
- SEO: `head()` em `index.tsx` com title/description específicos do diagnóstico.

## Fora do escopo (roadmap futuro)
Landing do Guia, Workshop, Mentoria, Painel do Selo — apenas CTAs externos por enquanto (href placeholder `#`).
