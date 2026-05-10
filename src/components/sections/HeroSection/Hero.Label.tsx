import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroLabel: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface-container-lowest rounded-full text-xs font-bold uppercase tracking-wider text-primary">
      {t('hero.label')}
    </div>
  );
};

export default HeroLabel;
