import React from 'react';
import { useTranslation } from 'react-i18next';
import MetricItem from './Newsletter.Metrics';

const NewsletterForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 bg-surface-container-low p-6 rounded-lg">
      <h3 className="font-display font-semibold text-lg">
        {t('newsletter.label')}
      </h3>
      <p className="text-sm text-on-surface-variant/80">
        {t('newsletter.title')}
      </p>

      <form
        className="flex flex-col sm:flex-col gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder={t('newsletter.placeholder')}
          className="flex-1 px-4 py-3 bg-surface-container-lowest rounded-lg border-none outline-none focus:ring-2 focus:ring-surface-tint text-sm placeholder:text-on-surface-variant/60 focus:ring-1 focus:ring-surface-tint/30 ghost-border"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-on-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-surface hover:shadow-[0_8px_32px_rgba(61,74,117,0.15)] hover:shadow-primary/10"
        >
          {t('newsletter.button')}
        </button>
      </form>

      {/* Metrics - Grid 4 columns  lg:grid-cols-4 gap-6 p-8 rounded-xl bg-surface-container-lowest */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <MetricItem label={t('stats.heroStats.projects')} value="8" />
        <MetricItem label={t('stats.heroStats.mvps')} value="50+" />
        <MetricItem label={t('stats.heroStats.data')} value="92%" />
        <MetricItem label={t('stats.heroStats.cycle')} value="7 dias" />
      </div>
    </div>
  );
};

export default NewsletterForm;
