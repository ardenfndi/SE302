const { test, expect } = require('@playwright/test');

test('Functional Test: Dynamic loading works', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    await page.locator('button').click();

    const loadedText = page.locator('#finish h4');
    await loadedText.waitFor({ state: 'visible' });

    await expect(loadedText).toHaveText('Hello World!');
});
