import React from 'react';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import SharedFooter from '@/components/shared/Footer';
import { COMPANY_NAME } from '@/config/constants';

const Contact: React.FC = () => {
  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Contact' },
  ];

  React.useEffect(() => {
    document.title = `${COMPANY_NAME} - Contact`;
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
        pageTitle="Contact"
        pageDescription="Get in touch with our team. We're here to help answer your questions and discuss how we can assist you."
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

export default Contact;
