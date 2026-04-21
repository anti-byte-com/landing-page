import React from 'react';
import Card from '@/components/shared/Card';
import MethodCardItem from './MethodSection.MethodCardItem';
import { methodSteps } from '@/data/method-steps';

const MethodCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {methodSteps.map((step, index) => (
        <Card
          key={step.number}
          className={`relative overflow-hidden transition-colors ${
            index % 2 === 0 ? 'zebra-card-alt1' : 'zebra-card-alt2'
          }`}
        >
          <MethodCardItem step={step} />
        </Card>
      ))}
    </div>
  );
};

export default MethodCards;
