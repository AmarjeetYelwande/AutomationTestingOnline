import { expect } from '@playwright/test';
import { createRequire } from 'node:module';
import { When, Then } from './fixtures';
import { Ajv } from 'ajv';
import { executeShellScript } from '../../utilities/executeShellScript';
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

Then('The response for {string} matches with schema specified in the json file {string}', async ({ },
    rooms: any, json: any,) => {
    let firstElement: unknown;
    const roomSchema = createRequire(import.meta.url)("../data/" + json + ".json");
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    responseBody = await response.json();
    if (json === 'roomSchema') {
        expect(responseBody.rooms.length).toBeGreaterThan(0);
        firstElement = await responseBody.rooms[0];
    } else {
        expect(responseBody.report.length).toBeGreaterThan(0);
        firstElement = await responseBody.report[0];
    }
    const isSchemaValid = ajv.validate(roomSchema, firstElement);
    if (!isSchemaValid) console.log(ajv.errors);
    expect(isSchemaValid).toBeTruthy();
    response.close;
});

// // Due to some reason when request is sent from playwright error 403 is returned.
// When('I send a POST request to {string} API with data from the json file {string}', async ({ request },
//     Api_Endpoint: string, json: any) => {
//     console.log(Api_Endpoint);
//     console.log(json);
//     const postRequestData = createRequire(import.meta.url)("../data/" + json + ".json");
//     response = await request.post(Api_Endpoint, {
//         data: postRequestData
//     });
//     console.log(request);
//     console.log(response);
// });

//Due to some reason when request is sent from playwright error 403 is returned.
//So using alternate approach to send request using shell script. Axios and fetch also not working.
When('I send a POST request to {string} API with data from the json file {string}', async ({ request },
    Api_Endpoint: string, json: object) => {
    const data = {
        "bookingdates": {
            "checkin": "2025-01-08",
            "checkout": "2025-01-09"
        },
        "depositpaid": false,
        "firstname": "Amarjeet",
        "lastname": "Yelwande",
        "roomid": 1,
        "email": "yelwande@yahoo.com",
        "phone": "07448302090"
    };

    // Works with postman collection
    response = await executeShellScript("newman run ./e2e/features/data/AutomationOnline.postman_collection.json  --reporters html,cli");
    console.log(response);
});

