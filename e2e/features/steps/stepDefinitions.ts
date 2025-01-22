import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';

Given('I am on automationInTesting.online home page', async ({ page }) => {
    await page.goto('');
    // Acknowledge the configuration dialog,as we are not testing the dialog.
    await page.getByRole('button', { name: 'Let me hack!' }).click();
});


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


