import React from 'react';
import StatusBadge from '@/components/shared/StatusBadge';
import { useTranslation } from 'react-i18next';

interface HeroStatusBadgesProps {
  activeProjects: number;
  validationIdeas: number;
  archivedProjects: number;
}

const HeroStatusBadges: React.FC<HeroStatusBadgesProps> = ({
  activeProjects,
  validationIdeas,
  archivedProjects,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-3 pt-6">
      <StatusBadge
        label={t('heroStatusBadges.active')}
        count={activeProjects}
        color="primary"
      />

      <StatusBadge
        label={t('heroStatusBadges.validation')}
        count={validationIdeas}
        color="secondary"
      />

      <StatusBadge
        label={t('heroStatusBadges.archived')}
        count={archivedProjects}
        color="tertiary"
      />
    </div>
  );
};

export default HeroStatusBadges;
