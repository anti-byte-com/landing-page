import React from 'react';
import { useTranslation } from 'react-i18next';

export interface HeaderLink {
  label: string;
  href: string;
}

export type HeaderBreadcrumb = {
  label: string;
  href?: string;
};

export interface HeaderProps {
  logoText: string;
  logoIcon?: React.ReactNode;
  navigationLinks: HeaderLink[];
  breadcrumbs: HeaderBreadcrumb[];
  pageTitle: string;
  pageDescription?: string;
}

const Header: React.FC<HeaderProps> = ({
  logoText,
  logoIcon = null,
  navigationLinks,
  breadcrumbs,
  pageTitle,
  pageDescription = '',
}) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Mobile menu links (sem Sign In e Solutions)
  const mobileMenuLinks = navigationLinks.slice(0, -1).map((link, index) => ({
    ...link,
    href: link.href || `/#${index}`,
  }));

  return (
    <header className="relative w-full bg-gradient-to-b from-surface-container to-surface">
      {/* Glow effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80%] h-64 opacity-20 blur-3xl bg-gradient-to-b from-primary via-secondary to-transparent rounded-full" />
      </div>

      {/* Top Navigation */}
      <nav className="relative z-10 max-w-[1600px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Glow line on top - subtle ambient light */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent opacity-50" />

          {/* Logo - Aligned Left */}
          <a
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-lg px-1"
          >
            {logoIcon && (
              <span className="shrink-0">
                {logoIcon}
              </span>
            )}
            <span className="text-[15px] md:text-2xl font-display font-semibold text-on-surface group-hover:text-primary transition-colors tracking-tight">
              {logoText}
            </span>
          </a>

          {/* Desktop Navigation Links - Aligned Right */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4 md:gap-8">
              {navigationLinks.map((link, idx) => (
                <li key={`${link.label}-${idx}`}>
                  <a
                    href={link.href || '#'}
                    className="text-[13px] md:text-[14px] font-medium text-secondary/80 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded px-1 py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-on-surface/70 hover:text-on-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={t('header.toggleMenu')}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Dropdown */}
        {isMenuOpen && (
          <div className="py-4 border-t border-surface-tint/10 animate-in duration-200">
            <ul className="space-y-3 pl-1">
              {mobileMenuLinks.map((link, index) => (
                <li key={`${link.label}-${index}`}>
                  <a
                    href={link.href || '#'}
                    className="block text-[14px] font-medium text-secondary hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded px-2 py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Content Area */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="pt-6 pb-12 md:pt-10 md:pb-16">
          {/* Breadcrumb / Path */}
          {breadcrumbs.length > 0 && (
            <nav aria-label={t('header.breadcrumb')} className="mb-6 overflow-x-auto">
              <ol className="flex items-center gap-2 text-[14px] text-on-surface/60">
                <li>
                  <a
                    href="/"
                    className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded px-1 py-0.5"
                  >
                    {t('header.home')}
                  </a>
                </li>

                {breadcrumbs.map((crumb) => (
                  <React.Fragment key={crumb.label}>
                    <li className="flex items-center gap-1">
                      <span className="text-on-surface/40">&rarr;</span>
                      {crumb.href ? (
                        <a
                          href={crumb.href}
                          className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded px-1 py-0.5"
                        >
                          {crumb.label}
                        </a>
                      ) : (
                        <span className="text-on-surface/60">
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  </React.Fragment>
                ))}
              </ol>
            </nav>
          )}

          {/* Page Title */}
          <h1 className="text-5xl md:text-[64px] lg:text-[72px] font-display font-bold text-on-surface leading-tight tracking-tight">
            {pageTitle}
          </h1>

          {/* Page Description */}
          {pageDescription && (
            <p
              className="max-w-[620px] mt-5 text-[20px] md:text-[21px] text-on-surface/70 leading-relaxed"
              style={{ maxWidth: '620px' }}
            >
              {pageDescription}
            </p>
          )}
        </div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[60%] h-80 opacity-10 blur-3xl bg-gradient-to-t from-primary via-secondary to-transparent rounded-full" />
      </div>
    </header>
  );
};

export default Header;
