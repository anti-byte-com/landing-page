import React from 'react';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import MetaTag from '@/components/sections/MetaTag';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import SharedFooter from '@/components/shared/Footer';
import { COMPANY_NAME } from '@/config/constants';

const CookiePolicy: React.FC = () => {
  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: 'Legal', href: '/legal' },
    { label: 'Cookie Policy' },
  ];

  React.useEffect(() => {
    document.title = `${COMPANY_NAME} - Cookie Policy`;
    return () => {
      document.title = '';
    };
  }, []);

  return (
    <>
      <MetaTag title="Cookie Policy" />
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[
          { label: 'Home', href: '/' },
        ]}
        breadcrumbs={breadcrumbs}
        pageTitle="Cookie Policy"
        pageDescription="Understanding how we use cookies to improve your experience. We value your privacy and aim for full transparency in our data practices."
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

export default CookiePolicy;
