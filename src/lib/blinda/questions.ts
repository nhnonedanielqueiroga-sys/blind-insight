export type PilarKey = "B" | "L" | "I" | "N" | "D" | "A";

export type Resposta = "sim" | "parcialmente" | "nao";

export const RESPOSTA_PONTOS: Record<Resposta, number> = {
  sim: 2,
  parcialmente: 1,
  nao: 0,
};

export type Pilar = {
  key: PilarKey;
  letra: string;
  nome: string;
  descricaoCurta: string;
  scoreField:
    | "score_base_regulatoria"
    | "score_lideranca"
    | "score_integridade_documental"
    | "score_normatizacao"
    | "score_diagnostico"
    | "score_auditoria";
  maximo: number;
};

export const PILARES: Record<PilarKey, Pilar> = {
  B: {
    key: "B",
    letra: "B",
    nome: "Base Regulatória",
    descricaoCurta: "Cadastro, alvará, responsabilidade técnica",
    scoreField: "score_base_regulatoria",
    maximo: 8,
  },
  L: {
    key: "L",
    letra: "L",
    nome: "Liderança Institucional",
    descricaoCurta: "Organograma, cultura, LGPD",
    scoreField: "score_lideranca",
    maximo: 8,
  },
  I: {
    key: "I",
    letra: "I",
    nome: "Integridade Documental",
    descricaoCurta: "Prontuário, TCLE, rastreabilidade",
    scoreField: "score_integridade_documental",
    maximo: 8,
  },
  N: {
    key: "N",
    letra: "N",
    nome: "Normatização Operacional",
    descricaoCurta: "POPs, check-in, check-out",
    scoreField: "score_normatizacao",
    maximo: 8,
  },
  D: {
    key: "D",
    letra: "D",
    nome: "Diagnóstico Estratégico",
    descricaoCurta: "Indicadores e auditorias internas",
    scoreField: "score_diagnostico",
    maximo: 4,
  },
  A: {
    key: "A",
    letra: "A",
    nome: "Auditoria Preventiva",
    descricaoCurta: "Resposta a incidentes, melhoria contínua",
    scoreField: "score_auditoria",
    maximo: 4,
  },
};

export type Pergunta = {
  id: number;
  pilar: PilarKey;
  texto: string;
};

export const PERGUNTAS: Pergunta[] = [
  // B — Base Regulatória (4)
  { id: 1, pilar: "B", texto: "O cadastro (contrato social/CNAEs) da clínica está compatível com os procedimentos realmente realizados?" },
  { id: 2, pilar: "B", texto: "O alvará sanitário está vigente e cobre as tecnologias e injetáveis utilizados?" },
  { id: 3, pilar: "B", texto: "O Responsável Técnico está formalizado e regular junto ao conselho profissional?" },
  { id: 4, pilar: "B", texto: "Existem contratos de parceria com profissionais que preveem responsabilidades claras?" },
  // L — Liderança Institucional (4)
  { id: 5, pilar: "L", texto: "Existe um organograma com responsabilidades definidas entre os colaboradores?" },
  { id: 6, pilar: "L", texto: "A equipe assina termos de confidencialidade (NDA) sobre dados de pacientes?" },
  { id: 7, pilar: "L", texto: "Há treinamentos periódicos sobre LGPD e biossegurança?" },
  { id: 8, pilar: "L", texto: "A operação funciona mesmo quando o(a) fundador(a) está ausente?" },
  // I — Integridade Documental (4)
  { id: 9, pilar: "I", texto: "Os Termos de Consentimento (TCLE) são específicos por procedimento, e não genéricos?" },
  { id: 10, pilar: "I", texto: "O prontuário é preenchido de forma cronológica e contemporânea ao atendimento?" },
  { id: 11, pilar: "I", texto: "Existe um espaço padronizado para fotos de acompanhamento (mesmo ângulo, luz e distância)?" },
  { id: 12, pilar: "I", texto: "As informações do marketing, da consulta e do prontuário contam a mesma história, sem contradição?" },
  // N — Normatização Operacional (4)
  { id: 13, pilar: "N", texto: "Existem Procedimentos Operacionais Padrão (POPs) escritos e acessíveis à equipe?" },
  { id: 14, pilar: "N", texto: "A recepção segue um checklist antes de liberar o paciente para o atendimento?" },
  { id: 15, pilar: "N", texto: "Há conferência e registro de orientações na saída do paciente (check-out)?" },
  { id: 16, pilar: "N", texto: "O lote, validade e fornecedor de cada insumo aplicado são registrados no prontuário?" },
  // D — Diagnóstico Estratégico (2)
  { id: 17, pilar: "D", texto: "A clínica acompanha indicadores (KPIs) de qualidade e conformidade?" },
  { id: 18, pilar: "D", texto: "Já foi feita alguma auditoria interna nos últimos 6 meses?" },
  // A — Auditoria Preventiva (2)
  { id: 19, pilar: "A", texto: "Existe um canal e um prazo definido (ex.: até 4h) para responder a queixas ou intercorrências?" },
  { id: 20, pilar: "A", texto: "Existe um plano ou comitê para analisar e corrigir falhas quando ocorre um problema?" },
];

export const TOTAL_PERGUNTAS = PERGUNTAS.length;
export const PONTUACAO_MAXIMA = 40;

export type Nivel = {
  numero: 1 | 2 | 3 | 4;
  nome: string;
  faixa: [number, number];
  cor: string; // hex for chart/PDF
  corToken: string; // tailwind token
  descricao: string;
  ctaLabel: string;
  ctaHref: string;
};

export const NIVEIS: Nivel[] = [
  {
    numero: 1,
    nome: "Estrutura Inicial",
    faixa: [0, 10],
    cor: "#B4443A",
    corToken: "bg-[#B4443A] text-white",
    descricao:
      "Sua clínica está em uma fase em que o crescimento pode ter ocorrido mais rápido do que a estruturação dos processos internos. Os principais pontos de atenção normalmente envolvem ausência de fluxos documentais padronizados, dependência da memória da equipe e registros assistenciais com baixa uniformidade.",
    ctaLabel: "Baixar o Guia Oficial de Segurança Jurídica",
    ctaHref: "#guia",
  },
  {
    numero: 2,
    nome: "Desenvolvimento",
    faixa: [11, 20],
    cor: "#C89B3C",
    corToken: "bg-[#C89B3C] text-white",
    descricao:
      "Sua clínica já possui elementos de organização, mas existem oportunidades importantes de integração entre documentos, equipe e processos. O desafio desta fase é sair de ações isoladas e construir uma lógica sistêmica.",
    ctaLabel: "Inscrever-se no Workshop Método B.L.I.N.D.A.®",
    ctaHref: "#workshop",
  },
  {
    numero: 3,
    nome: "Gestão Estruturada",
    faixa: [21, 30],
    cor: "#4A6B8A",
    corToken: "bg-[#4A6B8A] text-white",
    descricao:
      "Sua clínica demonstra uma cultura de organização acima da média do mercado. A próxima etapa não é apenas corrigir falhas, mas aperfeiçoar mecanismos de gestão: auditorias internas, indicadores de acompanhamento e revisão periódica de documentos.",
    ctaLabel: "Solicitar aplicação para a Mentoria & Auditoria Premium",
    ctaHref: "#mentoria",
  },
  {
    numero: 4,
    nome: "Excelência Preventiva",
    faixa: [31, 40],
    cor: "#4F7A55",
    corToken: "bg-[#4F7A55] text-white",
    descricao:
      "Sua clínica demonstra um estágio elevado de maturidade organizacional, compreendendo que excelência assistencial e excelência de gestão caminham juntas.",
    ctaLabel: "Solicitar avaliação para o Selo B.L.I.N.D.A.® — Excelência Preventiva",
    ctaHref: "#selo",
  },
];

export const DISCLAIMER =
  "O Método B.L.I.N.D.A.® é uma metodologia educacional voltada à prevenção de riscos e à organização da gestão jurídica da clínica. Ele não substitui consultoria jurídica individualizada nem garante a inexistência de litígios.";

export const ASSINATURA =
  "Dra. Kátia Damasceno — Fisioterapeuta Esteta • Professora do Curso de Graduação em Estética • Advogada e Pós-Graduanda em Direito Digital. Criadora do Método B.L.I.N.D.A.® — Sistema de Segurança Jurídica e Governança Preventiva para Clínicas de Estética.";