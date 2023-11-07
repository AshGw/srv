import { test, expect } from '@playwright/test';
import env from '@/lib/env'

test('test', async ({ page }) => {
  await page.goto(env.public.URLs.SITE);
});
