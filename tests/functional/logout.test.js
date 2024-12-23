const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');

test('Functional Test: User can logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://the-internet.herokuapp.com/login');
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await page.locator('.icon-2x.icon-signout').click(); 
    await expect(page.locator('.flash.success')).toContainText('You logged out of the secure area!');
});
