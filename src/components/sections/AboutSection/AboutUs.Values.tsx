import React from 'react';
import SharedContainer from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import Card from '@/components/shared/Card';
import { companyValues } from '@/data/about-us';

const AboutUsValues: React.FC = () => {
  return (
    <SharedContainer>
      <div className="space-y-12">
        {/* Values Header */}
        <SectionHeader label="// VALORES" title="Nossos Valores" />

        {/* Values Grid */}
        <div className="grid grid-cols-1 gap-6">
          {companyValues.map((value, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden bg-surface-container-low ${index % 2 === 1 ? 'hover:bg-surface-container-high' : ''}`}
            >
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-lg font-display font-bold text-on-surface">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-on-surface-variant/80 leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative corner gradient */}
                <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SharedContainer>
  );
};

export default AboutUsValues;
