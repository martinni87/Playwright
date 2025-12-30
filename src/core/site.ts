import { expect, Page } from '@playwright/test';

export class Site {

    constructor(
        private readonly url: string,
        private readonly title: string) { }

    get getUrlObject(): URL {
        return new URL(this.url)
    }

    async open(page: Page) {
        await page.goto(this.url)
        await expect(page).toHaveTitle(this.title)
    }
}