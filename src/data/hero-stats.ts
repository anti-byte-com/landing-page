import { useTranslation } from 'react-i18next';

export interface HeroStat {
  value: string;
  labelKey: string;
  descriptionKey: string;
  accentColor: string;
}

export const heroStats: HeroStat[] = [
  {
    value: '8',
    labelKey: 'hero.stats.projects',
    descriptionKey: 'hero.stats.projects',
    accentColor: '#6366f1',
  },
  {
    value: '50+',
    labelKey: 'hero.stats.mvps',
    descriptionKey: 'hero.stats.mvps',
    accentColor: '#8b5cf6',
  },
  {
    value: '92%',
    labelKey: 'hero.stats.data',
    descriptionKey: 'hero.stats.data',
    accentColor: '#ec4899',
  },
  {
    value: '7 dias',
    labelKey: 'hero.stats.cycle',
    descriptionKey: 'hero.stats.cycle',
    accentColor: '#6366f1',
  },
];

export const useHeroStats = () => {
  const { t } = useTranslation();

  return heroStats.map((stat) => ({
    ...stat,
    label: t(stat.labelKey),
    description: t(stat.descriptionKey),
  }));
};

export default heroStats;
