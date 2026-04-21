import React from 'react';
import StatusBadge from '@/components/shared/StatusBadge';

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
  return (
    <div className="flex flex-wrap gap-3 pt-6">
      <StatusBadge label="ACTIVE" count={activeProjects} color="primary" />

      <StatusBadge
        label="IN VALIDATION"
        count={validationIdeas}
        color="secondary"
      />

      <StatusBadge label="ARCHIVED" count={archivedProjects} color="tertiary" />
    </div>
  );
};

export default HeroStatusBadges;
