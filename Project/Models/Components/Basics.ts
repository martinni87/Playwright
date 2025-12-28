import { expect, Page, Locator } from '@playwright/test'

export class WebElement {
    protected readonly page: Page
    protected readonly locator: Locator

    constructor(page: Page, locator: Locator) {
        this.page = page
        this.locator = locator
    }

    async isVisible() {
        expect(await this.locator.isVisible()).toBe(true)
    }

    async isEnabled() {
        expect(await this.locator.isEnabled()).toBe(true)
    }
}

export class Button extends WebElement {

    constructor(page: Page, locator: Locator) {
        super(page, locator)
    }

    async click() {
        await this.locator.click()
    }

    async hover() {
        await this.locator.hover()
    }
}

