class DashboardPage {
    constructor(page) {
        this.page = page; 
        this.logoutButton = page.locator('#logout'); 
    }

    async logout() {
        await this.logoutButton.click();
    }
}

module.exports = { DashboardPage };
