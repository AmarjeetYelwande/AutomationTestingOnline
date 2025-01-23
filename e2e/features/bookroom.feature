Feature: Book room
    Scenario: Book room with valid/invalid details
        Given I am on automationInTesting.online home page
        When I select my desired booking date
        And I enter my "<FirstName>" "<LastName>" "<Email>" "<Phone>" on booking form
        And I click submit button
        Then I get "<Information_Message>" about my booking
        Examples:
            | No | Description        | Name        | Email           | Phone       | Information_Message            |
            | 1  | Happy path         | Steve Smith | steve@email.com | 07440000000 | must not be null               |
            | 2  | Wrong Phone number | Steve Smith | steve@email.com | 7440000000  | size must be between 11 and 21 |

