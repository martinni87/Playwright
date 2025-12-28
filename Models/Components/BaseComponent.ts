export default abstract class BaseComponent {
    protected readonly page: Page
    protected readonly locator: Locator

    constructor(page: Page, locator: Locator) {
        this.page = page
        this.locator = locator
    }

    async isVisible() {
        return this.locator.isVisible()
    }

    async isEnabled() {
        return this.locator.isEnabled()
    }
}