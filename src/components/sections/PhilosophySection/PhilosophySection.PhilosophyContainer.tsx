import React from 'react';
import { useTranslation } from 'react-i18next';

const PhilosophyContainer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-surface-container-low hover:bg-surface-container-low/50 rounded-2xl p-8 md:p-12">
      {/* Main Description */}
      <div className="space-y-6 max-w-3xl">
        <p className="text-lg text-on-surface-variant leading-relaxed">
          {t('philosophy.description')}
        </p>

        <p className="text-base text-on-surface-variant/80 leading-relaxed">
          {t('philosophy.descriptionFull')}
        </p>
      </div>
    </div>
  );
};

export default PhilosophyContainer;
