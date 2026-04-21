import React from 'react';
import HeroLabel from './Hero.Label';
import HeroTitleDescription from './Hero.TitleDescription';
import HeroCTALinks from './HeroCTALinks';
import HeroStatusBadges from './Hero.StatusBadges';
import HeroStatsPanel from './Hero.StatsPanel';
import { heroStats } from '@/data/hero-stats';

const Hero: React.FC = () => {
  const activeProjects = parseInt(String(heroStats[0].value), 10);
  const validationIdeas = parseInt(
    String(heroStats[3].value).replace('+', ''),
    10
  );
  const archivedProjects = 3;

  return (
    <section className="min-h-[100vh] flex items-center justify-center py-24 px-6 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <HeroLabel />
            <HeroTitleDescription />
            <HeroCTALinks />
          </div>

          {/* Right Column: Stats Panel */}
          <HeroStatsPanel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
