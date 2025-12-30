import { Page } from '@playwright/test';

export abstract class BasePage {
    constructor(protected readonly page: Page) { }

    currentPath(): string {
        return new URL(this.page.url()).pathname;
    }
}
