/**
 * useScrollToTop Hook
 *
 * Hook que rola a página para o topo com comportamento smooth quando a URL muda
 * via React Router.
 *
 * Uso:
 * ```tsx
 * import { useScrollToTop } from '@/hooks/useScrollToTop';
 *
 * function MyLayout() {
 *   useScrollToTop();
 *   return <div>...</div>;
 * }
 * ```
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Verifica se o DOM está disponível (evita hydration issues)
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    // Verifica se o navegador suporta scroll behavior 'smooth'
    const scrollBehaviorSupported =
      'scrollBehavior' in document.documentElement.style;

    // Verifica preferência de acessibilidade do usuário
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Define o comportamento de scroll
    const behavior = prefersReducedMotion
      ? 'auto'
      : scrollBehaviorSupported
        ? 'smooth'
        : 'auto';

    // Rola para o topo
    window.scrollTo({
      top: 0,
      behavior: behavior,
    });
  }, [location.pathname]);
};
