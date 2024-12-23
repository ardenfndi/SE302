const { test, expect } = require('@playwright/test');
const path = require('path');

test('Smoke Test: File upload works', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    const filePath = path.resolve(__dirname, 'sample.txt'); 
    await page.locator('#file-upload').setInputFiles(filePath); 
    await page.locator('#file-submit').click(); 
    await expect(page.locator('#uploaded-files')).toHaveText('sample.txt'); 
});
