import React from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import MethodCards from './MethodSection.MethodCards';

const MethodSection: React.FC = () => {
  return (
    <section id="method" className="py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          label="// METHOD"
          title="The Lean Startup Studio Model"
        />

        {/* Grid Layout for Method Cards */}
        <MethodCards />
      </div>
    </section>
  );
};

export default MethodSection;
