import { test, expect } from '@playwright/test';

test('Página /about deve carregar corretamente com header e footer', async ({ page }) => {
  await page.goto('/about', { waitUntil: 'networkidle' });

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

  // Verificar Navbar (header com logo "Anti-Byte")
  await expect(page.getByRole('navigation').filter({ has: page.getByText('Anti-Byte') })).toBeVisible();
  
  // Verificar Footer
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.locator('footer h2')).toHaveText('Anti-Byte');
});
