import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroTitleDescription: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-on-surface">
        {t('hero.title')}
      </h1>

      <p className="text-lg md:text-xl text-on-surface-variant max-w-xl">
        {t('hero.description')}
      </p>

      <p className="text-base text-on-surface-variant/80 max-w-xl">
        {t('hero.descriptionFull')}
      </p>
    </>
  );
};

export default HeroTitleDescription;
