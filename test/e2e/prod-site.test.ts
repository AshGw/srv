import { test, expect } from '@playwright/test';
import env from '../../src/lib/env';

test('test', async ({ page }) => {
  const site = env.public.URLs.SITE;
  await page.goto(site);
});
