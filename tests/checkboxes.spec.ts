import { test, expect } from '@playwright/test';

test('Check and uncheck checkboxes', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkboxes = page.locator('input[type="checkbox"]');
  await expect(checkboxes.nth(0)).not.toBeChecked();
  await checkboxes.nth(0).check();
  await expect(checkboxes.nth(0)).toBeChecked();
});
