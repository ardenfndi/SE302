const { test, expect } = require('@playwright/test');

test('Smoke Test: Does the 404 error page display correctly?', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/nonexistentpage');
    await expect(page.locator('h1')).toHaveText('Not Found');
});
