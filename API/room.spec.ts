import room from './Data/room.json'
import { test, expect } from '@playwright/test';

test('should be able to create a booking', async ({ request }) => {
    const response = await request.post("/room")
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody).toEqual(room);
});
