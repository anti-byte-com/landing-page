import atendoImg1 from '@/assets/projects/atendo-aqui/atendo-aqui-01.jpg';
import atendoImg2 from '@/assets/projects/atendo-aqui/atendo-aqui-02.jpg';
import atendoImg3 from '@/assets/projects/atendo-aqui/atendo-aqui-03.jpg';

export interface Project {
  id: string;
  slug: string;
  name: string;
  descriptionKey: string;
  status: 'active' | 'validation' | 'growth' | 'archived';
  images?: string[];
  hasRichContent?: boolean;
}

export const projects: Project[] = [
  {
    id: 'proj-001',
    slug: 'atendo-aqui',
    name: 'Atendo Aqui',
    descriptionKey: 'projects.0.description',
    status: 'archived',
    images: [atendoImg1, atendoImg2, atendoImg3],
    hasRichContent: true,
  },
  {
    id: 'proj-002',
    slug: 'entrei-comprei',
    name: 'Entrei Comprei',
    descriptionKey: 'projects.1.description',
    status: 'validation',
  },
];

export default projects;
