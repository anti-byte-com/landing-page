import React from 'react';

export interface MethodStep {
  number: number;
  label: string;
  title: string;
  description: string;
}

interface MethodCardItemProps {
  step: MethodStep;
}

const MethodCardItem: React.FC<MethodCardItemProps> = ({ step }) => (
  <>
    {/* Step Number Badge */}
    <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary text-on-primary rounded-lg flex items-center justify-center font-bold text-sm outline-offset-2 focus-within:ring-1 focus-within:ring-surface-tint/30">
      {step.number}
    </div>

    {/* Label */}
    <span className="inline-block px-3 py-1 bg-surface-container-lowest rounded-full text-xs font-bold uppercase tracking-wider text-secondary mt-1 mb-3">
      {step.label}
    </span>

    {/* Title */}
    <h3 className="text-xl font-display font-semibold mb-3 leading-tight">
      {step.title}
    </h3>

    {/* Description */}
    <p className="text-sm text-on-surface-variant/80 leading-relaxed">
      {step.description}
    </p>
  </>
);

export default MethodCardItem;
