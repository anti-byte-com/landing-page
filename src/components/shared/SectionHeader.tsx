import React from 'react';

interface SectionHeaderProps {
  label?: string;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title }) => (
  <div className="mb-6">
    {label && (
      <span className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2 w-2/4 bg-surface-container-lowest/10 rounded-full">
        {label}
      </span>
    )}
    <h2 className="text-xl md:text-2xl font-display font-semibold leading-tight">
      {title}
    </h2>
  </div>
);

export default SectionHeader;
