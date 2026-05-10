import { test, expect } from '@playwright/test';

test('Página /blog deve carregar corretamente com header e footer', async ({ page }) => {
  await page.goto('/blog', { waitUntil: 'networkidle' });

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

  // Verificar Navbar - o nav está dentro de um container com backdrop
  // A página /blog tem navbar com link "About"
  const nav = page.getByRole('navigation').filter({ has: page.getByText('About') });
  await nav.waitFor({ state: 'attached' });
  await expect(nav).toBeVisible();

  // Verificar Footer - scroll para o footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.locator('footer h2')).toHaveText('Anti-Byte');

  // Verificar título da página
  await expect(page.locator('h1')).toHaveText('Blog');
});
