Feature: Book room
    Scenario: Book room with valid/invalid details
        Given I am on automationInTesting.online home page
        When I select my desired booking date
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




