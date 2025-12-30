import { test, expect, Page, Locator } from '@playwright/test'
import { HomePage } from '../../src/pages/home.page'
import { Site } from '../../src/core/site'
import { HomeAssertions } from '../../src/assertions/home.assertions'

const site = new Site('https://www.cnarios.com', 'Cnarios | Free Real-World Automation Testing Practice')

test.beforeEach(async ({ page }) => {
  await site.open(page)
})

test('Home page loads correctly', async ({ page }) => {
  const home = new HomePage(page)
  const assert = new HomeAssertions(home)
  await assert.allElementsVisible()
})

test('User starts exploring', async ({ page }) => {
  const home = new HomePage(page)
  const assert = new HomeAssertions(home)
  await home.startExploringButton.click()
  await assert.urlIs('/explore')
})