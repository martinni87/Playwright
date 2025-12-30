import { expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

export class HomeAssertions {
  constructor(private readonly home: HomePage) { }

  async allElementsVisible() {
    expect(await this.home.startExploringButton.isVisible()).toBe(true);
    expect(await this.home.navigationBar.isVisible()).toBe(true);
    expect(await this.home.navigationBar.buttons.logo.isVisible()).toBe(true);
    expect(await this.home.navigationBar.buttons.features.isVisible()).toBe(true);
    expect(await this.home.navigationBar.buttons.howItWorks.isVisible()).toBe(true);
    expect(await this.home.navigationBar.buttons.contact.isVisible()).toBe(true);
    expect(await this.home.navigationBar.buttons.blog.isVisible()).toBe(true);
  }

  async urlIs(path: string) {
    expect(await this.home.currentPath()).toBe(path);
  }
}
