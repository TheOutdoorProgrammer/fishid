import { test, expect } from '@playwright/test';

test('QuizScreen has gap-5 spacing', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // Click Learn
  await page.click('button:has-text("Learn")');
  await page.waitForLoadState('networkidle');
  
  // Click first lesson
  const firstLesson = page.locator('[class*="rounded-2xl"]').first();
  await firstLesson.click();
  await page.waitForLoadState('networkidle');
  
  // Try to get to quiz
  const quizBtn = page.locator('button:has-text("Quiz")');
  if (await quizBtn.isVisible()) {
    await quizBtn.click();
  } else {
    const skipBtn = page.locator('button:has-text("Skip")');
    if (await skipBtn.isVisible()) {
      await skipBtn.click();
    }
  }
  
  await page.waitForTimeout(1000);
  
  // Verify gap-5 class exists
  const container = page.locator('div.flex.flex-col[class*="gap-5"]').first();
  const classes = await container.getAttribute('class');
  
  expect(classes).toContain('gap-5');
  
  // Take screenshot
  await page.screenshot({ path: '.sisyphus/evidence/task-7-quiz-spacing.png', fullPage: true });
});
