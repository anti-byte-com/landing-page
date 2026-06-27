import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NewsletterForm from './Newsletter';
import SocialLink from './Newsletter.SocialLink';
import { LanguageSelector } from './LanguageSelector/index';

const BrandDescription: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <p className="text-sm text-on-surface-variant/80 leading-relaxed max-w-sm">
        {t('footer.brandDescription')}
      </p>

      {/* Social Links */}
      <div className="flex items-center space-x-3 pt-2">
        <SocialLink platform="twitter" />
        <SocialLink platform="github" />
        <SocialLink platform="linkedin" />
      </div>
    </div>
  );
};

const FooterHeader: React.FC = () => { 
  const { t } = useTranslation();
  return (
  <h2 className="text-2xl font-display font-bold leading-tight">
    {t('company.name')}
  </h2>
  );
};

const NavigationLinks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-on-surface mb-4">
          {t('footer.nav.projects')}
        </h3>
        <ul className="space-y-2">
          <li>
            <Link
              to="/projects/current"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              {t('nav.currentProjects')}
            </Link>
          </li>
          <li>
            <Link
              to="/cases/archived"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              {t('nav.archivedCaseStudies')}
            </Link>
          </li>
          {/* <li>
            <Link
              to="/blog"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              {t('nav.blog')}
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              {t('nav.resources')}
            </Link>
          </li> */}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-on-surface mb-4">
          {t('footer.nav.company')}
        </h3>
        <ul className="space-y-2">
          <li>
            <Link
              to="/about"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              {t('nav.about')}
            </Link>
          </li>
          {/* <li>
            <Link
              to="/our-approach"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              {t('nav.ourApproach')}
            </Link>
          </li> */}
          <li>
            <Link
              to="/contact"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              {t('nav.contact')}
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-on-surface mb-4">
          {t('footer.nav.legal')}
        </h3>
        <ul className="space-y-2">
          <li>
            <Link
              to="/privacy"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              {t('common.privacy')}
            </Link>
          </li>
          <li>
            <Link
              to="/terms"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              {t('common.terms')}
            </Link>
          </li>
          <li>
            <Link
              to="/cookies"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              {t('common.cookies')}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const BottomSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-12">
      {/* Copyright */}
      <p className="text-xs text-on-surface-variant/60 text-center md:text-left">
        © {new Date().getFullYear()} {t('footer.company')}. {t('footer.experimenting')}
      </p>

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center gap-6">
        <Link
          to="/privacy"
          className="text-xs font-semibold text-secondary hover:text-primary transition-colors"
        >
          {t('common.privacy')}
        </Link>
        <Link
          to="/terms"
          className="text-xs font-semibold text-secondary hover:text-primary transition-colors"
        >
          {t('common.terms')}
        </Link>
        <Link
          to="/cookies"
          className="text-xs font-semibold text-secondary hover:text-primary transition-colors"
        >
          {t('common.cookies')}
        </Link>
      </div>
    </div>
  );
};

const SharedFooter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-surface-container py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Section with Brand, Links and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Brand and Description */}
          <div className="flex flex-col space-y-4">
            <FooterHeader />
            <BrandDescription />
          </div>

          {/* Navigation Links */}
          <div>
            <NavigationLinks />
          </div>

          {/* Newsletter Section */}
          <NewsletterForm />
          <LanguageSelector />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-12 border-t border-surface-tint/30">
          {/* Copyright */}
          <p className="text-xs text-on-surface-variant/60 text-center md:text-left">
            {t('footer.copyright')}
          </p>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/privacy"
              className="text-xs font-semibold text-secondary hover:text-primary transition-colors"
            >
              {t('common.privacy')}
            </Link>
            <Link
              to="/terms"
              className="text-xs font-semibold text-secondary hover:text-primary transition-colors"
            >
              {t('common.terms')}
            </Link>
            <Link
              to="/cookies"
              className="text-xs font-semibold text-secondary hover:text-primary transition-colors"
            >
              {t('common.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SharedFooter;
