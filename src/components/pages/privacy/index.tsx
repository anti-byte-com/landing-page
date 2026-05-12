import React from 'react';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import MetaTag from '@/components/sections/MetaTag';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import SharedFooter from '@/components/shared/Footer';
import { COMPANY_NAME } from '@/config/constants';

const PrivacyPolicy: React.FC = () => {
  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: 'Legal', href: '/legal' },
    { label: 'Privacy Policy' },
  ];

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = `${COMPANY_NAME} - Privacy Policy`;
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.title = '';
      }
    };
  }, []);

  return (
    <>
      <MetaTag title="Privacy Policy" />
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[
          { label: 'Home', href: '/' },
        ]}
        breadcrumbs={breadcrumbs}
        pageTitle="Privacy Policy"
        pageDescription="We are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our services."
      />

      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
          Privacy Policy
        </h1>
      </div>

      <SharedFooter className="scroll-mt-24" />
    </>
  );
};

export default PrivacyPolicy;
