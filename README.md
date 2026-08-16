# B.L.I.N.D.A. Dashboard

PROJETO B.L.I.N.D.A.®

Base de Conhecimento para Desenvolvimento no Lovable

Este documento reúne todas as informações do Projeto B.L.I.N.D.A.® necessárias para iniciar o desenvolvimento do aplicativo no Lovable a partir de uma base limpa. Cole este conteúdo (ou partes dele) no chat do Lovable como contexto antes de pedir a construção das telas.

1. VISÃO GERAL DO PROJETO

Nome do projeto: Método B.L.I.N.D.A.® — Sistema de Segurança Jurídica e Governança Preventiva para Clínicas de Estética

Nome guarda-chuva: Projeto B.L.I.N.D.A.® — Da Segurança Jurídica à Excelência Preventiva em Clínicas de Estética

Criadora: Dra. Kátia Damasceno — Fisioterapeuta Esteta • Professora do Curso de Graduação em Estética • Advogada e Pós-Graduanda em Direito Digital.

Slogan oficial: "A excelência da estética começa com a segurança jurídica."

O que é: Uma metodologia proprietária de governança preventiva que ajuda clínicas de estética a organizar processos, documentos e evidências jurídicas, reduzindo vulnerabilidades e elevando a maturidade institucional do negócio.

Princípio central (frase-chave do método):

"A capacidade demonstrativa de um estabelecimento de saúde estética resulta da harmonia entre todo o conjunto de evidências geradas no cotidiano de atendimento — marketing, consulta, consentimento, execução técnica e prontuário. Isso é o Princípio da Coerência Documental."

Disclaimer obrigatório (deve aparecer no rodapé/telas de resultado):

"O Método B.L.I.N.D.A.® é uma metodologia educacional voltada à prevenção de riscos e à organização da gestão jurídica da clínica. Ele não substitui consultoria jurídica individualizada nem garante a inexistência de litígios."

2. O PRIMEIRO APP A CONSTRUIR: DIAGNÓSTICO DE MATURIDADE INSTITUCIONAL

O produto de entrada do ecossistema é um quiz/diagnóstico interativo que:

Apresenta o método brevemente;

Aplica 20 perguntas fechadas divididas em 6 pilares;

Calcula um score de 0 a 40 pontos;

Classifica a clínica em 1 de 4 níveis de maturidade;

Mostra um resultado personalizado com recomendações e CTA (chamada para ação).

Esse é o app prioritário. As seções abaixo trazem tudo que ele precisa.

3. IDENTIDADE VISUAL (DESIGN SYSTEM)

Paleta de cores oficial

Nome Hex Uso Rose Gold #BD9885 Destaques, botões, ícones Rose Gold Corporate #C19A87 Variante institucional Dourado / Muted Gold #D4AF37 Selo, títulos de destaque, bordas Bege Premium (fundo) #F3ECE4 / #FAF8F5 Fundo principal das telas Deep Espresso (texto) #3D312A / #332A24 Texto principal (substitui o preto puro)

Regra de contraste: nunca usar preto puro para texto — sempre Deep Espresso.

Tipografia

Títulos: Georgia (serifada, transmite autoridade jurídica/acadêmica)

Corpo de texto: Helvetica Neue ou Arial (limpo, legível em telas)

Sensação estética desejada

"Harvard Executive Education + Clínica Premium + Direito Empresarial." Visual sóbrio, elegante, nada de estética de infoproduto barato. Cantos levemente arredondados, muito respiro (whitespace), ícones finos em linha (line-art), nada de emojis grandes ou cores berrantes.

Elementos visuais recorrentes

Ícone 📘 = Fundamento Jurídico

Ícone 🛡️ = Boa Prática Preventiva

Ícone ⚠️ = Ponto de Atenção

Logotipo conceitual: monograma minimalista em linhas finas douradas, remetendo a marcações de simetria facial + escudo de proteção.

4. O MÉTODO: OS 6 PILARES (ACRÔNIMO B.L.I.N.D.A.®)

Letra Pilar O que avalia B Base Regulatória Cadastro empresarial, CNAEs corretos, alvará sanitário, responsabilidade técnica L Liderança Institucional Organograma, treinamento de equipe, cultura de confidencialidade (NDAs), LGPD I Integridade Documental Prontuário, TCLE (consentimento), registro fotográfico padronizado, rastreabilidade N Normatização Operacional POPs (Procedimentos Operacionais Padrão), fluxo de atendimento, check-in/check-out D Diagnóstico Estratégico Indicadores, auditorias internas, uso de dados para decisão A Auditoria Preventiva Plano de resposta a incidentes, "Linha Vermelha" de comunicação, comitê de melhoria contínua

5. O QUESTIONÁRIO — 20 PERGUNTAS (para o quiz)

Cada pergunta tem 3 opções de resposta com pontuação:

Sim = 2 pontos

Parcialmente = 1 ponto

Não = 0 pontos

Pontuação máxima total: 40 pontos.

Pilar B — Base Regulatória (máx. 8 pontos / ~3-4 perguntas)

O cadastro (contrato social/CNAEs) da clínica está compatível com os procedimentos realmente realizados?

O alvará sanitário está vigente e cobre as tecnologias/injetáveis utilizados?

O Responsável Técnico está formalizado e regular junto ao conselho profissional?

Existem contratos de parceria com profissionais que preveem responsabilidades claras?

Pilar L — Liderança Institucional (máx. 8 pontos / ~3-4 perguntas)

Existe um organograma com responsabilidades definidas entre os colaboradores?

A equipe assina termos de confidencialidade (NDA) sobre dados de pacientes?

Há treinamentos periódicos sobre LGPD e biossegurança?

A operação funciona mesmo quando o(a) fundador(a) está ausente?

Pilar I — Integridade Documental (máx. 8 pontos / ~3-4 perguntas)

Os Termos de Consentimento (TCLE) são específicos por procedimento, e não genéricos?

O prontuário é preenchido de forma cronológica e contemporânea ao atendimento?

Existe um espaço padronizado para fotos de acompanhamento (mesmo ângulo, luz e distância)?

As informações do marketing, da consulta e do prontuário contam a mesma história (sem contradição)?

Pilar N — Normatização Operacional (máx. 8 pontos / ~3-4 perguntas)

Existem Procedimentos Operacionais Padrão (POPs) escritos e acessíveis à equipe?

A recepção segue um checklist antes de liberar o paciente para o atendimento?

Há conferência e registro de orientações na saída do paciente (check-out)?

O lote, validade e fornecedor de cada insumo aplicado são registrados no prontuário?

Pilar D — Diagnóstico Estratégico (máx. 4 pontos / ~2 perguntas)

A clínica acompanha indicadores (KPIs) de qualidade e conformidade?

Já foi feita alguma auditoria interna nos últimos 6 meses?

Pilar A — Auditoria Preventiva (máx. 4 pontos / ~2 perguntas)

Existe um canal e um prazo definido (ex: até 4h) para responder a queixas ou intercorrências?

Existe um plano ou comitê para analisar e corrigir falhas quando ocorre um problema?

Nota: os números de perguntas por pilar podem ser ajustados, desde que a soma continue batendo 8+8+8+8+4+4 = 40 pontos.

6. LÓGICA DE RESULTADO (SCORE E NÍVEIS)

Faixa de pontos Nível Cor Nome de exibição 0 – 10 1 🔴 Vermelho Estrutura Inicial 11 – 20 2 🟡 Amarelo Desenvolvimento 21 – 30 3 🔵 Azul Gestão Estruturada 31 – 40 4 🟢 Verde Excelência Preventiva

Textos de resultado por nível

🔴 Nível 1 — Estrutura Inicial (0–10 pontos)

Sua clínica está em uma fase em que o crescimento pode ter ocorrido mais rápido do que a estruturação dos processos internos. Os principais pontos de atenção normalmente envolvem ausência de fluxos documentais padronizados, dependência da memória da equipe e registros assistenciais com baixa uniformidade. Próximo passo: Baixar o Guia Oficial de Segurança Jurídica para Clínicas de Estética.

🟡 Nível 2 — Desenvolvimento (11–20 pontos)

Sua clínica já possui elementos de organização, mas existem oportunidades importantes de integração entre documentos, equipe e processos. O desafio desta fase é sair de ações isoladas e construir uma lógica sistêmica. Próximo passo: Inscrever-se no Workshop Método B.L.I.N.D.A.®.

🔵 Nível 3 — Gestão Estruturada (21–30 pontos)

Sua clínica demonstra uma cultura de organização acima da média do mercado. A próxima etapa não é apenas corrigir falhas, mas aperfeiçoar mecanismos de gestão: auditorias internas, indicadores de acompanhamento e revisão periódica de documentos. Próximo passo: Solicitar aplicação para a Mentoria & Auditoria Premium B.L.I.N.D.A.®.

🟢 Nível 4 — Excelência Preventiva (31–40 pontos)

Sua clínica demonstra um estágio elevado de maturidade organizacional, compreendendo que excelência assistencial e excelência de gestão caminham juntas. Próximo passo: Solicitar avaliação para outorga do Selo B.L.I.N.D.A.® — Excelência Preventiva.

7. ESTRUTURA DE TELAS DO APP (SITEMAP)

Tela Inicial / Boas-vindas

Título: "Diagnóstico de Maturidade Institucional B.L.I.N.D.A.®"

Subtítulo: "Descubra em poucos minutos o nível de organização jurídica e operacional da sua clínica."

Botão: "Iniciar Diagnóstico"

Nota de rodapé com o disclaimer institucional.

Tela do Questionário

Barra de progresso (1 de 20, 2 de 20...)

Agrupar visualmente por pilar (mostrar em qual dos 6 pilares o usuário está)

Cada pergunta com 3 botões de resposta (Sim / Parcialmente / Não)

Botão "Voltar" e avanço automático ao responder

Tela de Cálculo/Loading (opcional, 2-3s)

Animação simples: "Calculando o Score B.L.I.N.D.A.® da sua clínica..."

Tela de Resultado

Indicador visual de pontuação (0 a 40) — barra, gauge/velocímetro ou círculo de progresso

Nome do nível + cor correspondente

Texto de análise do nível (ver seção 6)

Mini-resumo por pilar (mostrar pontuação obtida em cada um dos 6 pilares — pode ser gráfico radar/aranha)

Botão de CTA (varia conforme o nível — ver seção 6)

Botão secundário: "Refazer diagnóstico" ou "Baixar resultado em PDF"

(Opcional) Tela de Captura de Lead

Antes de mostrar o resultado completo, pedir Nome, E-mail, WhatsApp e Nome da Clínica

Justificativa: "Enviaremos seu relatório completo por e-mail"

8. MODELO DE DADOS (para Supabase)

Sugestão de estrutura de banco de dados a ser criada:

Tabela diagnosticos

id (uuid, PK)

nome (text)

email (text)

whatsapp (text)

nome_clinica (text)

respostas (jsonb — array com as 20 respostas)

score_total (int)

score_base_regulatoria (int)

score_lideranca (int)

score_integridade_documental (int)

score_normatizacao (int)

score_diagnostico (int)

score_auditoria (int)

nivel (text — "Estrutura Inicial" / "Desenvolvimento" / "Gestão Estruturada" / "Excelência Preventiva")

created_at (timestamp)

9. TOM DE VOZ E REGRAS DE COMUNICAÇÃO (IMPORTANTE PARA TODOS OS TEXTOS)

Ao gerar qualquer texto/copy dentro do app, seguir estas regras:

Usar:

"reduzir vulnerabilidades", "organizar processos", "fortalecer a governança", "melhorar a rastreabilidade"

Nunca usar:

"blindagem garantida", "zero risco jurídico", "proteção contra processos", "nunca será responsabilizado", "elimina risco"

O tom é de autoridade educacional e institucional — não é "curso de guru", é um instrumento técnico de gestão. Evitar gatilhos de urgência/medo agressivos.

10. PROMPT SUGERIDO PARA COLAR NO LOVABLE (PRIMEIRA MENSAGEM)

Crie um aplicativo web chamado "Diagnóstico B.L.I.N.D.A.®" para clínicas de estética.

Contexto do projeto: [colar as seções 1, 3, 4, 6 e 9 deste documento]

Construa:
1. Tela inicial de boas-vindas com o título, subtítulo e botão "Iniciar Diagnóstico"
2. Um questionário de 20 perguntas (ver seção 5) com barra de progresso e 3 opções de resposta (Sim=2pts, Parcialmente=1pt, Não=0pts)
3. Uma tela de resultado que soma a pontuação (0-40), classifica em 4 níveis de maturidade (ver seção 6) e mostra o texto correspondente
4. Design usando a paleta: fundo bege (#FAF8F5), texto espresso (#3D312A), destaques em rose gold (#BD9885) e dourado (#D4AF37), tipografia serifada (Georgia) nos títulos e sans-serif no corpo
5. Conecte ao Supabase para salvar cada diagnóstico respondido na tabela "diagnosticos" (ver modelo de dados na seção 8)

Estilo visual: elegante, institucional, sóbrio — algo entre "Harvard Executive Education" e uma clínica de estética premium. Sem emojis grandes, sem cores berrantes.


11. ROADMAP DO ECOSSISTEMA (PARA FUTURAS FASES NO LOVABLE)

Depois do Diagnóstico, os próximos produtos do ecossistema (não construir agora, só para referência de arquitetura):

Diagnóstico B.L.I.N.D.A.® ✅ (produto atual)

Landing Page do Guia Oficial (e-book/PDF gratuito)

Área de inscrição do Workshop (captura de leads para aulas)

Formulário de aplicação para Mentoria Premium (alto ticket)

Painel de acompanhamento para clínicas certificadas (Selo B.L.I.N.D.A.®)

12. ASSINATURA E RODAPÉ INSTITUCIONAL

Sempre que houver espaço de rodapé/sobre, incluir:

Dra. Kátia Damasceno Fisioterapeuta Esteta • Professora do Curso de Graduação em Estética • Advogada e Pós-Graduanda em Direito Digital. Criadora do Método B.L.I.N.D.A.® — Sistema de Segurança Jurídica e Governança Preventiva para Clínicas de Estética.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://blind-insight.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2c5260a5-c5a5-4554-aa8f-f9b1035d2d48).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
