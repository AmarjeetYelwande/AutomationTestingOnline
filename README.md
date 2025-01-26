# AutomationTestingOnline

Test the website AutomationTesting.online using Playwright

## High level requirements

- You are able to book room on your desired date(s)
- You can select room with facilities available in a room like TV,Wifi,Safe etc.
- If you have any questions about booking, you can send enquiry to the management.
- You can view the location of the hotel in pigeon map.
  
## Following bugs are present in the booking application

### Configuration page

- You are allowed to create multiple rooms with same ID / type etc.
- Room ID is not unique and can contain text / special characters which is not expected.

### Booking selection

- Booking is allowed even if date is elapsed
- When booking is done without selecting dates, you get message "must not be null"      
- When no data is supplied in forms, you get message without mention of the specific field where validation has failed.- The message is generic like the length of the string should be between 5 and 20
  
## Execute following commands to setup and test the project in sequence

    npm install -g node 
    npm install
    npm install -D @playwright/test@latest
    npx playwright install --with-deps
    npx playwright --version
    npm run test
    npx playwright show-report
  
## Project structure tree

        /
        │   .gitignore
        │   package-lock.json
        │   package.json
        │   playwright.config.ts
        │   README.md
        │
        ├───.github
        │   └───workflows
        │           playwright.yml
        │
        ├───ci
        │       Jenkinsfile
        │
        └───e2e
            ├───features
            │   │   api.feature
            │   │   bookRoom.feature
            │   │   enquiry.feature
            │   │
            │   ├───data
            │   │       branding.json
            │   │       roomSchema.json
            │   │
            │   └───steps
            │           fixtures.ts
            │           stepDefinitionsAPI.ts
            │           stepDefinitionsBooking.ts
            │           stepDefinitionsCommon.ts
            │           stepDefinitionsEnquiry.ts
            │
            └───utilities
                    getDateAndYear.ts
        