import React from 'react';
import SharedContainer from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import Card from '@/components/shared/Card';
import { companyMission, teamMembersTranslation } from '@/data/about-us';
import { missionBeliefs } from '@/data/mission-beliefs';
import { useTranslation } from 'react-i18next';

const AboutUsMission: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SharedContainer>
      <div className="space-y-12">
        {/* Mission Header */}
        <SectionHeader
          label={t(companyMission.label)}
          title={t(companyMission.title)}
        />

        {/* Mission Description */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-lg text-on-surface-variant leading-relaxed">
            {t(companyMission.description)}
          </p>
        </div>

        {/* Core Beliefs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {missionBeliefs.map((belief, index) => (
            <Card
              key={belief.id}
              className={`relative overflow-hidden bg-surface-container-low ${index % 2 === 1 ? 'hover:bg-surface-container-high' : ''}`}
            >
              <div className="space-y-3 p-4">
                <div className="inline-flex items-center space-x-2 w-fit">
                  <span className="p-1 bg-primary/10 rounded-full">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                    {t(belief.titleKey)}
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant/80 leading-relaxed">
                  {t(belief.descriptionKey)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SharedContainer>
  );
};

export default AboutUsMission;
