import React from 'react';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import MetaTag from '@/components/sections/MetaTag';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import SharedFooter from '@/components/shared/Footer';
import { COMPANY_NAME } from '@/config/constants';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: t('footer.nav.company'), href: '/about' },
    { label: t('legalPage.privacyPolicy') },
  ];

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = `${COMPANY_NAME} - ${t('legalPage.privacyPolicy')}`;
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.title = '';
      }
    };
  }, [t]);

  return (
    <div className="flex flex-col min-h-screen">
      <MetaTag title={t('legalPage.privacyPolicy')} />
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[
          { label: t('common.backToHome'), href: '/' },
        ]}
        breadcrumbs={breadcrumbs}
        pageTitle={t('legalPage.privacyPolicy')}
        pageDescription={t('pages.privacy.description')}
      />

      <main className="flex-1">
        <div className="flex items-center justify-center min-h-[60vh]">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
            {t('legalPage.privacyPolicy')}
          </h1>
        </div>
      </main>

      <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

      <SharedFooter className="scroll-mt-24" />
    </div>
  );
};

export default PrivacyPolicy;