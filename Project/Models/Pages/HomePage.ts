import { expect, Page } from '@playwright/test'
import { WebElement, Button } from '../Components/Basics'
import { NavigationBar } from '../Components/Conformed'


interface PageInterface {
    checkExpectedUrlPath(path: string):void
    checkAllElementsAreVisible(): void
}

export class HomePage implements PageInterface {
    readonly page: Page
    readonly navigationBar: NavigationBar
    readonly startExploringButton: Button

    constructor(page: Page) {
        this.page = page
        this.navigationBar = new NavigationBar(page, page.locator('nav.MuiAppBar-root'))
        this.startExploringButton = new Button(page, page.locator('a[href="/explore"]'))
    }

    checkExpectedUrlPath(path: string) {
        expect(new URL(this.page.url()).pathname).toBe(path);
    }

    async checkAllElementsAreVisible() {
        await this.startExploringButton.isVisible();
        await this.navigationBar.isVisible()
    }
}

