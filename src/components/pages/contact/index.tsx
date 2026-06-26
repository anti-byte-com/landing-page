import React from 'react';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import SharedContainer from '@/components/shared/Container';
import Card from '@/components/shared/Card';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import SharedFooter from '@/components/shared/Footer';
import { COMPANY_NAME } from '@/config/constants';
import { useTranslation } from 'react-i18next';

const contactItems = [
  { key: 'email', icon: 'email', color: 'primary' },
  { key: 'location', icon: 'location', color: 'secondary' },
  { key: 'timezone', icon: 'timezone', color: 'tertiary' },
] as const;

const iconPaths: Record<string, string> = {
  email: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  location: 'M17.657 16.657L13.414 20a1 1 0 01-1.414 0l-4.243-4.243a1 1 0 011.414-1.414l4.243 4.243zm0 0l5.657-5.657',
  timezone: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
};

const colorStyles: Record<string, { bg: string; text: string }> = {
  primary: { bg: 'bg-primary/10', text: 'text-primary' },
  secondary: { bg: 'bg-secondary/10', text: 'text-secondary' },
  tertiary: { bg: 'bg-tertiary/10', text: 'text-tertiary' },
};

const ContactIcon: React.FC<{ icon: string; color: string }> = ({ icon, color }) => {
  const style = colorStyles[color] || colorStyles.primary;

  return (
    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${style.bg}`}>
      <svg className={`w-6 h-6 ${style.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[icon] || iconPaths.email} />
      </svg>
    </div>
  );
};

const Contact: React.FC = () => {
  const { t } = useTranslation();

  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: t('common.backToHome'), href: '/' },
    { label: t('nav.contact') },
  ];

  React.useEffect(() => {
    document.title = `${COMPANY_NAME} - ${t('nav.contact')}`;
    return () => {
      document.title = '';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[
          { label: t('common.backToHome'), href: '/' },
        ]}
        breadcrumbs={breadcrumbs}
        pageTitle={t('nav.contact')}
        pageDescription={t('pages.contact.description')}
      />

      <main className="flex-1">
        <section className="py-20 px-6 md:px-8">
          <SharedContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactItems.map((item) => (
                <Card key={item.key} className="p-6 text-center hover:bg-surface-container-low/50 transition-colors">
                  <div className="space-y-3">
                    <ContactIcon icon={item.icon} color={item.color} />
                    <h3 className="font-display font-semibold text-on-surface">
                      {t(`aboutContact.${item.key}Label`)}
                    </h3>
                    <p className="text-sm text-on-surface-variant/80">
                      {t(`aboutContact.${item.key}`)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </SharedContainer>
        </section>
      </main>

      <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

      <SharedFooter />
    </div>
  );
};

export default Contact;
