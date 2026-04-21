import { test, expect } from '@playwright/test';

test('Página /projects redireciona para /projects/current', async ({ page }) => {
  await page.goto('/projects');

  await page.waitForLoadState('networkidle');

  // Aguardar o redirecionamento e verificar a nova página
  await page.waitForTimeout(1000);

  // Verificar que o redirecionamento ocorreu (URL deve ser /projects/current)
  await expect(page).toHaveURL('/projects/current');

  // Verificar que a página carrega sem erros
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', error => {
    errors.push(error.message);
  });

  await page.waitForTimeout(1000);

  expect(errors).toEqual([]);

  // Verificar Navbar
  await expect(page.locator('nav')).toBeVisible();

  // Verificar título da página
  await expect(page.locator('h1')).toHaveText('Current Projects');
});
