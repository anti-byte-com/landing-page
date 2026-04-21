import React from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import PhilosophyContainer from './PhilosophySection.PhilosophyContainer';
import PrinciplesGrid from './PhilosophySection.PrinciplesGrid';

const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader label="// PHILOSOPHY" title="How We Think" />

        {/* Philosophy Container */}
        <PhilosophyContainer />

        {/* Principles Grid */}
        <PrinciplesGrid />
      </div>
    </section>
  );
};

export default PhilosophySection;
