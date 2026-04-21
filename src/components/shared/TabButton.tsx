import React from 'react';

interface TabButtonProps {
  label: string;
  value: string;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  value,
  active,
  onClick,
}) => {
  const _value = value; // eslint-disable-line @typescript-eslint/no-unused-vars

  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 rounded-md text-sm font-semibold uppercase tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${
        active
          ? 'bg-surface-container-lowest text-primary'
          : 'text-on-surface-variant/60 hover:text-secondary hover:bg-surface-container-lowest'
      }`}
    >
      {label}
    </button>
  );
};

export default TabButton;
