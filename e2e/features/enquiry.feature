Feature: Send enquiry about room booking

    Scenario Outline: Form submission fields
        Given I am on automationInTesting.online home page
        When I enter my "<Name>" "<Email>" "<Phone>" "<Subject>" "<Message>" on enquiry form
        And I click button submit
        Then I see "<Subject>" on landing page
        Examples:
            | Name        | Email           | Phone       | Subject      | Message                     |
            | Steve Smith | steve@email.com | 07440000000 | Room Booking | I would like to book a room |