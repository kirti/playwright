import { test, expect } from '@playwright/test';

test('Google Search works', async ({ page }) => {
  // NCR = "No Country Redirect" → Avoids EU/Region consent screens
  await page.goto('https://www.google.com/ncr');

  // If consent screen still appears (rare), click it
  const buttons = page.locator('button');

  if (await buttons.filter({ hasText: 'I agree' }).first().isVisible()) {
    await buttons.filter({ hasText: 'I agree' }).first().click();
  }
  if (await buttons.filter({ hasText: 'Accept all' }).first().isVisible()) {
    await buttons.filter({ hasText: 'Accept all' }).first().click();
  }
  if (await buttons.filter({ hasText: 'Accept' }).first().isVisible()) {
    await buttons.filter({ hasText: 'Accept' }).first().click();
  }

  // Locate the search box
  const searchBox = page.locator('input[name="q"]');
  await searchBox.waitFor({ state: 'visible', timeout: 15000 });

  // Type search query
  await searchBox.fill('Playwright testing');
  await page.keyboard.press('Enter');

  // Wait for results
  await page.locator('#search').waitFor({ timeout: 15000 });

  // Assert first result exists
  const firstResult = page.locator('h3').first();
  await expect(firstResult).toBeVisible();
});
