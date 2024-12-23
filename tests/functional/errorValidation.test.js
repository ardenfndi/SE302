const { test, expect } = require('@playwright/test');

test('Functional Test: Is error validation working?', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('');
    await page.locator('button').click();
    await expect(page.locator('.flash.error')).toContainText('Your username is invalid!');
});
