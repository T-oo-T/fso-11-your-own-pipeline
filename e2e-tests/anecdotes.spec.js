import { test, expect } from '@playwright/test'

// Added just minimal amount of tests to demonstrate CI/CD features, since this course isn't about testing
test('front page can be opened', async ({ page }) => {
  await page.goto('')
  await expect(page.getByText('If it hurts, do it more often')).toBeVisible()
})
