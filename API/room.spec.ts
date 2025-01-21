import { test, expect } from '@playwright/test';
import { createRequire } from 'node:module';
const room = createRequire(import.meta.url)("./Data/room.json");
const schema = createRequire(import.meta.url)("./Data/schema.json");
import { Ajv } from 'ajv';
const ajv = new Ajv();
ajv.addKeyword("optional");

test('should be able to create a booking', async ({ request }) => {
    const response = await request.get("/room/1");
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(JSON.stringify(responseBody)).toContain(JSON.stringify(room));
    const isvalid = ajv.validate(schema, responseBody);
    if (!isvalid) console.log(ajv.errors);
    expect(isvalid).toBeTruthy();
});

