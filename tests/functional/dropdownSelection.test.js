const { test, expect } = require('@playwright/test');

test('Functional Test: Dropdown selection works', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = page.locator('#dropdown');

    
    await dropdown.selectOption('2'); 
    const selectedValue = await dropdown.inputValue();
    expect(selectedValue).toBe('2'); 
});
