import { Given } from './fixtures';

Given('I am on automationInTesting.online home page', async ({ page }) => {
    await page.goto('');
    // Close the configuration dialog,as we are not testing the dialog.
    await page.getByRole('button', { name: 'Let me hack!' }).click();
});