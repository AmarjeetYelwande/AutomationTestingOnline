import { expect } from '@playwright/test';
import { When, Then } from './fixtures';

When('I enter my {string} {string} {string} {string} {string} on enquiry form', async ({ page },
    Name: string, Email: string, Phone: string, Subject: string, Message: string) => {
    await page.getByTestId('ContactName').fill(Name);
    await page.getByTestId('ContactEmail').fill(Email);
    await page.getByTestId('ContactPhone').fill(Phone);
    await page.getByTestId('ContactSubject').fill(Subject);
    await page.getByTestId('ContactDescription').fill(Message);
});

When('I click button submit', async ({ page },) => {
    await page.locator("//button[@id='submitContact']").click();
    await page.waitForTimeout(5000);
});

Then('I see {string} on landing page', async ({ page }, Subject: string) => {
    const isTextVisible = await page.getByText(Subject).isVisible();
    expect(isTextVisible).toBeTruthy();
});


