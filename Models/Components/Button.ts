import { test, expect, Page, Locator } from '@playwright/test'
import BaseComponent from './BaseComponent'

export default class Button extends BaseComponent {

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