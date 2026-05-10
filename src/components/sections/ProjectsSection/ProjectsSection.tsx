import React from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import ProjectCard from './ProjectsSection.ProjectCard';
import { projects } from '@/data/projects';
import { useTranslation } from 'react-i18next';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          label={t('projectsSection.label')}
          title={t('projectsSection.title')}
        />

        {/* Grid Layout - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.id}-${project.status}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
