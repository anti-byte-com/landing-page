import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import SharedFooter from '@/components/shared/Footer';
import MetaTag from '@/components/sections/MetaTag';
import Container from '@/components/shared/Container';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { COMPANY_NAME } from '@/config/constants';
import section1Img from '@/assets/projects/entrei-comprei/entrei-comprei-section1.jpg';
import introImg1 from '@/assets/projects/entrei-comprei/entrei-comprei-intro-01.jpg';
import introImg2 from '@/assets/projects/entrei-comprei/entrei-comprei-intro-02.jpg';
import introImg3 from '@/assets/projects/entrei-comprei/entrei-comprei-intro-03.jpg';
import playBadge from '@/assets/google-play-badge.png';

const features = [
  { emoji: '\u{1F6D2}', textKey: 'featureSales' },
  { emoji: '\u{1F4AC}', textKey: 'featureChat' },
  { emoji: '\u{1F4F9}', textKey: 'featureLive' },
] as const;

const EntreiComprei: React.FC = () => {
  const { t } = useTranslation();

  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: t('common.backToHome'), href: '/' },
    { label: t('nav.currentProjects'), href: '/projects/current' },
    { label: 'Entrei Comprei' },
  ];

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = `${COMPANY_NAME} - Entrei Comprei`;
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.title = '';
      }
    };
  }, [t]);

  return (
    <div className="flex flex-col min-h-screen">
      <MetaTag title="Entrei Comprei" />
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[{ label: t('common.backToHome'), href: '/' }]}
        breadcrumbs={breadcrumbs}
        pageTitle="Entrei Comprei"
        pageDescription={t('projects.1.description')}
      />

      <main className="flex-1 py-16 md:py-24">
        <Container className="max-w-5xl">
          {/* Intro */}
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-8">
            {t('projectsDetail.entrei-comprei.intro')}
          </p>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-20">
            {[introImg1, introImg2, introImg3].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Entrei Comprei - ${idx + 1}`}
                className="w-full rounded-lg"
              />
            ))}
          </div>

          {/* Section 1: Imagem + texto sobre grupos */}
          <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-20">
            <div className="w-full md:w-1/2 max-w-sm">
              <img
                src={section1Img}
                alt={t('projectsDetail.entrei-comprei.sections.groups.title')}
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-display font-semibold">
                {t('projectsDetail.entrei-comprei.sections.groups.title')}
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                {t('projectsDetail.entrei-comprei.sections.groups.body')}
              </p>
            </div>
          </section>

          {/* Section 2: Features */}
          <section className="flex flex-col gap-8 mb-20">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-center mb-4">
              {t('projectsDetail.entrei-comprei.featuresHeadline')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature) => {
                const title = t(
                  `projectsDetail.entrei-comprei.sections.${feature.textKey}.title`
                );
                const body = t(
                  `projectsDetail.entrei-comprei.sections.${feature.textKey}.body`
                );
                return (
                  <div
                    key={feature.textKey}
                    className="bg-surface-container-low hover:bg-surface-container-low/50 rounded-2xl p-6 flex flex-col gap-4 transition-colors"
                  >
                    <span className="text-3xl" role="img" aria-label={title}>
                      {feature.emoji}
                    </span>
                    <h3 className="text-lg font-display font-semibold">
                      {title}
                    </h3>
                    <p className="text-sm text-on-surface-variant/80 leading-relaxed">
                      {body}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Feedback + Badge */}
          <section className="flex flex-col md:flex-row items-center justify-between mb-16">
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed italic mb-4 md:mb-0">
              {t('projectsDetail.entrei-comprei.feedback')}
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={playBadge}
                alt={t('projectsDetail.entrei-comprei.cta')}
                className="h-12 w-auto"
              />
            </a>
          </section>
        </Container>
      </main>

      <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

      <SharedFooter />
    </div>
  );
};

export default EntreiComprei;
