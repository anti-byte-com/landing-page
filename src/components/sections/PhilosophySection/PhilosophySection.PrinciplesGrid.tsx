import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@/components/shared/Card';
import { philosophyPrinciples } from '@/data/philosophy-principles';

const PrinciplesGrid: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {philosophyPrinciples.map((principle, index) => (
        <Card
          key={principle.title}
          className={`zebra-card-alt${(index % 2) + 1}`}
        >
          <h3 className="text-lg font-display font-semibold mb-3 text-on-surface">
            {t(principle.title)}
          </h3>
          <p className="text-sm text-on-surface-variant/80 leading-relaxed">
            {t(principle.description)}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default PrinciplesGrid;
