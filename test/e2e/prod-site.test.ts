import { test, expect } from '@playwright/test';
import Public from '../../public/consts';

test('test', async ({ page }) => {
  await page.goto(Public.URLs.URL as string);
});
