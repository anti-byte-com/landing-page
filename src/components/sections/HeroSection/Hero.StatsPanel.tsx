import React from 'react';
import { useHeroStats } from '@/data/hero-stats';

interface StatsCardProps {
  value: string | number;
  label: string;
  description?: string;
  accentColor?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  value,
  label,
  description,
  accentColor,
}) => {
  return (
    <div
      className="stat-card bg-surface-container-lowest rounded-lg p-8 aspect-square flex flex-col justify-center items-center text-center"
      style={{ borderColor: accentColor }}
    >
      <div className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
        {label}
      </div>
      <div
        className="text-7xl font-display font-bold"
        style={{ color: accentColor }}
      >
        {value}
      </div>
      <div className="text-sm text-on-surface-variant/70 mt-1">
        {description}
      </div>
    </div>
  );
};

const HeroStatsPanel: React.FC = () => {
  const stats = useHeroStats();

  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 bg-surface-container-low p-6 rounded-xl">
      {stats.map((stat) => (
        <StatsCard key={stat.label} {...stat} />
      ))}
    </div>
  );
};

export default HeroStatsPanel;
