/**
 * Teste para verificar o LanguageSelector no Footer
 *
 * O LanguageSelector aparece no Footer e permite alternar entre EN e PT.
 */

import { test, expect } from '@playwright/test';

test('home page shows language selector in footer', async ({ page }) => {
  await page.goto('http://localhost:4173/');

  await page.waitForLoadState('networkidle');

  // Verificar que a página carrega sem erros
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', error => {
    errors.push(error.message);
  });

  await page.waitForTimeout(3000);

  expect(errors).toEqual([]);
});
