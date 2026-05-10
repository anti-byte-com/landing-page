import React from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import MethodCards from './MethodSection.MethodCards';
import { useTranslation } from 'react-i18next';

const MethodSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="method" className="py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          label={t('method.label')}
          title={t('method.title')}
        />

        {/* Grid Layout for Method Cards */}
        <MethodCards />
      </div>
    </section>
  );
};

export default MethodSection;
