import { expect } from '@playwright/test';
import { When, Then } from './fixtures';

When('I select my desired booking date', async ({ page },) => {
    await page.locator('.col-sm-7 > .btn').first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('.rbc-row-bg > div:nth-child(7)').first().click();
});

When('I enter my {string} {string} {string} {string} on booking form', async ({ page },
    FirstName: string, LastName: string, Email: string, Phone: string) => {
    await page.getByPlaceholder('Firstname').fill(FirstName);
    await page.getByPlaceholder('Lastname').fill(LastName);
    await page.locator('input[name="email"]').fill(Email);
    await page.locator('input[name="phone"]').fill(Phone);
});

When('I click submit button', async ({ page },) => {
    await page.getByRole('button', { name: 'Book', exact: true }).click();
    await page.waitForTimeout(5000);
});

Then('I get {string} about my booking', async ({ page }, Information_Message: string) => {
    const isTextVisible = await page.getByText(Information_Message).first().isVisible();
    expect(isTextVisible).toBeTruthy();
});


