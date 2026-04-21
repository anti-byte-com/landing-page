import React from 'react';

const HeroCTALinks: React.FC = () => {
  return (
    <>
      <a
        href="#projects"
        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary font-semibold rounded-lg hover:bg-gradient-to-r from-primary to-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-4 focus:ring-offset-surface w-full hover:shadow-[0_8px_32px_rgba(61,74,117,0.15)] hover:shadow-primary/10"
      >
        View Projects →
      </a>

      <div className="pt-2">
        <a
          href="#method"
          className="inline-flex items-center text-sm font-semibold text-secondary hover:text-secondary-focus transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50 rounded"
        >
          Our Philosophy ↓
        </a>
      </div>
    </>
  );
};

export default HeroCTALinks;
