import React from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import PhilosophyContainer from './PhilosophySection.PhilosophyContainer';
import PrinciplesGrid from './PhilosophySection.PrinciplesGrid';
import { useTranslation } from 'react-i18next';

const PhilosophySection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="philosophy" className="py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          label={t('philosophy.label')}
          title={t('philosophy.title')}
        />

        {/* Philosophy Container */}
        <PhilosophyContainer />

        {/* Principles Grid */}
        <PrinciplesGrid />
      </div>
    </section>
  );
};

export default PhilosophySection;
