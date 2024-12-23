const { test, expect } = require('@playwright/test');

test('Functional Test: Is drag and drop working?', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    const boxA = page.locator('#column-a');
    const boxB = page.locator('#column-b');
    await boxA.dragTo(boxB); 
    await expect(boxA).toHaveText('B'); 
});
