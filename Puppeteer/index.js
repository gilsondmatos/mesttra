require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });

    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto('https://app.mesttra.com');

    await page.type('[name="login"]', 'gilsondmatos@hotmail.com');
    await page.type('[name="password"]', '39124520837');

    await page.click('[name="submit"]');

    await page.waitForNavigation();
    //await browser.close();
})();
