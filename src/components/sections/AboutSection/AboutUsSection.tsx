import React from 'react';
import { useTranslation } from 'react-i18next';
import SharedContainer from '@/components/shared/Container';
import AboutUsMission from './AboutUs.Mission';
import AboutUsTeams from './AboutUs.Teams';
import AboutUsHistory from './AboutUs.History';
import AboutUsValues from './AboutUs.Values';
import AboutUsContact from './AboutUs.Contact';

type Tab = 'mission' | 'teams' | 'history' | 'values' | 'contact';

interface AboutLayoutProps {
  isSpa: boolean;
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ isSpa }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = React.useState<Tab>('mission');

  if (isSpa) {
    return (
      <section className="min-h-screen py-24 bg-surface">
        <SharedContainer>
          {/* Navigation Tabs */}
          <nav className="flex flex-wrap gap-2 mb-12 justify-center p-2 bg-surface-container rounded-xl">
            <TabButton
              label={t('about.tabs.mission')}
              value="mission"
              active={activeTab === 'mission'}
              onClick={() => setActiveTab('mission')}
            />
            <TabButton
              label={t('about.tabs.teams')}
              value="teams"
              active={activeTab === 'teams'}
              onClick={() => setActiveTab('teams')}
            />
            <TabButton
              label={t('about.tabs.history')}
              value="history"
              active={activeTab === 'history'}
              onClick={() => setActiveTab('history')}
            />
            <TabButton
              label={t('about.tabs.values')}
              value="values"
              active={activeTab === 'values'}
              onClick={() => setActiveTab('values')}
            />
            <TabButton
              label={t('about.tabs.contact')}
              value="contact"
              active={activeTab === 'contact'}
              onClick={() => setActiveTab('contact')}
            />
          </nav>

          {/* Content */}
          <div className="animate-fade-in">
            {activeTab === 'mission' && <AboutUsMission />}
            {activeTab === 'teams' && <AboutUsTeams />}
            {activeTab === 'history' && <AboutUsHistory />}
            {activeTab === 'values' && <AboutUsValues />}
            {activeTab === 'contact' && <AboutUsContact />}
          </div>
        </SharedContainer>

        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-container/5 via-transparent to-primary/3 -z-10" />
      </section>
    );
  }

  return (
    <section className="py-24 px-6 md:px-8 bg-surface">
      <SharedContainer>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="p-1 px-4 block text-xs font-bold uppercase tracking-wider text-secondary mb-2 w-fit bg-surface-container-lowest/10 rounded-full">
            {t('about.title')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            {t('about.title')}
          </h2>
        </div>

        {/* Content - Always show mission first */}
        <AboutUsMission />

        {/* Teams */}
        <AboutUsTeams />

        {/* History */}
        <AboutUsHistory />

        {/* Values */}
        <AboutUsValues />

        {/* Contact */}
        <AboutUsContact />
      </SharedContainer>
    </section>
  );
};

interface TabButtonProps {
  label: string;
  value: Tab;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  value,
  active,
  onClick,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _value = value;

  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${
        active
          ? 'bg-surface-container-lowest text-primary shadow-lg'
          : 'text-on-surface-variant/60 hover:text-secondary hover:bg-surface-container-lowest'
      }`}
    >
      {label}
    </button>
  );
};

export default AboutLayout;
