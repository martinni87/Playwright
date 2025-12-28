import { expect, Page, Locator } from '@playwright/test'
import { WebElement, Button } from './Basics'

export class NavigationBar extends WebElement {

    readonly logo: WebElement
    readonly navigationButtons: Button[]
    // readonly navigationButtons: Record<string, Button>  = {}

    constructor(page: Page, locator: Locator) {
        super(page, locator)
        this.logo = new WebElement(page, page.locator("img[title='Cnarios logo']").first())
        // this.navigationButtons['features'] = new Button(page, page.locator('nav.MuiAppBar-root a[href="/#features"]'))
        // this.navigationButtons['howItWorks'] = new Button(page, page.locator('nav.MuiAppBar-root a[href="/#how-it-works"]'))
        // this.navigationButtons['contactUs'] = new Button(page, page.locator('nav.MuiAppBar-root a[href="/#contact-us"]'))
        // this.navigationButtons['blog'] = new Button(page, page.locator('nav.MuiAppBar-root a[href="/#blogs"]'))
        this.navigationButtons = [
            new Button(page, page.locator('nav.MuiAppBar-root a[href="/#features"]')),
            new Button(page, page.locator('nav.MuiAppBar-root a[href="/#how-it-works"]')),
            new Button(page, page.locator('nav.MuiAppBar-root a[href="/#contact-us"]')),
            new Button(page, page.locator('nav.MuiAppBar-root a[href="/blogs"]'))
        ]
    }

    override async isVisible(): Promise<void> {
        await super.isVisible()
        await this.logo.isVisible()

        await Promise.all(
            // Object.values(this.navigationButtons).map(button => button.isVisible())
            this.navigationButtons.map(button => button.isVisible())
        )
    }
}