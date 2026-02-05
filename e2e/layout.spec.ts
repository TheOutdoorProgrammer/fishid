import { test, expect } from '@playwright/test';

test('bottom content should not be overlapped by bottom nav', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.waitForSelector('button:has-text("Learn")');
  await page.click('button:has-text("Learn")');

  const lastLessonCard = page.locator('.grid > div').last();
  await lastLessonCard.waitFor();

  const main = page.locator('main');

  const mainBox = await main.boundingBox();
  console.log('Main element:', mainBox);

  const viewportSize = page.viewportSize();
  console.log('Viewport:', viewportSize);

  await main.evaluate((el) => {
    el.scrollTop = el.scrollHeight;
  });

  await page.waitForTimeout(500);

  const scrollInfo = await main.evaluate((el) => ({
    scrollTop: el.scrollTop,
    scrollHeight: el.scrollHeight,
    clientHeight: el.clientHeight,
  }));
  console.log('Scroll info:', scrollInfo);

  const cardBox = await lastLessonCard.boundingBox();
  const bottomNav = page.locator('.fixed.bottom-0');
  const navBox = await bottomNav.boundingBox();

  if (!cardBox || !navBox) {
    throw new Error('Could not find bounding box for card or nav');
  }

  const cardBottom = Math.round(cardBox.y + cardBox.height);
  const navTop = Math.round(navBox.y);
  const gap = navTop - cardBottom;

  console.log('Card:', { y: cardBox.y, height: cardBox.height, bottom: cardBottom });
  console.log('Nav:', { y: navBox.y, height: navBox.height, top: navTop });
  console.log('Gap:', gap);

  await page.screenshot({ path: '.sisyphus/evidence/fix-bottom-overlap.png', fullPage: false });

  expect(cardBottom).toBeLessThanOrEqual(navTop);
});
