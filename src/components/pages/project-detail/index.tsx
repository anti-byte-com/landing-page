import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import SharedFooter from '@/components/shared/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { COMPANY_NAME } from '@/config/constants';
import { projects } from '@/data/projects';

const ProjectDetail: React.FC = () => {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useScrollToTop();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) {
      navigate('/projects/current', { replace: true });
      return;
    }
    document.title = `${COMPANY_NAME} - ${project.name}`;
  }, [project, navigate]);

  if (!project) return null;

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: t('common.backToHome'), href: '/' },
    { label: t('nav.currentProjects'), href: '/projects/current' },
    { label: project.name },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[
          { label: t('common.backToHome'), href: '/' },
        ]}
        breadcrumbs={breadcrumbs}
        pageTitle={project.name}
        pageDescription={t(project.descriptionKey)}
      />

      <main className="flex-1">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
              {project.name}
            </h1>
            <p className="text-on-surface-variant/60 text-lg">
              {t('pages.projectDetail.comingSoon')}
            </p>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

      <SharedFooter />
    </div>
  );
};

export default ProjectDetail;
