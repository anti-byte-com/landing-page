import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div
    className={`bg-surface-container-low hover:bg-surface-container-high rounded-lg p-6 md:p-8 ${className}`}
  >
    {children}
  </div>
);

export default Card;
