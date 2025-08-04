import { test, expect } from '@playwright/test'

test('front page can be opened', async ({ page }) => {
  await page.goto('')
  await expect(page.getByText('If it hurts, do it more often')).toBeVisible()
})
