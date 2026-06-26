export interface Project {
  id: string;
  slug: string;
  name: string;
  descriptionKey: string;
  status: 'active' | 'validation' | 'growth' | 'archived';
}

export const projects: Project[] = [
  {
    id: 'proj-001',
    slug: 'atendo-aqui',
    name: 'Atendo Aqui',
    descriptionKey: 'projects.0.description',
    status: 'archived',
  },
  {
    id: 'proj-002',
    slug: 'live-fy',
    name: 'Live-fy',
    descriptionKey: 'projects.1.description',
    status: 'validation',
  },
];

export default projects;
