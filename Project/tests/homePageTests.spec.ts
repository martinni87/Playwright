import { test, expect, Page, Locator } from '@playwright/test'
import { HomePage } from '../Models/Pages/HomePage'
import { Site } from '../Models/Base/Site'

const baseSite = new Site('https://www.cnarios.com', 'Cnarios | Free Real-World Automation Testing Practice')

test.beforeEach(async ({ page }) => {
  await baseSite.accessUrl(page)
})

test('All components at home screen are visible', async ({ page }) => {
  const homeScreen = new HomePage(page)
  await homeScreen.checkAllElementsAreVisible()
})

test('User "Start Exploring"', async ({ page }) => {
  const homeScreen = new HomePage(page)
  await homeScreen.startExploringButton.isVisible();
  await homeScreen.startExploringButton.click()
  homeScreen.checkExpectedUrlPath('/explore')
})