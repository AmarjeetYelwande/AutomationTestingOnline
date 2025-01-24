Feature: API tests for automationInTesting.online
    Scenario: API test for enquiry form
        When I send a GET request to "/branding" API
        Then The response I get matches with expected response specified in the json file "branding"

    Scenario: API test for getting rooms
        When I send a GET request to "/room" API
        Then The response for rooms matches with schema specified in the json file "roomSchema"