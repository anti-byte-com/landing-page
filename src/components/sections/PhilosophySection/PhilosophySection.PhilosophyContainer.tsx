import React from 'react';

const PhilosophyContainer: React.FC = () => {
  return (
    <div className="bg-surface-container-low hover:bg-surface-container-low/50 rounded-2xl p-8 md:p-12">
      {/* Main Description */}
      <div className="space-y-6 max-w-3xl">
        <p className="text-lg text-on-surface-variant leading-relaxed">
          We are not a product studio that bets big and prays for the best. We
          run experiments, learn quickly from data, and double down on what
          works.
        </p>

        <p className="text-base text-on-surface-variant/80 leading-relaxed">
          Every project is an experiment with a clear hypothesis, measurable
          outcomes, and predetermined success criteria. We kill ideas before
          they drain resources, and scale the ones that prove their worth in the
          market.
        </p>
      </div>
    </div>
  );
};

export default PhilosophyContainer;
