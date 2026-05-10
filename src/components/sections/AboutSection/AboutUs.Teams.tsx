import React from 'react';
import SharedContainer from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import Card from '@/components/shared/Card';
import { teamMembersTranslation, teamMembers } from '@/data/about-us';
import { useTranslation } from 'react-i18next';

const AboutUsTeams: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SharedContainer>
      <div className="space-y-12">
        {/* Teams Header */}
        <SectionHeader
          label={t(teamMembersTranslation.label)}
          title={t(teamMembersTranslation.title)}
        />

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className={`relative overflow-hidden bg-surface-container-low ${index % 2 === 1 ? 'hover:bg-surface-container-high' : ''}`}
            >
              <div className="space-y-4 p-6">
                {/* Header with Name and Role */}
                <div>
                  <h3 className="text-xl font-display font-bold text-on-surface">
                    {t(member.name)}
                  </h3>
                  <p className="text-sm text-secondary">{t(member.role)}</p>
                </div>

                {/* Bio */}
                <p className="text-sm text-on-surface-variant/80 leading-relaxed">
                  {t(member.bio)}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {member.expertise.map((expertise, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-surface-container-highest rounded-full text-xs font-semibold uppercase tracking-wider text-on-surface-variant/70"
                    >
                      {t(expertise)}
                    </span>
                  ))}
                </div>

                {/* Decorative accent gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SharedContainer>
  );
};

export default AboutUsTeams;
