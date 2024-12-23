const { chromium } = require('playwright');

(async () => {

  const browser = await chromium.launch({ headless: false });  
  const page = await browser.newPage();

  await page.goto('https://youtube.com');

  console.log(await page.title());

})();
