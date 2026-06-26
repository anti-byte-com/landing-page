import React from 'react';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import MetaTag from '@/components/sections/MetaTag';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import SharedFooter from '@/components/shared/Footer';
import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import { COMPANY_NAME } from '@/config/constants';
import { useTranslation } from 'react-i18next';

const COOKIE_SECTION_KEYS = [
  'whatAreCookies',
  'noUsage',
  'similarTech',
  'thirdParty',
  'futureChanges',
  'contact',
] as const;

const CookiePolicy: React.FC = () => {
  const { t } = useTranslation();

  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: t('footer.nav.company'), href: '/about' },
    { label: t('legalPage.cookiePolicy') },
  ];

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = `${COMPANY_NAME} - ${t('legalPage.cookiePolicy')}`;
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.title = '';
      }
    };
  }, [t]);

  return (
    <div className="flex flex-col min-h-screen">
      <MetaTag title={t('legalPage.cookiePolicy')} />
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[{ label: t('common.backToHome'), href: '/' }]}
        breadcrumbs={breadcrumbs}
        pageTitle={t('legalPage.cookiePolicy')}
        pageDescription={t('pages.cookies.description')}
      />

      <main className="flex-1 py-16 md:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm text-secondary/80 mb-12">
            {t('pages.cookies.updatedNote')}
          </p>

          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-16">
            {t('pages.cookies.intro')}
          </p>

          <article className="flex flex-col gap-12">
            {COOKIE_SECTION_KEYS.map((key) => (
              <section key={key} className="flex flex-col gap-4">
                <SectionHeader
                  title={t(`pages.cookies.sections.${key}.title`)}
                />
                <p className="text-base text-on-surface-variant leading-relaxed whitespace-pre-line">
                  {t(`pages.cookies.sections.${key}.body`, {
                    email: t('contactInfo.email'),
                  })}
                </p>
              </section>
            ))}
          </article>
        </Container>
      </main>

      <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

      <SharedFooter className="scroll-mt-24" />
    </div>
  );
};

export default CookiePolicy;
