Feature: Book room
    Background: Visit automationInTesting.online home page
        Given I am on automationInTesting.online home page
    Scenario: Book room form validation
        When I select first room form the list of available rooms
        And I enter my "<FirstName>" "<LastName>" "<Email>" "<Phone>" on booking form
        And I click submit button
        Then I get "<Information_Message>" about my booking
        Examples:
            | No | Description        | FirstName | LastName | Email           | Phone       | Information_Message                 |
            | 1  | Happy path         | Steve     | Smith    | steve@email.com | 07440000000 | must not be null                    |
            | 2  | First Name empty   |           | Smith    | steve@email.com | 7440000000  | Firstname should not be blank       |
            | 3  | Last Name empty    | Steve     |          | steve@email.com | 7440000000  | Lastname should not be blank        |
            | 4  | Short first Name   | S         | Smith    | steve@email.com | 7440000000  | size must be between 3 and 18       |
            | 5  | Short Last Name    | Steve     | S        | steve@email.com | 7440000000  | size must be between 3 and 30       |
            | 6  | Email field empty  | Steve     | Smith    |                 | 7440000000  | must not be empty                   |
            | 7  | Wrong email format | Steve     | Smith    | @email.com      | 7440000000  | must be a well-formed email address |
            | 8  | Phone field empty  | Steve     | Smith    | steve@email.com |             | must not be empty                   |
            | 9  | Phone field wrong  | Steve     | Smith    | steve@email.com | 744         | size must be between 11 and 21      |
    Scenario: Month functionality for booking
        When I click book my room button I get current month calender
        When I click next button I get next month calender
        When I click back button I get previous month calender
        When I click today button I get current month calender
    @skip
    Scenario: Book room using calendar picker
        When I select my desired "<Booking_Date>"
        And I enter my "<FirstName>" "<LastName>" "<Email>" "<Phone>" on booking form
        And I click submit button
        Then I get "<Information_Message>" about my booking
        Examples:
            | No | Description  | Booking_Date  | FirstName | LastName | Email           | Phone       | Information_Message                                  |
            | 1  | Happy path 1 | December 2025 | Steve     | Smith    | steve@email.com | 07440000000 | Congratulations! Your booking has been confirmed for |
            | 2  | Happy path 2 | March 2026    | Steve     | Smith    | steve@email.com | 07440000000 | Congratulations! Your booking has been confirmed for |