import React from 'react';
import { projects as projectsData } from '@/data/projects';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import SharedFooter from '@/components/shared/Footer';
import ProjectCard from '@/components/sections/ProjectsSection/ProjectsSection.ProjectCard';
import { useScrollToTop } from '@/hooks/useScrollToTop';
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

  const activeProjects = projectsData
    .filter((p) => p.status !== 'archived')
    .map((p) => ({ ...p, description: t(p.descriptionKey) }));

  return (
    <div className="flex flex-col min-h-screen">
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[
          { label: t('common.backToHome'), href: '/' },
        ]}
        breadcrumbs={breadcrumbs}
        pageTitle={t('nav.currentProjects')}
        pageDescription={t('pages.currentProjects.description')}
      />

      <main className="flex-1">
        <section className="py-20 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

      <SharedFooter />
    </div>
  );
};

export default CurrentProjects;
