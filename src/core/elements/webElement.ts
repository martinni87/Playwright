import { Locator } from '@playwright/test'

export class WebElement {

    constructor(protected readonly locator: Locator) { }

    async isVisible() {
        return await this.locator.isVisible()
    }

    async isEnabled() {
        return await this.locator.isEnabled()
    }
}