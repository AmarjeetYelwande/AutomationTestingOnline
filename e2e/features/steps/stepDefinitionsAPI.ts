import { expect } from '@playwright/test';
import { createRequire } from 'node:module';
import { When, Then } from './fixtures';
//const branding = createRequire(import.meta.url)("../Data/branding.json");
//const roomSchema = createRequire(import.meta.url)("../Data/roomSchema.json");
import { Ajv } from 'ajv';
const ajv = new Ajv();
let responseBody: any;
let response: any;

When('I send a GET request to {string} API', async ({ request }, Api_Endpoint: string) => {
    response = await request.get(Api_Endpoint)
});

Then('The response I get matches with expected response specified in the json file {string}', async ({ }, json: any) => {
    const branding = createRequire(import.meta.url)("../Data/" + json + ".json");
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    responseBody = await response.json()
    expect(JSON.stringify(responseBody)).toEqual(JSON.stringify(branding))
    response.close;
});

Then('The response for rooms matches with schema specified in the json file {string}', async ({ }, json: any) => {
    const roomSchema = createRequire(import.meta.url)("../Data/" + json + ".json");
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    responseBody = await response.json();
    console.log(typeof responseBody);
    const firstElement = await responseBody.rooms[0];
    console.log(firstElement);
    const isSchemaValid = ajv.validate(roomSchema, firstElement);
    if (!isSchemaValid) console.log(ajv.errors);
    expect(isSchemaValid).toBeTruthy();
}); 