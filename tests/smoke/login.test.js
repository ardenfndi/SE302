const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');

test('Smoke Test: The user can log in.', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://the-internet.herokuapp.com/login'); 
    await loginPage.login('tomsmith', 'SuperSecretPassword!');  
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure'); 
    await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
});
