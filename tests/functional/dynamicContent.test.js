const { test, expect } = require('@playwright/test');

test('Functional Test: Dynamic content changes on refresh', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_content');
    const contentBefore = await page.locator('.large-10').first().textContent();
    await page.reload(); 
    const contentAfter = await page.locator('.large-10').first().textContent();
    expect(contentBefore).not.toBe(contentAfter); 
});
