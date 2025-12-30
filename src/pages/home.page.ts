
import { Page } from '@playwright/test'
import { Button } from '../core/elements/button'
import { NavigationBar } from '../components/navigationBar.component'
import { BasePage } from '../core/basePage'

export class HomePage extends BasePage {
    readonly navigationBar: NavigationBar
    readonly startExploringButton: Button

    constructor(page: Page) {
        super(page)
        this.navigationBar = new NavigationBar(page.locator('nav.MuiAppBar-root'),
            {
                buttons: {
                    logo: 'img[title="Cnarios logo"]',
                    features: 'a[href="/#features"]',
                    howItWorks: 'a[href="/#how-it-works"]',
                    contact: 'a[href="/#contact-us"]',
                    blog: 'a[href="/blogs"]',
                },
            }
        )
        this.startExploringButton = new Button(page.locator('a[href="/explore"]'))
    }
}

        // this.logo = new WebElement(page.locator("img[title='Cnarios logo']").first())
        // this.buttons = {
        //     features: new Button(page.locator('nav.MuiAppBar-root a[href="/#features"]')),
        //     howItWorks: new Button(page.locator('nav.MuiAppBar-root a[href="/#how-it-works"]')),
        //     contactUs: new Button(page.locator('nav.MuiAppBar-root a[href="/#contact-us"]')),
        //     blog: new Button(page.locator('nav.MuiAppBar-root a[href="/#blogs"]')),
        // }