import React from 'react';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import MetaTag from '@/components/sections/MetaTag';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import SharedFooter from '@/components/shared/Footer';
import { COMPANY_NAME } from '@/config/constants';
import { useTranslation } from 'react-i18next';

const CookiePolicy: React.FC = () => {
  const { t } = useTranslation();

  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: t('footer.nav.company'), href: '/about' },
    { label: t('legalPage.cookiePolicy') },
  ];

  React.useEffect(() => {
    document.title = `${COMPANY_NAME} - ${t('legalPage.cookiePolicy')}`;
    return () => {
      document.title = '';
    };
  }, [t]);

  return (
    <>
      <MetaTag title={t('legalPage.cookiePolicy')} />
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[
          { label: t('common.backToHome'), href: '/' },
        ]}
        breadcrumbs={breadcrumbs}
        pageTitle={t('legalPage.cookiePolicy')}
        pageDescription="Understanding how we use cookies to improve your experience. We value your privacy and aim for full transparency in our data practices."
      />

      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
          {t('legalPage.cookiePolicy')}
          {/* Gradient Background Overlay */}
          <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

        </h1>
      </div>

      <SharedFooter className="scroll-mt-24" />
    </>
  );
};

export default CookiePolicy;