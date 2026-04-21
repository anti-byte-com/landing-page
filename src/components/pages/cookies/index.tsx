import React from 'react';
import SharedNavbarContainer from '@/components/shared/NavbarContainer';
import SharedContainer from '@/components/shared/Container';
import MetaTag from '@/components/sections/MetaTag';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import SharedFooter from '@/components/shared/Footer';
import { COMPANY_NAME } from '@/config/constants';

const CookiePolicy: React.FC = () => {
  useScrollToTop();

  React.useEffect(() => {
    document.title = `${COMPANY_NAME} - Cookie Policy`;
    return () => {
      document.title = '';
    };
  }, []);

  return (
    <>
      <MetaTag title="Cookie Policy" />
      <SharedNavbarContainer
        showLogo={true}
        navLinks={[{ label: 'About', to: '/about' }]}
        ctaText="Projects"
        ctaUrl="/projects"
      />

      <SharedContainer className="py-24 md:py-32">
        <div className="flex items-center justify-center min-h-[60vh]">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
            Cookie Policy
          </h1>
        </div>
      </SharedContainer>

      <SharedFooter className="scroll-mt-24" />
    </>
  );
};

export default CookiePolicy;
