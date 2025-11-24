import { test, expect } from '@playwright/test';

test('Login with correct credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  // Verify success message
  const flash = page.locator('#flash');
  await expect(flash).toContainText('You logged into a secure area!');
});
