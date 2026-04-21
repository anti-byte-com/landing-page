import { test, expect } from '@playwright/test';

test('Página /privacy deve carregar corretamente com header e footer', async ({ page }) => {
  await page.goto('/privacy');

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

  // Inspecionar navbar
  const navbar = page.locator('nav');
  await navbar.waitFor({ state: 'visible' });
  console.log('Navbar encontrado', await navbar.textContent());

  // Verificar Navbar usando seletor baseado no texto do link
  await expect(page.locator('nav ul li a:has-text("About")')).toBeVisible();

  // Inspecionar footer
  const footer = page.locator('footer');
  console.log('Footer encontrado', await footer.count());
  console.log('Footer textContent', await footer.textContent());

  // Verificar Footer
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.locator('footer h2')).toHaveText('Anti-Byte');

  // Verificar título da página
  await expect(page.locator('h1')).toHaveText('Privacy Policy');
});
