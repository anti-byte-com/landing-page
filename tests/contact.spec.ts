import { test, expect } from '@playwright/test';

test('Página /contact deve carregar corretamente com header e footer', async ({ page }) => {
  await page.goto('/contact', { waitUntil: 'networkidle' });

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

  // Scrollar para o topo para garantir que a navbar fixa esteja visível
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  // Verificar Navbar (esperando o React renderizar)
  const nav = page.getByRole('navigation');
  await nav.waitFor({ state: 'attached' });
  await expect(nav).toBeVisible();

  // Esperar que o footer seja renderizado
  const footer = page.locator('footer');
  await footer.waitFor({ state: 'attached' });

  // Scrollar para o rodapé para garantir que o footer esteja visível
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);

  // Verificar Footer
  await expect(footer).toBeVisible();
  await expect(footer.locator('h2')).toHaveText('Anti-Byte');

  // Verificar título da página
  await expect(page.locator('h1')).toHaveText('Contact');
});
