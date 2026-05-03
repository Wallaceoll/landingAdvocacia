import { Scale, Building2, Users, Shield, Gavel, Briefcase } from 'lucide-react';

export const servicesData = [
  {
    id: 1,
    title: 'Direito Civil',
    category: 'Patrimônio e contratos',
    description: 'Atuação em obrigações, responsabilidade civil, contratos e disputas patrimoniais.',
    fullDescription: 'Conduzimos casos cíveis com leitura estratégica do contexto, avaliação de risco e comunicação clara em cada etapa. A atuação cobre prevenção, negociação e contencioso para proteger direitos e reduzir desgaste operacional.',
    icon: <Scale size={32} />,
    benefits: ['Análise completa de contratos e documentos', 'Estruturação de estratégia para negociação ou litígio', 'Acompanhamento próximo da evolução processual', 'Defesa técnica com foco em resultado e previsibilidade'],
    process: [
      { title: 'Levantamento inicial', description: 'Entendemos fatos, documentos e o impacto jurídico do caso.' },
      { title: 'Definição de estratégia', description: 'Organizamos tese, provas e caminhos possíveis com clareza.' },
      { title: 'Execução', description: 'Conduzimos negociação ou processo com acompanhamento contínuo.' }
    ],
    highlight: 'Atuação pensada para equilibrar solidez técnica, timing e menor fricção para o cliente.'
  },
  {
    id: 2,
    title: 'Direito Empresarial',
    category: 'Operações e governança',
    description: 'Suporte jurídico para empresas em contratos, societário, expansão e rotina corporativa.',
    fullDescription: 'Assessoramos empresas em decisões jurídicas que impactam caixa, governança e crescimento. A proposta combina visão preventiva e capacidade de reação rápida quando o tema exige negociação sensível ou contencioso.',
    icon: <Building2 size={32} />,
    benefits: ['Revisão e elaboração de contratos comerciais', 'Apoio em temas societários e reorganização', 'Mitigação de riscos operacionais e regulatórios', 'Atendimento consultivo com resposta objetiva'],
    process: [
      { title: 'Diagnóstico operacional', description: 'Mapeamos estrutura, contratos e gargalos jurídicos.' },
      { title: 'Plano jurídico', description: 'Priorizamos riscos e definimos a melhor linha de ação.' },
      { title: 'Acompanhamento contínuo', description: 'Executamos e ajustamos as medidas conforme a necessidade do negócio.' }
    ],
    highlight: 'Ideal para empresas que buscam clareza jurídica sem perder velocidade de decisão.'
  },
  {
    id: 3,
    title: 'Direito Trabalhista',
    category: 'Relações laborais',
    description: 'Defesa e consultoria em demandas trabalhistas para empresas e executivos.',
    fullDescription: 'Atuamos em conflitos trabalhistas com abordagem pragmática, leitura de exposição financeira e construção de estratégia consistente. O trabalho pode ser preventivo, negocial ou contencioso, conforme o momento do cliente.',
    icon: <Users size={32} />,
    benefits: ['Defesa em reclamações trabalhistas', 'Apoio preventivo para rotinas e desligamentos', 'Negociação de acordos com critério técnico', 'Redução de risco e alinhamento documental'],
    process: [
      { title: 'Análise de exposição', description: 'Avaliamos documentos, histórico e o risco trabalhista envolvido.' },
      { title: 'Tese de defesa', description: 'Estruturamos linha técnica e estratégia negocial.' },
      { title: 'Condução do caso', description: 'Acompanhamos audiências, prazos e oportunidades de composição.' }
    ],
    highlight: 'Combina firmeza técnica com visão de impacto reputacional e financeiro.'
  },
  {
    id: 4,
    title: 'Direito Administrativo',
    category: 'Regulação e licitações',
    description: 'Atuação em processos administrativos, contratos públicos e relação com a administração.',
    fullDescription: 'Orientamos empresas e executivos em temas administrativos com foco em conformidade, defesa e sustentação documental. A experiência inclui licitações, sanções, recursos e contratos com o poder público.',
    icon: <Shield size={32} />,
    benefits: ['Defesa em processos administrativos', 'Apoio em licitações e contratos públicos', 'Leitura regulatória aplicada ao negócio', 'Construção de recursos e impugnações consistentes'],
    process: [
      { title: 'Leitura normativa', description: 'Avaliamos a regra aplicável e os pontos sensíveis do caso.' },
      { title: 'Estruturação documental', description: 'Organizamos defesa, resposta ou recurso com base técnica.' },
      { title: 'Representação', description: 'Conduzimos a interlocução e o acompanhamento até a decisão final.' }
    ],
    highlight: 'Essencial para reduzir ruído institucional e proteger a operação diante do setor público.'
  },
  {
    id: 5,
    title: 'Direito Penal Empresarial',
    category: 'Defesa estratégica',
    description: 'Atuação em investigações e processos com repercussão criminal e empresarial.',
    fullDescription: 'Conduzimos defesas criminais com discrição, rigor técnico e resposta rápida. Em matérias penais empresariais, o trabalho considera prova, narrativa, risco reputacional e conexões com a estratégia global do cliente.',
    icon: <Gavel size={32} />,
    benefits: ['Atuação desde a fase investigatória', 'Defesa em procedimentos e ações penais', 'Leitura de risco reputacional e institucional', 'Coordenação com outras frentes jurídicas do caso'],
    process: [
      { title: 'Análise de urgência', description: 'Mapeamos fatos, risco imediato e medidas prioritárias.' },
      { title: 'Construção defensiva', description: 'Organizamos narrativa, provas e linha de defesa.' },
      { title: 'Resposta coordenada', description: 'Atuamos de forma técnica em cada etapa do procedimento.' }
    ],
    highlight: 'Em situações sensíveis, tempo de resposta e clareza estratégica fazem toda a diferença.'
  },
  {
    id: 6,
    title: 'Consultoria Jurídica',
    category: 'Decisão e prevenção',
    description: 'Suporte consultivo para quem precisa decidir com segurança jurídica e menos improviso.',
    fullDescription: 'A consultoria jurídica funciona como apoio direto para decisões relevantes do dia a dia e movimentos estruturais. Organizamos cenários, riscos e alternativas para que o cliente aja com mais segurança e menos incerteza.',
    icon: <Briefcase size={32} />,
    benefits: ['Análise jurídica aplicada ao contexto do cliente', 'Recomendações objetivas e acionáveis', 'Prevenção de passivos e ruídos operacionais', 'Suporte continuado conforme a necessidade da demanda'],
    process: [
      { title: 'Contexto', description: 'Entendemos negócio, objetivo e urgência da decisão.' },
      { title: 'Parecer estratégico', description: 'Apresentamos riscos, caminhos e recomendação principal.' },
      { title: 'Implementação', description: 'Apoiamos a execução jurídica das medidas escolhidas.' }
    ],
    highlight: 'Para clientes que preferem agir com lastro técnico antes que o problema cresça.'
  }
];