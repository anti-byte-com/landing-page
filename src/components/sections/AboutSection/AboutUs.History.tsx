import React from 'react';
import SharedContainer from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import Card from '@/components/shared/Card';
import { companyHistory } from '@/data/about-us';
import { useTranslation } from 'react-i18next';

const AboutUsHistory: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SharedContainer>
      <div className="space-y-12">
        {/* History Header */}
        <SectionHeader
          label={t(companyHistory.label)}
          title={t(companyHistory.title)}
        />

        {/* Timeline */}
        <div className="relative space-y-6">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-surface-container-lowest hidden md:block" />

          {companyHistory.items.map((item, index) => (
            <Card
              key={item.id}
              className={`relative overflow-hidden ${index % 2 === 1 ? 'bg-surface-container-high' : ''}`}
            >
              <div className="p-6 space-y-4">
                {/* Year badge */}
                <div className="absolute -top-3 right-6 px-4 py-1 bg-primary text-on-primary text-xs font-bold rounded-full shadow-lg">
                  {item.year}
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-on-surface">
                  {t(item.title)}
                </h3>

                {/* Description */}
                <p className="text-sm text-on-surface-variant/80 leading-relaxed">
                  {t(item.description)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SharedContainer>
  );
};

export default AboutUsHistory;
