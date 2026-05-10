import React from 'react';
import { useTranslation } from 'react-i18next';

interface StatusBadgeProps {
  status?: 'active' | 'validation' | 'growth' | 'archived';
  className?: string;
}

interface StatusConfig {
  color: string;
  label: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status = 'active', className = '' }) => {
  const { t } = useTranslation();

  const statusConfig: Record<StatusBadgeProps['status'], StatusConfig> = {
    active: {
      color: 'bg-green-500/20 text-green-400 border-green-500/30',
      label: t('projects.badge.active'),
    },
    validation: {
      color: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      label: t('projects.badge.validation'),
    },
    growth: {
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      label: t('projects.badge.growth'),
    },
    archived: {
      color: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
      label: t('projects.badge.archived'),
    },
  };

  const config = statusConfig[status];

  if (!config) {
    return null;
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${config.color} ${className}`}
    >
      {config.label}
    </span>
  );
};

export default StatusBadge;
