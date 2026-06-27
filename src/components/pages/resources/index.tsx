import React, { useEffect } from 'react';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import SharedFooter from '@/components/shared/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { COMPANY_NAME } from '@/config/constants';
import { useTranslation } from 'react-i18next';

const Resources: React.FC = () => {
  const { t } = useTranslation();

  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: t('nav.ourApproach'), href: '/approach' },
    { label: t('nav.resources') },
  ];

  useEffect(() => {
    document.title = `${COMPANY_NAME} - ${t('nav.resources')}`;
    return () => {
      document.title = '';
    };
  }, [t]);

  return (
    <div className="flex flex-col min-h-screen">
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[
          { label: t('common.backToHome'), href: '/' },
        ]}
        breadcrumbs={breadcrumbs}
        pageTitle={t('nav.resources')}
        pageDescription={t('pages.resources.description')}
      />

      <main className="flex-1">
        <div className="flex items-center justify-center min-h-[60vh]">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
            {t('nav.resources')}
          </h1>
        </div>
      </main>

      <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

      <SharedFooter />
    </div>
  );
};

export default Resources;