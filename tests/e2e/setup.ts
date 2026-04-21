// Setup para testes E2E do Playwright
// Este arquivo é carregado automaticamente pelo Playwright

import { test } from '@playwright/test';

// Inicialização de i18n para testes
if (typeof window !== 'undefined') {
  // Configura localStorage padrão para testes
  const localStorageMock: Partial<Storage> = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
  };

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });

  Object.defineProperty(window, 'sessionStorage', {
    value: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
    },
    writable: true,
  });

  // Configura document.cookie para testes
  Object.defineProperty(document, 'cookie', {
    get: () => '',
    configurable: true,
  });
}
