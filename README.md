# AutomationTestingOnline

Test the website AutomationTesting.online using Playwright

## High level requirements

- You are able to book room on your desired date(s)
- You can select facilities available in a room like TV,Wifi,Safe etc.
- If you have any questions about booking, you can send enquiry to the management.
- You can view the location of the hotel in map.
## Following bugs are present in the booking application

### Configuration page ( * not covered by automation tests )

    - You are allowed to create multiple rooms with same ID / type etc.
    - Room iD is not unique and can contain text as ID instead of strict numbers.

### Booking selection

    - Booking is allowed even if you do not select the date.
    - Irrespective of the whether booking information is correct / incorrect you get
      a message 'must not be null' on booking landing page. So booking is never successful.
    - Booking is allowed for elapsed dates which is not expected.
    - There is no way user is informed which date they have selected when submitting form.
    - Email in wrong format is accepted. 
    - Telephone number with characters is accepted.
    - You can't select continuous two or more dates.