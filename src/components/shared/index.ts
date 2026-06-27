/**
 * Shared Components Export
 * Universal components used across all pages (Home, About, etc.)
 */

// Universal components (mantém apenas componentes universais)
export { default as Container } from './Container';
export { default as Navbar } from './Navbar';
export { default as NavbarContainer } from './NavbarContainer';
export { default as Footer } from './Footer';
export { default as Header, type HeaderProps, type HeaderLink, type HeaderBreadcrumb } from './Header';

// Newsletter components
export { default as Newsletter } from './Newsletter';
export { default as Metrics } from './Newsletter.Metrics';

// Atoms estão em /atoms/ - re-exportam de aqui se necessário
export { default as Card } from './Card';
export { default as SectionHeader } from './SectionHeader';
export { default as StatusBadge } from './StatusBadge';
export { default as Section } from './Section';
export { default as TabButton } from './TabButton';
export { default as LanguageSelector } from './LanguageSelector/index';
