//import branding from './Data/branding.json' assert { type: 'json' };
const branding = createRequire(import.meta.url)("./Data/branding.json");
import { test, expect } from '@playwright/test';
import { createRequire } from 'node:module';

test('should be able to create a booking', async ({ request }) => {
    const response = await request.get("/branding")
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody).toEqual(branding);
});