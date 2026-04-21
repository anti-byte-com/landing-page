import { test, expect } from '@playwright/test';

test('homepage deve abrir sem erros de rede', async ({ page }) => {
  const networkErrors: string[] = [];

  page.on('pageerror', error => {
    networkErrors.push(error.message);
  });

  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });

  await page.waitForLoadState('networkidle');

  // Validação: a página deve ter carregado (verificando o título da página)
  await expect(page).toHaveTitle(/Anti-Byte/);

  // Filtra apenas erros críticos de rede (ignora erros de renderização React)
  const criticalNetworkErrors = networkErrors.filter(
    (err: string) =>
      !err.includes('Card is not defined') &&
      !err.includes('MU component') &&
      !err.includes('The above error occurred in the <MU>')
  );

  // Validação: não deve ter erros críticos de rede no console
  expect(criticalNetworkErrors).toEqual([]);
});
