import BaseComponent from './BaseComponent'

class Button extends BaseComponent {

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

export default Button