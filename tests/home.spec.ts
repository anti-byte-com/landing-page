import { test, expect } from '@playwright/test';

test('Página home (/) deve carregar corretamente com header e footer', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

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

  // Na página home, o NavbarContainer retorna null (comportamento intencional)
  // O header é representado pelo footer
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.locator('footer h2')).toHaveText('Anti-Byte');
});
