import { expect, Page } from '@playwright/test';

export class Site {
    protected readonly url: string
    protected readonly title: string

    constructor(url: string, title: string) {
        this.url = url
        this.title = title
    }

    get getUrlObject(): URL {
        return new URL(this.url)
    }

    accessUrl = async (page: Page) => {
        await page.goto(this.url)
        await expect(page).toHaveTitle(this.title)
        await expect(page).toHaveURL(this.url)
    }
}