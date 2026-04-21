import React from 'react';
import SharedNavbarContainer from '@/components/shared/NavbarContainer';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SharedContainer from '@/components/shared/Container';
import HeroSection from '@/components/sections/HeroSection';
import MethodSection from '@/components/sections/MethodSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SharedFooter from '@/components/shared/Footer';
import { useTranslation } from 'react-i18next';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { COMPANY_NAME } from '@/config/constants';

const Home: React.FC = () => {
  useTranslation();
  useScrollToTop();

  React.useEffect(() => {
    document.title = COMPANY_NAME;
    return () => {
      document.title = '';
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <SharedNavbarContainer
        showLogo={true}
        navLinks={[
          { label: 'Projects', to: '/projects' },
          { label: 'About', to: '/about' },
        ]}
        ctaText="Contact"
        ctaUrl="/contact"
      />

      {/* Gradient Background Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

      {/* Hero Section */}
      <HeroSection />

      {/* Method Section */}
      <MethodSection />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Footer */}
      <SharedFooter />
    </>
  );
};

export default Home;
