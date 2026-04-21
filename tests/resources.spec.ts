import { test, expect } from '@playwright/test';

test('Página /resources deve carregar corretamente com header e footer', async ({ page }) => {
  await page.goto('/resources');

  await page.waitForLoadState('networkidle');

  // Verificar que a página carrega sem erros
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', error => {
    errors.push(error.message);
  });

  await page.waitForTimeout(5000);

  expect(errors).toEqual([]);

  // Verificar Navbar - link de navegação
  await expect(page.locator('nav a[href="/about"]')).toBeVisible();
  await expect(page.locator('nav a[href="/about"]')).toHaveText('About');

  // Verificar Footer
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.locator('footer h2')).toHaveText('Anti-Byte');

  // Verificar título da página
  await expect(page.locator('h1')).toHaveText('Resources');
});
