const { test, expect } = require('@playwright/test');

test('Functional Test: Hover over elements works', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    
    const avatar = page.locator('.figure').first();
    await avatar.hover();

    const tooltip = avatar.locator('.figcaption h5');
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveText('name: user1'); 
});
