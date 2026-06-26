import { useTranslation } from 'react-i18next';

export interface HeroStat {
  valueKey: string;
  labelKey: string;
  descriptionKey: string;
  accentColor: string;
}

export const heroStats: HeroStat[] = [
  {
    valueKey: 'stats.heroStats.projectsValue',
    labelKey: 'stats.heroStats.projects',
    descriptionKey: 'stats.heroStats.projects',
    accentColor: '#6366f1',
  },
  {
    valueKey: 'stats.heroStats.mvpsValue',
    labelKey: 'stats.heroStats.mvps',
    descriptionKey: 'stats.heroStats.mvps',
    accentColor: '#8b5cf6',
  },
  {
    valueKey: 'stats.heroStats.dataValue',
    labelKey: 'stats.heroStats.data',
    descriptionKey: 'stats.heroStats.data',
    accentColor: '#ec4899',
  },
  {
    valueKey: 'stats.heroStats.cycleValue',
    labelKey: 'stats.heroStats.cycle',
    descriptionKey: 'stats.heroStats.cycle',
    accentColor: '#6366f1',
  },
];

export const useHeroStats = () => {
  const { t } = useTranslation();

  return heroStats.map((stat) => ({
    ...stat,
    value: t(stat.valueKey),
    label: t(stat.labelKey),
    description: t(stat.descriptionKey),
  }));
};

export default heroStats;
