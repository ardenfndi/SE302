const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');

test('Functional Test: Invalid user login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://the-internet.herokuapp.com/login');
    await loginPage.login('invalidUser', 'wrongPassword!');
    await expect(page.locator('.flash.error')).toContainText('Your username is invalid!');
});
