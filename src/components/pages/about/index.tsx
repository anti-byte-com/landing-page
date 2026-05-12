import React from 'react';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import SharedFooter from '@/components/shared/Footer';
import AboutUsSection from '@/components/sections/AboutSection';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { COMPANY_NAME } from '@/config/constants';

const About: React.FC = () => {
  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'About' },
  ];

  React.useEffect(() => {
    document.title = `${COMPANY_NAME} - About`;
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
        pageTitle="About"
        pageDescription="Learn more about Anti-Byte, our mission, values, and the team behind the platform."
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

export default About;
