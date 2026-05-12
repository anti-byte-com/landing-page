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
      title: 'companyHistory.0.title',
      description: 'companyHistory.0.description',
    },
    {
      id: 'history-002',
      year: '2021-2023',
      title: 'companyHistory.1.title',
      description: 'companyHistory.1.description',
    },
    {
      id: 'history-003',
      year: '2023-Atual',
      title: 'companyHistory.2.title',
      description: 'companyHistory.2.description',
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
      title: 'companyValues.0.title',
      description: 'companyValues.0.description',
    },
    {
      id: 'value-002',
      title: 'companyValues.1.title',
      description: 'companyValues.1.description',
    },
    {
      id: 'value-003',
      title: 'companyValues.2.title',
      description: 'companyValues.2.description',
    },
    {
      id: 'value-004',
      title: 'companyValues.3.title',
      description: 'companyValues.3.description',
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
