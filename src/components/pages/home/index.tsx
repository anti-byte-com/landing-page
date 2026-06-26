import React from 'react';
import SharedNavbarContainer from '@/components/shared/NavbarContainer';
import SharedContainer from '@/components/shared/Container';
import HeroSection from '@/components/sections/HeroSection';
import MethodSection from '@/components/sections/MethodSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SharedFooter from '@/components/shared/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { COMPANY_NAME } from '@/config/constants';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  useScrollToTop();

  React.useEffect(() => {
    document.title = COMPANY_NAME;
    return () => {
      document.title = '';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <SharedNavbarContainer
        showLogo={true}
        navLinks={[
          { label: t('nav.projects'), to: '/projects' },
          { label: t('nav.about'), to: '/about' },
        ]}
        ctaText={t('common.contactUs')}
        ctaUrl="/contact"
      />

      {/* Gradient Background Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <MethodSection />
        <PhilosophySection />
        <ProjectsSection />
      </main>

      {/* Footer */}
      <SharedFooter />
    </div>
  );
};

export default Home;
