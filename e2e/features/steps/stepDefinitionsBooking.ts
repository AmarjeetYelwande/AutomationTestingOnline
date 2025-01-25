import { expect } from '@playwright/test';
import { When, Then } from './fixtures';
import { getDateAndYear } from '../../Utilities/getDateAndYear';

When('I select my desired booking date todo', async ({ page },) => {
    await page.goto('https://automationintesting.online/');
    await page.locator('.col-sm-7 > .btn').first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator("(//div[@aria-label='Month View']/div[@class='rbc-month-row'])[2]/div[@class='rbc-row-bg']/div[@class='rbc-day-bg'][1]").dblclick();
    await page.getByPlaceholder('Firstname').fill('Amarjeet');
    await page.getByPlaceholder('Lastname').fill('Yelwade');
    await page.locator('input[name="email"]').fill('test@nai.com');
    await page.locator('input[name="phone"]').fill('07448302091');
    await page.getByRole('button', { name: 'Book', exact: true }).click();
    await page.getByText('Congratulations! Your booking').click();
    await page.getByRole('button', { name: 'Close' }).click();
});

When('I select first room form the list of available rooms', async ({ page },) => {
    await page.locator('.col-sm-7 > .btn').first().click();
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

When('I click book my room button I get current month calender', async ({ page },) => {
    await page.locator("//button[normalize-space()='Book this room'][1]").first().click();
    const isTextVisible = await page.getByText(getDateAndYear(0)).isVisible();
    expect(isTextVisible).toBeTruthy();
});

When('I click next button I get next month calender', async ({ page },) => {
    await page.getByRole('button', { name: 'Next' }).click();
    const isTextVisible = await page.getByText(getDateAndYear(1)).isVisible();
    expect(isTextVisible).toBeTruthy();
});

When('I click back button I get previous month calender', async ({ page },) => {
    await page.getByRole('button', { name: 'Today' }).click();
    await page.getByRole('button', { name: 'Back' }).click();
    const isTextVisible = await page.getByText(getDateAndYear(-1)).isVisible();
    expect(isTextVisible).toBeTruthy();
});

When('I click today button I get current month calender', async ({ page },) => {
    await page.getByRole('button', { name: 'Today' }).click();
    const isTextVisible = await page.getByText(getDateAndYear(0)).isVisible();
    expect(isTextVisible).toBeTruthy();
});