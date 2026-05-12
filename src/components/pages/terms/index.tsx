import React from 'react';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import MetaTag from '@/components/sections/MetaTag';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import SharedFooter from '@/components/shared/Footer';
import { COMPANY_NAME } from '@/config/constants';

const TermsOfService: React.FC = () => {
  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: 'Legal', href: '/legal' },
    { label: 'Terms of Service' },
  ];

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = `${COMPANY_NAME} - Terms of Service`;
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.title = '';
      }
    };
  }, []);

  return (
    <>
      <MetaTag title="Terms of Service" />
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[
          { label: 'Home', href: '/' },
        ]}
        breadcrumbs={breadcrumbs}
        pageTitle="Terms of Service"
        pageDescription="Our terms of service outline the legal agreements and conditions you accept when using our platform. We prioritize transparency and fair practices in all our relationships."
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

export default TermsOfService;
