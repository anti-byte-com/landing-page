import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '' }) => (
  <section className={`py-24 px-6 md:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

export default Section;
