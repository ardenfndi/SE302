const { test, expect } = require('@playwright/test');

test('Functional Test: Sample functional test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveTitle('The Internet');
});
