/**
 * Dados para a página About Us - Anti-Byte Startup Studio
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
      title: 'aboutHistory.items.0.title',
      description: 'aboutHistory.items.0.description',
    },
    {
      id: 'history-002',
      year: '2021-2023',
      title: 'aboutHistory.items.1.title',
      description: 'aboutHistory.items.1.description',
    },
    {
      id: 'history-003',
      year: '2023-Atual',
      title: 'aboutHistory.items.2.title',
      description: 'aboutHistory.items.2.description',
    },
  ],
};

export const companyValues = {
  id: 'values-section',
  label: 'companyValues.label',
  title: 'companyValues.title',
  values: [
    {
      id: 'value-001',
      title: 'companyValues.values.0.title',
      description: 'companyValues.values.0.description',
    },
    {
      id: 'value-002',
      title: 'companyValues.values.1.title',
      description: 'companyValues.values.1.description',
    },
    {
      id: 'value-003',
      title: 'companyValues.values.2.title',
      description: 'companyValues.values.2.description',
    },
    {
      id: 'value-004',
      title: 'companyValues.values.3.title',
      description: 'companyValues.values.3.description',
    },
  ],
};

export const companyMission = {
  id: 'mission-section',
  label: 'companyMission.label',
  title: 'companyMission.title',
  description: 'companyMission.description',
  coreBeliefs: [
    {
      id: 'belief-001',
      title: 'companyMission.coreBeliefs.0.title',
      description: 'companyMission.coreBeliefs.0.description',
    },
    {
      id: 'belief-002',
      title: 'companyMission.coreBeliefs.1.title',
      description: 'companyMission.coreBeliefs.1.description',
    },
    {
      id: 'belief-003',
      title: 'companyMission.coreBeliefs.2.title',
      description: 'companyMission.coreBeliefs.2.description',
    },
    {
      id: 'belief-004',
      title: 'companyMission.coreBeliefs.3.title',
      description: 'companyMission.coreBeliefs.3.description',
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
      name: 'Everton Antunes de Oliveira - Founder & Lead Architect: Arquiteto de software com mais de 15 anos construindo sistemas que equilibram performance técnica com design humano. Especialista em transformar complexidade em clareza.',
      role: 'Founder & Lead Architect',
      bio: 'Arquiteto de software com mais de 15 anos construindo sistemas que equilibram performance técnica com design humano. Especialista em transformar complexidade em clareza.',
      expertise: [
        'Arquitetura de Software',
        'Design Patterns',
        'Performance Engineering',
      ],
    },
    {
      name: 'Ana Silva - Head of Product: Product Manager apaixonada por Lean Startup e validação contínua. Anteriormente liderou a escala de produtos para startups Series A em fintech.',
      role: 'Head of Product',
      bio: 'Product Manager apaixonada por Lean Startup e validação contínua. Anteriormente liderou a escala de produtos para startups Series A em fintech.',
      expertise: ['Product Strategy', 'User Research', 'Go-to-Market'],
    },
    {
      name: 'Carlos Mendes - Technical Lead: Engenheiro de backend especializado em sistemas distribuídos e escalabilidade. Transforma requisitos vagos em arquiteturas robustas.',
      role: 'Technical Lead',
      bio: 'Engenheiro de backend especializado em sistemas distribuídos e escalabilidade. Transforma requisitos vagos em arquiteturas robustas.',
      expertise: ['Backend Systems', 'Microservices', 'Cloud Architecture'],
    },
    {
      name: 'Juliana Costa - UX Design Lead: Designer com visão obsessiva para micro-interações e acessibilidade. Cria experiências que são ao mesmo tempo funcionais e emocionalmente ressonantes.',
      role: 'UX Design Lead',
      bio: 'Designer com visão obsessiva para micro-interações e acessibilidade. Cria experiências que são ao mesmo tempo funcionais e emocionalmente ressonantes.',
      expertise: ['Design Systems', 'Interaction Design', 'Accessibility'],
    },
  ],
  expertise: [
    'Arquitetura de Software',
    'Design Patterns',
    'Performance Engineering',
    'Product Strategy',
    'User Research',
    'Go-to-Market',
    'Backend Systems',
    'Microservices',
    'Cloud Architecture',
    'Design Systems',
    'Interaction Design',
    'Accessibility',
  ],
};

export default {
  companyHistory,
  companyValues,
  companyMission,
  contactInfo,
  teamMembersTranslation,
};
