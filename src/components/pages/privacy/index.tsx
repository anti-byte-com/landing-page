import React from 'react';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import MetaTag from '@/components/sections/MetaTag';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import SharedFooter from '@/components/shared/Footer';
import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import { COMPANY_NAME } from '@/config/constants';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: t('footer.nav.company'), href: '/about' },
    { label: t('legalPage.privacyPolicy') },
  ];

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = `${COMPANY_NAME} - ${t('legalPage.privacyPolicy')}`;
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.title = '';
      }
    };
  }, [t]);

  const renderBody = (key: string, params?: Record<string, unknown>) => {
    const body = t(`pages.privacy.sections.${key}.body`, {
      returnObjects: true,
      ...params,
    }) as unknown;

    if (Array.isArray(body)) {
      return (body as string[]).map((paragraph, idx) => (
        <p
          key={idx}
          className="text-base text-on-surface-variant leading-relaxed"
        >
          {paragraph}
        </p>
      ));
    }

    return (
      <p className="text-base text-on-surface-variant leading-relaxed">
        {body as string}
      </p>
    );
  };

  const renderList = (key: string, itemsKey: string) => {
    const items = t(`pages.privacy.sections.${key}.${itemsKey}`, {
      returnObjects: true,
    }) as unknown;

    if (!Array.isArray(items)) return null;

    return (
      <ul className="list-disc pl-6 flex flex-col gap-2 text-base text-on-surface-variant leading-relaxed marker:text-secondary">
        {(items as string[]).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <MetaTag title={t('legalPage.privacyPolicy')} />
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[{ label: t('common.backToHome'), href: '/' }]}
        breadcrumbs={breadcrumbs}
        pageTitle={t('legalPage.privacyPolicy')}
        pageDescription={t('pages.privacy.description')}
      />

      <main className="flex-1 py-16 md:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm text-secondary/80 mb-12">
            {t('pages.privacy.updatedNote')}
          </p>

          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-16">
            {t('pages.privacy.intro')}
          </p>

          <article className="flex flex-col gap-12">
            {/* Coleta de Dados — seção especial com listas */}
            <section className="flex flex-col gap-4">
              <SectionHeader
                title={t('pages.privacy.sections.dataCollection.title')}
              />
              <p className="text-base text-on-surface-variant leading-relaxed">
                {t('pages.privacy.sections.dataCollection.body')}
              </p>
              {renderList('dataCollection', 'voluntaryItems')}
              <p className="text-base text-on-surface-variant leading-relaxed">
                {t('pages.privacy.sections.dataCollection.techBody')}
              </p>
              {renderList('dataCollection', 'techItems')}
            </section>

            {/* Finalidade do Tratamento dos Dados */}
            <section className="flex flex-col gap-4">
              <SectionHeader
                title={t('pages.privacy.sections.purpose.title')}
              />
              {renderBody('purpose')}
            </section>

            {/* Compartilhamento de Dados */}
            <section className="flex flex-col gap-4">
              <SectionHeader
                title={t('pages.privacy.sections.sharing.title')}
              />
              {renderBody('sharing')}
            </section>

            {/* Armazenamento e Segurança */}
            <section className="flex flex-col gap-4">
              <SectionHeader
                title={t('pages.privacy.sections.storage.title')}
              />
              {renderBody('storage')}
            </section>

            {/* Direitos do Titular */}
            <section className="flex flex-col gap-4">
              <SectionHeader title={t('pages.privacy.sections.rights.title')} />
              {renderBody('rights')}
            </section>

            {/* Alterações desta Política */}
            <section className="flex flex-col gap-4">
              <SectionHeader
                title={t('pages.privacy.sections.changes.title')}
              />
              {renderBody('changes')}
            </section>

            {/* Contato */}
            <section className="flex flex-col gap-4">
              <SectionHeader
                title={t('pages.privacy.sections.contact.title')}
              />
              {renderBody('contact')}
            </section>
          </article>
        </Container>
      </main>

      <div className="fixed inset-0 bg-gradient-to-br from-surface-container/20 via-surface to-primary/5 -z-10" />

      <SharedFooter className="scroll-mt-24" />
    </div>
  );
};

export default PrivacyPolicy;
