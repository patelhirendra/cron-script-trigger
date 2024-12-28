const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        // Navigate to your URL
        await page.goto('https://cgvacancy.freesite.online/scraper.php', {
            waitUntil: 'networkidle2',
        });

        console.log('Pinged URL successfully');
    } catch (error) {
        console.error('Failed to ping the URL:', error);
    } finally {
        await browser.close();
    }
})();
