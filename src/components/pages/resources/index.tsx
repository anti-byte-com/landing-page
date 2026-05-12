import React, { useEffect } from 'react';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import SharedFooter from '@/components/shared/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { COMPANY_NAME } from '@/config/constants';

const Resources: React.FC = () => {
  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: 'Docs', href: '/docs' },
    { label: 'Resources' },
  ];

  useEffect(() => {
    document.title = `${COMPANY_NAME} - Resources`;
    return () => {
      document.title = '';
    };
  }, []);

  return (
    <>
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[
          { label: 'Home', href: '/' },
        ]}
        breadcrumbs={breadcrumbs}
        pageTitle="Resources"
        pageDescription="Comprehensive resources, documentation, and guides to help you get the most out of Anti-Byte."
      />

      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
          About
          {/* Gradient Background Overlay */}
          <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

        </h1>
      </div>

      <SharedFooter />
    </>
  );
};

export default Resources;
