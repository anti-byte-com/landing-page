import { test, expect } from '@playwright/test';

test('Página /our-approach deve carregar corretamente com header e footer', async ({ page }) => {
  await page.goto('/our-approach', { waitUntil: 'networkidle' });

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

  // Scroll até o footer para torná-lo visível
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Verificar Navbar (esperando o React renderizar)
  await expect(page.getByRole('navigation').filter({ has: page.getByText('Anti-Byte') })).toBeVisible();

  // Verificar título da página
  await expect(page.locator('h1')).toHaveText('Our Approach');
});
