const { test, expect } = require('@playwright/test');

test('Functional Test: Is the checkbox selection working?', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    const checkbox = page.locator('input[type="checkbox"]').first();
    await checkbox.check();
    await expect(checkbox).toBeChecked();
});
