import { WebElement } from './webElement'

export class Button extends WebElement {

    async click() {
        await this.locator.click()
    }

    async hover() {
        await this.locator.hover()
    }
}

