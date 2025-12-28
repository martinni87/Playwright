import { test, expect, Page, Locator } from '@playwright/test';
import { HomeScreen } from '../Models/HomeScreen';

class Site {
  url: string
  title: string

  constructor(url: string, title: string) {
    this.url = url
    this.title = title
  }

  get urlObject(): URL {
    return new URL(this.url)
  }
}

const baseSite = new Site('https://www.cnarios.com', 'Cnarios | Free Real-World Automation Testing Practice')

const accessUrl = async (page: Page, site: Site) => {
  await page.goto(site.url)
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(site.title)
  await expect(page).toHaveURL(site.url)
}

test('User access to the website correctly', async ({ page }) => {
  await accessUrl(page, baseSite)
});

test('User "Start Exploring"', async ({ page }) => {
  await accessUrl(page, baseSite)
  const homeScreen = new HomeScreen(page)
  expect(await homeScreen.startExploringButton.isVisible()).toBe(true);
  await homeScreen.startExploringButton.click()
  expect(new URL(page.url()).pathname).toBe('/explore');
})