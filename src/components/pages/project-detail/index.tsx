import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import SharedFooter from '@/components/shared/Footer';
import MetaTag from '@/components/sections/MetaTag';
import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { COMPANY_NAME } from '@/config/constants';
import { projects } from '@/data/projects';

const RICH_SECTION_KEYS = [
  'origin',
  'operationModel',
  'marketValidation',
  'impact',
] as const;

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
      <MetaTag title={project.name} />
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[{ label: t('common.backToHome'), href: '/' }]}
        breadcrumbs={breadcrumbs}
        pageTitle={project.name}
        pageDescription={t(project.descriptionKey)}
      />

      <main className="flex-1 py-16 md:py-24">
        <Container className="max-w-4xl">
          {project.hasRichContent ? (
            <>
              {/* Intro */}
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-16">
                {t('projectsDetail.atendoAqui.intro')}
              </p>

              {/* Sections */}
              <article className="flex flex-col gap-12">
                {RICH_SECTION_KEYS.map((key) => (
                  <section key={key} className="flex flex-col gap-4">
                    <SectionHeader
                      title={t(
                        `projectsDetail.atendoAqui.sections.${key}.title`
                      )}
                    />
                    <p className="text-base text-on-surface-variant leading-relaxed">
                      {t(`projectsDetail.atendoAqui.sections.${key}.body`)}
                    </p>
                  </section>
                ))}

                {/* Conclusion */}
                <section className="flex flex-col gap-4">
                  <p className="text-base text-on-surface-variant leading-relaxed italic">
                    {t('projectsDetail.atendoAqui.conclusion')}
                  </p>
                </section>
              </article>

              {/* Image Gallery */}
              {project.images && project.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-16">
                  {project.images.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`${project.name} - ${idx + 1}`}
                      className="w-full rounded-lg"
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
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
          )}
        </Container>
      </main>

      <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

      <SharedFooter />
    </div>
  );
};

export default ProjectDetail;
