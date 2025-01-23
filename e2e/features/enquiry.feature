Feature: Send enquiry about room booking
    Scenario Outline: Verify all Form submission fields
        Given I am on automationInTesting.online home page
        When I enter my "<Name>" "<Email>" "<Phone>" "<Subject>" "<Message>" on enquiry form
        And I click button submit
        Then I see "<Information_Message>" on landing page
        Examples:
            | No | Description        | Name        | Email           | Phone       | Subject      | Message                     | Information_Message                         |
            | 1  | Happy path         | Steve Smith | steve@email.com | 07440000000 | Room Booking | I would like to book a room | Room Booking                                |
            | 2  | Wrong Phone number | Steve Smith | steve@email.com | 7440000000  | Room Booking | I would like to book a room | Phone must be between 11 and 21 characters. |
