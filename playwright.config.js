const config = {
    reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]], 
    use: {
        headless: true, 
        baseURL: 'https://the-internet.herokuapp.com/', 
    },
    projects: [
        { name: 'Chromium', use: { browserName: 'chromium' } },
        { name: 'Firefox', use: { browserName: 'firefox' } },
        { name: 'WebKit', use: { browserName: 'webkit' } },
    ],
};
module.exports = config;