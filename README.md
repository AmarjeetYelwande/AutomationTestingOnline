# AutomationTestingOnline

Test the website AutomationTesting.online using Playwright

## High level requirements

- You are able to book room on your desired date(s)
- You can select facilities available in a room like TV,Wifi,Safe etc.
- If you have any questions about booking, you can send enquiry to the management.
- You can view the location of the hotel in google map.
  
## Following bugs are present in the booking application

### Configuration page

    - You are allowed to create multiple rooms with same ID / type etc.
    - Room ID is not unique and can contain text / special characters of unique numbers.

### Booking selection

    - Booking is allowed even if date is elapsed
    - Irrespective of the whether booking information is correct / incorrect you get
      a message 'must not be null' on booking landing page. So booking is never successful.    
    - When no data is supplied in forms, you get message without mention of the specific field where validation has failed   
    
## Execute following commands to setup and test the project in sequence

    - npm install -g node 
    - npm install
    - npm install -D @playwright/test@latest
    - npx playwright install --with-deps
    - npx playwright --version
    - npm run test
    - npx playwright show-report
  
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
        