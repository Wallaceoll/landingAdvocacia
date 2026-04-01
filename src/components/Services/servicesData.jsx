import { Scale, Building2, Users, Shield, Gavel, Briefcase } from 'lucide-react';

export const servicesData = [
  {
    id: 1,
    title: 'Direito Civil',
    category: 'Consultoria Jurídica',
    description: 'Representação em questões de direito civil, contratos, propriedade e responsabilidade civil.',
    fullDescription: 'Oferecemos consultoria especializada em direito civil, abrangendo desde contratos comerciais até questões de responsabilidade civil. Nossa equipe possui ampla experiência em negociações, mediações e litígios civis, garantindo a proteção dos seus direitos e interesses.',
    icon: <Scale size={32} />,
    benefits: [
      'Análise completa de contratos e documentos legais',
      'Negociação e mediação de conflitos',
      'Representação em processos civis',
      'Proteção de direitos de propriedade e herança'
    ],
    process: [
      {
        title: 'Avaliação Inicial',
        description: 'Análise detalhada do seu caso e situação jurídica'
      },
      {
        title: 'Estratégia Legal',
        description: 'Desenvolvimento de estratégia personalizada para seu caso'
      },
      {
        title: 'Execução',
        description: 'Implementação da estratégia com acompanhamento contínuo'
      },
      {
        title: 'Resolução',
        description: 'Conclusão do caso com resultado favorável'
      }
    ],
    highlight: 'Mais de 200 casos resolvidos com sucesso em direito civil nos últimos 5 anos'
  },
  {
    id: 2,
    title: 'Direito Comercial',
    category: 'Consultoria Empresarial',
    description: 'Consultoria e representação em matérias comerciais, societárias e de negócios.',
    fullDescription: 'Especialistas em direito comercial, oferecemos consultoria estratégica para empresas de todos os tamanhos. Atuamos em fusões, aquisições, contratos comerciais, direito societário e conformidade regulatória, garantindo o crescimento seguro do seu negócio.',
    icon: <Building2 size={32} />,
    benefits: [
      'Consultoria em M&A (Fusões e Aquisições)',
      'Elaboração e revisão de contratos comerciais',
      'Assessoria em direito societário',
      'Conformidade com regulamentações comerciais'
    ],
    process: [
      {
        title: 'Diagnóstico Empresarial',
        description: 'Análise completa da estrutura e necessidades da empresa'
      },
      {
        title: 'Planejamento Estratégico',
        description: 'Desenvolvimento de plano jurídico estratégico'
      },
      {
        title: 'Implementação',
        description: 'Execução de estratégias e documentação necessária'
      },
      {
        title: 'Acompanhamento',
        description: 'Monitoramento contínuo e ajustes conforme necessário'
      }
    ],
    highlight: 'Assessoria em mais de 50 operações comerciais com valor total superior a R$ 500 milhões'
  },
  {
    id: 3,
    title: 'Direito Trabalhista',
    category: 'Direitos Laborais',
    description: 'Defesa de direitos trabalhistas, rescisões, benefícios e relações laborais.',
    fullDescription: 'Defendemos os direitos de trabalhadores e empresas em questões trabalhistas. Nossa experiência abrange desde negociações de rescisão até litígios trabalhistas complexos, garantindo conformidade com a legislação trabalhista vigente.',
    icon: <Users size={32} />,
    benefits: [
      'Defesa em reclamações trabalhistas',
      'Consultoria em rescisões e benefícios',
      'Negociação de acordos trabalhistas',
      'Conformidade com legislação trabalhista'
    ],
    process: [
      {
        title: 'Análise de Direitos',
        description: 'Avaliação completa dos direitos trabalhistas envolvidos'
      },
      {
        title: 'Estratégia de Defesa',
        description: 'Desenvolvimento de estratégia robusta para proteção'
      },
      {
        title: 'Negociação',
        description: 'Negociação de termos favoráveis quando possível'
      },
      {
        title: 'Resolução',
        description: 'Conclusão com resultado otimizado para o cliente'
      }
    ],
    highlight: 'Recuperação de mais de R$ 2 milhões em direitos trabalhistas para nossos clientes'
  },
  {
    id: 4,
    title: 'Direito Administrativo',
    category: 'Direito Público',
    description: 'Consultoria em direito administrativo, licitações e processos administrativos.',
    fullDescription: 'Oferecemos consultoria especializada em direito administrativo, licitações públicas e processos administrativos. Nossa equipe auxilia empresas e pessoas físicas na navegação do complexo sistema administrativo brasileiro.',
    icon: <Shield size={32} />,
    benefits: [
      'Consultoria em licitações e contratos públicos',
      'Defesa em processos administrativos',
      'Assessoria em conformidade administrativa',
      'Recursos e impugnações administrativas'
    ],
    process: [
      {
        title: 'Análise Regulatória',
        description: 'Avaliação das obrigações administrativas aplicáveis'
      },
      {
        title: 'Planejamento',
        description: 'Desenvolvimento de plano de conformidade'
      },
      {
        title: 'Execução',
        description: 'Implementação de procedimentos administrativos corretos'
      },
      {
        title: 'Defesa',
        description: 'Representação em processos administrativos se necessário'
      }
    ],
    highlight: 'Experiência em mais de 100 processos administrativos com taxa de sucesso de 92%'
  },
  {
    id: 5,
    title: 'Direito Penal',
    category: 'Defesa Criminal',
    description: 'Defesa criminal especializada com ampla experiência em processos penais.',
    fullDescription: 'Nossa equipe de especialistas em direito penal oferece defesa robusta em processos criminais. Atuamos desde a fase investigatória até a execução penal, garantindo a proteção dos direitos fundamentais do acusado.',
    icon: <Gavel size={32} />,
    benefits: [
      'Defesa em processos criminais complexos',
      'Assessoria na fase investigatória',
      'Negociação de acordos e penas',
      'Recursos e habeas corpus'
    ],
    process: [
      {
        title: 'Investigação',
        description: 'Análise profunda da acusação e evidências'
      },
      {
        title: 'Estratégia de Defesa',
        description: 'Desenvolvimento de defesa robusta e bem fundamentada'
      },
      {
        title: 'Representação Judicial',
        description: 'Defesa ativa em todas as fases do processo'
      },
      {
        title: 'Recursos',
        description: 'Interposição de recursos quando necessário'
      }
    ],
    highlight: 'Taxa de absolvição de 78% em processos criminais defendidos pela equipe'
  },
  {
    id: 6,
    title: 'Consultoria Jurídica',
    category: 'Assessoria Legal',
    description: 'Consultoria estratégica para empresas e pessoas físicas em questões legais.',
    fullDescription: 'Oferecemos consultoria jurídica estratégica personalizada para empresas e pessoas físicas. Nossa abordagem proativa ajuda a identificar riscos legais e oportunidades, garantindo decisões bem informadas.',
    icon: <Briefcase size={32} />,
    benefits: [
      'Consultoria estratégica em questões legais',
      'Análise de riscos jurídicos',
      'Planejamento legal preventivo',
      'Assessoria em transações e negócios'
    ],
    process: [
      {
        title: 'Diagnóstico',
        description: 'Avaliação completa da situação jurídica'
      },
      {
        title: 'Análise de Riscos',
        description: 'Identificação de potenciais riscos e oportunidades'
      },
      {
        title: 'Recomendações',
        description: 'Proposição de estratégias e soluções'
      },
      {
        title: 'Implementação',
        description: 'Acompanhamento na implementação das recomendações'
      }
    ],
    highlight: 'Consultoria contínua para mais de 150 empresas em diversos segmentos'
  }
];
