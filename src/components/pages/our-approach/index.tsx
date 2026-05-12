import React from 'react';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import SharedFooter from '@/components/shared/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { COMPANY_NAME } from '@/config/constants';

const OurApproach: React.FC = () => {
  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Our Approach' },
  ];

  React.useEffect(() => {
    document.title = `${COMPANY_NAME} - Our Approach`;
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
        pageTitle="Our Approach"
        pageDescription="Discover our methodology and the principles that guide how we build exceptional digital experiences."
      />

      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
          About
          {/* Gradient Background Overlay */}
          <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

        </h1>
      </div>

      <SharedFooter className="scroll-mt-24" />
    </>
  );
};

export default OurApproach;
