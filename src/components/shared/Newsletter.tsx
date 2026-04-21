import React from 'react';
import MetricItem from './Newsletter.Metrics';

const NewsletterForm: React.FC = () => {
  return (
    <div className="space-y-6 bg-surface-container-low p-6 rounded-lg">
      <h3 className="font-display font-semibold text-lg">Stay Updated</h3>
      <p className="text-sm text-on-surface-variant/80">
        Follow our experiments and learnings.
      </p>

      <form
        className="flex flex-col sm:flex-col gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 bg-surface-container-lowest rounded-lg border-none outline-none focus:ring-2 focus:ring-surface-tint text-sm placeholder:text-on-surface-variant/60 focus:ring-1 focus:ring-surface-tint/30 ghost-border"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-on-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-surface hover:shadow-[0_8px_32px_rgba(61,74,117,0.15)] hover:shadow-primary/10"
        >
          Subscribe →
        </button>
      </form>

      {/* Metrics - Grid 4 columns  lg:grid-cols-4 gap-6 p-8 rounded-xl bg-surface-container-lowest */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <MetricItem label="Projects Active" value="8" />
        <MetricItem label="MVPs Tested" value="50+" />
        <MetricItem label="Customer-led" value="92%" />
        <MetricItem label="Validation Cycle" value="7-day" />
      </div>
    </div>
  );
};

export default NewsletterForm;
