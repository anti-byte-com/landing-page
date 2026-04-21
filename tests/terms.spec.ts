import { test, expect } from '@playwright/test';

test('Página /terms deve carregar corretamente com header e footer', async ({ page }) => {
  await page.goto('/terms');

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

  // Verificar Navbar (usando seletor baseado no texto)
  const navLink = page.locator('nav ul a[href="/about"]');
  await expect(navLink).toBeVisible();
  await expect(navLink).toContainText('About');

  // Verificar Footer
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.locator('footer h2')).toHaveText('Anti-Byte');

  // Verificar título da página
  await expect(page.locator('h1')).toHaveText('Terms of Service');
});
