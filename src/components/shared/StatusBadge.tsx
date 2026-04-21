import React from 'react';

interface StatusBadgeProps {
  status?: 'active' | 'validation' | 'growth' | 'archived';
}

const statusConfig: Record<
  StatusBadgeProps['status'],
  { color: string; label: string }
> = {
  active: { color: 'bg-green-500/20 text-green-400 border-green-500/30', label: 'Active' },
  validation: { color: 'bg-amber-500/20 text-amber-400 border-amber-500/30', label: 'Validation' },
  growth: { color: 'bg-blue-500/20 text-blue-400 border-blue-500/30', label: 'Growth' },
  archived: { color: 'bg-slate-500/20 text-slate-400 border-slate-500/30', label: 'Archived' },
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status = 'active' }) => {
  const config = statusConfig[status];

  if (!config) {
    return null;
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${config.color}`}>
      {config.label}
    </span>
  );
};

export default StatusBadge;
