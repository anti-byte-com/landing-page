import { test, expect } from '@playwright/test';

test('homepage loads without error messages', async ({ page }) => {
  const errors: string[] = [];

  // Registrar listeners ANTES do goto
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  page.on('pageerror', error => {
    errors.push(error.message);
  });

  await page.goto('/');

  // aguarda estabilizar renderizações async
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);

  expect(errors).toEqual([]);
});
