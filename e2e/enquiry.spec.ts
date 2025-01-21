import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://automationintesting.online/');
    await page.getByRole('button', { name: 'Let me hack!' }).click();
    await page.getByTestId('ContactName').click();
    await page.getByTestId('ContactName').fill('Steve Smith');
    await page.getByTestId('ContactEmail').click();
    await page.getByTestId('ContactEmail').fill('steve@email.com');
    await page.getByTestId('ContactPhone').click();
    await page.getByTestId('ContactPhone').fill('07448309032');
    await page.getByTestId('ContactSubject').click();
    await page.getByTestId('ContactSubject').fill('Room booking');
    await page.getByTestId('ContactDescription').click();
    await page.getByTestId('ContactDescription').fill('Dear Support,\n\nI need to book room with your hotel. Please guide me how to.\n\nRegards,\n\nSteve');
    await page.locator("//button[@id='submitContact']").click();
    await page.waitForTimeout(5000);
    const isTextVisible = await page.getByText('We\'ll get back to you about').isVisible();
    expect(isTextVisible).toBeTruthy();

});
