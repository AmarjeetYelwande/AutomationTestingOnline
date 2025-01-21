import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('');
    await page.locator('.col-sm-7 > .btn').first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('.rbc-row-bg > div:nth-child(7)').first().click();
    await page.getByPlaceholder('Firstname').click();
    await page.getByPlaceholder('Firstname').fill('Steve');
    await page.getByPlaceholder('Lastname').fill('Smith');
    await page.locator('input[name="email"]').fill('test@steve.com');
    await page.locator('input[name="phone"]').fill('07345638970');
    await page.getByRole('button', { name: 'Book', exact: true }).click();
    await page.waitForTimeout(5000);
    const isTextVisible = await page.getByText('must not be null').first().isVisible();
    expect(isTextVisible).toBeTruthy();
});