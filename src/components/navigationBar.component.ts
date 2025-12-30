import { Page, Locator } from '@playwright/test'
import { Button } from '../core/elements/button';
import { WebElement } from '../core/elements/webElement';

type NavigationBarConfig = {
    buttons: Record<string, string>
}

export class NavigationBar extends WebElement {

    readonly buttons: Record<string, Button> = {}

    constructor(root: Locator, config: NavigationBarConfig) {
        super(root)
        for (const [name, selector] of Object.entries(config.buttons)) {
            this.buttons[name] = new Button(root.locator(selector))
        }

    }
}