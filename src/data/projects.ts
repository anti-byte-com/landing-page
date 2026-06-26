import img1 from '@/assets/projects/atendo-aqui/atendo-aqui-01.jpg';
import img2 from '@/assets/projects/atendo-aqui/atendo-aqui-02.jpg';
import img3 from '@/assets/projects/atendo-aqui/atendo-aqui-03.jpg';

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
    images: [img1, img2, img3],
    hasRichContent: true,
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
