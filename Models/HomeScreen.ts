import { test, expect, Page, Locator } from '@playwright/test'
import Button from './Components/Button'

export class HomeScreen {
    readonly page: Page
    readonly startExploringButton: Button

    constructor(page: Page) {
        this.page = page
        this.startExploringButton = new Button(this.page, this.page.locator('a[href="/explore"]'))
    }
}

