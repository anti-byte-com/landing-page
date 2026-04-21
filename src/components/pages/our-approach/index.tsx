import React from 'react';
import SharedNavbarContainer from '@/components/shared/NavbarContainer';
import SharedContainer from '@/components/shared/Container';
import SharedFooter from '@/components/shared/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { COMPANY_NAME } from '@/config/constants';

const OurApproach: React.FC = () => {
  useScrollToTop();

  React.useEffect(() => {
    document.title = `${COMPANY_NAME} - Our Approach`;
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

      <SharedContainer className="py-24 md:py-32">
        <div className="flex items-center justify-center min-h-[60vh]">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
            Our Approach
          </h1>
        </div>
      </SharedContainer>

      <SharedFooter className="scroll-mt-24" />
    </>
  );
};

export default OurApproach;
