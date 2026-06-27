import React from 'react';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import MetaTag from '@/components/sections/MetaTag';
import SharedFooter from '@/components/shared/Footer';
import Container from '@/components/shared/Container';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { COMPANY_NAME } from '@/config/constants';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: t('common.backToHome'), href: '/' },
    { label: t('nav.about') },
  ];

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = `${COMPANY_NAME} - ${t('nav.about')}`;
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.title = '';
      }
    };
  }, [t]);

  const body = t('pages.about.body', {
    returnObjects: true,
  }) as unknown;

  return (
    <div className="flex flex-col min-h-screen">
      <MetaTag title={t('nav.about')} />
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[{ label: t('common.backToHome'), href: '/' }]}
        breadcrumbs={breadcrumbs}
        pageTitle={t('nav.about')}
        pageDescription={t('pages.about.description')}
      />

      <main className="flex-1 py-16 md:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm text-secondary/80 mb-12">
            {t('pages.about.updatedNote')}
          </p>

          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-16">
            {t('pages.about.intro')}
          </p>

          <article className="flex flex-col gap-8">
            {Array.isArray(body) &&
              (body as string[]).map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base text-on-surface-variant leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
          </article>
        </Container>
      </main>

      <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

      <SharedFooter className="scroll-mt-24" />
    </div>
  );
};

export default About;
