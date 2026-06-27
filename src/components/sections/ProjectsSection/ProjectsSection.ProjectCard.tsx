import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/atoms/Card';
import { useTranslation } from 'react-i18next';

type ProjectData = {
  id: string;
  slug: string;
  name: string;
  description: string;
  status: 'validation' | 'growth' | 'archived';
  imageUrl?: string;
  technology?: string;
  link?: string;
};

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const statusColors: Record<string, string> = {
    active: 'text-primary',
    validation: 'text-secondary',
    archived: 'text-on-surface-variant',
    growth: 'text-primary',
  };

  return (
    <Card
      className={`group transition-colors cursor-pointer flex flex-col ${
        index % 2 === 0 ? 'zebra-card-alt1' : 'zebra-card-alt2'
      }`}
    >
      {/* Status Badge */}
      <div className="mb-4">
        <span
          className={
            `inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              project.status === 'active' && 'bg-primary/10 text-primary'
            }` +
            ` ${project.status === 'validation' ? 'bg-secondary/10 text-secondary' : ''} ${project.status === 'archived' ? 'bg-on-surface-variant/5 text-on-surface-variant' : ''} ${project.status === 'growth' ? 'bg-tertiary/10 text-tertiary' : ''}`
          }
        >
          {t(`projects.badge.${project.status}`)}
        </span>
      </div>

      {/* Project Name */}
      <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-on-surface-variant/80 leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      {/* Card Footer with subtle indicator - fixed at bottom */}
      <div className="flex items-center justify-between pt-4">
        <span className="text-xs text-on-surface-variant/60 font-medium">
          {t(`projectsSection.projectNumber`, { number: project.id.slice(-3) })}
        </span>
        <Link
          to={`/projects/current/${project.slug}`}
          className="inline-flex items-center text-xs font-semibold text-secondary group-hover:text-primary transition-colors"
        >
          {t('projectsSection.viewDetails')}
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;
