import { test, expect } from '@playwright/test';
import { createRequire } from 'node:module';
const room = createRequire(import.meta.url)("./Data/room.json");

test('should be able to create a booking', async ({ request }) => {
    const response = await request.get("/room/1")
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(JSON.stringify(responseBody)).toContain(JSON.stringify(room))
});
