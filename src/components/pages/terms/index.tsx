import React from 'react';
import SharedNavbarContainer from '@/components/shared/NavbarContainer';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SharedContainer from '@/components/shared/Container';
import MetaTag from '@/components/sections/MetaTag';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import SharedFooter from '@/components/shared/Footer';
import { COMPANY_NAME } from '@/config/constants';

const TermsOfService: React.FC = () => {
  useScrollToTop();

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
      <SharedNavbarContainer
        showLogo={true}
        navLinks={[{ label: 'About', to: '/about' }]}
        ctaText="Projects"
        ctaUrl="/projects"
      />

      {/* Gradient Background Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

      <SharedContainer className="py-24 md:py-32">
        <div className="flex items-center justify-center min-h-[60vh]">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
            Terms of Service
          </h1>
        </div>
      </SharedContainer>
      <SharedFooter />
    </>
  );
};

export default TermsOfService;
