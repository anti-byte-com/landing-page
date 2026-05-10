import { test, expect } from '@playwright/test';

test('Página /archived-case-studies deve carregar corretamente com header e footer', async ({ page }) => {
  await page.goto('/cases/archived');

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

  // Verificar Navbar - A página /cases/archived tem navbar com link "Projects"
  const nav = page.getByRole('navigation').filter({ has: page.getByText('Projects') });
  await nav.waitFor({ state: 'attached' });
  await expect(nav).toBeVisible();

  // Verificar Footer - scroll para o footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.locator('footer h2')).toHaveText('Anti-Byte');

  // Verificar título da página
  await expect(page.locator('h1')).toHaveText('Archived Case Studies');
});
