/**
 * Dados para a página About Us - Anti-Byte Lean Startup Studio
 */

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Everton Antunes de Oliveira',
    role: 'Founder & Lead Architect',
    bio: 'Arquiteto de software com mais de 15 anos construindo sistemas que equilibram performance técnica com design humano. Especialista em transformar complexidade em clareza.',
    expertise: [
      'Arquitetura de Software',
      'Design Patterns',
      'Performance Engineering',
    ],
  },
  {
    name: 'Ana Silva',
    role: 'Head of Product',
    bio: 'Product Manager apaixonada por Lean Startup e validação contínua. Anteriormente liderou a escala de produtos para startups Series A em fintech.',
    expertise: ['Product Strategy', 'User Research', 'Go-to-Market'],
  },
  {
    name: 'Carlos Mendes',
    role: 'Technical Lead',
    bio: 'Engenheiro de backend especializado em sistemas distribuídos e escalabilidade. Transforma requisitos vagos em arquiteturas robustas.',
    expertise: ['Backend Systems', 'Microservices', 'Cloud Architecture'],
  },
  {
    name: 'Juliana Costa',
    role: 'UX Design Lead',
    bio: 'Designer com visão obsessiva para micro-interações e acessibilidade. Cria experiências que são ao mesmo tempo funcionais e emocionalmente ressonantes.',
    expertise: ['Design Systems', 'Interaction Design', 'Accessibility'],
  },
];

export const companyHistory = {
  id: 'history-section',
  label: 'aboutHistory.label',
  title: 'aboutHistory.title',
  items: [
    {
      id: 'history-001',
      year: '2018-2021',
      title: 'A Semente - Experimentos iniciais',
      description:
        "Começamos como três desenvolvedores independentes, validando pequenas ideias com landing pages simples. Aprendemos que o mercado não quer produtos 'bonitos' - quer soluções que resolvem problemas reais.",
    },
    {
      id: 'history-002',
      year: '2021-2023',
      title: 'Validação em Ação',
      description:
        'Testamos mais de 20 MVPs. Falhamos com elegância, aprendemos com dados e dobramos nossa aposta no que funcionava. Nossa equipe cresce para 8 pessoas focadas em execução rápida.',
    },
    {
      id: 'history-003',
      year: '2023-Presente',
      title: 'Lean Startup Studio',
      description:
        'Hoje operamos como um estúdio híbrido: validamos ideias externas enquanto escalam nossos próprios produtos. Cada projeto é um experimento com hipótese clara e critérios de sucesso medíveis.',
    },
  ],
};

export const companyValues = {
  id: 'values-section',
  label: 'aboutValues.label',
  title: 'aboutValues.title',
  values: [
    {
      id: 'value-001',
      title: 'Validação sobre Opinião',
      description:
        'Nunca construímos algo que achamos que as pessoas querem. Testamos com usuários reais, validamos prematuramente e iteramos rápido. Nossa confiança vem de dados, não de opiniões.',
    },
    {
      id: 'value-002',
      title: 'Falhar Elegante',
      description:
        'Errar é parte do processo quando feito de forma informada. Aprendemos mais com um teste fracassado do que com meses de desenvolvimento em direção ao problema errado.',
    },
    {
      id: 'value-003',
      title: 'Transparência Radical',
      description:
        'Compartilhamos o que construímos, por que decidimos e quais lições aprendemos. Nosso portfolio público inclui projetos arquivados com explicações honestas do porquê não funcionaram.',
    },
    {
      id: 'value-004',
      title: 'Deep Work Profundo',
      description:
        'Eliminamos distrações para manter qualidade técnica alta. Nossa oficina é nosso templo. Investimos pesado em ferramentas que nos permitem construir rápido sem comprometer a excelência.',
    },
  ],
};

export const companyMission = {
  id: 'mission-section',
  label: 'aboutMission.label',
  title: 'aboutMission.title',
  description: 'aboutMission.description',
  coreBeliefs: [
    {
      id: 'belief-001',
      title: 'aboutMission.beliefs.0.title',
      description: 'aboutMission.beliefs.0.description',
    },
    {
      id: 'belief-002',
      title: 'aboutMission.beliefs.1.title',
      description: 'aboutMission.beliefs.1.description',
    },
    {
      id: 'belief-003',
      title: 'aboutMission.beliefs.2.title',
      description: 'aboutMission.beliefs.2.description',
    },
    {
      id: 'belief-004',
      title: 'aboutMission.beliefs.3.title',
      description: 'aboutMission.beliefs.3.description',
    },
  ],
};

export const contactInfo = {
  id: 'contact-section',
  label: 'aboutContact.label',
  title: 'aboutContact.title',
  email: 'aboutContact.email',
  location: 'aboutContact.location',
  timezone: 'aboutContact.timezone',
  readyToStart: 'aboutContact.readyToStart',
  buildTogether: 'aboutContact.buildTogether',
  contactUs: 'aboutContact.contactUs',
};

export const teamMembersTranslation = {
  label: 'aboutTeams.label',
  title: 'aboutTeams.title',
  members: [
    {
      name: 'teamMembers.0.name',
      role: 'teamMembers.0.role',
      bio: 'teamMembers.0.bio',
      expertise: 'teamMembers.0.expertise',
    },
    {
      name: 'teamMembers.1.name',
      role: 'teamMembers.1.role',
      bio: 'teamMembers.1.bio',
      expertise: 'teamMembers.1.expertise',
    },
    {
      name: 'teamMembers.2.name',
      role: 'teamMembers.2.role',
      bio: 'teamMembers.2.bio',
      expertise: 'teamMembers.2.expertise',
    },
    {
      name: 'teamMembers.3.name',
      role: 'teamMembers.3.role',
      bio: 'teamMembers.3.bio',
      expertise: 'teamMembers.3.expertise',
    },
  ],
  expertise: 'aboutTeams.expertise',
};

export default {
  companyHistory,
  companyValues,
  companyMission,
  contactInfo,
  teamMembersTranslation,
};
