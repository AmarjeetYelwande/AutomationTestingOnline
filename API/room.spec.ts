import { test, expect } from '@playwright/test';
import { createRequire } from 'node:module';
const schema = createRequire(import.meta.url)("./Data/schema.json");
import { Ajv } from 'ajv';
const ajv = new Ajv();

test('Validate schema of the room', async ({ request }) => {
    const response = await request.get("/room");
    const responseBody = await response.json();
    const firstElement = responseBody.rooms[0];
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const isSchemaValid = ajv.validate(schema, firstElement);
    if (!isSchemaValid) console.log(ajv.errors);
    expect(isSchemaValid).toBeTruthy();
});

