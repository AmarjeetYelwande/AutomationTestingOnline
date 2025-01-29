import { expect } from '@playwright/test';
import { When, Then } from './fixtures';
import { getDateAndYearRelativeToCurrentDate } from '../../utilities/getMonthAndYear';
import { replaceCharacterInString } from '../../utilities/replaceCharacterInString';

When('I select my desired {string}', async ({ page },
    Booking_Month: string) => {
    await page.locator('.col-sm-7 > .btn').first().click();
    let isDesiredMonth = await page.getByText(Booking_Month).isVisible();
    while (!isDesiredMonth) {
        await page.getByRole('button', { name: 'Next' }).click();
        isDesiredMonth = await page.getByText(Booking_Month).isVisible();
    }
    // Its very difficult to get date on which has event. So selecting random date.
    // Selecting exact date is achieved using API Tests
    const dateCell = "(//div[@aria-label='Month View']/div[@class='rbc-month-row'])[3]/div[@class='rbc-row-bg']/div[@class='rbc-day-bg'][3]";
    const dateCell_row_2_to_4 = replaceCharacterInString(dateCell, 62, (Math.floor(Math.random() * 4) + 2).toString());
    const dateCell_final = replaceCharacterInString(dateCell_row_2_to_4, 115, (Math.floor(Math.random() * 7) + 1).toString());
    console.log(dateCell_final);
    await page.locator(dateCell_final).dblclick();
});

When('I select first room form the list of available rooms', async ({ page },) => {
    await page.locator('.col-sm-7 > .btn').first().click();
    await expect(page.locator('.rbc-calendar')).toBeVisible();
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
    const isTextVisible = await page.getByText(getDateAndYearRelativeToCurrentDate(0)).isVisible();
    expect(isTextVisible).toBeTruthy();
});

When('I click next button I get next month calender', async ({ page },) => {
    await page.getByRole('button', { name: 'Next' }).click();
    const isTextVisible = await page.getByText(getDateAndYearRelativeToCurrentDate(1)).isVisible();
    expect(isTextVisible).toBeTruthy();
});

When('I click back button I get previous month calender', async ({ page },) => {
    await page.getByRole('button', { name: 'Today' }).click();
    await page.getByRole('button', { name: 'Back' }).click();
    const isTextVisible = await page.getByText(getDateAndYearRelativeToCurrentDate(-1)).isVisible();
    expect(isTextVisible).toBeTruthy();
});

When('I click today button I get current month calender', async ({ page },) => {
    await page.getByRole('button', { name: 'Today' }).click();
    const isTextVisible = await page.getByText(getDateAndYearRelativeToCurrentDate(0)).isVisible();
    expect(isTextVisible).toBeTruthy();
});

