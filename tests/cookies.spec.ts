import { test, expect } from '@playwright/test';

test('Página /cookies deve carregar corretamente com header e footer', async ({ page }) => {
  await page.goto('/cookies');

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

  // Scroll até o navbar para garantir que ele está visível
  await page.evaluate(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  await page.waitForTimeout(500);

  // Verificar Navbar - link "About"
  await expect(page.locator('nav a[href="/about"]')).toBeVisible({ timeout: 10000 });
  await expect(page.locator('nav a[href="/about"]')).toHaveText('About');

  // Verificar Footer
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.locator('footer h2')).toHaveText('Anti-Byte');

  // Verificar título da página
  await expect(page.locator('h1')).toHaveText('Cookie Policy');
});
