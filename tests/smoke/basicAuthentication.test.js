const { test, expect } = require('@playwright/test');

test('Smoke Test: Basic authentication works', async ({ page }) => {
    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    const content = page.locator('p');
    await expect(content).toHaveText('Congratulations! You must have the proper credentials.');
});
