import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SharedNavbarProps {
  showLogo?: boolean;
  navLinks?: Array<{ label: string; to?: string; href?: string }>;
  ctaText?: string;
  ctaUrl?: string;
}

const NavbarContainer: React.FC<SharedNavbarProps> = ({
  showLogo = true,
  navLinks = [],
  ctaText = 'Contact Us',
  ctaUrl = 'mailto:hello@anti-byte.com',
}) => {
  const { t } = useTranslation();
  const location = useLocation();

  // Navbar aparece apenas em páginas exceto home (/)
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    document.title = document.title.replace(/ \/$/, '');
  }, [location.pathname]);

  if (isHomePage) return null;

  return (
    <nav role="navigation" className="fixed top-4 left-0 right-0 z-50">
      {/* Glassmorphic backdrop */}
      <div className="bg-surface-bright/60 backdrop-blur-xl border-y border-surface-tint/10 rounded-2xl shadow-lg shadow-surface-container/50">
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Left Section - Logo + Nav Links */}
          <div className="flex items-center space-x-3 md:space-x-6">
            {showLogo && <NavbarLogo />}

            {/* Navigation Links */}
            {navLinks.length > 0 && <NavbarNavList navLinks={navLinks} />}
          </div>

          {/* Right Section - CTA Button */}
          {ctaText && ctaUrl && (
            <a
              href={ctaUrl}
              className="group inline-flex items-center justify-center px-4 py-2 text-sm font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
            >
              <span className="mr-2">{ctaText}</span>
              <svg
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-8px] group-hover:translate-x-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

/**
 * Navbar.Logo - Branding element
 */
const NavbarLogo: React.FC = () => (
  <Link to="/" className="group flex items-center space-x-2">
    {/* Logo text with gradient */}
    <span className="text-lg font-display font-bold text-on-surface group-hover:text-primary-gradient transition-colors bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      Anti-Byte
    </span>
    <span className="text-sm text-on-surface-variant/60 group-hover:text-secondary transition-colors">
      Studio
    </span>
  </Link>
);

/**
 * Navbar.NavList - Container para links de navegação
 */
interface NavbarNavListProps {
  navLinks: Array<{ label: string; to?: string; href?: string }>;
}

const NavbarNavList: React.FC<NavbarNavListProps> = ({ navLinks }) => (
  <ul className="flex items-center space-x-3 md:space-x-6">
    {navLinks.map((link) => (
      <li key={link.label}>
        {link.to ? (
          <Link
            to={link.to}
            className="text-sm text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-0 focus-visible:ring-1 focus-visible:ring-surface-tint/30 rounded px-2 py-1"
          >
            {link.label}
          </Link>
        ) : (
          <a
            href={link.href || '#'}
            className="text-sm text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-0 focus-visible:ring-1 focus-visible:ring-surface-tint/30 rounded px-2 py-1"
          >
            {link.label}
          </a>
        )}
      </li>
    ))}
  </ul>
);

export default NavbarContainer;
export { NavbarLogo, NavbarNavList };
