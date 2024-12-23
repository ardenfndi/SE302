const { test, expect } = require('@playwright/test');

test('Smoke Test: Is the page loading?', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveTitle('The Internet');
});
