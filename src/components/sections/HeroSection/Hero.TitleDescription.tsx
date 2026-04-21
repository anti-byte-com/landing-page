import React from 'react';

const HeroTitleDescription: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-on-surface">
        Building & Validating{' '}
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Multiple Products
        </span>
      </h1>

      <p className="text-lg md:text-xl text-on-surface-variant max-w-xl">
        Lean Startup Studio — We rapidly validate ideas, scale what works, and
        iterate continuously.
      </p>

      <p className="text-base text-on-surface-variant/80 max-w-xl">
        We don't build single products. We experiment with multiple digital
        products simultaneously to find market fit through speed, validation,
        and data-driven decisions.
      </p>
    </>
  );
};

export default HeroTitleDescription;
