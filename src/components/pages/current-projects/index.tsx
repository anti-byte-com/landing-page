import React from 'react';
import { projects as projectsData } from '@/data/projects';
import SharedNavbarContainer from '@/components/shared/NavbarContainer';
import SharedContainer from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeader from '@/components/shared/SectionHeader';
import StatusBadge from '@/components/shared/StatusBadge';
import SharedFooter from '@/components/shared/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Card from '@/components/atoms/Card';
import { COMPANY_NAME } from '@/config/constants';

const CurrentProjects: React.FC = () => {
  useScrollToTop();

  React.useEffect(() => {
    document.title = `${COMPANY_NAME} - Current Projects`;
    return () => {
      document.title = '';
    };
  }, []);

  const activeProjects = projectsData.filter((p) => p.status !== 'archived');

  const projectsByStatus = activeProjects.reduce(
    (acc, project) => {
      if (!acc[project.status]) {
        acc[project.status] = [];
      }
      acc[project.status].push(project);
      return acc;
    },
    {} as {
      active: Project[];
      validation: Project[];
      growth: Project[];
    }
  );

  return (
    <>
      {/* Navbar */}
      <SharedNavbarContainer
        showLogo={true}
        navLinks={[{ label: 'About', to: '/about' }]}
        ctaText="Projects"
        ctaUrl="/projects"
      />

      {/* Gradient Background Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

      <SharedContainer className="py-24 md:py-32">
        <div className="flex items-center justify-center min-h-[60vh]">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
            Current Projects
          </h1>
        </div>
      </SharedContainer>

      {/* Footer */}
      <SharedFooter />
    </>
  );
};

export default CurrentProjects;
export type { Project } from '@/data/projects';
