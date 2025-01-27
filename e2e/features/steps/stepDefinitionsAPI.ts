import { expect } from '@playwright/test';
import { createRequire } from 'node:module';
import { When, Then } from './fixtures';
import { Ajv } from 'ajv';
const ajv = new Ajv();
let responseBody: any;
let response: any;

When('I send a GET request to {string} API', async ({ request }, Api_Endpoint: string) => {
    response = await request.get(Api_Endpoint)
});

Then('The response I get matches with expected response specified in the json file {string} with response code {string}', async ({ },
    json: any, responseCode: string) => {
    const expectedResponse = createRequire(import.meta.url)("../data/" + json + ".json");
    expect(response.status()).toBe(parseInt(responseCode));
    responseBody = await response.json()
    expect(JSON.stringify(responseBody)).toEqual(JSON.stringify(expectedResponse))
    response.close;
});

Then('The response for rooms matches with schema specified in the json file {string}', async ({ },
    json: any) => {
    const roomSchema = createRequire(import.meta.url)("../data/" + json + ".json");
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    responseBody = await response.json();
    const firstElement = await responseBody.rooms[0];
    const isSchemaValid = ajv.validate(roomSchema, firstElement);
    if (!isSchemaValid) console.log(ajv.errors);
    expect(isSchemaValid).toBeTruthy();
    response.close;
});

When('I send a POST request to {string} API with data from the json file {string}', async ({ request },
    Api_Endpoint: string, json: any) => {
    const postRequestData = createRequire(import.meta.url)("../data/" + json + ".json");
    response = await request.post(Api_Endpoint, {
        data: postRequestData
    });
});

//Due to some reason when request is sent from playwright error 403 is returned.
//So using alternate approach to send request using fetch
// When('I send a POST request to {string} API with data from the json file {string}', async ({ request },
//     Api_Endpoint: string, json: any) => {
//     const endpoint = "https://automationintesting.online" + Api_Endpoint;
//     const postRequestData = createRequire(import.meta.url)("../data/" + json + ".json");
//     response = await fetch(endpoint, {
//         method: "POST",
//         body: JSON.stringify(postRequestData),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8",
//         },
//     });
//     //const data1 = await response.js
//     // on();
//     console.log(response.status);
// });

