import React from 'react';
import { projects as projectsData } from '@/data/projects';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import StatusBadge from '@/components/shared/StatusBadge';
import SharedFooter from '@/components/shared/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Card from '@/components/atoms/Card';
import { COMPANY_NAME } from '@/config/constants';
import { useTranslation } from 'react-i18next';

const CurrentProjects: React.FC = () => {
  const { t } = useTranslation();

  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: t('nav.projects'), href: '/projects' },
    { label: t('nav.currentProjects') },
  ];

  React.useEffect(() => {
    document.title = `${COMPANY_NAME} - ${t('nav.currentProjects')}`;
    return () => {
      document.title = '';
    };
  }, [t]);

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
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[
          { label: 'Home', href: '/' },
        ]}
        breadcrumbs={breadcrumbs}
        pageTitle={t('nav.currentProjects')}
        pageDescription="Explore our ongoing projects across active development, validation, and growth initiatives."
      />

      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
          {t('nav.currentProjects')}
          {/* Gradient Background Overlay */}
          <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

        </h1>
      </div>

      {/* Footer */}
      <SharedFooter />
    </>
  );
};

export default CurrentProjects;
export type { Project } from '@/data/projects';
