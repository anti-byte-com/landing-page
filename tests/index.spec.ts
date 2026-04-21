import { test, expect } from '@playwright/test';

test('homepage loads without error messages', async ({ page }) => {
  await page.goto('http://localhost:4173');

  const errors: string[] = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  page.on('pageerror', error => {
    errors.push(error.message);
  });

  await page.reload({ waitUntil: 'networkidle' });

  await page.waitForTimeout(3000);

  expect(errors).toEqual([]);
});
