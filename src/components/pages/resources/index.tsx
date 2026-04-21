import React, { useEffect } from 'react';
import SharedNavbarContainer from '@/components/shared/NavbarContainer';
import SharedFooter from '@/components/shared/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SharedContainer from '@/components/shared/Container';
import { COMPANY_NAME } from '@/config/constants';

const Resources: React.FC = () => {
  useScrollToTop();

  useEffect(() => {
    document.title = `${COMPANY_NAME} - Resources`;
    return () => {
      document.title = '';
    };
  }, []);

  return (
    <>
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
            Resources
          </h1>
        </div>
      </SharedContainer>
      <SharedFooter />
    </>
  );
};

export default Resources;
