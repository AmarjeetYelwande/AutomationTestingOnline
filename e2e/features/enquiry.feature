Feature: Send enquiry about room booking
    @skip
    Scenario Outline: Verify all Form submission fields
        Given I am on automationInTesting.online home page
        When I enter my "<Name>" "<Email>" "<Phone>" "<Subject>" "<Message>" on enquiry form
        And I click button submit
        Then I see "<Information_Message>" on landing page
        Examples:
            | No | Description        | Name        | Email           | Phone       | Subject      | Message                     | Information_Message                             |
            | 1  | Happy path         | Steve Smith | steve@email.com | 07440000000 | Room Booking | I would like to book a room | Room Booking                                    |
            | 2  | Wrong Phone number | Steve Smith | steve@email.com | 7440000000  | Room Booking | I would like to book a room | Phone must be between 11 and 21 characters.     |
            | 3  | Empty Phone number | Steve Smith | steve@email.com |             | Room Booking | I would like to book a room | Phone may not be blank                          |
            | 4  | Wrong email        | Steve Smith | steve           | 07440000000 | Room Booking | I would like to book a room | must be a well-formed email address             |
            | 5  | Empty email        | Steve Smith |                 | 07440000000 | Room Booking | I would like to book a room | Email may not be blank                          |
            | 6  | Short subject      | Steve Smith | steve@email.com | 07440000000 | Book         | I would like to book a room | Subject must be between 5 and 100 characters.   |
            | 7  | Empty subject      | Steve Smith | steve@email.com | 07440000000 |              | I would like to book a room | Subject may not be blank                        |
            | 6  | Short message      | Steve Smith | steve@email.com | 07440000000 | Book         | I would                     | Message must be between 20 and 2000 characters. |
            | 7  | Empty message      | Steve Smith | steve@email.com | 07440000000 | Room Booking |                             | Message may not be blank                        |
