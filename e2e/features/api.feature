Feature: API tests for automationInTesting.online
    Scenario: API test for enquiry form
        When I send a GET request to "/branding" API
        Then The response I get matches with expected response specified in the json file "contactDetails" with response code "200"
    Scenario: API test for getting rooms
        When I send a GET request to "/room" API
        Then The response for "rooms" matches with schema specified in the json file "roomSchema"

    Scenario: Get booked dates for a room
        When I send a GET request to "/report/room/1" API
        Then The response for "report" matches with schema specified in the json file "bookedDatesSchema"

    @skip
    # When request is sent from playwright the postal denies it with 403 error
    # Same request sent from postman works fine. So skipping this test
    Scenario: API test for booking room
        When I send a POST request to "/booking" API with data from the json file "bookingData"
        Then The response I get matches with expected response specified in the json file "bookingResponse201" with response code "201"
        # Resend the same request for already booked room. We expect 409 response code which is conflict
        When I send a POST request to "/booking" API with data from the json file "bookingData"
        Then The response I get matches with expected response specified in the json file "bookingResponse409" with response code "409"