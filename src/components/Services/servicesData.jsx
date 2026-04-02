import { Scale, Building2, Users, Shield, Gavel, Briefcase } from 'lucide-react';

export const servicesData = [
  {
    id: 1,
    title: 'Direito Civil',
    category: 'Patrimonio e contratos',
    description: 'Atuacao em obrigacoes, responsabilidade civil, contratos e disputas patrimoniais.',
    fullDescription: 'Conduzimos casos civeis com leitura estrategica do contexto, avaliacao de risco e comunicacao clara em cada etapa. A atuacao cobre prevencao, negociacao e contencioso para proteger direitos e reduzir desgaste operacional.',
    icon: <Scale size={32} />,
    benefits: ['Analise completa de contratos e documentos', 'Estruturacao de estrategia para negociacao ou litigio', 'Acompanhamento proximo da evolucao processual', 'Defesa tecnica com foco em resultado e previsibilidade'],
    process: [
      { title: 'Levantamento inicial', description: 'Entendemos fatos, documentos e impacto juridico do caso.' },
      { title: 'Definicao de estrategia', description: 'Organizamos tese, provas e caminhos possiveis com clareza.' },
      { title: 'Execucao', description: 'Conduzimos negociacao ou processo com acompanhamento continuo.' }
    ],
    highlight: 'Atuacao pensada para equilibrar solidez tecnica, timing e menor friccao para o cliente.'
  },
  {
    id: 2,
    title: 'Direito Empresarial',
    category: 'Operacoes e governanca',
    description: 'Suporte juridico para empresas em contratos, societario, expansao e rotina corporativa.',
    fullDescription: 'Assessoramos empresas em decisoes juridicas que impactam caixa, governanca e crescimento. A proposta combina visao preventiva e capacidade de reacao rapida quando o tema exige negociacao sensivel ou contencioso.',
    icon: <Building2 size={32} />,
    benefits: ['Revisao e elaboracao de contratos comerciais', 'Apoio em temas societarios e reorganizacao', 'Mitigacao de riscos operacionais e regulatorios', 'Atendimento consultivo com resposta objetiva'],
    process: [
      { title: 'Diagnostico operacional', description: 'Mapeamos estrutura, contratos e gargalos juridicos.' },
      { title: 'Plano juridico', description: 'Priorizamos riscos e definimos a melhor linha de acao.' },
      { title: 'Acompanhamento continuo', description: 'Executamos e ajustamos as medidas conforme a necessidade do negocio.' }
    ],
    highlight: 'Ideal para empresas que buscam clareza juridica sem perder velocidade de decisao.'
  },
  {
    id: 3,
    title: 'Direito Trabalhista',
    category: 'Relacoes laborais',
    description: 'Defesa e consultoria em demandas trabalhistas para empresas e executivos.',
    fullDescription: 'Atuamos em conflitos trabalhistas com abordagem pragmatica, leitura de exposicao financeira e construcao de estrategia consistente. O trabalho pode ser preventivo, negocial ou contencioso, conforme o momento do cliente.',
    icon: <Users size={32} />,
    benefits: ['Defesa em reclamacoes trabalhistas', 'Apoio preventivo para rotinas e desligamentos', 'Negociacao de acordos com criterio tecnico', 'Reducao de risco e alinhamento documental'],
    process: [
      { title: 'Analise de exposicao', description: 'Avaliamos documentos, historico e risco trabalhista envolvido.' },
      { title: 'Tese de defesa', description: 'Estruturamos linha tecnica e estrategia negocial.' },
      { title: 'Conducao do caso', description: 'Acompanhamos audiencias, prazos e oportunidades de composicao.' }
    ],
    highlight: 'Combina firmeza tecnica com visao de impacto reputacional e financeiro.'
  },
  {
    id: 4,
    title: 'Direito Administrativo',
    category: 'Regulacao e licitacoes',
    description: 'Atuacao em processos administrativos, contratos publicos e relacao com a administracao.',
    fullDescription: 'Orientamos empresas e executivos em temas administrativos com foco em conformidade, defesa e sustentacao documental. A experiencia inclui licitacoes, sancoes, recursos e contratos com o poder publico.',
    icon: <Shield size={32} />,
    benefits: ['Defesa em processos administrativos', 'Apoio em licitacoes e contratos publicos', 'Leitura regulatoria aplicada ao negocio', 'Construcao de recursos e impugnacoes consistentes'],
    process: [
      { title: 'Leitura normativa', description: 'Avaliamos a regra aplicavel e os pontos sensiveis do caso.' },
      { title: 'Estruturacao documental', description: 'Organizamos defesa, resposta ou recurso com base tecnica.' },
      { title: 'Representacao', description: 'Conduzimos a interlocucao e o acompanhamento ate a decisao final.' }
    ],
    highlight: 'Essencial para reduzir ruido institucional e proteger a operacao diante do setor publico.'
  },
  {
    id: 5,
    title: 'Direito Penal Empresarial',
    category: 'Defesa estrategica',
    description: 'Atuacao em investigaçoes e processos com repercussao criminal e empresarial.',
    fullDescription: 'Conduzimos defesas criminais com discricao, rigor tecnico e resposta rapida. Em materias penais empresariais, o trabalho considera prova, narrativa, risco reputacional e conexoes com a estrategia global do cliente.',
    icon: <Gavel size={32} />,
    benefits: ['Atuacao desde a fase investigatoria', 'Defesa em procedimentos e acoes penais', 'Leitura de risco reputacional e institucional', 'Coordenacao com outras frentes juridicas do caso'],
    process: [
      { title: 'Analise de urgencia', description: 'Mapeamos fatos, risco imediato e medidas prioritarias.' },
      { title: 'Construcao defensiva', description: 'Organizamos narrativa, provas e linha de defesa.' },
      { title: 'Resposta coordenada', description: 'Atuamos de forma tecnica em cada etapa do procedimento.' }
    ],
    highlight: 'Em situacoes sensiveis, tempo de resposta e clareza estrategica fazem toda a diferenca.'
  },
  {
    id: 6,
    title: 'Consultoria Juridica',
    category: 'Decisao e prevencao',
    description: 'Suporte consultivo para quem precisa decidir com seguranca juridica e menos improviso.',
    fullDescription: 'A consultoria juridica funciona como apoio direto para decisoes relevantes do dia a dia e movimentos estruturais. Organizamos cenarios, riscos e alternativas para que o cliente aja com mais seguranca e menos incerteza.',
    icon: <Briefcase size={32} />,
    benefits: ['Analise juridica aplicada ao contexto do cliente', 'Recomendacoes objetivas e acionaveis', 'Prevencao de passivos e ruídos operacionais', 'Suporte continuado conforme a necessidade da demanda'],
    process: [
      { title: 'Contexto', description: 'Entendemos negocio, objetivo e urgencia da decisao.' },
      { title: 'Parecer estrategico', description: 'Apresentamos riscos, caminhos e recomendacao principal.' },
      { title: 'Implementacao', description: 'Apoiamos a execucao juridica das medidas escolhidas.' }
    ],
    highlight: 'Para clientes que preferem agir com lastro tecnico antes que o problema cresca.'
  }
];
