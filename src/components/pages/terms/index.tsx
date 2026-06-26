import React from 'react';
import SharedHeader, { HeaderBreadcrumb } from '@/components/shared/Header';
import MetaTag from '@/components/sections/MetaTag';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import SharedFooter from '@/components/shared/Footer';
import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import { COMPANY_NAME } from '@/config/constants';
import { useTranslation } from 'react-i18next';

const TermsOfService: React.FC = () => {
  const { t } = useTranslation();

  useScrollToTop();

  const breadcrumbs: HeaderBreadcrumb[] = [
    { label: t('footer.nav.company'), href: '/about' },
    { label: t('legalPage.termsOfService') },
  ];

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = `${COMPANY_NAME} - ${t('legalPage.termsOfService')}`;
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.title = '';
      }
    };
  }, [t]);

  const renderBody = (key: string) => {
    const body = t(`pages.terms.sections.${key}.body`, {
      returnObjects: true,
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
    const items = t(`pages.terms.sections.${key}.${itemsKey}`, {
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
      <MetaTag title={t('legalPage.termsOfService')} />
      <SharedHeader
        logoText={COMPANY_NAME}
        navigationLinks={[{ label: t('common.backToHome'), href: '/' }]}
        breadcrumbs={breadcrumbs}
        pageTitle={t('legalPage.termsOfService')}
        pageDescription={t('pages.terms.description')}
      />

      <main className="flex-1 py-16 md:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm text-secondary/80 mb-12">
            {t('pages.terms.updatedNote')}
          </p>

          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-16">
            {t('pages.terms.intro')}
          </p>

          <article className="flex flex-col gap-12">
            {/* 1. Aceitação dos Termos */}
            <section className="flex flex-col gap-4">
              <SectionHeader
                title={t('pages.terms.sections.acceptance.title')}
              />
              {renderBody('acceptance')}
            </section>

            {/* 2. Descrição dos Serviços */}
            <section className="flex flex-col gap-4">
              <SectionHeader title={t('pages.terms.sections.services.title')} />
              {renderBody('services')}
            </section>

            {/* 3. Uso Permitido — intro + É proibido + lista */}
            <section className="flex flex-col gap-4">
              <SectionHeader
                title={t('pages.terms.sections.permittedUse.title')}
              />
              <p className="text-base text-on-surface-variant leading-relaxed">
                {t('pages.terms.sections.permittedUse.body')}
              </p>
              <p className="text-base text-on-surface-variant leading-relaxed">
                {t('pages.terms.sections.permittedUse.prohibitedLead')}
              </p>
              {renderList('permittedUse', 'prohibitedItems')}
            </section>

            {/* 4. Contas de Usuário */}
            <section className="flex flex-col gap-4">
              <SectionHeader title={t('pages.terms.sections.accounts.title')} />
              {renderBody('accounts')}
            </section>

            {/* 5. Propriedade Intelectual */}
            <section className="flex flex-col gap-4">
              <SectionHeader
                title={t('pages.terms.sections.intellectualProperty.title')}
              />
              {renderBody('intellectualProperty')}
            </section>

            {/* 6. Disponibilidade dos Serviços */}
            <section className="flex flex-col gap-4">
              <SectionHeader
                title={t('pages.terms.sections.availability.title')}
              />
              {renderBody('availability')}
            </section>

            {/* 7. Limitação de Responsabilidade — intro + lead + lista */}
            <section className="flex flex-col gap-4">
              <SectionHeader
                title={t('pages.terms.sections.liability.title')}
              />
              <p className="text-base text-on-surface-variant leading-relaxed">
                {t('pages.terms.sections.liability.body')}
              </p>
              <p className="text-base text-on-surface-variant leading-relaxed">
                {t('pages.terms.sections.liability.liabilityLead')}
              </p>
              {renderList('liability', 'liabilityItems')}
            </section>

            {/* 8. Aplicativos Distribuídos por Lojas de Aplicativos */}
            <section className="flex flex-col gap-4">
              <SectionHeader
                title={t('pages.terms.sections.appStores.title')}
              />
              {renderBody('appStores')}
            </section>

            {/* 9. Suspensão e Encerramento */}
            <section className="flex flex-col gap-4">
              <SectionHeader
                title={t('pages.terms.sections.suspension.title')}
              />
              {renderBody('suspension')}
            </section>

            {/* 10. Alterações dos Termos */}
            <section className="flex flex-col gap-4">
              <SectionHeader title={t('pages.terms.sections.changes.title')} />
              {renderBody('changes')}
            </section>

            {/* 11. Legislação Aplicável */}
            <section className="flex flex-col gap-4">
              <SectionHeader
                title={t('pages.terms.sections.governingLaw.title')}
              />
              {renderBody('governingLaw')}
            </section>

            {/* 12. Contato */}
            <section className="flex flex-col gap-4">
              <SectionHeader title={t('pages.terms.sections.contact.title')} />
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

export default TermsOfService;
