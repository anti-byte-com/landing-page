import React from 'react';

type MetricItemProps = {
  label: string;
  value: string;
};

const MetricItem: React.FC<MetricItemProps> = ({ label, value }) => (
  <div className="flex flex-row items-start space-x-4 w-full hover:bg-surface-container-lowest/50 transition-colors p-4 rounded-lg">
    <div className="flex flex-col items-start flex-1">
      <span className="text-2xl font-display font-bold text-primary mb-1">
        {value}
      </span>
      <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant/60">
        {label}
      </span>
    </div>
  </div>
);

export default MetricItem;
