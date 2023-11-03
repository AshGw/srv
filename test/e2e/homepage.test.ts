import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('', { exact: true }).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByLabel('Toggle theme').click();
  await page.getByLabel('Toggle theme').click();
  await page.locator('.mx-auto').click();
  await page.getByLabel('Toggle theme').click();
  await page.getByRole('link', { name: 'LOGO' }).first().click();
  await page.getByPlaceholder('Your prompt..').fill('landscape of');
  await page.getByRole('button', { name: 'Generate' }).click();
  await page
    .locator('ul')
    .filter({ hasText: 'Toggle theme' })
    .locator('div')
    .click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Toggle theme' }).click();
  await page.getByLabel('Toggle theme').click();
  await page.getByLabel('Toggle theme').click();
  await page.getByRole('button', { name: 'Toggle theme' }).click();
  await page.locator('html').click();
  await page.getByLabel('Toggle theme').click();
  await page.locator('div > div > div > div').first().click();
});
